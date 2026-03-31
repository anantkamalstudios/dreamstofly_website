import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Building2, Star, MapPin, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { searchHotels, getHotelImages } from "../../../../api/hotelApi";
import HotelFilterSidebar from "../components/HotelFilterSidebar";
import HotelBookingModal from "../components/HotelBookingModal";

const BOARD_LABELS = {
  RO: "Room Only",
  BB: "Bed & Breakfast",
  HB: "Half Board",
  FB: "Full Board",
  AI: "All Inclusive",
};

const CONVERSION_RATE = 108.6;

const formatPrice = (price, currency = "INR") => {
  if (price == null) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
};

const getStarCount = (categoryCode) => {
  if (!categoryCode) return 0;
  const match = categoryCode.match(/(\d)/);
  return match ? Number(match[1]) : 0;
};

const fixImageUrl = (url) => {
  if (!url) return "";
  return url.replace("http://", "https://");
};

/* ── Skeleton ── */
const HotelCardSkeleton = () => (
  <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden animate-pulse flex flex-col md:flex-row h-auto md:h-[280px]">
    <div className="md:w-[280px] h-[200px] md:h-full bg-neutral-200 flex-shrink-0"></div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="h-6 w-48 bg-neutral-200 rounded mb-2"></div>
          <div className="h-4 w-32 bg-neutral-200 rounded"></div>
        </div>
        <div className="text-right">
          <div className="h-8 w-24 bg-neutral-200 rounded mb-1 ml-auto"></div>
          <div className="h-3 w-16 bg-neutral-200 rounded ml-auto"></div>
        </div>
      </div>
      <div className="space-y-3 mt-auto">
        <div className="h-10 w-full bg-neutral-100 rounded-xl"></div>
        <div className="h-10 w-full bg-neutral-100 rounded-xl"></div>
      </div>
    </div>
  </div>
);

/* ── Room Rate Row ── */
const RateRow = ({ rate, onSelectRoom }) => {
  const isNonRefundable = rate.rateClass === "NRF";
  const priceINR = Math.round(Number(rate.net) * CONVERSION_RATE);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-medium text-white bg-blue-500 px-2 py-0.5 rounded-full">
            {BOARD_LABELS[rate.boardCode] || rate.boardCode}
          </span>
          {isNonRefundable ? (
            <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
              Non-refundable
            </span>
          ) : (
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Refundable
            </span>
          )}
          {rate.allotment != null && rate.allotment <= 5 && (
            <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
              Only {rate.allotment} left
            </span>
          )}
          {rate.promotions?.length > 0 && (
            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
              {rate.promotions[0].name}
            </span>
          )}
        </div>
        {rate.cancellationPolicies?.[0] && !isNonRefundable && (
          <p className="text-xs text-neutral-500 mt-1">
            Free cancellation before{" "}
            {new Date(rate.cancellationPolicies[0].from).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        )}
        {rate.taxes?.taxes?.length > 0 && (
          <p className="text-xs text-neutral-400 mt-1">
            + {rate.taxes.taxes.map(tax => `${tax.amount} ${tax.currency} ${tax.subType || 'tax'}`).join(', ')} payable at hotel
          </p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-lg font-semibold text-neutral-900">
            {formatPrice(priceINR)}
          </p>
          <p className="text-xs text-neutral-500">
            €{Number(rate.net).toFixed(0)} × ₹{CONVERSION_RATE}
          </p>
        </div>
        <button
          onClick={() => onSelectRoom(rate)}
          className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-900 text-white text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap"
        >
          Select Room
        </button>
      </div>
    </div>
  );
};

/* ── Hotel Card ── */
const HotelCard = ({ hotel, searchContext, onSelectRoom }) => {
  const [showAllRooms, setShowAllRooms] = useState(false);
  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [loadingImages, setLoadingImages] = useState(true);

  const stars = getStarCount(hotel.categoryCode);
  const priceINR = Math.round(Number(hotel.minRate) * CONVERSION_RATE);

  useEffect(() => {
    let cancelled = false;
    setLoadingImages(true);
    
    getHotelImages(hotel.code)
      .then((res) => {
        if (!cancelled && res?.images) {
          // Filter and sort images
          const sortedImages = [...res.images].sort((a, b) => (a.order || 0) - (b.order || 0));
          setImages(sortedImages);
        }
        setLoadingImages(false);
      })
      .catch((err) => {
        console.error("Failed to fetch images:", err);
        if (!cancelled) setLoadingImages(false);
      });
    
    return () => { cancelled = true; };
  }, [hotel.code]);

  const allRates = hotel.rooms?.flatMap((room) =>
    (room.rates || []).map((rate) => ({ 
      ...rate, 
      roomName: room.name, 
      roomCode: room.code 
    }))
  ) || [];

  const visibleRates = showAllRooms ? allRates : allRates.slice(0, 2);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 overflow-hidden flex flex-col md:flex-row hover:shadow-xl hover:shadow-neutral-200/50">
      
      {/* Left Image Section */}
      <div className="relative md:w-[280px] h-[220px] md:h-auto flex-shrink-0 bg-neutral-100 overflow-hidden group/img">
        {loadingImages ? (
          <div className="w-full h-full bg-neutral-200 animate-pulse"></div>
        ) : images.length > 0 ? (
          <>
            <img 
              src={fixImageUrl(images[imageIndex]?.url)} 
              alt={images[imageIndex]?.description || hotel.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
            />
            {/* Image info badge */}
            {images[imageIndex]?.description && (
              <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-medium text-white">
                {images[imageIndex].description}
              </div>
            )}
            {/* Carousel Controls */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 opacity-0 group-hover/img:opacity-100 transition-all backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 opacity-0 group-hover/img:opacity-100 transition-all backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-medium text-white tracking-widest">
                  {imageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400">
            <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
            <span className="text-xs font-medium">No images available</span>
          </div>
        )}
      </div>

      {/* Right Content Section */}
      <div className="p-5 lg:p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 pr-4">
            <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-1.5 leading-tight">
              {hotel.name}
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              {stars > 0 && (
                <div className="flex items-center gap-0.5">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              )}
              <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                {hotel.categoryName}
              </span>
              {hotel.destinationName && (
                <span className="flex items-center gap-1 text-xs text-neutral-500">
                  <MapPin className="w-3 h-3 text-blue-500" />
                  {hotel.zoneName || hotel.destinationName}
                </span>
              )}
            </div>
          </div>
          
          <div className="text-right shrink-0 flex flex-col items-end">
            <p className="text-xs text-neutral-500 mb-0.5 font-medium">From</p>
            <p className="text-2xl font-bold text-neutral-900 tracking-tight leading-none mb-1">
              {formatPrice(priceINR)}
            </p>
            <p className="text-[11px] text-neutral-500 font-medium">
              €{Number(hotel.minRate).toFixed(0)} total
            </p>
            {hotel.maxRate && hotel.maxRate !== hotel.minRate && (
              <p className="text-[10px] text-neutral-400 mt-1">
                up to €{Number(hotel.maxRate).toFixed(0)}
              </p>
            )}
          </div>
        </div>

        {/* Room Rates */}
        {allRates.length > 0 && (
          <div className="mt-auto space-y-3">
            <div className="h-px w-full bg-neutral-100 mb-4"></div>
            {visibleRates.map((rate, idx) => (
              <div key={rate.rateKey || idx} className="bg-neutral-50/50 rounded-xl p-3 sm:px-4 border border-neutral-100 hover:border-neutral-200 transition-colors">
                <p className="text-xs font-semibold text-neutral-700 mb-2 uppercase tracking-wide">
                  {rate.roomName}
                </p>
                <RateRow
                  rate={rate}
                  onSelectRoom={onSelectRoom}
                />
              </div>
            ))}
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
          <div>
            {allRates.length > 2 && (
              <button
                onClick={() => setShowAllRooms(!showAllRooms)}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
              >
                {showAllRooms ? "Show fewer rooms" : `Show all ${allRates.length} rooms ↓`}
              </button>
            )}
          </div>
          <button
            onClick={() => {
              const detailUrl = `/services/hotel-booking/hotel/${hotel.code}?checkIn=${searchContext?.checkIn || ""}&checkOut=${searchContext?.checkOut || ""}&adults=${searchContext?.adults || 2}&children=${searchContext?.children || 0}&rooms=${searchContext?.rooms || 1}`;
              window.open(detailUrl, "_blank");
            }}
            className="px-5 py-2.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm font-semibold rounded-xl transition-all shadow-sm"
          >
            View details →
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Main Component ── */
const HotelSearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [hotels, setHotels] = useState([]);
  const [filterCounts, setFilterCounts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});
  
  // Booking Modal State
  const [selectedRate, setSelectedRate] = useState(null);
  const [selectedRoomName, setSelectedRoomName] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);

  const destinationCode = searchParams.get("destinationCode") || "";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const adults = Number(searchParams.get("adults") || "2");
  const children = Number(searchParams.get("children") || "0");
  const rooms = Number(searchParams.get("rooms") || "1");

  useEffect(() => {
    if (!destinationCode || !checkIn || !checkOut) {
      setError("Missing search parameters. Please search again.");
      setLoading(false);
      return;
    }
    
    let cancelled = false;
    setLoading(true);
    setError(null);

    searchHotels({
      destinationCode,
      checkIn,
      checkOut,
      roomCount: rooms,
      adults,
      children,
      maxHotels: 50,
    })
      .then((res) => {
        if (cancelled) return;
        setHotels(res?.hotels?.hotels || []);
        setFilterCounts(res?.filterCounts || null);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error("Search hotels error:", err);
        setError(
          err?.response?.data?.message || "Failed to load hotels. Please try again."
        );
        setHotels([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [destinationCode, checkIn, checkOut, adults, children, rooms]);

  /* Client-side filtering */
  const filteredHotels = useMemo(() => {
    let result = [...hotels];

    // Star filter
    if (activeFilters.stars?.length > 0) {
      result = result.filter((h) => {
        const star = String(getStarCount(h.categoryCode));
        return activeFilters.stars.includes(star);
      });
    }

    // Board type filter
    if (activeFilters.boardTypes?.length > 0) {
      result = result.filter((h) =>
        h.rooms?.some((room) =>
          room.rates?.some((rate) =>
            activeFilters.boardTypes.includes(rate.boardCode)
          )
        )
      );
    }

    // Price range filter (in EUR)
    if (activeFilters.priceRanges?.length > 0) {
      result = result.filter((h) => {
        const min = Number(h.minRate);
        return activeFilters.priceRanges.some((range) => {
          if (range.endsWith("+")) {
            return min >= Number(range.replace("+", ""));
          }
          const [lo, hi] = range.split("-").map(Number);
          return min >= lo && min <= hi;
        });
      });
    }

    return result;
  }, [hotels, activeFilters]);

  const handleSelectRoom = (rate, roomName) => {
    const token = localStorage.getItem("token");
    if (!token) {
      const returnUrl = window.location.pathname + window.location.search;
      localStorage.setItem("intendedDestination", returnUrl);
      window.location.href = "/login";
      return;
    }
    
    setSelectedRate(rate);
    setSelectedRoomName(roomName);
    setShowBookingModal(true);
  };

  const handleFiltersChange = (newFilters) => setActiveFilters(newFilters);
  const handleClearFilters = () => setActiveFilters({});

  const searchContext = { checkIn, checkOut, adults, children, rooms };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-6 h-6 text-blue-600" />
                <h1 className="text-2xl lg:text-3xl font-light text-neutral-900 tracking-tight">
                  Hotels in {destinationCode}
                </h1>
              </div>
              <p className="text-sm text-neutral-500">
                {checkIn && new Date(checkIn).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                })}{" "}
                –{" "}
                {checkOut && new Date(checkOut).toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                {" · "}
                {adults} Adult{adults !== 1 ? "s" : ""}
                {children > 0 && `, ${children} Child${children > 1 ? "ren" : ""}`}
                {" · "}{rooms} Room{rooms > 1 ? "s" : ""}
              </p>
            </div>
            <button
              onClick={() => navigate("/services/hotel-booking")}
              className="px-6 py-3 border border-neutral-300 hover:border-neutral-400 text-neutral-700 text-sm font-medium rounded-full transition-all duration-200 hover:shadow-sm"
            >
              Modify Search
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <HotelFilterSidebar
              filterCounts={filterCounts}
              filters={activeFilters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={handleClearFilters}
              isLoading={loading}
            />
          </div>

          {/* Hotel Results */}
          <div className="flex-1">
            {loading && (
              <div className="space-y-6">
                <div className="h-5 w-32 bg-neutral-200 rounded animate-pulse"></div>
                {[...Array(3)].map((_, idx) => (
                  <HotelCardSkeleton key={idx} />
                ))}
              </div>
            )}

            {error && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center max-w-2xl mx-auto">
                <p className="text-amber-900 mb-6">{error}</p>
                <button
                  onClick={() => navigate("/services/hotel-booking")}
                  className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-full transition-colors"
                >
                  New Search
                </button>
              </div>
            )}

            {!loading && !error && filteredHotels.length === 0 && (
              <div className="bg-white rounded-2xl border border-neutral-200 p-16 text-center max-w-2xl mx-auto">
                <Building2
                  className="w-20 h-20 text-neutral-300 mx-auto mb-6"
                  strokeWidth={1.5}
                />
                <h2 className="text-xl font-light text-neutral-800 mb-3 tracking-tight">
                  No hotels available
                </h2>
                <p className="text-neutral-500 mb-8">
                  Try adjusting your filters or search criteria
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => navigate("/services/hotel-booking")}
                    className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium rounded-full transition-colors"
                  >
                    Modify Search
                  </button>
                  {Object.keys(activeFilters).length > 0 && (
                    <button
                      onClick={handleClearFilters}
                      className="px-8 py-3 border border-neutral-300 hover:border-neutral-400 text-neutral-700 text-sm font-medium rounded-full transition-all"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>
            )}

            {!loading && !error && filteredHotels.length > 0 && (
              <div className="space-y-6">
                <p className="text-sm text-neutral-600 font-light">
                  <span className="font-medium text-neutral-900">
                    {filteredHotels.length}
                  </span>{" "}
                  hotel{filteredHotels.length !== 1 ? "s" : ""} found
                  {Object.keys(activeFilters).some(
                    (k) => activeFilters[k]?.length > 0
                  ) && " with filters"}
                </p>
                {filteredHotels.map((hotel) => (
                  <HotelCard
                    key={hotel.code}
                    hotel={hotel}
                    searchContext={searchContext}
                    onSelectRoom={(rate) => handleSelectRoom(rate, hotel.name)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <HotelBookingModal
        isOpen={showBookingModal}
        onClose={() => {
          setShowBookingModal(false);
          setSelectedRate(null);
          setSelectedRoomName("");
        }}
        rate={selectedRate}
        roomName={selectedRoomName}
        hotelName={selectedRoomName}
        checkIn={checkIn}
        checkOut={checkOut}
      />
    </div>
  );
};

export default HotelSearchResults;
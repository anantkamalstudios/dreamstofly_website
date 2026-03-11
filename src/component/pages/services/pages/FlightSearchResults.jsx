import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Plane, X, Clock, Briefcase } from "lucide-react";
import { searchFlights, verifyFlight, bookFlight, createPaymentOrder } from "../../../../api/flightApi";
import FlightFilterSidebar from "../components/FlightFilterSidebar";

const formatTime = (dateStr) => {
  if (!dateStr) return "--";
  const d = new Date(dateStr);
  return d.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

const formatPrice = (price, currency = "INR") => {
  if (price == null) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
};

const FlightCardSkeleton = () => (
  <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden animate-pulse">
    <div className="p-6 lg:p-8">
      {/* Airline Header Skeleton */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-neutral-200"></div>
          <div>
            <div className="h-5 w-32 bg-neutral-200 rounded mb-2"></div>
            <div className="h-3 w-24 bg-neutral-200 rounded"></div>
          </div>
        </div>
        <div className="text-right">
          <div className="h-7 w-24 bg-neutral-200 rounded mb-1"></div>
          <div className="h-3 w-20 bg-neutral-200 rounded"></div>
        </div>
      </div>

      {/* Flight Route Skeleton */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1">
          <div className="h-9 w-16 bg-neutral-200 rounded mb-2"></div>
          <div className="h-4 w-12 bg-neutral-200 rounded mb-1"></div>
          <div className="h-3 w-16 bg-neutral-200 rounded"></div>
        </div>
        <div className="flex-[1.5] flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3.5 h-3.5 bg-neutral-200 rounded-full"></div>
            <div className="h-3 w-16 bg-neutral-200 rounded"></div>
          </div>
          <div className="w-full h-px bg-neutral-200 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-neutral-200 rounded"></div>
          </div>
          <div className="h-3 w-12 bg-neutral-200 rounded mt-2"></div>
        </div>
        <div className="flex-1 text-right">
          <div className="h-9 w-16 bg-neutral-200 rounded mb-2"></div>
          <div className="h-4 w-12 bg-neutral-200 rounded mb-1"></div>
          <div className="h-3 w-16 bg-neutral-200 rounded"></div>
        </div>
      </div>

      {/* Flight Details Skeleton */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-neutral-200 rounded"></div>
            <div className="h-3 w-20 bg-neutral-200 rounded"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div>
            <div className="h-3 w-16 bg-neutral-200 rounded"></div>
          </div>
        </div>
        <div className="h-9 w-24 bg-neutral-200 rounded-full"></div>
      </div>
    </div>
  </div>
);

const FlightCard = ({ flight, verified, verifying, onVerify, onBook }) => {
  const verifiedPrice = verified?.price ?? flight.price;
  const verifiedCurrency = verified?.currency ?? flight.currency;
  const isVerified = !!verified;

  return (
    <div className="group bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-neutral-200/50">
      <div className="p-6 lg:p-8">
        {/* Airline Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img
                src={flight.airline_logo}
                alt={flight.airline_name}
                className="w-8 h-8 object-contain"
              />

            </div>
            <div>
              <p className="font-medium text-neutral-900 tracking-tight">
                {flight.airline_name} {flight.flight_no}
              </p>
              <p className="text-xs text-neutral-500 mt-0.5">
                {flight.aircraft}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold text-neutral-900 tracking-tight">
              {formatPrice(verifiedPrice, verifiedCurrency)}
            </p>
            {isVerified && (
              <p className="text-xs text-emerald-600 mt-0.5 font-medium">Price verified</p>
            )}
          </div>
        </div>

        {/* Flight Route */}
        <div className="flex items-center gap-4 mb-6">
          {/* Departure */}
          <div className="flex-1">
            <p className="text-3xl font-light text-neutral-900 tracking-tight mb-1">
              {formatTime(flight.departure)}
            </p>
            <p className="text-sm font-medium text-neutral-700 mb-0.5">
              {flight.origin}
            </p>
            {flight.departure_terminal && (
              <p className="text-xs text-neutral-500">Terminal {flight.departure_terminal}</p>
            )}
          </div>

          {/* Duration & Route Line */}
          <div className="flex-[1.5] flex flex-col items-center relative">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <p className="text-xs font-medium text-neutral-600 tracking-wide">
                {flight.duration}
              </p>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 relative">
              <img
                src="/images/airplane.png"
                alt="Take off"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6"
                style={{ objectFit: 'contain' }}
              />
            </div>
            {flight.stops > 0 && (
              <p className="text-[10px] font-medium text-amber-600 mt-2 tracking-wide uppercase">
                {flight.stops} Stop{flight.stops > 1 ? "s" : ""}
              </p>
            )}
            {flight.stops === 0 && (
              <p className="text-[10px] font-medium text-emerald-600 mt-2 tracking-wide uppercase">
                Direct
              </p>
            )}
          </div>

          {/* Arrival */}
          <div className="flex-1 text-right">
            <p className="text-3xl font-light text-neutral-900 tracking-tight mb-1">
              {formatTime(flight.arrival)}
            </p>
            <p className="text-sm font-medium text-neutral-700 mb-0.5">
              {flight.destination}
            </p>
            {flight.arrival_terminal && (
              <p className="text-xs text-neutral-500">Terminal {flight.arrival_terminal}</p>
            )}
          </div>
        </div>

        {/* Flight Details & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-neutral-400" />
              <span className="text-sm text-neutral-600">{flight.baggage}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
              <span className="text-sm text-neutral-600 capitalize">{flight.cabin_class}</span>
            </div>
            {flight.seats_available != null && flight.seats_available <= 9 && (
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                <span className="text-sm text-amber-700 font-medium">
                  Only {flight.seats_available} left
                </span>
              </div>
            )}
          </div>
          {isVerified ? (
            <button
              onClick={() => onBook(flight)}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book Now
            </button>
          ) : (
            <button
              onClick={() => onVerify(flight)}
              disabled={verifying}
              className="px-8 py-3 bg-neutral-800 hover:bg-neutral-900 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {verifying ? "Verifying..." : "Verify Price"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const FlightSearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tripType] = useState(searchParams.get("tripType") || "oneway");
  const [verifiedFlights, setVerifiedFlights] = useState({});
  const [verifyingOfferId, setVerifyingOfferId] = useState(null);
  const [showPassengerModal, setShowPassengerModal] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [passengerFormData, setPassengerFormData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    gender: "MALE",
    nationality: "IN",
    doc_type: "PASSPORT",
    doc_number: "",
    doc_expiry: "",
    title: "mr",
    email: "",
    phone: "",
    country_code: "91",
  });
  const [submitting, setSubmitting] = useState(false);
  const [filtersMeta, setFiltersMeta] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";
  const adults = Number(searchParams.get("adults") || "1");
  const children = Number(searchParams.get("children") || "0");
  const infants = Number(searchParams.get("infants") || "0");

  useEffect(() => {
    if (!from || !to || !date) {
      setError("Missing search parameters. Please search again.");
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    searchFlights({
      from,
      to,
      date,
      adults: adults || 1,
      children: children || 0,
      infants: infants || 0,
      trip_type: tripType === "roundtrip" ? "round_trip" : "one_way",
      page: currentPage,
      filters: activeFilters,
    })
      .then((res) => {
        if (cancelled) return;
        setFlights(res?.data || []);
        setFiltersMeta(res?.filters_meta || null);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err?.response?.data?.message || "Failed to load flights. Please try again.");
        setFlights([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [from, to, date, adults, children, infants, tripType, currentPage, activeFilters]);

  const handleVerifyPrice = async (flight) => {
    // Get offer_id and provider from the first fare
    const fare = flight.fares?.[0];
    const offerId = fare?.offer_id || flight.offer_id;
    const provider = fare?.provider || flight.provider;
    const key = `${provider || "amadeus"}_${offerId}`;
    const token = localStorage.getItem("token");
    if (!token) {
      const returnUrl = window.location.pathname + window.location.search;
      localStorage.setItem("intendedDestination", returnUrl);
      window.location.href = "/login";
      return;
    }
    setVerifyingOfferId(key);
    try {
      const res = await verifyFlight({
        provider: provider,
        offer_id: offerId,
      });
      if (res?.status) {
        setVerifiedFlights((prev) => ({
          ...prev,
          [key]: {
            provider: res.provider,
            offer_id: res.offer_id,
            price: res.price,
            currency: res.currency,
          },
        }));
        // Automatically open booking form after successful verification
        setSelectedFlight({ ...flight, verifiedPrice: res.price, verifiedCurrency: res.currency });
        setShowPassengerModal(true);
        setPassengerFormData({
          first_name: "",
          last_name: "",
          dob: "",
          gender: "MALE",
          nationality: "IN",
          doc_type: "PASSPORT",
          doc_number: "",
          doc_expiry: "",
          title: "mr",
          email: "",
          phone: "",
          country_code: "91",
        });
      } else {
        alert(res?.message || "Price verification failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Price verification failed. Please try again.");
    } finally {
      setVerifyingOfferId(null);
    }
  };

  const handleSelectFlight = (flight) => {
    const token = localStorage.getItem("token");
    if (!token) {
      const returnUrl = window.location.pathname + window.location.search;
      localStorage.setItem("intendedDestination", returnUrl);
      window.location.href = "/login";
      return;
    }
    // Get offer_id and provider from first fare
    const fare = flight.fares?.[0];
    const offerId = fare?.offer_id || flight.offer_id;
    const provider = fare?.provider || flight.provider;
    const key = `${provider || "amadeus"}_${offerId}`;
    const verified = verifiedFlights[key];
    if (!verified) return;
    setSelectedFlight({ ...flight, verifiedPrice: verified.price, verifiedCurrency: verified.currency });
    setShowPassengerModal(true);
    setPassengerFormData({
      first_name: "",
      last_name: "",
      dob: "",
      gender: "MALE",
      nationality: "IN",
      doc_type: "PASSPORT",
      doc_number: "",
      doc_expiry: "",
      title: "mr",
      email: "",
      phone: "",
      country_code: "91",
    });
  };

  const handlePassengerInputChange = (e) => {
    const { name, value } = e.target;
    setPassengerFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePassengerSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFlight) return;
    const {
      first_name,
      last_name,
      dob,
      gender,
      nationality,
      doc_type,
      doc_number,
      doc_expiry,
      title,
      email,
      phone,
      country_code,
    } = passengerFormData;
    if (!first_name || !last_name || !dob || !doc_number || !doc_expiry || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      // Get offer_id and provider from first fare
      const fare = selectedFlight.fares?.[0];
      const offerId = fare?.offer_id || selectedFlight.offer_id;
      const provider = fare?.provider || selectedFlight.provider;
      
      const payload = {
        offer_id: offerId,
        provider: provider,
        amount: selectedFlight.verifiedPrice ?? selectedFlight.price,
        passengers: [
          {
            type: "adult",
            first_name,
            last_name,
            dob,
            gender: gender.toUpperCase(),
            nationality: nationality.toUpperCase(),
            doc_type: doc_type.toUpperCase(),
            doc_number,
            doc_expiry,
          }
        ],
        contact: {
          email,
          phone: phone.replace(/\D/g, ""),
          country_code: country_code.replace(/\D/g, "") || "91",
        },
        flight: {
          trip_type: selectedFlight.trip_type || (tripType === "roundtrip" ? "round_trip" : "one_way"),
          from: selectedFlight.origin,
          to: selectedFlight.destination,
          flight_no: selectedFlight.flight_no,
          airline: selectedFlight.airline,
          airline_name: selectedFlight.airline_name,
          airline_logo: selectedFlight.airline_logo,
          departure: selectedFlight.departure,
          arrival: selectedFlight.arrival,
          duration: selectedFlight.duration,
          duration_minutes: selectedFlight.duration_minutes,
          cabin_class: fare?.cabin_class || (selectedFlight.cabin_class || "economy").toLowerCase(),
          aircraft: selectedFlight.aircraft,
          aircraft_name: selectedFlight.aircraft_name,
          departure_terminal: selectedFlight.departure_terminal,
          arrival_terminal: selectedFlight.arrival_terminal,
          stops: selectedFlight.stops,
          time_of_day: selectedFlight.time_of_day,
          operating_airline: selectedFlight.operating_airline,
          validating_airline: selectedFlight.validating_airline,
          branded_fare: fare?.branded_fare,
          branded_fare_label: fare?.branded_fare_label,
          booking_class: fare?.booking_class,
          fare_basis: fare?.fare_basis,
          baggage: fare?.baggage,
          checked_bags: fare?.checked_bags,
          baggage_weight: fare?.baggage_weight,
          meal: fare?.meal,
          refundable: fare?.refundable,
          changeable: fare?.changeable,
          seats_available: fare?.seats_available,
          base_fare: fare?.base_fare,
          tax: fare?.tax,
          price_breakdown: fare?.price_breakdown,
          fare_conditions: fare?.fare_conditions,
        },
      };
      
      console.log("About to call createPaymentOrder with payload:", payload);
      const res = await createPaymentOrder(payload);
      console.log("Payment order creation response:", res);
      
      if (res?.status) {
        setShowPassengerModal(false);
        setSelectedFlight(null);
        
        // Handle Razorpay payment
        if (res.razorpay_order_id && res.key_id) {
          const options = {
            key: res.key_id,
            order_id: res.razorpay_order_id,
            amount: res.amount * 100, // Razorpay expects amount in paise
            currency: res.currency || "INR",
            name: "Flight Booking",
            description: `${selectedFlight.airline} ${selectedFlight.flight_no} - ${selectedFlight.origin} to ${selectedFlight.destination}`,
            prefill: {
              name: `${first_name} ${last_name}`,
              email: email,
              contact: phone,
            },
            handler: function (response) {
              // Payment successful
              console.log("Payment successful:", response);
              alert("Payment successful! Booking confirmed.");
            },
            modal: {
              ondismiss: function() {
                console.log("Payment modal dismissed");
                alert("Payment cancelled. You can try again.");
              }
            }
          };
          
          const razorpay = new window.Razorpay(options);
          razorpay.open();
        } else {
          alert("Payment order created successfully! Order ID: " + res.razorpay_order_id);
        }
      } else {
        alert(res?.message || "Payment order creation failed. Please try again.");
      }
    } catch (err) {
      console.error("Payment order creation error in component:", err);
      console.error("Error response data:", err?.response?.data);
      alert(err?.response?.data?.message || "Payment order creation failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleFiltersChange = (newFilters) => {
    setActiveFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleClearFilters = () => {
    setActiveFilters({});
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>

      {/* Header */}
      <div className="bg-white border-b border-neutral-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl lg:text-3xl font-light text-neutral-900 tracking-tight">
                  {from}
                </h1>
                <div className="w-8 h-px bg-neutral-300"></div>
                <h1 className="text-2xl lg:text-3xl font-light text-neutral-900 tracking-tight">
                  {to}
                </h1>
              </div>
              <p className="text-sm text-neutral-500">
                {new Date(date).toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                {" · "}
                {adults + children + infants} Passenger
                {adults + children + infants > 1 ? "s" : ""}
                {" "}
                ({adults} Adult{adults !== 1 ? "s" : ""}
                {children > 0 && `, ${children} Child${children > 1 ? "ren" : ""}`}
                {infants > 0 && `, ${infants} Infant${infants > 1 ? "s" : ""}`})
              </p>
            </div>
            <button
              onClick={() => navigate("/services/student-flight-tickets")}
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
            <FlightFilterSidebar
              filtersMeta={filtersMeta}
              filters={activeFilters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={handleClearFilters}
              isLoading={loading}
            />
          </div>

          {/* Flight Results */}
          <div className="flex-1">
            {loading && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-5 w-32 bg-neutral-200 rounded animate-pulse"></div>
                </div>
                {[...Array(3)].map((_, idx) => (
                  <FlightCardSkeleton key={idx} />
                ))}
              </div>
            )}

            {error && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center max-w-2xl mx-auto">
                <p className="text-amber-900 mb-6">{error}</p>
                <button
                  onClick={() => navigate("/services/student-flight-tickets")}
                  className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-full transition-colors"
                >
                  New Search
                </button>
              </div>
            )}

            {!loading && !error && flights.length === 0 && (
              <div className="bg-white rounded-2xl border border-neutral-200 p-16 text-center max-w-2xl mx-auto">
                <Plane className="w-20 h-20 text-neutral-300 mx-auto mb-6" strokeWidth={1.5} />
                <h2 className="text-xl font-light text-neutral-800 mb-3 tracking-tight">
                  No flights available
                </h2>
                <p className="text-neutral-500 mb-8">
                  Try adjusting your filters or search criteria
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => navigate("/services/student-flight-tickets")}
                    className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium rounded-full transition-colors"
                  >
                    Modify Search
                  </button>
                  {Object.keys(activeFilters).length > 0 && (
                    <button
                      onClick={handleClearFilters}
                      className="px-8 py-3 border border-neutral-300 hover:border-neutral-400 text-neutral-700 text-sm font-medium rounded-full transition-all duration-200 hover:shadow-sm"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>
            )}

            {!loading && !error && flights.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-neutral-600 font-light">
                    <span className="font-medium text-neutral-900">{flights.length}</span> flight
                    {flights.length !== 1 ? "s" : ""} found
                    {Object.keys(activeFilters).length > 0 && " with filters"}
                  </p>
                </div>
                {flights.map((flight, idx) => {
                  const key = `${flight.provider || "amadeus"}_${flight.offer_id}`;
                  const verified = verifiedFlights[key];
                  const isVerifying = verifyingOfferId === key;
                  return (
                    <FlightCard
                      key={flight.offer_id || idx}
                      flight={flight}
                      verified={verified}
                      verifying={isVerifying}
                      onVerify={handleVerifyPrice}
                      onBook={handleSelectFlight}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Passenger & Contact Form Modal - required before book API */}
      {showPassengerModal && selectedFlight && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8 border-b border-neutral-200">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-light text-neutral-900 tracking-tight mb-2">
                    Passenger Details
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {selectedFlight.airline} {selectedFlight.flight_no} · {selectedFlight.origin} → {selectedFlight.destination}
                  </p>
                </div>
                <button
                  onClick={() => { setShowPassengerModal(false); setSelectedFlight(null); }}
                  className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-500" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <form onSubmit={handlePassengerSubmit} className="p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2 uppercase">First Name *</label>
                  <input
                    type="text"
                    name="first_name"
                    value={passengerFormData.first_name}
                    onChange={handlePassengerInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                    placeholder="Rahul"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2 uppercase">Last Name *</label>
                  <input
                    type="text"
                    name="last_name"
                    value={passengerFormData.last_name}
                    onChange={handlePassengerInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                    placeholder="Sharma"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2 uppercase">Date of Birth *</label>
                  <input
                    type="date"
                    name="dob"
                    value={passengerFormData.dob}
                    onChange={handlePassengerInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2 uppercase">Gender *</label>
                  <select
                    name="gender"
                    value={passengerFormData.gender}
                    onChange={handlePassengerInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                  >
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2 uppercase">Nationality *</label>
                  <input
                    type="text"
                    name="nationality"
                    value={passengerFormData.nationality}
                    onChange={handlePassengerInputChange}
                    required
                    maxLength={2}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                    placeholder="IN"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2 uppercase">Title</label>
                  <select
                    name="title"
                    value={passengerFormData.title}
                    onChange={handlePassengerInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                  >
                    <option value="mr">Mr</option>
                    <option value="mrs">Mrs</option>
                    <option value="ms">Ms</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-6 mt-6">
                <p className="text-sm font-medium text-neutral-800 mb-4">Travel Document</p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-2 uppercase">Doc Type</label>
                    <select
                      name="doc_type"
                      value={passengerFormData.doc_type}
                      onChange={handlePassengerInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                    >
                      <option value="PASSPORT">Passport</option>
                      <option value="VISA">Visa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-2 uppercase">Doc Number *</label>
                    <input
                      type="text"
                      name="doc_number"
                      value={passengerFormData.doc_number}
                      onChange={handlePassengerInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                      placeholder="P1234567"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-2 uppercase">Doc Expiry *</label>
                    <input
                      type="date"
                      name="doc_expiry"
                      value={passengerFormData.doc_expiry}
                      onChange={handlePassengerInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-6 mt-6">
                <p className="text-sm font-medium text-neutral-800 mb-4">Contact</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-2 uppercase">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={passengerFormData.email}
                      onChange={handlePassengerInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                      placeholder="rahul@example.com"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-2 uppercase">Country Code</label>
                      <input
                        type="text"
                        name="country_code"
                        value={passengerFormData.country_code}
                        onChange={handlePassengerInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                        placeholder="91"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-medium text-neutral-700 mb-2 uppercase">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={passengerFormData.phone}
                        onChange={handlePassengerInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md mt-6"
              >
                {submitting ? "Processing..." : "Confirm & Book"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearchResults;
import React, { useState, useEffect, useCallback, memo } from "react";
import {
  Search, Heart, SlidersHorizontal, X, ChevronDown, MapPin, Calendar,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

// ── Helpers ─────────────────────────────────────────────────────────────────

// const getFirstPhoto = (photos) => {
//   if (!photos || photos.length === 0) return null;
//   const p = photos[0];

//   if (typeof p === "string" && p.startsWith("data:")) return p;
//   if (typeof p === "string" && (p.startsWith("http://") || p.startsWith("https://"))) return p;

//   if (typeof p === "string") {
//     const baseUrl = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
//     const photoPath = p.startsWith('/') ? p.slice(1) : p;
//     return `${baseUrl}/${photoPath}`;
//   }

//   return null;
// };
const getFirstPhoto = (photos) => {
  if (!photos || photos.length === 0) return null;
  const p = photos[0];

  if (typeof p === "string" && p.startsWith("data:")) return p;
  if (typeof p === "string" && (p.startsWith("http://") || p.startsWith("https://"))) return p;

  if (typeof p === "string") {
    const baseUrl = IMAGE_BASE_URL.endsWith("/") ? IMAGE_BASE_URL : `${IMAGE_BASE_URL}/`;
    const photoPath = p.startsWith("/") ? p.slice(1) : p;
    return `${baseUrl}${photoPath}`;
  }

  return null;
};

const PLACEHOLDER = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80";


const WANTED_FILTERS_DEFAULT = {
  country: "", budget: "", room_size: "", gender: "", pincode: "", available_from: "", area: "",
};

const AVAILABLE_FILTERS_DEFAULT = {
  country: "", property_type: "", listing_type: "", area: "", pincode: "",
};

// ── Card Components ──────────────────────────────────────────────────────────

const RoomAvailableCard = ({ item, isFav, onFav, onClick }) => {
  const photo = getFirstPhoto(item.photos);
  const firstRoom = Array.isArray(item.rooms) ? item.rooms[0] : null;
  const rent = firstRoom?.rent || firstRoom?.room_cost;
  const availFrom = firstRoom?.available_from;
  const location = item.area || item.city || item.pincode || "—";

  return (
    <div
      className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-5 sm:p-5">
        {/* Image */}
        <div className="relative w-full sm:w-[45%] flex-shrink-0">
          <img
            src={photo || PLACEHOLDER}
            alt={item.title || "Room"}
            onError={(e) => { e.target.src = PLACEHOLDER; }}
            className="w-full h-48 sm:h-64 object-cover sm:rounded-xl"
          />
          <button
            onClick={(e) => { e.stopPropagation(); onFav(item.id); }}
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
          >
            <Heart className={`w-4 h-4 ${isFav ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
          </button>
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Room Available
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between p-4 sm:p-0">
          <div className="flex justify-between items-start">
            <span className="text-xs text-gray-400 uppercase tracking-wide">
              {item.property_type || item.listing_type || "Property"}
            </span>
            {rent && (
              <p className="text-sm font-semibold text-blue-600">
                ₹{rent} / mo
              </p>
            )}
          </div>

          <h2 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug mt-2">
            {item.title || "Untitled Listing"}
          </h2>

          <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
            <MapPin className="w-3 h-3" /> {location}
          </p>

          {item.description && (
            <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-2">
              {item.description}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mt-3">
            {item.property_size && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {item.property_size}
              </span>
            )}
            {item.living_room && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                Living Room
              </span>
            )}
            {firstRoom?.type && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full capitalize">
                {firstRoom.type}
              </span>
            )}
          </div>

          {availFrom && (
            <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              Available from {new Date(availFrom).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
            </p>
          )}
        </div>
      </div>

      {/* Profile Footer */}
      {item.name && (
        <div className="bg-gray-50 border-t border-gray-100 px-4 sm:px-5 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm flex-shrink-0">
            {item.name.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
            {item.email && <p className="text-xs text-gray-500 truncate">{item.email}</p>}
          </div>
          {item.advertiser_role && (
            <span className="ml-auto text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full whitespace-nowrap">
              {item.advertiser_role}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

const RoomWantedCard = ({ item, isFav, onFav, onClick }) => {
  const photo = getFirstPhoto(item.photos);
  console.log(photo);
  const location = item.city || item.pincode || "—";

  return (
    <div
      className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-5 sm:p-5">
        {/* Image */}
        <div className="relative w-full sm:w-[45%] flex-shrink-0">
          <img
            src={photo || PLACEHOLDER}
            alt={item.title || "Room Wanted"}
            onError={(e) => { e.target.src = PLACEHOLDER; }}
            className="w-full h-48 sm:h-64 object-cover sm:rounded-xl"
          />
          <button
            onClick={(e) => { e.stopPropagation(); onFav(item.id); }}
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
          >
            <Heart className={`w-4 h-4 ${isFav ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
          </button>
          <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Room Wanted
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between p-4 sm:p-0">
          <div className="flex justify-between items-start">
            <span className="text-xs text-gray-400 uppercase tracking-wide">
              {item.searching_for || item.room_size || "Room"}
            </span>
            {item.budget && (
              <p className="text-sm font-semibold text-emerald-600">
                Budget: ₹{parseFloat(item.budget).toLocaleString()}
                {item.budget_type ? ` / ${item.budget_type}` : ""}
              </p>
            )}
          </div>

          <h2 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug mt-2">
            {item.title || "Looking for a Room"}
          </h2>

          <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
            <MapPin className="w-3 h-3" /> {location}
          </p>

          {item.description && (
            <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-2">
              {item.description}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mt-3">
            {item.gender && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full capitalize">
                {item.gender}
              </span>
            )}
            {item.occupation && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full capitalize">
                {item.occupation}
              </span>
            )}
            {item.amenities?.slice(0, 3).map((a) => (
              <span key={a} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full capitalize">
                {a}
              </span>
            ))}
          </div>

          {item.available_from && (
            <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              Available from {new Date(item.available_from).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
            </p>
          )}
        </div>
      </div>

      {/* Profile Footer */}
      {(item.first_name || item.phone) && (
        <div className="bg-gray-50 border-t border-gray-100 px-4 sm:px-5 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold text-sm flex-shrink-0">
            {(item.first_name || "?").charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            {item.first_name && (
              <p className="text-sm font-medium text-gray-900 truncate">
                {item.first_name} {item.last_name || ""}
              </p>
            )}
            {item.nationality && (
              <p className="text-xs text-gray-500 truncate">{item.nationality}</p>
            )}
          </div>
          {item.age && (
            <span className="ml-auto text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full whitespace-nowrap">
              Age {item.age}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

// ── Filter Panel Component ────────────────────────────────────────────────────

const FilterField = memo(({ label, field, type = "text", options, value, onChange, placeholder }) => (
  <div className="mb-5">
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    {options ? (
      <select
        value={value || ""}
        onChange={(e) => onChange(field, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Any</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        value={value || ""}
        onChange={(e) => onChange(field, e.target.value)}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    )}
  </div>
));

FilterField.displayName = 'FilterField';

const FilterPanel = memo(({
  activeTab,
  availableFilters,
  wantedFilters,
  onAvailableFilterChange,
  onWantedFilterChange,
  onTabChange,
  onApplyFilters,
  onResetFilters,
  onCloseMobile
}) => {
  const isAvailable = activeTab === "available";
  const filters = isAvailable ? availableFilters : wantedFilters;
  const setFilters = isAvailable ? onAvailableFilterChange : onWantedFilterChange;

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <div className="flex items-center gap-3">
          <button onClick={onResetFilters} className="text-blue-600 text-sm hover:text-blue-700">
            Reset
          </button>
          <button className="md:hidden text-gray-500" onClick={onCloseMobile}>
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tab switcher inside filter */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Ad Type</p>
        <div className="flex rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => onTabChange("available")}
            className={`flex-1 py-2 text-sm font-medium transition-colors ${
              activeTab === "available" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => onTabChange("wanted")}
            className={`flex-1 py-2 text-sm font-medium transition-colors ${
              activeTab === "wanted" ? "bg-emerald-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Wanted
          </button>
        </div>
      </div>

      <FilterField
        label="Country"
        field="country"
        value={filters.country}
        onChange={handleFilterChange}
      />

      {isAvailable ? (
        <>
          <FilterField
            label="Property Type"
            field="property_type"
            value={filters.property_type}
            onChange={handleFilterChange}
            options={[
              { value: "apartment", label: "Apartment" },
              { value: "flat", label: "Flat" },
              { value: "house", label: "House" },
              { value: "studio", label: "Studio" },
            ]}
          />
          <FilterField
            label="Listing Type"
            field="listing_type"
            value={filters.listing_type}
            onChange={handleFilterChange}
            options={[
              { value: "rent", label: "Rent" },
              { value: "1 room for rent", label: "1 Room for Rent" },
              { value: "whole property", label: "Whole Property" },
            ]}
          />
          <FilterField
            label="Area / Locality"
            field="area"
            value={filters.area}
            onChange={handleFilterChange}
          />
          <FilterField
            label="Pincode"
            field="pincode"
            value={filters.pincode}
            onChange={handleFilterChange}
          />
        </>
      ) : (
        <>
          <FilterField
            label="Budget (max)"
            field="budget"
            type="number"
            value={filters.budget}
            onChange={handleFilterChange}
          />
          <FilterField
            label="Room Size"
            field="room_size"
            value={filters.room_size}
            onChange={handleFilterChange}
            options={[
              { value: "single", label: "Single" },
              { value: "double", label: "Double" },
              { value: "ensuite", label: "En-suite" },
            ]}
          />
          <FilterField
            label="Gender"
            field="gender"
            value={filters.gender}
            onChange={handleFilterChange}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "any", label: "Any" },
            ]}
          />
          <FilterField
            label="Pincode"
            field="pincode"
            value={filters.pincode}
            onChange={handleFilterChange}
          />
          <FilterField
            label="Area / City"
            field="area"
            value={filters.area}
            onChange={handleFilterChange}
          />
          <FilterField
            label="Available From"
            field="available_from"
            type="date"
            value={filters.available_from}
            onChange={handleFilterChange}
          />
        </>
      )}

      <button
        onClick={onApplyFilters}
        className={`w-full py-3 rounded-xl text-white font-medium text-sm transition-colors ${
          activeTab === "available" ? "bg-blue-600 hover:bg-blue-700" : "bg-emerald-600 hover:bg-emerald-700"
        }`}
      >
        Apply Filters
      </button>
    </div>
  );
});

FilterPanel.displayName = 'FilterPanel';

// ── Main Component ────────────────────────────────────────────────────────────

const AccommodationListing = () => {
  const { city } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("available");
  const [favorites, setFavorites] = useState([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [availableAds, setAvailableAds] = useState([]);
  const [wantedAds, setWantedAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [wantedFilters, setWantedFilters] = useState(WANTED_FILTERS_DEFAULT);
  const [availableFilters, setAvailableFilters] = useState(AVAILABLE_FILTERS_DEFAULT);
  const [filtersApplied, setFiltersApplied] = useState(false);

  useEffect(() => {
    const fetchAds = async () => {
      setLoading(true);
      setError(null);
      try {
        const [availRes, wantedRes] = await Promise.all([
          fetch(`${BASE_URL}/Accommodation/RoomAvailable/list_api`),
          fetch(`${BASE_URL}/Accommodation/RoomWanted/list_api`),
        ]);

        const [availData, wantedData] = await Promise.all([
          availRes.json(),
          wantedRes.json(),
        ]);
        console.log('availData', availData);
        console.log('wantedData', wantedData);

        const filterByCity = (ads) => {
          if (!city) return ads;
          const cityLower = city.toLowerCase();
          return ads.filter((ad) =>
            (ad.city && ad.city.toLowerCase() === cityLower) ||
            (ad.area && ad.area.toLowerCase() === cityLower) ||
            (ad.pincode && ad.pincode.toLowerCase() === cityLower)
          );
        };

        setAvailableAds(Array.isArray(availData?.data) ? filterByCity(availData.data) : []);
        setWantedAds(Array.isArray(wantedData?.data) ? filterByCity(wantedData.data) : []);
      } catch (err) {
        console.error("Failed to fetch ads:", err);
        setError("Failed to load listings. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchAds();
  }, [city]);

  const applyFilters = useCallback(async () => {
    setLoading(true);
    setFiltersApplied(true);
    try {
      if (activeTab === "available") {
        const params = new URLSearchParams();
        Object.entries(availableFilters).forEach(([k, v]) => { if (v) params.append(k, v); });
        if (city && !availableFilters.area) params.append("area", city);
        const res = await fetch(`${BASE_URL}/index.php/Accommodation/RoomAvailable/search?${params}`);
        const data = await res.json();
        setAvailableAds(Array.isArray(data?.data) ? data.data : []);
      } else {
        const params = new URLSearchParams();
        Object.entries(wantedFilters).forEach(([k, v]) => { if (v) params.append(k, v); });
        if (city && !wantedFilters.pincode) params.append("pincode", city);
        const res = await fetch(`${BASE_URL}/index.php/Accommodation/RoomWanted/search?${params}`);
        const data = await res.json();
        setWantedAds(Array.isArray(data?.data) ? data.data : []);
      }
    } catch (err) {
      console.error("Filter search failed:", err);
    } finally {
      setLoading(false);
      setFiltersOpen(false);
    }
  }, [activeTab, availableFilters, wantedFilters, city]);

  const resetFilters = () => {
    setAvailableFilters(AVAILABLE_FILTERS_DEFAULT);
    setWantedFilters(WANTED_FILTERS_DEFAULT);
    setFiltersApplied(false);
    setLoading(true);
    Promise.all([
      fetch(`${BASE_URL}/Accommodation/RoomAvailable/list_api`).then((r) => r.json()),
      fetch(`${BASE_URL}/Accommodation/RoomWanted/list_api`).then((r) => r.json()),
    ]).then(([availData, wantedData]) => {
      const filterByCity = (ads) => {
        if (!city) return ads;
        const cityLower = city.toLowerCase();
        return ads.filter((ad) =>
          (ad.city && ad.city.toLowerCase() === cityLower) ||
          (ad.area && ad.area.toLowerCase() === cityLower) ||
          (ad.pincode && ad.pincode.toLowerCase() === cityLower)
        );
      };
      setAvailableAds(Array.isArray(availData?.data) ? filterByCity(availData.data) : []);
      setWantedAds(Array.isArray(wantedData?.data) ? filterByCity(wantedData.data) : []);
    }).catch(console.error).finally(() => setLoading(false));
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
  };

  const activeAds = activeTab === "available" ? availableAds : wantedAds;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {city ? `Rooms in ${city}` : "All Listings"}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {availableAds.length} available · {wantedAds.length} wanted
          </p>
        </div>

        {/* Tab Bar */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab("available")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
              activeTab === "available"
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
            }`}
          >
            Room Available
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
              activeTab === "available" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-500"
            }`}>
              {availableAds.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("wanted")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
              activeTab === "wanted"
                ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300"
            }`}
          >
            Room Wanted
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
              activeTab === "wanted" ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-500"
            }`}>
              {wantedAds.length}
            </span>
          </button>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {filtersApplied && <span className="w-2 h-2 bg-blue-600 rounded-full" />}
          </button>
        </div>

        {/* Mobile Filter Drawer */}
        {filtersOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setFiltersOpen(false)} />
            <div className="relative z-10 w-80 max-w-full h-full bg-gray-50 overflow-y-auto p-4 shadow-xl">
              <FilterPanel
                activeTab={activeTab}
                availableFilters={availableFilters}
                wantedFilters={wantedFilters}
                onAvailableFilterChange={setAvailableFilters}
                onWantedFilterChange={setWantedFilters}
                onTabChange={setActiveTab}
                onApplyFilters={applyFilters}
                onResetFilters={resetFilters}
                onCloseMobile={() => setFiltersOpen(false)}
              />
            </div>
          </div>
        )}

        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-72 flex-shrink-0">
            <div className="sticky top-6">
              <FilterPanel
                activeTab={activeTab}
                availableFilters={availableFilters}
                wantedFilters={wantedFilters}
                onAvailableFilterChange={setAvailableFilters}
                onWantedFilterChange={setWantedFilters}
                onTabChange={setActiveTab}
                onApplyFilters={applyFilters}
                onResetFilters={resetFilters}
                onCloseMobile={() => {}}
              />
            </div>
          </div>

          {/* Listings */}
          <div className="flex-1">
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-200 h-64 animate-pulse" />
                ))}
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <p className="text-gray-500 mb-3">{error}</p>
                <button onClick={() => window.location.reload()} className="text-blue-600 text-sm underline">
                  Retry
                </button>
              </div>
            ) : activeAds.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <p className="text-gray-400 text-lg">No listings found</p>
                <p className="text-gray-400 text-sm mt-1">
                  {filtersApplied
                    ? "Try adjusting your filters."
                    : `No ${activeTab === "available" ? "available rooms" : "room wanted ads"} for ${city || "this area"}.`}
                </p>
                {filtersApplied && (
                  <button onClick={resetFilters} className="mt-3 text-blue-600 text-sm underline">
                    Clear filters
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-4 md:space-y-6">
                {activeTab === "available"
                  ? availableAds.map((item) => (
                      <RoomAvailableCard
                        key={item.id}
                        item={item}
                        isFav={favorites.includes(item.id)}
                        onFav={toggleFavorite}
                        // ✅ FIX: include "available" type in the route
                        onClick={() => navigate(`/accomodation/available/${item.id}/room-details`)}
                      />
                    ))
                  : wantedAds.map((item) => (
                      <RoomWantedCard
                        key={item.id}
                        item={item}
                        isFav={favorites.includes(item.id)}
                        onFav={toggleFavorite}
                        // ✅ FIX: include "wanted" type in the route
                        onClick={() => navigate(`/accomodation/wanted/${item.id}/room-details`)}
                      />
                    ))
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationListing;
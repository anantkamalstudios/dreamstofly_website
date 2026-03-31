import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Calendar, Users, MapPin } from "lucide-react";
import { searchCountries } from "../../../../api/hotelApi";

const HotelBookingHeroPage = ({ service, details }) => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [destinationCode, setDestinationCode] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const [searching, setSearching] = useState(false);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [countriesLoaded, setCountriesLoaded] = useState(false);

  const loadCountries = () => {
    if (countriesLoaded || loadingCountries) return;
    setLoadingCountries(true);

    searchCountries()
      .then((res) => {
        console.log("SUCCESS:", res);
        setCountries(res?.countries || []);
        setCountriesLoaded(true);
      })
      .catch((err) => {
        console.error("ERROR FULL:", err);
        console.error("ERROR RESPONSE:", err?.response);
      })
      .finally(() => setLoadingCountries(false));
  };

  if (!service || !details) return null;

  const handleSearchHotels = () => {
    if (!destinationCode.trim()) {
      alert("Please enter a destination code.");
      return;
    }
    if (!checkIn) {
      alert("Please select a check-in date.");
      return;
    }
    if (!checkOut) {
      alert("Please select a check-out date.");
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      alert("Check-out date must be after check-in date.");
      return;
    }
    // ADD THIS ↓
    if (adults < 1) {
      alert("At least 1 adult is required.");
      return;
    }

    const params = new URLSearchParams({
      destinationCode: destinationCode.trim().toUpperCase(),
      checkIn,
      checkOut,
      adults: String(Math.max(1, adults)), // ensure minimum 1
      children: String(children),
      rooms: String(rooms),
    });
    if (selectedCountry) params.set("country", selectedCountry);
    navigate(`/services/hotel-booking/search?${params.toString()}`);
  };

  const minDate = new Date().toISOString().split("T")[0];
  const minCheckOut = checkIn || minDate;

  return (
    <>
      <div className="relative">
        {/* Hero Background Section */}
        <section
          className="relative w-full"
          style={{
            backgroundImage: `url(${service.backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            minHeight: "400px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          <div className="container mx-auto px-4 md:px-8 lg:px-14 py-12 lg:py-10 relative z-10 h-full flex flex-col justify-center">
            <div className="mb-32 md:mb-40 lg:mb-48">
              <h1 className="mb-3 text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                {details.title || "Find Your Perfect Hotel"}
              </h1>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-xl text-white/90">
                {details.subtitle || "Search and book hotels worldwide at the best prices"}
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Booking Form Card */}
        <div
          className="container mx-auto px-4 md:px-8 lg:px-14 relative z-20"
          style={{ marginTop: "-180px" }}
        >
          <div className="shadow-2xl max-w-6xl mx-auto">
            <div className="bg-transparent border-b border-gray-200">
              <div className="flex items-center justify-center gap-2">
                <p className="font-semibold text-gray-800 bg-white flex items-center gap-2 px-6 py-3">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  Hotel
                </p>
              </div>
            </div>

            <div className="bg-white p-2 md:p-4 lg:px-8 lg:py-6">
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {/* Country Dropdown */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
                    Country
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 z-10 pointer-events-none" />
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      onClick={loadCountries}
                      onFocus={loadCountries}
                      disabled={loadingCountries}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white appearance-none"
                    >
                      <option value="">
                        {loadingCountries ? "Loading..." : "Select Country"}
                      </option>
                      {countries.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.description?.content || c.code}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Destination Code */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
                    Destination Code *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 z-10 pointer-events-none" />
                    <input
                      type="text"
                      value={destinationCode}
                      onChange={(e) => setDestinationCode(e.target.value.toUpperCase())}
                      placeholder="e.g. PMI, DXB, LON"
                      maxLength={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white uppercase"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Enter city/destination code
                  </p>
                </div>

                {/* Guests & Rooms */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
                    Guests & Rooms
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowGuestsDropdown((v) => !v)}
                    className="relative w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-left text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 pointer-events-none" />
                    <span className="text-gray-800">
                      {adults} Adult{adults > 1 ? "s" : ""}
                      {children > 0 && `, ${children} Child${children > 1 ? "ren" : ""}`}
                      {" · "}{rooms} Room{rooms > 1 ? "s" : ""}
                    </span>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {showGuestsDropdown && (
                    <div className="absolute z-30 mt-2 w-72 right-0 bg-white rounded-xl shadow-lg border border-gray-200 p-4 space-y-4">
                      {[
                        { label: "Adults", description: "18+ years", value: adults, setValue: setAdults, min: 1, max: 9 },
                        { label: "Children", description: "0-17 years", value: children, setValue: setChildren, min: 0, max: 6 },
                        { label: "Rooms", description: "Number of rooms", value: rooms, setValue: setRooms, min: 1, max: 5 },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-800">{row.label}</p>
                            <p className="text-xs text-gray-500">{row.description}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => row.setValue((v) => Math.max(row.min, v - 1))}
                              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="w-6 text-center text-sm text-gray-900">{row.value}</span>
                            <button
                              type="button"
                              onClick={() => row.setValue((v) => Math.min(row.max, v + 1))}
                              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => setShowGuestsDropdown(false)}
                        className="w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Done
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Check-in */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
                    Check-in *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 z-10 pointer-events-none" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={minDate}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
                    />
                  </div>
                  {checkIn && (
                    <div className="text-xs text-gray-500 mt-1">
                      {new Date(checkIn).toLocaleDateString("en-US", { weekday: "long" })}
                    </div>
                  )}
                </div>

                {/* Check-out */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
                    Check-out *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 z-10 pointer-events-none" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={minCheckOut}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
                    />
                  </div>
                  {checkOut && (
                    <div className="text-xs text-gray-500 mt-1">
                      {new Date(checkOut).toLocaleDateString("en-US", { weekday: "long" })}
                    </div>
                  )}
                </div>
              </div>

              {/* Search Button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleSearchHotels}
                  disabled={searching}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-12 py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {searching ? "Searching..." : "Search Hotels"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelBookingHeroPage;

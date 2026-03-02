import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plane, Calendar, Users, MapPin, X } from "lucide-react";
import AirportAutocomplete from "./AirportAutocomplete";

const FlightBookingHeroPage = ({
  service,
  details,
  showLeadForm,
  setShowLeadForm,
  leadFormData,
  handleLeadSubmit,
  handleLeadInputChange,
  submitting,
}) => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("oneway");
  const [fromAirport, setFromAirport] = useState(null);
  const [toAirport, setToAirport] = useState(null);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [showTravellersDropdown, setShowTravellersDropdown] = useState(false);
  const [searching, setSearching] = useState(false);

  if (!service || !details) return null;

  const handleSearchFlight = () => {
    if (!fromAirport?.iata || !toAirport?.iata) {
      alert("Please select From and To airports.");
      return;
    }
    if (!departureDate) {
      alert("Please select a departure date.");
      return;
    }
    if (tripType === "roundtrip" && !returnDate) {
      alert("Please select a return date for round trip.");
      return;
    }

    const params = new URLSearchParams({
      from: fromAirport.iata,
      to: toAirport.iata,
      date: departureDate,
      adults: String(adults),
      children: String(children),
      infants: String(infants),
      tripType,
      cabinClass,
    });
    if (tripType === "roundtrip" && returnDate) {
      params.set("returnDate", returnDate);
    }
    navigate(`/services/student-flight-tickets/search?${params.toString()}`);
  };

  const minDate = new Date().toISOString().split("T")[0];
  const minReturnDate = departureDate || minDate;
  const isReturnDisabled = tripType === "oneway";

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
          <div className="container mx-auto px-4 md:px-8 lg:px-14 py-12 lg:py-10 relative z-10 h-full flex flex-col justify-center ">
            <div className="mb-32 md:mb-40 lg:mb-48">
              <h1 className="mb-3 text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                {details.title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-xl text-white">
                {details.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Flight Booking Form Card */}
        <div
          className="container mx-auto px-4 md:px-8 lg:px-14 relative z-20"
          style={{ marginTop: "-180px" }}
        >
          <div className="shadow-2xl max-w-6xl mx-auto">
            <div className="bg-transparent border-b border-gray-200">
              <div className="flex items-center justify-center gap-2">
                <p className="font-semibold text-gray-800 bg-white flex px-6 py-3">
                  <Plane className="w-5 h-5 text-blue-600" />
                  Flight
                </p>
              </div>
            </div>

            <div className="bg-white p-2 md:p-4 lg:px-8 lg:py-6">
              {/* Trip Type */}
              <div className="flex justify-center gap-4 md:gap-6 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value="oneway"
                    checked={tripType === "oneway"}
                    onChange={() => {
                      setTripType("oneway");
                      setReturnDate("");
                    }}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    One way
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value="roundtrip"
                    checked={tripType === "roundtrip"}
                    onChange={() => setTripType("roundtrip")}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Round Trip
                  </span>
                </label>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* From */}
                <div className="relative">
                  <AirportAutocomplete
                    label="From"
                    icon={Plane}
                    value={fromAirport}
                    onSelect={setFromAirport}
                    placeholder="City or airport"
                    name="from"
                  />
                </div>

                {/* To */}
                <div className="relative">
                  <AirportAutocomplete
                    label="To"
                    icon={MapPin}
                    value={toAirport}
                    onSelect={setToAirport}
                    placeholder="City or airport"
                    name="to"
                  />
                </div>

                {/* Departure */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
                    Departure
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 z-10 pointer-events-none" />
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      min={minDate}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
                    />
                  </div>
                  {departureDate && (
                    <div className="text-xs text-gray-500 mt-1">
                      {new Date(departureDate).toLocaleDateString("en-US", {
                        weekday: "long",
                      })}
                    </div>
                  )}
                </div>

                {/* Return - disabled for one way */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
                    Return
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 z-10 pointer-events-none" />
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      min={minReturnDate}
                      disabled={isReturnDisabled}
                      className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-xs bg-white ${isReturnDisabled
                        ? "bg-gray-100 cursor-not-allowed opacity-60"
                        : "focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        }`}
                    />
                  </div>
                  {returnDate && !isReturnDisabled && (
                    <div className="text-xs text-gray-500 mt-1">
                      {new Date(returnDate).toLocaleDateString("en-US", {
                        weekday: "long",
                      })}
                    </div>
                  )}
                  {isReturnDisabled && (
                    <div className="text-xs text-gray-400 mt-1">
                      Select Round Trip to enable
                    </div>
                  )}
                </div>

                {/* Travellers & Class */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
                    Travellers & Class
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowTravellersDropdown((v) => !v)}
                    className="relative w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-left text-xs bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 pointer-events-none" />
                    <span className="text-gray-800">
                      {adults} Adult{adults > 1 ? "s" : ""}{" "}
                      {children > 0 && `, ${children} Child${children > 1 ? "ren" : ""}`}{" "}
                      {infants > 0 && `, ${infants} Infant${infants > 1 ? "s" : ""}`}{" "}
                      / {cabinClass}
                    </span>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {showTravellersDropdown && (
                    <div className="absolute z-30 mt-2 w-72 right-0 bg-white rounded-xl shadow-lg border border-gray-200 p-4 space-y-4">
                      {[
                        {
                          label: "Adults",
                          description: "12+ years",
                          value: adults,
                          setValue: setAdults,
                          min: 1,
                          max: 9,
                        },
                        {
                          label: "Children",
                          description: "2-12 years",
                          value: children,
                          setValue: setChildren,
                          min: 0,
                          max: 9,
                        },
                        {
                          label: "Infants",
                          description: "Under 2 years",
                          value: infants,
                          setValue: setInfants,
                          min: 0,
                          max: adults,
                        },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-800">{row.label}</p>
                            <p className="text-xs text-gray-500">{row.description}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() =>
                                row.setValue((v) => {
                                  const next = v - 1;
                                  return next < row.min ? row.min : next;
                                })
                              }
                              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="w-6 text-center text-sm text-gray-900">{row.value}</span>
                            <button
                              type="button"
                              onClick={() =>
                                row.setValue((v) => {
                                  const next = v + 1;
                                  return next > row.max ? row.max : next;
                                })
                              }
                              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}

                      <div className="border-t border-gray-200 pt-3">
                        <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase">
                          Cabin Class
                        </label>
                        <select
                          value={cabinClass}
                          onChange={(e) => setCabinClass(e.target.value)}
                          className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        >
                          <option>Economy</option>
                          <option>Premium Economy</option>
                          <option>Business</option>
                          <option>First Class</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Search Button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleSearchFlight}
                  disabled={searching}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-12 py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {searching ? "Searching..." : "Search Flight"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Form Modal - shown first visit only, never after submit */}
      {showLeadForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Book Flight Tickets</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Leave us your contact details and get exclusive offers on international flight bookings.
                </p>
              </div>
              <button
                onClick={() => setShowLeadForm(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <form onSubmit={handleLeadSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstname"
                    value={leadFormData?.firstname || ""}
                    onChange={handleLeadInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastname"
                    value={leadFormData?.lastname || ""}
                    onChange={handleLeadInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={leadFormData?.email || ""}
                  onChange={handleLeadInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={leadFormData?.mobile || ""}
                  onChange={handleLeadInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+91 9876543210"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FlightBookingHeroPage;

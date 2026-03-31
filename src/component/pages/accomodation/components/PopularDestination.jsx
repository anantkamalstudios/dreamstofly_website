import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

const COUNTRY_TO_CODE = {
  "United Kingdom": "GB", "Australia": "AU", "Ireland": "IE", "Canada": "CA",
  "India": "IN", "USA": "US", "United States": "US", "Germany": "DE",
  "France": "FR", "Italy": "IT", "Spain": "ES", "Netherlands": "NL",
  "New Zealand": "NZ", "Singapore": "SG", "UAE": "AE", "South Africa": "ZA",
  "Japan": "JP", "China": "CN", "Brazil": "BR", "Mexico": "MX",
};

const CITY_IMAGES = {
  mumbai: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
  delhi: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
  bangalore: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=80",
  pune: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=600&q=80",
  hyderabad: "https://images.unsplash.com/photo-1632932197476-6a8d63e6f7a0?w=600&q=80",
  chennai: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
  kolkata: "https://images.unsplash.com/photo-1558431382-27e303142255?w=600&q=80",
  ahmedabad: "https://images.unsplash.com/photo-1625218423779-41c8b7a0e78f?w=600&q=80",
  kothrud: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=600&q=80",
  andheri: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
  north: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
  manhattan: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=600&q=80",
  "new york": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80",
  "los angeles": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
  chicago: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80",
  houston: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
  london: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
  manchester: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80",
  birmingham: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80",
  nottingham: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80",
  sydney: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80",
  melbourne: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&q=80",
  brisbane: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&q=80",
  perth: "https://images.unsplash.com/photo-1573935448851-6bbb94e7c07d?w=600&q=80",
  toronto: "https://images.unsplash.com/photo-1517090186835-e348b621c9ca?w=600&q=80",
  vancouver: "https://images.unsplash.com/photo-1560814304-4f05b62af116?w=600&q=80",
  montreal: "https://images.unsplash.com/photo-1569530052219-db785b5a5d84?w=600&q=80",
  calgary: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=600&q=80",
  dublin: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=600&q=80",
  cork: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?w=600&q=80",
  galway: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=600&q=80",
};

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80";
const getCityImage = (cityName) => CITY_IMAGES[cityName?.toLowerCase().trim()] || FALLBACK_IMAGE;

const normalizeCountry = (name) => {
  if (!name) return null;
  const map = {
    "uk": "United Kingdom", "united kingdom": "United Kingdom",
    "australia": "Australia", "ireland": "Ireland", "canada": "Canada",
    "india": "India", "usa": "USA", "united states": "USA", "us": "USA",
  };
  return map[name.toLowerCase().trim()] || name.trim();
};

const scrollbarHide = { scrollbarWidth: "none", msOverflowStyle: "none" };

const PopularDestination = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [activeCountry, setActiveCountry] = useState(null);
  const [cities, setCities] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoadingCountries(true);
      try {
        const [wantedRes, availableRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_BASE_URL}/Accommodation/RoomWanted/countries`),
          fetch(`${import.meta.env.VITE_BASE_URL}/Accommodation/RoomAvailable/countries`),
        ]);
        const [wantedData, availableData] = await Promise.all([
          wantedRes.json(), availableRes.json(),
        ]);
        const extract = (data) =>
          Array.isArray(data?.data)
            ? data.data.map((i) => normalizeCountry(i.country)).filter(Boolean)
            : [];
        const merged = [...new Set([...extract(wantedData), ...extract(availableData)])];
        setCountries(merged);
        if (merged.length > 0) setActiveCountry(merged[0]);
      } catch (err) {
        console.error("Failed to fetch countries:", err);
      } finally {
        setLoadingCountries(false);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    if (!activeCountry) return;
    const fetchCities = async () => {
      setLoadingCities(true);
      setCities([]);
      try {
        const [wantedRes, availableRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_BASE_URL}/Accommodation/RoomWanted/by_country?country=${encodeURIComponent(activeCountry)}`),
          fetch(`${import.meta.env.VITE_BASE_URL}/Accommodation/RoomAvailable/by_country?country=${encodeURIComponent(activeCountry)}`),
        ]);
        const [wantedData, availableData] = await Promise.all([
          wantedRes.json(), availableRes.json(),
        ]);
        const extractCities = (data) =>
          Array.isArray(data?.data)
            ? data.data.map((item) => item.city || item.area || item.pincode).filter(Boolean)
            : [];
        const all = [...extractCities(wantedData), ...extractCities(availableData)];
        const seen = new Set();
        const unique = all.filter((city) => {
          const k = city.toLowerCase().trim();
          if (seen.has(k)) return false;
          seen.add(k);
          return true;
        });
        setCities(unique);
      } catch (err) {
        console.error("Failed to fetch cities:", err);
      } finally {
        setLoadingCities(false);
      }
    };
    fetchCities();
  }, [activeCountry]);

  return (
    <div className="w-full px-8 py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 gap-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Popular Destinations</h1>
          <button className="py-3 px-6 rounded-full bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap flex-shrink-0">
            View All Cities <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Country Tabs — horizontal scroll, no scrollbar */}
        {loadingCountries ? (
          <div className="flex gap-4 mb-8 overflow-x-auto pb-1" style={scrollbarHide}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 w-40 flex-shrink-0 bg-white rounded-2xl animate-pulse border border-gray-100" />
            ))}
          </div>
        ) : (
          <div className="flex gap-4 mb-8 overflow-x-auto pb-1" style={scrollbarHide}>
            {countries.map((name) => {
              const isActive = activeCountry === name;
              const code = COUNTRY_TO_CODE[name];
              return (
                <button
                  key={name}
                  onClick={() => setActiveCountry(name)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl border transition-all text-left flex-shrink-0 ${
                    isActive
                      ? "bg-white border-gray-200 shadow-md"
                      : "bg-white border-gray-200 hover:shadow-sm opacity-70"
                  }`}
                >
                  {code ? (
                    <span style={{
                      display: "inline-flex", width: "2.5rem", height: "2.5rem",
                      borderRadius: "50%", overflow: "hidden", flexShrink: 0,
                      border: "1px solid #e5e7eb",
                    }}>
                      <ReactCountryFlag countryCode={code} svg
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        title={name}
                      />
                    </span>
                  ) : (
                    <span style={{
                      display: "inline-flex", width: "2.5rem", height: "2.5rem",
                      borderRadius: "50%", flexShrink: 0, background: "#e5e7eb",
                    }} />
                  )}
                  <span className="font-bold text-gray-900 text-sm leading-tight whitespace-nowrap">
                    {name}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* City Cards — horizontal scroll, no scrollbar */}
        {loadingCities ? (
          <div className="flex gap-5 overflow-x-auto pb-2" style={scrollbarHide}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-shrink-0 bg-white rounded-2xl animate-pulse border border-gray-100"
                style={{ width: "280px", height: "340px" }} />
            ))}
          </div>
        ) : cities.length === 0 ? (
          <div className="flex items-center justify-center h-48 text-gray-400 text-sm">
            No cities found for {activeCountry}.
          </div>
        ) : (
          <div className="flex gap-5 overflow-x-auto pb-4" style={scrollbarHide}>
            {cities.map((city, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group flex-shrink-0"
                style={{ width: "280px", height: "340px" }}
                onClick={() => navigate(`/accomodation/${city}/residency`)}
              >
                <img
                  src={getCityImage(city)}
                  alt={city}
                  onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-0">
                  <span className="bg-blue-600 text-white px-5 py-2 text-sm font-semibold rounded-r-full rounded-l-md">
                    {city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default PopularDestination;
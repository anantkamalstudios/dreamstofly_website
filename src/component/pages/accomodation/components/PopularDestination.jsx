import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

// Maps country name → ISO 2-letter code
const COUNTRY_TO_CODE = {
  "United Kingdom": "GB",
  "Australia": "AU",
  "Ireland": "IE",
  "Canada": "CA",
  "India": "IN",
  "USA": "US",
  "United States": "US",
  "Germany": "DE",
  "France": "FR",
  "Italy": "IT",
  "Spain": "ES",
  "Netherlands": "NL",
  "New Zealand": "NZ",
  "Singapore": "SG",
  "UAE": "AE",
  "South Africa": "ZA",
  "Japan": "JP",
  "China": "CN",
  "Brazil": "BR",
  "Mexico": "MX",
};

const CITY_DATA = {
  "United Kingdom": {
    cities: [
      { name: "London", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80" },
      { name: "Nottingham", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80" },
      { name: "Manchester", image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80" },
      { name: "Birmingham", image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80" },
    ],
  },

  "Australia": {
    cities: [
      { name: "Sydney", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80" },
      { name: "Melbourne", image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&q=80" },
      { name: "Brisbane", image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&q=80" },
      { name: "Perth", image: "https://images.unsplash.com/photo-1573935448851-6bbb94e7c07d?w=600&q=80" },
    ],
  },

  "Ireland": {
    cities: [
      { name: "Dublin", image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=600&q=80" },
      { name: "Cork", image: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?w=600&q=80" },
      { name: "Galway", image: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=600&q=80" },
      { name: "Limerick", image: "https://images.unsplash.com/photo-1598256989014-9bb3e4e85dda?w=600&q=80" },
    ],
  },

  "Canada": {
    cities: [
      { name: "Toronto", image: "https://images.unsplash.com/photo-1517090186835-e348b621c9ca?w=600&q=80" },
      { name: "Vancouver", image: "https://images.unsplash.com/photo-1560814304-4f05b62af116?w=600&q=80" },
      { name: "Montreal", image: "https://images.unsplash.com/photo-1569530052219-db785b5a5d84?w=600&q=80" },
      { name: "Calgary", image: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=600&q=80" },
    ],
  },

  "India": {
    cities: [
      { name: "Mumbai", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80" },
      { name: "Delhi", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80" },
      { name: "Bangalore", image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=80" },
      { name: "Pune", image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=600&q=80" },
    ],
  },

  "USA": {
    cities: [
      { name: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80" },
      { name: "Los Angeles", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80" },
      { name: "Chicago", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&q=80" },
      { name: "Houston", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80" },
    ],
  },
};

const normalizeCountry = (name) => {
  const map = {
    "uk": "United Kingdom",
    "united kingdom": "United Kingdom",
    "australia": "Australia",
    "ireland": "Ireland",
    "canada": "Canada",
    "india": "India",
    "usa": "USA",
    "united states": "USA",
  };
  return map[name.toLowerCase().trim()] || name;
};

const PopularDestination = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [activeCountry, setActiveCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/Accommodation/RoomWanted/countries`
        );
        const data = await res.json();

        if (res.ok && Array.isArray(data?.data)) {
          const fetched = data.data
            .map((item) => normalizeCountry(item.country))
            .filter((name) => CITY_DATA[name])
            .filter((name, idx, arr) => arr.indexOf(name) === idx);

          setCountries(fetched);
          if (fetched.length > 0) setActiveCountry(fetched[0]);
        }
      } catch (err) {
        console.error("Failed to fetch countries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const activeCities = activeCountry ? (CITY_DATA[activeCountry]?.cities || []) : [];

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=City+Image";
  };

  return (
    <div className="w-full px-8 py-10 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 gap-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Popular Destinations
          </h1>
          <button className="py-3 px-6 rounded-full bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700 transition-colors text-sm font-medium">
            View All Cities <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Country Tabs */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-white rounded-2xl animate-pulse border border-gray-100" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {countries.map((name) => {
              const isActive = activeCountry === name;
              const code = COUNTRY_TO_CODE[name];
              return (
                <button
                  key={name}
                  onClick={() => setActiveCountry(name)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl border transition-all text-left ${isActive
                    ? "bg-white border-gray-200 shadow-md"
                    : "bg-white border-gray-200 hover:shadow-sm opacity-80"
                    }`}
                >
                  {/* ── Circular flag using ReactCountryFlag ── */}
                  {code ? (
                    <span
                      style={{
                        display: "inline-flex",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        overflow: "hidden",
                        flexShrink: 0,
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      <ReactCountryFlag
                        countryCode={code}
                        svg
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        title={name}
                      />
                    </span>
                  ) : (
                    // Fallback grey circle if no code found
                    <span
                      style={{
                        display: "inline-flex",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: "#e5e7eb",
                      }}
                    />
                  )}
                  <span className="font-bold text-gray-900 text-sm leading-tight truncate">
                    {name}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* City Images */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activeCities.map((city, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group h-96"
                onClick={() => navigate(`/accomodation/${city.name}/residency`)}
              >
                <img
                  src={city.image}
                  alt={city.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-0">
                  <span className="bg-blue-600 text-white px-5 py-2 text-sm font-semibold rounded-r-full rounded-l-md">
                    {city.name}
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
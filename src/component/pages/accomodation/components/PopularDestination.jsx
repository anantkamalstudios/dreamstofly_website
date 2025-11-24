import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const PopularDestination = () => {
  const navigate = useNavigate();

  const countries = [
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Ireland", flag: "🇮🇪" },
    { name: "Canada", flag: "🇨🇦" },
  ];

  const cities = [
    {
      name: "London",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
    },
    {
      name: "Nottingham",
      image:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "London",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
    },
    {
      name: "Nottingham",
      image:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const handleImageError = (e) => {
    e.target.src =
      "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=City+Image";
  };

  return (
    <div className="w-full bg-gray-50 p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Popular Destinations
          </h1>
          <button className="py-3 px-6 rounded-full bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700 transition-colors">
            View All Cities <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Country Flags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-4xl">{country.flag}</div>
              <div className="font-semibold text-gray-900">{country.name}</div>
            </div>
          ))}
        </div>

        {/* City Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group h-96"
              onClick={() => navigate(`/accomodation/${city.name}/residency`)}
            >
              <img
                src={city.image}
                alt={city.name}
                onError={handleImageError}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {city.name}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;

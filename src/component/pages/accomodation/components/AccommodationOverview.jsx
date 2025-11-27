import React from "react";
import { ArrowRight, Star } from "lucide-react";

const AccommodationOverview = () => {
  const stats = [
    { value: "1.5 M+", label: "Beds" },
    { value: "10 K+", label: "Properties" },
    { value: "700+", label: "Cities" },
  ];

  return (
    <div className="w-full py-8 md:py-12">
      <div className="w-full mx-auto px-4 md:px-16">
        {/* Top Cards Section */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {/* Card 1 - Moving Abroad */}
          <div className="bg-white p-6 md:p-8 hover:bg-blue-200">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Moving Abroad? We've Got All the Essentials.
            </h3>
            <p className="text-gray-700 text-sm md:text-base mb-4">
              From Student kits to House guarantors, UniEssential covers every
              student essential.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium transition-all flex items-center gap-2 text-sm md:text-base">
              Explore FlexiHome
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2 - Short Stays */}
          <div className="bg-white p-6 md:p-8 border border-gray-200 hover:bg-blue-200 ">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Looking For Short Stays?
            </h3>
            <p className="text-gray-700 text-sm md:text-base mb-4">
              Discover flexible student accommodations with
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium transition-all flex items-center gap-2 text-sm md:text-base">
              Browse Properties
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Stats */}
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden sm:block w-px h-12 md:h-16 bg-gray-300"></div>
              )}
            </React.Fragment>
          ))}

          {/* Separator before Google */}
          <div className="hidden sm:block w-px h-12 md:h-16 bg-gray-300"></div>

          {/* Google Rating */}
          <div className="text-center flex">
            <div>
              <p className="text-xs md:text-sm text-gray-600">Rated</p>
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
                4.8
              </p>
              <p className="text-xs md:text-sm text-gray-600">out of 5</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg
                className="h-6 md:h-8"
                viewBox="0 0 92 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="0"
                  y="20"
                  fontFamily="Arial, sans-serif"
                  fontSize="18"
                  fontWeight="bold"
                >
                  <tspan fill="#4285F4">G</tspan>
                  <tspan fill="#EA4335">o</tspan>
                  <tspan fill="#FBBC04">o</tspan>
                  <tspan fill="#4285F4">g</tspan>
                  <tspan fill="#34A853">l</tspan>
                  <tspan fill="#EA4335">e</tspan>
                </text>
              </svg>
              <div className="flex items-center gap-1 justify-center">
                <span className="text-xs md:text-sm text-gray-700 font-medium">
                  Reviews
                </span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationOverview;

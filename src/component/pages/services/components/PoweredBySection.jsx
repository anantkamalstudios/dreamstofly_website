import React from "react";
import { Plane, MapPin, Scale, Car } from "lucide-react";

export default function PoweredBySection() {
  const logos = [
    { name: "O STIN", text: "O STIN" },
    { name: "GLS", text: "GLS" },
    { name: "DELL", text: "DELL" },
    { name: "DPEX", text: "DPEX" },
    { name: "Arbys", text: "Arby's" },
    { name: "Glovo", text: "Glovo" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Powered By Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-12">
          Powered By
        </h2>

        {/* Infinite Scrolling Logos */}
        <div className="relative overflow-hidden mb-16">
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 md:w-64 h-24 flex items-center justify-center mx-4"
              >
                <div className="text-2xl md:text-3xl font-bold">
                  {logo.name === "GLS" && (
                    <span className="flex items-center">
                      <span className="text-indigo-500">GLS</span>
                    </span>
                  )}
                  {logo.name === "DELL" && (
                    <span className="border-4 border-indigo-600 rounded-full px-6 py-2 text-indigo-600">
                      {logo.text}
                    </span>
                  )}
                  {logo.name === "DPEX" && (
                    <span>
                      <span className="text-indigo-700">DP</span>
                      <span className="text-orange-500">EX</span>
                      <div className="text-xs text-orange-500 text-center">
                        WORLDWIDE
                      </div>
                    </span>
                  )}
                  {logo.name === "Glovo" && (
                    <span className="bg-orange-500 text-white px-4 py-2 rounded">
                      {logo.text}
                    </span>
                  )}
                  {logo.name === "O STIN" && (
                    <span className="text-black font-bold tracking-wider">
                      {logo.text}
                    </span>
                  )}
                  {logo.name === "Arbys" && (
                    <span className="text-red-800 font-serif italic">
                      {logo.text}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Static Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Plane className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center">
              3600+ transport
              <br />
              companies
            </h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 border-4 border-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MapPin className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Available of 1600+
              <br />
              airports
            </h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Compare prices
            </h3>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 border-4 border-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Car className="w-10 h-10 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Choice of ride
            </h3>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

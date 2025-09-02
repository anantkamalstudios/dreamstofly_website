import React from "react";
import { MapPin, Star, Signal } from "lucide-react";

const ServicesExperiences = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left visual column */}
          <div className="relative flex justify-center">
            {/* background circle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] rounded-full bg-orange-100/60" />

            {/* portrait */}
            <div className="relative z-10 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] rounded-full overflow-hidden shadow-lg">
              <img
                src="/images/services/service_exp.png"
                alt="Traveler"
                className="w-full h-full object-cover"
              />
            </div>

            {/* destinations pill */}
            <div className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-4 md:p-6 w-[140px] md:w-[170px] z-20">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-100 text-orange-500 mb-2 md:mb-3">
                <MapPin size={20} className="md:size-[22px]" />
              </div>
              <div
                className="text-xl md:text-2xl font-extrabold"
                style={{ color: "var(--hover-color)" }}
              >
                600%
              </div>
              <div className="text-gray-500 text-xs md:text-sm">
                Destinations
              </div>
            </div>

            {/* floating star badge */}
            <div
              className="absolute left-8 sm:left-10 md:left-14 top-0 sm:top-12 md:top-16 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white shadow-md flex items-center justify-center z-20"
              style={{
                animation: "moveStar 2.2s ease-in-out infinite alternate",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  animation: "rotateScaleStar 3s linear infinite",
                }}
              >
                <Star className="text-orange-500" size={20} />
              </span>
            </div>
            <style>
              {`
                @keyframes moveStar {
                  0% { transform: translateY(0) scale(1) rotate(0deg); }
                  30% { transform: translateY(-8px) scale(1.08) rotate(-8deg); }
                  60% { transform: translateY(6px) scale(0.96) rotate(8deg); }
                  100% { transform: translateY(0) scale(1) rotate(0deg); }
                }
                @keyframes rotateScaleStar {
                  0% { transform: scale(1) rotate(0deg); }
                  50% { transform: scale(1.12) rotate(180deg); }
                  100% { transform: scale(1) rotate(360deg); }
                }
              `}
            </style>

            {/* customers card */}
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 flex items-center gap-3 z-20">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                <Signal size={18} className="sm:size-[20px]" />
              </div>
              <div>
                <div
                  className="text-lg sm:text-xl font-bold"
                  style={{ color: "var(--hover-color)" }}
                >
                  5000+
                </div>
                <div className="text-gray-500 text-[10px] sm:text-xs">
                  Customers
                </div>
              </div>
            </div>
          </div>

          {/* Right content column */}
          <div>
            <div className="uppercase tracking-widest text-orange-500 font-semibold mb-2 md:mb-3">
              Our Experience
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-6 text-gray-900">
              Our Stories Have <br className="hidden md:block" /> Adventures
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 md:mb-10 max-w-xl">
              We are experienced in bringing adventures to stay their journey,
              with all outdoor destinations in the world as our specialties.
              Start your adventure now! Nature has already called you!
            </p>

            {/* metrics */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-xl">
              <div>
                <div className="text-2xl md:text-4xl font-extrabold text-orange-500">
                  12K+
                </div>
                <div className="mt-1 md:mt-2 text-gray-800 font-medium text-sm md:text-base">
                  Succes Journey
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-extrabold text-orange-500">
                  16+
                </div>
                <div className="mt-1 md:mt-2 text-gray-800 font-medium text-sm md:text-base">
                  Awards Winning
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-extrabold text-orange-500">
                  20+
                </div>
                <div className="mt-1 md:mt-2 text-gray-800 font-medium text-sm md:text-base">
                  Years Of Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesExperiences;

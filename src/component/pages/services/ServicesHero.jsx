import React from "react";

const ServicesHero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-stretch overflow-hidden min-h-[70vh] lg:min-h-screen">
      {/* Left Section - Text and CTA */}
      <div className="w-full lg:w-1/2 bg-white px-5 sm:px-8 lg:px-16 py-10 sm:py-14 lg:py-20 relative z-10 flex items-center justify-center">
        <div className="max-w-xl w-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          {/* Badge */}
          <div className="inline-block bg-yellow-500 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide mb-5">
            Best Study Abroad Services
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 sm:mb-6 leading-tight">
            Study,{" "}
            <span className="relative inline-block">
              Enjoy
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 20"
                fill="none"
              >
                <path
                  d="M0 10 Q50 0 100 10 T200 10"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            and live your Dreams
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-prose">
            Comprehensive support for your study abroad journey. From visa
            assistance to accommodation, we've got everything covered to make
            your dreams take flight.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center w-full">
            <button className="bg-blue-600 text-white px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
              Find out more
            </button>
            <button className="bg-white text-blue-600 px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex flex-col sm:flex-row items-center justify-center gap-2 w-full sm:w-auto text-center">
              <span className="w-full flex justify-center sm:justify-start items-center">
                Watch now
                <svg
                  className="w-5 h-5 ml-2 sm:ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Stats (stacked) */}
          <div className="mt-8 lg:hidden w-full">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-md border border-white/30">
              <div className="flex justify-between">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">500+</div>
                  <div className="text-xs text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-indigo-600">50+</div>
                  <div className="text-xs text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-violet-600">98%</div>
                  <div className="text-xs text-gray-600">Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center px-4 lg:px-8">
          <img
            src="/images/services/services_hero.png"
            alt="Traveler sitting on luggage"
            className="select-none pointer-events-none max-h-[40vh] sm:max-h-[55vh] md:max-h-[70vh] lg:max-h-[92vh] w-auto object-contain drop-shadow-2xl"
            style={{ objectPosition: "center bottom", display: "block" }}
          />

          {/* Bottom shapes under the image (hidden on xs for performance) */}
          <div className="hidden sm:block absolute bottom-4 left-1/2 -translate-x-1/2 w-[88%] h-7 bg-black/10 blur-xl rounded-full"></div>
          <div className="hidden sm:block absolute -bottom-6 left-10 w-32 h-32 lg:w-40 lg:h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="hidden sm:block absolute -bottom-10 right-10 w-40 h-40 lg:w-52 lg:h-52 bg-orange-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="absolute top-12 left-6 hidden lg:block animate-bounce">
          <svg
            className="w-12 h-12 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21.5 12.5l-3-3-2-2-1-1c-.5-.5-1.2-.5-1.7 0l-1 1-2 2-3 3c-.5.5-.5 1.2 0 1.7l3 3 2 2 1 1c.5.5 1.2.5 1.7 0l1-1 2-2 3-3c.5-.5.5-1.2 0-1.7z" />
          </svg>
        </div>
        <div
          className="absolute bottom-24 right-10 hidden lg:block animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <svg
            className="w-10 h-10 text-indigo-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21.5 12.5l-3-3-2-2-1-1c-.5-.5-1.2-.5-1.7 0l-1 1-2 2-3 3c-.5.5-.5 1.2 0 1.7z" />
          </svg>
        </div>
      </div>

      {/* Stats Section - Overlay (desktop only) */}
      <div className="hidden lg:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-5 shadow-xl border border-white/20">
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">50+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-600">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

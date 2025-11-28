import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowRight, Check } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import ind from "/images/services/ind.png";
import ca from "/images/services/cand.png";
import au from "/images/services/aust.png";
import gb from "/images/services/uk.png";
import us from "/images/services/ind.png";
import de from "/images/services/ind.png";

const countriesData = [
  {
    id: 1,
    name: "Canada",
    flag: "🇨🇦",
    flagImage: ca,
    features: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
    bgColor: "bg-gradient-to-br from-red-50 to-white",
    flagBg: "bg-red-100",
  },
  {
    id: 2,
    name: "India",
    flag: "🇮🇳",
    flagImage: ind,
    features: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
    bgColor: "bg-gradient-to-br from-orange-50 to-white",
    flagBg: "bg-orange-100",
  },
  {
    id: 3,
    name: "Australia",
    flag: "🇦🇺",
    flagImage: au,
    features: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
    bgColor: "bg-gradient-to-br from-red-50 to-white",
    flagBg: "bg-red-100",
  },
  {
    id: 4,
    name: "United Kingdom",
    flag: "🇬🇧",
    flagImage: gb,
    features: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
    bgColor: "bg-gradient-to-br from-blue-50 to-white",
    flagBg: "bg-blue-100",
  },
  {
    id: 5,
    name: "United States",
    flag: "🇺🇸",
    flagImage: us,
    features: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
    bgColor: "bg-gradient-to-br from-blue-50 to-white",
    flagBg: "bg-blue-100",
  },
  {
    id: 6,
    name: "Germany",
    flag: "🇩🇪",
    flagImage: de,
    features: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
    bgColor: "bg-gradient-to-br from-yellow-50 to-white",
    flagBg: "bg-yellow-100",
  },
];

const CountryCard = ({ country }) => {
  return (
    <div className=" rounded-2xl p-6 shadow-sm border border-gray-100 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="w-16 h-16 rounded-full flex items-center justify-start mb-6">
        <img
          src={country.flagImage}
          alt={`${country.name} flag`}
          className="object-contain"
        />
      </div>

      {/* Country Name */}
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        {country.name}
      </h3>

      {/* Features List */}
      <div className="space-y-8">
        {country.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
              <Check className=" text-green-600" />
            </div>
            <span className="text-gray-600 text-sm font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeaturedServices = () => {
  return (
    <div className="w-full relative">
      <div className="max-w-7xl container mx-auto px-4 relative">
        {/* Header */}
        <div className="mb-8">
          <div className="text-sm text-gray-400 my-4 flex items-center gap-2">
            <span>AVAILABLE COUNTRIES</span>
            <img
              src="/images/services/heading_object.png"
              alt="Heading Object"
              className="w-auto h-auto"
            />
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Urban Escapes City Hopping
              <br />
              Adventures
            </h1>
            <button className="flex gap-1 text-white bg-blue-600 px-6 py-4 rounded-full items-center">
              View More <ArrowRight />{" "}
            </button>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={3500}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="!pb-12"
          >
            {countriesData.map((country) => (
              <SwiperSlide key={country.id}>
                <CountryCard country={country} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;

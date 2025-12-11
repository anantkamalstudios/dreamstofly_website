import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import newsData from "../../data/home/Latestnews";

export default function LatestNews() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Latest News & Stories
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button className="px-4 py-1 rounded-full bg-black text-white font-medium text-sm">
          Exam Alerts
        </button>
        <button className="px-4 py-1 rounded-full border border-gray-400 text-gray-700 font-medium text-sm">
          College Alerts
        </button>
        <button className="px-4 py-1 rounded-full border border-gray-400 text-gray-700 font-medium text-sm">
          Admission Alerts
        </button>
      </div>

      {/* Swiper Carousel */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={3} // Default for large screens
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {newsData.map((news, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 p-4 flex flex-col h-full">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {news.description}
                </p>
                <div className="mt-auto flex items-center text-black font-medium text-sm hover:underline cursor-pointer">
                  Read more
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

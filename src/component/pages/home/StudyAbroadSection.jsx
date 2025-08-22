
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaGraduationCap } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import countries from "../../data/home/studyabord";

export default function StudyAbroadSection() {
    return (
        <>
            <hr className="mt-8" />
            <div className="max-w-7xl mx-auto px-4 py-8 relative">
                <h2 className="text-4xl font-bold mb-6">Study Abroad</h2>

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
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints={{
                        1280: { slidesPerView: 3 },
                        1024: { slidesPerView: 2 },
                        0: { slidesPerView: 1 }, // ✅ only 1 full card on mobile
                    }}
                >
                    {countries.map((country, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-lg border shadow p-5 h-full">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <img
                                        src={country.icon}
                                        alt={country.name}
                                        className="w-16 h-16 object-contain bg-gray-100 rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            Study in {country.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            Check {country.colleges} Colleges{" "}
                                            <span className="text-lg">›</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="flex justify-between bg-gray-50 p-3 rounded mb-3">
                                    <div className="flex items-center gap-2">
                                        <FaGraduationCap className="text-gray-600 text-2xl bg-white rounded-full p-1" />
                                        <span className="text-sm font-semibold">
                                            {country.colleges}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaDollarSign className="text-gray-600 text-xl bg-white rounded-full p-1" />
                                        <span className="text-sm font-semibold">{country.cost}</span>
                                    </div>
                                </div>

                                {/* Guides */}
                                <div>
                                    <h4 className="font-semibold mb-2">Guides</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {country.guides.map((guide, i) => (
                                            <li
                                                key={i}
                                                className="flex justify-between items-center border-b border-gray-200 last:border-none pb-1"
                                            >
                                                {guide} <span className="text-xl">›</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="custom-prev absolute left-[-20px] top-1/2 transform -translate-y-1/2 
                        bg-white shadow-md rounded-full w-12 h-12 flex items-center 
                        justify-center cursor-pointer z-10">
                    <GoArrowLeft size={24} />
                </div>
                <div className="custom-next absolute right-[-20px] top-1/2 transform -translate-y-1/2 
                        bg-white shadow-md rounded-full w-12 h-12 flex items-center 
                        justify-center cursor-pointer z-10">
                    <GoArrowRight size={24} />
                </div>
            </div>
        </>
    );
}


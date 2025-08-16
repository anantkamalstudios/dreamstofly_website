
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import cities from "../../data/studyplace";

export default function TopStudyPlacesCarousel() {
    return (
        <>
            <hr className="mt-8" />
            <div className="max-w-7xl mx-auto px-4 py-6 relative">
                <h2 className="text-2xl font-bold mb-4">Top Study Places</h2>

                {/* Swiper with autoplay + breakpoints */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={16}
                    slidesPerView={6}
                    breakpoints={{
                        1280: { slidesPerView: 4 },
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        0: { slidesPerView: 1 },
                    }}
                >
                    {cities.map((city, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white border rounded-lg flex flex-col items-center 
                              py-6 hover:bg-gray-100 transition cursor-pointer">
                                <img
                                    src={city.img}
                                    alt={city.name}
                                    className="h-16 mb-4 object-contain"
                                />
                                <p className="font-semibold text-gray-800">{city.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom navigation buttons (hide on mobile) */}
                <div className="hidden md:flex custom-prev absolute left-[-20px] top-1/2 transform -translate-y-1/2 
                        bg-white shadow-md rounded-full w-10 h-10 items-center 
                        justify-center cursor-pointer z-10">
                    <GoArrowLeft size={26} />
                </div>
                <div className="hidden md:flex custom-next absolute right-[-20px] top-1/2 transform -translate-y-1/2 
                        bg-white shadow-md rounded-full w-10 h-10 items-center 
                        justify-center cursor-pointer z-10">
                    <GoArrowRight size={26} />
                </div>
            </div>
        </>
    );
}

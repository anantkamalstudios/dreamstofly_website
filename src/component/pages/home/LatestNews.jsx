// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// export default function LatestNews() {
//     const newsData = [
//         {
//             title: "Do PYQs repeat in CLAT- Repeated Questions, Previous Year Trends",
//             date: "Aug 13, 2025",
//             description:
//                 "Do PYQs Repeat In CLAT? Yes, PYQs Repeat In CLAT. Over The Years, Questions Have Been Repeated In Logical Reasoning...",
//         },
//         {
//             title: "CAT MCQs on Geometry: CAT Questions for Practice with Answers",
//             date: "Aug 13, 2025",
//             description:
//                 "The CAT QA Section Requires Speed And Accuracy, Along With A Thorough Understanding Of The Geometry. This Article Provides A...",
//         },
//         {
//             title: "CAT MCQs on Sentence Formation: CAT Questions for Practice",
//             date: "Aug 13, 2025",
//             description:
//                 "The CAT VARC Section Requires Good Reading Skills, Critical Thinking, And Attention To Detail, Along With A Thorough...",
//         },
//         {
//             title: "CAT MCQs on Logical Reasoning: CAT Questions for Practice",
//             date: "Aug 13, 2025",
//             description:
//                 "The CAT VARC Section Requires Good Reading Skills, Critical Thinking, And Attention To Detail, Along With A Thorough...",
//         },
//     ];

//     return (
//         <div className="relative w-full px-4 py-8">
//             {/* Heading */}
//             <h2 className="text-2xl md:text-3xl font-bold mb-4">
//                 Latest News & Stories
//             </h2>

//             {/* Category Buttons */}
//             <div className="flex flex-wrap gap-3 mb-6">
//                 <button className="px-4 py-1 rounded-full bg-black text-white font-medium text-sm">
//                     Exam Alerts
//                 </button>
//                 <button className="px-4 py-1 rounded-full border border-gray-400 text-gray-700 font-medium text-sm">
//                     College Alerts
//                 </button>
//                 <button className="px-4 py-1 rounded-full border border-gray-400 text-gray-700 font-medium text-sm">
//                     Admission Alerts
//                 </button>
//             </div>

//             {/* Swiper Carousel */}
//             <div className="relative">
//                 {/* Navigation Buttons */}
//                 <div className="swiper-button-prev custom-prev absolute left-[-15px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10 hover:bg-gray-100">
//                     <GoArrowLeft size={22} />
//                 </div>
//                 <div className="swiper-button-next custom-next absolute right-[-15px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10 hover:bg-gray-100">
//                     <GoArrowRight size={22} />
//                 </div>

//                 <Swiper
//                     modules={[Navigation, Autoplay]}
//                     navigation={{
//                         nextEl: ".custom-next",
//                         prevEl: ".custom-prev",
//                     }}
//                     autoplay={{
//                         delay: 3000,
//                         disableOnInteraction: false,
//                     }}
//                     spaceBetween={20}
//                     breakpoints={{
//                         320: { slidesPerView: 1 },
//                         640: { slidesPerView: 2 },
//                         1024: { slidesPerView: 3 },
//                         1280: { slidesPerView: 4 },
//                     }}
//                 >
//                     {newsData.map((news, index) => (
//                         <SwiperSlide key={index}>
//                             <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 p-4 flex flex-col h-full">

//                                 <h3 className="font-semibold text-lg mb-2 line-clamp-2">
//                                     {news.title}
//                                 </h3>
//                                 <p className="text-sm text-gray-500 mb-2">{news.date}</p>
//                                 <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                                     {news.description}
//                                 </p>
//                                 <div className="mt-auto flex items-center text-black font-medium text-sm hover:underline cursor-pointer">
//                                     Read more
//                                     <GoArrowRight className="ml-2" />
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// }
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import newsData from "../../data/home/Latestnews"

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
                {/* Navigation Buttons */}
                <div className="swiper-button-prev custom-prev absolute left-[-18px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center text-black justify-center cursor-pointer z-10 hover:bg-gray-100">
                    <GoArrowLeft size={22} className="text-black" />
                </div>
                <div className="swiper-button-next custom-next absolute right-[-18px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10 hover:bg-gray-100">
                    <GoArrowRight size={22} className="text-black" />
                </div>

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
                    slidesPerView={3} // Always 3 on large screens
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
                                    <GoArrowRight className="ml-2" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Smile } from "lucide-react";
// import Heading from "../../../common/Heading";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [slidesToShow, setSlidesToShow] = useState(3);

//   const reviews = [
//     {
//       id: 1,
//       rating: 5,
//       text: "I had a bad roommate experience in my first year (somewhere else), so this place was a literal upgrade. Quiet, clean, and the walls weren't thin.",
//       author: "Armando McClure",
//       location: "Newcastle Upon Tyne, Newcastle University",
//       avatar:
//         "https://ui-avatars.com/api/?name=Armando+McClure&background=FF6B6B&color=fff&size=48",
//     },
//     {
//       id: 2,
//       rating: 5,
//       text: "I had a bad roommate experience in my first year (somewhere else), so this place was a literal upgrade. Quiet, clean, and the walls weren't thin.",
//       author: "Armando McClure",
//       location: "Newcastle Upon Tyne, Newcastle University",
//       avatar:
//         "https://ui-avatars.com/api/?name=Armando+McClure&background=FF6B6B&color=fff&size=48",
//     },
//     {
//       id: 3,
//       rating: 5,
//       text: "I had a bad roommate experience in my first year (somewhere else), so this place was a literal upgrade. Quiet, clean, and the walls weren't thin.",
//       author: "Armando McClure",
//       location: "Newcastle Upon Tyne, Newcastle University",
//       avatar:
//         "https://ui-avatars.com/api/?name=Armando+McClure&background=FF6B6B&color=fff&size=48",
//     },
//     {
//       id: 4,
//       rating: 5,
//       text: "Amazing facilities and great community atmosphere. The support from staff has been exceptional throughout my stay.",
//       author: "Sarah Johnson",
//       location: "Manchester, University of Manchester",
//       avatar:
//         "https://ui-avatars.com/api/?name=Sarah+Johnson&background=4ECDC4&color=fff&size=48",
//     },
//     {
//       id: 5,
//       rating: 5,
//       text: "Best accommodation I've experienced. Everything is modern, secure, and the location is perfect for campus.",
//       author: "James Chen",
//       location: "London, Imperial College London",
//       avatar:
//         "https://ui-avatars.com/api/?name=James+Chen&background=95E1D3&color=fff&size=48",
//     },
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setSlidesToShow(1);
//       } else if (window.innerWidth < 1024) {
//         setSlidesToShow(2);
//       } else {
//         setSlidesToShow(3);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const maxIndex = Math.max(0, reviews.length - slidesToShow);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
//   };

//   return (
//     <section className="py-6 px-12 sm:py-8 sm:px-16 lg:py-10 lg:px-20">
//       <div className="mx-auto">
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 lg:mb-12 gap-4 lg:gap-6">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
//             {/* <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold text-gray-900 ">
//               Our students love us!
//             </h4> */}
//             <Heading text="Our students love us!" />

//             <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
//               <div className="h-12 w-px bg-gray-300 hidden lg:block"></div>

//               <div className="flex items-center gap-1 ">
//                 <Smile className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
//                 <span className="text-xl sm:text-2xl font-normal sm:font-semibold text-gray-900">
//                   2M+
//                 </span>
//                 <span className="text-sm sm:text-sm text-gray-600 font-medium ">
//                   Happy Students
//                 </span>
//               </div>

//               <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>

//               <div className="flex items-center gap-2 sm:gap-3">
//                 <span className="text-xs sm:text-sm text-gray-700 font-medium ">
//                   Rated 4.8 out of 5 on
//                 </span>
//                 <svg className="h-6 sm:h-8" viewBox="0 0 88 29" fill="none">
//                   <text
//                     x="0"
//                     y="20"
//                     className="fill-blue-600 font-bold"
//                     style={{ fontSize: "18px" }}
//                   >
//                     G
//                   </text>
//                   <text
//                     x="14"
//                     y="20"
//                     className="fill-red-600 font-bold"
//                     style={{ fontSize: "18px" }}
//                   >
//                     o
//                   </text>
//                   <text
//                     x="24"
//                     y="20"
//                     className="fill-yellow-500 font-bold"
//                     style={{ fontSize: "18px" }}
//                   >
//                     o
//                   </text>
//                   <text
//                     x="36"
//                     y="20"
//                     className="fill-blue-600 font-bold"
//                     style={{ fontSize: "18px" }}
//                   >
//                     g
//                   </text>
//                   <text
//                     x="48"
//                     y="20"
//                     className="fill-green-600 font-bold"
//                     style={{ fontSize: "18px" }}
//                   >
//                     l
//                   </text>
//                   <text
//                     x="54"
//                     y="20"
//                     className="fill-red-600 font-bold"
//                     style={{ fontSize: "18px" }}
//                   >
//                     e
//                   </text>
//                   <text
//                     x="0"
//                     y="28"
//                     className="fill-gray-500"
//                     style={{ fontSize: "9px" }}
//                   >
//                     Reviews
//                   </text>
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <button
//               onClick={handlePrev}
//               className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
//             </button>
//             <button
//               onClick={handleNext}
//               className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//             </button>
//           </div>
//         </div>
//         {/* Slider wrapper */}
//         {/* <div className="overflow-hidden">
//           <div
//             className="flex gap-4 lg:gap-6 transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
//             }}
//           >
//             {reviews.map((review) => (
//               <div
//                 key={review.id}
//                 className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow flex-shrink-0 "
//                 style={{
//                   width: `calc(${100 / slidesToShow}% - ${
//                     ((slidesToShow - 1) *
//                       (slidesToShow === 1 ? 0 : slidesToShow === 2 ? 12 : 24)) /
//                     slidesToShow
//                   }px)`,
//                 }}
//               >
//                 <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                       </svg>
//                     ))}
//                   </div>
//                   <span className="text-sm sm:text-base text-gray-900 font-normal">
//                     Rated {review.rating} out of 5
//                   </span>
//                 </div>

//                 <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
//                   {review.text}
//                 </p>

//                 <div className="flex items-center gap-2 sm:gap-3">
//                   <img
//                     src={review.avatar}
//                     alt={review.author}
//                     className="w-10 h-10 rounded-full flex-shrink-0"
//                   />
//                   <div>
//                     <div className="text-sm sm:text-base font-medium text-gray-900">
//                       {review.author}
//                     </div>
//                     <div className="text-xs text-gray-400">
//                       {review.location}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}
//         <div className="relative">
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             navigation={{
//               nextEl: ".custom-next-review",
//               prevEl: ".custom-prev-review",
//             }}
//             autoplay={{
//               delay: 4000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             spaceBetween={24}
//             slidesPerView={3} // Default for large screens
//             breakpoints={{
//               320: {
//                 slidesPerView: 1,
//                 spaceBetween: 16,
//               },
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 16,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 24,
//               },
//             }}
//           >
//             {reviews.map((review) => (
//               <SwiperSlide key={review.id}>
//                 <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow h-full flex flex-col">
//                   {/* Rating */}
//                   <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
//                     <div className="flex gap-1">
//                       {[...Array(5)].map((_, i) => (
//                         <svg
//                           key={i}
//                           className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                         </svg>
//                       ))}
//                     </div>
//                     <span className="text-sm sm:text-base text-gray-900 font-normal">
//                       Rated {review.rating} out of 5
//                     </span>
//                   </div>

//                   {/* Review Text */}
//                   <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 flex-grow">
//                     {review.text}
//                   </p>

//                   {/* Author */}
//                   <div className="flex items-center gap-2 sm:gap-3 mt-auto">
//                     <img
//                       src={review.avatar}
//                       alt={review.author}
//                       className="w-10 h-10 rounded-full flex-shrink-0"
//                     />
//                     <div>
//                       <div className="text-sm sm:text-base font-medium text-gray-900">
//                         {review.author}
//                       </div>
//                       <div className="text-xs text-gray-400">
//                         {review.location}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//         {/* Dots indicator for mobile/tablet */}
//         <div className="flex justify-center gap-2 mt-6 lg:hidden">
//           {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`w-2 h-2 rounded-full transition-all ${
//                 idx === currentIndex
//                   ? "bg-blue-600 w-6"
//                   : "bg-gray-300 hover:bg-gray-400"
//               }`}
//               aria-label={`Go to slide ${idx + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Smile, X } from "lucide-react";
import Heading from "../../../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [selectedReview, setSelectedReview] = useState(null);
  const swiperRef = useRef(null);

  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "I had a bad roommate experience in my first year (somewhere else), so this place was a literal upgrade. Quiet, clean, and the walls weren't thin.",
      author: "Armando McClure",
      location: "Newcastle Upon Tyne, Newcastle University",
      avatar:
        "https://ui-avatars.com/api/?name=Armando+McClure&background=FF6B6B&color=fff&size=48",
    },
    {
      id: 2,
      rating: 5,
      text: "I had a bad roommate experience in my first year (somewhere else), so this place was a literal upgrade. Quiet, clean, and the walls weren't thin. The amenities are top-notch and staff is very responsive to any issues.",
      author: "Armando McClure",
      location: "Newcastle Upon Tyne, Newcastle University",
      avatar:
        "https://ui-avatars.com/api/?name=Armando+McClure&background=FF6B6B&color=fff&size=48",
    },
    {
      id: 3,
      rating: 5,
      text: "I had a bad roommate experience in my first year (somewhere else), so this place was a literal upgrade. Quiet, clean, and the walls weren't thin.",
      author: "Armando McClure",
      location: "Newcastle Upon Tyne, Newcastle University",
      avatar:
        "https://ui-avatars.com/api/?name=Armando+McClure&background=FF6B6B&color=fff&size=48",
    },
    {
      id: 4,
      rating: 5,
      text: "Amazing facilities and great community atmosphere. The support from staff has been exceptional throughout my stay. I would highly recommend this place to anyone looking for quality student accommodation.",
      author: "Sarah Johnson",
      location: "Manchester, University of Manchester",
      avatar:
        "https://ui-avatars.com/api/?name=Sarah+Johnson&background=4ECDC4&color=fff&size=48",
    },
    {
      id: 5,
      rating: 5,
      text: "Best accommodation I've experienced. Everything is modern, secure, and the location is perfect for campus.",
      author: "James Chen",
      location: "London, Imperial College London",
      avatar:
        "https://ui-avatars.com/api/?name=James+Chen&background=95E1D3&color=fff&size=48",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - slidesToShow);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <section className="py-6 px-12 sm:py-8 sm:px-16 lg:py-10 lg:px-20">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 lg:mb-12 gap-4 lg:gap-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
            <Heading text="Our students love us!" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="h-12 w-px bg-gray-300 hidden lg:block"></div>

              <div className="flex items-center gap-1 ">
                <Smile className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                <span className="text-xl sm:text-2xl font-normal sm:font-semibold text-gray-900">
                  2M+
                </span>
                <span className="text-sm sm:text-sm text-gray-600 font-medium ">
                  Happy Students
                </span>
              </div>

              <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm text-gray-700 font-medium ">
                  Rated 4.8 out of 5 on
                </span>
                <svg className="h-6 sm:h-8" viewBox="0 0 88 29" fill="none">
                  <text
                    x="0"
                    y="20"
                    className="fill-blue-600 font-bold"
                    style={{ fontSize: "18px" }}
                  >
                    G
                  </text>
                  <text
                    x="14"
                    y="20"
                    className="fill-red-600 font-bold"
                    style={{ fontSize: "18px" }}
                  >
                    o
                  </text>
                  <text
                    x="24"
                    y="20"
                    className="fill-yellow-500 font-bold"
                    style={{ fontSize: "18px" }}
                  >
                    o
                  </text>
                  <text
                    x="36"
                    y="20"
                    className="fill-blue-600 font-bold"
                    style={{ fontSize: "18px" }}
                  >
                    g
                  </text>
                  <text
                    x="48"
                    y="20"
                    className="fill-green-600 font-bold"
                    style={{ fontSize: "18px" }}
                  >
                    l
                  </text>
                  <text
                    x="54"
                    y="20"
                    className="fill-red-600 font-bold"
                    style={{ fontSize: "18px" }}
                  >
                    e
                  </text>
                  <text
                    x="0"
                    y="28"
                    className="fill-gray-500"
                    style={{ fontSize: "9px" }}
                  >
                    Reviews
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={24}
            slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-[280px]">
                  {/* Rating - Fixed at top */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm sm:text-base text-gray-900 font-normal">
                      Rated {review.rating} out of 5
                    </span>
                  </div>

                  {/* Review Text - Flexible space */}
                  <div className="flex-grow mb-4">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {truncateText(review.text)}
                    </p>
                    {review.text.length > 150 && (
                      <button
                        onClick={() => setSelectedReview(review)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2"
                      >
                        Read more
                      </button>
                    )}
                  </div>

                  {/* Author - Fixed at bottom */}
                  <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 rounded-full flex-shrink-0"
                    />
                    <div>
                      <div className="text-sm sm:text-base font-medium text-gray-900">
                        {review.author}
                      </div>
                      <div className="text-xs text-gray-400">
                        {review.location}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dots indicator for mobile/tablet */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-blue-600 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Full Review Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={24} />
            </button>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-base text-gray-900 font-normal">
                Rated {selectedReview.rating} out of 5
              </span>
            </div>

            {/* Full Review Text */}
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              {selectedReview.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
              <img
                src={selectedReview.avatar}
                alt={selectedReview.author}
                className="w-12 h-12 rounded-full flex-shrink-0"
              />
              <div>
                <div className="text-base font-medium text-gray-900">
                  {selectedReview.author}
                </div>
                <div className="text-sm text-gray-400">
                  {selectedReview.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;

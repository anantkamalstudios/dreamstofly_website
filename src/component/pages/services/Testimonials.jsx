import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Smile } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

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
      text: "I had a bad roommate experience in my first year (somewhere else), so this place was a literal upgrade. Quiet, clean, and the walls weren't thin.",
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
      text: "Amazing facilities and great community atmosphere. The support from staff has been exceptional throughout my stay.",
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
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-6 px-12 sm:py-8 sm:px-16 lg:py-10 lg:px-20">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 lg:mb-12 gap-4 lg:gap-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold text-gray-900 ">
              Our students love us!
            </h4>

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

        {/* Slider wrapper */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 lg:gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow flex-shrink-0 "
                style={{
                  width: `calc(${100 / slidesToShow}% - ${
                    ((slidesToShow - 1) *
                      (slidesToShow === 1 ? 0 : slidesToShow === 2 ? 12 : 24)) /
                    slidesToShow
                  }px)`,
                }}
              >
                {/* Rating */}
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

                {/* Review Text */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  {review.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 sm:gap-3">
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
            ))}
          </div>
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
    </section>
  );
};

export default Testimonials;

// import React, { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight, Smile } from "lucide-react";

// const Testimonials = () => {
//   const [isPaused, setIsPaused] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const scrollContainerRef = useRef(null);
//   const animationRef = useRef(null);
//   const scrollPositionRef = useRef(0);

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
//       author: "Sarah Martinez",
//       location: "Newcastle Upon Tyne, Newcastle University",
//       avatar:
//         "https://ui-avatars.com/api/?name=Sarah+Martinez&background=4ECDC4&color=fff&size=48",
//     },
//     {
//       id: 3,
//       rating: 5,
//       text: "I had a bad roommate experience in my first year (somewhere else), so this place was a literal upgrade. Quiet, clean, and the walls weren't thin.",
//       author: "David Thompson",
//       location: "Newcastle Upon Tyne, Newcastle University",
//       avatar:
//         "https://ui-avatars.com/api/?name=David+Thompson&background=95E1D3&color=fff&size=48",
//     },
//     {
//       id: 4,
//       rating: 5,
//       text: "Amazing facilities and great community atmosphere. The support from staff has been exceptional throughout my stay.",
//       author: "Sarah Johnson",
//       location: "Manchester, University of Manchester",
//       avatar:
//         "https://ui-avatars.com/api/?name=Sarah+Johnson&background=F38181&color=fff&size=48",
//     },
//     {
//       id: 5,
//       rating: 5,
//       text: "Best accommodation I've experienced. Everything is modern, secure, and the location is perfect for campus.",
//       author: "James Chen",
//       location: "London, Imperial College London",
//       avatar:
//         "https://ui-avatars.com/api/?name=James+Chen&background=AA96DA&color=fff&size=48",
//     },
//   ];

//   // Triple the reviews for infinite scroll
//   const infiniteReviews = [...reviews, ...reviews, ...reviews];

//   // Auto-scroll animation
//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     const speed = 0.5;

//     const animate = () => {
//       if (!isPaused && !isDragging) {
//         scrollPositionRef.current += speed;

//         const singleSetWidth = container.scrollWidth / 3;
//         if (scrollPositionRef.current >= singleSetWidth) {
//           scrollPositionRef.current = 0;
//         }

//         container.scrollLeft = scrollPositionRef.current;
//       }
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isPaused, isDragging]);

//   // Mouse/Touch drag handlers
//   const handleDragStart = (e) => {
//     setIsDragging(true);
//     setIsPaused(true);
//     const pageX = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX;
//     setStartX(pageX - scrollContainerRef.current.offsetLeft);
//     setScrollLeft(scrollContainerRef.current.scrollLeft);
//     scrollPositionRef.current = scrollContainerRef.current.scrollLeft;
//   };

//   const handleDragMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const pageX = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
//     const x = pageX - scrollContainerRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     scrollContainerRef.current.scrollLeft = scrollLeft - walk;
//     scrollPositionRef.current = scrollContainerRef.current.scrollLeft;
//   };

//   const handleDragEnd = () => {
//     setIsDragging(false);
//     // Resume auto-scroll after a short delay
//     setTimeout(() => setIsPaused(false), 1000);
//   };

//   // Button navigation
//   const handlePrev = () => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     setIsPaused(true);
//     const cardWidth = container.querySelector('.testimonial-card')?.offsetWidth || 0;
//     const gap = 24; // 6 * 4px (gap-6)
//     container.scrollLeft -= (cardWidth + gap);
//     scrollPositionRef.current = container.scrollLeft;

//     setTimeout(() => setIsPaused(false), 2000);
//   };

//   const handleNext = () => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     setIsPaused(true);
//     const cardWidth = container.querySelector('.testimonial-card')?.offsetWidth || 0;
//     const gap = 24;
//     container.scrollLeft += (cardWidth + gap);
//     scrollPositionRef.current = container.scrollLeft;

//     setTimeout(() => setIsPaused(false), 2000);
//   };

//   return (
//     <section className="py-6 px-4 sm:px-8 sm:py-8 lg:py-10 lg:px-12">
//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 lg:mb-12 gap-4 lg:gap-6">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
//             <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold text-gray-900">
//               Our students love us!
//             </h4>

//             <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
//               <div className="h-12 w-px bg-gray-300 hidden lg:block"></div>

//               <div className="flex items-center gap-1">
//                 <Smile className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
//                 <span className="text-xl sm:text-2xl font-normal sm:font-semibold text-gray-900">
//                   2M+
//                 </span>
//                 <span className="text-sm sm:text-sm text-gray-600 font-medium">
//                   Happy Students
//                 </span>
//               </div>

//               <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>

//               <div className="flex items-center gap-2 sm:gap-3">
//                 <span className="text-xs sm:text-sm text-gray-700 font-medium">
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

//           {/* Navigation Buttons */}
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

//         {/* Infinite Scrolling Container */}
//         <div className="relative overflow-hidden">
//           {/* Left fade gradient */}
//           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>

//           {/* Right fade gradient */}
//           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

//           <div
//             ref={scrollContainerRef}
//             className="flex gap-4 sm:gap-6 overflow-x-hidden py-2 cursor-grab active:cursor-grabbing select-none"
//             style={{
//               scrollBehavior: 'auto',
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none'
//             }}
//             onMouseDown={handleDragStart}
//             onMouseMove={handleDragMove}
//             onMouseUp={handleDragEnd}
//             onMouseLeave={handleDragEnd}
//             onTouchStart={handleDragStart}
//             onTouchMove={handleDragMove}
//             onTouchEnd={handleDragEnd}
//           >
//             {infiniteReviews.map((review, index) => (
//               <div
//                 key={`${review.id}-${index}`}
//                 className="testimonial-card bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[30%]"
//               >
//                 {/* Rating */}
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

//                 {/* Review Text */}
//                 <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
//                   {review.text}
//                 </p>

//                 {/* Author */}
//                 <div className="flex items-center gap-2 sm:gap-3">
//                   <img
//                     src={review.avatar}
//                     alt={review.author}
//                     className="w-10 h-10 rounded-full flex-shrink-0 pointer-events-none"
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
//         </div>

//         {/* Instructions */}
//         <p className="text-center text-sm text-gray-500 mt-4">
//           Drag to scroll • Auto-scrolling • Use arrows to navigate
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

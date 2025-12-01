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
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold text-gray-900 font-roboto">
              Our students love us!
            </h4>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="h-12 w-px bg-gray-300 hidden lg:block"></div>

              <div className="flex items-center gap-1 font-poppins">
                <Smile className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                <span className="text-xl sm:text-2xl font-normal sm:font-semibold text-gray-900">
                  2M+
                </span>
                <span className="text-sm sm:text-sm text-gray-600 font-medium font-poppins" >
                  Happy Students
                </span>
              </div>

              <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm text-gray-700 font-medium font-poppins">
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
                className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow flex-shrink-0 font-poppins"
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

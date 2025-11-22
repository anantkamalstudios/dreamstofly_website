import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Smile } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= reviews.length - 3 ? 0 : prev + 1));
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <h4 className="text-lg lg:text-3xl font-bold text-gray-900">
              Our students love us!
            </h4>

            <div className="flex items-center gap-6">
              <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>

              <div className="flex items-center gap-2">
                <Smile className="w-6 h-6 text-gray-600" />
                <span className="text-2xl font-bold text-gray-900">2M+</span>
                <span className="text-gray-600 font-medium">
                  Happy Students
                </span>
              </div>

              <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>

              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium">
                  Rated 4.8 out of 5 on
                </span>
                <svg className="h-8" viewBox="0 0 88 29" fill="none">
                  <text
                    x="0"
                    y="20"
                    className="fill-blue-600 font-bold"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    G
                  </text>
                  <text
                    x="14"
                    y="20"
                    className="fill-red-600 font-bold"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    o
                  </text>
                  <text
                    x="24"
                    y="20"
                    className="fill-yellow-500 font-bold"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    o
                  </text>
                  <text
                    x="36"
                    y="20"
                    className="fill-blue-600 font-bold"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    g
                  </text>
                  <text
                    x="48"
                    y="20"
                    className="fill-green-600 font-bold"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    l
                  </text>
                  <text
                    x="54"
                    y="20"
                    className="fill-red-600 font-bold"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    e
                  </text>
                  <text
                    x="0"
                    y="28"
                    className="fill-gray-500"
                    style={{ fontSize: "9px", fontFamily: "Arial, sans-serif" }}
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
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
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
                <span className="text-gray-900 font-medium">
                  Rated {review.rating} out of 5
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {review.text}
              </p>

              <div className="flex items-center gap-1">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {review.author}
                  </div>
                  <div className="text-xs text-gray-400">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

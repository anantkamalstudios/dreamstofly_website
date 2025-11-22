import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Plane } from "lucide-react";

const TravelPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const partners = [
    { id: 1, image: "/images/services/indigo.png" },
    { id: 2, image: "/images/services/indigo.png" },
    { id: 3, image: "/images/services/indigo.png" },
    { id: 4, image: "/images/services/indigo.png" },
    { id: 5, image: "/images/services/indigo.png" },
    { id: 6, image: "/images/services/indigo.png" },
  ];

  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else if (window.innerWidth < 1280) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying, cardsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= partners.length - cardsPerView ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? partners.length - cardsPerView : prevIndex - 1
    );
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="w-full bg-[#0073DF1A] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-normal text-center text-[#115779] mb-12">
          Travel Partners
        </h2>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={prevSlide}
            className="absolute -left-10 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-2">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-white rounded-lg shadow-md p-8 h-64 flex flex-col hover:shadow-xl transition-shadow duration-300">
                    {/* IMAGE AT TOP */}
                    <div className="flex items-start w-full">
                      <img src={partner.image} alt="" className="w-20" />
                    </div>

                    {/* BUTTON CENTER IN REMAINING SPACE */}
                    <div className="flex-1 flex justify-center items-center">
                      <button className="px-8 py-2 border-2 border-[#115779] text-[#115779] rounded-md hover:bg-teal-600 hover:text-white transition-colors duration-300 font-medium">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute -right-10 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition-colors duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelPartners;


import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const CollegeDuniaHeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Amity University, Noida",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            recentVisit: "MITWPU, Pune"
        },
        {
            id: 2,
            title: "IIT Delhi Campus",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            recentVisit: "IIT Bombay"
        },
        {
            id: 3,
            title: "Delhi University",
            image: "https://image-static.collegedunia.com/public/asset/img/homepage/banner/MIT1747200012.webp",
            recentVisit: "Jamia Millia"
        }
    ];

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative h-96 overflow-hidden">

            {/* Carousel Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="w-full h-full flex-shrink-0 relative bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slide.image}')`
                        }}
                    >
                        {/* Content for each slide */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">

                            {/* Main Heading */}
                            {/* <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in">
                                Find Over 25000+ Colleges in India
                            </h1> */}
                            <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-8">
                                <Typewriter
                                    words={['Find Over 25000+ Colleges in India']}
                                    loop={3}              // type once
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h1>

                            {/* Search Bar */}
                            <div className="w-full max-w-4xl flex animate-slide-up">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search for colleges, exams, courses and more.."
                                        className="w-full pl-12 pr-4 py-4 text-gray-700 bg-white rounded-l-lg outline-none text-lg focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-r-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 z-20"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 z-20"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom Navigation */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-6 z-20">

                {/* Left - Recent Visits */}
                <div className="flex items-center space-x-4 animate-slide-in-left">
                    <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                        <span className="text-sm font-medium">Your Recent Visits</span>
                    </div>
                    <div className="bg-gray-800 bg-opacity-80 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-500">
                        <span className="text-sm">{slides[currentSlide].recentVisit}</span>
                    </div>
                </div>

                {/* Right - Need Counselling & Slide Indicator */}
                <div className="flex items-center space-x-4 animate-slide-in-right">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                        Need Counselling
                    </button>

                    {/* Slide Indicator */}
                    <div className="flex items-center space-x-2 text-white bg-black bg-opacity-30 px-3 py-2 rounded-lg backdrop-blur-sm">
                        <span className="text-sm font-medium">{slides[currentSlide].title}</span>
                        <div className="flex items-center space-x-1">
                            <span className="text-sm">{currentSlide + 1}</span>
                            <span className="text-sm">/</span>
                            <span className="text-sm">{slides.length}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Navigation Dots */}
            <div className="absolute bottom-20 right-6 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${currentSlide === index
                            ? 'bg-orange-500 shadow-lg'
                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-20">
                <div
                    className="h-full bg-orange-500 transition-all duration-700 ease-out"
                    style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
            </div>


        </div>
    );
};

export default CollegeDuniaHeroCarousel;
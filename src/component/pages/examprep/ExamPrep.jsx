import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  MessageCircle,
  Globe,
  Shield,
  DollarSign,
  Eye,
  GraduationCap,
  Building2,
  Landmark,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useServicesData } from "../../../hooks/useServicesData";
import Loader from "../../../common/Loader";
import Error from "../../../common/Error";

const ExamPrep = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1;
    let animationId;

    const animate = () => {
      if (!isPaused) {
        scrollAmount += speed;
        container.scrollLeft = scrollAmount;

        // Reset scroll position when reaching the end
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    setIsPaused(true);
    const scrollAmount = 300; // Fixed scroll amount
    const current = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    let target;
    if (direction === "left") {
      target = Math.max(0, current - scrollAmount);
    } else {
      target = Math.min(maxScroll, current + scrollAmount);
    }

    container.scrollTo({
      left: target,
      behavior: "smooth",
    });

    // Resume auto-scroll after a short delay
    setTimeout(() => setIsPaused(false), 2000);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trustpilotFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Book a service instantly",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "24/7 Live chat Support",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Across 93+ Nationalities",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reliable & Trustworthy",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Affordable Cost",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "No hidden charges",
      color: "from-red-400 to-red-600",
    },
  ];

  // const stats = [
  //   {
  //     number: "2 Mn+",
  //     label: "Beds",
  //     color: "from-purple-400 to-purple-600",
  //     img: "/images/examprep/vector1.png",
  //   },
  //   {
  //     number: "65K+",
  //     label: "Properties",
  //     color: "from-blue-400 to-blue-600",
  //     img: "/images/examprep/vector2.png",
  //   },
  //   {
  //     number: "2 Mn",
  //     label: "Students Assisted",
  //     color: "from-indigo-400 to-indigo-600",
  //     img: "/images/examprep/vector3.png",
  //   },
  //   {
  //     number: "515+",
  //     label: "Global Cities",
  //     color: "from-green-400 to-green-600",
  //     img: "/images/examprep/vector4.png",
  //   },
  // ];

  const { data, loading, error, refetch } = useServicesData(
    "/CMS/ExamPreparation/get_exampreparation_data"
  );

  if (loading) return <Loader />;

  if (error) return <Error message={error} />;

  const {
    hero = {},
    explore_all_services = {},
    partners_section = {},
    popular_courses_cards = [],
    ready_section = {},
  } = data?.data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="flex-1 px-6 sm:px-8 lg:px-16 py-12 lg:py-20">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-white leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {hero?.title || "Exam Preparation's"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed"
            >
              {hero?.subtitle}
            </motion.p>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 lg:w-1/2">
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              src={`${import.meta.env.VITE_IMAGE_BASE_URL}${hero?.image}`}
              alt="Student with books"
              className="w-full h-full object-cover lg:h-[400px]"
            />
          </div>
        </div>
      </div>
      {/* Exam Preparation Section */}
      <div className="w-full min-h-screen bg-gray-50 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#115779] inline-block px-4 py-2 sm:px-6 sm:py-3 font-vollkorn">
            Popular Course
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {popular_courses_cards.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Course Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
                      course.image
                    }`}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Course Details */}
                <div className="p-5 sm:p-6 bg-white">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {course.title}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm mb-4 sm:mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span>{course?.subtitle}</span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-base sm:text-lg shadow-md hover:shadow-lg">
                    Start Preparation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Travel CTA */}
      <div className="relative w-full bg-[url(/images/examprep/banner.png)] bg-cover bg-center bg-no-repeat h-80 sm:h-[350px] md:h-[450px] lg:h-[500px]">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center md:items-stretch justify-center px-4 sm:px-6 lg:px-8 py-4 lg:py-10">
          <div className="w-full md:w-[65%] bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col justify-center text-center md:text-left font-roboto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {explore_all_services?.title}
            </h2>

            <h3 className="text-xl font-normal text-white mb-6">
              {explore_all_services?.subtitle}
            </h3>

            <button className="bg-blue-600 backdrop-blur-lg  text-white font-medium py-3 px-6 rounded-lg self-center md:self-start">
              Explore all services
            </button>
          </div>
          <div className="hidden md:block w-[40%]"></div>
        </div>
      </div>
      {/* Stats Section */}
      {/* <div className="py-4 md:py-8 lg:py-12 bg-gray-300 mx-1 my-1 md:mx-6 md:my-4 lg:mx-12 lg:my-8 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center mb-4 md:mb-7 lg:mb-8">
            <h1 className="text-lg md:text-2xl lg:text-3xl text-[#115779] font-semibold font-vollkorn">
              Every Client Matters
            </h1>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-3 md:pb-6 lg:pb-9">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white flex flex-col justify-center items-center gap-1  sm:gap-2 font-poppins"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center">
                  <img
                    src={stat.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 max-w-fit">
                  {stat.number}
                </p>
                <p className="text-gray-500 text-sm font-medium max-w-fit">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* Trustpilot Section */}
      <div className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center space-x-2 font-vollkorn">
              <Star className="w-8 h-8 text-green-500 fill-current" />
              <span className="text-2xl font-bold text-gray-900">
                Trustpilot
              </span>
              <div className="flex items-center space-x-1 ml-4">
                <span className="text-lg font-semibold">4.7</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-green-500 fill-current"
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  • Reviews 4700+ • Excellent
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-poppins">
            {trustpilotFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <span className="text-gray-700 font-medium">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Partners Section */}
      <div className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="max-w-full mx-auto px-4 sm:px-10 lg:px-20">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2  font-vollkorn">
              {partners_section?.title}
            </h2>
            <p className="text-gray-600  font-vollkorn">
              {partners_section?.subtitle || ""}
            </p>
          </div>

          {/* Partners Container */}
          <div className="relative">
            {/* Left/Right Buttons */}
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-full z-10 shadow-lg hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              className="overflow-x-hidden scrollbar-hide mx-auto max-w-7xl"
            >
              <div className="flex space-x-8 py-2">
                {[...partners_section?.data, ...partners_section?.data].map(
                  (partner, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-32 rounded-lg flex items-center justify-center transition-shadow duration-300"
                    >
                      <img
                        src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
                          partner.logo
                        }`}
                        alt={partner.img}
                        className="h-full w-full object-contain p-2"
                        loading="lazy"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            <button
              onClick={() => handleScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-full z-10 shadow-lg hover:bg-blue-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-12 px-8 relative overflow-hidden text-black flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-10">
        <div className="flex justify-center items-center">
          <img
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
              ready_section?.image
            }`}
            alt=""
            className="w-[400px] h-[400px] object-contain rounded-lg"
          />
        </div>
        <div className="relative mx-auto font-vollkorn">
          <h2 className="text-3xl md:text-4xl font-semibold  mb-5 font-vollkorn">
            {ready_section?.title}
          </h2>
          <p className="text-base text-black  mb-8 max-w-2xl mx-auto leading-relaxed text-start">
            {ready_section?.subtitle}
          </p>
          {/* small section */}
          <div className="mt-8 grid grid-rows-2 grid-cols-2 gap-6 text-black text-sm mb-5 "></div>
          <div className="flex flex-col sm:flex-row gap-5 justify-start items-center">
            <button className="group bg-blue-600 px-7 py-3 rounded-xl font-light shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-base text-white sm:block">
              {ready_section?.btn1_text}
            </button>
            <button className="group bg-blue-600 px-7 py-3 rounded-xl font-light shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-base text-white sm:flex">
              {ready_section?.btn2_text}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamPrep;

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
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
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";

const ExamPrep = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollRef = useRef(null);
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  // Auto infinite scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        scrollAmount += speed;
        container.scrollLeft = scrollAmount;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, [isPaused]);

  // Smooth button scroll animation
  const handleScroll = async (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    setIsPaused(true);

    const current = container.scrollLeft;
    const distance = direction === "left" ? -250 : 250;
    const target = current + distance;

    // Animate smooth scroll using framer-motion
    await controls.start({
      x: [0, direction === "left" ? 250 : -250],
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    container.scrollTo({
      left: target,
      behavior: "smooth",
    });

    // Resume auto-scroll
    setTimeout(() => setIsPaused(false), 3000);
  };

  useEffect(() => {
    setIsVisible(true);

    // Add CSS for scrolling animation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        animation: scroll 20s linear infinite;
      }
      .animate-scroll:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
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

  const examPreparations = [
    {
      id: "IELTS-ACEDEMIC",
      name: "IELTS Academic",
      logo: "IELTS",
      bgColor: "bg-red-500",
      textColor: "text-white",
    },
    {
      id: "IELTS",
      name: "IELTS General",
      logo: "IELTS",
      bgColor: "bg-red-500",
      textColor: "text-white",
    },
    {
      id: "ToeflIBT",
      name: "TOEFL-iBT",
      logo: "TOEFL",
      bgColor: "bg-blue-600",
      textColor: "text-white",
    },
    {
      id: "PTEAcademic",
      name: "PTE",
      logo: "P",
      bgColor: "bg-teal-500",
      textColor: "text-white",
    },
    {
      id: "DuolingoTest",
      name: "Duolingo English Test",
      logo: "🦉",
      bgColor: "bg-green-500",
      textColor: "text-white",
    },
    {
      id: "GREPrep",
      name: "GRE",
      logo: "GRE",
      bgColor: "bg-blue-700",
      textColor: "text-white",
    },
  ];

  const partners = [
    { name: "FOOD HUB", color: "bg-red-500" },
    { name: "noah", color: "bg-orange-500" },
    { name: "EBIX", color: "bg-gray-700" },
    { name: "HDFC CREDILA", color: "bg-blue-600" },
    { name: "Garantme", color: "bg-indigo-800" },
    { name: "COHORT GO", color: "bg-yellow-500" },
    { name: "TM", color: "bg-blue-800" },
    { name: "AUXILO", color: "bg-yellow-100 text-gray-800" },
    { name: "Welcome", color: "bg-green-400" },
  ];

  const stats = [
    {
      icon: (
        <FontAwesomeIcon icon={faBed} className="w-10 h-10 text-[#115779]" />
      ),
      number: "2 Mn+",
      label: "Beds",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#115779]" />,
      number: "65K+",
      label: "Properties",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#115779]" />,
      number: "2 Mn",
      label: "Students Assisted",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      icon: <Landmark className="w-10 h-10 text-[#115779]" />,
      number: "515+",
      label: "Global Cities",
      color: "from-green-400 to-green-600",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "IELTS Academic",
      bgColor: "bg-red-600",
      features: [
        "Personalized Coaching",
        "Practice tests & feedback",
        "Strategies to boost your score",
        "Flexible schedules",
      ],
      image: "👩‍🎓",
    },
    {
      id: 2,
      title: "TOEFL-IBT",
      bgColor: "bg-blue-600",
      subtitle: "Beyond Based Test (iBT)",
      features: [],
      image: "👩‍💼",
    },
    {
      id: 3,
      title: "IELTS General",
      bgColor: "bg-red-600",
      features: [
        "Personalized Coaching",
        "Practice tests & feedback",
        "Strategies to boost your score",
        "Flexible schedules",
      ],
      image: "👩‍🎓",
    },
    {
      id: 4,
      title: "PTE",
      bgColor: "bg-blue-900",
      subtitle: "PEARSON TEST OF ENGLISH",
      features: [],
      image: "PTE",
    },
    {
      id: 5,
      title: "Duolingo English Test",
      bgColor: "bg-green-500",
      features: [],
      image: "🦉",
    },
    {
      id: 6,
      title: "GRE",
      bgColor: "bg-purple-800",
      features: [],
      image: "GRE",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-400 text-white flex flex-col sm:flex-row justify-center items-center">
        <div className="max-w-6xl lg:ml-20 flex-1 px-4 sm:px-6 lg:px-8 py-3 flex flex-col justify-center items-start">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-semibold mb-4 text-start"
          >
            Exam Preparation&apos;s
          </motion.h1>
          <p className="text-lg md:text-xl text-white [word-spacing:0.3rem]">
            Comprehensive test preparation for your study abroad journey
          </p>
        </div>
        <div className="">
          {/* Image */}
          <img src="/images/ExamPrepHero.png" alt="" />
        </div>
      </div>
      {/* Exam Preparation Section */}
      <div className="w-full min-h-screen bg-gray-50 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#115779] inline-block px-4 py-2 sm:px-6 sm:py-3">
            Popular Course
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Course Image/Banner */}
                <div
                  className={`${course.bgColor} relative h-48 sm:h-56 flex items-center justify-center p-6`}
                >
                  {course.id === 1 || course.id === 3 ? (
                    <div className="text-center">
                      <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg mb-4">
                        <h3 className="text-white text-sm font-semibold">
                          Ready to Conquer
                        </h3>
                      </div>
                      <h2 className="text-white text-5xl sm:text-6xl font-bold mb-4">
                        IELTS
                      </h2>
                      <div className="text-white text-xs sm:text-sm space-y-1">
                        {course.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-center gap-2"
                          >
                            <span className="text-xs">☑</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="absolute bottom-4 right-4 text-6xl">
                        👩‍🎓
                      </div>
                    </div>
                  ) : course.id === 2 ? (
                    <div className="text-center w-full">
                      <div className="bg-white px-4 py-2 rounded-t-lg inline-block mb-2">
                        <span className="text-red-600 font-bold text-sm">
                          D-VIVID
                        </span>
                      </div>
                      <h2 className="text-white text-5xl sm:text-6xl font-bold mb-2">
                        TOEFL
                      </h2>
                      <div className="bg-red-600 text-white px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg inline-block">
                        Beyond Based Test (iBT)
                      </div>
                      <div className="text-white text-xs mt-2">
                        Beginners Guide
                      </div>
                      <div className="absolute bottom-4 right-4 text-6xl">
                        👩‍💼
                      </div>
                    </div>
                  ) : course.id === 4 ? (
                    <div className="text-center">
                      <h2 className="text-white text-7xl sm:text-8xl font-bold">
                        PTE
                      </h2>
                      <div className="bg-yellow-400 text-black px-4 py-1 text-xs sm:text-sm font-bold inline-block mt-2">
                        PEARSON TEST OF ENGLISH
                      </div>
                    </div>
                  ) : course.id === 5 ? (
                    <div className="text-center flex items-center justify-center gap-3">
                      <span className="text-5xl">🦉</span>
                      <h2 className="text-white text-3xl sm:text-4xl font-bold">
                        duolingo english test
                      </h2>
                    </div>
                  ) : (
                    <div className="text-center">
                      <span className="text-white text-8xl sm:text-9xl font-bold">
                        *
                      </span>
                      <h2 className="text-white text-5xl sm:text-6xl font-bold">
                        gre®
                      </h2>
                    </div>
                  )}
                </div>

                {/* Course Details */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {course.title}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm mb-4 sm:mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span>Expert-led preparation course</span>
                  </div>
                  <button className="w-full md:w-[60%] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 text-sm sm:text-base">
                    Start Preparation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Travel CTA */}
      <div className="relative w-full bg-[url('https://images.unsplash.com/photo-1759915995309-404c743bfbf9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0')] bg-cover bg-center bg-no-repeat h-80 sm:h-[350px] md:h-[450px] lg:h-[500px]">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center md:items-stretch justify-center px-4 sm:px-6 lg:px-8 py-4 lg:py-10">
          <div
            className="
        w-full md:w-[65%] bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col justify-center text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Essential services for a safe and joyful journey.
            </h2>

            <h3 className="text-xl font-normal text-white mb-6">
              Travel with us
            </h3>

            <button className="bg-blue-600 backdrop-blur-lg border border-white/40 text-white font-medium py-3 px-6 rounded-xl self-center md:self-start">
              Explore all services
            </button>
          </div>
          <div className="hidden md:block w-[40%]"></div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="py-4 md:py-8 lg:py-12 bg-gray-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center mb-4 md:mb-7 lg:mb-8">
            <h1 className="text-lg md:text-2xl lg:text-3xl text-[#115779] font-semibold ">
              Every Client Matters
            </h1>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-3 md:pb-6 lg:pb-9">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white flex flex-col justify-center items-center gap-1  sm:gap-2"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center text-white">
                  {stat.icon}
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
      </div>
      {/* Trustpilot Section */}
      <div className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center space-x-2">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      {/* <div className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Our Partners
            </h2>
            <p className="text-gray-600">
              Trusted partnerships for your success
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-20 h-20 ${partner.color} rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  <span
                    className={`text-xs font-semibold text-center px-2 ${
                      partner.color.includes("text-gray-800")
                        ? "text-gray-800"
                        : "text-white"
                    }`}
                  >
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Our Partners
            </h2>
            <p className="text-gray-600">
              Trusted partnerships for your success
            </p>
          </div>

          {/* Scrollable Container */}
          <div ref={scrollRef} className="overflow-x-hidden scrollbar-hide">
            {/* Left/Right Buttons */}
            <div className="relative">
              {/* Left/Right Buttons */}
              <button
                onClick={() => handleScroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-full z-10 shadow-lg hover:bg-blue-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-full z-10 shadow-lg hover:bg-blue-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              {/* Scrollable Container */}
              <div
                ref={scrollRef}
                className="overflow-x-hidden scrollbar-hide mx-16"
              >
                <motion.div
                  animate={controls}
                  className="flex space-x-8 py-2 items-center justify-center"
                >
                  {[...partners, ...partners].map((partner, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <span className="text-sm font-semibold text-gray-800 text-center px-2">
                        {partner.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-12 px-8 relative overflow-hidden text-black flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-10">
        <div className="flex justify-center items-center">
          <img
            // src={`${import.meta.env.VITE_IMAGE_URL}${ctaSection?.image}`}
            src="https://www.freepik.com/free-vector/flat-university-concept-background_4672585.htm#fromView=search&page=1&position=1&uuid=5167b31a-905d-4efd-a8e6-3b4b0054fc39&query=study"
            alt=""
            className="w-[400px] h-[400px] object-contain rounded-lg"
          />
        </div>
        <div className="relative mx-auto ">
          <h2 className="text-3xl md:text-4xl font-semibold  mb-5">
            Ready to Begin Your Preparation?
          </h2>
          <p className="text-base text-black  mb-8 max-w-2xl mx-auto leading-relaxed text-start">
            Join thousands of successful students who achieved their dreams with
            our expert guidance
          </p>
          {/* small section */}
          <div className="mt-8 grid grid-rows-2 grid-cols-2 gap-6 text-black text-sm mb-5 ">
            {/* {ctaContent.map((item, index) => (
              <div className="flex items-center gap-3 text-lg " key={index}>
                {ctaContentIcon[index]}
                {item}
              </div>
            ))} */}
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-start items-center">
            <button className="group bg-blue-600 px-7 py-3 rounded-xl font-light shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-base text-white sm:block">
              Start Free Assessment
            </button>
            <button className="group bg-blue-600 px-7 py-3 rounded-xl font-light shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-base text-white sm:flex">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamPrep;

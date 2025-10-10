import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ReceiptText } from "lucide-react";

import FreePlanModal from "./FreePlanModal";
import PremiumPlanModal from "./PremiumPlanModal";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import {
  processListItems,
  htmlContentToArray,
} from "../../../utils/processListItems";
import {
  faChartSimple,
  faParachuteBox,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { faGem, faHouse } from "@fortawesome/free-regular-svg-icons";

const PostAdmitServices = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [isVisible, setIsVisible] = useState(false);
  // const [typedText, setTypedText] = useState("");
  // const [studentCount, setStudentCount] = useState(0);
  // const [visaCount, setVisaCount] = useState(0);
  // const [countryCount, setCountryCount] = useState(0);
  const [openModal, setOpenModal] = useState(null);

  // const heroTexts = [
  //   "Study Abroad Dreams",
  //   "Global Education Success",
  //   "Your Future Awaits",
  // ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const [postAdmitData, setPostAdmitData] = useState([]);
  const BASE_URL = import.meta.env.VITE_POSTADMIT_URL;

  // useEffect(() => {
  //   setIsVisible(true);

  //   let typeInterval;
  //   let pauseTimeout;

  //   const typeText = () => {
  //     const currentText = heroTexts[currentTextIndex];
  //     let index = 0;
  //     setTypedText("");

  //     typeInterval = setInterval(() => {
  //       if (index <= currentText.length) {
  //         setTypedText(currentText.substring(0, index));
  //         index++;
  //       } else {
  //         clearInterval(typeInterval);
  //         pauseTimeout = setTimeout(() => {
  //           setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
  //         }, 1000);
  //       }
  //     }, 100);
  //   };

  //   typeText();

  //   const studentInterval = setInterval(() => {
  //     setStudentCount((prev) => (prev < 10000 ? prev + 150 : 10000));
  //   }, 30);

  //   const visaInterval = setInterval(() => {
  //     setVisaCount((prev) => (prev < 99 ? prev + 2 : 99));
  //   }, 80);

  //   const countryInterval = setInterval(() => {
  //     setCountryCount((prev) => (prev < 50 ? prev + 1 : 50));
  //   }, 120);

  //   setTimeout(() => {
  //     clearInterval(studentInterval);
  //     clearInterval(visaInterval);
  //     clearInterval(countryInterval);
  //   }, 3000);

  //   const handleMouseMove = (e) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     clearInterval(typeInterval);
  //     clearTimeout(pauseTimeout);
  //     clearInterval(studentInterval);
  //     clearInterval(visaInterval);
  //     clearInterval(countryInterval);
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, [currentTextIndex]);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(`${BASE_URL}`);
      setPostAdmitData(data.data.data);
    }
    fetchData();
  }, []);

  const [heroSection, planSection, whyChooseUs, ctaSection] = postAdmitData;

  const differentiators = whyChooseUs
    ? processListItems(whyChooseUs.content)
    : [];

  const services = planSection ? processListItems(planSection.content) : [];
  const ctaContent = ctaSection ? htmlContentToArray(ctaSection.content) : [];

  const differentiatorsIcon = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faChartSimple}
          className="w-8 h-8 text-blue-600"
        />
      ),
      color: "bg-green-400/30",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faCcVisa} className="w-8 h-8 text-blue-600" />
      ),
      color: "bg-blue-400/30",
    },

    {
      icon: (
        <FontAwesomeIcon icon={faHouse} className="w-8 h-8 text-blue-600" />
      ),
      color: "bg-purple-400/30",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faServer} className="w-8 h-8 text-blue-600" />
      ),
      color: "bg-orange-400/30",
    },
  ];

  const ctaContentIcon = [
    <ReceiptText className="w-10 h-10 text-blue-600" />,
    <FontAwesomeIcon
      icon={faParachuteBox}
      className="w-10 h-10 text-blue-600"
    />,
    <FontAwesomeIcon icon={faGem} className="w-10 h-10 text-blue-600" />,
  ];

  // const services = [
  //   {
  //     id: "free",
  //     title: "Essential Support",
  //     subtitle: "Complete guidance at zero cost",
  //     price: "FREE",
  //     originalPrice: "₹2,00,000",
  //     features: [
  //       "Visa counselling & documentation",
  //       "Loan application assistance",
  //       "Accommodation support",
  //       "Pre-departure briefing",
  //     ],
  //     image:
  //       "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop&auto=format",
  //     icon: <Shield className="w-5 h-5" />,
  //     popular: false,
  //   },
  //   {
  //     id: "premium",
  //     title: "Premium Experience",
  //     subtitle: "Complete end-to-end excellence",
  //     price: "₹35,000",
  //     features: [
  //       "Mock visa interviews & training",
  //       "Premium accommodation selection",
  //       "Cultural mentor abroad",
  //       "24/7 support for first month",
  //     ],
  //     image:
  //       "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop&auto=format",
  //     icon: <Star className="w-5 h-5" />,
  //     popular: true,
  //   },
  // ];

  // const differentiators = [
  //   {
  //     title: "Smart Loan Solutions",
  //     description: "Collateral-free & low-interest loans",
  //     icon: <DollarSign className="w-10 h-10" />,
  //     color: "bg-orange-400/10",
  //   },
  //   {
  //     title: "Visa Excellence",
  //     description: "99% visa success rate with expert guidance",
  //     icon: <FontAwesomeIcon icon={faCcVisa} className="w-10 h-10" />,
  //     color: "bg-sky-400/10",
  //   },
  //   {
  //     title: "Premium Housing",
  //     description: "Verified, safe housing near campus",
  //     icon: <Home className="w-10 h-10" />,
  //     color: "bg-green-400/10",
  //   },
  //   {
  //     title: "Cultural Integration",
  //     description: "Local mentors for seamless adaptation",
  //     icon: <Users className="w-10 h-10" />,
  //     color: "bg-blue-400/50",
  //   },
  // ];

  // const stats = [
  //   {
  //     number: `${Math.floor(studentCount / 1000)}K+`,
  //     label: "Students",
  //     icon: <Users className="w-4 h-4" />,
  //   },
  //   {
  //     number: `${visaCount}%`,
  //     label: "Visa Success",
  //     icon: <Award className="w-4 h-4" />,
  //   },
  //   {
  //     number: `${countryCount}+`,
  //     label: "Countries",
  //     icon: <Globe className="w-4 h-4" />,
  //   },
  //   { number: "24/7", label: "Support", icon: <Clock className="w-4 h-4" /> },
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Mouse gradient */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,115,223,0.05), transparent 40%)`,
        }}
      />
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-44 h-44 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Hero Section */}
      <section className="w-full relative px-6 md:px-12 flex flex-col md:flex-row justify-between items-stretch bg-gradient-to-b from-[#2DB4CF] via-[#1F7B8D] to-[#175B69] text-white h-[620px] md:h-[58vh] lg:h-[80vh]">
        {/* LEFT TEXT */}
        <div className="flex-1 flex flex-col justify-center px-5 lg:py-10 md:py-7 sm:py-4 py-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-2xl md:text-4xl font-medium text-white mb-3"
              dangerouslySetInnerHTML={{ __html: heroSection?.title }}
            />
            <p
              className="text-base md:text-lg max-w-2xl text-start leading-relaxed text-white postadmit-subtitle"
              dangerouslySetInnerHTML={{ __html: heroSection?.subtitle }}
            />
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${heroSection?.image}`}
            alt=""
            className="h-full w-auto object-contain"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-6 relative z-10">
        <div className="max-w-[85%] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              {planSection?.title}
            </h2>
            <p className="text-base text-gray-600">{planSection?.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                onClick={() => {
                  setOpenModal(index === 0 ? "free" : "premium");
                }}
                key={service.id}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden bg-white cursor-pointer"
              >
                <div className="relative flex-1 w-full overflow-hidden cursor-pointer">
                  <motion.img
                    src={`${import.meta.env.VITE_IMAGE_URL}${service.image}`}
                    alt="services Images"
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 p-2 rounded-lg bg-white/90 backdrop-blur-sm text-blue-600 shadow">
                    {service.icon}
                  </div> */}
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs text-blue-600">
                      {service.description}
                    </p>
                  </div>
                  <button
                    // onClick={() => setOpenModal(service.id)}
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <ArrowRight className="w-full" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-10 px-6 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-full px-10 mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Why Choose <span className="text-blue-600">Our Services?</span>
            </h2>
            <p className="text-base text-gray-600">
              Comprehensive support that sets us apart
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm p-6 shadow-lg border border-transparent cursor-pointer border-x-[8px] border-t-[8px] border-b-[8px] hover:border-b-blue-600"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 relative">
                  {/* You can add an icon here if you have any */}
                  {differentiatorsIcon[index].icon}
                  <p
                    className={`absolute bottom-4 left-5 w-8 h-8 rounded-full ${differentiatorsIcon[index].color}  -z-10`}
                  ></p>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-8 relative overflow-hidden text-black flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-10">
        <div className="flex justify-center items-center">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${ctaSection?.image}`}
            alt=""
            className="w-[400px] h-[400px] object-contain rounded-lg"
          />
        </div>
        <div className="relative mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold  mb-5">
            {ctaSection?.title}
          </h2>
          <p
            className="text-base text-black  mb-8 max-w-2xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: ctaSection?.subtitle }}
          />
          {/* small section */}
          <div className="mt-8 grid grid-rows-2 grid-cols-2 gap-6 text-black text-sm mb-5 ">
            {ctaContent.map((item, index) => (
              <div className="flex items-center gap-3 text-lg " key={index}>
                {ctaContentIcon[index]}
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-end items-center">
            <button className="group bg-blue-600 px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm text-white sm:block">
              {ctaSection?.button_text}
            </button>
            <button className="group bg-blue-600 px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm text-white sm:flex">
              Download Guide
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      {openModal === "free" && (
        <FreePlanModal onClose={() => setOpenModal(null)} />
      )}
      {openModal === "premium" && (
        <PremiumPlanModal onClose={() => setOpenModal(null)} />
      )}
    </div>
  );
};

export default PostAdmitServices;

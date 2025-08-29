<<<<<<< HEAD


import React from 'react'
=======
// src/components/pages/PostAdmitServices.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Home,
  DollarSign,
  FileText,
  Star,
  Phone,
  Shield,
  ArrowRight,
  Sparkles,
  Globe,
  Award,
  Clock,
} from "lucide-react";

import FreePlanModal from './FreePlanModal';
import PremiumPlanModal from './PremiumPlanModal';

const PostAdmitServices = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [studentCount, setStudentCount] = useState(0);
  const [visaCount, setVisaCount] = useState(0);
  const [countryCount, setCountryCount] = useState(0);
  const [openModal, setOpenModal] = useState(null);

  const heroTexts = ["Study Abroad Dreams", "Global Education Success", "Your Future Awaits"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const typeText = () => {
      const currentText = heroTexts[currentTextIndex];
      let index = 0;
      setTypedText("");
      const typeInterval = setInterval(() => {
        if (index <= currentText.length) {
          setTypedText(currentText.substring(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
          }, 2000);
        }
      }, 100);
    };

    typeText();
    const textInterval = setInterval(typeText, 5000);

    const studentInterval = setInterval(() => {
      setStudentCount(prev => prev < 10000 ? prev + 150 : 10000);
    }, 30);

    const visaInterval = setInterval(() => {
      setVisaCount(prev => prev < 99 ? prev + 2 : 99);
    }, 80);

    const countryInterval = setInterval(() => {
      setCountryCount(prev => prev < 50 ? prev + 1 : 50);
    }, 120);

    setTimeout(() => {
      clearInterval(studentInterval);
      clearInterval(visaInterval);
      clearInterval(countryInterval);
    }, 3000);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(textInterval);
      clearInterval(studentInterval);
      clearInterval(visaInterval);
      clearInterval(countryInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentTextIndex]);

  const services = [
    {
      id: "free",
      title: "Essential Support",
      subtitle: "Complete guidance at zero cost",
      price: "FREE",
      originalPrice: "₹2,00,000",
      features: ["Visa counselling & documentation", "Loan application assistance", "Accommodation support", "Pre-departure briefing"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop&auto=format",
      icon: <Shield className="w-5 h-5" />,
      popular: false
    },
    {
      id: "premium",
      title: "Premium Experience", 
      subtitle: "Complete end-to-end excellence",
      price: "₹35,000",
      features: ["Mock visa interviews & training", "Premium accommodation selection", "Cultural mentor abroad", "24/7 support for first month"],
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop&auto=format",
      icon: <Star className="w-5 h-5" />,
      popular: true
    }
  ];

  const differentiators = [
    { title: "Smart Loan Solutions", description: "Collateral-free & low-interest loans", icon: <DollarSign className="w-5 h-5" /> },
    { title: "Visa Excellence", description: "99% visa success rate with expert guidance", icon: <FileText className="w-5 h-5" /> },
    { title: "Premium Housing", description: "Verified, safe housing near campus", icon: <Home className="w-5 h-5" /> },
    { title: "Cultural Integration", description: "Local mentors for seamless adaptation", icon: <Users className="w-5 h-5" /> }
  ];

  const stats = [
    { number: `${Math.floor(studentCount/1000)}K+`, label: "Students", icon: <Users className="w-4 h-4" /> },
    { number: `${visaCount}%`, label: "Visa Success", icon: <Award className="w-4 h-4" /> },
    { number: `${countryCount}+`, label: "Countries", icon: <Globe className="w-4 h-4" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-4 h-4" /> }
  ];
>>>>>>> a1c0cf687bac9b4a4838fa83ac06415152e1e079

function PostAdmitServices() {
  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-64 h-40 bg-white rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
        {/* Animated text */}
        <h2 className="text-xl font-bold text-gray-700 animate-bounce">
          Coming Soon 🚀
        </h2>

        {/* Optional shimmer background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse opacity-30"></div>
      </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Mouse gradient */}
      <div className="fixed inset-0 pointer-events-none transition-opacity duration-300 z-0" style={{ background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,115,223,0.05), transparent 40%)` }} />
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-44 h-44 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-1 mb-6 shadow-sm text-sm font-medium text-gray-700">
        <Sparkles className="w-4 h-4 text-blue-500" />
        Post Admit Services
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
        Seamless Support for
        <span className="block text-blue-600 typing min-h-[1.5em]">
          {typedText}
        </span>
      </h1>

      {/* Paragraph */}
      <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
        End-to-end assistance from visa to accommodation — ensuring a smooth transition for your global education journey.
      </p>
    </motion.div>
  </div>
</section>



      {/* Services Section */}
      <section className="py-10 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Choose Your <span className="text-blue-600">Perfect Plan</span>
            </h2>
            <p className="text-base text-gray-600">Tailored services for every requirement</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05 }}
                className={`relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${service.popular ? 'ring-2 ring-blue-500/40' : ''}`}
              >
                <div className="relative h-40 overflow-hidden cursor-pointer">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.15 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 p-2 rounded-lg bg-white/90 backdrop-blur-sm text-blue-600 shadow">{service.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.subtitle}</p>
                  <button onClick={() => setOpenModal(service.id)} className="w-full py-3 rounded-xl font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl transition-all duration-300 text-sm flex items-center justify-center gap-2">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-10 px-6 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Why Choose <span className="text-blue-600">Our Services?</span>
            </h2>
            <p className="text-base text-gray-600">Comprehensive support that sets us apart</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100/50 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Start Your <span className="block bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">Global Journey?</span>
          </h2>
          <p className="text-base text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
            Join thousands of successful students. Your global education adventure starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-blue-600 px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm">
              <Phone className="w-5 h-5" /> Start Your Journey
            </button>
            <button className="group border-2 border-white/50 text-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm text-sm">
              Download Guide
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> No hidden fees</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Expert guidance</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Success guarantee</div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {openModal === 'free' && <FreePlanModal onClose={() => setOpenModal(null)} />}
      {openModal === 'premium' && <PremiumPlanModal onClose={() => setOpenModal(null)} />}
>>>>>>> a1c0cf687bac9b4a4838fa83ac06415152e1e079
    </div>
  )
}

export default PostAdmitServices













// // src/component/pages/postadmitservices/PostAdmitServices.jsx
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// import {
//   CheckCircle,
//   Users,
//   Home,
//   Heart,
//   DollarSign,
//   FileText,
//   MapPin,
//   Star,
//   Phone,
//   Shield,
//   Plane,
// } from "lucide-react";

// import FreePlanModal from "./FreePlanModal";
// import PremiumPlanModal from "./PremiumPlanModal";

// const PostAdmitServices = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeService, setActiveService] = useState(null);
//   const [openModal, setOpenModal] = useState(null); // "free" | "premium" | null

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const services = [
//     {
//       id: "free",
//       title: "Free Services with Counselling",
//       price: "₹ 0/-",
//       savings: "Savings up to ₹ 2,00,000/-",
//       icon: <CheckCircle className="w-8 h-8" />,
//       features: [
//         "Visa Counselling",
//         "Loan documents review and support",
//         "Accommodation securing support",
//       ],
//       gradient: "from-blue-400 to-blue-600",
//       img:
//         "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
//     },
//     {
//       id: "premium",
//       title: "Premium Post Admit Service",
//       price: "₹ 35,000/-",
//       icon: <Star className="w-8 h-8" />,
//       features: [
//         "Visa counselling with mock interviews",
//         "Vicinity of the accommodation",
//         "Cultural Mentor Abroad guidance",
//       ],
//       gradient: "from-violet-500 to-indigo-600",
//       img:
//         "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop",
//     },
//   ];

//   const differentiators = [
//     {
//       title: "End to End Loan Support",
//       description:
//         "Get collateral-free or low-interest loans from InCred, Nomad Credit, Prodigy Finance, HDFC Credila and more.",
//       icon: <DollarSign />,
//       color: "from-green-400 to-green-600",
//     },
//     {
//       title: "Visa Counselling",
//       description:
//         "We ensure your documents are in order and guide you through every step of the visa process.",
//       icon: <FileText />,
//       color: "from-blue-400 to-blue-600",
//     },
//     {
//       title: "Student Housing Partners",
//       description:
//         "Get safe, accessible, and affordable housing options near your university — stress free.",
//       icon: <Home />,
//       color: "from-purple-400 to-purple-600",
//     },
//     {
//       title: "Meet & Greet",
//       description:
//         "Our cultural mentors meet students at the airport, help them settle, and sort local essentials.",
//       icon: <Users />,
//       color: "from-orange-400 to-orange-600",
//     },
//     {
//       title: "Medical Support",
//       description:
//         "One month of mentor support to help adjust to climate, health and local systems abroad.",
//       icon: <Heart />,
//       color: "from-red-400 to-red-600",
//     },
//   ];

//   // small helper for card tilt/parallax
//   const cardHover = {
//     rest: { y: 0, rotateX: 0, rotateY: 0, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" },
//     hover: {
//       y: -6,
//       rotateX: -2,
//       rotateY: 2,
//       boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
//       transition: { type: "spring", stiffness: 220, damping: 18 },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       {/* ===== HERO ===== */}
//       <section className="relative overflow-hidden">
//         {/* Background image + overlay */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop')",
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-indigo-700/70" />

//         {/* Floating accents */}
//         <motion.div
//           aria-hidden
//           className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           aria-hidden
//           className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//         />

//         {/* Content */}
//         <div className="relative max-w-6xl mx-auto px-6 py-20 text-center text-white">
//           <motion.div
//             initial={{ opacity: 0, y: -18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
//               Post Admit Services
//             </h1>
//           </motion.div>

//           <motion.p
//             className="mt-3 text-sm md:text-base/relaxed text-blue-100"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.7 }}
//           >
//             Home / Post Admit Services
//           </motion.p>

//           <motion.p
//             className="mx-auto max-w-3xl mt-5 text-base md:text-lg text-blue-100/90"
//             initial={{ opacity: 0, y: 6 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.45, duration: 0.7 }}
//           >
//             Your Dreams, Our Goal! We help you achieve your study-abroad dreams
//             with expert guidance at every step.
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.06, y: -2 }}
//             whileTap={{ scale: 0.97 }}
//             className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3 font-semibold text-blue-700 shadow-lg hover:shadow-xl"
//           >
//             <Phone className="w-5 h-5" />
//             Get on a Call
//           </motion.button>

//           {/* subtle icon drizzle */}
//           <div className="pointer-events-none absolute inset-0">
//             <motion.div
//               className="absolute left-6 top-10 text-white/25"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <Plane className="w-8 h-8" />
//             </motion.div>
//             <motion.div
//               className="absolute right-10 bottom-10 text-white/25"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <Shield className="w-8 h-8" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== SERVICES ===== */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
//               Our Service Packages
//             </h2>
//             <p className="text-lg text-gray-600">
//               Choose the perfect package for your study-abroad journey
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {services.map((service) => (
//               <motion.div
//                 key={service.id}
//                 initial="rest"
//                 whileHover="hover"
//                 animate="rest"
//                 variants={cardHover}
//                 onMouseEnter={() => setActiveService(service.id)}
//                 onMouseLeave={() => setActiveService(null)}
//                 className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white`}
//               >
//                 {/* animated border ring */}
//                 <div
//                   className={`pointer-events-none absolute inset-0 rounded-2xl`}
//                   style={{
//                     padding: 1,
//                     background:
//                       "linear-gradient(120deg, rgba(99,102,241,0.35), rgba(59,130,246,0.35))",
//                     WebkitMask:
//                       "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                     WebkitMaskComposite: "xor",
//                     maskComposite: "exclude",
//                   }}
//                 />

//                 {/* image header */}
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={service.img}
//                     alt={service.title}
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//                   <div className="absolute left-4 top-4 flex items-center gap-2">
//                     <div
//                       className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-md`}
//                     >
//                       {service.icon}
//                     </div>
//                     {service.savings && (
//                       <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 shadow">
//                         {service.savings}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* content */}
//                 <div className="relative p-6 flex flex-col h-full">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     {service.title}
//                   </h3>

//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="text-2xl font-extrabold text-gray-900">
//                       {service.price}
//                     </div>
//                     <span className="text-xs text-gray-500">all taxes incl.</span>
//                   </div>

//                   <ul className="space-y-3 mb-6 flex-1">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start gap-3 text-gray-700">
//                         <CheckCircle className="mt-0.5 h-5 w-5 text-green-500 flex-shrink-0" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* cta row */}
//                   <div className="flex items-center gap-3">
//                     <motion.button
//                       whileHover={{ scale: 1.04 }}
//                       whileTap={{ scale: 0.97 }}
//                       onClick={() => setOpenModal(service.id)}
//                       className={`flex-1 rounded-xl bg-gradient-to-r ${service.gradient} px-6 py-3 font-semibold text-white shadow hover:shadow-lg`}
//                     >
//                       Get Started
//                     </motion.button>

//                     <motion.a
//                       whileHover={{ x: 2 }}
//                       href="#"
//                       className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                     >
//                       Details
//                     </motion.a>
//                   </div>

//                   {/* glow on hover */}
//                   <div
//                     className={`pointer-events-none absolute -inset-0.5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60 bg-gradient-to-r ${service.gradient}`}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== DIFFERENTIATORS ===== */}
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//               How Are We Different?
//             </h2>
//             <p className="text-gray-600">
//               Comprehensive support throughout your study-abroad journey
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {differentiators.slice(0, 2).map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -4 }}
//                 className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md"
//               >
//                 <div className="flex items-start gap-4">
//                   <div
//                     className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white`}
//                   >
//                     {React.cloneElement(item.icon, { className: "w-6 h-6" })}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm leading-relaxed text-gray-600 mb-3">
//                       {item.description}
//                     </p>
//                     <button className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
//                       <span>Learn More</span>
//                       <MapPin className="w-3 h-3" />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="grid md:grid-cols-3 gap-6 mt-6">
//             {differentiators.slice(2).map((item, index) => (
//               <motion.div
//                 key={index + 2}
//                 whileHover={{ y: -4 }}
//                 className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm hover:shadow-md"
//               >
//                 <div
//                   className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white`}
//                 >
//                   {React.cloneElement(item.icon, { className: "w-6 h-6" })}
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm leading-relaxed text-gray-600 mb-3">
//                   {item.description.substring(0, 120)}...
//                 </p>
//                 <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
//                   Learn More
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== CTA ===== */}
//       <section className="relative overflow-hidden py-16">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800" />
//         <div className="absolute inset-0">
//           <motion.div
//             className="absolute top-0 left-0 h-full w-full bg-black/15"
//             animate={{ opacity: [0.2, 0.3, 0.2] }}
//             transition={{ duration: 6, repeat: Infinity }}
//           />
//           <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
//           <div className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-blue-300/20 blur-3xl" />
//         </div>

//         <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//             Ready to Start Your Journey?
//           </h2>
//           <p className="text-lg text-blue-100 mb-8">
//             Let our experts guide you through every step of your study-abroad adventure.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg hover:bg-blue-50"
//             >
//               Get Free Consultation
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-blue-600"
//             >
//               Contact Us
//             </motion.button>
//           </div>
//         </div>
//       </section>

//       {/* Modals */}
//       {openModal === "free" && (
//         <FreePlanModal onClose={() => setOpenModal(null)} />
//       )}
//       {openModal === "premium" && (
//         <PremiumPlanModal onClose={() => setOpenModal(null)} />
//       )}
//     </div>
//   );
// };

// export default PostAdmitServices;

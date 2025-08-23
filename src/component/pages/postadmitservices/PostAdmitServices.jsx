

import React from 'react'

function PostAdmitServices() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-64 h-40 bg-white rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
        {/* Animated text */}
        <h2 className="text-xl font-bold text-gray-700 animate-bounce">
          Coming Soon 🚀
        </h2>

        {/* Optional shimmer background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse opacity-30"></div>
      </div>
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

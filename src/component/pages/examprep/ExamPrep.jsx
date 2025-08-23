import React from 'react'

function ExamPrep() {
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

export default ExamPrep








// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion"; 
// import { 
//   Star, Clock, MessageCircle, Globe, Shield, DollarSign, Eye, 
//   ChevronRight, BookOpen, GraduationCap, BedDouble, Building2, Landmark
// } from "lucide-react";
// import { Link } from "react-router-dom"; // ✅ Added import

// const ExamPrep = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);

//     // Add CSS for scrolling animation
//     const style = document.createElement("style");
//     style.textContent = `
//       @keyframes scroll {
//         0% { transform: translateX(0); }
//         100% { transform: translateX(-50%); }
//       }
//       .animate-scroll {
//         animation: scroll 20s linear infinite;
//       }
//       .animate-scroll:hover {
//         animation-play-state: paused;
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   const trustpilotFeatures = [
//     { icon: <Clock className="w-6 h-6" />, title: "Book a service instantly", color: "from-blue-400 to-blue-600" },
//     { icon: <MessageCircle className="w-6 h-6" />, title: "24/7 Live chat Support", color: "from-green-400 to-green-600" },
//     { icon: <Globe className="w-6 h-6" />, title: "Across 93+ Nationalities", color: "from-purple-400 to-purple-600" },
//     { icon: <Shield className="w-6 h-6" />, title: "Reliable & Trustworthy", color: "from-indigo-400 to-indigo-600" },
//     { icon: <DollarSign className="w-6 h-6" />, title: "Affordable Cost", color: "from-orange-400 to-orange-600" },
//     { icon: <Eye className="w-6 h-6" />, title: "No hidden charges", color: "from-red-400 to-red-600" }
//   ];

//   const examPreparations = [
//     { id: "IELTS-ACEDEMIC", name: "IELTS Academic", logo: "IELTS", bgColor: "bg-red-500", textColor: "text-white" },
//     { id: "IELTS", name: "IELTS General", logo: "IELTS", bgColor: "bg-red-500", textColor: "text-white" },
//     { id: "ToeflIBT", name: "TOEFL-iBT", logo: "TOEFL", bgColor: "bg-blue-600", textColor: "text-white" },
//     { id: "PTEAcademic", name: "PTE", logo: "P", bgColor: "bg-teal-500", textColor: "text-white" },
//     { id: "DuolingoTest", name: "Duolingo English Test", logo: "🦉", bgColor: "bg-green-500", textColor: "text-white" },
//     { id: "GREPrep", name: "GRE", logo: "GRE", bgColor: "bg-blue-700", textColor: "text-white" }
//   ];

//   const partners = [
//     { name: "FOOD HUB", color: "bg-red-500" },
//     { name: "noah", color: "bg-orange-500" },
//     { name: "EBIX", color: "bg-gray-700" },
//     { name: "HDFC CREDILA", color: "bg-blue-600" },
//     { name: "Garantme", color: "bg-indigo-800" },
//     { name: "COHORT GO", color: "bg-yellow-500" },
//     { name: "TM", color: "bg-blue-800" },
//     { name: "AUXILO", color: "bg-yellow-100 text-gray-800" },
//     { name: "Welcome", color: "bg-green-400" }
//   ];

//   const stats = [
//     { icon: <BedDouble className="w-8 h-8" />, number: "2 Mn+", label: "Beds", color: "from-purple-400 to-purple-600" },
//     { icon: <Building2 className="w-8 h-8" />, number: "65K+", label: "Properties", color: "from-blue-400 to-blue-600" },
//     { icon: <GraduationCap className="w-8 h-8" />, number: "2 Mn", label: "Students Assisted", color: "from-indigo-400 to-indigo-600" },
//     { icon: <Landmark className="w-8 h-8" />, number: "515+", label: "Global Cities", color: "from-green-400 to-green-600" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-400 text-white py-12">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-3xl md:text-5xl font-bold mb-4"
//           >
//             Exam Preparation&apos;s
//           </motion.h1>
//           <p className="text-sm md:text-base mb-2">Home / Exam Preparation</p>
//           <p className="text-lg md:text-xl">
//             Comprehensive test preparation for your study abroad journey
//           </p>
//         </div>
//       </div>

//       {/* Exam Preparation Section */}
//       <div className="py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {examPreparations.map((exam) => (
//               <Link 
//                 key={exam.id} 
//                 to={`/${exam.id}`}  
//                 className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 cursor-pointer"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className={`w-12 h-12 ${exam.bgColor} rounded-xl flex items-center justify-center ${exam.textColor} font-bold text-sm`}>
//                       {exam.logo}
//                     </div>
//                     <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">{exam.name}</h3>
//                   <p className="text-gray-600 text-sm mb-4">Expert-led preparation course</p>
//                   <div className="flex items-center space-x-2 text-blue-600">
//                     <BookOpen className="w-4 h-4" />
//                     <span className="text-sm font-medium">Start Preparation</span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Travel CTA */}
//       <div className="py-12 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
//               Essential services for a safe and joyful journey.
//             </h2>
//             <button className="bg-white/20 backdrop-blur-lg border border-white/30 text-white font-medium py-3 px-6 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300">
//               Explore all services
//             </button>
//             <div className="mt-8">
//               <h3 className="text-xl font-semibold text-white">Travel with us</h3>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-12 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
//                 <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white`}>
//                   {stat.icon}
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
//                 <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Trustpilot Section */}
//       <div className="py-8 bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center items-center mb-8">
//             <div className="flex items-center space-x-2">
//               <Star className="w-8 h-8 text-green-500 fill-current" />
//               <span className="text-2xl font-bold text-gray-900">Trustpilot</span>
//               <div className="flex items-center space-x-1 ml-4">
//                 <span className="text-lg font-semibold">4.7</span>
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
//                   ))}
//                 </div>
//                 <span className="text-gray-600">• Reviews 4700+ • Excellent</span>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {trustpilotFeatures.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`group flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//                 }`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
//                   {feature.icon}
//                 </div>
//                 <span className="text-gray-700 font-medium">{feature.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Partners Section */}
//       <div className="py-12 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Our Partners</h2>
//             <p className="text-gray-600">Trusted partnerships for your success</p>
//           </div>
//           <div className="relative overflow-hidden">
//             <div className="flex animate-scroll space-x-8">
//               {[...partners, ...partners].map((partner, index) => (
//                 <div key={index} className={`flex-shrink-0 w-20 h-20 ${partner.color} rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300`}>
//                   <span className={`text-xs font-semibold text-center px-2 ${partner.color.includes("text-gray-800") ? "text-gray-800" : "text-white"}`}>
//                     {partner.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
//           <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-300/20 rounded-full blur-3xl"></div>
//         </div>
//         <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Begin Your Preparation?</h2>
//           <p className="text-xl text-blue-100 mb-8">Join thousands of successful students who achieved their dreams with our expert guidance</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
//               Start Free Assessment
//             </button>
//             <button className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
//               Book Consultation
//             </button>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ExamPrep;

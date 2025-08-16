
// import React from 'react';

// const ServicesGrid = () => {
//     const services = [
//         {
//             title: "Accommodation",
//             description: "Find the ideal home, close to university and city life",
//             icon: "🏠",
//             category: "Housing",
//             features: ["Verified listings", "Location mapping", "Roommate matching", "Rental agreements"],
//             color: "bg-purple-100 text-purple-800"
//         },
//         {
//             title: "Test Preparation",
//             description: "Comprehensive resources for IELTS, TOEFL, GRE, GMAT and more",
//             icon: "📚",
//             category: "Academics",
//             features: ["Practice tests", "Study plans", "Tutoring options", "Score improvement"],
//             color: "bg-blue-100 text-blue-800"
//         },
//         {
//             title: "Health Insurance",
//             description: "Complete health coverage tailored for international students",
//             icon: "🏥",
//             category: "Insurance",
//             features: ["Global coverage", "Affordable premiums", "24/7 support", "Cashless hospitals"],
//             color: "bg-green-100 text-green-800"
//         },
//         {
//             title: "Student Ambassadors",
//             description: "Connect with current students for firsthand guidance",
//             icon: "👥",
//             category: "Support",
//             features: ["University specific", "Cultural advice", "Application tips", "Settlement help"],
//             color: "bg-yellow-100 text-yellow-800"
//         },
//         {
//             title: "Student Financing",
//             description: "Loans and financial aid for your international education",
//             icon: "💰",
//             category: "Finance",
//             features: ["Competitive rates", "Flexible repayment", "No collateral", "Quick approval"],
//             color: "bg-indigo-100 text-indigo-800"
//         },
//         {
//             title: "Forex Services",
//             description: "Get the best currency exchange rates for students",
//             icon: "💱",
//             category: "Finance",
//             features: ["Zero fees", "Better than market rates", "Instant transfer", "Multi-currency"],
//             color: "bg-pink-100 text-pink-800"
//         },
//         {
//             title: "Student Flights",
//             description: "Exclusive discounts on international student airfare",
//             icon: "✈️",
//             category: "Travel",
//             features: ["Extra baggage", "Date flexibility", "Price match", "24/7 support"],
//             color: "bg-red-100 text-red-800"
//         },
//         {
//             title: "Airport Pickup",
//             description: "Hassle-free arrival with our reliable pickup service",
//             icon: "🚗",
//             category: "Transport",
//             features: ["Meet & greet", "Local SIM help", "City orientation", "Direct to accommodation"],
//             color: "bg-teal-100 text-teal-800"
//         },
//         {
//             title: "International SIM",
//             description: "Stay connected immediately after landing",
//             icon: "📱",
//             category: "Connectivity",
//             features: ["Pre-activated", "Unlimited calls", "High-speed data", "Global validity"],
//             color: "bg-orange-100 text-orange-800"
//         },
//         {
//             title: "SOP Maker",
//             description: "Craft a winning Statement of Purpose with our free tool",
//             icon: "✍️",
//             category: "Academics",
//             features: ["Templates", "Grammar check", "Plagiarism scan", "Expert review"],
//             color: "bg-blue-100 text-blue-800"
//         },
//         {
//             title: "Student Internships",
//             description: "Gain work experience during your studies",
//             icon: "👔",
//             category: "Career",
//             features: ["Paid positions", "Academic credit", "Visa compliance", "Global companies"],
//             color: "bg-green-100 text-green-800"
//         },
//         {
//             title: "Room Essentials",
//             description: "Everything you need to settle in comfortably",
//             icon: "🛏️",
//             category: "Housing",
//             features: ["Bedding kits", "Kitchen sets", "Study packages", "Next-day delivery"],
//             color: "bg-purple-100 text-purple-800"
//         },
//         {
//             title: "Job Search",
//             description: "Find employment opportunities worldwide",
//             icon: "🔍",
//             category: "Career",
//             features: ["Resume builder", "Interview prep", "Work visa help", "Career counseling"],
//             color: "bg-yellow-100 text-yellow-800"
//         },
//         {
//             title: "Free Courses",
//             description: "Enhance your skills with our curated online courses",
//             icon: "💻",
//             category: "Academics",
//             features: ["Certificates", "Self-paced", "Industry experts", "Skill badges"],
//             color: "bg-indigo-100 text-indigo-800"
//         },
//         {
//             title: "Visa Assistance",
//             description: "End-to-end support for your student visa",
//             icon: "🛂",
//             category: "Immigration",
//             features: ["Document checklist", "Application review", "Interview prep", "Approval tracking"],
//             color: "bg-pink-100 text-pink-800"
//         },
//         {
//             title: "Travel Insurance",
//             description: "Comprehensive coverage for your international journeys",
//             icon: "🌍",
//             category: "Insurance",
//             features: ["Medical coverage", "Trip protection", "Lost baggage", "24/7 assistance"],
//             color: "bg-red-100 text-red-800"
//         }
//     ];

//     return (
//         <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
//                         Student Services
//                     </h2>
//                     <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
//                         Everything you need for your international education journey
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                     {services.map((service, index) => (
//                         <div
//                             key={index}
//                             className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
//                         >
//                             <div className="p-6">
//                                 <div className="flex items-start">
//                                     <span className={`text-3xl p-3 rounded-lg ${service.color} mr-4`}>
//                                         {service.icon}
//                                     </span>
//                                     <div>
//                                         <span className={`text-xs font-semibold px-2 py-1 rounded-full ${service.color}`}>
//                                             {service.category}
//                                         </span>
//                                         <h3 className="text-xl font-bold text-gray-900 mt-2">{service.title}</h3>
//                                     </div>
//                                 </div>

//                                 <p className="text-gray-600 mt-4 mb-6">{service.description}</p>

//                                 <div className="border-t border-gray-200 pt-4">
//                                     <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
//                                         Features
//                                     </h4>
//                                     <ul className="space-y-2">
//                                         {service.features.map((feature, i) => (
//                                             <li key={i} className="flex items-start">
//                                                 <svg className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                                                 </svg>
//                                                 <span className="ml-2 text-gray-700">{feature}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>

//                                 <button className={`mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${service.color.replace('100', '600').replace('text', 'bg')} hover:${service.color.replace('100', '700').replace('text', 'bg')} focus:outline-none focus:ring-2 focus:ring-offset-2 ${service.color.replace('100', '500').replace('text', 'focus:ring')}`}>
//                                     Learn More
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="mt-16 text-center">
//                     <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                         View All Services
//                         <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ServicesGrid;
// src/pages/Services.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const services = [
//     {
//         title: "Accommodation",
//         desc: "Find the ideal home, close to university and life",
//         img: "https://dreamstofly.com/web/images/services/services-accommodation.jpg?w=128",
//     },
//     {
//         title: "Connect With Our Ambassadors",
//         desc: "Connect with our ambassadors for firsthand...",
//         img: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
//     },
//     {
//         title: "Student Flight Tickets",
//         desc: "Book your student flight tickets with us for exclusiv...",
//         img: "https://cdn-icons-png.flaticon.com/512/1973/1973924.png",
//     },
//     {
//         title: "Test Preparation",
//         desc: "Prepare for your exams with our comprehensive test...",
//         img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     },
//     {
//         title: "Student Financing",
//         desc: "No need to hold back on your dream of education...",
//         img: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
//     },
//     {
//         title: "Airport Pickup",
//         desc: "Enjoy a hassle-free arrival with our reliable airport...",
//         img: "https://cdn-icons-png.flaticon.com/512/3097/3097144.png",
//     },
//     {
//         title: "Health Insurance",
//         desc: "Secure your health abroad with our comprehensive...",
//         img: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
//     },
//     {
//         title: "Forex",
//         desc: "Get the best rates and seamless service with our...",
//         img: "https://cdn-icons-png.flaticon.com/512/633/633652.png",
//     },
//     {
//         title: "International SIM",
//         desc: "Stay connected abroad with our affordable internatio...",
//         img: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png",
//     },
//     {
//         title: "Free SOP Maker",
//         desc: "Craft a compelling Statement of Purpose with...",
//         img: "https://cdn-icons-png.flaticon.com/512/2811/2811790.png",
//     },
//     {
//         title: "Job Search",
//         desc: "Unlock global opportunities with our expert job search...",
//         img: "https://cdn-icons-png.flaticon.com/512/3135/3135676.png",
//     },
//     {
//         title: "International Money Transfer",
//         desc: "Transfer money internationally with ease...",
//         img: "https://cdn-icons-png.flaticon.com/512/4151/4151169.png",
//     },
//     {
//         title: "Student Internships",
//         desc: "Gain valuable experience with our tailored student...",
//         img: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
//     },
//     {
//         title: "Free Online Courses",
//         desc: "Enhance your skills and knowledge with our free...",
//         img: "https://cdn-icons-png.flaticon.com/512/3135/3135815.png",
//     },
//     {
//         title: "Get Visa",
//         desc: "Streamline your journey with our expert assistance...",
//         img: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
//     },
//     {
//         title: "Room Essentials",
//         desc: "Settle in comfortably with our curated list of essential...",
//         img: "https://cdn-icons-png.flaticon.com/512/869/869636.png",
//     },
//     {
//         title: "Room Replacement",
//         desc: "Experience hassle-free living with our quick and...",
//         img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
//     },
//     {
//         title: "Travel Insurance",
//         desc: "Travel worry-free with our comprehensive travel...",
//         img: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
//     },
//     {
//         title: "Student Bank Account",
//         desc: "Empower your future with a student bank account...",
//         img: "https://cdn-icons-png.flaticon.com/512/2897/2897746.png",
//     },
//     {
//         title: "HungryHub",
//         desc: "Discover your next meal adventure with HungryHub...",
//         img: "https://cdn-icons-png.flaticon.com/512/706/706164.png",
//     },
//     {
//         title: "Guarantor",
//         desc: "Secure your future with Guarantor – where trust...",
//         img: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
//     },
// ];

// export default function Services() {
//     return (
//         <div className="py-12 px-6 md:px-16 bg-gray-50">
//             <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
//             <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {services.map((service, index) => (
//                     <motion.div
//                         key={index}
//                         className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start hover:shadow-2xl transition duration-300"
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.05, duration: 0.5 }}
//                         whileHover={{ scale: 1.05 }}
//                     >
//                         <img src={service.img} alt={service.title} className="w-20 h-20 mb-4" />
//                         <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
//                         <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
//                         <span className="mt-4 text-indigo-600 text-sm font-medium cursor-pointer">
//                             Learn More →
//                         </span>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// }
// src/pages/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import services from "../../data/Services";

export default function Services() {
    return (
        <div className="py-12 px-6 md:px-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:shadow-2xl transition duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Image */}
                        <img
                            src={service.img}
                            alt={service.title}
                            className="w-20 h-20 flex-shrink-0 rounded-lg"
                        />

                        {/* Text Content */}
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
                            <span className="mt-2 text-indigo-600 text-sm font-medium cursor-pointer">
                                Learn More →
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

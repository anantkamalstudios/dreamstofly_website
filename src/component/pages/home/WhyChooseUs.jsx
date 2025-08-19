
// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import studyGoals from "../../data/Studygoal.js";

// const StudyGoal = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [visibleCards, setVisibleCards] = useState(4);

//     const totalCards = studyGoals.length;

//     // Handle responsive visibleCards count
//     useEffect(() => {
//         const updateVisibleCards = () => {
//             if (window.innerWidth <= 640) {
//                 setVisibleCards(1);
//             } else {
//                 setVisibleCards(4);
//             }
//         };
//         updateVisibleCards();
//         window.addEventListener("resize", updateVisibleCards);
//         return () => window.removeEventListener("resize", updateVisibleCards);
//     }, []);

//     // Auto-slide on mobile
//     useEffect(() => {
//         if (visibleCards === 1) {
//             const interval = setInterval(() => {
//                 setCurrentIndex((prev) =>
//                     prev + 1 < totalCards ? prev + 1 : 0
//                 );
//             }, 2500);
//             return () => clearInterval(interval);
//         }
//     }, [visibleCards, totalCards]);

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex + 1 <= totalCards - visibleCards ? prevIndex + 1 : 0
//         );
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex - 1 >= 0 ? prevIndex - 1 : totalCards - visibleCards
//         );
//     };

//     return (
//         <div className="w-full max-w-7xl mx-auto px-4 py-8">
//             <div className="bg-white p-6">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold text-gray-800">
//                         Select Your Study Goal
//                     </h2>
//                     {visibleCards > 1 && (
//                         <div className="flex items-center space-x-4">
//                             <div className="flex space-x-2">
//                                 <button
//                                     onClick={prevSlide}
//                                     className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//                                 >
//                                     <ChevronLeft className="w-5 h-5 text-gray-600" />
//                                 </button>
//                                 <button
//                                     onClick={nextSlide}
//                                     className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//                                 >
//                                     <ChevronRight className="w-5 h-5 text-gray-600" />
//                                 </button>
//                             </div>
//                             <button className="text-sm font-medium text-blue-600 transition-colors">
//                                 View All
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 <div className="relative overflow-hidden">
//                     <div
//                         className="flex transition-transform duration-500 ease-in-out"
//                         style={{
//                             transform: `translateX(-${currentIndex * (100 / visibleCards)
//                                 }%)`,
//                         }}
//                     >
//                         {studyGoals.map((goal, index) => {
//                             const Icon = goal.icon;
//                             return (
//                                 <div
//                                     key={index}
//                                     className="flex-shrink-0 px-3"
//                                     style={{ width: `${100 / visibleCards}%` }}
//                                 >
//                                     <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:shadow-md transition-all hover:border-blue-200">
//                                         <div className="flex items-start gap-4 mb-3">
//                                             <span className="p-4 rounded-full border">
//                                                 <Icon className="w-5 h-5 text-blue-600" />
//                                             </span>
//                                             <div>
//                                                 <h3 className="text-lg font-bold text-gray-800">
//                                                     {goal.title}
//                                                 </h3>
//                                                 <p className="text-sm text-gray-500">
//                                                     {goal.colleges}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="border-t border-gray-100 pt-3">
//                                             <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">
//                                                 Popular Courses
//                                             </h4>
//                                             <ul className="space-y-2">
//                                                 {goal.popularCourses.map((course, i) => (
//                                                     <li key={i}>
//                                                         <a
//                                                             href="#"
//                                                             className="text-sm text-gray-700 flex items-center"
//                                                         >
//                                                             <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
//                                                             {course}
//                                                         </a>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StudyGoal;
import React from "react";
import cards from "../../data/home/WhyChooseUs";

const WhyChooseUs = () => {

    return (
        <div className="bg-white py-12 px-4 md:px-8 lg:px-16">
            {/* Heading Section */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Give Your Wings a Smooth Flight <br />
                    <span className="text-orange-600">Dreams to Fly Way !</span>
                </h2>
                <p className="mt-4 text-gray-600">
                    Post a job to tell us about your project. We'll quickly match you with
                    the right freelancers.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 hover:shadow-md transition"
                    >
                        <div className="flex items-start gap-4">
                            {/* Image */}
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-16 h-16 object-contain flex-shrink-0"
                            />
                            {/* Text */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;

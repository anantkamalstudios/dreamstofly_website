
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import {
//     FaCogs,           // Engineering
//     FaUserTie,        // Management
//     FaShoppingCart,    // Commerce
//     FaPalette,        // Arts
//     FaMedkit,         // Medical
//     FaBalanceScale,   // Law
//     FaFlask,          // Science
//     FaPills           // Pharmacy
// } from 'react-icons/fa';

// const CollegeDuniaStudyGoalSlider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const studyGoals = [
//         {
//             title: "Engineering",
//             colleges: "6343 Colleges",
//             popularCourses: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"],
//             icon: <FaCogs className="w-5 h-5" />,
//             // color: "bg-blue-100 text-blue-600"
//         },
//         {
//             title: "Management",
//             colleges: "7942 Colleges",
//             popularCourses: ["MBA/PGDM", "BBA/BIAS", "Executive MBA"],
//             icon: <FaUserTie className="w-5 h-5" />,
//             // color: "bg-green-100 text-green-600"
//         },
//         {
//             title: "Commerce",
//             colleges: "5049 Colleges",
//             popularCourses: ["B.Com", "M.Com"],
//             icon: <FaShoppingCart className="w-5 h-5" />,
//             // color: "bg-purple-100 text-purple-600"
//         },
//         {
//             title: "Arts",
//             colleges: "5703 Colleges",
//             popularCourses: ["BA", "MA"],
//             icon: <FaPalette className="w-5 h-5" />,
//             // color: "bg-yellow-100 text-yellow-600"
//         },
//         {
//             title: "Medical",
//             colleges: "3201 Colleges",
//             popularCourses: ["MBBS", "BDS", "BAMS"],
//             icon: <FaMedkit className="w-5 h-5" />,
//             // color: "bg-red-100 text-red-600"
//         },
//         {
//             title: "Law",
//             colleges: "2105 Colleges",
//             popularCourses: ["LLB", "BA LLB", "LLM"],
//             icon: <FaBalanceScale className="w-5 h-5" />,
//             // color: "bg-indigo-100 text-indigo-600"
//         },
//         {
//             title: "Science",
//             colleges: "4120 Colleges",
//             popularCourses: ["B.Sc", "M.Sc", "BCA"],
//             icon: <FaFlask className="w-5 h-5" />,
//             // color: "bg-teal-100 text-teal-600"
//         },
//         {
//             title: "Pharmacy",
//             colleges: "1850 Colleges",
//             popularCourses: ["B.Pharma", "D.Pharma", "M.Pharma"],
//             icon: <FaPills className="w-5 h-5" />,
//             // color: "bg-pink-100 text-pink-600"
//         }
//     ];

//     const visibleCards = 4;
//     const totalCards = studyGoals.length;

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
//         <div className="w-full max-w-7xl  mx-auto px-4 py-8">
//             <div className="bg-white   p-6">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold text-gray-800">Select Your Study Goal</h2>
//                     <div className="flex items-center space-x-4">
//                         <div className="flex space-x-2">
//                             <button
//                                 onClick={prevSlide}
//                                 className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//                                 aria-label="Previous"
//                             >
//                                 <ChevronLeft className="w-5 h-5 text-gray-600" />
//                             </button>
//                             <button
//                                 onClick={nextSlide}
//                                 className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//                                 aria-label="Next"
//                             >
//                                 <ChevronRight className="w-5 h-5 text-gray-600" />
//                             </button>
//                         </div>
//                         <button className="text-sm font-medium text-blue-600  transition-colors">
//                             View All
//                         </button>
//                     </div>
//                 </div>

//                 <div className="relative overflow-hidden">
//                     <div
//                         className="flex transition-transform duration-300 ease-in-out"
//                         style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
//                     >
//                         {studyGoals.map((goal, index) => (
//                             <div
//                                 key={index}
//                                 className="flex-shrink-0 w-full px-3"
//                                 style={{ width: `${100 / visibleCards}%` }}
//                             >
//                                 <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:shadow-md transition-all hover:border-blue-200">
//                                     <div className="flex items-start gap-4 mb-3">
//                                         <span className={`p-4 rounded-full border ${goal.color}`}>
//                                             {goal.icon}
//                                         </span>
//                                         <div>
//                                             <h3 className="text-lg font-bold text-gray-800">{goal.title}</h3>
//                                             <p className="text-sm text-gray-500">{goal.colleges}</p>
//                                         </div>
//                                     </div>

//                                     <div className="border-t border-gray-100 pt-3">
//                                         <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Popular Courses</h4>
//                                         <ul className="space-y-2">
//                                             {goal.popularCourses.map((course, i) => (
//                                                 <li key={i}>
//                                                     <a
//                                                         href="#"
//                                                         className="text-sm text-gray-700 transition-colors flex items-center"
//                                                     >
//                                                         <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
//                                                         {course}
//                                                     </a>

//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default CollegeDuniaStudyGoalSlider;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    FaCogs, FaUserTie, FaShoppingCart, FaPalette,
    FaMedkit, FaBalanceScale, FaFlask, FaPills
} from 'react-icons/fa';

const CollegeDuniaStudyGoalSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(4);

    const studyGoals = [
        { title: "Engineering", colleges: "6343 Colleges", popularCourses: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"], icon: <FaCogs className="w-5 h-5" /> },
        { title: "Management", colleges: "7942 Colleges", popularCourses: ["MBA/PGDM", "BBA/BIAS", "Executive MBA"], icon: <FaUserTie className="w-5 h-5" /> },
        { title: "Commerce", colleges: "5049 Colleges", popularCourses: ["B.Com", "M.Com"], icon: <FaShoppingCart className="w-5 h-5" /> },
        { title: "Arts", colleges: "5703 Colleges", popularCourses: ["BA", "MA"], icon: <FaPalette className="w-5 h-5" /> },
        { title: "Medical", colleges: "3201 Colleges", popularCourses: ["MBBS", "BDS", "BAMS"], icon: <FaMedkit className="w-5 h-5" /> },
        { title: "Law", colleges: "2105 Colleges", popularCourses: ["LLB", "BA LLB", "LLM"], icon: <FaBalanceScale className="w-5 h-5" /> },
        { title: "Science", colleges: "4120 Colleges", popularCourses: ["B.Sc", "M.Sc", "BCA"], icon: <FaFlask className="w-5 h-5" /> },
        { title: "Pharmacy", colleges: "1850 Colleges", popularCourses: ["B.Pharma", "D.Pharma", "M.Pharma"], icon: <FaPills className="w-5 h-5" /> }
    ];

    const totalCards = studyGoals.length;

    // Handle responsive visibleCards count
    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth <= 640) {
                setVisibleCards(1);
            } else {
                setVisibleCards(4);
            }
        };
        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
    }, []);

    // Auto-slide on mobile
    useEffect(() => {
        if (visibleCards === 1) {
            const interval = setInterval(() => {
                setCurrentIndex(prev =>
                    prev + 1 < totalCards ? prev + 1 : 0
                );
            }, 2500);
            return () => clearInterval(interval);
        }
    }, [visibleCards, totalCards]);

    const nextSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex + 1 <= totalCards - visibleCards ? prevIndex + 1 : 0
        );
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex - 1 >= 0 ? prevIndex - 1 : totalCards - visibleCards
        );
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="bg-white p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Select Your Study Goal</h2>
                    {visibleCards > 1 && (
                        <div className="flex items-center space-x-4">
                            <div className="flex space-x-2">
                                <button
                                    onClick={prevSlide}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    <ChevronRight className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                            <button className="text-sm font-medium text-blue-600 transition-colors">
                                View All
                            </button>
                        </div>
                    )}
                </div>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                    >
                        {studyGoals.map((goal, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 px-3"
                                style={{ width: `${100 / visibleCards}%` }}
                            >
                                <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:shadow-md transition-all hover:border-blue-200">
                                    <div className="flex items-start gap-4 mb-3">
                                        <span className="p-4 rounded-full border">
                                            {goal.icon}
                                        </span>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">{goal.title}</h3>
                                            <p className="text-sm text-gray-500">{goal.colleges}</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-100 pt-3">
                                        <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Popular Courses</h4>
                                        <ul className="space-y-2">
                                            {goal.popularCourses.map((course, i) => (
                                                <li key={i}>
                                                    <a href="#" className="text-sm text-gray-700 flex items-center">
                                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                                                        {course}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDuniaStudyGoalSlider;

// import React from 'react';
// import {
//     FaGraduationCap,
//     FaTrophy,
//     FaSearch,
//     FaBalanceScale,
//     FaClipboardList,
//     FaChartLine
// } from 'react-icons/fa';

// const ExploreProgramsSection = () => {
//     return (
//         <div className="w-full max-w-7xl mx-auto px-4 py-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* Programs Card */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
//                     <div className="flex items-center gap-3 mb-4">
//                         <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
//                             <FaGraduationCap className="w-6 h-6" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-800">Explore Programs</h3>
//                     </div>
//                     <ul className="space-y-3">
//                         <li className="text-gray-700 hover:text-blue-600 transition-colors">ME/M.Tech</li>
//                         <li className="text-gray-700 hover:text-blue-600 transition-colors">B.Sc</li>
//                         <li className="text-gray-700 hover:text-blue-600 transition-colors">BA</li>
//                         <li className="text-gray-700 hover:text-blue-600 transition-colors">B.Com</li>
//                         <li className="text-gray-700 hover:text-blue-600 transition-colors">BCA</li>
//                         <li className="text-gray-700 hover:text-blue-600 transition-colors">BBA/BMS</li>
//                         <li className="text-gray-700 hover:text-blue-600 transition-colors">B.Sc (Nursing)</li>
//                     </ul>
//                 </div>

//                 {/* Ranking Card */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
//                     <div className="flex items-center gap-3 mb-4">
//                         <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
//                             <FaTrophy className="w-6 h-6" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-800">Ranking</h3>
//                     </div>
//                     <p className="text-gray-600 mb-4">College ranked based on real data</p>
//                     <div className="grid grid-cols-2 gap-4 mb-4">
//                         <div>
//                             <p className="text-gray-500 text-sm">Indiatoday</p>
//                             <p className="font-medium">1799</p>
//                         </div>
//                         <div>
//                             <p className="text-gray-500 text-sm">College/unia</p>
//                             <p className="font-medium">1843</p>
//                         </div>
//                         <div>
//                             <p className="text-gray-500 text-sm">IIRF</p>
//                             <p className="font-medium">1733</p>
//                         </div>
//                         <div>
//                             <p className="text-gray-500 text-sm">Outlook</p>
//                             <p className="font-medium">1362</p>
//                         </div>
//                     </div>
//                     <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
//                         Top Ranked Colleges in India <span className="ml-1">→</span>
//                     </a>
//                 </div>

//                 {/* Find Colleges Card */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
//                     <div className="flex items-center gap-3 mb-4">
//                         <div className="p-3 bg-green-100 rounded-lg text-green-600">
//                             <FaSearch className="w-6 h-6" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-800">Find Colleges</h3>
//                     </div>
//                     <p className="text-gray-600 mb-4">Discover 19000+ colleges via preferences</p>
//                     <ul className="space-y-3 mb-4">
//                         <li className="text-gray-700 hover:text-blue-600 transition-colors">Best MBA colleges in India</li>
//                         <li className="text-gray-700 hover:text-blue-600 transition-colors">Best BTech colleges in India</li>
//                     </ul>
//                     <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
//                         Discover Top Colleges in India <span className="ml-1">→</span>
//                     </a>
//                 </div>

//                 {/* Compare Colleges Card */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
//                     <div className="flex items-center gap-3 mb-4">
//                         <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
//                             <FaBalanceScale className="w-6 h-6" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-800">Compare Colleges</h3>
//                     </div>
//                     <p className="text-gray-600 mb-4">Compare on the basis of rank, fees, etc.</p>
//                     <ul className="space-y-3 mb-4">
//                         <li className="text-gray-700 hover:text-blue-600 transition-colors">IT Madras - BE/B.Tech</li>
//                         <li className="text-gray-700 hover:text-blue-600 transition-colors">IT Madras - BE/B.Tech</li>
//                         <li className="text-gray-700 hover:text-blue-600 transition-colors">IT Bombay - BE/B.Tech</li>
//                     </ul>
//                     <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
//                         Compare Colleges <span className="ml-1">→</span>
//                     </a>
//                 </div>

//                 {/* Exams Card */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
//                     <div className="flex items-center gap-3 mb-4">
//                         <div className="p-3 bg-red-100 rounded-lg text-red-600">
//                             <FaClipboardList className="w-6 h-6" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-800">Exams</h3>
//                     </div>
//                     <p className="text-gray-600 mb-4">Know more about your exams</p>
//                     <div className="grid grid-cols-2 gap-4 mb-4">
//                         <ul className="space-y-2">
//                             <li className="text-gray-700 hover:text-blue-600 transition-colors">B.Com</li>
//                             <li className="text-gray-700 hover:text-blue-600 transition-colors">B.Sc</li>
//                             <li className="text-gray-700 hover:text-blue-600 transition-colors">B.Sc (Nursing)</li>
//                             <li className="text-gray-700 hover:text-blue-600 transition-colors">BA</li>
//                         </ul>
//                         <ul className="space-y-2">
//                             <li className="text-gray-700 hover:text-blue-600 transition-colors">BBA/BMS</li>
//                             <li className="text-gray-700 hover:text-blue-600 transition-colors">BCA</li>
//                             <li className="text-gray-700 hover:text-blue-600 transition-colors">BE/B.Tech</li>
//                         </ul>
//                     </div>
//                     <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
//                         Check All Entrance Exams in India <span className="ml-1">→</span>
//                     </a>
//                 </div>

//                 {/* College Predictor Card */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
//                     <div className="flex items-center gap-3 mb-4">
//                         <div className="p-3 bg-teal-100 rounded-lg text-teal-600">
//                             <FaChartLine className="w-6 h-6" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-800">College Predictor</h3>
//                     </div>
//                     <p className="text-gray-600 mb-4">Know your college admission chances</p>
//                     <div className="grid grid-cols-2 gap-4 mb-4">
//                         <ul className="space-y-2">
//                             <li className="text-gray-700 hover:text-blue-600 transition-colors">CUET</li>
//                             <li className="text-gray-700 hover:text-blue-600 transition-colors">NEET</li>
//                         </ul>
//                         <ul className="space-y-2">
//                             <li className="text-gray-700 hover:text-blue-600 transition-colors">AYUSH NEET Counselling</li>
//                             <li className="text-gray-700 hover:text-blue-600 transition-colors">JEE Advanced</li>
//                         </ul>
//                     </div>
//                     <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
//                         Find Where you may get Admission <span className="ml-1">→</span>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ExploreProgramsSection;
import React from "react";
import ranking from "../../../assets/ranking.jpg"
import college from "../../../assets/college.png"


export default function ExplorePrograms() {
    const programs = [
        "ME/M.Tech",
        "B.Sc",
        "BA",
        "B.Com",
        "BCA",
        "BBA/BMS",
        "B.Sc (Nursing)"
    ];

    const cards = [
        {
            title: "Ranking",
            desc: "College ranked based on real data",
            tags: ["Indiatoday - 1799", "Collegedunia - 1843", "IIRF - 1733", "Outlook - 1362"],
            footer: "Top Ranked Colleges in India ›",
            img: ranking,
        },
        {
            title: "Find Colleges",
            desc: "Discover 19000+ colleges via preferences",
            tags: ["Best MBA colleges in India", "Best BTech colleges in India"],
            footer: "Discover Top Colleges in India ›",
            img: college,
        },
        {
            title: "Compare Colleges",
            desc: "Compare on the basis of rank, fees, etc.",
            tags: ["IIT Madras vs IIT Delhi", "IIT Madras vs IIT Bombay"],
            footer: "Compare Colleges ›",
            img: "https://img.freepik.com/premium-vector/young-students-outside-high-school_18591-21874.jpg?w=1060",
        },
        {
            title: "Exams",
            desc: "Know more about your exams",
            tags: ["B.Com", "B.Sc", "B.Sc (Nursing)", "BA", "BBA/BMS", "BCA", "BE/B.Tech"],
            footer: "Check All Entrance Exams in India ›",
            img: "https://img.freepik.com/premium-vector/exam-concept-with-checklist-books-timer-hourglass-pencil_773186-439.jpg?w=1060",
        },
        {
            title: "College Predictor",
            desc: "Know your college admission chances",
            tags: ["CUET", "NEET", "AYUSH NEET Counselling", "JEE Advanced"],
            footer: "Find Where You may get Admission ›",
            img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-mba-illustration_23-2149347419.jpg?t=st=1755083987~exp=1755087587~hmac=5a6e6cf22cbc4fb3aabbf083ddd1a73676bd61d463788dfb5ea8d57dd0dc00d2&w=1060",
        },
        {
            title: "Course Finder",
            desc: "Explore various scholarships available",
            tags: ["BE/B.TECH-947", "MBA/PGDM-1140", "ME/M.TECH-1228"],
            footer: "View All Scholarships ›",
            img: "https://img.freepik.com/premium-vector/online-testing-background-vector-illustration-with-checklist-taking-exam-choosing-answer-form-e-learning-education-concept_2175-845.jpg?w=1060",
        }
    ];

    return (
        <>
            <hr className="mb-8" />

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Title */}
                <h2 className="text-4xl font-bold mb-4">Explore Programs</h2>

                {/* Program Slider */}
                <div className="flex overflow-x-auto space-x-3 mb-6 scrollbar-hide">
                    {programs.map((prog, idx) => (
                        <button
                            key={idx}
                            className="whitespace-nowrap border rounded-full px-4 py-1 text-sm bg-white shadow hover:bg-gray-100"
                        >
                            {prog}
                        </button>
                    ))}
                </div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="border rounded-lg shadow-sm p-2 flex flex-col justify-between hover:shadow-md bg-white"
                        >
                            {/* Header */}
                            <div>
                                <div className="flex items-center justify-between mb-2 bg-[#F5FAFF]" >
                                    <h3 className="font-semibold text-2xl">{card.title}</h3>
                                    <div className=" ">
                                        <img src={card.img} alt={card.title} className="w-20 h-20 rounded-full" />
                                    </div>

                                </div>
                                <p className="text-sm text-gray-600 mb-3">{card.desc}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {card.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-3 py-1 text-xs bg-gray-100 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <a
                                href="#"
                                className=" text-sm font-medium hover:underline"
                            >
                                {card.footer}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

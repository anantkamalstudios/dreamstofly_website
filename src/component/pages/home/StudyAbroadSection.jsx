
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import sandy from "../../../assets/sydney.png"
import tower from "../../../assets/towerfree.png"
import brandenburg from "../../../assets/brandenburg.png"
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
const countries = [
    {
        name: "Germany",
        colleges: 135,
        cost: "5.34 K USD/Year",
        guides: [
            "Why Study in Germany?",
            "Top Universities in Germany",
            "SOP for Germany",
            "Scholarships in Germany",
        ],
        icon: tower,
    },
    {
        name: "Ireland",
        colleges: 16,
        cost: "21.43 K USD/Year",
        guides: [
            "Why Study in Ireland?",
            "Application Process",
            "Scholarships in Ireland",
            "Cost of Living",
        ],
        icon: sandy,
    },
    {
        name: "Zealand",
        colleges: 16,
        cost: "42.39 K USD/Year",
        guides: [
            "Study in new Zealand",
            "Top Courses and Universities",
            "Job Opportunities",
            "Student Visa",
        ],
        icon: brandenburg,
    },
    {
        name: "USA",
        colleges: 200,
        cost: "30.21 K USD/Year",
        guides: [
            "Why Study in USA?",
            "Top Universities in USA",
            "Visa Process",
            "Scholarships in USA",
        ],
        icon: tower,
    },
    {
        name: "UK",
        colleges: 90,
        cost: "22.11 K USD/Year",
        guides: [
            "Why Study in UK?",
            "Top Universities in UK",
            "Student Visa",
            "Cost of Living",
        ],
        icon: brandenburg,
    },
    {
        name: "Canada",
        colleges: 70,
        cost: "18.50 K USD/Year",
        guides: [
            "Why Study in Canada?",
            "Top Courses",
            "Scholarships",
            "Visa Process",
        ],
        icon: brandenburg,
    },
    {
        name: "Australia",
        colleges: 55,
        cost: "25.20 K USD/Year",
        guides: [
            "Why Study in Australia?",
            "Top Universities",
            "Visa Guidelines",
            "Cost of Living",
        ],
        icon: sandy,
    },
];

const NextArrow = ({ onClick }) => (
    <div
        className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full w-20 h-20 flex items-center justify-center cursor-pointer z-10"
        onClick={onClick}
    >
        {/* ➜ */}
        <GoArrowRight size={40} />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div
        className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full w-20 h-20 flex items-center justify-center cursor-pointer z-10"
        onClick={onClick}
    >
        {/* ← */}
        <GoArrowLeft size={40} />
    </div>
);

export default function TopStudyPlacesCarousel() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };


    return (
        <>
            <hr className="mt-8" />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-4xl sm:text-4xl font-bold ">Study Abroad</h2>
                <Slider {...settings}>
                    {countries.map((country, index) => (
                        <div key={index} className="p-3 ">
                            <div className="bg-white rounded-lg border shadow p-5 flex flex-col h-full">
                                {/* Country Header */}
                                <div className="flex items-center gap-3 mb-3 ">
                                    <img src={country.icon} alt={country.name} className="w-30 h-20 bg-gray-100 rounded-full" />
                                    <div>
                                        <h3 className="text-2xl font-bold">Study in {country.name}</h3>
                                        <p className="text-gray-500 text-lg">
                                            Check {country.colleges} Colleges <span className="text-2xl pt-1">›</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="flex justify-between bg-gray-50 p-3 rounded mb-3">
                                    <div className="flex items-center gap-2">
                                        <FaGraduationCap className="text-gray-600 text-4xl w-18 h-18 bg-white rounded-full" />
                                        <span className="text-sm font-semibold">
                                            {country.colleges}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaDollarSign className="text-gray-600 text-2xl  w-15 h-15 rounded-full  rounded bg-white" />
                                        <span className="text-lg font-semibold">{country.cost}</span>
                                    </div>
                                </div>

                                {/* Guides */}
                                <div>
                                    <h4 className="font-semibold mb-2">Guides</h4> <hr />
                                    <ul className="text-md text-gray-600 space-y-1">

                                        {country.guides.map((guide, i) => (
                                            <li
                                                key={i}
                                                className="flex justify-between items-center  border-b border-gray-300 last:border-none pb-1   "
                                            >

                                                {guide} <span className="text-3xl">›</span>
                                            </li>

                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

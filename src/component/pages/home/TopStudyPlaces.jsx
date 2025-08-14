import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";


const cities = [
    { name: "Delhi NCR", img: "https://image-static.collegedunia.com/public/asset/icons/city-state-icons/New%20Delhi.svg" },
    { name: "Bangalore", img: "https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Bangalore.svg" },
    { name: "Hyderabad", img: "https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Hyderabad.svg" },
    { name: "Pune", img: "https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Pune.svg" },
    { name: "Mumbai", img: "https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Mumbai.svg" },
    { name: "Chennai", img: "https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Chennai.svg" },
    { name: "Kolkata", img: "https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Kolkata.svg" },
    { name: "Bhopal", img: "https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Bhopal.svg" },
    { name: " Indore", img: "https://image-static.collegedunia.com/public/asset/icons/city-state-icons/Indore.svg" }
];


const NextArrow = ({ onClick }) => (
    <div
        className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10"
        onClick={onClick}
    >
        {/* ➜ */}
        <GoArrowRight size={30} />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div
        className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10"
        onClick={onClick}
    >
        {/* ← */}
        <GoArrowLeft size={30} />
    </div>
);

export default function TopStudyPlacesCarousel() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 2.2 } },
        ],
    };

    return (
        <>
            <hr className="mt-8" />

            <div className="max-w-7xl mx-auto px-4 py-6 relative">
                <h2 className="text-2xl font-bold mb-4">Top Study Places</h2>
                <Slider {...settings}>
                    {cities.map((city, i) => (
                        <div key={i} className="px-2">
                            <div className="bg-white border rounded-lg flex flex-col items-center py-6 hover:bg-gray-100 transition cursor-pointer">
                                <img src={city.img} alt={city.name} className="h-16 mb-4" />
                                <p className="font-semibold">{city.name}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

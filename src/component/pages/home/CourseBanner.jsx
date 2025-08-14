import React from "react";

export default function CourseFinderBanner() {
    return (
        <>
            <hr className="mt-8" />
            <div className="flex flex-col md:flex-row items-center bg-white s overflow-hidden max-w-7xl mx-auto my-6">

                {/* <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center p-4">
                <img
                    src="https://image-static.collegedunia.com/public/asset/img/ap-banner/desktop-homepage-course-banner.png?h=118&w=1130&mode=stretch" // Replace with your illustration URL
                    alt="Course Finder Illustration"
                    className="max-h-32 object-contain"
                />
            </div>

           
            <div className="bg-blue-500 text-white flex flex-col md:flex-row items-center justify-between w-full md:w-2/3 px-6 py-4 relative">
                <div className="text-center md:text-left">
                    <p className="text-lg md:text-xl font-semibold">
                        Search from <span className="font-bold">30K+</span> courses with
                    </p>
                    <p className="text-yellow-400 font-bold text-xl">Course Finder</p>
                </div>

                <button className="bg-orange-500 hover:bg-orange-600 transition-all px-6 py-2 mt-4 md:mt-0 rounded text-white font-medium flex items-center space-x-2">
                    <span>Try Now</span>
                    <span className="text-lg">»</span>
                </button>
            </div> */}
                <img className="w-100" src="https://image-static.collegedunia.com/public/asset/img/ap-banner/desktop-homepage-course-banner.png?h=118&w=1130&mode=stretch" alt="" />
            </div>
        </>
    );
}

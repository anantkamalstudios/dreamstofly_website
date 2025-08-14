
import React from "react";

// Dummy Data
const collegesRow1 = [
    {
        name: "IIMA - Indian Institute of Management",
        location: "Ahmedabad, Gujarat | UGC",
        course: "Online MBA",
        fees: "20.00 Lacs",
        rating: "4.5/5",
        reviews: 58,
        rank: "Ranked 428 out of 2000 CWUR",
        image: "https://image-static.collegedunia.com/public/college_data/images/appImage/25494_IIMA_AppImage.jpg?h=145&w=342&mode=stretch"
    },
    {
        name: "IIT Bombay - Indian Institute of Technology",
        location: "Mumbai, Maharashtra | AICTE, UGC",
        course: "ME/M.Tech",
        fees: "72.00 K",
        rating: "4.4/5",
        reviews: 401,
        rank: "Ranked 152 out of 2000 CWUR",
        image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
    },
    {
        name: "IIT Bombay - Indian Institute of Technology",
        location: "Mumbai, Maharashtra | AICTE, UGC",
        course: "ME/M.Tech",
        fees: "72.00 K",
        rating: "4.4/5",
        reviews: 401,
        rank: "Ranked 152 out of 2000 CWUR",
        image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
    },
    {
        name: "IIT Bombay - Indian Institute of Technology",
        location: "Mumbai, Maharashtra | AICTE, UGC",
        course: "ME/M.Tech",
        fees: "72.00 K",
        rating: "4.4/5",
        reviews: 401,
        rank: "Ranked 152 out of 2000 CWUR",
        image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
    },
];

const collegesRow2 = [
    {
        name: "IIM Bangalore - Indian Institute of Management",
        location: "Bangalore, Karnataka | AICTE, UGC",
        course: "MBA",
        fees: "18.00 Lacs",
        rating: "4.6/5",
        reviews: 210,
        rank: "Ranked 350 out of 2000 CWUR",
        image: "https://image-static.collegedunia.com/public/college_data/images/appImage/25494_IIMA_AppImage.jpg?h=145&w=342&mode=stretch"
    },
    {
        name: "IIT Madras - Indian Institute of Technology",
        location: "Chennai, Tamil Nadu | AICTE",
        course: "M.Tech",
        fees: "65.00 K",
        rating: "4.5/5",
        reviews: 350,
        rank: "Ranked 200 out of 2000 CWUR",
        image: "https://image-static.collegedunia.com/public/college_data/images/appImage/25494_IIMA_AppImage.jpg?h=145&w=342&mode=stretch"
    },
    {
        name: "IIT Bombay - Indian Institute of Technology",
        location: "Mumbai, Maharashtra | AICTE, UGC",
        course: "ME/M.Tech",
        fees: "72.00 K",
        rating: "4.4/5",
        reviews: 401,
        rank: "Ranked 152 out of 2000 CWUR",
        image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
    },
    {
        name: "IIT Bombay - Indian Institute of Technology",
        location: "Mumbai, Maharashtra | AICTE, UGC",
        course: "ME/M.Tech",
        fees: "72.00 K",
        rating: "4.4/5",
        reviews: 401,
        rank: "Ranked 152 out of 2000 CWUR",
        image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
    },
];

// Card Component
const CollegeCard = ({ college }) => (
    <div className="bg-white border rounded-lg shadow overflow-hidden m-2 min-w-[290px] max-w-[240px] flex-shrink-0">
        {/* Image with overlay */}
        <div className="relative">
            <img src={college.image} alt={college.name} className="w-full h-40 object-cover inset-0 bg-black bg-opacity-50" />
            <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                cd 10/10
            </span>
            <div className="flex z-1">
                <h3 className="absolute bottom-5 right-0 left-8 mx-5 text-white font-bold text-sm">{college.name}</h3>

                <img className="absolute rounded-full bottom-5 right-2 left-1" src="https://image-static.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=40&w=40&mode=stretch" alt="" />
                <p className="text-xs absolute bottom-1 right-0 left-8 mx-5 text-white">{college.location}</p>
            </div>
        </div>

        {/* Content */}
        <div className="p-3">
            <div className="flex gap-5">
                <div>
                    <p className="mt-2 text-sm font-medium">{college.course}</p>
                    <p className="text-black text-sm">
                        {college.fees} <span className="text-gray-500">Total Fees</span>
                    </p>
                </div>
                <div className=" items-center text-yellow-500 text-sm mt-1">
                    ⭐ {college.rating}{" "}
                    <br />
                    <span className="ml-1 text-gray-500">({college.reviews} reviews)</span>
                </div>

            </div>




            <p className="text-xs text-gray-500 mt-1">{college.rank}</p>

            <div className="mt-3 space-y-1 text-sm">
                <button className="w-full text-left font-bold hover:text-orange-700 text-black">View All Courses and fees</button> <hr />
                <button className="w-full text-left font-bold hover:text-orange-700  text-black">Download Brochure</button> <hr />
                <button className="w-full text-left font-bold hover:text-orange-700  text-black">Compare</button> <hr />
            </div>
        </div>
    </div>
);

export default function TopColleges() {
    return (
        <>
            <hr className="mb-8" />
            <div className=" container max-w-8xl mx-auto px-4 py-6">
                <h2 className="text-3xl px-5 font-bold mb-4">Top Universities/Colleges</h2>

                {/* Row 1 */}
                <div className="flex overflow-x-auto scrollbar-hide pb-4">
                    {collegesRow1.map((college, idx) => (
                        <CollegeCard key={idx} college={college} />
                    ))}
                </div>

                {/* Row 2 */}
                <div className="flex overflow-x-auto scrollbar-hide">
                    {collegesRow2.map((college, idx) => (
                        <CollegeCard key={idx} college={college} />
                    ))}
                </div>
            </div>
        </>
    );
}

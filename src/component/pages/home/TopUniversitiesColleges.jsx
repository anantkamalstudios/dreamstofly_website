
// import React from "react";
// import { collegesRow1, collegesRow2 } from "../../data/TopUnivercity"
// const CollegeCard = ({ college }) => (
//     <div className="bg-white border rounded-lg shadow overflow-hidden m-2 min-w-[290px] max-w-[240px] flex-shrink-0">
//         {/* Image with overlay */}
//         <div className="relative">
//             <img src={college.image} alt={college.name} className="w-full h-40 object-cover inset-0 bg-black bg-opacity-50" />
//             <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
//                 cd 10/10
//             </span>
//             <div className="flex z-1">
//                 <h3 className="absolute bottom-5 right-0 left-8 mx-5 text-white font-bold text-sm">{college.name}</h3>

//                 <img className="absolute rounded-full bottom-5 right-2 left-1" src="https://image-static.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=40&w=40&mode=stretch" alt="" />
//                 <p className="text-xs absolute bottom-1 right-0 left-8 mx-5 text-white">{college.location}</p>
//             </div>
//         </div>

//         {/* Content */}
//         <div className="p-3">
//             <div className="flex gap-5">
//                 <div>
//                     <p className="mt-2 text-sm font-medium">{college.course}</p>
//                     <p className="text-black text-sm">
//                         {college.fees} <span className="text-gray-500">Total Fees</span>
//                     </p>
//                 </div>
//                 <div className=" items-center text-yellow-500 text-sm mt-1">
//                     ⭐ {college.rating}{" "}
//                     <br />
//                     <span className="ml-1 text-gray-500">({college.reviews} reviews)</span>
//                 </div>

//             </div>




//             <p className="text-xs text-gray-500 mt-1">{college.rank}</p>

//             <div className="mt-3 space-y-1 text-sm">
//                 <button className="w-full text-left font-bold hover:text-#08dceb-700 text-black">View All Courses and fees</button> <hr />
//                 <button className="w-full text-left font-bold hover:text-#08dceb-700  text-black">Download Brochure</button> <hr />
//                 <button className="w-full text-left font-bold hover:text-#08dceb-700  text-black">Compare</button> <hr />
//             </div>
//         </div>
//     </div>
// );

// export default function TopColleges() {
//     return (
//         <>
//             <hr className="mb-8" />
//             <div className=" container max-w-8xl mx-auto px-4 py-6">
//                 <h2 className="text-3xl px-5 font-bold mb-4">Top Universities/Colleges</h2>

//                 {/* Row 1 */}
//                 <div className="flex overflow-x-auto scrollbar-hide pb-4">
//                     {collegesRow1.map((college, idx) => (
//                         <CollegeCard key={idx} college={college} />
//                     ))}
//                 </div>

//                 {/* Row 2 */}
//                 <div className="flex overflow-x-auto scrollbar-hide">
//                     {collegesRow2.map((college, idx) => (
//                         <CollegeCard key={idx} college={college} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }
import React from "react";
import { collegesRow1, collegesRow2 } from "../../data/home/TopUnivercity";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // (optional, for smooth autoplay)

// Card Component
const CollegeCard = ({ college }) => (
    <div className="bg-white border rounded-lg shadow overflow-hidden w-full flex-shrink-0">
        {/* Image with overlay */}
        <div className="relative">
            <img
                src={college.image}
                alt={college.name}
                className="w-full h-40 object-cover"
            />
            <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                cd 10/10
            </span>

            {/* Name + Logo */}
            <div className="absolute bottom-2 left-2 right-2 flex items-center space-x-2">
                <img
                    className="w-8 h-8 rounded-full border"
                    src="https://image-static.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=40&w=40&mode=stretch"
                    alt=""
                />
                <div>
                    <h3 className="text-white font-bold text-sm">{college.name}</h3>
                    <p className="text-xs text-gray-200">{college.location}</p>
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="p-3">
            <div className="flex justify-between">
                <div>
                    <p className="mt-1 text-sm font-medium">{college.course}</p>
                    <p className="text-black text-sm">
                        {college.fees} <span className="text-gray-500">Total Fees</span>
                    </p>
                </div>
                <div className="text-yellow-500 text-sm text-right">
                    ⭐ {college.rating}
                    <br />
                    <span className="ml-1 text-gray-500">
                        ({college.reviews} reviews)
                    </span>
                </div>
            </div>

            <p className="text-xs text-gray-500 mt-1">{college.rank}</p>

            <div className="mt-3 space-y-1 text-sm">
                <button className="w-full text-left font-bold hover:text-#08dceb-700 text-gray-700">
                    View All Courses and fees
                </button>
                <hr />
                <button className="w-full text-left font-bold hover:text-#08dceb-700 text-gray-700">
                    Download Brochure
                </button>
                <hr />
                <button className="w-full text-left font-bold hover:text-#08dceb-700 text-gray-700">
                    Compare
                </button>
            </div>
        </div>
    </div>
);

export default function TopColleges() {
    return (
        <div className="container max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Top Universities/Colleges
            </h2>

            {/* Row 1 */}
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={15}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    320: { slidesPerView: 1 }, // mobile
                    640: { slidesPerView: 2 }, // tablet
                    1024: { slidesPerView: 3 }, // laptop
                    1280: { slidesPerView: 4 }, // desktop
                }}
            >
                {collegesRow1.map((college, idx) => (
                    <SwiperSlide key={idx}>
                        <CollegeCard college={college} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Row 2 */}
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={15}
                navigation
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="mt-6"
            >
                {collegesRow2.map((college, idx) => (
                    <SwiperSlide key={idx}>
                        <CollegeCard college={college} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}

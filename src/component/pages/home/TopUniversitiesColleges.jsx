// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const collegesRow1 = [
//     {
//         name: "IIMA - Indian Institute of Management",
//         location: "Ahmedabad, Gujarat | UGC",
//         course: "Online MBA",
//         fees: "₹20.00 Lacs",
//         rating: "4.5",
//         reviews: 58,
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/25494_IIMA_AppImage.jpg?h=145&w=342&mode=stretch"
//     },
//     {
//         name: "IIT Bombay - Indian Institute of Technology",
//         location: "Mumbai, Maharashtra | AICTE, UGC",
//         course: "ME/M.Tech",
//         fees: "₹72.00 K",
//         rating: "4.4",
//         reviews: 401,
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/25703_IIT_New.jpg?h=145&w=342&mode=stretch"
//     },
//     {
//         name: "IIT Bombay - Indian Institute of Technology",
//         location: "Mumbai, Maharashtra | AICTE, UGC",
//         course: "ME/M.Tech",
//         fees: "₹72.00 K",
//         rating: "4.4",
//         reviews: 401,
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1614949268bg.png?h=145&w=342&mode=stretch"
//     }, {
//         name: "IIT Bombay - Indian Institute of Technology",
//         location: "Mumbai, Maharashtra | AICTE, UGC",
//         course: "ME/M.Tech",
//         fees: "₹72.00 K",
//         rating: "4.4",
//         reviews: 401,
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
//     }, {
//         name: "IIT Bombay - Indian Institute of Technology",
//         location: "Mumbai, Maharashtra | AICTE, UGC",
//         course: "ME/M.Tech",
//         fees: "₹72.00 K",
//         rating: "4.4",
//         reviews: 401,
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
//     }
// ];

// const collegesRow2 = [
//     {
//         name: "IIM Bangalore - Indian Institute of Management",
//         location: "Bangalore, Karnataka | AICTE, UGC",
//         course: "MBA",
//         fees: "₹18.00 Lacs",
//         rating: "4.6",
//         reviews: 210,
//         image: "https://via.placeholder.com/400x200?text=IIM+Bangalore"
//     },
//     {
//         name: "IIT Madras - Indian Institute of Technology",
//         location: "Chennai, Tamil Nadu | AICTE",
//         course: "M.Tech",
//         fees: "₹65.00 K",
//         rating: "4.5",
//         reviews: 350,
//         image: "https://via.placeholder.com/400x200?text=IIT+Madras"
//     },
//     {
//         name: "IIT Bombay - Indian Institute of Technology",
//         location: "Mumbai, Maharashtra | AICTE, UGC",
//         course: "ME/M.Tech",
//         fees: "₹72.00 K",
//         rating: "4.4",
//         reviews: 401,
//         image: "https://via.placeholder.com/400x200?text=IIT+Bombay"
//     }, {
//         name: "IIT Bombay - Indian Institute of Technology",
//         location: "Mumbai, Maharashtra | AICTE, UGC",
//         course: "ME/M.Tech",
//         fees: "₹72.00 K",
//         rating: "4.4",
//         reviews: 401,
//         image: "https://via.placeholder.com/400x200?text=IIT+Bombay"
//     }
// ];

// export default function TopColleges() {
//     const sliderSettings = {
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 2,
//         arrows: true,
//         responsive: [
//             { breakpoint: 1024, settings: { slidesToShow: 3 } },
//             { breakpoint: 768, settings: { slidesToShow: 2 } },
//             { breakpoint: 480, settings: { slidesToShow: 1 } }
//         ]
//     };

//     const CollegeCard = ({ college }) => (
//         <div className="bg-white border rounded-lg shadow-md overflow-hidden m-2">
//             <img src={college.image} alt={college.name} className="w-full h-40 object-cover" />
//             <div className="p-4">
//                 <h3 className="font-bold text-sm text-gray-900">{college.name}</h3>
//                 <p className="text-xs text-gray-500">{college.location}</p>

//                 <p className="mt-2 text-sm font-medium">{college.course}</p>
//                 <p className="text-blue-600 text-sm">
//                     {college.fees} <span className="text-gray-500">Total Fees</span>
//                 </p>

//                 <div className="flex items-center text-yellow-500 text-sm mt-1">
//                     ⭐ {college.rating}
//                     <span className="ml-1 text-gray-500">({college.reviews} reviews)</span>
//                 </div>

//                 <div className="mt-3 space-y-1">
//                     <button className="w-full text-left text-sm text-blue-600 hover:underline">
//                         View All Courses & Fees
//                     </button>
//                     <button className="w-full text-left text-sm text-blue-600 hover:underline">
//                         Download Brochure
//                     </button>
//                     <button className="w-full text-left text-sm text-blue-600 hover:underline">
//                         Compare
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <div className="max-w-7xl mx-auto px-4 py-6">
//             <h2 className="text-2xl font-bold mb-4">Top Universities/Colleges</h2>

//             {/* Row 1 */}
//             <Slider {...sliderSettings}>
//                 {collegesRow1.map((college, idx) => (
//                     <CollegeCard key={idx} college={college} />
//                 ))}
//             </Slider>

//             {/* Row 2 */}
//             <div className="mt-8">
//                 <Slider {...sliderSettings}>
//                     {collegesRow2.map((college, idx) => (
//                         <CollegeCard key={idx} college={college} />
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// }
// import React from "react";
// import Slider from "react-slick";

// const collegesRow1 = [
//     {
//         name: "IIMA - Indian Institute of Management",
//         location: "Ahmedabad, Gujarat | UGC",
//         course: "Online MBA",
//         fees: "₹20.00 Lacs",
//         rating: "8.9",
//         reviews: 58,
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/25703_IIT_New.jpg?h=145&w=342&mode=stretch",
//         logo: "https://via.placeholder.com/50x50?text=L1"
//     },
//     {
//         name: "IIT Bombay - Indian Institute of Technology",
//         location: "Mumbai, Maharashtra | AICTE, UGC",
//         course: "ME/M.Tech",
//         fees: "₹72.00 K",
//         rating: "8.7",
//         reviews: 401,
//         image: "https://via.placeholder.com/400x200?text=IIT+Bombay",
//         logo: "https://via.placeholder.com/50x50?text=L2"
//     },
// ];

// const collegesRow2 = [
//     {
//         name: "IIM Bangalore - Indian Institute of Management",
//         location: "Bangalore, Karnataka | AICTE, UGC",
//         course: "MBA",
//         fees: "₹18.00 Lacs",
//         rating: "9.1",
//         reviews: 210,
//         image: "https://via.placeholder.com/400x200?text=IIM+Bangalore",
//         logo: "https://via.placeholder.com/50x50?text=L3"
//     },
//     {
//         name: "IIT Madras - Indian Institute of Technology",
//         location: "Chennai, Tamil Nadu | AICTE",
//         course: "M.Tech",
//         fees: "₹65.00 K",
//         rating: "8.8",
//         reviews: 350,
//         image: "https://via.placeholder.com/400x200?text=IIT+Madras",
//         logo: "https://via.placeholder.com/50x50?text=L4"
//     },
// ];

// export default function TopColleges() {
//     const sliderSettings = {
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 2,
//         arrows: true,
//         responsive: [
//             { breakpoint: 1024, settings: { slidesToShow: 3 } },
//             { breakpoint: 768, settings: { slidesToShow: 2 } },
//             { breakpoint: 480, settings: { slidesToShow: 1 } }
//         ]
//     };

//     const CollegeCard = ({ college }) => (
//         <div className="bg-white border rounded-lg shadow-md overflow-hidden m-2">
//             {/* Image with overlays */}
//             <div className="relative">
//                 {/* Background Image */}
//                 <img
//                     src={college.image}
//                     alt={college.name}
//                     className="w-full h-40 object-cover"
//                 />

//                 {/* Rating Badge */}
//                 <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
//                     {college.rating}/10
//                 </div>

//                 {/* Logo + Name + Location Overlay */}
//                 <div className="absolute bottom-2 left-2 flex items-center space-x-2 bg-black/60 p-2 rounded">
//                     {/* College Logo */}
//                     <img
//                         src={college.logo}
//                         alt="logo"
//                         className="w-8 h-8 object-contain rounded-full bg-white p-1"
//                     />
//                     <div>
//                         <h3 className="text-white text-sm font-bold leading-tight">
//                             {college.name}
//                         </h3>
//                         <p className="text-gray-200 text-xs">{college.location}</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Details Below */}
//             <div className="p-4">
//                 <p className="mt-1 text-sm font-medium">{college.course}</p>
//                 <p className="text-blue-600 text-sm">
//                     {college.fees} <span className="text-gray-500">Total Fees</span>
//                 </p>

//                 <div className="mt-3 space-y-1">
//                     <button className="w-full text-left text-sm text-blue-600 hover:underline">
//                         View All Courses & Fees
//                     </button>
//                     <button className="w-full text-left text-sm text-blue-600 hover:underline">
//                         Download Brochure
//                     </button>
//                     <button className="w-full text-left text-sm text-blue-600 hover:underline">
//                         Compare
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <div className="max-w-7xl mx-auto px-4 py-6">
//             <h2 className="text-2xl font-bold mb-4">Top Universities/Colleges</h2>

//             {/* Row 1 Carousel */}
//             <Slider {...sliderSettings}>
//                 {collegesRow1.map((college, idx) => (
//                     <CollegeCard key={idx} college={college} />
//                 ))}
//             </Slider>

//             {/* Row 2 Carousel */}
//             <div className="mt-8">
//                 <Slider {...sliderSettings}>
//                     {collegesRow2.map((college, idx) => (
//                         <CollegeCard key={idx} college={college} />
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// }
// import React from "react";
// import Slider from "react-slick";
// import { FaStar } from "react-icons/fa";

// const collegesRow1 = [
//     {
//         name: "IIMA - Indian Institute of Management",
//         location: "Ahmedabad, Gujarat | UGC",
//         course: "Online MBA",
//         fees: "20.00 Lacs",
//         rating: "10/10",
//         stars: 4.5,
//         reviews: 58,
//         rank: "Ranked 428 out of 2000 CWUR",
//         image: "https://via.placeholder.com/400x200?text=IIMA",
//         logo: "https://via.placeholder.com/50x50?text=L1"
//     },
//     {
//         name: "IIT Bombay - Indian Institute of Technology",
//         location: "Mumbai, Maharashtra | AICTE, UGC",
//         course: "ME/M.Tech",
//         fees: "72.00 K",
//         rating: "9.5/10",
//         stars: 4.7,
//         reviews: 401,
//         rank: "Ranked 3 out of 500 QS Ranking",
//         image: "https://via.placeholder.com/400x200?text=IIT+Bombay",
//         logo: "https://via.placeholder.com/50x50?text=L2"
//     },
//     // Add more colleges...
// ];

// const collegesRow2 = [
//     {
//         name: "IIM Bangalore - Indian Institute of Management",
//         location: "Bangalore, Karnataka | AICTE, UGC",
//         course: "MBA",
//         fees: "18.00 Lacs",
//         rating: "9.1/10",
//         stars: 4.8,
//         reviews: 210,
//         rank: "Ranked 2 out of 100 NIRF",
//         image: "https://via.placeholder.com/400x200?text=IIM+Bangalore",
//         logo: "https://via.placeholder.com/50x50?text=L3"
//     },
//     {
//         name: "IIT Madras - Indian Institute of Technology",
//         location: "Chennai, Tamil Nadu | AICTE",
//         course: "M.Tech",
//         fees: "65.00 K",
//         rating: "9.0/10",
//         stars: 4.6,
//         reviews: 350,
//         rank: "Ranked 1 out of 100 NIRF",
//         image: "https://via.placeholder.com/400x200?text=IIT+Madras",
//         logo: "https://via.placeholder.com/50x50?text=L4"
//     },
//     // Add more colleges...
// ];

// export default function TopColleges() {
//     const sliderSettingsRow1 = {
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 2,
//         arrows: true,
//         responsive: [
//             { breakpoint: 1280, settings: { slidesToShow: 4 } },
//             { breakpoint: 1024, settings: { slidesToShow: 3 } },
//             { breakpoint: 768, settings: { slidesToShow: 2 } },
//             { breakpoint: 480, settings: { slidesToShow: 1 } }
//         ]
//     };

//     const sliderSettingsRow2 = {
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 6,
//         slidesToScroll: 2,
//         arrows: true,
//         responsive: [
//             { breakpoint: 1280, settings: { slidesToShow: 4 } },
//             { breakpoint: 1024, settings: { slidesToShow: 3 } },
//             { breakpoint: 768, settings: { slidesToShow: 2 } },
//             { breakpoint: 480, settings: { slidesToShow: 1 } }
//         ]
//     };

//     const CollegeCard = ({ college }) => (
//         <div className="bg-white border rounded-lg shadow-md overflow-hidden">
//             {/* Image + rating badge */}
//             <div className="relative">
//                 <img
//                     src={college.image}
//                     alt={college.name}
//                     className="w-full h-32 object-cover"
//                 />
//                 {/* Rating badge */}
//                 <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full">
//                     {college.rating}
//                 </div>
//                 {/* Logo and text */}
//                 <div className="absolute bottom-2 left-2 flex items-center space-x-2 bg-black/60 p-2 rounded">
//                     <img
//                         src={college.logo}
//                         alt="logo"
//                         className="w-8 h-8 object-contain rounded-full bg-white p-1"
//                     />
//                     <div>
//                         <h3 className="text-white text-xs font-bold leading-tight">
//                             {college.name}
//                         </h3>
//                         <p className="text-gray-200 text-[10px]">{college.location}</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Details */}
//             <div className="p-3">
//                 <p className="text-sm font-medium">{college.course}</p>
//                 <div className="flex items-center text-sm mt-1">
//                     <span className="text-blue-600 font-bold">{college.fees}</span>
//                     <span className="text-gray-500 ml-1">Total Fees</span>
//                 </div>
//                 {/* Stars + reviews */}
//                 <div className="flex items-center text-sm mt-1">
//                     <FaStar className="text-yellow-500 mr-1" />
//                     <span className="font-medium">{college.stars}/5</span>
//                     <span className="text-gray-500 ml-2">{college.reviews} reviews</span>
//                 </div>
//                 {/* Rank */}
//                 <p className="text-xs text-gray-500 mt-1">{college.rank}</p>

//                 {/* Actions */}
//                 <div className="mt-2 border-t pt-2 space-y-1 text-sm">
//                     <button className="flex items-center justify-between w-full hover:bg-gray-50 p-1 rounded">
//                         View All Courses and fees <span>›</span>
//                     </button>
//                     <button className="flex items-center justify-between w-full hover:bg-gray-50 p-1 rounded">
//                         Download Brochure <span>›</span>
//                     </button>
//                     <button className="flex items-center justify-between w-full hover:bg-gray-50 p-1 rounded">
//                         Compare <span>›</span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <div className="max-w-7xl mx-auto px-4 py-6">
//             <h2 className="text-xl font-bold mb-4">Top Universities/Colleges</h2>

//             {/* Row 1 */}
//             <Slider {...sliderSettingsRow1}>
//                 {collegesRow1.map((college, idx) => (
//                     <CollegeCard key={idx} college={college} />
//                 ))}
//             </Slider>

//             {/* Row 2 */}
//             <h2 className="text-xl font-bold mt-8 mb-4">More Top Colleges</h2>
//             <Slider {...sliderSettingsRow2}>
//                 {collegesRow2.map((college, idx) => (
//                     <CollegeCard key={idx} college={college} />
//                 ))}
//             </Slider>
//         </div>
//     );
// }

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Dummy Data
// const collegesRow1 = [
//     {
//         name: "IIMA - Indian Institute of Management",
//         location: "Ahmedabad, Gujarat | UGC",
//         course: "Online MBA",
//         fees: "20.00 Lacs",
//         rating: "4.5/5",
//         reviews: 58,
//         rank: "Ranked 428 out of 2000 CWUR",
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/25494_IIMA_AppImage.jpg?h=145&w=342&mode=stretch"
//     },
//     {
//         name: "IIT Bombay - Indian Institute of Technology",
//         location: "Mumbai, Maharashtra | AICTE, UGC",
//         course: "ME/M.Tech",
//         fees: "72.00 K",
//         rating: "4.4/5",
//         reviews: 401,
//         rank: "Ranked 152 out of 2000 CWUR",
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
//     },
//     {
//         name: "IIT Bombay - Indian Institute of Technology",
//         location: "Mumbai, Maharashtra | AICTE, UGC",
//         course: "ME/M.Tech",
//         fees: "72.00 K",
//         rating: "4.4/5",
//         reviews: 401,
//         rank: "Ranked 152 out of 2000 CWUR",
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
//     },
//     {
//         name: "IIT Bombay - Indian Institute of Technology",
//         location: "Mumbai, Maharashtra | AICTE, UGC",
//         course: "ME/M.Tech",
//         fees: "72.00 K",
//         rating: "4.4/5",
//         reviews: 401,
//         rank: "Ranked 152 out of 2000 CWUR",
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
//     },

//     // add more objects...
// ];

// const collegesRow2 = [
//     {
//         name: "IIM Bangalore - Indian Institute of Management",
//         location: "Bangalore, Karnataka | AICTE, UGC",
//         course: "MBA",
//         fees: "18.00 Lacs",
//         rating: "4.6/5",
//         reviews: 210,
//         rank: "Ranked 350 out of 2000 CWUR",
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/25494_IIMA_AppImage.jpg?h=145&w=342&mode=stretch"
//     },
//     {
//         name: "IIT Madras - Indian Institute of Technology",
//         location: "Chennai, Tamil Nadu | AICTE",
//         course: "M.Tech",
//         fees: "65.00 K",
//         rating: "4.5/5",
//         reviews: 350,
//         rank: "Ranked 200 out of 2000 CWUR",
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/25494_IIMA_AppImage.jpg?h=145&w=342&mode=stretch"
//     },
//     {
//         name: "IIT Bombay - Indian Institute of Technology",
//         location: "Mumbai, Maharashtra | AICTE, UGC",
//         course: "ME/M.Tech",
//         fees: "72.00 K",
//         rating: "4.4/5",
//         reviews: 401,
//         rank: "Ranked 152 out of 2000 CWUR",
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
//     },
//     {
//         name: "IIT Bombay - Indian Institute of Technology",
//         location: "Mumbai, Maharashtra | AICTE, UGC",
//         course: "ME/M.Tech",
//         fees: "72.00 K",
//         rating: "4.4/5",
//         reviews: 401,
//         rank: "Ranked 152 out of 2000 CWUR",
//         image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
//     },

//     // add more objects...
// ];

// // Card Component
// const CollegeCard = ({ college }) => (
//     <div className="bg-white border rounded-lg shadow overflow-hidden m-2">
//         {/* Image with overlay */}
//         <div className="relative">
//             <img src={college.image} alt={college.name} className="w-full h-40 object-cover" />
//             <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
//                 cd 10/10
//             </span>
//             <div>

//             </div>
//             <h3 className="absolute bottom-1 right-2 left-3 text-white font-bold text-sm">{college.name}</h3>
//         </div>

//         {/* Content */}
//         <div className="p-3">

//             <p className="text-xs text-gray-500">{college.location}</p>

//             <p className="mt-2 text-sm font-medium">{college.course}</p>
//             <p className="text-blue-600 text-sm">
//                 {college.fees} <span className="text-gray-500">Total Fees</span>
//             </p>

//             <div className="flex items-center text-yellow-500 text-sm mt-1">
//                 ⭐ {college.rating}{" "}
//                 <span className="ml-1 text-gray-500">({college.reviews} reviews)</span>
//             </div>

//             <p className="text-xs text-gray-500 mt-1">{college.rank}</p>

//             <div className="mt-3 space-y-1 text-sm">
//                 <button className="w-full text-left text-blue-600">View All Courses and fees</button>
//                 <button className="w-full text-left text-blue-600">Download Brochure</button>
//                 <button className="w-full text-left text-blue-600">Compare</button>
//             </div>
//         </div>
//     </div>
// );

// export default function TopColleges() {
//     const sliderSettingsRow1 = {
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 2,
//         arrows: true,
//         responsive: [
//             { breakpoint: 1280, settings: { slidesToShow: 4 } },
//             { breakpoint: 1024, settings: { slidesToShow: 3 } },
//             { breakpoint: 768, settings: { slidesToShow: 2 } },
//             { breakpoint: 480, settings: { slidesToShow: 1 } }
//         ]
//     };

//     const sliderSettingsRow2 = {
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 6,
//         slidesToScroll: 2,
//         arrows: true,
//         responsive: [
//             { breakpoint: 1280, settings: { slidesToShow: 4 } },
//             { breakpoint: 1024, settings: { slidesToShow: 3 } },
//             { breakpoint: 768, settings: { slidesToShow: 2 } },
//             { breakpoint: 480, settings: { slidesToShow: 1 } },
//             // { breakpoint: 480, settings: { slidesToShow: 1 } }
//         ]
//     };

//     return (
//         <div className="max-w-8xl mx-auto px-4 py-6">
//             <h2 className="text-xl px-5 font-bold mb-4">Top Universities/Colleges</h2>
//             <Slider {...sliderSettingsRow1}>
//                 {collegesRow1.map((college, idx) => (
//                     <CollegeCard key={idx} college={college} />
//                 ))}
//             </Slider>

//             {/* <h2 className="text-xl font-bold mt-8 mb-4">More Top Colleges</h2> */}
//             <Slider  {...sliderSettingsRow2}>
//                 {collegesRow2.map((college, idx) => (
//                     <CollegeCard key={idx} college={college} />
//                 ))}
//             </Slider>
//         </div>
//     );
// }
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
            <img src={college.image} alt={college.name} className="w-full h-40 object-cover opacity-50" />
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
                    <p className="text-blue-600 text-sm">
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
        <div className=" container max-w-8xl mx-auto px-4 py-6">
            <h2 className="text-xl px-5 font-bold mb-4">Top Universities/Colleges</h2>

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
    );
}

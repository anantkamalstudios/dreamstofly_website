
import React, { useState } from "react";
import { Book, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
export default function Topbar() {
    const [isAllCoursesOpen, setIsAllCoursesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "SOP MAKER", href: "/sop-maker" },
        { name: "CONNECT", href: "/connect" },
        { name: "POST ADMIT SERVICES", href: "/post-admit-services" },
        { name: "BLOGS", href: "/blogs" },
        { name: "EXAM PREP", href: "/exam-prep" },
        { name: "FREE COURSES", href: "/free-cources" },
        { name: "TRAVEL", href: "/travel" },
    ];

    const categories = [
        { title: "Engineering", courses: ["B.Tech", "M.Tech", "Diploma", "B.E"] },
        { title: "Management", courses: ["MBA", "PGDM", "BBA", "Executive MBA"] },
        { title: "Medical", courses: ["MBBS", "BDS", "BAMS", "BHMS"] },
        { title: "Engineering", courses: ["B.Tech", "M.Tech", "Diploma", "B.E"] },
        { title: "Management", courses: ["MBA", "PGDM", "BBA", "Executive MBA"] },
        { title: "Medical", courses: ["MBBS", "BDS", "BAMS", "BHMS"] }
    ];
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileCoursesOpen(false);
    };


    return (
        <div className=" shadow-sm relative">
            <div className="max-w-7xl mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    {/* Left section */}
                    <div className="flex items-center space-x-2">
                        {/* All Courses Dropdown (Desktop) */}
                        <div className="relative hidden md:block">
                            <button
                                className="flex items-center text-gray-700 hover:text-gray-300 px-3 py-2 text-sm font-medium"
                                onClick={() => setIsAllCoursesOpen(!isAllCoursesOpen)}
                                onMouseEnter={() => setIsAllCoursesOpen(true)}
                                onMouseLeave={() => setIsAllCoursesOpen(false)}
                            >
                                <Book className="h-4 w-4 mr-2" />
                                All Courses
                                <ChevronDown className="ml-1 h-3 w-3" />
                            </button>

                            {isAllCoursesOpen && (
                                <div
                                    className="absolute top-full left-0 bg-white text-black shadow-2xl rounded-lg py-6 w-96 z-50 mt-1"
                                    onMouseEnter={() => setIsAllCoursesOpen(true)}
                                    onMouseLeave={() => setIsAllCoursesOpen(false)}
                                >
                                    <div className="px-6">
                                        <div className="grid grid-cols-3 gap-6">
                                            {categories.map((cat, i) => (
                                                <div key={i}>
                                                    <h4 className="font-semibold text-gray-800 mb-4 text-sm">
                                                        {cat.title}
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {cat.courses.map((c, j) => (
                                                            <li key={j}>
                                                                <Link
                                                                    to="#"
                                                                    className="text-gray-600 hover:text-blue-600 text-sm block"
                                                                >
                                                                    {c}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 pt-4 border-t border-gray-200">
                                            <Link
                                                to="#"
                                                className="text-gray-700  text-sm font-medium"
                                            >
                                                View All Courses →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Desktop nav links */}
                        <div className="hidden md:flex items-center space-x-1">
                            {links.map((link, i) => (
                                <Link
                                    key={i}
                                    to={link.href}
                                    className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm border-r border-gray-600"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile hamburger */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-gray-200 hover:text-white"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Right section (desktop + mobile) */}
                    <div className="">
                        <Link
                            to="/cource-finder"
                            className="text-white bg-[#0073df] px-4 py-2 rounded-lg text-sm hover:bg-blue-700 flex items-center font-medium"
                        >
                            <span className="bg-yellow-500 text-black text-xs px-1.5 py-0.5 rounded mr-2 font-bold">
                                NEW
                            </span>
                            🔍 Course Finder
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-2 space-y-2 px-2 pb-4 bg-gray-900 rounded-lg">
                        {/* All Courses Toggle */}
                        <div>
                            <button
                                className="flex items-center justify-between w-full px-3 py-2 text-sm text-white bg-gray-700 rounded"
                                onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                            >
                                <span className="flex items-center" onClick={closeMobileMenu}>
                                    <Book className="h-4 w-4 mr-2" />

                                    All Courses
                                </span>
                                <ChevronDown
                                    className={`ml-2 h-4 w-4 transform transition-transform ${isMobileCoursesOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {isMobileCoursesOpen && (
                                <div className="bg-gray-800 mt-2 rounded px-3 py-2">
                                    {categories.map((cat, i) => (
                                        <div key={i} className="mb-3">
                                            <h4 className="font-semibold text-gray-200 text-sm mb-2">
                                                {cat.title}
                                            </h4>
                                            <ul className="space-y-1">
                                                {cat.courses.map((c, j) => (
                                                    <li key={j}>
                                                        <Link
                                                            to="#"
                                                            className="text-gray-400 hover:text-blue-400 text-sm block"
                                                            onClick={closeMobileMenu}
                                                        >
                                                            {c}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    <Link
                                        to="#"
                                        className="text-blue-400 hover:text-blue-600 text-sm font-medium block mt-2"
                                        onClick={closeMobileMenu}
                                    >
                                        View All Courses →
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Other Links */}
                        {links.map((link, i) => (
                            <Link
                                key={i}
                                to={link.href}
                                className="block px-3 py-2 text-sm text-white hover:bg-gray-700 rounded"
                                onClick={closeMobileMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

// import React, { useState } from "react";
// import { Book, ChevronDown, Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Topbar() {
//     const [isAllCoursesOpen, setIsAllCoursesOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

//     const links = [
//         { name: "Home", href: "/" },
//         { name: "SOP MAKER", href: "#" },
//         { name: "CONNECT", href: "#" },
//         { name: "POST ADMIT SERVICES", href: "#" },
//         { name: "BLOGS", href: "/blogs" },
//         { name: "EXAM PREP", href: "#" },
//         { name: "FREE COURSES", href: "#" },
//         { name: "TRAVEL", href: "#" },
//     ];

//     const categories = [
//         { title: "Engineering", courses: ["B.Tech", "M.Tech", "Diploma", "B.E"] },
//         { title: "Management", courses: ["MBA", "PGDM", "BBA", "Executive MBA"] },
//         { title: "Medical", courses: ["MBBS", "BDS", "BAMS", "BHMS"] },
//     ];

//     // ✅ Utility to close menu
//     const closeMobileMenu = () => {
//         setIsMobileMenuOpen(false);
//         setIsMobileCoursesOpen(false);
//     };

//     return (
//         <div className="bg-gray-800 shadow-sm relative">
//             <div className="max-w-7xl mx-auto px-4 py-2">
//                 {/* Desktop container */}
//                 <div className="flex items-center justify-between">

//                     {/* LEFT SIDE */}
//                     <div className="flex items-center space-x-2">
//                         {/* All Courses Dropdown (Desktop) */}
//                         <div className="relative hidden md:block">
//                             <button
//                                 className="flex items-center text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
//                                 onClick={() => setIsAllCoursesOpen(!isAllCoursesOpen)}
//                                 onMouseEnter={() => setIsAllCoursesOpen(true)}
//                                 onMouseLeave={() => setIsAllCoursesOpen(false)}
//                             >
//                                 <Book className="h-4 w-4 mr-2" />
//                                 All Courses
//                                 <ChevronDown className="ml-1 h-3 w-3" />
//                             </button>

//                             {isAllCoursesOpen && (
//                                 <div
//                                     className="absolute top-full left-0 bg-white text-black shadow-2xl rounded-lg py-6 w-96 z-50 mt-1"
//                                     onMouseEnter={() => setIsAllCoursesOpen(true)}
//                                     onMouseLeave={() => setIsAllCoursesOpen(false)}
//                                 >
//                                     <div className="px-6">
//                                         <div className="grid grid-cols-3 gap-6">
//                                             {categories.map((cat, i) => (
//                                                 <div key={i}>
//                                                     <h4 className="font-semibold text-gray-800 mb-4 text-sm">
//                                                         {cat.title}
//                                                     </h4>
//                                                     <ul className="space-y-2">
//                                                         {cat.courses.map((c, j) => (
//                                                             <li key={j}>
//                                                                 <Link
//                                                                     to="#"
//                                                                     className="text-gray-600 hover:text-blue-600 text-sm block"
//                                                                 >
//                                                                     {c}
//                                                                 </Link>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                         <div className="mt-6 pt-4 border-t border-gray-200">
//                                             <Link
//                                                 to="#"
//                                                 className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                                             >
//                                                 View All Courses →
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Desktop nav links */}
//                         <div className="hidden md:flex items-center space-x-1">
//                             {links.map((link, i) => (
//                                 <Link
//                                     key={i}
//                                     to={link.href}
//                                     className="text-white hover:text-gray-300 px-3 py-2 text-sm border-r border-gray-600"
//                                 >
//                                     {link.name}
//                                 </Link>
//                             ))}
//                         </div>

//                         {/* Mobile hamburger */}
//                         <div className="md:hidden">
//                             <button
//                                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                                 className="p-2 text-gray-200 hover:text-white"
//                             >
//                                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* RIGHT SIDE (Course Finder - Desktop) */}
//                     <div className="hidden md:block">
//                         <button className="text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 flex items-center font-medium bg-blue-600">
//                             <span className="bg-yellow-500 text-black text-xs px-1.5 py-0.5 rounded mr-2 font-bold">
//                                 NEW
//                             </span>
//                             🔍 Course Finder
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden mt-2 space-y-2 px-2 pb-4 bg-gray-900 rounded-lg">
//                         {/* All Courses Toggle */}
//                         <div>
//                             <button
//                                 className="flex items-center justify-between w-full px-3 py-2 text-sm text-white bg-gray-700 rounded"
//                                 onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
//                             >
//                                 <span className="flex items-center">
//                                     <Book className="h-4 w-4 mr-2" />
//                                     All Courses
//                                 </span>
//                                 <ChevronDown
//                                     className={`ml-2 h-4 w-4 transform transition-transform ${isMobileCoursesOpen ? "rotate-180" : ""
//                                         }`}
//                                 />
//                             </button>

//                             {isMobileCoursesOpen && (
//                                 <div className="bg-gray-800 mt-2 rounded px-3 py-2">
//                                     {categories.map((cat, i) => (
//                                         <div key={i} className="mb-3">
//                                             <h4 className="font-semibold text-gray-200 text-sm mb-2">
//                                                 {cat.title}
//                                             </h4>
//                                             <ul className="space-y-1">
//                                                 {cat.courses.map((c, j) => (
//                                                     <li key={j}>
//                                                         <Link
//                                                             to="#"
//                                                             className="text-gray-400 hover:text-blue-400 text-sm block"
//                                                             onClick={closeMobileMenu}  // ✅ Auto close
//                                                         >
//                                                             {c}
//                                                         </Link>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     ))}
//                                     <Link
//                                         to="#"
//                                         className="text-blue-400 hover:text-blue-600 text-sm font-medium block mt-2"
//                                         onClick={closeMobileMenu}  // ✅ Auto close
//                                     >
//                                         View All Courses →
//                                     </Link>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Other Links */}
//                         {links.map((link, i) => (
//                             <Link
//                                 key={i}
//                                 to={link.href}
//                                 className="block px-3 py-2 text-sm text-white hover:bg-gray-700 rounded"
//                                 onClick={closeMobileMenu}  // ✅ Auto close
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}

//                         {/* Course Finder for mobile */}
//                         <button
//                             className="w-full text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 flex items-center font-medium mt-2 bg-blue-600"
//                             onClick={closeMobileMenu}  // ✅ Auto close
//                         >
//                             <span className="bg-yellow-500 text-black text-xs px-1.5 py-0.5 rounded mr-2 font-bold">
//                                 NEW
//                             </span>
//                             🔍 Course Finder
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

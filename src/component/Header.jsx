
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MainModal from "./Loginregister/MainModal";
import { ChevronDown, Search, Bell, Grid3X3, User, Edit3, Target, Menu, X } from "lucide-react";
import logo from "../assets/Logow.png"

const Header = () => {
    const [isGoalOpen, setIsGoalOpen] = useState(false);
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileGoalOpen, setIsMobileGoalOpen] = useState(false);
    const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(false);

    const mobileMenuRef = useRef(null);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleMobileGoal = () => {
        setIsMobileGoalOpen(!isMobileGoalOpen);
        setIsMobileExploreOpen(false);
    };

    const toggleMobileExplore = () => {
        setIsMobileExploreOpen(!isMobileExploreOpen);
        setIsMobileGoalOpen(false);
    };

    // 🔹 Close menu when clicked outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
                setIsMobileMenuOpen(false);
                setIsMobileGoalOpen(false);
                setIsMobileExploreOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="bg-[#02133e] text-white shadow-lg relative">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to={"/"} className="flex items-center">
                        <img
                            src={logo}
                            alt="logo"
                            style={{ width: "120px", height: "30px" }}
                        />
                    </Link>

                    {/* Desktop Search + Goal */}
                    <div className="hidden lg:flex items-center space-x-6 flex-1 max-w-4xl ml-8">
                        {/* Select Goal & City */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsGoalOpen(true)}
                            onMouseLeave={() => setIsGoalOpen(false)}
                        >
                            <button
                                className="flex items-center  hover:text-blue-300 text-sm whitespace-nowrap"
                                onClick={() => setIsGoalOpen(!isGoalOpen)}
                            >
                                <Target className="h-4 w-4 mr-1" />
                                Select Goal & 📍 City
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>

                            {isGoalOpen && (
                                <div className="absolute top-full left-0 bg-white text-gray-300 shadow-2xl rounded-lg py-6 w-96 z-50 mt-2">
                                    <div className="px-6 pb-4 border-b border-gray-200">
                                        <h3 className="font-semibold text-gray-800 mb-4 text-lg">Select Your Goal</h3>
                                        <div className="grid grid-cols-3 gap-3">
                                            {["Engineering", "MBA", "Medical", "Arts", "Science", "Commerce"].map((goal) => (
                                                <button
                                                    key={goal}
                                                    className="bg-gray-50 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 border"
                                                >
                                                    {goal}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="px-6 pt-4">
                                        <h3 className="font-semibold text-gray-800 mb-4 text-lg">Select City</h3>
                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            {["Delhi NCR", "Bangalore", "Mumbai", "Hyderabad", "Pune", "Chennai", "Kolkata", "Ahmedabad"].map(
                                                (city) => (
                                                    <button
                                                        key={city}
                                                        className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 border text-left"
                                                    >
                                                        {city}
                                                    </button>
                                                )
                                            )}
                                        </div>
                                        <button className="text-blue-600 text-sm hover:text-blue-800 font-medium">View All Cities →</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Search */}
                        <div className="flex-1 max-w-2xl">
                            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm">
                                <Search className="h-5 w-5 text-gray-800 ml-4" />
                                <input
                                    type="text"
                                    placeholder="Search for Colleges, Exams, Courses and More.."
                                    className="flex-1 p-3 text-gray-700 outline-none text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Write Review */}
                        <button className="hidden lg:flex items-center  text-white px-4 py-2.5 rounded-lg hover:bg-[#0073df] text-sm font-medium">
                            <Edit3 className="h-4 w-4 mr-2" />
                            Write a Review
                            <div className="ml-2  text-white text-xs px-2 py-0.5 rounded">Get Upto ₹500</div>
                        </button>

                        {/* Explore (Desktop) */}
                        <div
                            className="relative hidden lg:block"
                            onMouseEnter={() => setIsExploreOpen(true)}
                            onMouseLeave={() => setIsExploreOpen(false)}
                        >
                            <button
                                className="flex items-center text-white hover:text-gray-300 p-2"
                                onClick={() => setIsExploreOpen(!isExploreOpen)}
                            >
                                <Grid3X3 className="h-5 w-5 mr-1" />
                                Explore
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>

                            {isExploreOpen && (
                                <div className="absolute top-full right-0 bg-white text-gray-300 shadow-2xl rounded-lg py-6 w-80 z-50 mt-2">
                                    <div className="px-6 grid grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-4 text-base">Explore Colleges</h4>
                                            <ul className="space-y-3">
                                                {["Top Colleges", "Engineering Colleges", "MBA Colleges", "Medical Colleges", "Arts Colleges", "Science Colleges"].map((item) => (
                                                    <li key={item}>
                                                        <a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">
                                                            {item}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-4 text-base">Explore Exams</h4>
                                            <ul className="space-y-3">
                                                {["JEE Main", "NEET", "CAT", "GATE", "XAT", "MAT"].map((exam) => (
                                                    <li key={exam}>
                                                        <a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">
                                                            {exam}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-gray-200 px-6">
                                        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                            View All Categories →
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Notifications */}
                        <button className="relative p-2 text-white hover:text-gray-300">
                            <Bell className="h-6 w-6" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                                3
                            </span>
                        </button>

                        {/* User */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsUserOpen(true)}
                            onMouseLeave={() => setIsUserOpen(false)}
                        >
                            <button className="flex items-center space-x-2 p-2" onClick={() => setIsUserOpen(!isUserOpen)}>
                                <div className="w-8 h-8 bg-[#0073df] rounded-full flex items-center justify-center">
                                    <User className="h-5 w-5 text-white" />
                                </div>
                                <ChevronDown className="h-4 w-4 text-white hidden lg:block" />
                            </button>

                            {isUserOpen && (
                                <div className="absolute top-full right-0 bg-white text-gray-300 shadow-2xl rounded-lg py-3 w-90 h-60 z-50 mt-2">
                                    <MainModal />
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Btn */}
                        <button className="lg:hidden p-2 text-white" onClick={toggleMenu}>
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* 🔹 Mobile Search is now HIDDEN */}
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div ref={mobileMenuRef} className="lg:hidden bg-gray-800 border-t border-gray-700">
                    <div className="px-4 py-4 space-y-3">
                        {/* Goal & City */}
                        <button
                            className="w-full flex justify-between items-center text-left text-white hover:text-orange-400 py-2"
                            onClick={toggleMobileGoal}
                        >
                            🎯 Select Goal & City
                            <ChevronDown className={`h-4 w-4 transform transition-transform ${isMobileGoalOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isMobileGoalOpen && (
                            <div className="pl-4 text-sm text-gray-300 space-y-2">
                                {["Engineering", "MBA", "Medical", "Arts", "Science", "Commerce"].map((goal) => (
                                    <p key={goal} className="hover:text-orange-400">{goal}</p>
                                ))}
                                <p className="mt-2 font-semibold">Cities:</p>
                                {["Delhi NCR", "Bangalore", "Mumbai", "Hyderabad", "Pune", "Chennai"].map((city) => (
                                    <p key={city} className="hover:text-orange-400">{city}</p>
                                ))}
                            </div>
                        )}

                        {/* Explore */}
                        <button
                            className="w-full flex justify-between items-center text-left text-white hover:text-orange-400 py-2"
                            onClick={toggleMobileExplore}
                        >
                            📱 Explore
                            <ChevronDown className={`h-4 w-4 transform transition-transform ${isMobileExploreOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isMobileExploreOpen && (
                            <div className="pl-4 text-sm text-gray-300 space-y-2">
                                <p className="font-semibold">Colleges</p>
                                {["Top Colleges", "Engineering", "MBA", "Medical"].map((c) => (
                                    <p key={c} className="hover:text-orange-400">{c}</p>
                                ))}
                                <p className="mt-2 font-semibold">Exams</p>
                                {["JEE Main", "NEET", "CAT"].map((e) => (
                                    <p key={e} className="hover:text-orange-400">{e}</p>
                                ))}
                            </div>
                        )}

                        <button className="w-full bg-orange-500 text-white px-4 py-3 rounded-lg text-sm">
                            ✍️ Write a Review - Get Upto ₹500
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import MainModal from "./Loginregister/MainModal";
// import logo from "../assets/logo1.png";
// import { ChevronDown, Search, Bell, Grid3X3, User, Edit3, Target, Menu, X } from "lucide-react";

// const Header = () => {
//     const [isGoalOpen, setIsGoalOpen] = useState(false);
//     const [isExploreOpen, setIsExploreOpen] = useState(false);
//     const [isUserOpen, setIsUserOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isMobileGoalOpen, setIsMobileGoalOpen] = useState(false);
//     const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(false);

//     const mobileMenuRef = useRef(null);

//     const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
//     const toggleMobileGoal = () => {
//         setIsMobileGoalOpen(!isMobileGoalOpen);
//         setIsMobileExploreOpen(false);
//     };
//     const toggleMobileExplore = () => {
//         setIsMobileExploreOpen(!isMobileExploreOpen);
//         setIsMobileGoalOpen(false);
//     };

//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
//                 setIsMobileMenuOpen(false);
//                 setIsMobileGoalOpen(false);
//                 setIsMobileExploreOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     return (
//         <header className="bg-white text-gray-800 relative">
//             <div className="max-w-7xl mx-auto  flex items-center justify-between">
//                 {/* Logo */}
//                 <Link to="/" className="flex items-center">
//                     <img
//                         src={logo}
//                         alt="Logo"
//                         className="w-36 h-25"
//                     />
//                 </Link>

//                 {/* Desktop Search + Goal */}
//                 <div className="hidden lg:flex items-center space-x-6 flex-1 max-w-4xl ml-8">
//                     {/* Goal & City */}
//                     <div
//                         className="relative"
//                         onMouseEnter={() => setIsGoalOpen(true)}
//                         onMouseLeave={() => setIsGoalOpen(false)}
//                     >
//                         <button
//                             className="flex items-center text-gray-800 hover:text-blue-600 text-sm whitespace-nowrap"
//                             onClick={() => setIsGoalOpen(!isGoalOpen)}
//                         >
//                             <Target className="h-4 w-4 mr-1" />
//                             Select Goal & 📍 City
//                             <ChevronDown className="ml-1 h-4 w-4" />
//                         </button>

//                         {isGoalOpen && (
//                             <div className="absolute top-full left-0 bg-white text-gray-900 shadow-xl rounded-lg py-6 w-96 z-50 mt-2 border border-gray-200">
//                                 <div className="px-6 pb-4 border-b border-gray-200">
//                                     <h3 className="font-semibold mb-4 text-lg">Select Your Goal</h3>
//                                     <div className="grid grid-cols-3 gap-3">
//                                         {["Engineering", "MBA", "Medical", "Arts", "Science", "Commerce"].map((goal) => (
//                                             <button
//                                                 key={goal}
//                                                 className="bg-gray-50 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 border border-gray-300"
//                                             >
//                                                 {goal}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                                 <div className="px-6 pt-4">
//                                     <h3 className="font-semibold mb-4 text-lg">Select City</h3>
//                                     <div className="grid grid-cols-2 gap-3 mb-4">
//                                         {["Delhi NCR", "Bangalore", "Mumbai", "Hyderabad", "Pune", "Chennai", "Kolkata", "Ahmedabad"].map(
//                                             (city) => (
//                                                 <button
//                                                     key={city}
//                                                     className="bg-gray-50 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 border border-gray-300 text-left"
//                                                 >
//                                                     {city}
//                                                 </button>
//                                             )
//                                         )}
//                                     </div>
//                                     <button className="text-blue-600 text-sm hover:text-blue-800 font-medium">View All Cities →</button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Search */}
//                     <div className="flex-1 max-w-2xl">
//                         <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm">
//                             <Search className="h-5 w-5 text-gray-800 ml-4" />
//                             <input
//                                 type="text"
//                                 placeholder="Search for Colleges, Exams, Courses and More.."
//                                 className="flex-1 p-3 text-gray-800 bg-gray-100 outline-none text-sm"
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Actions */}
//                 <div className="flex items-center space-x-4">
//                     <button className="hidden lg:flex items-center bg-white  text-gray-800 px-4 py-2.5 rounded-lg hover:bg-[#0623ad] hover:text-white text-sm font-medium">
//                         <Edit3 className="h-4 w-4 mr-2" /> Write a Review
//                         <div className="ml-2 bg-[#029be8] text-white text-xs px-2 py-0.5 rounded">Get Upto ₹500</div>
//                     </button>

//                     {/* Explore */}
//                     <div
//                         className="relative hidden lg:block"
//                         onMouseEnter={() => setIsExploreOpen(true)}
//                         onMouseLeave={() => setIsExploreOpen(false)}
//                     >
//                         <button
//                             className="flex items-center text-gray-800 hover:text-blue-600 p-2"
//                             onClick={() => setIsExploreOpen(!isExploreOpen)}
//                         >
//                             <Grid3X3 className="h-5 w-5 mr-1" />
//                             Explore
//                             <ChevronDown className="ml-1 h-4 w-4" />
//                         </button>

//                         {isExploreOpen && (
//                             <div className="absolute top-full right-0 bg-white text-gray-800 shadow-xl rounded-lg py-6 w-80 z-50 mt-2 border border-gray-200">
//                                 <div className="px-6 grid grid-cols-2 gap-6">
//                                     <div>
//                                         <h4 className="font-semibold mb-4 text-gray-300 text-base">Explore Colleges</h4>
//                                         <ul className="space-y-3">
//                                             {["Top Colleges", "Engineering Colleges", "MBA Colleges", "Medical Colleges", "Arts Colleges", "Science Colleges"].map((item) => (
//                                                 <li key={item}>
//                                                     <a href="#" className="text-gray-700 hover:text-blue-600 text-sm block py-1">{item}</a>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                     <div>
//                                         <h4 className="font-semibold mb-4 text-gray-800 text-base">Explore Exams</h4>
//                                         <ul className="space-y-3">
//                                             {["JEE Main", "NEET", "CAT", "GATE", "XAT", "MAT"].map((exam) => (
//                                                 <li key={exam}>
//                                                     <a href="#" className="text-gray-700 hover:text-blue-600 text-sm block py-1">{exam}</a>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="mt-6 pt-4 border-t border-gray-200 px-6">
//                                     <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All Categories →</a>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Notifications */}
//                     <button className="relative p-2 text-gray-800 hover:text-blue-600">
//                         <Bell className="h-6 w-6" />
//                         <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">3</span>
//                     </button>

//                     {/* User */}
//                     <div
//                         className="relative"
//                         onMouseEnter={() => setIsUserOpen(true)}
//                         onMouseLeave={() => setIsUserOpen(false)}
//                     >
//                         <button className="flex items-center space-x-2 p-2" onClick={() => setIsUserOpen(!isUserOpen)}>
//                             <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center">
//                                 <User className="h-5 w-5 text-white" />
//                             </div>
//                             <ChevronDown className="h-4 w-4 text-gray-900 hidden lg:block" />
//                         </button>
//                         {isUserOpen && (
//                             <div className="absolute top-full right-0 bg-white text-gray-900 shadow-xl rounded-lg py-3 w-90 h-60 z-50 mt-2 border border-gray-200">
//                                 <MainModal />
//                             </div>
//                         )}
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button className="lg:hidden p-2 text-gray-900" onClick={toggleMenu}>
//                         {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//                 <div ref={mobileMenuRef} className="lg:hidden bg-white border-t border-gray-200">
//                     <div className="px-4 py-4 space-y-3">
//                         {/* Mobile Goal & City */}
//                         <button
//                             className="w-full flex justify-between items-center text-left text-gray-900 hover:text-blue-600 py-2"
//                             onClick={toggleMobileGoal}
//                         >
//                             🎯 Select Goal & City
//                             <ChevronDown className={`h-4 w-4 transform transition-transform ${isMobileGoalOpen ? "rotate-180" : ""}`} />
//                         </button>
//                         {isMobileGoalOpen && (
//                             <div className="pl-4 text-sm text-gray-700 space-y-2">
//                                 {["Engineering", "MBA", "Medical", "Arts", "Science", "Commerce"].map((goal) => (
//                                     <p key={goal} className="hover:text-blue-600">{goal}</p>
//                                 ))}
//                                 <p className="mt-2 font-semibold">Cities:</p>
//                                 {["Delhi NCR", "Bangalore", "Mumbai", "Hyderabad", "Pune", "Chennai"].map((city) => (
//                                     <p key={city} className="hover:text-blue-600">{city}</p>
//                                 ))}
//                             </div>
//                         )}

//                         {/* Mobile Explore */}
//                         <button
//                             className="w-full flex justify-between items-center text-left text-gray-900 hover:text-blue-600 py-2"
//                             onClick={toggleMobileExplore}
//                         >
//                             📱 Explore
//                             <ChevronDown className={`h-4 w-4 transform transition-transform ${isMobileExploreOpen ? "rotate-180" : ""}`} />
//                         </button>
//                         {isMobileExploreOpen && (
//                             <div className="pl-4 text-sm text-gray-700 space-y-2">
//                                 <p className="font-semibold">Colleges</p>
//                                 {["Top Colleges", "Engineering", "MBA", "Medical"].map((c) => (
//                                     <p key={c} className="hover:text-blue-600">{c}</p>
//                                 ))}
//                                 <p className="mt-2 font-semibold">Exams</p>
//                                 {["JEE Main", "NEET", "CAT"].map((e) => (
//                                     <p key={e} className="hover:text-blue-600">{e}</p>
//                                 ))}
//                             </div>
//                         )}

//                         <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-sm">
//                             ✍️ Write a Review - Get Upto ₹500
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

// export default Header;

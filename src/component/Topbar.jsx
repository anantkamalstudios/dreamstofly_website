
// import React, { useState } from 'react';
// import { Search, ChevronDown, Grid3X3, Bell, User, Edit3, Menu } from 'lucide-react';

// const CollegeDuniaComplete = () => {
//     const [isGoalDropdownOpen, setIsGoalDropdownOpen] = useState(false);

//     const courses = [
//         'All Courses',
//         'HOME',
//         'SOP MAKER',
//         'CONNECT',
//         'POST ADMIT SERVICES',
//         'BLOGS',
//         'EXAM PREP',
//         'FREE COURSES',
//         'TRAVEL'

//     ];

//     return (
//         <div className="w-full">
//             {/* Main Header */}
//             <header className="bg-black text-white h-16 flex items-center">
//                 <div className="w-full px-4 flex items-center justify-between">

//                     {/* Left Section - Logo */}
//                     <div className="flex items-center">
//                         <div className="flex items-center space-x-2">
//                             <div className="rounded flex items-center justify-center">
//                                 {/* <span className="text-white font-bold text-sm">CD</span> */}
//                                 <img className='' src="https://dreamstofly.com/web/images/logo-dark.png" alt="" style={{ width: "140px", height: "50px" }} />
//                             </div>
//                             {/* <span className="text-white text-xl font-semibold">collegedunia</span> */}
//                         </div>
//                     </div>

//                     {/* Center Section - Select Goal and Search */}
//                     <div className="flex items-center flex-1 max-w-4xl mx-8">

//                         {/* Select Goal Dropdown */}
//                         <div className="relative mr-0">
//                             <button
//                                 onClick={() => setIsGoalDropdownOpen(!isGoalDropdownOpen)}
//                                 className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-l-lg border-r border-gray-600 h-12 min-w-48"
//                             >
//                                 <div className="flex items-center space-x-1">
//                                     <span className="text-orange-400 text-sm">🎯</span>
//                                     <span className="text-orange-400 text-sm font-medium">Select Goal</span>
//                                     <span className="text-orange-400 text-sm">& 🏙️ City</span>
//                                 </div>
//                                 <ChevronDown className="w-4 h-4 text-gray-400" />
//                             </button>
//                             {/* 
//                             <div className="absolute top-full mt-1 text-sm text-white">
//                                 <div className="flex items-center space-x-1">
//                                     <span className="text-orange-400 text-sm font-medium">Select Goal</span>
//                                     <ChevronDown className="w-3 h-3 text-orange-400" />
//                                 </div>
//                             </div> */}

//                             {/* Dropdown Menu */}
//                             {isGoalDropdownOpen && (
//                                 <div className="absolute top-full left-0 mt-8 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//                                     <div className="py-2">
//                                         <div className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">Select Your Goal</div>
//                                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Engineering</a>
//                                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Medical</a>
//                                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Management</a>
//                                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Law</a>
//                                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Arts</a>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Search Bar */}
//                         <div className="flex-1 relative">
//                             <div className="flex items-center bg-white rounded-r-lg h-12">
//                                 <Search className="w-5 h-5 text-gray-400 ml-4" />
//                                 <input
//                                     type="text"
//                                     placeholder="Search for Colleges, Exams, Courses and More.."
//                                     className="flex-1 px-3 py-3 text-gray-700 text-sm bg-transparent outline-none placeholder-gray-400"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Section - Actions */}
//                     <div className="flex items-center space-x-4">

//                         {/* Write a Review Button */}
//                         <button className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg transition-colors">
//                             <Edit3 className="w-4 h-4 text-white" />
//                             <span className="text-white text-sm font-medium">Write a Review</span>
//                             <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">Festive 2025</span>
//                         </button>

//                         {/* Explore Button */}
//                         <button className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors">
//                             <Grid3X3 className="w-5 h-5" />
//                             <span className="text-sm font-medium">Explore</span>
//                         </button>

//                         {/* Notification Bell */}
//                         <button className="text-white hover:text-orange-400 transition-colors">
//                             <Bell className="w-5 h-5" />
//                         </button>

//                         {/* Hamburger Menu */}
//                         <button className="text-white hover:text-orange-400 transition-colors">
//                             <Menu className="w-5 h-5" />
//                         </button>

//                         {/* Profile Menu */}
//                         <button className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors">
//                             <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
//                                 <User className="w-4 h-4 text-white" />
//                             </div>
//                         </button>
//                     </div>
//                 </div>
//             </header>

//             {/* Navigation Bar */}
//             <nav className="bg-gray-900 text-white py-3">
//                 <div className="w-full px-4">
//                     <div className="flex items-center justify-between">

//                         {/* Left Section - Courses */}
//                         <div className="flex items-center space-x-6 overflow-x-auto">
//                             {courses.map((course, index) => (
//                                 <button
//                                     key={course}
//                                     className={`whitespace-nowrap text-sm font-medium transition-colors ${index === 0
//                                         ? 'text-orange-400 hover:text-orange-300'
//                                         : 'text-white hover:text-orange-400'
//                                         }`}
//                                 >
//                                     {course}
//                                 </button>
//                             ))}
//                         </div>

//                         {/* Right Section - Course Finder */}
//                         <div className="flex items-center">
//                             <button className="flex items-center space-x-2 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
//                                 <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-bold">NEW</span>
//                                 <span className="text-white text-sm font-medium">Course Finder</span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default CollegeDuniaComplete;
import React, { useState } from 'react';
import { ChevronDown, Search, MapPin, Bell, Grid3X3, User, Edit3, Book, Target, Menu, X, Phone, Download, Star, Award, TrendingUp, Users, Calendar } from 'lucide-react';

// Complete CollegeDunia Header Component
const CollegeDuniaHeader = () => {
    const [isGoalOpen, setIsGoalOpen] = useState(false);
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);
    const [isAllCoursesOpen, setIsAllCoursesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Top Notification Bar */}
            {/* <div className="bg-blue-600 text-white py-1.5 px-4 text-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <span>Get College Notifications, Exam Notifications and News Updates</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <Phone className="h-3 w-3" />
                            <span>Help</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Download className="h-3 w-3" />
                            <span>Download App</span>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Main Header */}
            <header className="bg-gray-900 text-white shadow-lg relative">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className=" rounded-full flex items-center justify-center mr-3">
                                {/* <span className="text-white font-bold text-sm">🎓</span> */}
                                <img src="https://dreamstofly.com/web/images/logo-dark.png" alt="" style={{ width: "140px", height: "50px" }} />
                            </div>

                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6 flex-1 max-w-4xl ml-8">
                            {/* Goal & City Selector */}
                            <div className="relative">
                                <button
                                    className="flex items-center text-orange-400 hover:text-orange-300 text-sm whitespace-nowrap"
                                    onClick={() => setIsGoalOpen(!isGoalOpen)}
                                    onMouseEnter={() => setIsGoalOpen(true)}
                                    onMouseLeave={() => setIsGoalOpen(false)}
                                >
                                    <Target className="h-4 w-4 mr-1" />
                                    Select Goal & 📍 City
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>

                                {isGoalOpen && (
                                    <div
                                        className="absolute top-full left-0 bg-white text-black shadow-2xl rounded-lg py-6 w-96 z-50 mt-2"
                                        onMouseEnter={() => setIsGoalOpen(true)}
                                        onMouseLeave={() => setIsGoalOpen(false)}
                                    >
                                        <div className="px-6 pb-4 border-b border-gray-200">
                                            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Select Your Goal</h3>
                                            <div className="grid grid-cols-3 gap-3">
                                                <button className="bg-blue-50 text-blue-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-100 border border-blue-200">
                                                    Engineering
                                                </button>
                                                <button className="bg-gray-50 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 border">
                                                    MBA
                                                </button>
                                                <button className="bg-gray-50 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 border">
                                                    Medical
                                                </button>
                                                <button className="bg-gray-50 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 border">
                                                    Arts
                                                </button>
                                                <button className="bg-gray-50 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 border">
                                                    Science
                                                </button>
                                                <button className="bg-gray-50 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 border">
                                                    Commerce
                                                </button>
                                            </div>
                                        </div>

                                        <div className="px-6 pt-4">
                                            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Select City</h3>
                                            <div className="grid grid-cols-2 gap-3 mb-4">
                                                <button className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 border text-left">
                                                    Delhi NCR
                                                </button>
                                                <button className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 border text-left">
                                                    Bangalore
                                                </button>
                                                <button className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 border text-left">
                                                    Mumbai
                                                </button>
                                                <button className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 border text-left">
                                                    Hyderabad
                                                </button>
                                                <button className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 border text-left">
                                                    Pune
                                                </button>
                                                <button className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 border text-left">
                                                    Chennai
                                                </button>
                                                <button className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 border text-left">
                                                    Kolkata
                                                </button>
                                                <button className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 border text-left">
                                                    Ahmedabad
                                                </button>
                                            </div>
                                            <button className="text-blue-600 text-sm hover:text-blue-800 font-medium">
                                                View All Cities →
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Search Bar */}
                            <div className="flex-1 max-w-2xl">
                                <div className="relative">
                                    <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm">
                                        <Search className="h-5 w-5 text-gray-400 ml-4" />
                                        <input
                                            type="text"
                                            placeholder="Search for Colleges, Exams, Courses and More.."
                                            className="flex-1 p-3 text-gray-700 outline-none text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-4">
                            {/* Write Review Button */}
                            <button className="hidden lg:flex items-center bg-orange-500 text-white px-4 py-2.5 rounded-lg hover:bg-orange-600 text-sm font-medium">
                                <Edit3 className="h-4 w-4 mr-2" />
                                Write a Review
                                <div className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                                    Get Upto ₹500
                                </div>
                            </button>

                            {/* Explore Dropdown */}
                            <div className="relative hidden lg:block">
                                <button
                                    className="flex items-center text-white hover:text-gray-300 p-2"
                                    onClick={() => setIsExploreOpen(!isExploreOpen)}
                                    onMouseEnter={() => setIsExploreOpen(true)}
                                    onMouseLeave={() => setIsExploreOpen(false)}
                                >
                                    <Grid3X3 className="h-5 w-5 mr-1" />
                                    Explore
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>

                                {isExploreOpen && (
                                    <div
                                        className="absolute top-full right-0 bg-white text-black shadow-2xl rounded-lg py-6 w-80 z-50 mt-2"
                                        onMouseEnter={() => setIsExploreOpen(true)}
                                        onMouseLeave={() => setIsExploreOpen(false)}
                                    >
                                        <div className="px-6">
                                            <div className="grid grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-4 text-base">Explore Colleges</h4>
                                                    <ul className="space-y-3">
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">Top Colleges</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">Engineering Colleges</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">MBA Colleges</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">Medical Colleges</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">Arts Colleges</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">Science Colleges</a></li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-4 text-base">Explore Exams</h4>
                                                    <ul className="space-y-3">
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">JEE Main</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">NEET</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">CAT</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">GATE</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">XAT</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block py-1">MAT</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-6 pt-4 border-t border-gray-200">
                                                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                                    View All Categories →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Notification Bell */}
                            <button className="relative p-2 text-white hover:text-gray-300">
                                <Bell className="h-6 w-6" />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                                    3
                                </span>
                            </button>

                            {/* User Profile Dropdown */}
                            <div className="relative">
                                <button
                                    className="flex items-center space-x-2 p-2"
                                    onClick={() => setIsUserOpen(!isUserOpen)}
                                    onMouseEnter={() => setIsUserOpen(true)}
                                    onMouseLeave={() => setIsUserOpen(false)}
                                >
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                        <User className="h-5 w-5 text-white" />
                                    </div>
                                    <ChevronDown className="h-4 w-4 text-white hidden lg:block" />
                                </button>

                                {isUserOpen && (
                                    <div
                                        className="absolute top-full right-0 bg-white text-black shadow-2xl rounded-lg py-3 w-64 z-50 mt-2"
                                        onMouseEnter={() => setIsUserOpen(true)}
                                        onMouseLeave={() => setIsUserOpen(false)}
                                    >
                                        <div className="px-4 py-3 border-b border-gray-200">
                                            <div className="font-semibold text-gray-800">Welcome!</div>
                                            <div className="text-sm text-gray-600">Access account & manage preferences</div>
                                        </div>
                                        <ul className="py-2">
                                            <li><a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100">Login / Register</a></li>
                                            <li><a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100">My Profile</a></li>
                                            <li><a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100">My Applications</a></li>
                                            <li><a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100">Saved Colleges</a></li>
                                            <li><a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100">Compare Colleges</a></li>
                                            <li><a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100">Wishlist</a></li>
                                            <li><a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100">Settings</a></li>
                                            <li><a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100">Help & Support</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden p-2 text-white"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className="lg:hidden mt-4">
                        <div className="flex items-center bg-white rounded-lg overflow-hidden">
                            <Search className="h-5 w-5 text-gray-400 ml-3" />
                            <input
                                type="text"
                                placeholder="Search for Colleges, Exams, Courses.."
                                className="flex-1 p-3 text-gray-700 outline-none text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-gray-800 border-t border-gray-700">
                        <div className="px-4 py-4 space-y-3">
                            <button className="w-full text-left text-white hover:text-orange-400 py-2">
                                🎯 Select Goal & City
                            </button>
                            <button className="w-full text-left text-white hover:text-orange-400 py-2">
                                📱 Explore
                            </button>
                            <button className="w-full bg-orange-500 text-white px-4 py-3 rounded-lg text-sm">
                                ✍️ Write a Review - Get Upto ₹500
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Course Navigation Bar */}
            <div className="bg-gray-800 shadow-sm relative">
                <div className="max-w-7xl mx-auto px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                            {/* All Courses Dropdown */}
                            <div className="relative">
                                <button
                                    className="flex items-center text-white hover:text-gray-300 px-3 py-2 text-sm font-medium whitespace-nowrap"
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
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-4 text-sm">Engineering</h4>
                                                    <ul className="space-y-2">
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">B.Tech</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">M.Tech</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">Diploma</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">B.E</a></li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-4 text-sm">Management</h4>
                                                    <ul className="space-y-2">
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">MBA</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">PGDM</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">BBA</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">Executive MBA</a></li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-4 text-sm">Medical</h4>
                                                    <ul className="space-y-2">
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">MBBS</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">BDS</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">BAMS</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">BHMS</a></li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-4 text-sm">Medical</h4>
                                                    <ul className="space-y-2">
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">MBBS</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">BDS</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">BAMS</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">BHMS</a></li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-4 text-sm">Medical</h4>
                                                    <ul className="space-y-2">
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">MBBS</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">BDS</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">BAMS</a></li>
                                                        <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">BHMS</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-6 pt-4 border-t border-gray-200">
                                                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                                    View All Courses →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Course Links */}
                            <div className="hidden md:flex items-center space-x-1">
                                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm border-r border-gray-600">Home</a>
                                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm border-r border-gray-600">SOP MAKER</a>
                                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm border-r border-gray-600">CONNECT</a>
                                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm border-r border-gray-600">POST ADMIT SERVICES</a>
                                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm border-r border-gray-600">BLOGS</a>
                                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm border-r border-gray-600">EXAM PREP</a>
                                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm border-r border-gray-600">FREE COURSES</a>
                                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm border-r border-gray-600">TRAVEL</a>
                                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm border-r border-gray-600">BBA</a>
                                {/* <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm">BCA</a> */}
                            </div>
                        </div>

                        {/* Course Finder - Right aligned */}
                        <div className="hidden md:block">
                            <button className=" text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 flex items-center font-medium">
                                <span className="bg-yellow-500 text-black text-xs px-1.5 py-0.5 rounded mr-2 font-bold">NEW</span>
                                🔍 Course Finder
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blue Accent Border */}
            {/* <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div> */}
        </>
    );
};

export default CollegeDuniaHeader;


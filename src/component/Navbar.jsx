
// import React, { useState } from 'react';
// import { Search, ChevronDown, Menu, X } from 'lucide-react';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null);

//     const navigationItems = [
//         {
//             name: 'Colleges',
//             hasDropdown: true,
//             dropdownItems: ['Engineering Colleges', 'Medical Colleges', 'Management Colleges', 'Arts & Science Colleges']
//         },
//         {
//             name: 'Exams',
//             hasDropdown: true,
//             dropdownItems: ['JEE Main', 'NEET', 'CAT', 'GATE', 'CLAT']
//         },
//         {
//             name: 'Courses',
//             hasDropdown: true,
//             dropdownItems: ['B.Tech', 'MBBS', 'MBA', 'B.Com', 'BA']
//         },
//         {
//             name: 'Admission',
//             hasDropdown: true,
//             dropdownItems: ['2025 Admissions', 'Application Forms', 'Counselling']
//         },
//         {
//             name: 'Rankings',
//             hasDropdown: false
//         },
//         {
//             name: 'News',
//             hasDropdown: false
//         },
//         {
//             name: 'More',
//             hasDropdown: true,
//             dropdownItems: ['Study Material', 'Career Guidance', 'Student Reviews', 'Scholarships']
//         }
//     ];

//     return (
//         <nav className={` sticky w-full top-0 left-0 z-50 transition-all ${scrolled ? "bg-white bg-opacity-90 shadow-md" : "bg-transparent"
//             }`} >
//             <div className="container mx-auto px-4">
//                 <div className="flex items-center justify-between h-16">
//                     {/* Logo */}
//                     <div className="flex items-center">
//                         <div className="text-xl font-bold text-blue-600">
//                             <img className='w-25 h-10' src="https://dreamstofly.com/web/images/logo-dark.png" alt="" />
//                         </div>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <div className="hidden lg:flex items-center space-x-8">
//                         {navigationItems.map((item) => (
//                             <div
//                                 key={item.name}
//                                 className="relative"
//                                 onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
//                                 onMouseLeave={() => setActiveDropdown(null)}
//                             >
//                                 <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
//                                     <span>{item.name}</span>
//                                     {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
//                                 </button>

//                                 {item.hasDropdown && activeDropdown === item.name && (
//                                     <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//                                         <div className="py-2">
//                                             {item.dropdownItems.map((dropdownItem) => (
//                                                 <a
//                                                     key={dropdownItem}
//                                                     href="#"
//                                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                                                 >
//                                                     {dropdownItem}
//                                                 </a>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Search Bar */}
//                     <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
//                         <Search className="w-5 h-5 text-gray-500 mr-3" />
//                         <input
//                             type="text"
//                             placeholder="Search colleges, exams, courses..."
//                             className="bg-transparent flex-1 outline-none text-sm"
//                         />
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         className="lg:hidden p-2"
//                     >
//                         {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                     </button>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMenuOpen && (
//                     <div className="lg:hidden py-4 border-t">
//                         <div className="mb-4">
//                             <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
//                                 <Search className="w-5 h-5 text-gray-500 mr-3" />
//                                 <input
//                                     type="text"
//                                     placeholder="Search colleges, exams, courses..."
//                                     className="bg-transparent flex-1 outline-none text-sm"
//                                 />
//                             </div>
//                         </div>

//                         {navigationItems.map((item) => (
//                             <div key={item.name} className="py-2">
//                                 <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium">
//                                     <span>{item.name}</span>
//                                     {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showAllCourses, setShowAllCourses] = useState(false);

    const navigationItems = [
        {
            name: 'Colleges',
            hasDropdown: true,
            dropdownItems: ['Engineering Colleges', 'Medical Colleges', 'Management Colleges', 'Arts & Science Colleges']
        },
        {
            name: 'Exams',
            hasDropdown: true,
            dropdownItems: ['JEE Main', 'NEET', 'CAT', 'GATE', 'CLAT']
        },
        {
            name: 'Courses',
            hasDropdown: true,
            dropdownItems: ['B.Tech', 'MBBS', 'MBA', 'B.Com', 'BA']
        },
        {
            name: 'Admission',
            hasDropdown: true,
            dropdownItems: ['2025 Admissions', 'Application Forms', 'Counselling']
        },
        {
            name: 'Rankings',
            hasDropdown: false
        },
        {
            name: 'News',
            hasDropdown: false
        },
        {
            name: 'More',
            hasDropdown: true,
            dropdownItems: ['Study Material', 'Career Guidance', 'Student Reviews', 'Scholarships']
        }
    ];

    const allCourses = [
        { category: 'Engineering', courses: ['B.Tech', 'BE', 'B.Arch', 'M.Tech', 'ME'] },
        { category: 'Medical', courses: ['MBBS', 'BDS', 'BAMS', 'BHMS', 'BPT'] },
        { category: 'Management', courses: ['MBA', 'BBA', 'PGDM', 'BMS', 'MMS'] },
        { category: 'Science', courses: ['B.Sc', 'M.Sc', 'BCA', 'MCA', 'B.Com'] },
        { category: 'Arts', courses: ['BA', 'MA', 'BFA', 'BVA', 'B.Des'] },
        { category: 'Law', courses: ['LLB', 'LLM', 'BA LLB', 'BBA LLB'] },
        { category: 'Pharmacy', courses: ['B.Pharma', 'D.Pharma', 'M.Pharma'] },
        { category: 'Education', courses: ['B.Ed', 'M.Ed', 'D.El.Ed'] },
    ];

    return (
        <nav className="sticky w-full top-0 left-0 z-50 bg-white bg-opacity-90 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="text-xl font-bold text-blue-600">
                            <img className='w-25 h-10' src="https://dreamstofly.com/web/images/logo-dark.png" alt="" />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => {
                                    if (item.hasDropdown) {
                                        setActiveDropdown(item.name);
                                        if (item.name === 'Courses') {
                                            setShowAllCourses(true);
                                        }
                                    }
                                }}
                                onMouseLeave={() => {
                                    setActiveDropdown(null);
                                    if (item.name === 'Courses') {
                                        setShowAllCourses(false);
                                    }
                                }}
                            >
                                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
                                    <span>{item.name}</span>
                                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                </button>

                                {item.hasDropdown && activeDropdown === item.name && (
                                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                        <div className="py-2">
                                            {item.dropdownItems.map((dropdownItem) => (
                                                <a
                                                    key={dropdownItem}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                >
                                                    {dropdownItem}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
                        <Search className="w-5 h-5 text-gray-500 mr-3" />
                        <input
                            type="text"
                            placeholder="Search colleges, exams, courses..."
                            className="bg-transparent flex-1 outline-none text-sm"
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* All Courses Mega Menu */}
                {showAllCourses && (
                    <div
                        className="hidden lg:block absolute left-0 w-full bg-white shadow-lg z-40 border-t border-gray-200"
                        onMouseEnter={() => setShowAllCourses(true)}
                        onMouseLeave={() => setShowAllCourses(false)}
                    >
                        <div className="container mx-auto px-4 py-6">
                            <div className="grid grid-cols-4 gap-8">
                                {allCourses.map((category) => (
                                    <div key={category.category} className="mb-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                                            {category.category}
                                        </h3>
                                        <ul className="space-y-2">
                                            {category.courses.map((course) => (
                                                <li key={course}>
                                                    <a
                                                        href="#"
                                                        className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                                                    >
                                                        {course}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t">
                        <div className="mb-4">
                            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                                <Search className="w-5 h-5 text-gray-500 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Search colleges, exams, courses..."
                                    className="bg-transparent flex-1 outline-none text-sm"
                                />
                            </div>
                        </div>

                        {navigationItems.map((item) => (
                            <div key={item.name} className="py-2">
                                <button
                                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                                    onClick={() => {
                                        if (item.name === 'Courses') {
                                            setShowAllCourses(!showAllCourses);
                                        }
                                    }}
                                >
                                    <span>{item.name}</span>
                                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                </button>
                                {item.name === 'Courses' && showAllCourses && (
                                    <div className="ml-4 mt-2">
                                        {allCourses.map((category) => (
                                            <div key={category.category} className="mb-3">
                                                <h4 className="font-medium text-gray-700">{category.category}</h4>
                                                <div className="grid grid-cols-2 gap-2 mt-1">
                                                    {category.courses.map((course) => (
                                                        <a
                                                            key={course}
                                                            href="#"
                                                            className="text-sm text-gray-600 hover:text-blue-600"
                                                        >
                                                            {course}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

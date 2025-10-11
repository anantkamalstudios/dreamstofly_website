import React, { useState } from "react";
import { Book, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Topbar() {
  const [isAllCoursesOpen, setIsAllCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

  const links = [
    { name: "HOME", href: "/" },
    { name: "SOP MAKER", href: "/sop-maker" },
    { name: "CONNECT", href: "/connect" },
    { name: "POST ADMIT SERVICES", href: "/post-admit-services" },
    { name: "BLOGS", href: "/blogs" },
    { name: "EXAM PREP", href: "/exam-prep" },
    { name: "FREE COURSES", href: "/free-cources" },
    { name: "TRAVEL", href: "/travel" },
    { name: "SERVICES", href: "/services" },
  ];

  const categories = [
    { title: "Engineering", courses: ["B.Tech", "M.Tech", "Diploma", "B.E"] },
    { title: "Management", courses: ["MBA", "PGDM", "BBA", "Executive MBA"] },
    { title: "Medical", courses: ["MBBS", "BDS", "BAMS", "BHMS"] },
    { title: "Engineering", courses: ["B.Tech", "M.Tech", "Diploma", "B.E"] },
    { title: "Management", courses: ["MBA", "PGDM", "BBA", "Executive MBA"] },
    { title: "Medical", courses: ["MBBS", "BDS", "BAMS", "BHMS"] },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileCoursesOpen(false);
  };

  return (
    <div className="shadow-sm relative">
      <div className="max-w-7xl mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center space-x-2 flex-1">
            {/* All Courses Dropdown (Desktop and Large tablets) */}
            <div className="relative hidden xl:block">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium whitespace-nowrap"
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

            {/* Desktop nav links - only show on extra large screens */}
            <div className="hidden xl:flex items-center space-x-1 overflow-x-auto">
              {links.map((link, i) => (
                <Link
                  key={i}
                  to={link.href}
                  className="text-gray-700 hover:text-blue-700 px-2 py-2 text-sm border-r border-gray-600 whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Hamburger for medium screens and below */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-900"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Right section - Course Finder */}
          <div className="ml-2">
            <Link
              href="/cource-finder"
              className="text-white bg-[#0073df] px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm hover:bg-blue-700 flex items-center font-medium whitespace-nowrap"
            >
              <span className="bg-yellow-500 text-black text-xs px-1.5 py-0.5 rounded mr-2 font-bold">
                NEW
              </span>
              <span className="hidden sm:inline">🔍 Course Finder</span>
              <span className="sm:hidden">🔍 Find</span>
            </Link>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-2 space-y-2 px-2 pb-4 bg-gray-100 rounded-lg">
            {/* All Courses Toggle */}
            <div>
              <button
                className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-900 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
              >
                <span className="flex items-center">
                  <Book className="h-4 w-4 mr-2" />
                  All Courses
                </span>
                <ChevronDown
                  className={`ml-2 h-4 w-4 transform transition-transform ${
                    isMobileCoursesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileCoursesOpen && (
                <div className="bg-white mt-2 rounded px-3 py-2 shadow-inner">
                  {categories.map((cat, i) => (
                    <div key={i} className="mb-3">
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">
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
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium block mt-2"
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
                className="block px-3 py-2 text-sm text-gray-900 hover:bg-gray-200 rounded"
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

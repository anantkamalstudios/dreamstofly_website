<<<<<<< HEAD

// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

// export default function Footer() {
//     return (
//         <footer className="bg-white border-t border-gray-300 mt-6 bg-[#F5F8F9] text-gray-700 text-sm">
//             <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

//                 {/* Column 1 */}
//                 <div>
//                     <h4 className="font-semibold mb-3">Top Colleges</h4>
//                     <ul className="space-y-1">
//                         {["M.B.A", "B.Tech/B.E", "MCA", "BCA", "M.Tech", "MA", "BA"].map((item, i) => (
//                             <li key={i} className="hover:underline cursor-pointer">{item}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Column 2 */}
//                 <div>
//                     <h4 className="font-semibold mb-3">Top Universities</h4>
//                     <ul className="space-y-1">
//                         {["Engineering", "Management", "Medical", "Law", "Commerce", "Science", "Arts"].map((item, i) => (
//                             <li key={i} className="hover:underline cursor-pointer">{item}</li>
//                         ))}
//                     </ul>
//                 </div>



//                 {/* Column 4 */}
//                 <div>
//                     <h4 className="font-semibold mb-3">Study Abroad</h4>
//                     <div className="grid grid-cols-2 gap-x-6">
//                         <ul className="space-y-1">
//                             {["Canada", "USA", "UK", "UAE", "Australia", "Germany", "Sweden"].map((item, i) => (
//                                 <li key={i} className="hover:underline cursor-pointer">{item}</li>
//                             ))}
//                         </ul>
//                         <ul className="space-y-1">
//                             {["Ireland", "New Zealand", "Hong Kong", "Singapore", "Malaysia", "Netherlands", "Italy"].map((item, i) => (
//                                 <li key={i} className="hover:underline cursor-pointer">{item}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>


//             </div>

//             {/* Divider */}
//             <hr className="border-gray-300" />


//             <div className="max-w-7xl mx-auto px-4 py-4 text-gray-600 text-xs">
//                 <div className="flex flex-col md:flex-row justify-between items-center gap-4">

//                     {/* Left: Links */}
//                     <div className="flex flex-wrap justify-center md:justify-start gap-4">
//                         {[
//                             "About Collegedunia",
//                             "Contact Us",
//                             "Advertising",
//                             "Career",
//                             "Terms & Conditions",
//                         ].map((link, i) => (
//                             <span
//                                 key={i}
//                                 className="hover:underline cursor-pointer whitespace-nowrap"
//                             >
//                                 {link}
//                             </span>
//                         ))}
//                     </div>

//                     {/* Right: Social Icons */}
//                     <div className="flex items-center gap-3 text-gray-600">
//                         <a href="#" className="hover:text-gray-900"><FaFacebookF /></a>
//                         <a href="#" className="hover:text-gray-900"><FaTwitter /></a>
//                         <a href="#" className="hover:text-gray-900"><FaInstagram /></a>
//                         <a href="#" className="hover:text-gray-900"><FaYoutube /></a>
//                         <a href="#" className="hover:text-gray-900"><FaLinkedinIn /></a>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Section */}
//             <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-300">
//                 {/* Logo */}
//                 <div className="flex items-center gap-2">
//                     <img src="https://img.icons8.com/ios-filled/50/000000/graduation-cap.png" alt="logo" className="w-8 h-8" />
//                     <span className="font-semibold text-gray-800">collegedunia</span>
//                 </div>

//                 {/* Copyright */}
//                 <p className="text-xs text-gray-500 text-center md:text-left">
//                     © 2025 Collegedunia Web Pvt. Ltd. All Rights Reserved
//                 </p>



//                 {/* App Buttons */}
//                 <div className="flex gap-3">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
//                     <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-8" />
//                 </div>
//             </div>
//         </footer>
//     );
// }
// import React from "react";
// import {
//     FaFacebookF,
//     FaTwitter,
//     FaInstagram,
//     FaYoutube,
//     FaLinkedinIn,
// } from "react-icons/fa";

// export default function Footer() {
//     return (
//         <footer className="bg-[#F5F8F9] text-gray-700">
//             {/* Top Columns */}
//             <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[20px] text-base">
//                 {/* Column 1 */}
//                 <div>
//                     <h4 className="font-bold text-lg mb-4">Top Colleges</h4>
//                     <ul className="space-y-1">
//                         {["M.B.A", "B.Tech/B.E", "MCA", "BCA", "M.Tech", "MA", "BA"].map(
//                             (item, i) => (
//                                 <li
//                                     key={i}
//                                     className="hover:underline cursor-pointer transition-colors duration-200"
//                                 >
//                                     {item}
//                                 </li>
//                             )
//                         )}
//                     </ul>
//                 </div>

//                 {/* Column 2 */}
//                 <div>
//                     <h4 className="font-bold text-lg mb-4">Top Universities</h4>
//                     <ul className="space-y-2">
//                         {[
//                             "Engineering",
//                             "Management",
//                             "Medical",
//                             "Law",
//                             "Commerce",
//                             "Science",
//                             "Arts",
//                         ].map((item, i) => (
//                             <li
//                                 key={i}
//                                 className="hover:underline cursor-pointer transition-colors duration-200"
//                             >
//                                 {item}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Column 3 */}
//                 <div>
//                     <h4 className="font-bold text-lg mb-4">Study Abroad</h4>
//                     <div className="grid grid-cols-2 gap-x-6">
//                         <ul className="space-y-1">
//                             {[
//                                 "Canada",
//                                 "USA",
//                                 "UK",
//                                 "UAE",
//                                 "Australia",
//                                 "Germany",
//                                 "Sweden",
//                             ].map((item, i) => (
//                                 <li
//                                     key={i}
//                                     className="hover:underline cursor-pointer transition-colors duration-200"
//                                 >
//                                     {item}
//                                 </li>
//                             ))}
//                         </ul>
//                         <ul className="space-y-1 ">
//                             {[
//                                 "Ireland",
//                                 "New Zealand",
//                                 "Hong Kong",
//                                 "Singapore",
//                                 "Malaysia",
//                                 "Netherlands",
//                                 "Italy",
//                             ].map((item, i) => (
//                                 <li
//                                     key={i}
//                                     className="hover:underline cursor-pointer transition-colors duration-200"
//                                 >
//                                     {item}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             {/* Divider */}
//             <hr className="border-gray-300" />

//             {/* Middle Section: Links & Social */}
//             <div className="max-w-7xl mx-auto px-4 py-4 text-gray-600 text-sm">
//                 <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                     {/* Left Links */}
//                     <div className="flex flex-wrap justify-center md:justify-start gap-4">
//                         {[
//                             "About Collegedunia",
//                             "Contact Us",
//                             "Advertising",
//                             "Career",
//                             "Terms & Conditions",
//                         ].map((link, i) => (
//                             <span
//                                 key={i}
//                                 className="hover:underline cursor-pointer whitespace-nowrap"
//                             >
//                                 {link}
//                             </span>
//                         ))}
//                     </div>

//                     {/* Social Icons */}
//                     <div className="flex items-center gap-3 text-gray-600 text-lg">
//                         <a href="#" className="hover:text-gray-900 transition">
//                             <FaFacebookF />
//                         </a>
//                         <a href="#" className="hover:text-gray-900 transition">
//                             <FaTwitter />
//                         </a>
//                         <a href="#" className="hover:text-gray-900 transition">
//                             <FaInstagram />
//                         </a>
//                         <a href="#" className="hover:text-gray-900 transition">
//                             <FaYoutube />
//                         </a>
//                         <a href="#" className="hover:text-gray-900 transition">
//                             <FaLinkedinIn />
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Section */}
//             <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-300 text-sm">
//                 {/* Logo */}
//                 <div className="flex items-center">
//                     <img
//                         src="https://dreamstofly.com/web/images/logo-dark.png"
//                         alt="logo"
//                         className="w-30 h-20"
//                     />
//                     {/* <span className="font-semibold text-gray-800 text-lg">
//                         collegedunia
//                     </span> */}
//                 </div>

//                 {/* Copyright */}
//                 <p className="text-xs text-gray-500 text-center md:text-left">
//                     © 2025 Collegedunia Web Pvt. Ltd. All Rights Reserved
//                 </p>

//                 {/* App Buttons */}
//                 <div className="flex gap-3">
//                     <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//                         alt="Google Play"
//                         className="h-8"
//                     />
//                     <img
//                         src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//                         alt="App Store"
//                         className="h-8"
//                     />
//                 </div>
//             </div>
//         </footer>
//     );
// }
// import { Link } from "react-router-dom";
// import React from "react";
// import logo from "../assets/logo1.png"
// import {
//     FaFacebookF,
//     FaTwitter,
//     FaInstagram,
//     FaYoutube,
//     FaLinkedinIn,
// } from "react-icons/fa";

// export default function Footer() {
//     return (
//         <footer className="bg-[#F5F8F9] mt-7 text-gray-700">
//             {/* Top Columns */}
//             <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-base w-full items-start">
//                 {[
//                     {
//                         title: "Top Colleges",
//                         items: ["M.B.A", "B.Tech/B.E", "MCA", "BCA", "M.Tech", "MA", "BA"],
//                     },
//                     {
//                         title: "Top Universities",
//                         items: [
//                             "Engineering",
//                             "Management",
//                             "Medical",
//                             "Law",
//                             "Commerce",
//                             "Science",
//                             "Arts",
//                         ],
//                     },
//                     {
//                         title: "Study Abroad",
//                         items: [
//                             "Canada",
//                             "USA",
//                             "UK",
//                             "UAE",
//                             "Australia",
//                             "Germany",
//                             "Sweden",
//                             "Ireland",
//                             "New Zealand",
//                             "Hong Kong",
//                             "Singapore",
//                             "Malaysia",
//                             "Netherlands",
//                             "Italy",
//                         ],
//                         split: true,
//                     },
//                     {
//                         title: "Quick Links",
//                         items: [
//                             "Scholarships",
//                             "Exam Calendar",
//                             "Admission Alerts",
//                             "Education News",
//                             "College Reviews",
//                         ],
//                     },
//                     {
//                         title: "Resources",
//                         items: [
//                             "Courses",
//                             "Online Learning",
//                             "Career Guidance",
//                             "Student Forum",
//                             "Counselling",
//                         ],
//                     },
//                 ].map((col, index) => (
//                     <div key={index} className="flex flex-col h-full">
//                         <h4 className="font-bold text-lg mb-4">{col.title}</h4>
//                         {col.split ? (
//                             <div className="grid grid-cols-2 gap-x-6">
//                                 <ul className="space-y-1">
//                                     {col.items.slice(0, Math.ceil(col.items.length / 2)).map(
//                                         (item, i) => (
//                                             <li
//                                                 key={i}
//                                                 className="hover:underline cursor-pointer transition-colors duration-200"
//                                             >
//                                                 {item}
//                                             </li>
//                                         )
//                                     )}
//                                 </ul>
//                                 <ul className="space-y-1">
//                                     {col.items
//                                         .slice(Math.ceil(col.items.length / 2))
//                                         .map((item, i) => (
//                                             <li
//                                                 key={i}
//                                                 className="hover:underline cursor-pointer transition-colors duration-200"
//                                             >
//                                                 {item}
//                                             </li>
//                                         ))}
//                                 </ul>
//                             </div>
//                         ) : (
//                             <ul className="space-y-1">
//                                 {col.items.map((item, i) => (
//                                     <li
//                                         key={i}
//                                         className="hover:underline cursor-pointer transition-colors duration-200"
//                                     >
//                                         {item}
//                                     </li>
//                                 ))}
//                             </ul>
//                         )}
//                     </div>
//                 ))}
//             </div>


//             <hr className="border-gray-300" />


//             <div className="max-w-7xl mx-auto px-4 py-4 text-gray-600 text-sm">
//                 <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">

//                     <div className="flex flex-wrap justify-center md:justify-start gap-4">
//                         {[
//                             { name: "About Dreams to Fly", path: "/about" },
//                             { name: "Contact Us", path: "/contact" },
//                             { name: "Advertising", path: "/advertising" },
//                             { name: "Career", path: "/career" },
//                             { name: "Terms & Conditions", path: "/terms" },
//                         ].map((link, i) => (
//                             <a
//                                 key={i}
//                                 href={link.path}
//                                 className="hover:underline cursor-pointer whitespace-nowrap"
//                             >
//                                 {link.name}
//                             </a>
//                         ))}
//                     </div>


//                     {/* Social Icons */}
//                     <div className="flex items-center gap-3 text-gray-600 text-lg">
//                         {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn].map(
//                             (Icon, i) => (
//                                 <a
//                                     key={i}
//                                     href="#"
//                                     className="hover:bg-gray-200 transition p-2 rounded-full border border-gray-300"
//                                 >
//                                     <Icon />
//                                 </a>
//                             )
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Section */}
//             <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-300 text-sm">
//                 {/* Logo */}
//                 <div className="flex items-center">
//                     <img
//                         src={logo}
//                         alt="logo"
//                         className="w-50 h-10"
//                     />
//                 </div>

//                 {/* Copyright */}
//                 <p className="text-xs text-gray-500 text-center md:text-left">
//                     © 2025 Dreams to Fly Web Pvt. Ltd. All Rights Reserved
//                 </p>

//                 {/* App Buttons */}
//                 <div className="flex gap-3">
//                     <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//                         alt="Google Play"
//                         className="h-8"
//                     />
//                     <img
//                         src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//                         alt="App Store"
//                         className="h-8"
//                     />
//                 </div>
//             </div>
//         </footer>
//     );
// }
import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/logo1.png";
=======
import React from "react";
import { Link } from "react-router-dom";
>>>>>>> a1c0cf687bac9b4a4838fa83ac06415152e1e079
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/logo.png";

<<<<<<< HEAD
export default function Footer() {
    return (
        <footer className="bg-[#F5F8F9] mt-7 text-gray-700">
            {/* Top Columns */}
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-base w-full items-start">
                {[
                    {
                        title: "Top Colleges",
                        items: ["M.B.A", "B.Tech/B.E", "MCA", "BCA", "M.Tech", "MA", "BA"],
                    },
                    {
                        title: "Top Universities",
                        items: [
                            "Engineering",
                            "Management",
                            "Medical",
                            "Law",
                            "Commerce",
                            "Science",
                            "Arts",
                        ],
                    },
                    {
                        title: "Study Abroad",
                        items: [
                            "Canada",
                            "USA",
                            "UK",
                            "UAE",
                            "Australia",
                            "Germany",
                            "Sweden",
                            "Ireland",
                            "New Zealand",
                            "Hong Kong",
                            "Singapore",
                            "Malaysia",
                            "Netherlands",
                            "Italy",
                        ],
                        split: true,
                    },
                    {
                        title: "Quick Links",
                        items: [
                            "Scholarships",
                            "Exam Calendar",
                            "Admission Alerts",
                            "Education News",
                            "College Reviews",
                        ],
                    },
                    {
                        title: "Resources",
                        items: [
                            "Courses",
                            "Online Learning",
                            "Career Guidance",
                            "Student Forum",
                            "Counselling",
                        ],
                    },
                ].map((col, index) => (
                    <div key={index} className="flex flex-col h-full">
                        <h4 className="font-bold text-lg mb-4">{col.title}</h4>
                        {col.split ? (
                            <div className="grid grid-cols-2 gap-x-6">
                                <ul className="space-y-1">
                                    {col.items
                                        .slice(0, Math.ceil(col.items.length / 2))
                                        .map((item, i) => (
                                            <li
                                                key={i}
                                                className="hover:underline cursor-pointer transition-colors duration-200"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                </ul>
                                <ul className="space-y-1">
                                    {col.items
                                        .slice(Math.ceil(col.items.length / 2))
                                        .map((item, i) => (
                                            <li
                                                key={i}
                                                className="hover:underline cursor-pointer transition-colors duration-200"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        ) : (
                            <ul className="space-y-1">
                                {col.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="hover:underline cursor-pointer transition-colors duration-200"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            <hr className="border-gray-300" />

            {/* Bottom Links & Social */}
            <div className="max-w-7xl mx-auto px-4 py-4 text-gray-600 text-sm">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
                    {/* Internal Links */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {[
                            { name: "About Dreams to Fly", path: "/about" },
                            { name: "Contact Us", path: "/contact" },
                            { name: "Advertising", path: "/advertising" },
                            { name: "Career", path: "/career" },
                            { name: "Terms & Conditions", path: "/terms" },
                        ].map((link, i) => (
                            <Link
                                key={i}
                                to={link.path} // Use Link instead of <a> for internal routing
                                className="hover:underline cursor-pointer whitespace-nowrap"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
=======
function Footer() {
  return (
    <footer className="bg-[#F5F8F9] text-gray-700 text-sm">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Company Column */}
        <div>
          <h4 className="font-bold text-gray-900 mb-3">Company</h4>
          <ul className="space-y-1.5">
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-blue-600 transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="hover:text-blue-600 transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition-colors"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                Dreamstofly USA
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-blue-600 transition-colors"
              >
                Sitemap
              </Link>
            </li>
          </ul>

          <h4 className="font-bold text-gray-900 mt-5 mb-3">Calculators</h4>
          <ul className="space-y-1.5">
            {[
              "CGPA to GPA Conversion",
              "PTE to IELTS Conversion",
              "ACT to SAT Score",
              "GMAT Conversion",
              "SGPA to CGPA Conversion",
              "SGPA to Percentage Conversion",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Courses Column */}
        <div>
          <h4 className="font-bold text-gray-900 mb-3">Popular Courses</h4>
          <ul className="space-y-1.5">
            {[
              "Masters Programs",
              "MS in Computer Science",
              "MEM Abroad",
              "MBA Abroad",
              "MIM Abroad",
              "MS in Civil Engineering",
              "MS in Finance",
              "View All Courses",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <h4 className="font-bold text-gray-900 mt-5 mb-3">
            Bachelors Programs
          </h4>
          <ul className="space-y-1.5">
            {[
              "BBA Abroad",
              "Business Analytics",
              "Computer Engineering",
              "BA English Abroad",
              "View All Courses",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
>>>>>>> a1c0cf687bac9b4a4838fa83ac06415152e1e079

        {/* Tools & Services Column */}
        <div>
          <h4 className="font-bold text-gray-900 mb-3">Tools & Services</h4>
          <ul className="space-y-1.5">
            {[
              "Blogs",
              "Grad School Finder",
              "Course & College Finder",
              "Loan Finder",
              "GRE Prep",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>

<<<<<<< HEAD
            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-300 text-sm">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-50 h-10" />
                </div>
=======
          <h4 className="font-bold text-gray-900 mt-5 mb-3">Our Partners</h4>
          <ul className="space-y-1.5">
            {["Amberstudent", "Coursera", "Geebee"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
>>>>>>> a1c0cf687bac9b4a4838fa83ac06415152e1e079

          <h4 className="font-bold text-gray-900 mt-5 mb-3">Our Products</h4>
          <ul className="space-y-1.5">
            {["Dreamstofly", "Services"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-bold text-gray-900 mb-3">Quick Links</h4>
          <ul className="space-y-1.5">
            {[
              "Connect with Ambassadors",
              "Study Abroad Intakes",
              "Study Abroad Consultation",
              "GRE",
              "SOP & LORs",
              "Masters Abroad",
              "Accommodation",
              "Coaching",
              "Student Visa",
              "IELTS Coaching",
              "GMAT",
              "MS Abroad",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social + Policies Column */}
        <div>
          <h4 className="font-bold text-gray-900 mb-3">Contact</h4>
          <div className="text-gray-600 text-sm leading-snug space-y-1">
            <p className="font-medium text-gray-600">
              Email: support@dreamstofly.com
            </p>
            <p className="text-gray-600">
              Dreamstofly, Nahata Sport Complex, Sinhagad Road,
            </p>
            <p className="text-gray-600">Vadgaon, Maharashtra – 411041</p>
          </div>

          {/* Policies */}
          <div className="flex flex-col mt-3 space-y-1">
            {["Disclaimer", "Refund Policy", "Employee Login"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-blue-600 text-sm text-gray-600"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2 text-gray-600 mt-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:bg-gray-200 transition p-2 rounded-full border border-gray-300"
                >
                  <Icon size={14} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-300 text-sm">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-30 h-10" />
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center md:text-left">
          © 2025 Dreams to Fly Web Pvt. Ltd. All Rights Reserved
        </p>

        {/* App Buttons */}
        <div className="flex gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-8"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-8"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/logo.png";

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

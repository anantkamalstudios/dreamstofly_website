// import React from 'react'

// function Connect() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-64 h-40 bg-white rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
//         {/* Animated text */}
//         <h2 className="text-xl font-bold text-gray-700 animate-bounce">
//           Coming Soon 🚀
//         </h2>

//         {/* Optional shimmer background */}
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse opacity-30"></div>
//       </div>
//     </div>
//   )
// }

// export default Connect

import React, { useState } from "react";
import BookingModal from "./BookingModal.jsx"; // Import the modal component
import { motion } from "framer-motion";

const Connect = () => {
  const [selectedDegree, setSelectedDegree] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [studyYear, setStudyYear] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [filters, setFilters] = useState({
    course: "",
    university: "",
    country: "",
    experience: "",
  });

  const experts = [
    {
      id: 1,
      name: "Diksha Chajjed",
      status: "Offline",
      university: "Coventry University",
      rate: "₹7/Min",
      type: "Current Student",
      languages: ["English", "Hindi"],
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      course: "business",
      universityKey: "coventry",
      country: "uk",
      experience: "1",
    },
    {
      id: 2,
      name: "Keshav Kunthe",
      status: "Offline",
      university: "University of Oxford",
      rate: "₹30/Min",
      type: "Alumni",
      languages: ["English"],
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      course: "arts",
      universityKey: "oxford",
      country: "uk",
      experience: "2",
    },
    {
      id: 3,
      name: "Nikita Chavan",
      status: "Offline",
      university: "Imperial College London",
      rate: "₹15/Min",
      type: "Current Student",
      languages: ["English", "Marathi"],
      rating: 4.3,
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      course: "engineering",
      universityKey: "imperial",
      country: "uk",
      experience: "1",
    },
    {
      id: 4,
      name: "Neel Bendre",
      status: "Offline",
      university: "Cranfield University",
      rate: "₹11/Min",
      type: "Alumni",
      languages: ["English", "Hindi", "Marathi"],
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      course: "engineering",
      universityKey: "cranfield",
      country: "uk",
      experience: "2",
    },
    {
      id: 5,
      name: "Astha Khurana",
      status: "Offline",
      university: "University of Cambridge",
      rate: "₹13/Min",
      type: "Current Student",
      languages: ["English", "Hindi"],
      rating: 4.6,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      course: "medicine",
      universityKey: "cambridge",
      country: "uk",
      experience: "1",
    },
  ];

  // handle filter change
  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  // filter experts dynamically
  const filteredExperts = experts.filter((expert) => {
    return (
      (filters.course === "" || expert.course === filters.course) &&
      (filters.university === "" ||
        expert.universityKey === filters.university) &&
      (filters.country === "" || expert.country === filters.country) &&
      (filters.experience === "" || expert.experience === filters.experience)
    );
  });

  const handleCallClick = (expert) => {
    setSelectedExpert(expert);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEmail("");
    setPhone("");
    setSelectedDegree("");
    setStudyYear("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#0073df] mb-3">
            Book Your 1-on-1 Call with Experts
          </h1>
          <p className="text-gray-600 text-lg">
            Get guidance on process, documents, scholarships & roadmap to study
            abroad
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/4 bg-white p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Filters
            </h2>

            {/* Course */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073df] focus:border-transparent"
                value={filters.course}
                onChange={(e) => handleFilterChange("course", e.target.value)}
              >
                <option value="">All Courses</option>
                <option value="engineering">Engineering</option>
                <option value="business">Business</option>
                <option value="medicine">Medicine</option>
                <option value="arts">Arts</option>
              </select>
            </div>

            {/* University */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073df] focus:border-transparent"
                value={filters.university}
                onChange={(e) =>
                  handleFilterChange("university", e.target.value)
                }
              >
                <option value="">All Universities</option>
                <option value="cambridge">University of Cambridge</option>
                <option value="oxford">University of Oxford</option>
                <option value="imperial">Imperial College London</option>
                <option value="cranfield">Cranfield University</option>
                <option value="coventry">Coventry University</option>
              </select>
            </div>

            {/* Country */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073df] focus:border-transparent"
                value={filters.country}
                onChange={(e) => handleFilterChange("country", e.target.value)}
              >
                <option value="">All Countries</option>
                <option value="uk">United Kingdom</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="germany">Germany</option>
              </select>
            </div>

            {/* Experience */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073df] focus:border-transparent"
                value={filters.experience}
                onChange={(e) =>
                  handleFilterChange("experience", e.target.value)
                }
              >
                <option value="">All</option>
                <option value="1">Current Student</option>
                <option value="2">Alumni</option>
                <option value="3">1-2 Years Experience</option>
                <option value="4">3+ Years Experience</option>
              </select>
            </div>
          </motion.div>

          {/* Experts List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/4"
          >
            {filteredExperts.length === 0 ? (
              <p className="text-center text-gray-500">
                No experts found matching your filters.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredExperts.map((expert) => (
                  <motion.div
                    key={expert.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="p-5">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={expert.image}
                          alt={expert.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-[#0073df]"
                        />
                        <div className="flex-1">
                          <h2 className="text-lg font-semibold text-gray-800">
                            {expert.name}
                          </h2>
                          <p className="text-sm text-gray-500">
                            {expert.university}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            expert.status === "Online"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {expert.status}
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-[#0073df] font-bold mr-2">
                            {expert.rate}
                          </span>
                          • {expert.type}
                        </div>
                        <p className="text-gray-500 text-sm mt-1">
                          {expert.languages.join(", ")}
                        </p>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(expert.rating)
                                  ? "fill-current"
                                  : "text-gray-300"
                              }`}
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-gray-600 text-sm">
                          ({expert.rating})
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-3">
                        <button
                          className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                          onClick={() => handleCallClick(expert)}
                        >
                          Chat
                        </button>
                        <button
                          className="flex-1 bg-[#0073df] text-white py-2 rounded-lg font-medium hover:bg-[#0063c5] transition-colors"
                          onClick={() => handleCallClick(expert)}
                        >
                          Call
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <BookingModal
          expert={selectedExpert}
          onClose={handleCloseModal}
          initialEmail={email}
          initialPhone={phone}
          initialDegree={selectedDegree}
          initialStudyYear={studyYear}
        />
      )}
    </div>
  );
};

export default Connect;

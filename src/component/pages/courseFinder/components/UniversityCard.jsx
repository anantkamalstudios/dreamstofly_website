import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapPin } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const UniversityCard = ({ course }) => {
  const navigate = useNavigate();

  const handleViewUniversity = () => {
    const slug = course.slug || course.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/university/${slug}`);
  };

  const handleViewCourse = () => {
    const slug = course.slug || course.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/course/${slug}`);
  };
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
      {/* TOP SECTION */}
      <div className="flex items-start gap-5 pb-5">
        {/* Logo */}
        <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
          <img src={course.logo} alt="" className="w-20 h-20 object-contain" />
        </div>

        {/* Title + Location */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            {course.title}
          </h2>

          <div className="flex items-start gap-2 text-gray-700">
            <MapPin className="w-5 h-5 text-blue-600 mt-1" />
            <div className="text-sm leading-relaxed">
              <p className="font-medium">{course.campus}</p>
              <p className="text-gray-600">{course.city}</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3">
        <FontAwesomeIcon icon={faTrophy} className="text-blue-600" />

        <span className="text-blue-700 text-sm font-medium">
          QS World University Rankings: #={course.ranking}
        </span>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={handleViewUniversity}
          className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
        >
          View University
        </button>

        <button
          onClick={handleViewCourse}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Course
        </button>
      </div>
    </div>
  );
};

export default UniversityCard;

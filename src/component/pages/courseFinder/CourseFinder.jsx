import React, { useState } from "react";
import { ChevronDown, Search, MapPin } from "lucide-react";
import Header from "./components/Header";
import UniversityCard from "./components/UniversityCard";

const CourseFinder = () => {
  const [expandedFilters, setExpandedFilters] = useState({
    university: true,
    course: true,
    region: false,
    country: false,
    city: false,
    rankings: false,
    duration: false,
    delivery: false,
    tuition: false,
    studyLevel: false,
  });

  const [selectedUniversities, setSelectedUniversities] = useState([3]);
  const [selectedCourses, setSelectedCourses] = useState([3]);

  const toggleFilter = (filter) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const toggleUniversity = (index) => {
    setSelectedUniversities((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleCourse = (index) => {
    setSelectedCourses((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const FilterSection = ({ title, filterKey, children }) => (
    <div className="border border-blue-600 mb-3">
      <button
        onClick={() => toggleFilter(filterKey)}
        className="w-full flex items-center justify-between p-3 bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm">{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            expandedFilters[filterKey] ? "rotate-180" : ""
          }`}
        />
      </button>
      {expandedFilters[filterKey] && (
        <div className="bg-white border-t border-gray-200">{children}</div>
      )}
    </div>
  );

  const courses = Array(5).fill({
    title: "Clinical Education PGCert",
    campus: "Knowledge Centre Campus (Liverpool City Centre Campus)",
    city: "Liverpool, United Kingdom",
    ranking: 147,
    logo:"/images/courseFinder/courseFinder2.png"
  });

  const HeaderData = {
    title: "Programme Directory Search",
    subtitle: "Explore over 130,000 programmes worldwide and refine the directory to choose the courses that match your interests.",
    rightImage: "/images/courseFinder/courseFinder1.png",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header data={HeaderData} />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Filters */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-none rounded p-4 mb-4">
              <h1 className="text-xl font-bold mb-1">Find Your Match</h1>
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">
                  Found <span className="font-semibold">134115</span> Courses
                </p>
                <button className="text-blue-600 text-sm hover:underline">
                  Set Default
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {/* University Filter */}
              <FilterSection title="University" filterKey="university">
                <div className="p-3">
                  <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search university"
                      className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="max-h-44 overflow-y-auto border border-gray-200 rounded">
                    {[0, 1, 2, 3].map((i) => (
                      <label
                        key={i}
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <input
                          type="checkbox"
                          checked={selectedUniversities.includes(i)}
                          onChange={() => toggleUniversity(i)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                        />
                        <span className="text-sm text-gray-700">
                          Durham University Business School
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </FilterSection>

              {/* Course Filter */}
              <FilterSection title="Course" filterKey="course">
                <div className="p-3">
                  <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search university"
                      className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="max-h-44 overflow-y-auto rounded">
                    {[0, 1, 2, 3].map((i) => (
                      <label
                        key={i}
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCourses.includes(i)}
                          onChange={() => toggleCourse(i)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Accounting and Finance
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </FilterSection>

              {/* Other Collapsed Filters */}
              <FilterSection title="Region" filterKey="region">
                <div className="p-3">
                  <p className="text-sm text-gray-500">Select regions...</p>
                </div>
              </FilterSection>

              <FilterSection title="Country" filterKey="country">
                <div className="p-3">
                  <p className="text-sm text-gray-500">Select countries...</p>
                </div>
              </FilterSection>

              <FilterSection title="City" filterKey="city">
                <div className="p-3">
                  <p className="text-sm text-gray-500">Select cities...</p>
                </div>
              </FilterSection>

              <FilterSection
                title="World University Rankings"
                filterKey="rankings"
              >
                <div className="p-3">
                  <p className="text-sm text-gray-500">
                    Select ranking range...
                  </p>
                </div>
              </FilterSection>

              <FilterSection title="Course Duration" filterKey="duration">
                <div className="p-3">
                  <p className="text-sm text-gray-500">Select duration...</p>
                </div>
              </FilterSection>

              <FilterSection title="Delivery Mode" filterKey="delivery">
                <div className="p-3">
                  <p className="text-sm text-gray-500">
                    Select delivery mode...
                  </p>
                </div>
              </FilterSection>

              <FilterSection title="Tuition Fees" filterKey="tuition">
                <div className="p-3">
                  <p className="text-sm text-gray-500">Select fee range...</p>
                </div>
              </FilterSection>

              <FilterSection title="Study Level" filterKey="studyLevel">
                <div className="p-3">
                  <p className="text-sm text-gray-500">Select study level...</p>
                </div>
              </FilterSection>
            </div>
          </aside>

          {/* Right Section - Course Results */}
          <main className="flex-1 min-w-0">
            <div className="space-y-4">
              {courses.map((course, index) => (
                <UniversityCard key={index} course={course} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CourseFinder;

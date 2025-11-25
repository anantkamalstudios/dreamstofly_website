import React, { useState } from "react";
import SidebarTop from "./components/SidebarTop";
import AsideBar from "./components/AsideBar";
import Header from "./components/Header";
import {
  Award,
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronUp,
  Globe,
  Search,
} from "lucide-react";
import ProgrammeOverview from "./components/ProgramOverview";
import UniversityAbout from "./components/UniversityAbout";

const UniversityDetailPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const [searchQuery, setSearchQuery] = useState("");
  const [expandedProgram, setExpandedProgram] = useState(null);
  const [expandedInfo, setExpandedInfo] = useState(null);

  const programs = [
    {
      id: 1,
      name: "Master",
      courses: ["Computer Science", "Business Administration", "Engineering"],
    },
    {
      id: 2,
      name: "MBA",
      courses: ["Finance", "Marketing", "Human Resources"],
    },
  ];

  const universityInfo = [
    {
      id: 1,
      name: "Admission",
      content: "Admission requirements and process details...",
    },
    { id: 2, name: "Students", content: "Student information and statistics" },
  ];

  const toggleProgram = (id) => {
    setExpandedProgram(expandedProgram === id ? null : id);
  };

  const toggleInfo = (id) => {
    setExpandedInfo(expandedInfo === id ? null : id);
  };

  const detailsTab = [
    { id: "overview", label: "Overview" },
    { id: "programmes", label: "Programmes" },
    { id: "universityInformation", label: "University Information" },
    { id: "costOfLiving", label: "Cost of Living" },
    { id: "scholarships", label: "Scholarships" },
    { id: "employability", label: "Employability" },
  ];
  const headerData = {
    leftLogo: "",
    title: "University of Liverpool",
    subtitle:
      "Knowledge Centre Campus (Liverpool City Centre Campus)) Liverpool, United Kingdom ",
    rightImage: "",
  };

  const SidebarData = [
    { id: 1, firstData: "9 Months", secondData: " Program duration" },
    { id: 2, firstData: "Health/HealthCare", secondData: "Main Subject Area" },
    { id: 3, firstData: "# - 12", secondData: " QS World University Rankings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full ">
        <img
          src="/images/UniversityBanner.png"
          alt=""
          className="w-full object-cover"
        />
      </div>
      <div className="max-w-8xl mx-auto p-4 md:p-6 lg:p-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_3.6fr] gap-6">
          <aside>
            <SidebarTop data={SidebarData} />

            <AsideBar
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              tabs={detailsTab}
            />
          </aside>

          <main className="space-y-10">
            <section id="overview">
              <UniversityAbout />
            </section>

            <section id="programmes">
              <div className=" max-w-4xl mx-auto mb-10">
                <h2 className="text-2xl font-medium text-gray-900 mb-6">
                  Available programmes
                </h2>

                {/* Search Bar */}
                <div className="relative mb-4">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search university Courses"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-[#0073DF] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0073DF] focus:border-transparent"
                  />
                </div>

                {/* Program Dropdowns */}
                {programs.map((program) => (
                  <div key={program.id} className="mb-3">
                    <button
                      onClick={() => toggleProgram(program.id)}
                      className="w-full flex items-center justify-between px-6 py-4 bg-white border-2 border-[#0073DF] rounded-sm hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-[#0073DF] font-normal text-lg">
                        {program.name}
                      </span>
                      {expandedProgram === program.id ? (
                        <ChevronUp className="w-5 h-5 text-[#0073DF]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#0073DF]" />
                      )}
                    </button>

                    {expandedProgram === program.id && (
                      <div className="mt-2 p-4 bg-white border-2 border-gray-200 rounded-sm">
                        <ul className="space-y-2">
                          {program.courses.map((course, index) => (
                            <li key={index} className="text-gray-700 pl-4">
                              • {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section id="universityInformation">
              <div className="mb-10 max-w-4xl mx-auto">
                <h2 className="text-2xl font-medium text-gray-900 mb-6">
                  University information
                </h2>

                {universityInfo.map((info) => (
                  <div key={info.id} className="mb-3">
                    <button
                      onClick={() => toggleInfo(info.id)}
                      className="w-full flex items-center justify-between px-6 py-4 bg-white border-2 border-[#0073DF] rounded-sm hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-[#0073DF] font-medium text-lg">
                        {info.name}
                      </span>
                      {expandedInfo === info.id ? (
                        <ChevronUp className="w-5 h-5 text-[#0073DF]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#0073DF]" />
                      )}
                    </button>

                    {expandedInfo === info.id && info.id === 2 && (
                      <div className="mt-2 p-6 bg-white rounded-lg shadow-sm">
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0073DF]">
                          <p className="text-gray-600 text-sm mb-2">
                            Total students
                          </p>
                          <p className="text-[#0073DF] text-3xl font-normal">
                            26,793
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Videos & Media Section */}
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-medium text-gray-900 mb-6">
                  Videos & media
                </h2>
                <div className="bg-white p-8 rounded-lg border-2 border-gray-200 text-center text-gray-400">
                  <p>No videos available</p>
                </div>
              </div>
            </section>
            {/* 
            <section id="costOfLiving">
              <p>Cost of Living</p>
            </section>

            <section id="scholarships">
              <p>Scholarships</p>
            </section>

            <section id="employability">
              <p>Employability</p>
            </section> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default UniversityDetailPage;

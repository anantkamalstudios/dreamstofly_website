// import React, { useState, useEffect } from "react";
// import {
//   Search,
//   MapPin,
//   Star,
//   ExternalLink,
//   Heart,
//   BookOpen,
//   GraduationCap,
//   Users,
//   DollarSign,
//   Clock,
//   Filter,
//   SortDesc,
// } from "lucide-react";

// const CourseFinder = () => {
//   const [filters, setFilters] = useState({
//     studyLevel: "",
//     fieldOfStudy: "",
//     countries: [],
//     gpa: "",
//     budget: "",
//     ielts: "",
//     gre: "",
//     gmat: "",
//   });

//   const [colleges, setColleges] = useState([]);
//   const [filteredColleges, setFilteredColleges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sortBy, setSortBy] = useState("relevance");
//   const [favorites, setFavorites] = useState([]);

//   // Sample college data
//   const sampleColleges = [
//     {
//       id: 1,
//       name: "Stanford University",
//       location: "California, USA",
//       country: "usa",
//       logo: "SU",
//       ranking: 2,
//       acceptance: "4.3%",
//       tuition: "$56,169",
//       students: "17,249",
//       rating: 4.9,
//       category: "ambitious",
//       programs: ["Computer Science", "Engineering", "Business"],
//       tags: ["Top Ranked", "Research University", "Silicon Valley"],
//       requirements: {
//         gpa: "3.8+",
//         ielts: "7.0+",
//         gre: "320+",
//         gmat: "N/A",
//       },
//     },
//     {
//       id: 2,
//       name: "University of Toronto",
//       location: "Toronto, Canada",
//       country: "canada",
//       logo: "UT",
//       ranking: 25,
//       acceptance: "43%",
//       tuition: "CAD 58,160",
//       students: "97,000",
//       rating: 4.6,
//       category: "moderate",
//       programs: ["Engineering", "Medicine", "Arts"],
//       tags: ["Public University", "Diverse Programs", "Research Intensive"],
//       requirements: {
//         gpa: "3.3+",
//         ielts: "6.5+",
//         gre: "310+",
//         gmat: "600+",
//       },
//     },
//     {
//       id: 3,
//       name: "University of Melbourne",
//       location: "Melbourne, Australia",
//       country: "australia",
//       logo: "UM",
//       ranking: 33,
//       acceptance: "70%",
//       tuition: "AUD 45,824",
//       students: "51,000",
//       rating: 4.4,
//       category: "safe",
//       programs: ["Business", "Arts", "Science"],
//       tags: ["Go8 University", "City Campus", "International Focus"],
//       requirements: {
//         gpa: "3.0+",
//         ielts: "6.5+",
//         gre: "300+",
//         gmat: "550+",
//       },
//     },
//     {
//       id: 4,
//       name: "Imperial College London",
//       location: "London, UK",
//       country: "uk",
//       logo: "ICL",
//       ranking: 6,
//       acceptance: "14.3%",
//       tuition: "£34,000",
//       students: "19,000",
//       rating: 4.7,
//       category: "ambitious",
//       programs: ["Engineering", "Medicine", "Natural Sciences"],
//       tags: ["Russell Group", "STEM Focus", "London"],
//       requirements: {
//         gpa: "3.7+",
//         ielts: "7.0+",
//         gre: "315+",
//         gmat: "N/A",
//       },
//     },
//     {
//       id: 5,
//       name: "Technical University of Munich",
//       location: "Munich, Germany",
//       country: "germany",
//       logo: "TUM",
//       ranking: 50,
//       acceptance: "8%",
//       tuition: "€150",
//       students: "45,000",
//       rating: 4.5,
//       category: "moderate",
//       programs: ["Engineering", "Computer Science", "Natural Sciences"],
//       tags: ["TU9 University", "Low Tuition", "Industry Connections"],
//       requirements: {
//         gpa: "3.5+",
//         ielts: "6.5+",
//         gre: "305+",
//         gmat: "N/A",
//       },
//     },
//     {
//       id: 6,
//       name: "Arizona State University",
//       location: "Arizona, USA",
//       country: "usa",
//       logo: "ASU",
//       ranking: 103,
//       acceptance: "88%",
//       tuition: "$29,428",
//       students: "80,000",
//       rating: 4.2,
//       category: "safe",
//       programs: ["Business", "Engineering", "Liberal Arts"],
//       tags: ["Large University", "Online Programs", "Innovation"],
//       requirements: {
//         gpa: "3.0+",
//         ielts: "6.0+",
//         gre: "295+",
//         gmat: "500+",
//       },
//     },
//   ];

//   useEffect(() => {
//     // Simulate API call
//     setTimeout(() => {
//       setColleges(sampleColleges);
//       setFilteredColleges(sampleColleges);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   useEffect(() => {
//     filterColleges();
//   }, [filters, colleges]);

//   const filterColleges = () => {
//     let filtered = [...colleges];

//     if (filters.studyLevel) {

//     }

//     if (filters.fieldOfStudy) {
//       filtered = filtered.filter((college) =>
//         college.programs.some((program) =>
//           program.toLowerCase().includes(filters.fieldOfStudy.toLowerCase())
//         )
//       );
//     }

//     if (filters.countries.length > 0) {
//       filtered = filtered.filter((college) =>
//         filters.countries.includes(college.country)
//       );
//     }

//     setFilteredColleges(filtered);
//   };

//   const handleFilterChange = (key, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const handleCountryChange = (country, checked) => {
//     setFilters((prev) => ({
//       ...prev,
//       countries: checked
//         ? [...prev.countries, country]
//         : prev.countries.filter((c) => c !== country),
//     }));
//   };

//   const toggleFavorite = (collegeId) => {
//     setFavorites((prev) =>
//       prev.includes(collegeId)
//         ? prev.filter((id) => id !== collegeId)
//         : [...prev, collegeId]
//     );
//   };

//   const getCategoryColor = (category) => {
//     switch (category) {
//       case "ambitious":
//         return "bg-gray-500";
//       case "moderate":
//         return "bg-gray-500";
//       case "safe":
//         return "bg-gray-500";
//       default:
//         return "bg-blue-500";
//     }
//   };

//   const getCategoryText = (category) => {
//     switch (category) {
//       case "ambitious":
//         return "Ambitious";
//       case "moderate":
//         return "Moderate";
//       case "safe":
//         return "Safe";
//       default:
//         return "Match";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-gradient-to-r from-blue-900 to-blue-400 text-white py-12">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Cource Finder</h1>
//           <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
//             Discover your perfect university match from thousands of colleges
//             worldwide
//           </p>
//         </div>
//       </header>

//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Filter Sidebar */}
//           <aside className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
//               <div className="flex items-center gap-2 mb-6">
//                 <Filter className="w-5 h-5 text-blue-600" />
//                 <h2 className="text-xl font-bold text-gray-800">
//                   Find Your Match
//                 </h2>
//               </div>

//               {/* Study Level */}
//               <div className="mb-6">
//                 <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
//                   <GraduationCap className="w-4 h-4" />
//                   Study Level
//                 </h4>
//                 <select
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0073df] focus:outline-none transition-colors"
//                   value={filters.studyLevel}
//                   onChange={(e) =>
//                     handleFilterChange("studyLevel", e.target.value)
//                   }
//                 >
//                   <option value="">Select Study Level</option>
//                   <option value="bachelors">Bachelor's Degree</option>
//                   <option value="masters">Master's Degree</option>
//                   <option value="phd">PhD</option>
//                   <option value="diploma">Diploma</option>
//                 </select>
//               </div>

//               {/* Field of Study */}
//               <div className="mb-6">
//                 <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
//                   <BookOpen className="w-4 h-4" />
//                   Field of Study
//                 </h4>
//                 <select
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0073df] focus:outline-none transition-colors"
//                   value={filters.fieldOfStudy}
//                   onChange={(e) =>
//                     handleFilterChange("fieldOfStudy", e.target.value)
//                   }
//                 >
//                   <option value="">Select Field</option>
//                   <option value="engineering">Engineering</option>
//                   <option value="business">Business & Management</option>
//                   <option value="computer-science">Computer Science</option>
//                   <option value="medicine">Medicine</option>
//                   <option value="arts">Arts & Humanities</option>
//                   <option value="science">Natural Sciences</option>
//                   <option value="social-science">Social Sciences</option>
//                 </select>
//               </div>

//               {/* Countries */}
//               <div className="mb-6">
//                 <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
//                   <MapPin className="w-4 h-4" />
//                   Preferred Countries
//                 </h4>
//                 <div className="space-y-2">
//                   {[
//                     { value: "usa", label: "United States" },
//                     { value: "canada", label: "Canada" },
//                     { value: "uk", label: "United Kingdom" },
//                     { value: "australia", label: "Australia" },
//                     { value: "germany", label: "Germany" },
//                   ].map((country) => (
//                     <label
//                       key={country.value}
//                       className="flex items-center gap-2 cursor-pointer"
//                     >
//                       <input
//                         type="checkbox"
//                         className="w-4 h-4 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
//                         checked={filters.countries.includes(country.value)}
//                         onChange={(e) =>
//                           handleCountryChange(country.value, e.target.checked)
//                         }
//                       />
//                       <span className="text-sm text-gray-600">
//                         {country.label}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Academic Scores */}
//               <div className="mb-6">
//                 <h4 className="font-semibold text-gray-700 mb-3">
//                   Academic Scores
//                 </h4>
//                 <div className="space-y-3">
//                   <div>
//                     <label className="block text-sm text-gray-600 mb-1">
//                       GPA (out of 4.0)
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="3.5"
//                       className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm"
//                       value={filters.gpa}
//                       onChange={(e) =>
//                         handleFilterChange("gpa", e.target.value)
//                       }
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600 mb-1">
//                       IELTS Score
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="7.0"
//                       className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm"
//                       value={filters.ielts}
//                       onChange={(e) =>
//                         handleFilterChange("ielts", e.target.value)
//                       }
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600 mb-1">
//                       GRE Score
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="320"
//                       className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm"
//                       value={filters.gre}
//                       onChange={(e) =>
//                         handleFilterChange("gre", e.target.value)
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Search Button */}
//               <button className="w-full bg-[#0073df]  text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
//                 <Search className="w-4 h-4" />
//                 Find Colleges
//               </button>

//               <button className="w-full mt-3 bg-[#0073df] text-white border-2 border-#08dceb-600 py-2 px-4 rounded-lg font-medium hover:bg-purple-50 transition-colors">
//                 Reset Filters
//               </button>
//             </div>
//           </aside>

//           {/* Results Section */}
//           <main className="lg:col-span-3">
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               {/* Results Header */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-gray-200">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">
//                     {loading
//                       ? "Loading..."
//                       : `${filteredColleges.length} Colleges Found`}
//                   </h2>
//                   <p className="text-gray-600 text-sm mt-1">
//                     Based on your preferences and profile
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 mt-4 md:mt-0">
//                   <SortDesc className="w-4 h-4 text-gray-500" />
//                   <select
//                     className="p-2 border border-gray-300 rounded-lg focus:border-#08dceb-500 focus:outline-none text-sm"
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                   >
//                     <option value="relevance">Sort by Relevance</option>
//                     <option value="ranking">Sort by Ranking</option>
//                     <option value="acceptance">Sort by Acceptance Rate</option>
//                     <option value="tuition">Sort by Tuition</option>
//                   </select>
//                 </div>
//               </div>

//               {/* College Results */}
//               {loading ? (
//                 <div className="text-center py-12">
//                   <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-#08dceb-600 mx-auto"></div>
//                   <p className="text-gray-600 mt-4">
//                     Finding perfect matches for you...
//                   </p>
//                 </div>
//               ) : filteredColleges.length === 0 ? (
//                 <div className="text-center py-12">
//                   <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     No colleges found
//                   </h3>
//                   <p className="text-gray-600">
//                     Try adjusting your filters to find more options
//                   </p>
//                 </div>
//               ) : (
//                 <div className="space-y-6">
//                   {filteredColleges.map((college) => (
//                     <div
//                       key={college.id}
//                       className="relative border-2 border-gray-200 rounded-xl p-6 hover:border-#08dceb-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//                     >
//                       {/* Recommendation Badge */}
//                       <div
//                         className={`absolute -top-2 -right-2 ${getCategoryColor(
//                           college.category
//                         )} text-white px-3 py-1 rounded-full text-xs font-semibold`}
//                       >
//                         {getCategoryText(college.category)}
//                       </div>

//                       {/* College Header */}
//                       <div className="flex flex-col md:flex-row justify-between items-start mb-4">
//                         <div className="flex items-start gap-4 flex-1">
//                           <div className="w-16 h-16 bg-#08dceb-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
//                             {college.logo}
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <h3 className="text-xl font-bold text-gray-800 mb-2">
//                               {college.name}
//                             </h3>
//                             <div className="flex items-center text-gray-600 mb-2">
//                               <MapPin className="w-4 h-4 mr-1" />
//                               <span className="text-sm">
//                                 {college.location}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-4 text-sm text-gray-600">
//                               <div className="flex items-center">
//                                 <Star className="w-4 h-4 text-yellow-500 mr-1" />
//                                 <span>{college.rating}/5</span>
//                               </div>
//                               <div>World Rank #{college.ranking}</div>
//                             </div>
//                           </div>
//                         </div>
//                         <button
//                           onClick={() => toggleFavorite(college.id)}
//                           className={`p-2 rounded-full transition-colors ${
//                             favorites.includes(college.id)
//                               ? "bg-red-100 text-red-600 hover:bg-red-200"
//                               : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                           }`}
//                         >
//                           <Heart
//                             className={`w-5 h-5 ${
//                               favorites.includes(college.id)
//                                 ? "fill-current"
//                                 : ""
//                             }`}
//                           />
//                         </button>
//                       </div>

//                       {/* College Stats */}
//                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
//                         <div className="bg-gray-50 rounded-lg p-3 text-center">
//                           <div className="font-bold text-gray-800">
//                             {college.acceptance}
//                           </div>
//                           <div className="text-xs text-gray-600 mt-1">
//                             Acceptance Rate
//                           </div>
//                         </div>
//                         <div className="bg-gray-50 rounded-lg p-3 text-center">
//                           <div className="font-bold text-gray-800">
//                             {college.tuition}
//                           </div>
//                           <div className="text-xs text-gray-600 mt-1">
//                             Annual Tuition
//                           </div>
//                         </div>
//                         <div className="bg-gray-50 rounded-lg p-3 text-center">
//                           <div className="font-bold text-gray-800">
//                             {college.students}
//                           </div>
//                           <div className="text-xs text-gray-600 mt-1">
//                             Students
//                           </div>
//                         </div>
//                         <div className="bg-gray-50 rounded-lg p-3 text-center">
//                           <div className="font-bold text-gray-800">
//                             {college.requirements.gpa}
//                           </div>
//                           <div className="text-xs text-gray-600 mt-1">
//                             Min GPA
//                           </div>
//                         </div>
//                       </div>

//                       {/* Programs */}
//                       <div className="mb-4">
//                         <div className="text-sm text-gray-600 mb-2">
//                           Popular Programs:
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                           {college.programs.map((program, index) => (
//                             <span
//                               key={index}
//                               className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
//                             >
//                               {program}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Tags */}
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {college.tags.map((tag, index) => (
//                           <span
//                             key={index}
//                             className="bg-gradient-to-r from-#08dceb-400 to-#08dceb-600 text-white px-3 py-1 rounded-full text-xs font-medium"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>

//                       {/* Actions */}
//                       <div className="flex flex-col sm:flex-row gap-3">
//                         <button className="flex-1 bg-[#0073df] text-white py-2 px-4 rounded-lg font-medium hover:from-#08dceb-400 hover:to-#08dceb-700 transition-all flex items-center justify-center gap-2">
//                           <ExternalLink className="w-4 h-4" />
//                           View Details
//                         </button>
//                         <button className="flex-1 bg-white text-#08dceb-600 border-2 border-#08dceb-600 py-2 px-4 rounded-lg font-medium  hover:text-white  hover:bg-blue-500 transition-colors">
//                           Compare
//                         </button>
//                         <button className="flex-1 bg-blue-300 text-#08dceb-600-white border-2 border-blue-300 py-2 px-4 rounded-lg font-medium hover:text-white  hover:bg-blue-500 transition-colors">
//                           Apply Now
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseFinder;

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
    <div className="border border-gray-300 rounded mb-3">
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
  });

  const HeaderData = {
    title: "Course Finder",
    subtitle: "Find the right course for you",
    rightImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=400&fit=crop&auto=format",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header data={HeaderData} />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Filters */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white rounded p-4 mb-4 shadow-sm">
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

            <div className="space-y-0">
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
                  <div className="max-h-44 overflow-y-auto border border-gray-200 rounded">
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

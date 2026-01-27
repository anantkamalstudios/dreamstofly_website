// import React, { useState } from "react";
// import { ChevronDown, Search, MapPin } from "lucide-react";
// import Header from "./components/Header";
// import UniversityCard from "./components/UniversityCard";
// import FilterSection from "./components/FilterSection";
// import {
//   courses,
//   HeaderData,
//   universities,
//   CITY_LIST,
//   REGION_LIST,
//   COUNTRY_LIST,
//   RANKING_RANGE_LIST,
//   DURATION_LIST,
//   STUDY_LEVEL_LIST,
//   TUITION_RANGE_LIST,
// } from "./components/CourseData";

// const CourseFinder = () => {
//   // States for selected filters
//   const [selectedUniversities, setSelectedUniversities] = useState([]);
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [selectedCities, setSelectedCities] = useState([]);
//   const [selectedRegions, setSelectedRegions] = useState([]);
//   const [selectedCountries, setSelectedCountries] = useState([]);
//   const [selectedRankings, setSelectedRankings] = useState([]);
//   const [selectedDurations, setSelectedDurations] = useState([]);
//   const [selectedStudyLevels, setSelectedStudyLevels] = useState([]);
//   const [selectedTuitionRanges, setSelectedTuitionRanges] = useState([]);

//   // States for search inputs
//   const [searchText, setSearchText] = useState({
//     university: "",
//     course: "",
//     city: "",
//     region: "",
//     country: "",
//     ranking: "",
//     duration: "",
//     studyLevel: "",
//     tuition: "",
//   });

//   // Toggle selection for any filter
//   const toggleSelection = (setter, value) => {
//     setter((prev) =>
//       prev.includes(value)
//         ? prev.filter((item) => item !== value)
//         : [...prev, value]
//     );
//   };

//   // Handle search input changes
//   const handleSearchChange = (filterKey, value) => {
//     setSearchText((prev) => ({
//       ...prev,
//       [filterKey]: value,
//     }));
//   };

//   // Filter options based on search text
//   const getFilteredOptions = (options, filterKey) => {
//     const searchTerm = searchText[filterKey]?.toLowerCase() || "";
//     if (!searchTerm) return options;
//     return options.filter((option) =>
//       option.label.toLowerCase().includes(searchTerm)
//     );
//   };

//   // Filter courses based on selected filters
//   const filteredCourses = courses.filter((course) => {
//     // University filter
//     if (
//       selectedUniversities.length > 0 &&
//       !selectedUniversities.includes(course.universityId)
//     ) {
//       return false;
//     }

//     // Course filter
//     if (selectedCourses.length > 0 && !selectedCourses.includes(course.id)) {
//       return false;
//     }

//     // City filter
//     if (
//       selectedCities.length > 0 &&
//       !selectedCities.some(
//         (cityId) =>
//           CITY_LIST.find((c) => c.id === cityId)?.label === course.city
//       )
//     ) {
//       return false;
//     }

//     // Country filter
//     if (
//       selectedCountries.length > 0 &&
//       !selectedCountries.some(
//         (countryId) =>
//           COUNTRY_LIST.find((c) => c.id === countryId)?.label === course.country
//       )
//     ) {
//       return false;
//     }

//     // Region filter
//     if (
//       selectedRegions.length > 0 &&
//       !selectedRegions.some(
//         (regionId) =>
//           REGION_LIST.find((r) => r.id === regionId)?.label === course.region
//       )
//     ) {
//       return false;
//     }

//     // Duration filter
//     if (
//       selectedDurations.length > 0 &&
//       !selectedDurations.some(
//         (durationId) =>
//           DURATION_LIST.find((d) => d.id === durationId)?.label ===
//           course.duration
//       )
//     ) {
//       return false;
//     }

//     // Study level filter
//     if (
//       selectedStudyLevels.length > 0 &&
//       !selectedStudyLevels.some(
//         (levelId) =>
//           STUDY_LEVEL_LIST.find((l) => l.id === levelId)?.label ===
//           course.studyLevel
//       )
//     ) {
//       return false;
//     }

//     // Tuition range filter
//     if (selectedTuitionRanges.length > 0) {
//       const tuitionRange = TUITION_RANGE_LIST.find((t) =>
//         selectedTuitionRanges.includes(t.id)
//       );
//       if (tuitionRange) {
//         const tuition = parseFloat(course.tuition);
//         if (tuition < tuitionRange.min || tuition > tuitionRange.max) {
//           return false;
//         }
//       }
//     }

//     // Ranking filter
//     if (selectedRankings.length > 0) {
//       const rankingRanges = selectedRankings.map((rankId) => {
//         const rank = RANKING_RANGE_LIST.find((r) => r.id === rankId);
//         return rank ? parseInt(rank.label.replace(/\D/g, "")) : 0;
//       });

//       const courseRanking = course.ranking || 1000;
//       if (!rankingRanges.some((rank) => courseRanking <= rank)) {
//         return false;
//       }
//     }

//     return true;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header data={HeaderData} />
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Left Sidebar - Filters */}
//           <aside className="w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-6 lg:self-start lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto">
//             <div className="bg-none rounded p-4 mb-4">
//               <h1 className="text-xl font-bold mb-1">Find Your Match</h1>
//               <div className="flex items-center justify-between">
//                 <p className="text-gray-600 text-sm">
//                   Found{" "}
//                   <span className="font-semibold">
//                     {filteredCourses.length}
//                   </span>{" "}
//                   Courses
//                 </p>
//                 <button
//                   className="text-blue-600 text-sm hover:underline"
//                   onClick={() => {
//                     setSelectedUniversities([]);
//                     setSelectedCourses([]);
//                     setSelectedCities([]);
//                     setSelectedRegions([]);
//                     setSelectedCountries([]);
//                     setSelectedRankings([]);
//                     setSelectedDurations([]);
//                     setSelectedStudyLevels([]);
//                     setSelectedTuitionRanges([]);
//                     setSearchText({
//                       university: "",
//                       course: "",
//                       city: "",
//                       region: "",
//                       country: "",
//                       ranking: "",
//                       duration: "",
//                       studyLevel: "",
//                       tuition: "",
//                     });
//                   }}
//                 >
//                   Clear All
//                 </button>
//               </div>
//             </div>

//             <div className="space-y-3">
//               <FilterSection
//                 title="University"
//                 options={getFilteredOptions(universities, "university")}
//                 selected={selectedUniversities}
//                 onToggle={(value) =>
//                   toggleSelection(setSelectedUniversities, value)
//                 }
//                 searchable={true}
//                 searchValue={searchText.university}
//                 onSearchChange={(value) =>
//                   handleSearchChange("university", value)
//                 }
//               />

//               <FilterSection
//                 title="Course"
//                 options={getFilteredOptions(
//                   courses.map((c) => ({ id: c.id, label: c.title })),
//                   "course"
//                 )}
//                 selected={selectedCourses}
//                 onToggle={(value) => toggleSelection(setSelectedCourses, value)}
//                 searchable={true}
//                 searchValue={searchText.course}
//                 onSearchChange={(value) => handleSearchChange("course", value)}
//               />

//               <FilterSection
//                 title="City"
//                 options={getFilteredOptions(CITY_LIST, "city")}
//                 selected={selectedCities}
//                 onToggle={(value) => toggleSelection(setSelectedCities, value)}
//                 searchable={true}
//                 searchValue={searchText.city}
//                 onSearchChange={(value) => handleSearchChange("city", value)}
//               />

//               <FilterSection
//                 title="Country"
//                 options={getFilteredOptions(COUNTRY_LIST, "country")}
//                 selected={selectedCountries}
//                 onToggle={(value) =>
//                   toggleSelection(setSelectedCountries, value)
//                 }
//                 searchable={true}
//                 searchValue={searchText.country}
//                 onSearchChange={(value) => handleSearchChange("country", value)}
//               />

//               <FilterSection
//                 title="Region"
//                 options={getFilteredOptions(REGION_LIST, "region")}
//                 selected={selectedRegions}
//                 onToggle={(value) => toggleSelection(setSelectedRegions, value)}
//                 searchable={true}
//                 searchValue={searchText.region}
//                 onSearchChange={(value) => handleSearchChange("region", value)}
//               />

//               <FilterSection
//                 title="Ranking Range"
//                 options={RANKING_RANGE_LIST}
//                 selected={selectedRankings}
//                 onToggle={(value) =>
//                   toggleSelection(setSelectedRankings, value)
//                 }
//                 searchable={true}
//                 searchValue={searchText.ranking}
//                 onSearchChange={(value) => handleSearchChange("ranking", value)}
//               />

//               <FilterSection
//                 title="Duration"
//                 options={DURATION_LIST}
//                 selected={selectedDurations}
//                 onToggle={(value) =>
//                   toggleSelection(setSelectedDurations, value)
//                 }
//                 searchable={true}
//                 searchValue={searchText.duration}
//                 onSearchChange={(value) =>
//                   handleSearchChange("duration", value)
//                 }
//               />

//               <FilterSection
//                 title="Study Level"
//                 options={STUDY_LEVEL_LIST}
//                 selected={selectedStudyLevels}
//                 onToggle={(value) =>
//                   toggleSelection(setSelectedStudyLevels, value)
//                 }
//                 searchable={true}
//                 searchValue={searchText.studyLevel}
//                 onSearchChange={(value) =>
//                   handleSearchChange("studyLevel", value)
//                 }
//               />

//               <FilterSection
//                 title="Tuition Range"
//                 options={TUITION_RANGE_LIST}
//                 selected={selectedTuitionRanges}
//                 onToggle={(value) =>
//                   toggleSelection(setSelectedTuitionRanges, value)
//                 }
//                 searchable={true}
//                 searchValue={searchText.tuition}
//                 onSearchChange={(value) => handleSearchChange("tuition", value)}
//               />
//             </div>
//           </aside>

//           <main className="flex-1 min-w-0">
//             {filteredCourses.length > 0 ? (
//               <div className="space-y-4">
//                 {filteredCourses.map((course, index) => (
//                   <UniversityCard key={index} course={course} />
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-10">
//                 <p className="text-gray-500">
//                   No courses match your selected filters.
//                 </p>
//               </div>
//             )}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseFinder;
import React, { useState, useEffect } from "react";
import { ChevronDown, Search, MapPin, Filter, X } from "lucide-react";
import Header from "./components/Header";
import UniversityCard from "./components/UniversityCard";
import FilterSection from "./components/FilterSection";
import {
  courses,
  HeaderData,
  universities,
  CITY_LIST,
  REGION_LIST,
  COUNTRY_LIST,
  RANKING_RANGE_LIST,
  DURATION_LIST,
  STUDY_LEVEL_LIST,
  TUITION_RANGE_LIST,
} from "./components/CourseData";

const CourseFinder = () => {
  // State for bottom sheet
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [sheetHeight, setSheetHeight] = useState("partial"); // 'partial' or 'full'

  // States for selected filters
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedRankings, setSelectedRankings] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedStudyLevels, setSelectedStudyLevels] = useState([]);
  const [selectedTuitionRanges, setSelectedTuitionRanges] = useState([]);

  // States for search inputs
  const [searchText, setSearchText] = useState({
    university: "",
    course: "",
    city: "",
    region: "",
    country: "",
    ranking: "",
    duration: "",
    studyLevel: "",
    tuition: "",
  });

  // Prevent body scroll when bottom sheet is open
  useEffect(() => {
    if (isBottomSheetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBottomSheetOpen]);

  // Toggle selection for any filter
  const toggleSelection = (setter, value) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Handle search input changes
  const handleSearchChange = (filterKey, value) => {
    setSearchText((prev) => ({
      ...prev,
      [filterKey]: value,
    }));
  };

  // Filter options based on search text
  const getFilteredOptions = (options, filterKey) => {
    const searchTerm = searchText[filterKey]?.toLowerCase() || "";
    if (!searchTerm) return options;
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm)
    );
  };

  // Count total active filters
  const totalActiveFilters =
    selectedUniversities.length +
    selectedCourses.length +
    selectedCities.length +
    selectedRegions.length +
    selectedCountries.length +
    selectedRankings.length +
    selectedDurations.length +
    selectedStudyLevels.length +
    selectedTuitionRanges.length;

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedUniversities([]);
    setSelectedCourses([]);
    setSelectedCities([]);
    setSelectedRegions([]);
    setSelectedCountries([]);
    setSelectedRankings([]);
    setSelectedDurations([]);
    setSelectedStudyLevels([]);
    setSelectedTuitionRanges([]);
    setSearchText({
      university: "",
      course: "",
      city: "",
      region: "",
      country: "",
      ranking: "",
      duration: "",
      studyLevel: "",
      tuition: "",
    });
  };

  // Filter courses based on selected filters
  const filteredCourses = courses.filter((course) => {
    if (
      selectedUniversities.length > 0 &&
      !selectedUniversities.includes(course.universityId)
    ) {
      return false;
    }

    if (selectedCourses.length > 0 && !selectedCourses.includes(course.id)) {
      return false;
    }

    if (
      selectedCities.length > 0 &&
      !selectedCities.some(
        (cityId) =>
          CITY_LIST.find((c) => c.id === cityId)?.label === course.city
      )
    ) {
      return false;
    }

    if (
      selectedCountries.length > 0 &&
      !selectedCountries.some(
        (countryId) =>
          COUNTRY_LIST.find((c) => c.id === countryId)?.label === course.country
      )
    ) {
      return false;
    }

    if (
      selectedRegions.length > 0 &&
      !selectedRegions.some(
        (regionId) =>
          REGION_LIST.find((r) => r.id === regionId)?.label === course.region
      )
    ) {
      return false;
    }

    if (
      selectedDurations.length > 0 &&
      !selectedDurations.some(
        (durationId) =>
          DURATION_LIST.find((d) => d.id === durationId)?.label ===
          course.duration
      )
    ) {
      return false;
    }

    if (
      selectedStudyLevels.length > 0 &&
      !selectedStudyLevels.some(
        (levelId) =>
          STUDY_LEVEL_LIST.find((l) => l.id === levelId)?.label ===
          course.studyLevel
      )
    ) {
      return false;
    }

    if (selectedTuitionRanges.length > 0) {
      const tuitionRange = TUITION_RANGE_LIST.find((t) =>
        selectedTuitionRanges.includes(t.id)
      );
      if (tuitionRange) {
        const tuition = parseFloat(course.tuition);
        if (tuition < tuitionRange.min || tuition > tuitionRange.max) {
          return false;
        }
      }
    }

    if (selectedRankings.length > 0) {
      const rankingRanges = selectedRankings.map((rankId) => {
        const rank = RANKING_RANGE_LIST.find((r) => r.id === rankId);
        return rank ? parseInt(rank.label.replace(/\D/g, "")) : 0;
      });

      const courseRanking = course.ranking || 1000;
      if (!rankingRanges.some((rank) => courseRanking <= rank)) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header data={HeaderData} />
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsBottomSheetOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg z-40 flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Filter size={20} />
          <span className="font-semibold">Filters</span>
          {totalActiveFilters > 0 && (
            <span className="bg-white text-blue-600 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {totalActiveFilters}
            </span>
          )}
        </button>

        {/* Overlay */}
        {isBottomSheetOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity"
            onClick={() => setIsBottomSheetOpen(false)}
          />
        )}

        {/* Bottom Sheet */}
        <div
          className={`
            fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50
            transform transition-transform duration-300 ease-out
            lg:hidden
            ${isBottomSheetOpen ? "translate-y-0" : "translate-y-full"}
            ${sheetHeight === "full" ? "h-[90vh]" : "h-[70vh]"}
          `}
        >
          {/* Drag Handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
          </div>

          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-5 py-4 z-10">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold">Filters</h2>
              <button
                onClick={() => setIsBottomSheetOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">{filteredCourses.length}</span>{" "}
                courses found
              </p>
              {totalActiveFilters > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Clear All ({totalActiveFilters})
                </button>
              )}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto h-[calc(100%-140px)] px-5 py-4">
            <div className="space-y-3 pb-4">
              <FilterSection
                title="University"
                options={getFilteredOptions(universities, "university")}
                selected={selectedUniversities}
                onToggle={(value) =>
                  toggleSelection(setSelectedUniversities, value)
                }
                searchable={true}
                searchValue={searchText.university}
                onSearchChange={(value) =>
                  handleSearchChange("university", value)
                }
              />

              <FilterSection
                title="Course"
                options={getFilteredOptions(
                  courses.map((c) => ({ id: c.id, label: c.title })),
                  "course"
                )}
                selected={selectedCourses}
                onToggle={(value) => toggleSelection(setSelectedCourses, value)}
                searchable={true}
                searchValue={searchText.course}
                onSearchChange={(value) => handleSearchChange("course", value)}
              />

              <FilterSection
                title="City"
                options={getFilteredOptions(CITY_LIST, "city")}
                selected={selectedCities}
                onToggle={(value) => toggleSelection(setSelectedCities, value)}
                searchable={true}
                searchValue={searchText.city}
                onSearchChange={(value) => handleSearchChange("city", value)}
              />

              <FilterSection
                title="Country"
                options={getFilteredOptions(COUNTRY_LIST, "country")}
                selected={selectedCountries}
                onToggle={(value) =>
                  toggleSelection(setSelectedCountries, value)
                }
                searchable={true}
                searchValue={searchText.country}
                onSearchChange={(value) => handleSearchChange("country", value)}
              />

              <FilterSection
                title="Region"
                options={getFilteredOptions(REGION_LIST, "region")}
                selected={selectedRegions}
                onToggle={(value) => toggleSelection(setSelectedRegions, value)}
                searchable={true}
                searchValue={searchText.region}
                onSearchChange={(value) => handleSearchChange("region", value)}
              />

              <FilterSection
                title="Ranking Range"
                options={RANKING_RANGE_LIST}
                selected={selectedRankings}
                onToggle={(value) =>
                  toggleSelection(setSelectedRankings, value)
                }
                searchable={true}
                searchValue={searchText.ranking}
                onSearchChange={(value) => handleSearchChange("ranking", value)}
              />

              <FilterSection
                title="Duration"
                options={DURATION_LIST}
                selected={selectedDurations}
                onToggle={(value) =>
                  toggleSelection(setSelectedDurations, value)
                }
                searchable={true}
                searchValue={searchText.duration}
                onSearchChange={(value) =>
                  handleSearchChange("duration", value)
                }
              />

              <FilterSection
                title="Study Level"
                options={STUDY_LEVEL_LIST}
                selected={selectedStudyLevels}
                onToggle={(value) =>
                  toggleSelection(setSelectedStudyLevels, value)
                }
                searchable={true}
                searchValue={searchText.studyLevel}
                onSearchChange={(value) =>
                  handleSearchChange("studyLevel", value)
                }
              />

              <FilterSection
                title="Tuition Range"
                options={TUITION_RANGE_LIST}
                selected={selectedTuitionRanges}
                onToggle={(value) =>
                  toggleSelection(setSelectedTuitionRanges, value)
                }
                searchable={true}
                searchValue={searchText.tuition}
                onSearchChange={(value) => handleSearchChange("tuition", value)}
              />
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 px-5 py-4 flex gap-3">
            <button
              onClick={clearAllFilters}
              className="flex-1 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={() => setIsBottomSheetOpen(false)}
              className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Desktop & Mobile Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar - Filters */}
          <aside className="hidden lg:block w-80 flex-shrink-0 sticky top-6 self-start max-h-[calc(100vh-3rem)] overflow-y-auto">
            <div className="bg-none rounded p-4 mb-4">
              <h1 className="text-xl font-bold mb-1">Find Your Match</h1>
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">
                  Found{" "}
                  <span className="font-semibold">
                    {filteredCourses.length}
                  </span>{" "}
                  Courses
                </p>
                <button
                  className="text-blue-600 text-sm hover:underline"
                  onClick={clearAllFilters}
                >
                  Clear All
                </button>
              </div>
            </div>

            <div className="space-y-3 pb-6">
              <FilterSection
                title="University"
                options={getFilteredOptions(universities, "university")}
                selected={selectedUniversities}
                onToggle={(value) =>
                  toggleSelection(setSelectedUniversities, value)
                }
                searchable={true}
                searchValue={searchText.university}
                onSearchChange={(value) =>
                  handleSearchChange("university", value)
                }
              />

              <FilterSection
                title="Course"
                options={getFilteredOptions(
                  courses.map((c) => ({ id: c.id, label: c.title })),
                  "course"
                )}
                selected={selectedCourses}
                onToggle={(value) => toggleSelection(setSelectedCourses, value)}
                searchable={true}
                searchValue={searchText.course}
                onSearchChange={(value) => handleSearchChange("course", value)}
              />

              <FilterSection
                title="City"
                options={getFilteredOptions(CITY_LIST, "city")}
                selected={selectedCities}
                onToggle={(value) => toggleSelection(setSelectedCities, value)}
                searchable={true}
                searchValue={searchText.city}
                onSearchChange={(value) => handleSearchChange("city", value)}
              />

              <FilterSection
                title="Country"
                options={getFilteredOptions(COUNTRY_LIST, "country")}
                selected={selectedCountries}
                onToggle={(value) =>
                  toggleSelection(setSelectedCountries, value)
                }
                searchable={true}
                searchValue={searchText.country}
                onSearchChange={(value) => handleSearchChange("country", value)}
              />

              <FilterSection
                title="Region"
                options={getFilteredOptions(REGION_LIST, "region")}
                selected={selectedRegions}
                onToggle={(value) => toggleSelection(setSelectedRegions, value)}
                searchable={true}
                searchValue={searchText.region}
                onSearchChange={(value) => handleSearchChange("region", value)}
              />

              <FilterSection
                title="Ranking Range"
                options={RANKING_RANGE_LIST}
                selected={selectedRankings}
                onToggle={(value) =>
                  toggleSelection(setSelectedRankings, value)
                }
                searchable={true}
                searchValue={searchText.ranking}
                onSearchChange={(value) => handleSearchChange("ranking", value)}
              />

              <FilterSection
                title="Duration"
                options={DURATION_LIST}
                selected={selectedDurations}
                onToggle={(value) =>
                  toggleSelection(setSelectedDurations, value)
                }
                searchable={true}
                searchValue={searchText.duration}
                onSearchChange={(value) =>
                  handleSearchChange("duration", value)
                }
              />

              <FilterSection
                title="Study Level"
                options={STUDY_LEVEL_LIST}
                selected={selectedStudyLevels}
                onToggle={(value) =>
                  toggleSelection(setSelectedStudyLevels, value)
                }
                searchable={true}
                searchValue={searchText.studyLevel}
                onSearchChange={(value) =>
                  handleSearchChange("studyLevel", value)
                }
              />

              <FilterSection
                title="Tuition Range"
                options={TUITION_RANGE_LIST}
                selected={selectedTuitionRanges}
                onToggle={(value) =>
                  toggleSelection(setSelectedTuitionRanges, value)
                }
                searchable={true}
                searchValue={searchText.tuition}
                onSearchChange={(value) => handleSearchChange("tuition", value)}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {filteredCourses.length > 0 ? (
              <div className="space-y-4">
                {filteredCourses.map((course, index) => (
                  <UniversityCard key={index} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">
                  No courses match your selected filters.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default CourseFinder;

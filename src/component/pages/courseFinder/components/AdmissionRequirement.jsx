import { ChevronDown } from "lucide-react";
import { useState } from "react";

const AdmissionRequirements = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 lg:p-8 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
        Admission Requirements
      </h2>

      <div className="space-y-4">
        <button
          onClick={() => toggleSection("exam")}
          className="w-full border-2 border-blue-500 rounded-lg p-4 md:p-5 text-left hover:bg-blue-50 transition-colors"
        >
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-medium text-base md:text-lg">
              Exam Scores
            </span>
            <ChevronDown
              className={`w-5 h-5 md:w-6 md:h-6 text-blue-600 transition-transform ${
                openSection === "exam" ? "rotate-180" : ""
              }`}
            />
          </div>
          {openSection === "exam" && (
            <div className="mt-4 text-sm md:text-base text-gray-700">
              <p>Exam score requirements will be displayed here.</p>
            </div>
          )}
        </button>

        <button
          onClick={() => toggleSection("dates")}
          className="w-full border-2 border-blue-500 rounded-lg p-4 md:p-5 text-left hover:bg-blue-50 transition-colors"
        >
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-medium text-base md:text-lg">
              Important Dates
            </span>
            <ChevronDown
              className={`w-5 h-5 md:w-6 md:h-6 text-blue-600 transition-transform ${
                openSection === "dates" ? "rotate-180" : ""
              }`}
            />
          </div>
          {openSection === "dates" && (
            <div className="mt-4 text-sm md:text-base text-gray-700">
              <p>Important dates will be displayed here.</p>
            </div>
          )}
        </button>
      </div>

      <div className="mt-8 bg-gray-50 p-4 md:p-6 rounded-lg">
        <h3 className="text-sm md:text-base text-gray-600 mb-2">
          Program Duration
        </h3>
        <p className="text-blue-500 font-semibold text-base md:text-lg">
          9 Months
        </p>
      </div>
    </div>
  );
};

export default AdmissionRequirements;

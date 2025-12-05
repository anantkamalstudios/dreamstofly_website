import React, { useState } from "react";
import GuideSection from "./components/GuideSection";

const ACTToSATConversion = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarItems = [
    "How to Convert CGPA to GPA?",
    "What is GPA?",
    "What is CGPA?",
    "How to Convert CGPA to Percentage?",
    "What is the Difference Between GPA and CGPA?",
    "How to Convert GPA to CGPA?",
    "How to Convert 10 Point CGPA to 4 Point GPA for European Universities?",
    "Frequently Asked Questions about CGPA to GPA Conversion Calculator",
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-vollkorn">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-start mb-4">
          ACT To SAT Conversion
        </h1>

        <p className="text-base sm:text-lg text-gray-600 text-start mb-8 sm:mb-12 max-w-4xl">
          ACT to SAT Score Conversion Chart 2024
        </p>
      </div>

      <GuideSection
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarItems={sidebarItems}
      />
    </div>
  );
};

export default ACTToSATConversion;

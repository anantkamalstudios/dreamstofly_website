import React from "react";

const NavigationTabs = ({ activeSection, setActiveSection }) => {
  return (
    <div className="md:hidden bg-white border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-8 overflow-x-auto">
          {["calculator", "guide", "faq"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeSection === section
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {section === "calculator" && "Calculator"}
              {section === "guide" && "Conversion Guide"}
              {section === "faq" && "FAQ"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;

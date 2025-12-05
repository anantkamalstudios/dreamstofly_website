import React from "react";
import GREtoGMAT from "./components/GREToGMAT";

const GMTPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-vollkorn">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-start mb-4">
          GMAT Conversion
        </h1>

        <p className="text-base sm:text-lg text-gray-600 text-start mb-8 sm:mb-12 max-w-4xl">
          GRE to GMAT Score Conversion Calculator: Formula & Conversion Chart
        </p>
        <GREtoGMAT />
      </div>

      {/* <GuideSection
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarItems={sidebarItems}
      /> */}
    </div>
  );
};

export default GMTPage;

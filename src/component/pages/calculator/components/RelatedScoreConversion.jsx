import React from "react";
import { useNavigate } from "react-router-dom";

const RelatedScoreConversion = ({ relatedServices }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12 py-6 md:py-10 max-w-6xl mx-auto">
        <h1 className=" text-lg md:text-2xl lg:text-3xl text-center font-semibold mb-6">
          Related Score Conversion Calculators
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedServices.map((item, index) => (
            <div
              key={index}
              className="bg-[#F2F7F7] text-center py-8 border rounded-lg text-sm md:text-base hover:shadow-md transition cursor-pointer"
              onClick={() => navigate(item.slug)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedScoreConversion;

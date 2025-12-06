import React from "react";
import { MapPin, UserCheck, ThumbsUp, Workflow } from "lucide-react";

const TravelPartnersFeatures = ({ features }) => {
  return (
    <div className="w-full bg-blue-50  py-16 px-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-start hover:shadow-xl transition-shadow duration-300 min-h-[220px]"
          >
            <div className="mb-10 w-16">
              <img src={feature.icon} alt="" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 leading-tight text-start">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPartnersFeatures;

import React from "react";
import { MapPin, UserCheck, ThumbsUp, Workflow } from "lucide-react";
import Heading from "../../../../common/Heading";

const TravelPartnersFeatures = ({ title, features }) => {
  return (
    <div className="w-full bg-blue-50  py-16 px-10 ">
      {/* <h1 className="mb-2 font-semibold text-2xl ml-10">{title}</h1> */}
      <Heading text={title} className={"mb-4 ml-10"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12 lg:px-20">
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

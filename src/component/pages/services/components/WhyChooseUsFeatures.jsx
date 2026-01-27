import React from "react";
import { Laptop, Hand, Headphones } from "lucide-react";
import Heading from "../../../../common/Heading";

const WhyChooseUsFeatures = ({ features }) => {
  return (
    <div className="w-full bg-gray-50 py-10 px-4 ">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-28">
        <Heading text="Why choose us" className="text-center mb-8 sm:mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white px-8 py-4 flex flex-col items-center text-center border border-gray-200 rounded-lg transform-gpu transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-8 w-24 h-24 sm:w-28 sm:h-28">
                <img src={feature.icon} alt="" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-6">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsFeatures;

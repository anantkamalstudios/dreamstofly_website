import React from "react";
import { Laptop, Hand, Headphones } from "lucide-react";

const WhyChooseUs = ({ features }) => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-start text-gray-900 mb-16">
          Why choose us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 flex flex-col items-start text-center rounded-lg"
            >
              <div className="mb-8 w-12 h-12 sm:w-16 sm:h-16">
                <img src={feature.icon} alt="" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-6">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

import React from "react";
import { FileText, CreditCard, Upload, MapPin } from "lucide-react";

const HowItWorksPage = ({ steps }) => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto bg-[#fcfcfc] p-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            It's about you and your family, having a comfortable payment,
            exceptional service and a lender.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-5">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start">
              {/* Icon with background */}
              <div className="bg-blue-50 rounded-full p-6 mb-6">
                <img src={step.icon} alt="" className="w-20" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;

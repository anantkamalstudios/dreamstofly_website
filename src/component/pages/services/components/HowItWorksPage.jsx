import React from "react";
import { FileText, CreditCard, Upload, MapPin } from "lucide-react";

const HowItWorksPage = ({ steps }) => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-16">
      <div className="bg-[#fcfcfc] p-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-gray-600 text-lg w-full sm:max-w-3xl mx-auto">
            It's about you and your family, having a comfortable payment,
            exceptional service and a lender.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-5">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start justify-start">
              <div className="mx-2 sm:mx-6 w-28 sm:w-32">
                <img
                  src={step.icon}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;

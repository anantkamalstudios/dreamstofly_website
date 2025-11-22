//HowItWorksPage

import React from "react";
import { FileText, CreditCard, Upload, MapPin } from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: <FileText className="w-16 h-16 text-blue-600" />,
      title: "Fill in the details",
      description:
        "Provide all the necessary information. Our visa expert will contact you for a consultant session.",
    },
    {
      icon: <CreditCard className="w-16 h-16 text-blue-600" />,
      title: "Initiate payment & upload documents",
      description:
        "Make the payment for the service and upload all the required documents to begin the visa application process.",
    },
    {
      icon: <MapPin className="w-16 h-16 text-blue-600" />,
      title: "Track application",
      description:
        "Get credentials to track your visa application status and get step-by-step guidance from our visa expert throughout the visa process.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            It's about you and your family, having a comfortable payment,
            exceptional service and a lender.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start">
              {/* Icon with background */}
              <div className="bg-blue-50 rounded-full p-6 mb-6">
                {step.icon}
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

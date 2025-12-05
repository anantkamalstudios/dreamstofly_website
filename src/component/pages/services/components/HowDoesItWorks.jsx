import React from "react";
import { Rocket, Lightbulb, CheckCircle, UserCheck } from "lucide-react";
import Heading from "../../../../common/Heading";

function HowDoesItWork() {
  const steps = [
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Request For Change",
      description:
        "Fill in your details with a nominal fees and submit your request",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Replacement Guarantee",
      description: "The expert will help you find a replacement within 60 days",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Smooth Process",
      description:
        "Once the room replacement formalities are finished, the property will refund the remainder of the tenancy amount.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-white" />,
      title: "Expert Assistance",
      description: "A dedicated accommodation expert will be assigned to you",
    },
  ];

  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading
          text="How Does It Work"
          className="text-center mb-16 uppercase tracking-wide"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Steps List */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-20 bg-gray-300 mx-auto mt-4"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="order-first lg:order-last">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=1000&fit=crop"
                alt="Modern living room interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowDoesItWork;

import React from "react";
import {
  Star,
  Globe,
  Truck,
  Award,
  Scale,
  DollarSign,
  Gift,
  BadgeCheck,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "/images/services/whychooseus2.png",
      title: "UNMATCHED EXPERTISE",
      description:
        "An expert eye to catch what others miss across your entire visa application drafting and submission process.",
    },
    {
      icon: "/images/services/whychooseus1.png",
      title: "A GLOBAL NETWORK",
      description: "A global network spanning 35 countries.",
    },
    {
      icon: "/images/services/whychooseus4.png",
      title: "VAST EXPERIENCE",
      description: "Extensive experience on major student study corridors.",
    },
    {
      icon: "/images/services/whychooseus3.png",
      title: "HIGH SUCCESS RATE",
      description:
        "Thousands of student visa applications successfully processed.",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Why Choose Us?
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <img src={feature.icon} alt="" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
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

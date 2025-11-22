import React from "react";
import { GraduationCap, Search, ArrowRight } from "lucide-react";

const RelatedServicesPage = () => {
  const services = [
    {
      icon: <GraduationCap className="w-16 h-16 text-blue-600" />,
      title: "Accommodation",
      description:
        "Find the perfect home, close to university and close to life",
      link: "EXPLORE MORE",
    },
    {
      icon: <Search className="w-16 h-16 text-blue-600" />,
      title: "International Money Transfer",
      description: "Transfer funds for tuition & accommodation with uttar ease",
      link: "EXPLORE MORE",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Related Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Divider */}
              <div className="w-full h-px bg-gray-300 mb-4"></div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Blue underline accent */}
              <div className="w-12 h-1 bg-blue-600 mb-6"></div>

              {/* Button */}
              <button className="flex items-center gap-2 text-blue-600 font-semibold border-2 border-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300">
                {service.link}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedServicesPage;

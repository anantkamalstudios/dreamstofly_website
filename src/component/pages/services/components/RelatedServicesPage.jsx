import React from "react";
import { GraduationCap, Search, ArrowRight } from "lucide-react";

const RelatedServicesPage = () => {
  const services = [
    {
      icon: "/images/services/services1.png",
      title: "Accommodation",
      description:
        "Find the perfect home, close to university and close to life",
      link: "EXPLORE MORE",
      bgColor: "bg-[#F9CB27]",
    },
    {
      icon: "/images/services/services2.png",
      title: "International Money Transfer",
      description: "Transfer funds for tuition & accommodation with uttar ease",
      link: "EXPLORE MORE",
      bgColor: "bg-[#3485FF]",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-medium text-center text-gray-900 mb-12">
          Related Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 md:mb-6 h-12 md:h-16 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt=""
                  className="h-12 md:h-16 object-contain"
                />
              </div>
              <div className="h-16 md:h-20 flex items-center justify-center mb-3 md:mb-4">
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 px-2">
                  {service.title}
                </h3>
              </div>
              <div className="w-full h-px bg-gray-300 mb-3 md:mb-4"></div>
              <div className="w-full mb-4 md:mb-6">
                <div className="h-20 md:h-24 px-2">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed text-start mb-2">
                    {service.description}
                  </p>
                  <div
                    className={`"w-24 md:w-32 h-1.5 md:h-2" ${service.bgColor}`}
                  ></div>
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 text-[#193F64] font-medium border-2 border-[#0073DF] px-4 md:px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300 w-full md:w-3/4 text-sm md:text-base">
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

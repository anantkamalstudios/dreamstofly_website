import React from "react";
import { ArrowRight, Banknote, Wallet, Shield } from "lucide-react";

function RelatedServices() {
  const services = [
    {
      title: "International Money Transfer",
      description: "Transfer funds for tuition & accommodation with utter ease",
      bgColor: "bg-cyan-500",
      icon: <Banknote className="w-16 h-16 text-white" />,
    },
    {
      title: "Room Essential",
      description:
        "Purchase, sell, and transfer international currency from anywhere",
      bgColor: "bg-cyan-100",
      icon: <Wallet className="w-16 h-16 text-yellow-500" />,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
        Related Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Icon */}
              <div
                className={`${service.bgColor} rounded-2xl w-32 h-32 flex items-center justify-center flex-shrink-0`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors">
                    <Shield className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedServices;

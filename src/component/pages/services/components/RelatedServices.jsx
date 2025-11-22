import React from "react";
import {
  ArrowRight,
  Banknote,
  Wallet,
  Shield,
  ArrowUpRight,
} from "lucide-react";

function RelatedServices() {
  const services = [
    {
      title: "International Money Transfer",
      description: "Transfer funds for tuition & accommodation with utter ease",
      bgColor: "bg-cyan-500",
      image: "/images/services/relatedServices1.jpg",
      img: "/images/services/shield.png",
    },
    {
      title: "Room Essential",
      description:
        "Purchase, sell, and transfer international currency from anywhere",
      bgColor: "bg-cyan-100",
      image: "/images/services/relatedServices2.jpg",
      img: "/images/services/location.png",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-normal text-center text-gray-900 mb-12">
        Related Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border border-gray-200"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="rounded-2xl w-52 h-52 flex items-center justify-center flex-shrink-0">
                <img
                  src={service.image}
                  alt=""
                  className="w-full object-cover rounded-2xl"
                />
              </div>
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="flex gap-4 mt-auto justify-between">
                  <button className="w-12 h-12 rounded-xl border-2 border-[#0073DF] flex items-center justify-center">
                    <ArrowUpRight className="w-7 h-7 text-[#0073DF]" />
                  </button>
                  <button className="w-12 flex items-center justify-center">
                    <img
                      src={service.img}
                      alt="shild icon"
                      className="w-full"
                    />
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

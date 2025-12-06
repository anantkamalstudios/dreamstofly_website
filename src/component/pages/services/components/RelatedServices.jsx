import React from "react";
import {
  ArrowRight,
  Banknote,
  Wallet,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import InternationalMoneyTransfer from "../../../../assets/services/18.svg";
import AirportPickup from "../../../../assets/services/11.svg";

function RelatedServices() {
  const services = [
    {
      title: "International Money Transfer",
      description: "Transfer funds for tuition & accommodation with utter ease",
      bgColor: "bg-cyan-500",
      image: InternationalMoneyTransfer,
    },
    {
      title: "Airport Pickup",
      description: "book a safe & comfy ride to and from the airport",
      bgColor: "bg-cyan-500",
      image: AirportPickup,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      {/* <h2 className="text-3xl sm:text-4xl font-normal text-center text-gray-900 mb-12">
        Related Services
      </h2> */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white shadow-sm border border-gray-200 p-8 flex flex-col items-center hover:shadow-md transition-all duration-300 cursor-pointer hover:bg-[#193F64] hover:text-white text-gray-900 hover:scale-105"
            onMouseEnter={() => setHoveredCard(null)}
            onMouseLeave={() => setHoveredCard(null)}
            // onClick={() => handleCardClick(service)}
          >
            <div className="w-40 flex items-center justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-full object-cover"
              />
            </div>
            <div className="h-16 flex items-center justify-center mb-2">
              <h3 className="text-xl font-bold text-center px-2">
                {service.title}
              </h3>
            </div>

            <div className="w-full h-px bg-gray-600 mb-2 group-hover:bg-white"></div>

            <div className="w-full mb-6 flex-grow">
              <p className=" text-sm leading-relaxed text-start group-hover:text-white ">
                {service.description}
              </p>
              <div className="w-24 h-1.5 bg-yellow-400"></div>
            </div>
            <button className="border-2 text-[#193F64] border-[#0073DF] px-6 py-2.5 text-sm font-semibold flex items-center gap-2 hover:text-white transition-colors duration-300 uppercase tracking-wide group-hover:bg-white group-hover:text-[#0073DF] group-hover:border-[#193F64] ">
              EXPLORE MORE
              <span className="text-lg">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedServices;

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
      // img: "/images/services/shield.png",
    },
    {
      title: "Airport Pickup",
      description: "book a safe & comfy ride to and from the airport",
      bgColor: "bg-cyan-500",
      image: AirportPickup,
      // img: "/images/services/shield.png",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-normal text-center text-gray-900 mb-12">
        Related Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          // <div
          //   key={index}
          //   className="bg-white rounded-2xl p-6 border border-gray-200"
          // >
          //   <div className="flex flex-col sm:flex-row gap-6">
          //     <div className="rounded-2xl w-52 h-52 flex items-center justify-center flex-shrink-0">
          //       <img
          //         src={service.image}
          //         alt=""
          //         className="w-full object-cover rounded-2xl"
          //       />
          //     </div>
          //     <div className="flex flex-col flex-1 justify-between">
          //       <div>
          //         <h3 className="text-xl font-medium text-gray-900 mb-3">
          //           {service.title}
          //         </h3>
          //         <p className="text-gray-600 text-sm mb-4">
          //           {service.description}
          //         </p>
          //       </div>
          //       <div className="flex gap-4 mt-auto justify-between">
          //         <button className="w-12 h-12 rounded-xl border-2 border-[#0073DF] flex items-center justify-center">
          //           <ArrowUpRight className="w-7 h-7 text-[#0073DF]" />
          //         </button>
          //         {/* <button className="w-12 flex items-center justify-center">
          //           <img
          //             src={service.img}
          //             alt="shild icon"
          //             className="w-full"
          //           />
          //         </button> */}
          //       </div>
          //     </div>
          //   </div>
          // </div>

          <div
            key={index}
            className="group bg-white shadow-sm border border-gray-200 p-8 flex flex-col items-center hover:shadow-md transition-all duration-300 cursor-pointer hover:bg-[#193F64] hover:text-white text-gray-900"
            onMouseEnter={() => setHoveredCard(null)}
            onMouseLeave={() => setHoveredCard(null)}
            // onClick={() => handleCardClick(service)}
          >
            {/* Fixed height icon container */}
            <div className="w-40 flex items-center justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-full object-cover"
              />
            </div>

            {/* Fixed height title container */}
            <div className="h-16 flex items-center justify-center mb-2">
              <h3 className="text-xl font-bold text-center px-2">
                {service.title}
              </h3>
            </div>

            {/* Horizontal line at fixed position */}
            <div className="w-full h-px bg-gray-600 mb-2 group-hover:bg-white"></div>

            {/* Description and yellow bar container */}
            <div className="w-full mb-6 flex-grow">
              {/* Fixed height description */}
              {/* <div className="h-12 mb-2"> */}
              <p className=" text-sm leading-relaxed text-start group-hover:text-white">
                {service.description}
              </p>
              {/* </div> */}

              {/* Yellow accent bar */}
              <div className="w-24 h-1.5 bg-yellow-400"></div>
            </div>

            {/* Button at bottom */}
            <button className="border-2 text-[#193F64] border-[#0073DF] px-6 py-2.5 text-sm font-semibold flex items-center gap-2 hover:text-white transition-colors duration-300 uppercase tracking-wide group-hover:bg-white group-hover:text-[#0073DF] group-hover:border-[#193F64]">
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

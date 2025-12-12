import React from "react";
import { MapPin, UserCheck, ThumbsUp, Workflow } from "lucide-react";
import Heading from "../../../../common/Heading";

const TravelPartnersFeatures = ({ title, features }) => {
  return (
    // <div className="w-full bg-blue-50  py-16 px-10 ">
    //   {/* <h1 className="mb-2 font-semibold text-2xl ml-10">{title}</h1> */}
    //   <Heading text={title} className={"mb-4 ml-10"} />
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12 lg:px-20">
    //     {features.map((feature, index) => (
    //       <div
    //         key={index}
    //         className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-start hover:shadow-xl transition-shadow duration-300 min-h-[220px]"
    //       >
    //         <div className="mb-10 w-16">
    //           <img src={feature.icon} alt="" />
    //         </div>
    //         <h3 className="text-lg font-medium text-gray-900 leading-tight text-start">
    //           {feature.title}
    //         </h3>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="w-full bg-[linear-gradient(to_top,#beddfa_0%,#beddfa_35%,white_52%,white_60%,white_100%)] py-8 ">
      {/* Header Section */}
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-28">
        <Heading text="Travel Partners Features" className="text-center" />
      </div>

      <div className="w-full mx-auto px-4 sm:px-8 lg:px-28">
        <div className="pt-28 sm:pt-32 lg:pt-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24">
            {features.map((item, index) => (
              <div key={index} className="flex justify-center rounded-md">
                <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none">
                  <div className="relative flex flex-col items-center text-center bg-white shadow-lg rounded-md p-4 pt-20 sm:pt-24 lg:pt-28 min-h-[170px] sm:min-h-[190px] lg:min-h-[200px]">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-[7px] rounded-full bg-gradient-to-t from-[#0073DF] to-[#003E79] z-10">
                      <div className="w-18 h-18 sm:w-24 sm:h-24 lg:w-36 lg:h-36 rounded-full bg-white flex items-center justify-center shadow-md">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-10 h-10 sm:w-14 sm:h-14 lg:w-18 lg:h-18 object-contain"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 px-4 break-words">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPartnersFeatures;

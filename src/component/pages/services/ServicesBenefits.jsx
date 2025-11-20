import React from "react";
import CityImg from "/images/services/whychoose.png";
import { Ticket, PartyPopper, Diamond } from "lucide-react";

const ServicesBenefits = () => {
  const perks = [
    {
      id: 1,
      title: "Ultimate flexibility",
      desc: "You’re in control, with free cancellation and payment.",
      Icon: Ticket,
    },
    {
      id: 2,
      title: "Memorable experiences",
      desc: "Browse and book tours and activities so incredible.",
      Icon: PartyPopper,
    },
    {
      id: 3,
      title: "Quality at our core",
      desc: "High quality standards. Millions of reviews.",
      Icon: Diamond,
    },
  ];

  return (
    // <section className=" py-20 bg-[#F3F7FB]">
    //   <div className="max-w-7xl mx-auto px-6 lg:px-8">
    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    //       {/* Left Image */}
    //       <div className="">
    //         <div className="rounded-3xl overflow-hidden shadow-lg">
    //           <img
    //             src={CityImg}
    //             alt="Why choose us"
    //             className="w-full h-[520px] lg:h-[600px] object-cover"
    //           />
    //         </div>
    //       </div>

    //       {/* Right Content */}
    //       <div className="relative flex flex-col">
    //         <div className=" text-center lg:text-left mb-10 h-[40%]">
    //           <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2454] mb-2">
    //             Why choose Dreams To Fly
    //           </h2>
    //           <p className="text-gray-600 text-base md:text-lg">
    //             Most viewed and all-time top-selling services
    //           </p>
    //         </div>

    //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 absolute -left-20  -bottom-30">
    //           {perks.map(({ id, title, desc, Icon }) => (
    //             <div
    //               key={id}
    //               className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.03]"
    //             >
    //               <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-orange-50 text-orange-500 mb-4">
    //                 <Icon size={28} />
    //               </div>
    //               <h3 className="text-lg font-semibold text-[#0F2454] mb-2">
    //                 {title}
    //               </h3>
    //               <p className="text-sm text-gray-600 leading-relaxed">
    //                 {desc}
    //               </p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-20 bg-[#F3F7FB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={CityImg}
                alt="Why choose us"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="lg:pt-0 pt-10">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-[#0F2454] mb-3">
                Why choose Dreams To Fly
              </h2>
              <p className="text-gray-600 text-lg">
                Most viewed and all-time top-selling services
              </p>
            </div>

            <div className="absolute right-20 flex gap-6">
              {perks.map(({ id, title, desc, Icon }) => (
                <div
                  key={id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 max-w-60"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-orange-50 text-orange-500 mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2454] mb-3">
                    {title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBenefits;

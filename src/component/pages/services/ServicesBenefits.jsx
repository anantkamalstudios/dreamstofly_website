// import React from "react";
// import CityImg from "/images/services/whychoose.png";
// import { Ticket, PartyPopper, Diamond } from "lucide-react";

// const ServicesBenefits = () => {
//   const perks = [
//     {
//       id: 1,
//       title: "Ultimate flexibility",
//       desc: "You’re in control, with free cancellation and payment.",
//       Icon: Ticket,
//     },
//     {
//       id: 2,
//       title: "Memorable experiences",
//       desc: "Browse and book tours and activities so incredible.",
//       Icon: PartyPopper,
//     },
//     {
//       id: 3,
//       title: "Quality at our core",
//       desc: "High quality standards. Millions of reviews.",
//       Icon: Diamond,
//     },
//   ];

//   return (
//     // <section className=" py-20 bg-[#F3F7FB]">
//     //   <div className="max-w-7xl mx-auto px-6 lg:px-8">
//     //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//     //       {/* Left Image */}
//     //       <div className="">
//     //         <div className="rounded-3xl overflow-hidden shadow-lg">
//     //           <img
//     //             src={CityImg}
//     //             alt="Why choose us"
//     //             className="w-full h-[520px] lg:h-[600px] object-cover"
//     //           />
//     //         </div>
//     //       </div>

//     //       {/* Right Content */}
//     //       <div className="relative flex flex-col">
//     //         <div className=" text-center lg:text-left mb-10 h-[40%]">
//     //           <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2454] mb-2">
//     //             Why choose Dreams To Fly
//     //           </h2>
//     //           <p className="text-gray-600 text-base md:text-lg">
//     //             Most viewed and all-time top-selling services
//     //           </p>
//     //         </div>

//     //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 absolute -left-20  -bottom-30">
//     //           {perks.map(({ id, title, desc, Icon }) => (
//     //             <div
//     //               key={id}
//     //               className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.03]"
//     //             >
//     //               <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-orange-50 text-orange-500 mb-4">
//     //                 <Icon size={28} />
//     //               </div>
//     //               <h3 className="text-lg font-semibold text-[#0F2454] mb-2">
//     //                 {title}
//     //               </h3>
//     //               <p className="text-sm text-gray-600 leading-relaxed">
//     //                 {desc}
//     //               </p>
//     //             </div>
//     //           ))}
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>
//     <section className="py-20 bg-[#F3F7FB]">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div className="relative">
//             <div className="rounded-3xl overflow-hidden shadow-lg">
//               <img
//                 src={CityImg}
//                 alt="Why choose us"
//                 className="w-full h-[500px] object-cover"
//               />
//             </div>
//           </div>

//           <div className="lg:pt-0 pt-10">
//             <div className="mb-8">
//               <h2 className="text-4xl font-bold text-[#0F2454] mb-3">
//                 Why choose Dreams To Fly
//               </h2>
//               <p className="text-gray-600 text-lg">
//                 Most viewed and all-time top-selling services
//               </p>
//             </div>

//             <div className="absolute right-20 flex gap-6">
//               {perks.map(({ id, title, desc, Icon }) => (
//                 <div
//                   key={id}
//                   className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 max-w-60"
//                 >
//                   <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-orange-50 text-orange-500 mb-4">
//                     <Icon size={28} />
//                   </div>
//                   <h3 className="text-xl font-bold text-[#0F2454] mb-3">
//                     {title}
//                   </h3>
//                   <p className="text-base text-gray-600 leading-relaxed">
//                     {desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesBenefits;

import React from "react";

export default function ServicesBenefits() {
  return (
    <div className="w-full min-h-fit py-4 md:p-1 flex items-center justify-center my-5 xl:px-10 lg:px-8 px-4">
      <div className="w-full max-w-full relative bg-white ">
        <div
          className="absolute top-0 right-0 h-full rounded-2xl"
          style={{
            width: "65%",
            backgroundColor: "#0073DF",
            opacity: 0.05,
            zIndex: 1,
          }}
        ></div>

        {/* Main Content Grid - Layer 2 */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 py-10 px-6 md:px-12">
          <div className="relative z-10 flex items-center">
            <div className="relative w-[510px] h-[510px] rounded-3xl overflow-hidden">
              <img
                src="/images/Rectangle 24159.png"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <img
                src="/images/image.png"
                alt="girls"
                className="absolute h-full w-full object-contain"
                style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))" }}
              />
            </div>
          </div>

          {/* Right Content Area - Title, Subtitle, Cards - Layer 2 */}
          <div className="relative z-20 flex flex-col justify-center lg:pl-12 rounded-2xl">
            {/* Title and Subtitle */}
            <div className="text-center mb-10 relative -top-20">
              <h2
                className="text-4xl lg:text-3xl font-semibold mb-3 rounded-2xl"
                style={{ color: "#0a1f44" }}
              >
                Why choose Dreams To Fly
              </h2>
              <p className="text-base" style={{ color: "#5a6c7d" }}>
                Most viewed and all-time top-selling services
              </p>
            </div>

            <div className="hidden lg:flex lg:absolute lg:right-0 lg:top-60 gap-6">
              {/* Card 1 - Ultimate flexibility */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow w-[280px]">
                <div className="flex justify-center mb-4 h-16 w-16">
                  <img
                    src="/images/services/ticket.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-lg font-medium mb-2 text-start"
                  style={{ color: "#0a1f44" }}
                >
                  Ultimate flexibility
                </h3>
                <p className="text-sm text-start" style={{ color: "#5a6c7d" }}>
                  You're in control, with free cancellation and payment.
                </p>
              </div>

              {/* Card 2 - Memorable experiences */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow w-[280px]">
                <div className="flex justify-center mb-4 h-16 w-16">
                  <img
                    src="/images/services/hot-air-balloon.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-lg font-medium mb-2 text-start"
                  style={{ color: "#0a1f44" }}
                >
                  Memorable experiences
                </h3>
                <p className="text-sm text-start" style={{ color: "#5a6c7d" }}>
                  Browse and book tours and activities so incredible.
                </p>
              </div>

              {/* Card 3 - Quality at our core */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow w-[280px]">
                <div className="flex justify-center mb-4 h-16 w-16">
                  <img
                    src="/images/services/diamond.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-lg font-medium mb-2 text-start"
                  style={{ color: "#0a1f44" }}
                >
                  Quality at our core
                </h3>
                <p className="text-sm text-start" style={{ color: "#5a6c7d" }}>
                  High quality standards. Millions of reviews.
                </p>
              </div>
            </div>

            <div className="flex lg:hidden flex-col md:flex-row gap-6 mt-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex-1">
                <div className="flex justify-center mb-4">
                  <svg width="65" height="65" viewBox="0 0 65 65" fill="none">
                    <rect
                      x="15"
                      y="25"
                      width="35"
                      height="22"
                      rx="2"
                      stroke="#ff6542"
                      strokeWidth="2.5"
                      fill="none"
                      strokeDasharray="4 4"
                    />
                    <circle cx="25" cy="36" r="4" fill="#ff6542" />
                    <circle cx="40" cy="36" r="4" fill="#ff6542" />
                  </svg>
                </div>
                <h3
                  className="text-lg font-bold mb-2 text-center"
                  style={{ color: "#0a1f44" }}
                >
                  Ultimate flexibility
                </h3>
                <p className="text-sm text-center" style={{ color: "#5a6c7d" }}>
                  You're in control, with free cancellation and payment.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex-1">
                <div className="flex justify-center mb-4">
                  <svg width="65" height="65" viewBox="0 0 65 65" fill="none">
                    <ellipse
                      cx="32.5"
                      cy="22"
                      rx="7"
                      ry="10"
                      stroke="#ff6542"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <path
                      d="M25.5 22L19 40M39.5 22L46 40"
                      stroke="#ff6542"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M19 40C19 40 23 45 32.5 45C42 45 46 40 46 40"
                      stroke="#ff6542"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <rect x="30" y="43" width="5" height="7" fill="#ff6542" />
                  </svg>
                </div>
                <h3
                  className="text-lg font-bold mb-2 text-center"
                  style={{ color: "#0a1f44" }}
                >
                  Memorable experiences
                </h3>
                <p className="text-sm text-center" style={{ color: "#5a6c7d" }}>
                  Browse and book tours and activities so incredible.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex-1">
                <div className="flex justify-center mb-4">
                  <svg width="65" height="65" viewBox="0 0 65 65" fill="none">
                    <path
                      d="M32.5 15L37 27L40 29L34 34L36 45L32.5 40L29 45L31 34L25 29L28 27L32.5 15Z"
                      stroke="#ff6542"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <circle cx="27" cy="24" r="2" fill="#ff6542" />
                    <circle cx="38" cy="24" r="2" fill="#ff6542" />
                  </svg>
                </div>
                <h3
                  className="text-lg font-bold mb-2 text-center"
                  style={{ color: "#0a1f44" }}
                >
                  Quality at our core
                </h3>
                <p className="text-sm text-center" style={{ color: "#5a6c7d" }}>
                  High quality standards. Millions of reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

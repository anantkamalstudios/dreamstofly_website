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
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-6 flex items-center justify-center">
      {/* Outer Blue Border Container */}
      <div
        className="w-full max-w-7xl relative bg-white"
        style={{ border: "3px solid #3da9d5" }}
      >
        {/* Right Light Background Box - Layer 1 (behind everything) */}
        <div
          className="absolute top-0 right-0 h-full rounded-bl-3xl"
          style={{
            width: "70%",
            backgroundColor: "#f6fafd",
            zIndex: 1,
          }}
        ></div>

        {/* Main Content Grid - Layer 2 */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 py-12 px-6 md:px-12">
          {/* Left Illustration Block - Layer 3 (overlaps right section) */}
          <div className="relative z-30 flex items-center">
            <div
              className="w-full max-w-md rounded-3xl relative overflow-hidden"
              style={{
                backgroundColor: "#a3d5f0",
                aspectRatio: "1/1",
                height: "450px",
              }}
            >
              {/* Paper Plane - Top Left */}
              <div className="absolute top-6 left-6">
                <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
                  <path
                    d="M5 20L45 5L25 35L20 20L5 20Z"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <line
                    x1="20"
                    y1="20"
                    x2="10"
                    y2="25"
                    stroke="white"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                </svg>
              </div>

              {/* Sparkle - Top Right */}
              <div className="absolute top-8 right-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L13 11L12 12L11 11L12 2Z" fill="white" />
                  <path d="M22 12L13 13L12 12L13 11L22 12Z" fill="white" />
                  <path d="M12 22L11 13L12 12L13 13L12 22Z" fill="white" />
                  <path d="M2 12L11 11L12 12L11 13L2 12Z" fill="white" />
                </svg>
              </div>

              {/* Large Yellow Circle Container */}
              <div
                className="absolute"
                style={{
                  width: "340px",
                  height: "340px",
                  backgroundColor: "#ffc107",
                  borderRadius: "50%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Small Girl Circle - Bottom Left */}
                <div
                  className="absolute bg-white rounded-full"
                  style={{
                    width: "110px",
                    height: "110px",
                    bottom: "20px",
                    left: "-40px",
                    border: "5px solid white",
                    backgroundColor: "#e8e8e8",
                  }}
                ></div>

                {/* Large Girl Circle - Center */}
                <div
                  className="absolute bg-white rounded-full"
                  style={{
                    width: "170px",
                    height: "170px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "5px solid white",
                    backgroundColor: "#e8e8e8",
                  }}
                ></div>
              </div>

              {/* Exclamation Mark - Top Right of Circle */}
              <div className="absolute" style={{ top: "20%", right: "12%" }}>
                <svg width="30" height="50" viewBox="0 0 30 50" fill="none">
                  <rect
                    x="12"
                    y="5"
                    width="6"
                    height="25"
                    rx="3"
                    fill="white"
                  />
                  <circle cx="15" cy="38" r="4" fill="white" />
                </svg>
              </div>

              {/* Light Bulb - Right Side */}
              <div className="absolute" style={{ top: "42%", right: "8%" }}>
                <svg width="45" height="55" viewBox="0 0 45 55" fill="none">
                  <path
                    d="M22.5 12C17 12 13 16 13 22C13 27 17 30 17 36H28C28 30 32 27 32 22C32 16 28 12 22.5 12Z"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect x="17" y="36" width="11" height="3" fill="white" />
                  <path
                    d="M19 42C19 42 20 44 22.5 44C25 44 26 42 26 42"
                    stroke="white"
                    strokeWidth="2"
                  />
                  {/* Rays */}
                  <circle cx="22.5" cy="6" r="2" fill="#ffc107" />
                  <line
                    x1="22.5"
                    y1="6"
                    x2="22.5"
                    y2="12"
                    stroke="#ffc107"
                    strokeWidth="2"
                  />
                  <line
                    x1="28"
                    y1="10"
                    x2="25"
                    y2="14"
                    stroke="#ffc107"
                    strokeWidth="2"
                  />
                  <line
                    x1="17"
                    y1="10"
                    x2="20"
                    y2="14"
                    stroke="#ffc107"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Sun - Bottom Left */}
              <div className="absolute bottom-10 left-10">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="8" fill="#ffc107" />
                  <line
                    x1="20"
                    y1="4"
                    x2="20"
                    y2="10"
                    stroke="#ffc107"
                    strokeWidth="2"
                  />
                  <line
                    x1="20"
                    y1="30"
                    x2="20"
                    y2="36"
                    stroke="#ffc107"
                    strokeWidth="2"
                  />
                  <line
                    x1="4"
                    y1="20"
                    x2="10"
                    y2="20"
                    stroke="#ffc107"
                    strokeWidth="2"
                  />
                  <line
                    x1="30"
                    y1="20"
                    x2="36"
                    y2="20"
                    stroke="#ffc107"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Puzzle Pieces - Bottom Center */}
              <div className="absolute" style={{ bottom: "18%", left: "38%" }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M10 18H18V10H10V18Z M18 10H26V18H18V10Z M10 26H18V18H10V26Z M18 18H26V26H18V18Z"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Checklist - Bottom Right */}
              <div className="absolute" style={{ bottom: "15%", right: "15%" }}>
                <svg width="35" height="45" viewBox="0 0 35 45" fill="none">
                  <rect
                    x="5"
                    y="5"
                    width="25"
                    height="35"
                    rx="2"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <line
                    x1="10"
                    y1="13"
                    x2="22"
                    y2="13"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="10"
                    y1="19"
                    x2="22"
                    y2="19"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="10"
                    y1="25"
                    x2="22"
                    y2="25"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="10"
                    y1="31"
                    x2="18"
                    y2="31"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              {/* Magnifying Glass - Bottom Right */}
              <div className="absolute" style={{ bottom: "23%", right: "28%" }}>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                  <circle
                    cx="14"
                    cy="14"
                    r="9"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <line
                    x1="20"
                    y1="20"
                    x2="28"
                    y2="28"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Content Area - Title, Subtitle, Cards - Layer 2 */}
          <div className="relative z-20 flex flex-col justify-center lg:pl-12">
            {/* Title and Subtitle */}
            <div className="text-center mb-10">
              <h2
                className="text-4xl lg:text-5xl font-bold mb-3"
                style={{ color: "#0a1f44" }}
              >
                Why choose Dreams To Fly
              </h2>
              <p className="text-base" style={{ color: "#5a6c7d" }}>
                Most viewed and all-time top-selling services
              </p>
            </div>

            {/* Three Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {/* Card 1 - Ultimate flexibility */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
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

              {/* Card 2 - Memorable experiences */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
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

              {/* Card 3 - Quality at our core */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
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

// const OurCommitments = () => {
//   const items = [
//     {
//       img: "/images/services/ourCommitment4.png",
//       title: "Easy Process",
//     },
//     {
//       img: "/images/services/ourCommitment3.png",
//       title: "Affordable Service",
//     },
//     {
//       img: "/images/services/ourCommitment2.png",
//       title: "Expert Guidance",
//     },
//     {
//       img: "/images/services/ourCommitment1.png",
//       title: "24/7 Service",
//     },
//   ];

//   return (
//     <div className="w-full bg-white py-12 bg-gradient-to-b from-white via-white to-[#beddfa]">
//       <h2 className="text-3xl font-bold text-start px-20">Our commitments</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 mt-24 sm:mt-32 lg:mt-44">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg p-4 pt-12 sm:pt-16 relative flex flex-col items-center text-center"
//           >
//             <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-blue-600 absolute -top-16 sm:-top-20 bg-white flex items-center justify-center">
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
//               />
//             </div>
//             <h3 className="text-lg font-semibold mt-20 sm:mt-24">
//               {item.title}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurCommitments;
// const OurCommitments = () => {
//   const items = [
//     {
//       img: "/images/services/ourCommitment4.png",
//       title: "Easy Process",
//     },
//     {
//       img: "/images/services/ourCommitment3.png",
//       title: "Affordable Service",
//     },
//     {
//       img: "/images/services/ourCommitment2.png",
//       title: "Expert Guidance",
//     },
//     {
//       img: "/images/services/ourCommitment1.png",
//       title: "24/7 Service",
//     },
//   ];

//   return (
//     <div className="w-full bg-gradient-to-b from-white via-white to-[#beddfa] py-12">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
//         <h2 className="text-2xl sm:text-3xl font-bold text-start mb-8">
//           Our commitments
//         </h2>
//       </div>

//       {/* Cards Container */}
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Spacing wrapper for top margin */}
//         <div className="pt-16 sm:pt-20 lg:pt-32">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-24 lg:gap-8">
//             {items.map((item, index) => (
//               <div key={index} className="flex justify-center">
//                 {/* Card wrapper for centering */}
//                 <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none">
//                   <div className="bg-white shadow-lg rounded-lg p-6 pb-8 pt-16 sm:pt-20 lg:pt-16 relative flex flex-col items-center text-center min-h-[160px]">
//                     {/* Circle with icon */}
//                     <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-4 border-blue-600 absolute -top-14 sm:-top-16 lg:-top-20 left-1/2 transform -translate-x-1/2 bg-white flex items-center justify-center shadow-md">
//                       <img
//                         src={item.img}
//                         alt={item.title}
//                         className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain"
//                       />
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-base sm:text-lg font-semibold text-gray-800 px-2 mt-8">
//                       {item.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurCommitments;

import React from "react";

const OurCommitments = () => {
  const items = [
    { img: "/images/services/ourCommitment4.png", title: "Easy Process" },
    { img: "/images/services/ourCommitment3.png", title: "Affordable Service" },
    { img: "/images/services/ourCommitment2.png", title: "Expert Guidance" },
    { img: "/images/services/ourCommitment1.png", title: "24/7 Service" },
  ];

  return (
    <div className="w-full bg-[linear-gradient(to_top,#beddfa_0%,#beddfa_35%,white_52%,white_60%,white_100%)] py-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-start">
          Our commitments
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
        <div className="pt-28 sm:pt-32 lg:pt-40">
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
              gap-x-8 gap-y-24
            "
          >
            {items.map((item, index) => (
              <div key={index} className="flex justify-center rounded-md">
                <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none">
                  <div
                    className="
                      relative flex flex-col items-center text-center
                      bg-white shadow-lg rounded-md p-6
                      pt-20 sm:pt-24 lg:pt-28
                      min-h-[170px] sm:min-h-[190px] lg:min-h-[200px]
                    "
                  >
                    <div
                      className="
    absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2
    p-[6px]
    rounded-full
    bg-gradient-to-t from-[#0073DF] to-[#003E79]
    z-10
  "
                    >
                      <div
                        className="
      w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36
      rounded-full
      bg-white flex items-center justify-center shadow-md
    "
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 object-contain"
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

export default OurCommitments;

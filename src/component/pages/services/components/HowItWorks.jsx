// import React from "react";

// export default function HowItWorks() {
//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl p-8 sm:p-12 lg:p-16">
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-center text-gray-800 mb-12 sm:mb-16">
//           How it works
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
//           {/* Step 1 */}
//           <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
//             <div className="w-24 h-24 sm:w-28 sm:h-28 mb-6 flex items-center justify-center">
//               <img src="/images/services/search.png" alt="" />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
//               Compare prices
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//               Enter your pickup and destination locations and compare the prices
//               offered by various transport companies.
//             </p>
//           </div>

//           {/* Step 2 */}
//           <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
//             <div className="w-24 h-24 sm:w-28 sm:h-28 mb-6 flex items-center justify-center">
//               <img src="/images/services/select.png" alt="" />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
//               Book ride
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//               Select the company and type of ride that you want. You will
//               receive an instant confirmation.
//             </p>
//           </div>

//           {/* Step 3 */}
//           <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 md:col-span-2 lg:col-span-1">
//             <div className="w-24 h-24 sm:w-28 sm:h-28 mb-6 flex items-center justify-center">
//               <img src="/images/services/book.png" alt="" />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
//               Enjoy timely pickup
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//               You can communicate with your driver about any change in time and
//               be sure that you will receive a timely pickup.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function HowItWorks({ steps }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl p-8 sm:p-12 lg:p-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-center text-gray-800 mb-12 sm:mb-16">
          How it works
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 ${
                step.extraClasses || ""
              }`}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 mb-6 flex items-center justify-center">
                <img src={step.img} alt={step.title} />
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                {step.title}
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

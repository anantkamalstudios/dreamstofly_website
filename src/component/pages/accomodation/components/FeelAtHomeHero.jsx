// import { Check, DollarSign, Shield, ThumbsUp } from "lucide-react";
// import React from "react";

// const FeelAtHomeHero = () => {
//   return (
//     <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl flex flex-col lg:flex-row gap-6">
//       <div className="flex-1 mx-auto grid md:grid-cols-2 gap-8 items-center">
//         <div>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Where every student feels at home!
//           </h1>
//           <p className="text-gray-600 mb-6">
//             Get personalized options with your preferences in just a few clicks.
//           </p>
//           <div className="flex items-center gap-2 mb-6">
//             <div className="bg-green-500 rounded-full p-1">
//               <Check className="w-4 h-4 text-white" />
//             </div>
//             <span className="text-gray-700">Upto £200 Cashback</span>
//           </div>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
//             Find a Home
//           </button>
//           <div className="flex gap-8 mt-8">
//             <div>
//               <div className="text-2xl font-bold text-gray-900">1.5 M+</div>
//               <div className="text-sm text-gray-600">Students</div>
//             </div>
//             <div>
//               <div className="text-2xl font-bold text-gray-900">10 K+</div>
//               <div className="text-sm text-gray-600">Properties</div>
//             </div>
//             <div>
//               <div className="text-2xl font-bold text-gray-900">700+</div>
//               <div className="text-sm text-gray-600">Cities</div>
//             </div>
//           </div>
//         </div>
//         <div className="relative">
//           <img
//             src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=600&fit=crop"
//             alt="Student with backpack"
//             className="rounded-2xl w-full object-cover"
//           />
//         </div>
//       </div>
//       <div className="flex flex-1 flex-col gap-6 border border-gray-200 rounded-2xl bg-white justify-evenly">
//         <div className="w-full flex gap-3 border border-t-transparent border-x-transparent border-b-2 ">
//           <div className="bg-green-100 rounded-full p-3 h-fit ml-2  mb-2">
//             <Shield className="w-5 h-5 text-green-600" />
//           </div>
//           <div>
//             <h3 className="font-semibold text-gray-900 mb-1">
//               24/7 Personal Assistance
//             </h3>
//             <p className="text-sm text-gray-600">
//               We are here to support in completing all your housing-related
//               queries.
//             </p>
//           </div>
//         </div>
//         <div className="w-full flex gap-3 border border-t-transparent border-x-transparent border-b-2 ">
//           <div className="bg-orange-100 rounded-full p-3 h-fit ml-2  mb-2">
//             <DollarSign className="w-5 h-5 text-orange-600" />
//           </div>
//           <div>
//             <h3 className="font-semibold text-gray-900 mb-1">
//               Price Match Guarantee
//             </h3>
//             <p className="text-sm text-gray-600">
//               If you find a lower price for the same room on another platform,
//               we'll match it where you book.
//             </p>
//           </div>
//         </div>
//         <div className="w-full border border-t-transparent border-x-transparent border-b-2 flex items-center justify-start">
//           <div className=" flex gap-3">
//             <div className="bg-blue-100 rounded-full p-3 h-fit ml-2  mb-2">
//               <ThumbsUp className="w-5 h-5 text-blue-600" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-900 mb-1">
//                 Yes, Yes, No Fee
//               </h3>
//               <p className="text-sm text-gray-600">
//                 If you are unable to travel a visa, you can cancel your booking
//                 at no cost.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="w-full flex gap-3 ">
//           <div className="bg-blue-100 rounded-full p-3 h-fit ml-2  mb-2">
//             <ThumbsUp className="w-5 h-5 text-blue-600" />
//           </div>
//           <div>
//             <h3 className="font-semibold text-gray-900 mb-1">
//               Yes, Yes, No Fee
//             </h3>
//             <p className="text-sm text-gray-600">
//               If you are unable to travel a visa, you can cancel your booking at
//               no cost.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeelAtHomeHero;
import React from "react";
import { Check, Shield, Tag, FileX, CheckCircle } from "lucide-react";

export default function FeelAtHomeHero() {
  return (
    <div className="bg-gray-50 p-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left card */}
          <div className="grid gap-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-visible flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">
                  Where every student
                  <br />
                  feels at home!
                </h2>
                <p className="text-slate-600 mt-3 text-base lg:text-lg">
                  Get personalised options with your preferences in just a few
                  clicks.
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <div className="bg-green-100 text-green-700 rounded-full p-2 inline-flex">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    Upto £200 Cashback
                  </span>
                </div>

                <div className="mt-6">
                  <button className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-700 transition">
                    <span>Find My Home</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="opacity-90"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </button>
                </div>
                <div className=" lg:w-[300px] py-4 flex items-center justify-evenly gap-4 z-20">
                  <div className="text-center">
                    <div className="text-xl lg:text-lg font-medium text-slate-900">
                      1.5 M+
                    </div>
                    <div className="text-xs text-slate-500">Beds</div>
                  </div>
                  <div className="h-8 border-l-2 border-[#EB662B]" />
                  <div className="text-center">
                    <div className="text-xl lg:text-xl font-medium text-slate-900">
                      10 K+
                    </div>
                    <div className="text-xs text-slate-500">Properties</div>
                  </div>
                  <div className="h-8 border-l-2 border-[#EB662B]" />
                  <div className="text-center">
                    <div className="text-xl lg:text-xl font-medium text-slate-900">
                      700+
                    </div>
                    <div className="text-xs text-slate-500">Cities</div>
                  </div>

                  <div className="h-8 border-r-2 border-[#EB662B]" />
                </div>
              </div>

              {/* Image area (on the right) */}
              <div className="lg:w-1/2 relative flex items-center justify-center">
                {/* Decorative blobs behind image */}
                <div className="absolute -top-6 -right-6 w-36 h-36 bg-yellow-100 rounded-full opacity-70 filter blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-purple-100 rounded-full opacity-70 filter blur-2xl" />

                <div className="rounded-3xl overflow-hidden w-full max-w-md lg:max-w-none">
                  <img
                    src="https://images.unsplash.com/photo-1496871455396-14e56815f1f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNpdHl8ZW58MHx8MHx8fDA%3D"
                    alt="student"
                    className="w-full h-72 object-cover lg:h-96"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right card: features */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="space-y-4 divide-y divide-gray-100">
              <div className="flex gap-4 py-4">
                <div className="flex items-start">
                  <div className="bg-green-50 rounded-xl p-3">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-slate-900 font-semibold">
                    24×7 Personal Assistance
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">
                    We offer 24×7 expert support in resolving all your
                    housing-related queries, providing peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 py-4">
                <div className="flex items-start">
                  <div className="bg-yellow-50 rounded-xl p-3">
                    <Tag className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-slate-900 font-semibold">
                    Price Match Guarantee
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">
                    If you find a lower price for this accommodation on another
                    platform, we'll match it when you book.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 py-4">
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-xl p-3">
                    <FileX className="w-5 h-5 text-red-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-slate-900 font-semibold">
                    No Visa, No Pay
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">
                    If you are unable to obtain a visa, you can cancel your
                    booking at no cost.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 py-4">
                <div className="flex items-start">
                  <div className="bg-teal-50 rounded-xl p-3">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-slate-900 font-semibold">
                    Verified Listings
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">
                    All our properties are verified, which guarantees a seamless
                    booking experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

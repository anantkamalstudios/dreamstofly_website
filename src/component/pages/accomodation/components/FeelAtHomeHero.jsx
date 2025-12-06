import React from "react";
import { Check, Shield, Tag, FileX, CheckCircle } from "lucide-react";

export default function FeelAtHomeHero() {
  return (
    <div className="p-8 h-fit flex items-center ">
      <div className="max-w-7xl mx-auto w-full ">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left card */}
          {/* <div className="relative grid gap-2 h-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-visible flex flex-col lg:flex-row gap-6">
              <div className="lg:w-3/4 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-medium text-slate-900 leading-tight">
                  Where every student
                  <br />
                  feels at home!
                </h2>
                <p className="text-slate-600 mt-3 text-base lg:text-lg ">
                  Get personalised options with your preferences in just a few
                  clicks.
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <div className="bg-green-100 text-green-700 rounded-full p-2 inline-flex">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-medium ">
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
                    <div className="text-xl lg:text-lg font-semibold text-slate-900 ">
                      1.5 M+
                    </div>
                    <div className="text-xs font-medium  text-slate-700">Beds</div>
                  </div>
                  <div className="h-8 border-l-2 border-[#EB662B]" />
                  <div className="text-center">
                    <div className="text-xl lg:text-xl font-semibold text-slate-900 ">
                      10 K+
                    </div>
                    <div className="text-xs text-slate-700 font-medium">Properties</div>
                  </div>
                  <div className="h-8 border-l-2 border-[#EB662B]" />
                  <div className="text-center">
                    <div className="text-xl lg:text-xl font-semibold text-slate-900 ">
                      700+
                    </div>
                    <div className="text-xs text-slate-700 font-medium">Cities</div>
                  </div>

                  <div className="h-8 border-r-2 border-[#EB662B]" />
                </div>
              </div>

              <div className="absolute right-0 md:flex items-center justify-center hidden h-96">
                <div className="rounded-3xl overflow-hidden w-full max-w-md lg:max-w-none">
                  <img
                    src="/images/accomodation/FeelAtHome.png"
                    alt="student"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div> */}
          {/* Left card */}
          <div className="relative grid gap-2 h-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden flex flex-col lg:flex-row gap-6">
              <div className="lg:w-3/4 flex flex-col justify-center relative z-10">
                <h2 className="text-3xl lg:text-4xl font-medium text-slate-900 leading-tight">
                  Where every student
                  <br />
                  feels at home!
                </h2>
                <p className="text-slate-600 mt-3 text-base lg:text-lg ">
                  Get personalised options with your preferences in just a few
                  clicks.
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <div className="bg-green-100 text-green-700 rounded-full p-2 inline-flex">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-medium ">
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

                <div className="lg:w-[300px] py-4 flex items-center justify-evenly gap-4 z-20">
                  <div className="text-center">
                    <div className="text-xl lg:text-lg font-semibold text-slate-900 ">
                      1.5 M+
                    </div>
                    <div className="text-xs font-medium text-slate-700">
                      Beds
                    </div>
                  </div>
                  <div className="h-8 border-l-2 border-[#EB662B]" />
                  <div className="text-center">
                    <div className="text-xl lg:text-xl font-semibold text-slate-900 ">
                      10 K+
                    </div>
                    <div className="text-xs text-slate-700 font-medium">
                      Properties
                    </div>
                  </div>
                  <div className="h-8 border-l-2 border-[#EB662B]" />
                  <div className="text-center">
                    <div className="text-xl lg:text-xl font-semibold text-slate-900 ">
                      700+
                    </div>
                    <div className="text-xs text-slate-700 font-medium">
                      Cities
                    </div>
                  </div>
                  <div className="h-8 border-r-2 border-[#EB662B]" />
                </div>
              </div>

              {/* Image area - absolute on large screens, normal flow on mobile */}
              <div className="md:absolute md:right-0 md:top-0 md:bottom-0 md:w-auto md:h-full flex items-center justify-center w-full mt-0 lg:mt-0">
                <div className="rounded-3xl overflow-hidden w-full max-w-sm lg:max-w-md h-64 lg:h-96">
                  <img
                    src="/images/accomodation/FeelAtHome.png"
                    alt="student"
                    className="w-full h-full object-contain md:object-cover "
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
                  <p className="text-sm text-slate-700 mt-1">
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
                  <p className="text-sm text-slate-700 mt-1">
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
                  <p className="text-sm text-slate-700 mt-1">
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
                  <p className="text-sm text-slate-700 mt-1">
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

import React from "react";
import { Check, Shield, FileX, CheckCircle } from "lucide-react";
import { Headphones, Tag, Users, Globe } from "lucide-react";

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
                  Why use
                  <br />
                  Accommodation?
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
                    Lowest Price Guarantee
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
            <div className="divide-y divide-gray-200">

              {/* Item 1 */}
              <div className="flex gap-4 py-6 items-start items-center">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100">
                  <Headphones className="w-5 h-5 text-green-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-lg">
                    We're the busiest
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    Every 3 minutes someone finds a flatmate on SpareRoom. With the biggest selection of ads, you'll find yours.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 py-6 items-start items-center">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-yellow-100">
                  <Tag className="w-5 h-5 text-yellow-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-lg">
                    Safety
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    Your safety is our top priority. We have a team of moderators working 7 days a week to check ads and content.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4 py-6 items-start items-center">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-red-100">
                  <Users className="w-5 h-5 text-red-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-lg">
                    We're all about people
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    Everyone's idea of the perfect housemate is different, so search based on what's important to you.
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

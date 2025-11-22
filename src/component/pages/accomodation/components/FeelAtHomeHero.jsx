import { Check, DollarSign, Shield, ThumbsUp } from "lucide-react";
import React from "react";

const FeelAtHomeHero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl flex flex-col lg:flex-row gap-6">
      <div className="flex-1 mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Where every student feels at home!
          </h1>
          <p className="text-gray-600 mb-6">
            Get personalized options with your preferences in just a few clicks.
          </p>
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-green-500 rounded-full p-1">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700">Upto £200 Cashback</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Find a Home
          </button>
          <div className="flex gap-8 mt-8">
            <div>
              <div className="text-2xl font-bold text-gray-900">1.5 M+</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">10 K+</div>
              <div className="text-sm text-gray-600">Properties</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">700+</div>
              <div className="text-sm text-gray-600">Cities</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=600&fit=crop"
            alt="Student with backpack"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-6 border border-gray-200 rounded-2xl bg-white justify-evenly">
        <div className="w-full flex gap-3 border border-t-transparent border-x-transparent border-b-2 ">
          <div className="bg-green-100 rounded-full p-3 h-fit ml-2  mb-2">
            <Shield className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              24/7 Personal Assistance
            </h3>
            <p className="text-sm text-gray-600">
              We are here to support in completing all your housing-related
              queries.
            </p>
          </div>
        </div>
        <div className="w-full flex gap-3 border border-t-transparent border-x-transparent border-b-2 ">
          <div className="bg-orange-100 rounded-full p-3 h-fit ml-2  mb-2">
            <DollarSign className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Price Match Guarantee
            </h3>
            <p className="text-sm text-gray-600">
              If you find a lower price for the same room on another platform,
              we'll match it where you book.
            </p>
          </div>
        </div>
        <div className="w-full border border-t-transparent border-x-transparent border-b-2 flex items-center justify-start">
          <div className=" flex gap-3">
            <div className="bg-blue-100 rounded-full p-3 h-fit ml-2  mb-2">
              <ThumbsUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Yes, Yes, No Fee
              </h3>
              <p className="text-sm text-gray-600">
                If you are unable to travel a visa, you can cancel your booking
                at no cost.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-3 ">
          <div className="bg-blue-100 rounded-full p-3 h-fit ml-2  mb-2">
            <ThumbsUp className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Yes, Yes, No Fee
            </h3>
            <p className="text-sm text-gray-600">
              If you are unable to travel a visa, you can cancel your booking at
              no cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelAtHomeHero;

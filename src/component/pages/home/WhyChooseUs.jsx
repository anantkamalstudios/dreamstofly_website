import React, { useEffect, useState } from "react";
// import cards from "../../data/home/WhyChooseUs";
import axios from "axios";

const WhyChooseUs = () => {
  const [featuresData, setFeaturesData] = useState([]);

  const BASE_URL = import.meta.env.VITE_HOME_WHYCHOOSEUS;

  useEffect(() => {
    try {
      const fetchApi = async () => {
        const res = await axios.get(`${BASE_URL}`);
        setFeaturesData(res?.data?.data);
      };
      fetchApi();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="bg-white py-12 px-4 md:px-8 lg:px-16">
      {/* Heading Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Give Your Wings a Smooth Flight <br />
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0073df]">
          Dreams to Fly Way !
        </h2>
        <p className="mt-4 text-gray-600">
          Post a job to tell us about your project. We'll quickly match you with
          the right freelancers.
        </p>
      </div>

      {/* Continuous Horizontal Scroller */}
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll gap-6">
          {/* Duplicate cards for infinite scroll */}
          {featuresData && featuresData.length > 0 ? (
            [...featuresData, ...featuresData].map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white border border-gray-200 shadow-sm rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={`${import.meta.env.VITE_HOME_IMAGE_URL}${card?.image}`}
                    alt={card.title}
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.content}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Loading ... </div>
          )}
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-70%); }
                }
                .animate-scroll {
                    display: flex;
                    animation: scroll 40s linear infinite;
                }
                `}
      </style>
    </div>
  );
};

export default WhyChooseUs;

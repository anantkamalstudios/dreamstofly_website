import React from "react";

const TrustedAndLoved = ({ stats }) => {
  return (
    <div className="w-full mx-auto py-6 md:py-10 px-6 md:px-20 ">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-medium text-center text-gray-900 mb-16">
        Trusted & loved
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-5xl font-semibold text-orange-500 mb-4 ">
              {stat.number}
            </div>
            <p className="text-lg text-gray-900">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedAndLoved;

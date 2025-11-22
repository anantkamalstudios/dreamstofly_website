import React from "react";

const TrustedAndLoved = ({ stats }) => {
  return (
    <div className="w-full py-20">
      <div className="w-full mx-auto py-10 px-20">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-16">
          Trusted & loved
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-medium text-orange-500 mb-4">
                {stat.number}
              </div>
              <p className="text-lg text-gray-900">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedAndLoved;

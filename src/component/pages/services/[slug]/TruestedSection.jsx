import React from "react";

const TrustedSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Trusted & loved
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left - Stats */}
          <div className="space-y-0">
            {/* First Row - Two Stats */}
            <div className="grid grid-cols-2 gap-0 mb-8">
              {/* 12 Mn+ */}
              <div className="border-l-4 border-orange-500 pl-6 pr-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  12 Mn+
                </div>
                <div className="text-gray-600 text-base">
                  Student interactions
                </div>
              </div>

              {/* 100% */}
              <div className="border-l-4 border-orange-500 pl-6">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  100%
                </div>
                <div className="text-gray-600 text-base">
                  Verified properties
                </div>
              </div>
            </div>

            {/* Second Row - One Stat */}
            <div className="border-l-4 border-orange-500 pl-6 pr-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">200K+</div>
              <div className="text-gray-600 text-base">
                Global student community
              </div>
            </div>
          </div>

          {/* Right - Stacked Images */}
          <div className="relative">
            {/* Yellow background card - positioned absolutely behind */}
            <div
              className="absolute bg-gradient-to-br from-yellow-400 to-orange-400 rounded-none"
              style={{
                width: "380px",
                height: "320px",
                bottom: "-50px",
                right: "110px",
                zIndex: 0,
              }}
            />

            {/* Main food image */}
            <div
              className="relative bg-white rounded-none shadow-lg overflow-hidden"
              style={{
                width: "380px",
                height: "320px",
                zIndex: 1,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"
                alt="Food"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;

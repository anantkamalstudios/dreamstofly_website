import React from "react";

export default function ServicesBenefits({ whyChoose }) {
  const data = JSON.parse(whyChoose?.cards);
  console.log(data);

  return (
    <div className="w-full min-h-fit py-4 md:p-1 flex items-center justify-center my-5 xl:px-10 lg:px-8 px-4">
      <div className="w-full max-w-full relative bg-white ">
        <div
          className="absolute top-0 right-0 h-full rounded-2xl"
          style={{
            width: "65%",
            backgroundColor: "#0073DF",
            opacity: 0.05,
            zIndex: 1,
          }}
        ></div>

        {/* Main Content Grid - Layer 2 */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 py-10 px-6 md:px-12">
          <div className="relative z-10 flex items-center">
            <div className="relative w-[510px] h-[510px] rounded-3xl overflow-hidden">
              <img
                src="/images/Rectangle 24159.png"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
                  whyChoose?.image
                }`}
                alt="girls"
                className="absolute h-full w-full object-contain"
                style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))" }}
              />
            </div>
          </div>

          {/* Right Content Area - Title, Subtitle, Cards - Layer 2 */}
          <div className="relative z-20 flex flex-col justify-center lg:pl-12 rounded-2xl">
            {/* Title and Subtitle */}
            <div className="text-center mb-10 md:relative md:-top-20">
              <h2 className="text-4xl lg:text-3xl font-semibold mb-3 rounded-2xl text-[#0a1f44] font-roboto">
                {whyChoose?.heading}
              </h2>
              <p className="text-base text-[#5a6c7d] font-poppins">
                {whyChoose?.subheading}
              </p>
            </div>

            <div className="hidden lg:flex lg:absolute lg:right-0 lg:top-60 gap-6">
              {data.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow w-[280px]"
                >
                  <div className="flex justify-center mb-4 h-16 w-16">
                    <img
                      src={`${import.meta.env.VITE_IMAGE_BASE_URL}${card.icon}`}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-medium mb-2 text-start font-roboto text-[#0a1f44]">
                    {card.title}
                  </h3>

                  <p
                    className="text-sm text-start font-poppins"
                    style={{ color: "#5a6c7d" }}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex lg:hidden flex-col md:flex-row gap-6 mt-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex-1">
                <div className="flex justify-center mb-4">
                  <svg width="65" height="65" viewBox="0 0 65 65" fill="none">
                    <rect
                      x="15"
                      y="25"
                      width="35"
                      height="22"
                      rx="2"
                      stroke="#ff6542"
                      strokeWidth="2.5"
                      fill="none"
                      strokeDasharray="4 4"
                    />
                    <circle cx="25" cy="36" r="4" fill="#ff6542" />
                    <circle cx="40" cy="36" r="4" fill="#ff6542" />
                  </svg>
                </div>
                <h3
                  className="text-lg font-bold mb-2 text-center font-roboto"
                  style={{ color: "#0a1f44" }}
                >
                  Ultimate flexibility
                </h3>
                <p
                  className="text-sm text-center font-poppins"
                  style={{ color: "#5a6c7d" }}
                >
                  You're in control, with free cancellation and payment.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex-1">
                <div className="flex justify-center mb-4">
                  <svg width="65" height="65" viewBox="0 0 65 65" fill="none">
                    <ellipse
                      cx="32.5"
                      cy="22"
                      rx="7"
                      ry="10"
                      stroke="#ff6542"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <path
                      d="M25.5 22L19 40M39.5 22L46 40"
                      stroke="#ff6542"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M19 40C19 40 23 45 32.5 45C42 45 46 40 46 40"
                      stroke="#ff6542"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <rect x="30" y="43" width="5" height="7" fill="#ff6542" />
                  </svg>
                </div>
                <h3
                  className="text-lg font-bold mb-2 text-center font-roboto"
                  style={{ color: "#0a1f44" }}
                >
                  Memorable experiences
                </h3>
                <p
                  className="text-sm text-center font-poppins"
                  style={{ color: "#5a6c7d" }}
                >
                  Browse and book tours and activities so incredible.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex-1">
                <div className="flex justify-center mb-4">
                  <svg width="65" height="65" viewBox="0 0 65 65" fill="none">
                    <path
                      d="M32.5 15L37 27L40 29L34 34L36 45L32.5 40L29 45L31 34L25 29L28 27L32.5 15Z"
                      stroke="#ff6542"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <circle cx="27" cy="24" r="2" fill="#ff6542" />
                    <circle cx="38" cy="24" r="2" fill="#ff6542" />
                  </svg>
                </div>
                <h3
                  className="text-lg font-bold mb-2 text-center font-roboto"
                  style={{ color: "#0a1f44" }}
                >
                  Quality at our core
                </h3>
                <p
                  className="text-sm text-center font-poppins"
                  style={{ color: "#5a6c7d" }}
                >
                  High quality standards. Millions of reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

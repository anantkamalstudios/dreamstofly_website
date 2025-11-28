import React from "react";
import { Plane, MapPin, Scale, Car } from "lucide-react";

export default function PoweredBySection() {
  const logos = [
    { name: "O STIN", image: "/images/services/ostin.png" },
    { name: "GLS", image: "/images/services/gls.png" },
    { name: "DELL", image: "/images/services/dell.png" },
    { name: "DPEX", image: "/images/services/dpex.png" },
    { name: "Arbys", image: "/images/services/arbys.png" },
    { name: "Glovo", image: "/images/services/glovo.png" },
  ];
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-white py-12 mt-4 md:mt-8 lg:mt-12 px-2">
      <h2 className="text-lg md:text-xl font-normal text-indigo-900 mb-12">
        Powered By
      </h2>

      <div className="relative overflow-hidden mb-16">
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 md:w-64 h-24 flex items-center justify-center mx-1"
            >
              <div className="text-2xl md:text-3xl font-bold">
                {logo.name === "GLS" && <img src={logo.image} alt="" />}
                {logo.name === "DELL" && <img src={logo.image} alt="" />}
                {logo.name === "DPEX" && <img src={logo.image} alt="" />}
                {logo.name === "Glovo" && <img src={logo.image} alt="" />}
                {logo.name === "O STIN" && <img src={logo.image} alt="" />}
                {logo.name === "Arbys" && <img src={logo.image} alt="" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

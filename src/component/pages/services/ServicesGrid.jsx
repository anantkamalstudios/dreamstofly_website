import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbPlane } from "react-icons/tb";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services/ServicesData";

const ServicesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (service) => {
    navigate(`/services/${service.slug}`);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-black">
            Seeking Adventure Thrills and <br /> Excitement Await
          </h1>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(service)}
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <div className="w-full h-px bg-gray-300 mb-4"></div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 px-4">
                  {service.desc}
                </p>
                <div className="w-16 h-2 bg-yellow-400 rounded mb-6"></div>
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-blue-50 transition">
                  Explore More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

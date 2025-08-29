import React, { useState } from "react";
import {
  ArrowUpRight,
  Shield,
  Utensils,
  GraduationCap,
  ShoppingBag,
  Car,
  Home,
  Zap,
  Globe,
} from "lucide-react";

// import services from "../../data/services/ServicesData";
import CategoryServicesData from "../../data/services/CategoryServicesData";
import { TbPlane } from "react-icons/tb";

const ServicesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--primary-color)" }}
          >
            Seeking Adventure Thrills and Excitement Await
          </h2>
          <p
            className="text-base md:text-xl max-w-3xl mx-auto"
            style={{ color: "var(--text-color)" }}
          >
            Discover our comprehensive range of services designed to support
            your study abroad journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CategoryServicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-start md:items-stretch md:space-x-14 space-y-6 md:space-y-0 h-full">
                  {/* Service Image */}
                  <div className="flex-shrink-0">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 md:ml-12 flex flex-col h-full">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                      {service.desc}
                    </p>

                    {/* Action Buttons pinned to bottom */}
                    <div className="flex items-center justify-between mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-100 md:border-transparent md:pt-0 md:border-0 mt-auto">
                      {/* Primary Action Button */}
                      <button
                        className={`group/btn flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-3xl transition-all duration-300 border border-blue-500 shadow-lg transform
                          ${
                            hoveredCard === service.id
                              ? "bg-blue-500 border-2 border-blue-500 scale-110"
                              : "bg-white border-2 border-transparent scale-100"
                          }
                        `}
                        onMouseEnter={() => setHoveredCard(service.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <ArrowUpRight
                          size={20}
                          className={`transition-transform duration-500 ${
                            hoveredCard === service.id
                              ? "rotate-45 text-white"
                              : "rotate-0 text-blue-500"
                          }`}
                        />
                      </button>
                      <div
                        className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-100 group-hover:bg-white transition-all duration-300 ${service.iconColor}`}
                      >
                        <IconComponent
                          size={25}
                          className={`transition-transform duration-300 ${
                            hoveredCard === service.id
                              ? "rotate-6 scale-110"
                              : "rotate-0 scale-100"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

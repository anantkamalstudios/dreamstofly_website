import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbPlane } from "react-icons/tb";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services/ServicesData";

const ServicesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (service) => {
    const slug = service.slug;

    if (slug === "free-cources") {
      window.open("https://freecourse.dreamstofly.com/", "_blank");
    } else if (slug === "exam-prep") {
      navigate(`/${slug}`);
    } else {
      navigate(`/services/${slug}`);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-black">
            Seeking Adventure Thrills and <br /> Excitement Await
          </h1>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="group bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col items-center hover:shadow-md transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(service)}
              >
                {/* Fixed height icon container */}
                <div className="w-40 flex items-center justify-center">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full object-cover"
                  />
                </div>

                {/* Fixed height title container */}
                <div className="h-16 flex items-center justify-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900 text-center px-2">
                    {service.title}
                  </h3>
                </div>

                {/* Horizontal line at fixed position */}
                <div className="w-full h-px bg-gray-600 mb-2"></div>

                {/* Description and yellow bar container */}
                <div className="w-full mb-6 flex-grow">
                  {/* Fixed height description */}
                  <div className="h-12 mb-2">
                    <p className="text-gray-700 text-sm leading-relaxed text-start">
                      {service.desc}
                    </p>
                  </div>

                  {/* Yellow accent bar */}
                  <div className="w-24 h-1.5 bg-yellow-400"></div>
                </div>

                {/* Button at bottom */}
                <button className="border-2 border-[#0073DF] text-[#193F64] px-6 py-2.5 rounded text-sm font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors duration-300 uppercase tracking-wide">
                  EXPLORE MORE
                  <span className="text-lg">→</span>
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

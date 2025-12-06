import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServicesGrid = ({ services }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (service) => {
    const slug = service.slug;

    if (slug === "free-cources" || slug === "free-online-courses") {
      window.open("https://freecourse.dreamstofly.com/", "_blank");
    } else if (slug === "exam-prep" || slug === "test-preparation") {
      navigate(`/exam-prep`);
    } else {
      navigate(`/services/${slug}`);
    }
  };

  return (
    <section className="md:pt-2 md:pb-4 bg-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-start mb-1 md:mb-4 mx-auto">
          <h1 className="text-xl md:text-3xl font-semibold mb-1 text-black ">
            Our Services
          </h1>
          <div className="h-2 w-28 bg-blue-500"></div>
        </div>

        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="group bg-white shadow-lg border border-gray-200 p-8 flex flex-col items-center hover:shadow-md transition-all duration-300 cursor-pointer hover:bg-[#193F64] hover:text-white text-gray-900 hover:scale-105"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(service)}
              >
                <div className="w-40 flex items-center justify-center">
                  <img
                    src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
                      service.image
                    }`}
                    alt={service.title}
                    className="w-full object-cover"
                  />
                </div>

                <div className="h-16 flex items-center justify-center mb-2">
                  <h3 className="text-xl font-bold text-center px-2 ">
                    {service.title}
                  </h3>
                </div>
                <div className="w-full h-px bg-gray-600 mb-2 group-hover:bg-white"></div>

                <div className="w-full mb-6 flex-grow">
                  <div
                    className=" text-sm leading-relaxed text-start   group-hover:[&_*]:text-white"
                    dangerouslySetInnerHTML={{ __html: service?.description }}
                  ></div>
                  <div className="w-24 h-1.5 bg-yellow-400"></div>
                </div>
                <button className="border-2 text-[#193F64] border-[#0073DF] px-6 py-2.5 text-sm font-semibold flex items-center gap-2 hover:text-white transition-colors duration-300 uppercase tracking-wide group-hover:bg-white group-hover:text-[#0073DF] group-hover:border-[#193F64] ">
                  {service?.button_text || "EXPLORE MORE"}
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

import React from "react";
import { Link } from "react-router-dom";

const SOPHomePage = () => {
  const cards = [
    {
      icon: "/images/SOP_LOR/SOP.png",
      title: "Statement of Purpose (SOP) Maker",
      description:
        "Create a professional, structured SOP step by step and generate instantly",
      buttonText: "Go to SOP Maker",
      slug: "/sop-form",
    },
    {
      icon: "/images/SOP_LOR/LOR.png",
      title: "Letter of Recommendation (LOR) Maker",
      description:
        "Generate a strong, well-structured LOR quickly and professionally",
      buttonText: "Go to LOR Maker",
      slug: "/lor-form",
    },
  ];

  return (
    <div>
      <header className="relative bg-[#003E79] w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 py-2 md:py-4">
        <div className="text-white text-center md:text-left max-w-xl mx-auto md:mx-20 lg:mx-28 xl:mx-32">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium mb-3">
            SOP & LOR Maker
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-light text-white">
            The Ultimate Guide to Universities Worldwide
          </p>
        </div>

        <img
          src="/images/SOP_LOR/sopLorHero.png"
          alt="logo"
          className="w-64 sm:w-72 md:w-[380px] lg:w-[430px] xl:w-[480px] object-contain"
          loading="lazy"
        />
      </header>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-4 py-10 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <div className="w-full h-72 sm:h-80 md:h-96">
                <img
                  src={card.icon}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-10 py-8 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-[#003366] mb-3">
                  {card.title}
                </h2>

                <p className="text-black text-sm leading-relaxed mb-8">
                  {card.description}
                </p>
                <div className="flex justify-start items-center">
                  <Link
                    to={card.slug}
                    className="bg-[#007BFF] hover:bg-[#005FCC] text-white px-10 py-2 rounded-lg font-medium"
                  >
                    {card.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SOPHomePage;

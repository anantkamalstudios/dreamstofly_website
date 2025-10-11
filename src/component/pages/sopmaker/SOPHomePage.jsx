import React from "react";
import { Link } from "react-router-dom";

const SOPHomePage = () => {
  const cards = [
    {
      icon: "📄", // you can replace this with an actual icon/image
      title: "Statement of Purpose (SOP) Maker",
      description:
        "Create a professional, structured SOP step by step and generate instantly",
      buttonText: "Go to SOP Maker",
      slug: "/sop-form",
    },
    {
      icon: "📝",
      title: "Letter of Recommendation (LOR) Maker",
      description:
        "Generate a strong, well-structured LOR quickly and professionally",
      buttonText: "Go to LOR Maker",
      slug: "/lor-form",
    },
  ];

  return (
    <div>
      {" "}
      <header
        className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[380px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-medium mb-2">
            SOP & LOR Maker
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-light text-white">
            The Ultimate Guide to Universities Worldwide
          </p>
        </div>
      </header>
      <section>
        <div className="flex flex-wrap justify-center gap-10 px-4 py-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[320px] md:w-[360px] lg:w-[400px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center gap-3 text-center p-10 border border-gray-100 mr-4"
            >
              <div className="text-blue-600 text-7xl mb-4">{card.icon}</div>
              <h2 className="text-xl font-semibold text-[#003366] mb-2 text-start">
                {card.title}
              </h2>
              <p className="text-black text-sm mb-6 leading-relaxed">
                {card.description}
              </p>
              <Link
                to={card.slug}
                className="bg-[#007BFF] hover:bg-[#005FCC] text-white px-10 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                {card.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SOPHomePage;

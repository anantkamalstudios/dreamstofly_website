import React from "react";
import CityImg from "/images/services/whychoose.png";
import { Ticket, PartyPopper, Diamond } from "lucide-react";

const ServicesBenefits = () => {
  const perks = [
    {
      id: 1,
      title: "Ultimate flexibility",
      desc: "You're in control, with free cancellation and payment.",
      Icon: Ticket,
    },
    {
      id: 2,
      title: "Memorable experiences",
      desc: "Browse and book tours and activities so incredible.",
      Icon: PartyPopper,
    },
    {
      id: 3,
      title: "Quality at our core",
      desc: "High quality standards. Millions of reviews.",
      Icon: Diamond,
    },
  ];

  return (
    <section className="relative py-20 bg-[#F3F7FB]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left large image with overlay perks on lg */}
          <div className="relative z-10">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={CityImg}
                alt="Travel city view"
                className="w-full h-[640px] lg:h-[680px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-10 right-10 h-10 bg-black/10 blur-xl rounded-full"></div>

            {/* Perk overlay (desktop) */}
            <div className="hidden lg:block absolute bottom-40 left-1/2 -translate-x-1/4 z-20 lg:ml-96 w-[1200px]">
              <div className="mx-auto max-w-[980px]">
                <div className="grid grid-cols-3 gap-5">
                  {perks.map(({ id, title, desc, Icon }, idx) => (
                    <div
                      key={id}
                      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out min-w-[260px] w-full max-w-[340px] mx-auto transform hover:scale-105"
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-orange-50 text-orange-500 mb-4">
                        <Icon size={32} />
                      </div>
                      <h3
                        className="text-base font-semibold mb-1"
                        style={{ color: "var(--hover-color)" }}
                      >
                        {title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative text-center lg:text-left px-4 sm:px-8 md:px-12 lg:px-0 lg:ml-10 lg:left-20 lg:bottom-32 mb-8 lg:mb-0">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
                style={{ color: "var(--hover-color)" }}
              >
                Why choose Dreams To Fly
              </h2>
              <p className="mt-3 text-gray-600 text-base sm:text-lg">
                Most viewed and all‑time top‑selling services
              </p>
            </div>

            {/* Mobile/Tablet perks (hidden on lg since shown over image) */}
            <div className="lg:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {perks.map(({ id, title, desc, Icon }) => (
                  <div
                    key={id}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 ease-in-out"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-orange-50 text-orange-500 mb-4">
                      <Icon size={28} />
                    </div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: "var(--hover-color)" }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBenefits;

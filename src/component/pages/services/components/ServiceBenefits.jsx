import { Clock, MapPin, Shield } from "lucide-react";
import Heading from "../../../../common/Heading";

function ServiceBenefits() {
  const benefits = [
    {
      title: "Convenient locations",
      description:
        "Present at airports, metro stations, train stations, tourist spots, restaurants, etc.",
      icon: "/images/services/luggage1.png",
    },
    {
      title: "Affordable and reliable",
      description:
        "Every bag has a seal with a unique security number, so no tampering is possible.",
      icon: "/images/services/benefits1.png",
    },
    {
      title: "Flexibility",
      description: "Store your bag safely for a few hours or a few days.",
      icon: "/images/services/benefits2.png",
    },
  ];

  return (
    <div className="w-full mx-auto px-4 md:px-8 lg:px-28  py-12 ">
      {/* <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
        Service benefits
      </h2> */}
      <Heading text="Service benefits" className="text-center mb-10 sm:mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className=" rounded-3xl border-2 border-gray-200 bg-slate-50 p-8 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-24 mb-6 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
              <img src={benefit.icon} alt="" />
            </div>

            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 text-start">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-start ">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceBenefits;

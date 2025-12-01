import { Clock, MapPin, Shield } from "lucide-react";

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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-vollkorn">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
        Service benefits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className=" rounded-3xl border-2 border-gray-200 bg-slate-50 p-8 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-20 mb-6 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
              <img src={benefit.icon} alt="" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center font-poppins">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceBenefits;

import { Award, BadgeCheck, Gift, Scale } from "lucide-react";
import Heading from "../../../../common/Heading";

const ServiceBenefitsPage = () => {
  const benefits = [
    {
      icon: "/images/services/health1.png",
      title: "Meet visa requirements",
      description: "All policies are approved by the Australian government.",
    },
    {
      icon: "/images/services/health2.png",
      title: "Save Costs",
      description: "Spare yourself the hassle of unnecessary costs.",
    },
    {
      icon: "/images/services/health3.png",
      title: "Compare Policies",
      description: "Compare features, costs & coverage of various policies.",
    },
    {
      icon: "/images/services/whychooseus3.png",
      title: "Instant Confirmation",
      description: "Receive the OHSC certificate within minutes.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-28">
        {/* <h2 className="text-3xl md:text-4xl font-medium text-center text-gray-900 mb-16">
          Service benefits
        </h2> */}

        <Heading
          text="Service benefits"
          className="text-center mb-10 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <img src={benefit.icon} alt="" className="w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBenefitsPage;

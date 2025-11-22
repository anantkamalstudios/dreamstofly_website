import { Award, BadgeCheck, Gift, Scale } from "lucide-react";

const ServiceBenefitsPage = () => {
  const benefits = [
    {
      icon: <BadgeCheck className="w-12 h-12 text-red-500" />,
      title: "Meet visa requirements",
      description: "All policies are approved by the Australian government.",
    },
    {
      icon: <Gift className="w-12 h-12 text-red-500" />,
      title: "Save Costs",
      description: "Spare yourself the hassle of unnecessary costs.",
    },
    {
      icon: <Scale className="w-12 h-12 text-red-500" />,
      title: "Compare Policies",
      description: "Compare features, costs & coverage of various policies.",
    },
    {
      icon: <Award className="w-12 h-12 text-red-500" />,
      title: "Instant Confirmation",
      description: "Receive the OHSC certificate within minutes.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Service benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">{benefit.icon}</div>
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

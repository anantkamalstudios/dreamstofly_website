import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import Testimonials from "../Testimonials";
import HowItWorks from "../components/HowItWorks";
import FAQAccordion from "../components/FAQAccordion";
import TrustedAndLoved from "../components/TrustedAndLoved";

const TravelInsurance = () => {
  const { service, serviceDetails, formConfig, loading } = useServiceData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!service || !serviceDetails) return null;

  const features = [
    {
      icon: "/images/services/airport1.png",
      title: "Insurence in just min",
    },
    {
      icon: "/images/services/airport2.jpg",
      title: "Instant policy - No medical test",
    },
    {
      icon: "/images/services/airport3.jpg",
      title: "Starting from $50/Day",
    },
    {
      icon: "/images/services/airport4.jpg",
      title: "All plans includes COVID package",
    },
  ];

  const steps = [
    {
      img: "/images/services/search.png",
      title: "Medical emergency",
      desc: "Expenses incurred for hospitalization in case of accidents.",
    },
    {
      img: "/images/services/select.png",
      title: "Baggage loss",
      desc: "You will be offered that you need to buy immediately.",
    },
    {
      img: "/images/services/book.png",
      title: "Compassionate visit",
      desc: "Financial aid/support for guardians to travel in case of emergency",
      extraClasses: "md:col-span-2 lg:col-span-1",
    },
  ];

    const stats = [
      {
        number: "12K+",
        label: "Succes Journey",
      },
      {
        number: "16+",
        label: "Awards Winning",
      },
      {
        number: "20+",
        label: "Years Of Experience",
      },
    ];
  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={formConfig}
      />
      <PoweredBySection />
      <TravelPartnersFeatures features={features} />
      <HowItWorks steps={steps} />
      <Testimonials />
      <FAQAccordion />
      <TrustedAndLoved stats={stats} />
    </div>
  );
};

export default TravelInsurance;

import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import HowItWorks from "../components/HowItWorks";
import ServiceBenefits from "../components/ServiceBenefits";
import FAQAccordion from "../components/FAQAccordion";
import Testimonials from "../Testimonials";
import TrustedAndLoved from "../components/TrustedAndLoved";

const LuggaugePage = () => {
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
      icon: "/images/services/luggage4.png",
      title: "Free Cancellation",
    },
    {
      icon: "/images/services/luggage3.png",
      title: "Secure Online payments",
    },
    {
      icon: "/images/services/luggage2.png",
      title: "Global Network",
    },
    {
      icon: "/images/services/luggage1.png",
      title: "24/7 Customer Support",
    },
  ];

  const steps = [
    {
      img: "/images/services/search.png",
      title: "Easy and instant Booking",
      desc: "Add drop-off and pick-up date and time. Booked for your luggage.",
    },
    {
      img: "/images/services/select.png",
      title: "Drop-off your luggage",
      desc: "Packup your things and Safely drop off your luggage as scheduled.",
    },
    {
      img: "/images/services/book.png",
      title: "Hooray! Pick-up",
      desc: "Enjoy exploring and pick up your luggage as scheduled.",
      extraClasses: "md:col-span-2 lg:col-span-1",
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
      <ServiceBenefits />
      <Testimonials />
      <FAQAccordion />
      <TrustedAndLoved />
    </div>
  );
};

export default LuggaugePage;

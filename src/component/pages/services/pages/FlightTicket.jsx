import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import ServiceCountry from "../[slug]/ServiceCountry";
import TravelPartners from "../components/TravelPartners";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../Testimonials";
import RelatedServices from "../components/RelatedServices";
import FAQAccordion from "../components/FAQAccordion";

const FlightTicket = () => {
  const { service, serviceDetails, formConfig, loading } = useServiceData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!service || !serviceDetails) return null;

  const steps = [
    {
      img: "/images/services/search.png",
      title: "Search",
      desc: "Enter your departure and arrival destination, along with your tentative dates and tupes of  tickets.",
    },
    {
      img: "/images/services/select.png",
      title: "Select",
      desc: "Select the flight that is the most compatible with your budget and preferences from all the available flights.",
    },
    {
      img: "/images/services/book.png",
      title: "Book",
      desc: "Book tickets with special fares, apply discount coupon during checkout or contact team for assistance.",
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
      <ServiceCountry />
      <TravelPartners />
      <HowItWorks steps={steps} />
      <Testimonials />
      <RelatedServices />
      <FAQAccordion />
    </div>
  );
};

export default FlightTicket;

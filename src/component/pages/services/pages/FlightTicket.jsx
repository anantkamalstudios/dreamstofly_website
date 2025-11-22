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
  const { service, serviceDetails, formConfig, loading, slug } =
    useServiceData();

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
      desc: "Enter your departure and arrival destination, along with your tentative dates and types of tickets.",
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

  const countryData = {
    title: "Popular Destination Choices",
    discription:
      "We provide comprehensive immigration services to help you achieve your dreams of living and working abroad.",
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="w-full">
        <ServiceHero
          service={service}
          details={serviceDetails}
          formConfig={formConfig}
          slug={slug}
        />
      </div>

      <div className="pt-10 sm:pt-16 md:pt-24 lg:pt-32 px-4 sm:px-6 md:px-10 lg:px-0">
        <ServiceCountry />
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-0 mt-10 sm:mt-16">
        <TravelPartners />
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-0 mt-10 sm:mt-16">
        <HowItWorks steps={steps} />
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-0 mt-10 sm:mt-16">
        <Testimonials />
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-0 mt-10 sm:mt-16">
        <RelatedServices />
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-0 mt-10 sm:mt-16 mb-16">
        <FAQAccordion />
      </div>
    </div>
  );
};

export default FlightTicket;

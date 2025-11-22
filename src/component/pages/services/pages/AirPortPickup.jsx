import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../Testimonials";
import FAQAccordion from "../components/FAQAccordion";

const AirPortPickup = () => {
  const { service, serviceDetails, formConfig, loading } = useServiceData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

    const steps = [
      {
        img: "/images/services/search.png",
        title: "Compare prices",
        desc: "Enter your pickup and destination locations and compare the prices offered by various transport companies.",
      },
      {
        img: "/images/services/select.png",
        title: "Book ride",
        desc: "Select the company and type of ride that you want. You will receive an instant confirmation.",
      },
      {
        img: "/images/services/book.png",
        title: "Enjoy timely pickup",
        desc: "You can communicate with your driver about any change in time and be sure that you will receive a timely pickup.",
        extraClasses: "md:col-span-2 lg:col-span-1",
      },
    ];

  const features = [
    {
      icon: "/images/services/airport1.png",
      title: "3600+ transport companies",
    },
    {
      icon: "/images/services/airport2.jpg",
      title: "Available of 1600+ airports",
    },
    {
      icon: "/images/services/airport3.jpg",
      title: "Compare prices",
    },
    {
      icon: "/images/services/airport4.jpg",
      title: "Choice of ride",
    },
  ];

  if (!service || !serviceDetails) return null;
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
    </div>
  );
};

export default AirPortPickup;

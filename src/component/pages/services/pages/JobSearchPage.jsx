import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import ServiceCountry from "../[slug]/ServiceCountry";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import WhyChooseUsFeatures from "../components/WhyChooseUsFeatures";
import Testimonials from "../Testimonials";

const JobSearchPage = () => {
  const { service, serviceDetails, formConfig, loading } = useServiceData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const features = [
    {
      icon: "/images/services/vector1.png",
      title: "Trustworthy Platform",
    },
    {
      icon: "/images/services/vector2.png",
      title: "Zero Charges",
    },
    {
      icon: "/images/services/vector3.png",
      title: "One of the Largest Global Job Sites",
    },
    {
      icon: "/images/services/vector4.png",
      title: "Part-time & Full-time Jobs",
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
      <ServiceCountry />
      <TravelPartnersFeatures features={features} />
      <WhyChooseUsFeatures />
      <Testimonials />
    </div>
  );
};

export default JobSearchPage;

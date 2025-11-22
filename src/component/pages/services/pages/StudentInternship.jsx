import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import Testimonials from "../Testimonials";
import RelatedServicesPage from "../components/RelatedServicesPage";
import FAQAccordion from "../components/FAQAccordion";
import TrustedAndLoved from "../components/TrustedAndLoved";

const StudentInternship = () => {
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
      icon: "/images/services/vector1.png",
      title: "Job Seekers Toolkit for Students",
    },
    {
      icon: "/images/services/vector2.png",
      title: "Visa Sponsored Jobs & Placement Opportunities",
    },
    {
      icon: "/images/services/vector3.png",
      title: "Career Ignition and Guidence",
    },
    {
      icon: "/images/services/vector4.png",
      title: "Expert Advice for Immigiration",
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
      <Testimonials />
      <RelatedServicesPage />
      <FAQAccordion />
      <TrustedAndLoved />
    </div>
  );
};

export default StudentInternship;

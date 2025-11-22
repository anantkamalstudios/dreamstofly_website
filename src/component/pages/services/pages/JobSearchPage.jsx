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

  const jobSearchFeatures = [
    {
      icon: "/images/services/search.png",
      title: "Signup through link via web or download app",
      description:
        "Download the app via SMS received or signup through web as per the details.",
    },
    {
      icon: "/images/services/select.png",
      title: "Enter details and get KYC verified",
      description:
        "Provide all the necessary information, complete your KYC process as per the process.",
    },
    {
      icon: "/images/services/book.png",
      title: "Enjoy happy banking",
      description: "Get your Bank account active instantly and ready to use.",
    },
  ];

  const countryData = {
    title: "Popular Destination Choices",
    discription:
      "We provide comprehensive immigration services to help you achieve your dreams of living and working abroad.",
  };

  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={formConfig}
      />
      <ServiceCountry countryData={countryData} />
      <TravelPartnersFeatures features={features} />
      <WhyChooseUsFeatures features={jobSearchFeatures} />
      <Testimonials />
    </div>
  );
};

export default JobSearchPage;

import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import WhyChooseUsFeatures from "../components/WhyChooseUsFeatures";
import Testimonials from "../Testimonials";
import TrustedAndLoved from "../components/TrustedAndLoved";

const StudentFinancing = () => {
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
      title: "Financing for education and living expenses",
    },
    {
      icon: "/images/services/vector2.png",
      title: "Completely online process",
    },
    {
      icon: "/images/services/vector3.png",
      title: "Interest rates start from 9.85%",
    },
    {
      icon: "/images/services/vector4.png",
      title: "Tax Benefits u/s 80 E",
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

  const financeFeatures = [
    {
      icon: "/images/services/search.png",
      title: "Fill the form",
      description:
        "Fill in your and your co-signer's details. A student financing representative will reach out to you shortly.",
    },
    {
      icon: "/images/services/select.png",
      title: "Submit required documents",
      description: "Upload the required documents to begin the process.",
    },
    {
      icon: "/images/services/book.png",
      title: "Loan Approval",
      description:
        "Get disbursement in up to 7 working days, once your loan is approved.",
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
      <WhyChooseUsFeatures features={financeFeatures} />
      <Testimonials />
      <TrustedAndLoved stats={stats} />
    </div>
  );
};

export default StudentFinancing;

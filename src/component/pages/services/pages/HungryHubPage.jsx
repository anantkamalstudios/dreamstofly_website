import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import OurCommitments from "../components/OurCommitments";
import ServiceCountry from "../[slug]/ServiceCountry";
import HowItWorksPage from "../components/HowItWorksPage";
import RelatedServices from "../components/RelatedServices";
import FAQSection from "../../accomodation/components/FAQSection";
import Testimonials from "../Testimonials";
import TrustedAndLoved from "../components/TrustedAndLoved";

const HungryHubPage = () => {
  const { service, serviceDetails, formConfig, loading, slug } = useServiceData();

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
      icon: "/images/services/moneyTransfer1.jpg",
      title: "Provide student's details",
      description:
        "Enter the personal details of the student along with rental and university proof and the amount you want to transfer abroad.",
    },
    {
      icon: "/images/services/moneyTransfer2.png",
      title: "Provide sender's details",
      description:
        "Enter your own details, residential proof and identiity proof.",
    },
    {
      icon: "/images/services/moneyTransfer3.png",
      title: "We transfer the money",
      description:
        "We will have the order transferres the same or next business day.",
    },
  ];

  const countryData = {
    title: "Countries We Help Immigrate",
    discription:
      "We provide comprehensive immigration services to help you achieve your dreams of living and working abroad.",
  };

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
        slug={slug}
      />
      <OurCommitments />
      <ServiceCountry countryData={countryData} />
      <HowItWorksPage steps={steps} />
      <RelatedServices />
      <FAQSection />
      <TrustedAndLoved stats={stats} />
      <Testimonials />
    </div>
  );
};

export default HungryHubPage;

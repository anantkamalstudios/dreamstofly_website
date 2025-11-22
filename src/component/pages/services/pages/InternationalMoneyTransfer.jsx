import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import OurCommitments from "../components/OurCommitments";
import ServiceCountry from "../[slug]/ServiceCountry";
import HowItWorksPage from "../components/HowItWorksPage";
import FAQSection from "../../accomodation/components/FAQSection";
import TrustedAndLoved from "../components/TrustedAndLoved";
import Testimonials from "../Testimonials";

const InternationalMoneyTransfer = () => {
  const { service, serviceDetails, formConfig, loading } = useServiceData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!service || !serviceDetails) return null;

  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={formConfig}
      />
      <OurCommitments />
      <ServiceCountry />
      <HowItWorksPage />
      <FAQSection />
      <TrustedAndLoved />
      <Testimonials />
    </div>
  );
};

export default InternationalMoneyTransfer;

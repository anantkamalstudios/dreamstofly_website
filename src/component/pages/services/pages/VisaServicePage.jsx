import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import OurCommitments from "../components/OurCommitments";
import ServiceCountry from "../[slug]/ServiceCountry";
import Testimonials from "../Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorksPage from "../components/HowItWorksPage";
import TrustedAndLoved from "../components/TrustedAndLoved";

const VisaServicePage = () => {
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
    <div>
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={formConfig}
      />
      <OurCommitments />
      <ServiceCountry />
      <WhyChooseUs />
      <HowItWorksPage />
      <Testimonials />
      <TrustedAndLoved />
    </div>
  );
};

export default VisaServicePage;

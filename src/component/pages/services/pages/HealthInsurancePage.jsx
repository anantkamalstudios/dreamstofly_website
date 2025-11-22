import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import OurCommitments from "../components/OurCommitments";
import ServiceCountry from "../[slug]/ServiceCountry";
import ServiceBenefitsPage from "../components/ServiceBenefitsPage";
import Testimonials from "../Testimonials";
import TrustedAndLoved from "../components/TrustedAndLoved";
import HowItWorksPage from "../components/HowItWorksPage";
import FAQSection from "../../accomodation/components/FAQSection";

const HealthInsurancePage = () => {
  const { service, serviceDetails, formConfig, loading } = useServiceData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!service || !serviceDetails) return null;

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

  const steps = [
    {
      icon: "/images/services/moneyTransfer1.jpg",
      title: "Compare  insurance covers",
      description: "Compare insurance policies wider to choose, best for you.",
    },
    {
      icon: "/images/services/payment1.jpg",
      title: "Make easy payment",
      description:
        "Payment is a very simple and easy to pay. Instant payment confirmation.",
    },
    {
      icon: "/images/services/payment2.png",
      title: "Activate policy",
      description:
        "Tada! Your policy is activated. No worry about hospital expanses.",
    },
  ];

    const countryData = {
      title: "Countries We Help Immigrate",
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
      <OurCommitments />
      <ServiceCountry countryData={countryData} />
      <ServiceBenefitsPage />
      <HowItWorksPage steps={steps} />
      <FAQSection />
      <Testimonials />
      <TrustedAndLoved stats={stats} />
    </div>
  );
};

export default HealthInsurancePage;

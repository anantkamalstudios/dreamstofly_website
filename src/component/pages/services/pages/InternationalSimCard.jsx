import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import RelatedServices from "../components/RelatedServices";
import ServiceHero from "../[slug]/ServiceHero";
import TrustedAndLoved from "../components/TrustedAndLoved";

const InternationalSimCard = () => {
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
      icon: "/images/services/airport1.png",
      title: "Unlimited incoming calls",
    },
    {
      icon: "/images/services/airport2.jpg",
      title: "Online recharge from anywhere",
    },
    {
      icon: "/images/services/airport3.jpg",
      title: "Affordable internet packs",
    },
    {
      icon: "/images/services/airport4.jpg",
      title: "Coverage in 50+ countries",
    },
  ];

  const steps = [
    {
      img: "/images/services/search.png",
      title: "Select a plan",
      desc: "Choose a SIM & a plan as per your requirement.",
    },
    {
      img: "/images/services/select.png",
      title: "Confirm your details",
      desc: "Fill in your details and proceed for payment.",
    },
    {
      img: "/images/services/book.png",
      title: "Instant Activation",
      desc: "SIM will be activated instantly and you can start using it as soon as you arrive in the new country.",
      extraClasses: "md:col-span-2 lg:col-span-1",
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
      <RelatedServices />
      <FAQAccordion />
      <TrustedAndLoved />
    </div>
  );
};

export default InternationalSimCard;

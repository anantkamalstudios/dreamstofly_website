import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import { Power } from "lucide-react";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import TrustedAndLoved from "../components/TrustedAndLoved";

const ForexPage = () => {
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
      icon: "/images/services/airport1.png",
      title: "Single click",
    },
    {
      icon: "/images/services/airport2.jpg",
      title: "Contactless Bank",
    },
    {
      icon: "/images/services/airport3.jpg",
      title: "Doorstep Delivery",
    },
    {
      icon: "/images/services/airport4.jpg",
      title: "Zero cost bills",
    },
  ];

  const steps = [
    {
      img: "/images/services/search.png",
      title: "Filling your requirement",
      desc: "Details about the total amount and the market price you are expecting.",
    },
    {
      img: "/images/services/select.png",
      title: "Connect with FOREX experts",
      desc: "Our partner representative will call you back to fullfill your requirement.",
    },
    {
      img: "/images/services/book.png",
      title: "Tada! You got FOREX card",
      desc: "Get your card or destination currency delivered to your doorstep.",
      extraClasses: "md:col-span-2 lg:col-span-1",
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
      <TrustedAndLoved stats={stats} />
    </div>
  );
};

export default ForexPage;

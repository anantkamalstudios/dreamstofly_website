import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import HowItWorks from "../components/HowItWorks";
import ProductsWeOffer from "../components/ProductsWeOffer";
import Testimonials from "../Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import TrustedAndLoved from "../components/TrustedAndLoved";

const RoomEssentials = () => {
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
      icon: "/images/services/essential1.png",
      title: "Premium quality product",
    },
    {
      icon: "/images/services/essential2.png",
      title: "Unbeatable price",
    },
    {
      icon: "/images/services/essential3.png",
      title: "100% money back",
    },
    {
      icon: "/images/services/essential4.png",
      title: "Option to choose delivery date",
    },
  ];

  const steps = [
    {
      img: "/images/services/roomEssential1.jpg",
      title: "Choose your kit",
      desc: "Browse through the selection of student essentials and choose your desired kit for purchase.",
    },
    {
      img: "/images/services/roomEssential2.jpg",
      title: "Fill in your details",
      desc: "Provide your shipping details along with residential proof and university proof.",
    },
    {
      img: "/images/services/roomEssential3.jpg",
      title: "Payment & Delivery",
      desc: "Make the payment for your desired items and schedule the date of delivery",
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
      <ProductsWeOffer />
      <Testimonials />
      <FAQAccordion />
      <TrustedAndLoved stats={stats} />
    </div>
  );
};

export default RoomEssentials;

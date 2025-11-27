import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import RelatedServices from "../components/RelatedServices";
import ServiceHero from "../[slug]/ServiceHero";
import TrustedAndLoved from "../components/TrustedAndLoved";

// Form configuration for International SIM Card
const simCardForm = {
  title: "Purchase new SIM",
  icon: "/images/formicon/suit.png",
  description: "",
  buttonText: "Order Now",
  fields: [
    {
      name: "destination",
      label: "Destination Country",
      type: "select",
      required: true,
      options: [
        "USA",
        "UK",
        "Canada",
        "Australia",
        "Germany",
        "France",
        "Other",
      ],
      colSpan: 2,
    },
    {
      name: "provider",
      label: "Provider",
      type: "select",
      required: true,
      options: ["Provider1", "Provider2", "Provider3", "Provider4"],
      colSpan: 2,
    },
  ],
};

const InternationalSimCard = () => {
  const { service, serviceDetails, loading } = useServiceData();
  const [showPopup, setShowPopup] = useState(false);
  const [firstFormData, setFirstFormData] = useState(null);

  const handleFirstFormSubmit = (formData) => {
    setFirstFormData(formData);
    setShowPopup(true);
  };

  const handlePopupSubmit = (popupFormData) => {
    const combinedData = {
      ...firstFormData,
      ...popupFormData,
    };
    console.log("SIM Card order request:", combinedData);
    // Here you can send the data to your API
    setShowPopup(false);
  };

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
      title: "Instant Activation",
    },
    {
      icon: "/images/services/airport2.jpg",
      title: "Affordable Rates",
    },
    {
      icon: "/images/services/airport3.jpg",
      title: "24/7 Support",
    },
    {
      icon: "/images/services/airport4.jpg",
      title: "Wide Coverage",
    },
  ];

  const steps = [
    {
      icon: "/images/services/search.png",
      title: "Select Your Plan",
      desc: "Choose the perfect data and call package for your destination.",
    },
    {
      icon: "/images/services/select.png",
      title: "Place Your Order",
      desc: "Provide your travel details and delivery information.",
    },
    {
      icon: "/images/services/book.png",
      title: "Receive & Activate",
      desc: "Get your SIM card before you travel and activate upon arrival.",
      extraClasses: "md:col-span-2 lg:col-span-1",
    },
  ];

  const stats = [
    {
      number: "100+",
      label: "Countries Covered",
    },
    {
      number: "24/7",
      label: "Customer Support",
    },
    {
      number: "1M+",
      label: "Happy Customers",
    },
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={{
          ...simCardForm,
          onSubmit: handleFirstFormSubmit,
        }}
      />
      <PoweredBySection />
      <TravelPartnersFeatures features={features} />
      <HowItWorks steps={steps} />
      <Testimonials />
      <RelatedServices />
      <TrustedAndLoved stats={stats} />
    </div>
  );
};

export default InternationalSimCard;

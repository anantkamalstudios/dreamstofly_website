import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import { Power } from "lucide-react";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import TrustedAndLoved from "../components/TrustedAndLoved";

// Form configuration for Forex Services
const forexForm = {
  title: "Get Forex Services",
  icon: "/images/formicon/suit.png",
  description: "",
  buttonText: "Submit",
  fields: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
      colSpan: 1,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
      colSpan: 1,
    },
    {
      name: "nationality",
      label: "Nationality",
      type: "text",
      required: true,
      colSpan: 1,
    },
    {
      name: "destinationCountry",
      label: "Destination Country",
      type: "text",
      required: true,
      colSpan: 1,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "Enter your email",
      colSpan: 2,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
      placeholder: "Enter your phone number",
      colSpan: 2,
    },
  ],
};

const ForexPage = () => {
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
    console.log("Forex service request:", combinedData);
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
      icon: "/images/services/forex1.png",
      title: "Best Exchange Rates",
    },
    {
      icon: "/images/services/forex2.png",
      title: "Zero Commission",
    },
    {
      icon: "/images/services/forex3.png",
      title: "Same Day Service",
    },
    {
      icon: "/images/services/forex4.png",
      title: "Multiple Currencies",
    },
  ];

  const steps = [
    {
      img: "/images/services/search.png",
      title: "Book your order",
      desc: "Select your preferred currency and amount you want to buy or sell.",
    },
    {
      img: "/images/services/select.png",
      title: "Get live rates",
      desc: "Check the live exchange rates and confirm your order.",
    },
    {
      img: "/images/services/book.png",
      title: "Collect your currency",
      desc: "Pick up your currency from our nearest branch or get it delivered.",
      extraClasses: "md:col-span-2 lg:col-span-1",
    },
  ];

  const stats = [
    {
      number: "12K+",
      label: "Success Journey",
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
        formConfig={{
          ...forexForm,
          onSubmit: handleFirstFormSubmit,
        }}
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

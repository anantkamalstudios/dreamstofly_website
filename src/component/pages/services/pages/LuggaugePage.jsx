import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import HowItWorks from "../components/HowItWorks";
import ServiceBenefits from "../components/ServiceBenefits";
import FAQAccordion from "../components/FAQAccordion";
import Testimonials from "../Testimonials";
import TrustedAndLoved from "../components/TrustedAndLoved";
import ServicesPopUpForm from "../components/ServicesPopUpForm";

const luggageForm = {
  title: "Luggage Storage",
  icon: "/images/formicon/suit.png",
  description: "",
  buttonText: "Book Now",
  fields: [
    {
      name: "country",
      label: "Country",
      type: "select",
      required: true,
      options: ["UK", "USA"],
      colSpan: 2,
    },
  ],
};

const luggagePopupForm = {
  title: "Get Luggage Storage Service",
  icon: "/images/formicon/suit.png",
  description: "Leave us your details and we will get back to you soon.",
  buttonText: "Submit",
  fields: [
    {
      label: "First name",
      type: "text",
      name: "firstName",
      required: true,
      colSpan: 1,
    },
    {
      label: "Last name",
      type: "text",
      name: "lastName",
      required: true,
      colSpan: 1,
    },
    {
      label: "Email address",
      type: "email",
      name: "email",
      required: true,
      colSpan: 2,
    },
    {
      label: "Phone",
      type: "phone",
      name: "phone",
      required: true,
      colSpan: 2,
    },
  ],
};

const LuggaugePage = () => {
  const { service, serviceDetails, loading } = useServiceData();
  const [showPopup, setShowPopup] = useState(false);
  const [firstFormData, setFirstFormData] = useState(null);

  const handleSubmit = (formData) => {
    setFirstFormData(formData);
    setShowPopup(true);
  };

  const handlePopupSubmit = (popupFormData) => {
    const combinedData = {
      ...firstFormData,
      ...popupFormData,
    };
    console.log("Luggage service request:", combinedData);
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
      icon: "/images/services/vector1.png",
      title: "Doorstep Pickup & Drop",
      description:
        "We'll pick up and deliver your luggage right at your doorstep.",
    },
    {
      icon: "/images/services/vector2.png",
      title: "Real-time Tracking",
      description:
        "Track your luggage in real-time with our advanced tracking system.",
    },
    {
      icon: "/images/services/vector3.png",
      title: "Safe & Secure",
      description: "Your belongings are handled with utmost care and security.",
    },
    {
      icon: "/images/services/vector4.png",
      title: "On-time Delivery",
      description: "Guaranteed on-time delivery to your specified location.",
    },
  ];

  const steps = [
    {
      icon: "/images/services/search.png",
      title: "Book Your Service",
      description: "Fill in the details and book your luggage service online.",
    },
    {
      icon: "/images/services/select.png",
      title: "Schedule Pickup",
      description: "Choose a convenient time for us to pick up your luggage.",
    },
    {
      icon: "/images/services/book.png",
      title: "Relax & Track",
      description:
        "Sit back and track your luggage in real-time until delivery.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "99.9%", label: "On-time Delivery" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={{
          ...luggageForm,
          onSubmit: handleSubmit,
        }}
      />
      <PoweredBySection />
      <TravelPartnersFeatures features={features} />
      <HowItWorks steps={steps} />
      <ServiceBenefits benefits={serviceDetails.benefits} />
      <FAQAccordion faqs={serviceDetails.faqs} />
      <Testimonials />
      <TrustedAndLoved stats={stats} />

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <ServicesPopUpForm
              onClose={() => setShowPopup(false)}
              onSubmit={handlePopupSubmit}
              initialData={firstFormData}
              formConfig={luggagePopupForm}
            />
          </div>
        </div>
      )}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}
    </div>
  );
};

export default LuggaugePage;

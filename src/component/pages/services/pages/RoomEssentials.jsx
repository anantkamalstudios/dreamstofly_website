import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import HowItWorks from "../components/HowItWorks";
import ProductsWeOffer from "../components/ProductsWeOffer";
import Testimonials from "../Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import TrustedAndLoved from "../components/TrustedAndLoved";
import ServicesPopUpForm from "../components/ServicesPopUpForm";

// Form configuration for Room Essentials
const roomEssentialsForm = {
  title: "Order Room Essentials",
  icon: "/images/formicon/room-essentials.png",
  description: "Get all your room essentials delivered to your doorstep",
  buttonText: "Order Now",
  fields: [
    {
      name: "fullName",
      label: "Full Name",
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
      colSpan: 1,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
      placeholder: "Enter your phone number",
      colSpan: 1,
    },
    {
      name: "deliveryAddress",
      label: "Delivery Address",
      type: "textarea",
      required: true,
      colSpan: 2,
    },
    {
      name: "deliveryDate",
      label: "Preferred Delivery Date",
      type: "date",
      required: true,
      colSpan: 1,
    },
    {
      name: "deliveryTime",
      label: "Preferred Time Slot",
      type: "select",
      required: true,
      options: [
        "Morning (9 AM - 12 PM)",
        "Afternoon (12 PM - 4 PM)",
        "Evening (4 PM - 8 PM)",
      ],
      colSpan: 1,
    },
  ],
};

const RoomEssentials = () => {
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
    console.log("Room essentials order:", combinedData);
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
      title: "Wide Range of Products",
      description: "Everything you need for your room in one place",
    },
    {
      icon: "/images/services/vector2.png",
      title: "Fast Delivery",
      description: "Quick delivery to your doorstep",
    },
    {
      icon: "/images/services/vector3.png",
      title: "Affordable Prices",
      description: "Competitive prices for students",
    },
    {
      icon: "/images/services/vector4.png",
      title: "24/7 Support",
      description: "We're here to help anytime",
    },
  ];

  const steps = [
    {
      icon: "/images/services/search.png",
      title: "Browse Products",
      desc: "Select from our wide range of room essentials",
    },
    {
      icon: "/images/services/select.png",
      title: "Add to Cart",
      desc: "Choose your items and add them to your cart",
    },
    {
      icon: "/images/services/book.png",
      title: "Checkout",
      desc: "Complete your purchase with secure payment",
    },
  ];

  const stats = [
    { number: "5K+", label: "Happy Customers" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={{
          ...roomEssentialsForm,
          onSubmit: handleFirstFormSubmit,
        }}
      />
      <PoweredBySection />
      <TravelPartnersFeatures features={features} />
      <HowItWorks steps={steps} />
      <ProductsWeOffer products={serviceDetails.products} />
      <Testimonials />
      <FAQAccordion faqs={serviceDetails.faqs} />
      <TrustedAndLoved stats={stats} />

      {/* Popup Form */}
      <ServicesPopUpForm
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onSubmit={handlePopupSubmit}
      />

      {/* Blur overlay when popup is open */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}
    </div>
  );
};

export default RoomEssentials;

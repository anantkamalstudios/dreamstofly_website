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
import axios from "axios";
import ServicesPopUpForm from "../components/ServicesPopUpForm";

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

const simCardPopupForm = {
  title: "Get International SIM Card",
  icon: "/images/formicon/suit.png",
  description: "Leave us your contact details to serve you later.",
  buttonText: "Submit",
  fields: [
    {
      label: "First name",
      type: "text",
      name: "firstname",
      required: true,
      colSpan: 1,
    },
    {
      label: "Last name",
      type: "text",
      name: "lastname",
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
      name: "mobile",
      required: true,
      colSpan: 2,
    },
  ],
};

const InternationalSimCard = () => {
  const { service, serviceDetails, loading } = useServiceData();
  const [showPopup, setShowPopup] = useState(false);
  const [firstFormData, setFirstFormData] = useState({});
  const [popupFormData, setPopupFormData] = useState({});

  const handleFirstFormSubmit = () => {
    console.log("first from data from airportPickup =>", firstFormData);
    setShowPopup(true);
  };

  const handlePopupSubmit = async () => {
    try {
      const res = await axios.post(
        `${
          import.meta.env.VITE_BASE_URL
        }//ServiceLead/Leads_controller/internationalsim_lead`,
        popupFormData
      );
      if (res.status === 200) alert(res.data.message);
      setShowPopup(false);
    } catch (err) {
      console.log(err);
      alert("Something went wrong. Please try again.");
    }
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
          formData: firstFormData,
          setFormData: setFirstFormData,
          onSubmit: handleFirstFormSubmit,
          ...simCardForm,
        }}
      />
      <PoweredBySection />
      <TravelPartnersFeatures features={features} />
      <HowItWorks steps={steps} />
      <Testimonials />
      <RelatedServices />
      <TrustedAndLoved stats={stats} />

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <ServicesPopUpForm
              onClose={() => setShowPopup(false)}
              onSubmit={handlePopupSubmit}
              formData={popupFormData}
              setFormData={setPopupFormData}
              formConfig={simCardPopupForm}
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

export default InternationalSimCard;

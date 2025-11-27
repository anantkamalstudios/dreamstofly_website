import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import OurCommitments from "../components/OurCommitments";
import ServiceCountry from "../[slug]/ServiceCountry";
import HowItWorksPage from "../components/HowItWorksPage";
import RelatedServices from "../components/RelatedServices";
import FAQSection from "../../accomodation/components/FAQSection";
import Testimonials from "../Testimonials";
import TrustedAndLoved from "../components/TrustedAndLoved";

// Form configuration for HungryHub Service
const hungryHubForm = {
  title: "Select Destination Country",
  icon: "/images/formicon/suit.png",
  description: "",
  buttonText: "Grab Offer Now",
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
      type: "select",
      options: [
        "USA",
        "UK",
        "Canada",
        "Australia",
        "Germany",
        "France",
        "Other",
      ],
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

const HungryHubPage = () => {
  const { service, serviceDetails, loading, slug } = useServiceData();
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
    console.log("Food order request:", combinedData);
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

  const commitments = [
    {
      title: "Wide Variety",
      description: "Choose from hundreds of restaurants and cuisines",
      icon: "🍽️",
    },
    {
      title: "Fast Delivery",
      description: "Get your food delivered in under 30 minutes",
      icon: "⚡",
    },
    {
      title: "Best Quality",
      description: "Only the freshest ingredients prepared by top chefs",
      icon: "🌟",
    },
    {
      title: "24/7 Support",
      description: "We're always here to help with your order",
      icon: "🛎️",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Provide student's details",
      description: "Browse our extensive menu and select your favorite dishes",
      icon: "/images/services/moneyTransfer1.jpg",
    },
    {
      step: 2,
      title: "Place Your Order",
      description: "Enter your delivery details and payment information",
      icon: "/images/services/moneyTransfer2.png",
    },
    {
      step: 3,
      title: "Track Delivery",
      description: "Follow your order in real-time as it makes its way to you",
      icon: "/images/services/moneyTransfer3.png",
    },
  ];

  const countryData = {
    title: "Cities We Serve",
    description:
      "We deliver to major cities across the country with our network of partner restaurants",
  };

  const stats = [
    {
      number: "100+",
      label: "Restaurants",
    },
    {
      number: "50K+",
      label: "Happy Customers",
    },
    {
      number: "4.8",
      label: "Average Rating",
    },
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={{
          ...hungryHubForm,
          onSubmit: handleFirstFormSubmit,
        }}
        slug={slug}
      />
      <OurCommitments commitments={commitments} />
      <ServiceCountry countryData={countryData} />
      <HowItWorksPage steps={howItWorks} />
      <RelatedServices />
      <Testimonials />
      <TrustedAndLoved stats={stats} />
    </div>
  );
};

export default HungryHubPage;

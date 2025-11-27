import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import OurCommitments from "../components/OurCommitments";
import ServiceCountry from "../[slug]/ServiceCountry";
import HowItWorksPage from "../components/HowItWorksPage";
import FAQSection from "../../accomodation/components/FAQSection";
import Testimonials from "../Testimonials";
import TrustedAndLoved from "../components/TrustedAndLoved";

// Form configuration for International Money Transfer
const moneyTransferForm = {
  title: "Send Money Abroad",
  icon: "/images/formicon/money-transfer.png",
  description: "Fast, secure and low-cost international money transfers",
  buttonText: "Send Money Now",
  fields: [
    {
      name: "fromCountry",
      label: "Sending From",
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
      colSpan: 1,
    },
    {
      name: "toCountry",
      label: "Sending To",
      type: "select",
      required: true,
      options: [
        "India",
        "USA",
        "UK",
        "Canada",
        "Australia",
        "Germany",
        "France",
        "Other",
      ],
      colSpan: 1,
    },
    {
      name: "amount",
      label: "Amount to Send",
      type: "number",
      required: true,
      placeholder: "Enter amount",
      min: 1,
      colSpan: 1,
    },
    {
      name: "receiveAmount",
      label: "Recipient Gets",
      type: "number",
      readOnly: true,
      colSpan: 1,
      value: "Calculating...",
    },
    {
      name: "senderName",
      label: "Your Full Name",
      type: "text",
      required: true,
      colSpan: 1,
    },
    {
      name: "senderEmail",
      label: "Your Email",
      type: "email",
      required: true,
      placeholder: "Enter your email",
      colSpan: 1,
    },
    {
      name: "senderPhone",
      label: "Your Phone Number",
      type: "tel",
      required: true,
      placeholder: "Enter your phone number",
      colSpan: 1,
    },
  ],
};

const InternationalMoneyTransfer = () => {
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
    console.log("Money transfer data:", combinedData);
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

  if (!service || !serviceDetails) return null;

  const steps = [
    {
      icon: "/images/services/moneyTransfer1.jpg",
      title: "Provide student's details",
      description:
        "Enter the personal details of the student along with rental and university proof and the amount you want to transfer abroad.",
    },
    {
      icon: "/images/services/moneyTransfer2.png",
      title: "Provide sender's details",
      description:
        "Enter your own details, residential proof and identiity proof.",
    },
    {
      icon: "/images/services/moneyTransfer3.png",
      title: "We transfer the money",
      description:
        "We will have the order transferres the same or next business day.",
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
        formConfig={{
          ...moneyTransferForm,
          onSubmit: handleFirstFormSubmit,
        }}
      />
      <OurCommitments />
      <ServiceCountry countryData={countryData} />
      <HowItWorksPage steps={steps} />
      <FAQSection />
      <TrustedAndLoved stats={stats} />
      <Testimonials />
    </div>
  );
};

export default InternationalMoneyTransfer;

import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import OurCommitments from "../components/OurCommitments";
import ServiceCountry from "../[slug]/ServiceCountry";
import HowItWorksPage from "../components/HowItWorksPage";
import FAQSection from "../../accomodation/components/FAQSection";
import Testimonials from "../Testimonials";
import TrustedAndLoved from "../components/TrustedAndLoved";
import InternationalMoneyHeroPage from "../components/InternationalMoneyHeroPage";
import axios from "axios";
import Loader from "../../../../common/Loader";

const InternationalMoneyTransfer = () => {
  const { service, serviceDetails, loading } = useServiceData();
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = async (submissionData) => {
    const dataToSubmit = submissionData || formData;
    console.log("Received submission data:", dataToSubmit);

    const payload = {
      first_name: dataToSubmit.first_name,
      last_name: dataToSubmit.last_name,
      email: dataToSubmit.email,
      phone: `${dataToSubmit.countryCode}${dataToSubmit.phone}`,
      property: dataToSubmit.provider,
      payment_method: dataToSubmit.payment_method,
      recipient_gets: dataToSubmit.recipient_gets,
      recipient_currency: dataToSubmit.recipient_currency,
      you_send: dataToSubmit.you_send,
      send_currency: dataToSubmit.send_currency,
      fx_rate: dataToSubmit.fx_rate,
      converted_amount: dataToSubmit.converted_amount,
    };

    console.log("Submitting prepared payload:", payload);

    try {
      const res = await axios.post(
        `${
          import.meta.env.VITE_BASE_URL
        }//ServiceLead/Leads_controller/international_money_lead`,
        payload
      );
      console.log("API Response:", res);
      alert("form submitted successfully! We'll get back to you soon.");
      setShowPopup(false);
    } catch (error) {
      console.error("API Error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

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

  if (loading) <Loader />;
  if (!service || !serviceDetails) return null;

  return (
    <div className="min-h-screen">
      <InternationalMoneyHeroPage
        service={service}
        details={serviceDetails}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
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

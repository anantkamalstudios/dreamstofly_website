import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import OurCommitments from "../components/OurCommitments";
import ServiceCountry from "../[slug]/ServiceCountry";
import ServiceBenefitsPage from "../components/ServiceBenefitsPage";
import Testimonials from "../Testimonials";
import TrustedAndLoved from "../components/TrustedAndLoved";
import HowItWorksPage from "../components/HowItWorksPage";
import FAQSection from "../../accomodation/components/FAQSection";
import ServicesPopUpForm from "../components/ServicesPopUpForm";
import axios from "axios";

const healthInsuranceForm = {
  title: "Buy Health Insurance",
  icon: "/images/formicon/suit.png",
  description: "",
  buttonText: "Book Now",
  fields: [
    {
      name: "country",
      label: "Country",
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
  ],
};

const healthInsurancePopupForm = {
  title: "Select Provider",
  icon: "/images/formicon/suit.png",
  description: "",
  buttonText: "Submit",
  fields: [
    {
      name: "firstname",
      label: "First Name",
      type: "text",
      required: true,
      colSpan: 1,
    },
    {
      name: "lastname",
      label: "Last Name",
      type: "text",
      required: true,
      colSpan: 1,
    },
    // {
    //   name: "adults",
    //   label: "Adults",
    //   type: "number",
    //   required: true,
    //   colSpan: 1,
    // },
    // {
    //   name: "children",
    //   label: "Children",
    //   type: "number",
    //   required: true,
    //   colSpan: 1,
    // },
    {
      name: "start_date",
      label: "Start Date",
      type: "date",
      required: true,
      colSpan: 1,
    },
    {
      name: "end_date",
      label: "End Date",
      type: "date",
      required: true,
      colSpan: 1,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      colSpan: 2,
    },
    {
      name: "mobile",
      label: "Phone",
      type: "phone",
      required: true,
      colSpan: 2,
    },
  ],
};

const HealthInsurancePage = () => {
  const { service, serviceDetails, loading } = useServiceData();
  const [showPopup, setShowPopup] = useState(false);
  const [firstFormData, setFirstFormData] = useState({});
  const [popupFormData, setPopupFormData] = useState({});

  const handleFirstFormSubmit = () => {
    console.log("first from data from airportPickup =>", firstFormData);
    setShowPopup(true);
  };

  const handlePopupSubmit = async () => {
    console.log("Airport pickup request submitted:=> ", popupFormData);
    const res = await axios.post(
      "https://devlopment.dreamstofly.com//ServiceLead/Leads_controller/health_insurance_lead",
      popupFormData
    );
    console.log(res);
    alert("form submitted successfully! We'll get back to you soon.");

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
      title: "Compare  insurance covers",
      description: "Compare insurance policies wider to choose, best for you.",
    },
    {
      icon: "/images/services/payment1.jpg",
      title: "Make easy payment",
      description:
        "Payment is a very simple and easy to pay. Instant payment confirmation.",
    },
    {
      icon: "/images/services/payment2.png",
      title: "Activate policy",
      description:
        "Tada! Your policy is activated. No worry about hospital expanses.",
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
          formData: firstFormData,
          setFormData: setFirstFormData,
          onSubmit: handleFirstFormSubmit,
          ...healthInsuranceForm,
        }}
      />
      <OurCommitments />
      <ServiceCountry countryData={countryData} />
      <ServiceBenefitsPage />
      <HowItWorksPage steps={steps} />
      <FAQSection />
      <Testimonials />
      <TrustedAndLoved stats={stats} />
      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <ServicesPopUpForm
              onClose={() => setShowPopup(false)}
              onSubmit={handlePopupSubmit}
              formData={popupFormData}
              setFormData={setPopupFormData}
              formConfig={healthInsurancePopupForm}
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

export default HealthInsurancePage;

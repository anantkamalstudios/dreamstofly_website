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
      name: "adults",
      label: "Adults",
      type: "number",
      required: true,
      colSpan: 1,
    },
    {
      name: "children",
      label: "Children",
      type: "number",
      required: true,
      colSpan: 1,
    },
    {
      name: "startDate",
      label: "Start Date",
      type: "date",
      required: true,
      colSpan: 1,
    },
    {
      name: "endDate",
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
      name: "phone",
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
    console.log("Health insurance form submitted:", combinedData);
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
          ...healthInsuranceForm,
          onSubmit: handleSubmit,
        }}
      />
      <OurCommitments />
      <ServiceCountry countryData={countryData} />
      <ServiceBenefitsPage />
      <HowItWorksPage steps={steps} />
      <FAQSection />

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <ServicesPopUpForm
              onClose={() => setShowPopup(false)}
              onSubmit={handlePopupSubmit}
              initialData={firstFormData}
              formConfig={healthInsurancePopupForm}
            />
          </div>
        </div>
      )}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}
      <Testimonials />
      <TrustedAndLoved stats={stats} />
    </div>
  );
};

export default HealthInsurancePage;

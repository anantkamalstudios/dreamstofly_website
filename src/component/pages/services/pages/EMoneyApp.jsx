import React, { useState, useEffect } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import ServicesPopUpForm from "../components/ServicesPopUpForm";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import WhyChooseUsFeatures from "../components/WhyChooseUsFeatures";
import TrustedAndLoved from "../components/TrustedAndLoved";
import { getServiceBySlug } from "../../../data/services/ServicesData";
import { getServiceDetails } from "../../../data/services/ServiceDetails";
import Testimonials from "../Testimonials";
import RelatedServices from "../components/RelatedServices";
import FAQAccordion from "../components/FAQAccordion";
import axios from "axios";
import Loader from "../../../../common/Loader";

const eMoneyAppForm = {
  title: "Select Destination Country",
  icon: "/images/formicon/suit.png",
  description: "",
  buttonText: "Grab Offer Now",
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
    {
      name: "provider",
      label: "Provider",
      type: "select",
      required: true,
      options: ["ICICI", "HDFC"],
      colSpan: 2,
    },
  ],
};

const eMoneyAppPopupForm = {
  title: "Get Student e-Money App Service",
  icon: "/images/formicon/suit.png",
  description: "",
  buttonText: "Submit",
  fields: [
    {
      name: "firstname",
      label: "First name",
      type: "text",
      required: true,
      colSpan: 1,
    },
    {
      name: "lastname",
      label: "Last name",
      type: "text",
      required: true,
      colSpan: 1,
    },
    {
      name: "university",
      label: "Select University",
      type: "select",
      required: true,
      options: ["University1", "University2", "University3", "University4"],
      colSpan: 2,
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

const EMoneyApp = () => {
  const { service, serviceDetails, loading } = useServiceData();
  const [showPopup, setShowPopup] = useState(false);

  const [firstFormData, setFirstFormData] = useState({});
  const [popupFormData, setPopupFormData] = useState({});

  const handleFirstFormSubmit = () => {
    console.log("first from data from e money =>", firstFormData);
    setShowPopup(true);
  };

  const handlePopupSubmit = async () => {
    try {
      const res = await axios.post(
        `${
          import.meta.env.VITE_BASE_URL
        }//ServiceLead/Leads_controller/emoney_lead`,
        popupFormData
      );
      if (res.status === 200) alert(res.data.message);
      setShowPopup(false);
    } catch (err) {
      console.log(err);
      alert("Something went wrong. Please try again.");
    }
  };

  const features = [
    {
      icon: "/images/services/vector1.png",
      title: "Competitive Interest Rates",
      description: "Affordable interest rates for students",
    },
    {
      icon: "/images/services/vector2.png",
      title: "Flexible Repayment",
      description: "Repay after you complete your studies",
    },
    {
      icon: "/images/services/vector3.png",
      title: "No Collateral",
      description: "No need for property or asset as collateral",
    },
    {
      icon: "/images/services/vector4.png",
      title: "Quick Approval",
      description: "Fast processing and approval of loans",
    },
  ];

  const steps = [
    {
      icon: "/images/services/search.png",
      title: "Apply Online",
      description: "Fill out our simple application form",
    },
    {
      icon: "/images/services/select.png",
      title: "Submit Documents",
      description: "Provide required academic and financial documents",
    },
    {
      icon: "/images/services/book.png",
      title: "Get Approved",
      description: "Receive approval and get funded",
    },
  ];

  const stats = [
    { number: "10K+", label: "Students Funded" },
    { number: "$50M+", label: "Total Loans Disbursed" },
    { number: "95%", label: "Approval Rate" },
  ];

  if (loading) <Loader />;

  if (!service || !serviceDetails) return null;

  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={{
          formData: firstFormData,
          setFormData: setFirstFormData,
          onSubmit: handleFirstFormSubmit,
          ...eMoneyAppForm,
        }}
      />

      <PoweredBySection />
      <TravelPartnersFeatures features={features} />
      <WhyChooseUsFeatures features={steps} />
      <Testimonials />
      <RelatedServices />
      <FAQAccordion />
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
              formConfig={eMoneyAppPopupForm}
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

export default EMoneyApp;

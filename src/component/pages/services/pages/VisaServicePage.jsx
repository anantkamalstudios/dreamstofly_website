import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import OurCommitments from "../components/OurCommitments";
import ServiceCountry from "../[slug]/ServiceCountry";
import Testimonials from "../Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorksPage from "../components/HowItWorksPage";
import TrustedAndLoved from "../components/TrustedAndLoved";
import axios from "axios";
import Loader from "../../../../common/Loader";

const visaServiceForm = {
  title: "Visa Enquiry",
  icon: "/images/formicon/suit.png",
  description: "Expert guidance for all your visa needs",
  buttonText: "Apply Now",
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
    {
      name: "nationality",
      label: "Nationality",
      type: "text",
      required: true,
      colSpan: 1,
    },
    {
      name: "mobile",
      label: "Phone Number",
      type: "tel",
      required: true,
      placeholder: "Enter your phone number",
      colSpan: 1,
    },
    {
      name: "university",
      label: "Select University",
      type: "select",
      required: true,
      options: ["University1", "University2", "University3", "University4"],
      colSpan: 1,
    },
    {
      name: "country",
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
  ],
};

const VisaServicePage = () => {
  const { service, serviceDetails, loading } = useServiceData();
  const [firstFormData, setFirstFormData] = useState({});

  const handleFirstFormSubmit = async () => {
    try {
      const res = await axios.post(
        `${
          import.meta.env.VITE_BASE_URL
        }/ServiceLead/Leads_controller/visa_lead`,
        firstFormData
      );
      if (res.status === 200) alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert("Something went wrong. Please try again.");
    }
  };

  if (loading) <Loader />;

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
      title: "Fill in the details",
      description:
        "Provide all the necessary information. Our visa expert will contact you for a consultant session.",
    },
    {
      icon: "/images/services/payment1.jpg",
      title: "Initiate payment & upload documents",
      description:
        "Make the payment for the service and upload all the required documents to begin the visa application process.",
    },
    {
      icon: "/images/services/visa1.jpg",
      title: "Track application",
      description:
        "Get credentials to track your visa application status and get step-by-step guidance from our visa expert throughout the visa process.",
    },
  ];

  const countryData = {
    title: "Countries We Help Immigrate",
    description:
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
          ...visaServiceForm,
          onSubmit: handleFirstFormSubmit,
        }}
      />
      <OurCommitments />
      <ServiceCountry countryData={countryData} />
      <WhyChooseUs />
      <HowItWorksPage steps={steps} />
      <Testimonials />
      <TrustedAndLoved stats={stats} />
    </div>
  );
};

export default VisaServicePage;

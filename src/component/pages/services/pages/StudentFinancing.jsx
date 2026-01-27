import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import WhyChooseUsFeatures from "../components/WhyChooseUsFeatures";
import Testimonials from "../Testimonials";
import TrustedAndLoved from "../components/TrustedAndLoved";
import axios from "axios";
import Loader from "../../../../common/Loader";

// Form configuration for Student Financing
const studentFinancingForm = {
  title: "Application Form",
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
    {
      name: "nationality",
      label: "Nationality",
      type: "text",
      required: true,
      colSpan: 1,
    },
    {
      name: "country",
      label: "Destination Country",
      type: "text",
      required: true,
      colSpan: 1,
    },
    {
      name: "provider",
      label: "Select Provider",
      type: "select",
      options: ["Provider1", "Provider2"],
      colSpan: 2,
      required: true,
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
      name: "mobile",
      label: "Phone Number",
      type: "phone",
      required: true,
      placeholder: "Enter your phone number",
      colSpan: 2,
    },
  ],
};

const StudentFinancing = () => {
  const { service, serviceDetails, loading } = useServiceData();
  const [firstFormData, setFirstFormData] = useState({});

  const handleFirstFormSubmit = async () => {
    try {
      const res = await axios.post(
        `${
          import.meta.env.VITE_BASE_URL
        }//ServiceLead/Leads_controller/student_financing_lead`,
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

  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={{
          formData: firstFormData,
          setFormData: setFirstFormData,
          ...studentFinancingForm,
          onSubmit: handleFirstFormSubmit,
        }}
      />
      <PoweredBySection />
      <TravelPartnersFeatures features={features} />
      <WhyChooseUsFeatures features={steps} />
      <Testimonials />
      <TrustedAndLoved stats={stats} />
    </div>
  );
};

export default StudentFinancing;

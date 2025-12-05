import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import ServiceCountry from "../[slug]/ServiceCountry";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import WhyChooseUsFeatures from "../components/WhyChooseUsFeatures";
import Testimonials from "../Testimonials";

const jobSearchForm = {
  title: "Job Search",
  icon: "/images/formicon/suit.png",
  description: "",
  buttonText: "Find My Job",
  fields: [
    {
      name: "job",
      label: "Jobs",
      type: "select",
      options: ["UK", "INDIA", "USA"],
      required: true,
      colSpan: 2,
    },
  ],
};

const JobSearchPage = () => {
  const { service, serviceDetails, loading } = useServiceData();
  const [showPopup, setShowPopup] = useState(false);
  const [firstFormData, setFirstFormData] = useState({});

  const handleFirstFormSubmit = () => {
    console.log("first from data from job search =>", firstFormData);
    setShowPopup(true);
  };

  // const handlePopupSubmit = (popupFormData) => {
  //   const combinedData = {
  //     ...firstFormData,
  //     ...popupFormData,
  //   };
  //   console.log("Job search request:", combinedData);
  //   // Here you can send the data to your API
  //   setShowPopup(false);
  // };

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
      title: "Job Matching",
      description: "We match your skills with the right job opportunities",
    },
    {
      icon: "/images/services/vector2.png",
      title: "Visa Assistance",
      description: "Help with work visa and documentation process",
    },
    {
      icon: "/images/services/vector3.png",
      title: "Interview Prep",
      description: "Get prepared with mock interviews and tips",
    },
    {
      icon: "/images/services/vector4.png",
      title: "Relocation Support",
      description: "Assistance with accommodation and settling in",
    },
  ];

  const steps = [
    {
      icon: "/images/services/search.png",
      title: "Create Profile",
      description: "Sign up and create your professional profile",
    },
    {
      icon: "/images/services/select.png",
      title: "Find Jobs",
      description: "Browse and apply to jobs that match your skills",
    },
    {
      icon: "/images/services/book.png",
      title: "Get Hired",
      description: "Go through the interview process and land your dream job",
    },
  ];

  const stats = [
    { number: "5000+", label: "Jobs Available" },
    { number: "100+", label: "Partner Companies" },
    { number: "24/7", label: "Support" },
  ];

  const countryData = {
    title: "Popular Job Destinations",
    description: "Explore job opportunities in top international locations",
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
          ...jobSearchForm,
        }}
      />
      <ServiceCountry countryData={countryData} />
      <TravelPartnersFeatures features={features} />
      <WhyChooseUsFeatures features={steps} />
      <Testimonials />
    </div>
  );
};

export default JobSearchPage;

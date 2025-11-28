import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import Testimonials from "../Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import TrustedAndLoved from "../components/TrustedAndLoved";
import HowItWorks from "../components/HowItWorks";
import LoginRegisterPopup from "../../../Loginregister/LoginRegisterPopup";
import RelatedServices from "../components/RelatedServices";

// Form configuration for Student Internship
const internshipForm = {
  title: "Internship Enquiry",
  icon: "/images/formicon/suit.png",
  description: "",
  buttonText: "Apply Now",
  fields: [
    {
      name: "destinationCountry",
      label: "Destination Country",
      type: "select",
      required: true,
      options: ["UK", "CANADA", "INDIA", "USA"],
      colSpan: 2,
    },
    {
      name: "provider",
      label: "Provider",
      type: "select",
      required: true,
      options: ["ICICI", "UBIN", "HDFC"],
      colSpan: 2,
    },
  ],
};

const StudentInternship = () => {
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
    console.log("Internship application:", combinedData);
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

  const features = [
    {
      icon: "/images/services/vector1.png",
      title: "Industry Experience",
      description: "Gain hands-on experience in your field of study",
    },
    {
      icon: "/images/services/vector2.png",
      title: "Professional Network",
      description: "Build connections with industry professionals",
    },
    {
      icon: "/images/services/vector3.png",
      title: "Skill Development",
      description: "Enhance your skills and boost your resume",
    },
    {
      icon: "/images/services/vector4.png",
      title: "Career Opportunities",
      description: "Potential for full-time employment after graduation",
    },
  ];

  const steps = [
    {
      icon: "/images/services/search.png",
      title: "Apply Online",
      desc: "Submit your application and resume",
    },
    {
      icon: "/images/services/select.png",
      title: "Interview",
      desc: "Attend an interview with our team",
    },
    {
      icon: "/images/services/book.png",
      title: "Get Placed",
      desc: "Start your internship journey",
    },
  ];

  const stats = [
    { number: "2K+", label: "Interns Placed" },
    { number: "80%", label: "Conversion to Full-time" },
    { number: "100+", label: "Partner Companies" },
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={{
          ...internshipForm,
          onSubmit: handleSubmit,
        }}
      />
      <PoweredBySection />
      <TravelPartnersFeatures features={features} />
      <HowItWorks steps={steps} />
      <Testimonials />
      <RelatedServices />
      <FAQAccordion faqs={serviceDetails.faqs} />
      <TrustedAndLoved stats={stats} />

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {showPopup && <LoginRegisterPopup setShowModal={setShowPopup} />}
          </div>
        </div>
      )}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}
    </div>
  );
};

export default StudentInternship;

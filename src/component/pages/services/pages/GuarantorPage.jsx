import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";

// Form configuration for Guarantor Service
const guarantorForm = {
  title: "Guarantor Service",
  icon: "/images/formicon/guarantor.png",
  description: "Find a reliable guarantor for your needs",
  buttonText: "Request Guarantor",
  fields: [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      required: true,
      colSpan: 1,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "Enter your email",
      colSpan: 1,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
      placeholder: "Enter your phone number",
      colSpan: 1,
    },
    {
      name: "purpose",
      label: "Purpose of Guarantee",
      type: "select",
      required: true,
      options: [
        "Rental Agreement",
        "Loan Application",
        "Visa Application",
        "Other",
      ],
      colSpan: 1,
    },
    {
      name: "requiredAmount",
      label: "Amount to be Guaranteed",
      type: "number",
      required: true,
      min: 0,
      placeholder: "Enter amount",
      colSpan: 1,
    },
    {
      name: "duration",
      label: "Duration (Months)",
      type: "number",
      required: true,
      min: 1,
      defaultValue: 12,
      colSpan: 1,
    },
  ],
};

const GuarantorPage = () => {
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
    console.log("Guarantor service request:", combinedData);
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!service || !serviceDetails) return null;

  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={{
          ...guarantorForm,
          onSubmit: handleFirstFormSubmit,
        }}
      />

      {/* Additional content for Guarantor page */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          How Our Guarantor Service Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Submit Your Request",
              description:
                "Fill in the form with your details and requirements.",
              icon: "📝",
            },
            {
              title: "Get Matched",
              description:
                "We'll match you with a suitable guarantor based on your needs.",
              icon: "🤝",
            },
            {
              title: "Complete the Process",
              description:
                "Finalize the agreement and complete the necessary documentation.",
              icon: "✅",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <p>{serviceDetails.description}</p>
      {/* Add your custom components here */}
    </div>
  );
};

export default GuarantorPage;

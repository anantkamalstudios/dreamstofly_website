import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";

// Form configuration for Room Replacement
const roomReplacementForm = {
  title: "Request Room Replacement",
  icon: "/images/formicon/room-replacement.png",
  description: "Need to change your room? We'll help you find a better fit.",
  buttonText: "Submit Request",
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
      name: "currentAddress",
      label: "Current Address",
      type: "textarea",
      required: true,
      colSpan: 2,
    },
    {
      name: "preferredLocation",
      label: "Preferred New Location",
      type: "text",
      required: true,
      colSpan: 1,
    },
    {
      name: "reasonForChange",
      label: "Reason for Room Change",
      type: "select",
      required: true,
      options: [
        "Too far from university",
        "Roommate issues",
        "Maintenance problems",
        "Too expensive",
        "Other",
      ],
      colSpan: 1,
    },
  ],
};

const RoomReplacement = () => {
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
    console.log("Room replacement request:", combinedData);
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
      title: "Quick Processing",
      description: "Fast approval and room allocation process",
    },
    {
      icon: "/images/services/vector2.png",
      title: "Verified Listings",
      description: "All rooms are verified for quality and safety",
    },
    {
      icon: "/images/services/vector3.png",
      title: "No Hidden Costs",
      description: "Transparent pricing with no surprise fees",
    },
    {
      icon: "/images/services/vector4.png",
      title: "24/7 Support",
      description: "We're here to help with your relocation",
    },
  ];

  const steps = [
    {
      icon: "/images/services/search.png",
      title: "Submit Request",
      description: "Fill in your current and preferred room details",
    },
    {
      icon: "/images/services/select.png",
      title: "Get Matched",
      description: "We'll find suitable replacement options for you",
    },
    {
      icon: "/images/services/book.png",
      title: "Move In",
      description: "Complete the process and move to your new room",
    },
  ];

  const stats = [
    { number: "2K+", label: "Successful Replacements" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={{
          ...roomReplacementForm,
          onSubmit: handleFirstFormSubmit,
        }}
      />
    </div>
  );
};

export default RoomReplacement;

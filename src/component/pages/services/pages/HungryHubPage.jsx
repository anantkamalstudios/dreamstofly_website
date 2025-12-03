import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import OurCommitments from "../components/OurCommitments";
import ServiceCountry from "../[slug]/ServiceCountry";
import HowItWorksPage from "../components/HowItWorksPage";
import RelatedServices from "../components/RelatedServices";
import FAQSection from "../../accomodation/components/FAQSection";
import Testimonials from "../Testimonials";
import TrustedAndLoved from "../components/TrustedAndLoved";
import axios from "axios";

// Form configuration for HungryHub Service
const hungryHubForm = {
  title: "Select Destination Country",
  icon: "/images/formicon/suit.png",
  description: "",
  buttonText: "Grab Offer Now",
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
      type: "select",
      options: [
        "USA",
        "UK",
        "Canada",
        "Australia",
        "Germany",
        "France",
        "Other",
      ],
      required: true,
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
    {
      name: "mobile",
      label: "Phone Number",
      type: "tel",
      required: true,
      colSpan: 1,
      placeholder: "",
    },
    {
      name: "provider",
      label: "Provider",
      type: "select",
      options: ["Provider1", "Provider2"],
      required: true,
      colSpan: 1,
    },
  ],
};

const HungryHubPage = () => {
  const { service, serviceDetails, loading, slug } = useServiceData();
  const [firstFormData, setFirstFormData] = useState({});

  const handleFirstFormSubmit = async () => {
    console.log("first from data from hungruhub =>", firstFormData);
    const res = await axios.post(
      "https://devlopment.dreamstofly.com//ServiceLead/Leads_controller/hungry_hub_lead",
      firstFormData
    );
    console.log(res);
    alert("form submitted successfully! We'll get back to you soon.");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!service || !serviceDetails) return null;

  const commitments = [
    {
      title: "Wide Variety",
      description: "Choose from hundreds of restaurants and cuisines",
      icon: "🍽️",
    },
    {
      title: "Fast Delivery",
      description: "Get your food delivered in under 30 minutes",
      icon: "⚡",
    },
    {
      title: "Best Quality",
      description: "Only the freshest ingredients prepared by top chefs",
      icon: "🌟",
    },
    {
      title: "24/7 Support",
      description: "We're always here to help with your order",
      icon: "🛎️",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Provide student's details",
      description: "Browse our extensive menu and select your favorite dishes",
      icon: "/images/services/moneyTransfer1.jpg",
    },
    {
      step: 2,
      title: "Place Your Order",
      description: "Enter your delivery details and payment information",
      icon: "/images/services/moneyTransfer2.png",
    },
    {
      step: 3,
      title: "Track Delivery",
      description: "Follow your order in real-time as it makes its way to you",
      icon: "/images/services/moneyTransfer3.png",
    },
  ];

  const countryData = {
    title: "Countries We Help Immigrate",
    discription:
      "We provide comprehensive immigration services to help you achieve your dreams of living and working abroad.",
  };

  const stats = [
    {
      number: "100+",
      label: "Restaurants",
    },
    {
      number: "50K+",
      label: "Happy Customers",
    },
    {
      number: "4.8",
      label: "Average Rating",
    },
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={{
          formData: firstFormData,
          setFormData: setFirstFormData,
          onSubmit: handleFirstFormSubmit,
          ...hungryHubForm,
        }}
        slug={slug}
      />
      <OurCommitments commitments={commitments} />
      <ServiceCountry countryData={countryData} />
      <HowItWorksPage steps={howItWorks} />
      <RelatedServices />
      <Testimonials />
      <TrustedAndLoved stats={stats} />
    </div>
  );
};

export default HungryHubPage;

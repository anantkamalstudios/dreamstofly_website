import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import Testimonials from "../Testimonials";
import HowItWorks from "../components/HowItWorks";
import FAQAccordion from "../components/FAQAccordion";
import TrustedAndLoved from "../components/TrustedAndLoved";
import { useNavigate } from "react-router-dom";

const travelInsuranceForm = {
  title: "Buy a plan in mins",
  icon: "/images/formicon/suit.png",
  description: "",
  buttonText: "Book Now",
  fields: [],
};

const TravelInsurance = () => {
  const navigate = useNavigate();
  const { service, serviceDetails, loading } = useServiceData();
  const [firstFormData, setFirstFormData] = useState(null);

  const handleSubmit = (formData) => {
    // Navigate to the insurance form page with form data
    navigate("/services/travel-insurance/insurenceform", {
      state: { formData },
    });
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
      icon: "/images/services/airport1.png",
      title: "Insurence in just min",
    },
    {
      icon: "/images/services/airport2.jpg",
      title: "Instant policy - No medical test",
    },
    {
      icon: "/images/services/airport3.jpg",
      title: "Starting from $50/Day",
    },
    {
      icon: "/images/services/airport4.jpg",
      title: "All plans includes COVID package",
    },
  ];

  const steps = [
    {
      icon: "/images/services/search.png",
      title: "Medical emergency",
      desc: "Expenses incurred for hospitalization in case of accidents.",
    },
    {
      icon: "/images/services/select.png",
      title: "Baggage loss",
      desc: "You will be offered that you need to buy immediately.",
    },
    {
      icon: "/images/services/book.png",
      title: "Compassionate visit",
      desc: "Financial aid/support for guardians to travel in case of emergency",
      extraClasses: "md:col-span-2 lg:col-span-1",
    },
  ];

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
  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={{
          ...travelInsuranceForm,
          onSubmit: handleSubmit,
        }}
      />
      <PoweredBySection />
      <TravelPartnersFeatures features={features} />
      <HowItWorks steps={steps} />
      <Testimonials />
      <FAQAccordion />
      <TrustedAndLoved stats={stats} />
    </div>
  );
};

export default TravelInsurance;

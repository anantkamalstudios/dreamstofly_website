import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import { Power } from "lucide-react";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import TrustedAndLoved from "../components/TrustedAndLoved";
import axios from "axios";
import Loader from "../../../../common/Loader";

// Form configuration for Forex Services
const forexForm = {
  title: "Get Forex Services",
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
      placeholder: "Enter your phone number",
      colSpan: 2,
    },
  ],
};

const ForexPage = () => {
  const { service, serviceDetails, loading } = useServiceData();
  const [firstFormData, setFirstFormData] = useState({});

  const handleFirstFormSubmit = async () => {
    try {
      const res = await axios.post(
        `${
          import.meta.env.VITE_BASE_URL
        }//ServiceLead/Leads_controller/forex_lead`,
        firstFormData
      );
      if (res.status === 200) alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert("Something went wrong. Please try again.");
    }
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
      title: "Best Exchange Rates",
    },
    {
      icon: "/images/services/airport2.jpg",
      title: "Zero Commission",
    },
    {
      icon: "/images/services/airport3.jpg",
      title: "Same Day Service",
    },
    {
      icon: "/images/services/airport4.jpg",
      title: "Multiple Currencies",
    },
  ];

  const steps = [
    {
      icon: "/images/services/search.png",
      title: "Book your order",
      desc: "Select your preferred currency and amount you want to buy or sell.",
    },
    {
      icon: "/images/services/select.png",
      title: "Get live rates",
      desc: "Check the live exchange rates and confirm your order.",
    },
    {
      icon: "/images/services/book.png",
      title: "Collect your currency",
      desc: "Pick up your currency from our nearest branch or get it delivered.",
      extraClasses: "md:col-span-2 lg:col-span-1",
    },
  ];

  const stats = [
    {
      number: "12K+",
      label: "Success Journey",
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
          ...forexForm,
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

export default ForexPage;

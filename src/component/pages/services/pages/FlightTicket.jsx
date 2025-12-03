import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import ServiceCountry from "../[slug]/ServiceCountry";
import TravelPartners from "../components/TravelPartners";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../Testimonials";
import RelatedServices from "../components/RelatedServices";
import FAQAccordion from "../components/FAQAccordion";
import FlightBookingHeroPage from "../components/FlightBookingHeroPage";
import axios from "axios";

const FlightTicket = () => {
  const { service, serviceDetails, loading, slug } = useServiceData();
  const [firstFormData, setFirstFormData] = useState({});
  const [popupFormData, setPopupFormData] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleFirstFormSubmit = () => {
    console.log("first from data from flight ticket =>", firstFormData);
    setShowPopup(true);
  };
  const handlePopupFormSubmit = async () => {
    console.log("popup formn adata => ", popupFormData);
    const res = await axios.post(
      "https://devlopment.dreamstofly.com/ServiceLead/Leads_controller/leads",
      popupFormData
    );
    console.log(res);

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

  const steps = [
    {
      icon: "/images/services/search.png",
      title: "Search",
      desc: "Enter your departure and arrival destination, along with your tentative dates and types of tickets.",
    },
    {
      icon: "/images/services/select.png",
      title: "Select",
      desc: "Select the flight that is the most compatible with your budget and preferences from all the available flights.",
    },
    {
      icon: "/images/services/book.png",
      title: "Book",
      desc: "Book tickets with special fares, apply discount coupon during checkout or contact team for assistance.",
      extraClasses: "md:col-span-2 lg:col-span-1",
    },
  ];

  const countryData = {
    title: "Popular Destination Choices",
    discription:
      "We provide comprehensive immigration services to help you achieve your dreams of living and working abroad.",
  };

  return (
    <div className="min-h-screen">
      <FlightBookingHeroPage
        service={service}
        details={serviceDetails}
        firstFormData={firstFormData}
        setFirstFormData={setFirstFormData}
        handleFirstFormSubmit={handleFirstFormSubmit}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        popupFormData={popupFormData}
        setPopupFormData={setPopupFormData}
        handlePopupFormSubmit={handlePopupFormSubmit}
      />
      <div className="pt-2 sm:pt-16 md:pt-20 lg:pt-20 px-4 sm:px-6 md:px-10 lg:px-0">
        <ServiceCountry countryData={countryData} />
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-0 mt-4 sm:mt-4 md:mt-8">
        <TravelPartners />
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-0 mt-4 sm:mt-8">
        <HowItWorks steps={steps} />
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-0 mt-4 sm:mt-8">
        <Testimonials />
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-0 mt-4 sm:mt-8">
        <RelatedServices />
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-0 mt-4 sm:mt-16 mb-8">
        <FAQAccordion />
      </div>
    </div>
  );
};

export default FlightTicket;

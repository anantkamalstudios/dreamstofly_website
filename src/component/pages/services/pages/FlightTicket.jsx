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

// Form configuration for Flight Ticket booking
const flightTicketForm = {
  title: "Book Flight Tickets",
  icon: "/images/formicon/flight.png",
  description: "Find the best deals on student flights",
  buttonText: "Search Flights",
  fields: [
    {
      name: "tripType",
      label: "Trip Type",
      type: "select",
      required: true,
      options: ["One Way", "Round Trip", "Multi-City"],
      colSpan: 1,
    },
    {
      name: "from",
      label: "From",
      type: "text",
      required: true,
      placeholder: "City or Airport",
      colSpan: 1,
    },
    {
      name: "to",
      label: "To",
      type: "text",
      required: true,
      placeholder: "City or Airport",
      colSpan: 1,
    },
    {
      name: "departureDate",
      label: "Departure",
      type: "date",
      required: true,
      colSpan: 1,
    },
    {
      name: "returnDate",
      label: "Return",
      type: "date",
      required: false,
      colSpan: 1,
    },
    {
      name: "passengers",
      label: "Passengers",
      type: "number",
      required: true,
      min: 1,
      defaultValue: 1,
      colSpan: 1,
    },
    {
      name: "cabinClass",
      label: "Cabin Class",
      type: "select",
      required: true,
      options: ["Economy", "Premium Economy", "Business", "First Class"],
      colSpan: 1,
    },
  ],
};

const FlightTicket = () => {
  const { service, serviceDetails, loading, slug } = useServiceData();
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
    console.log("Flight booking data:", combinedData);
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
      {/* <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={{
          ...flightTicketForm,
          onSubmit: handleFirstFormSubmit,
        }}
        slug={slug}
      /> */}
      <FlightBookingHeroPage service={service} details={serviceDetails} />
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

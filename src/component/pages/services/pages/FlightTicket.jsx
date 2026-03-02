import React, { useState, useEffect } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceCountry from "../[slug]/ServiceCountry";
import TravelPartners from "../components/TravelPartners";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../Testimonials";
import RelatedServices from "../components/RelatedServices";
import FAQAccordion from "../components/FAQAccordion";
import FlightBookingHeroPage from "../components/FlightBookingHeroPage";
import Loader from "../../../../common/Loader";
import axios from "axios";

const LEAD_SUBMITTED_KEY = "flight_lead_form_submitted";

const FlightTicket = () => {
  const { service, serviceDetails, loading } = useServiceData();
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem(LEAD_SUBMITTED_KEY);
    if (!submitted) setShowLeadForm(true);
  }, []);

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadFormData.firstname || !leadFormData.lastname || !leadFormData.email || !leadFormData.mobile) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/ServiceLead/Leads_controller/leads`,
        { ...leadFormData, service: "student-flight-tickets" }
      );
      localStorage.setItem(LEAD_SUBMITTED_KEY, "true");
      setShowLeadForm(false);
      alert("Thank you! We have your details. Our team will contact you soon.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleLeadInputChange = (e) => {
    const { name, value } = e.target;
    setLeadFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) return <Loader />;

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
        showLeadForm={showLeadForm}
        setShowLeadForm={setShowLeadForm}
        leadFormData={leadFormData}
        setLeadFormData={setLeadFormData}
        handleLeadSubmit={handleLeadSubmit}
        handleLeadInputChange={handleLeadInputChange}
        submitting={submitting}
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
      <div className="px-0 sm:px-2 md:px-4 lg:px-6 mt-4 sm:mt-8">
        <FAQAccordion />
      </div>
    </div>
  );
};

export default FlightTicket;

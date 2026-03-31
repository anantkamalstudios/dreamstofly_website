import React from "react";
import ServiceCountry from "../[slug]/ServiceCountry";
import TravelPartners from "../components/TravelPartners";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../Testimonials";
import RelatedServices from "../components/RelatedServices";
import FAQAccordion from "../components/FAQAccordion";
import HotelBookingHeroPage from "../components/HotelBookingHeroPage";

const HotelBooking = () => {
  // Standalone data — does NOT depend on CMS/useServiceData to avoid redirect
  const service = {
    backgroundImage: "/images/hotel-hero-image.jpg",
    title: "Hotel Booking",
    slug: "hotel-booking",
  };
  const serviceDetails = {
    title: "Find Your Perfect Hotel",
    subtitle: "Search and book hotels worldwide at the best prices for students",
  };

  const steps = [
    {
      icon: "/images/services/search.png",
      title: "Search",
      desc: "Enter your destination, check-in/out dates, number of guests and rooms to find available hotels.",
    },
    {
      icon: "/images/services/select.png",
      title: "Select",
      desc: "Browse and compare hotels by star rating, board type, price, and amenities to find your perfect stay.",
    },
    {
      icon: "/images/services/book.png",
      title: "Book",
      desc: "Verify the rate, fill in your details, and complete your booking with secure online payment.",
      extraClasses: "md:col-span-2 lg:col-span-1",
    },
  ];

  const countryData = {
    title: "Popular Destination Choices",
    discription:
      "Discover the best hotel deals across popular student destinations worldwide.",
  };

  return (
    <div className="min-h-screen">
      <HotelBookingHeroPage service={service} details={serviceDetails} />
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

export default HotelBooking;

import React from "react";
import { useParams } from "react-router-dom";
import ServiceDetail from "./[slug]/ServiceDetail";

// Import all service page components
import FlightTicket from "./pages/FlightTicket";
import VisaServicePage from "./pages/VisaServicePage";
import HealthInsurancePage from "./pages/HealthInsurancePage";
import AirPortPickup from "./pages/AirPortPickup";
import StudentFinancing from "./pages/StudentFinancing";
import InternationalMoneyTransfer from "./pages/InternationalMoneyTransfer";
import ForexPage from "./pages/ForexPage";
import GuarantorPage from "./pages/GuarantorPage";
import HungryHubPage from "./pages/HungryHubPage";
import JobSearchPage from "./pages/JobSearchPage";
import StudentInternship from "./pages/StudentInternship";
import TravelInsurance from "./pages/TravelInsurance";
import LuggaugePage from "./pages/LuggaugePage";
import RoomEssentials from "./pages/RoomEssentials";
import RoomReplacement from "./pages/RoomReplacement";
import InternationalSimCard from "./pages/InternationalSimCard";
import EMoneyApp from "./pages/EMoneyApp";

/**
 * Map service slugs to their dedicated page components
 * If a service slug is not in this map, it will fall back to ServiceDetail component
 *
 * To add a new service page:
 * 1. Create the page component in ./pages/
 * 2. Import it above
 * 3. Add the slug-to-component mapping here
 */
const servicePageMap = {
  "student-flight-ticket": FlightTicket,
  "visa-assistance": VisaServicePage,
  "health-insurance": HealthInsurancePage,
  "airport-pickup": AirPortPickup,
  "student-financing": StudentFinancing,
  "money-transfer": InternationalMoneyTransfer,
  "forex-services": ForexPage,
  "guarantor-services": GuarantorPage,
  "hungry-hub": HungryHubPage,
  "job-search": JobSearchPage,
  "student-internships": StudentInternship,
  "travel-insurance": TravelInsurance,
  "luggage-storage": LuggaugePage,
  "room-essentials": RoomEssentials,
  "room-replacement": RoomReplacement,
  "international-sim": InternationalSimCard,
  "e-money-app": EMoneyApp, // Update this if you have a dedicated accommodation page
  // Services that will use ServiceDetail (fallback):
  // "student-beans", "test-preparation", "free-online-courses", "study-abroad-counseling"
};

const ServiceRouter = () => {
  const { slug } = useParams();

  // Get the dedicated page component for this slug, or fall back to ServiceDetail
  const ServicePage = servicePageMap[slug] || ServiceDetail;

  return <ServicePage />;
};

export default ServiceRouter;

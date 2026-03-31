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
import HotelBooking from "./pages/HotelBooking";
import Accommodation from "../accomodation/AccomodationMainPage";

const servicePageMap = {
  "student-flight-tickets": FlightTicket,
  "get-visa": VisaServicePage,
  "health-insurance-oshc": HealthInsurancePage,
  "airport-pickup": AirPortPickup,
  "student-financing": StudentFinancing,
  "international-money-transfer": InternationalMoneyTransfer,
  forex: ForexPage,
  "guarantor-services": GuarantorPage,
  hungryhub: HungryHubPage,
  "job-search": JobSearchPage,
  "student-internships": StudentInternship,
  "travel-insurance": TravelInsurance,
  "luggage-storage": LuggaugePage,
  "room-essentials": RoomEssentials,
  "room-replacement": RoomReplacement,
  "international-sim": InternationalSimCard,
  "student-e-money-app": EMoneyApp,
  "hotel-booking": HotelBooking,
  accommodation: Accommodation,
};

const ServiceRouter = () => {
  const { slug } = useParams();

  const ServicePage = servicePageMap[slug] || ServiceDetail;

  return <ServicePage />;
};

export default ServiceRouter;

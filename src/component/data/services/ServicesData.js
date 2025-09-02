import accomodation from "../../../assets/services/accommodation.jpeg";
import Ambassadors from "../../../assets/services/ambassadors.jpeg";
import Tickets from "../../../assets/services/flightticket.jpeg";
import TestPreparation from "../../../assets/services/testpreparation.jpeg";
import StudentFinancing from "../../../assets/services/studentfinancing.jpeg";
import AirportPickup from "../../../assets/services/airportpickup.jpeg";
import HealthInsurance from "../../../assets/services/healthinsurance.jpeg";
import Forex from "../../../assets/services/forex.jpeg";
import InternationalSIM from "../../../assets/services/internationsim.png";
import FreeSOPMaker from "../../../assets/services/sopmaker.jpeg";
import JobSearch from "../../../assets/services/jobsearch.jpeg";
import InternationalMoneyTransfer from "../../../assets/services/moneytransfer.jpeg";
import StudentInternships from "../../../assets/services/studentintership.jpeg";
import OnlineCourses from "../../../assets/services/onlinecources.jpeg";
import GetVisa from "../../../assets/services/visa.jpeg";
import RoomEssentials from "../../../assets/services/roomreplacment.jpeg";
import TravelInsurance from "../../../assets/services/travelinsuance.jpeg";
import StudentBankAccount from "../../../assets/services/bankaccount.jpeg";
import HungryHub from "../../../assets/services/hungryhub.jpeg";
import Guarantor from "../../../assets/services/guarantor.jpeg";
import Counselor from "../../../assets/smoothflight/counseller.jpeg";

export const services = [
  {
    id: 1,
    title: "Accommodation",
    desc: "Find the perfect home, close to university and close to life",
    img: accomodation,
    category: "Housing",
    featured: true,
    price: "From £150/month",
    slug: "student-accommodation",
  },
  {
    id: 2,
    title: "Student Flight Tickets",
    desc: "Jet off to your dream destination in style with special student fares",
    img: Tickets,
    category: "Travel",
    featured: true,
    price: "From £299",
    slug: "student-flight-ticket",
  },
  {
    id: 3,
    title: "Guarantor",
    desc: "Verified guarantors for the ultimate safety net",
    img: Guarantor,
    category: "Legal",
    featured: false,
    price: "From £200",
    slug: "guarantor-services",
  },
  {
    id: 4,
    title: "Student Beans",
    desc: "Unlock the Student discounts on Accommodation",
    img: HungryHub,
    category: "Discounts",
    featured: false,
    price: "Free",
    slug: "student-beans",
  },
  {
    id: 5,
    title: "International Money Transfer",
    desc: "Transfer funds for tuition & accommodation with utter ease",
    img: InternationalMoneyTransfer,
    category: "Finance",
    featured: false,
    price: "From £5",
    slug: "money-transfer",
  },
  {
    id: 6,
    title: "Get Visa",
    desc: "Seamless end-to-end Visa Solutions for your study abroad journey",
    img: GetVisa,
    category: "Immigration",
    featured: true,
    price: "From £99",
    slug: "visa-assistance",
  },
  {
    id: 7,
    title: "Student Financing",
    desc: "No need to hold back on your dream of education abroad",
    img: StudentFinancing,
    category: "Finance",
    featured: false,
    price: "From £100",
    slug: "student-financing",
  },
  {
    id: 8,
    title: "Room Essentials",
    desc: "Pack Light! Explore a range of room essentials for an effortless move-in",
    img: RoomEssentials,
    category: "Housing",
    featured: false,
    price: "From £50",
    slug: "room-essentials",
  },
  {
    id: 9,
    title: "Airport Pickup",
    desc: "Book a safe & comfy ride to and from the airport",
    img: AirportPickup,
    category: "Transport",
    featured: false,
    price: "From £45",
    slug: "airport-pickup",
  },
  {
    id: 10,
    title: "Room Replacement",
    desc: "One-of-a-kind solution to help you find a next perfect room",
    img: RoomEssentials,
    category: "Housing",
    featured: false,
    price: "From £75",
    slug: "room-replacement",
  },
  {
    id: 11,
    title: "International SIM",
    desc: "Stay connected anywhere, anytime across 180+ countries",
    img: InternationalSIM,
    category: "Communication",
    featured: false,
    price: "From £15",
    slug: "international-sim",
  },
  {
    id: 12,
    title: "Travel Insurance",
    desc: "Emergencies don't come knocking, better to be safe than sorry",
    img: TravelInsurance,
    category: "Insurance",
    featured: false,
    price: "From £25",
    slug: "travel-insurance",
  },
  {
    id: 13,
    title: "Health Insurance - OSHC",
    desc: "In sickness and in health, we've got you covered",
    img: HealthInsurance,
    category: "Insurance",
    featured: true,
    price: "From £50/month",
    slug: "health-insurance",
  },
  {
    id: 14,
    title: "Luggage Storage",
    desc: "Safe & Secure extra storage space at convenient locations",
    img: RoomEssentials,
    category: "Storage",
    featured: false,
    price: "From £10/day",
    slug: "luggage-storage",
  },
  {
    id: 15,
    title: "Forex",
    desc: "Purchase, sell, and transfer international currency from anywhere",
    img: Forex,
    category: "Finance",
    featured: false,
    price: "From £10",
    slug: "forex-services",
  },
  {
    id: 16,
    title: "Job Search",
    desc: "Explore from over 10m jobs across different industry verticals",
    img: JobSearch,
    category: "Career",
    featured: false,
    price: "From £75",
    slug: "job-search",
  },
  {
    id: 17,
    title: "HungryHub",
    desc: "Make your Student Life Easy with online food Delivery",
    img: HungryHub,
    category: "Food",
    featured: false,
    price: "Free",
    slug: "hungry-hub",
  },
  {
    id: 18,
    title: "Student Internships",
    desc: "Kickstart your career with real-world industry experience",
    img: StudentInternships,
    category: "Career",
    featured: false,
    price: "From £200",
    slug: "student-internships",
  },
  {
    id: 19,
    title: "Test Preparation",
    desc: "Get the Best test preparation guidance from experts",
    img: TestPreparation,
    category: "Education",
    featured: true,
    price: "From £80",
    slug: "test-preparation",
  },
  {
    id: 20,
    title: "Free Online Courses",
    desc: "Unlock your potential and take your skills to next level with these courses",
    img: OnlineCourses,
    category: "Education",
    featured: false,
    price: "Free",
    slug: "free-online-courses",
  },
  {
    id: 21,
    title: "Study Abroad Counseling",
    desc: "Personalized guidance for your study abroad journey",
    img: Counselor,
    category: "Education",
    featured: true,
    price: "From £120",
    slug: "study-abroad-counseling",
  },
];

export const getServiceBySlug = (slug) => {
  return services.find((service) => service.slug === slug);
};

export const getServicesByCategory = (category) => {
  return services.filter((service) => service.category === category);
};

export const getFeaturedServices = () => {
  return services.filter((service) => service.featured);
};

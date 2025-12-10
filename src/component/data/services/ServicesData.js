import accomodation from "../../../assets/services/1.svg";
import Ambassadors from "../../../assets/services/ambassadors.jpeg";
import FreeSOPMaker from "../../../assets/services/sopmaker.jpeg";
import StudentBankAccount from "../../../assets/services/bankaccount.jpeg";
import Guarantor from "../../../assets/services/guarantor.jpeg";
import StudentInternships from "../../../assets/services/9.svg";
import OnlineCourses from "../../../assets/services/3.svg";
import Forex from "../../../assets/services/5.svg";
import TestPreparation from "../../../assets/services/17.svg";
import Tickets from "../../../assets/services/19.svg";
import StudentFinancing from "../../../assets/services/10.svg";
import JobSearch from "../../../assets/services/8.svg";
import HungryHub from "../../../assets/services/6.svg";
import Counselor from "../../../assets/services/2.svg";
import InternationalMoneyTransfer from "../../../assets/services/18.svg";
import AirportPickup from "../../../assets/services/11.svg";
import HealthInsurance from "../../../assets/services/4.svg";
import InternationalSIM from "../../../assets/services/12.svg";
import GetVisa from "../../../assets/services/21.svg";
import RoomEssentials from "../../../assets/services/7.svg";
import TravelInsurance from "../../../assets/services/15.svg";

export const services = [
  {
    id: 1,
    title: "Accommodation",
    desc: "Find the perfect home, close to university and close to life",
    img: accomodation,
    // img:"/images/services/services1.png",
    category: "Housing",
    featured: true,
    price: "From £150/month",
    slug: "student-accommodation",
    backgroundImage: "",
  },
  {
    id: 2,
    title: "Student Flight Tickets",
    desc: "Jet off to your dream destination in style with special student fares",
    img: Tickets,
    category: "Travel",
    featured: true,
    price: "From £299",
    slug: "student-flight-tickets",
    backgroundImage: "/images/services/flightbg.png",
  },
  // {
  //   id: 3,
  //   title: "Guarantor",
  //   desc: "Verified guarantors for the ultimate safety net",
  //   img: Guarantor,
  //   category: "Legal",
  //   featured: false,
  //   price: "From £200",
  //   slug: "guarantor-services",
  // },
  // {
  //   id: 4,
  //   title: "Student Beans",
  //   desc: "Unlock the Student discounts on Accommodation",
  //   img: HungryHub,
  //   category: "Discounts",
  //   featured: false,
  //   price: "Free",
  //   slug: "student-beans",
  // },
  {
    id: 5,
    title: "International Money Transfer",
    desc: "Transfer funds for tuition & accommodation with utter ease",
    img: InternationalMoneyTransfer,
    category: "Finance",
    featured: false,
    price: "From £5",
    slug: "international-money-transfer",
    backgroundImage: "/images/moneytransfer.png",
  },
  {
    id: 6,
    title: "Get Visa",
    desc: "Seamless end-to-end Visa Solutions for your study abroad journey",
    img: GetVisa,
    category: "Immigration",
    featured: true,
    price: "From £99",
    slug: "get-visa",
    backgroundImage: "/images/visa-assistance.jpg",
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
    backgroundImage: "/images/services/finance.png",
  },
  {
    id: 8,
    title: "Student E-Money App",
    desc: "Pack Light! Explore a range of room essentials for an effortless move-in",
    img: RoomEssentials,
    category: "app",
    featured: false,
    price: "From £50",
    slug: "student-e-money-app",
    backgroundImage: "/images/emoney.jpeg",
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
    backgroundImage: "/images/airportPickup.png",
  },
  // {
  //   id: 10,
  //   title: "Room Replacement",
  //   desc: "One-of-a-kind solution to help you find a next perfect room",
  //   img: RoomEssentials,
  //   category: "Housing",
  //   featured: false,
  //   price: "From £75",
  //   slug: "room-replacement",
  //   backgroudImage: "/images/roomEssentials.png",
  // },
  {
    id: 11,
    title: "International SIM",
    desc: "Stay connected anywhere, anytime across 180+ countries",
    img: InternationalSIM,
    category: "Communication",
    featured: false,
    price: "From £15",
    slug: "international-sim",
    backgroundImage: "/images/internationalSIM.jpeg",
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
    backgroundImage: "/images/18.jpg",
  },
  {
    id: 13,
    title: "Health Insurance - OSHC",
    desc: "In sickness and in health, we've got you covered",
    img: HealthInsurance,
    category: "Insurance",
    featured: true,
    price: "From £50/month",
    slug: "health-insurance-oshc",
    backgroundImage: "/images/healthInsurance.png",
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
    backgroundImage: "/images/luggageStorage.png",
  },
  {
    id: 15,
    title: "Forex",
    desc: "Purchase, sell, and transfer international currency from anywhere",
    img: Forex,
    category: "Finance",
    featured: false,
    price: "From £10",
    slug: "forex",
    backgroundImage: "/images/11.jpg",
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
    backgroundImage: "/images/services/jobsearch.png",
  },
  {
    id: 17,
    title: "HungryHub",
    desc: "Make your Student Life Easy with online food Delivery",
    img: HungryHub,
    category: "Food",
    featured: false,
    price: "Free",
    slug: "hungryhub",
    backgroundImage: "/images/hungryhub.jpg",
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
    backgroundImage: "/images/studentInternship.png",
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
  // {
  //   id: 21,
  //   title: "Study Abroad Counseling",
  //   desc: "Personalized guidance for your study abroad journey",
  //   img: Counselor,
  //   category: "Education",
  //   featured: true,
  //   price: "From £120",
  //   slug: "study-abroad-counseling",
  // },
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

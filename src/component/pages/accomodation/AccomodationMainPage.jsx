import React from "react";
import FeelAtHomeHero from "./components/FeelAtHomeHero";
import StudyAbroadBanner from "./components/StudyAbroadBanner";
import RecentlyViewedProperties from "./components/RecentlyViewedProperties";
import ContactInfoForm from "./components/ContactInfoForm";
import AccomodationHeader from "./components/AccomodationHeader";
import AccommodationOverview from "./components/AccommodationOverview";
import PopularDestination from "./components/PopularDestination";
import Testimonials from "../services/Testimonials";
import FAQSection from "./components/FAQSection";

const AccomodationMainPage = () => {
  return (
    <div>
      <AccomodationHeader />
      <AccommodationOverview />
      <PopularDestination />
      <Testimonials />
      <FeelAtHomeHero />
      <StudyAbroadBanner />
      <RecentlyViewedProperties />
      <ContactInfoForm />
      <FAQSection />
    </div>
  );
};

export default AccomodationMainPage;

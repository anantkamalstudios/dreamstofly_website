import FeelAtHomeHero from "./components/FeelAtHomeHero";
import AccomodationHeader from "./components/AccomodationHeader";
import AccommodationOverview from "./components/AccommodationOverview";
import PopularDestination from "./components/PopularDestination";
import Testimonials from "../services/Testimonials";
import FAQSection from "./components/FAQSection";

const AccomodationMainPage = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <AccomodationHeader />
      <AccommodationOverview />
      <PopularDestination />
      <hr className="mx-14 border-gray-300" />
      <Testimonials />
      <FeelAtHomeHero />
      {/* <StudyAbroadBanner />
      <RecentlyViewedProperties />
      <ContactInfoForm /> */}
      <FAQSection /> 
    </div>
  );
};

export default AccomodationMainPage;

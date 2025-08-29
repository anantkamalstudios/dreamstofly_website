import React from "react";
import ServicesHero from "./ServicesHero";
import FeaturedServices from "./FeaturedServices";
import ServicesGrid from "./ServicesGrid";
import ServicesCategories from "./ServicesCategories";
import ServicesBenefits from "./ServicesBenefits";
import ServicesCTA from "./ServicesCTA";
import Testimonials from "./Testimonials";
import ServicesExperiences from "./ServicesExperiences";

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <FeaturedServices />
      <ServicesBenefits />
      <Testimonials />
      <ServicesExperiences />
      {/* <ServicesCategories />
      <ServicesCTA /> */}
    </div>
  );
};

export default Services;

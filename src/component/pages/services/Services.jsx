import React from "react";
import ServicesHero from "./ServicesHero";
import FeaturedServices from "./FeaturedServices";
import ServicesGrid from "./ServicesGrid";
import ServicesCategories from "./ServicesCategories";
import ServicesBenefits from "./ServicesBenefits";
import ServicesCTA from "./ServicesCTA";
import Testimonials from "./Testimonials";
import ServicesExperiences from "./ServicesExperiences";
import { useServicesData } from "../../../hooks/useServicesData";
import Loader from "../../../common/Loader";
import Error from "../../../common/Error";

const Services = () => {
  const { data, loading, error, refetch } = useServicesData(
    "/CMS/ServicesPage/get_services_page_data"
  );

  const services = data?.data;

  if (loading) <Loader />;

  if (error) <Error />;

  return (
    <div className="min-h-screen">
      {services?.hero && (
        <>
          <ServicesHero hero={services.hero} counter={services.counter} />
          <ServicesGrid services={services.services_card} />
          <FeaturedServices countriesData={services.countries} />
          <ServicesBenefits whyChoose={services.why_choose_us} />
          <Testimonials />
          <ServicesExperiences countries={services.countries} />
          {/* <ServicesCategories />
          <ServicesCTA /> */}
        </>
      )}
    </div>
  );
};

export default Services;

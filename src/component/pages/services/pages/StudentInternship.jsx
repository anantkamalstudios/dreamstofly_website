import React from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import Testimonials from "../Testimonials";
import RelatedServicesPage from "../components/RelatedServicesPage";
import FAQAccordion from "../components/FAQAccordion";
import TrustedAndLoved from "../components/TrustedAndLoved";
import HowItWorks from "../components/HowItWorks";

const StudentInternship = () => {
  const { service, serviceDetails, formConfig, loading } = useServiceData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!service || !serviceDetails) return null;

  const features = [
    {
      icon: "/images/services/vector1.png",
      title: "Job Seekers Toolkit for Students",
    },
    {
      icon: "/images/services/vector2.png",
      title: "Visa Sponsored Jobs & Placement Opportunities",
    },
    {
      icon: "/images/services/vector3.png",
      title: "Career Ignition and Guidence",
    },
    {
      icon: "/images/services/vector4.png",
      title: "Expert Advice for Immigiration",
    },
  ];

  const stats = [
    {
      number: "12K+",
      label: "Students interactions",
    },
    {
      number: "16+",
      label: "Verified properties",
    },
    {
      number: "20+",
      label: "Global student community",
    },
  ];

  const steps = [
    {
      img: "/images/services/search.png",
      title: "Click Apply Now",
      desc: "Apply and Signup with your university email id",
    },
    {
      img: "/images/services/select.png",
      title: "Verification",
      desc: "Verify your account and start browsing Internships & Jobs",
    },
    {
      img: "/images/services/book.png",
      title: "Dashboard Access",
      desc: "Apply Job and access resources like CV builder, Immigration and much more",
      extraClasses: "md:col-span-2 lg:col-span-1",
    },
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={formConfig}
      />
      <PoweredBySection />
      <TravelPartnersFeatures features={features} />
      <HowItWorks steps={steps} />
      <Testimonials />
      <RelatedServicesPage />
      <FAQAccordion />
      <TrustedAndLoved stats={stats} />
    </div>
  );
};

export default StudentInternship;

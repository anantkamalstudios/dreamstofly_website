import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getServiceBySlug } from "../../../data/services/ServicesData";
import { getServiceDetails } from "../../../data/services/ServiceDetails";
import { getFormConfig } from "../../../data/services/ServiceForms";
import ServiceForm from "./ServiceForm";
import ServiceLayout from "../../../layouts/ServiceLayout";
import ServiceHero from "./ServiceHero";
import ServiceCTA from "./ServiceCTA";
import ServiceInfo from "./ServiceInfo";
import ServiceCountry from "./ServiceCountry";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [serviceDetails, setServiceDetails] = useState(null);
  const [formConfig, setFormConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const foundService = getServiceBySlug(slug);
      if (foundService) {
        setService(foundService);
        setServiceDetails(getServiceDetails(slug));
        setFormConfig(getFormConfig(slug));
        setLoading(false);
      } else {
        navigate("/services", { replace: true });
      }
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return null;
  }

  return (
    <ServiceLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <ServiceHero
          service={service}
          details={serviceDetails}
          formConfig={formConfig}
        />

        {/* Country Swiper */}
        <ServiceCountry />

        {/* Service Information */}
        <ServiceInfo service={service} details={serviceDetails} />

        {/* Service Form */}
        {/* <ServiceForm service={service} formConfig={formConfig} /> */}

        {/* Call to Action */}
        <ServiceCTA service={service} details={serviceDetails} />
      </div>
    </ServiceLayout>
  );
};

export default ServiceDetail;

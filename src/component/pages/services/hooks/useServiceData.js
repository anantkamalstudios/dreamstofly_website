import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getServiceBySlug } from "../../../data/services/ServicesData";
import { getServiceDetails } from "../../../data/services/ServiceDetails";
import { getFormConfig } from "../../../data/services/ServiceForms";

export const useServiceData = () => {
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

  return { service, serviceDetails, formConfig, loading, slug };
};

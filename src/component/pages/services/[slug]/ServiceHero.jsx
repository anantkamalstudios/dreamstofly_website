import ServiceFormSection from "../components/ServiceFormSection";
import ServiceHeroHeader from "../components/ServiceHeroHeader";

const ServiceHero = ({ service, details, formConfig, slug }) => {
  const serviceSlug = slug || service?.slug;

  return (
    <div className="">
      <ServiceHeroHeader service={service} details={details} />
      {formConfig && (
        <ServiceFormSection formConfig={formConfig} slug={serviceSlug} />
      )}
    </div>
  );
};
export default ServiceHero;

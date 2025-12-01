import ServiceFormSection from "../components/ServiceFormSection";
const ServiceHero = ({ service, details, formConfig, slug }) => {
  const serviceSlug = slug || service?.slug;

  if (!service || !details) return null;

  const getTitleStyle = () => {
    const titleColor = details.titleColor || "#fff";
    const baseClasses = "text-3xl md:text-4xl lg:text-6xl leading-tight";

    if (
      titleColor.includes("bg-") ||
      (titleColor.includes("text-") && titleColor.includes("bg-clip"))
    ) {
      return { className: `${baseClasses} ${titleColor}` };
    }

    return {
      className: baseClasses,
      style: { color: titleColor },
    };
  };

  const getSubtitleStyle = () => {
    const subTitleColor = details.subTitleColor || "#fff";
    return { style: { color: subTitleColor } };
  };

  const titleStyle = getTitleStyle();
  const subtitleStyle = getSubtitleStyle();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: `url(${service.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        maxHeight: "fit-content",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-6 md:px-14 py-8 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Hero Content */}
          <div className="flex-1 space-y-6 lg:space-y-8 max-w-3xl font-bellefair">
            <h1 {...titleStyle}>{details.title}</h1>

            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed"
              {...subtitleStyle}
            >
              {details.subtitle}
            </p>
          </div>

          {/* Form Section */}
          {formConfig && (
            <div className="w-full lg:w-auto lg:flex-shrink-0 ml-auto">
              <ServiceFormSection formConfig={formConfig} slug={serviceSlug} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;

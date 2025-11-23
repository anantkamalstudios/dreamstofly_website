import { Star } from "lucide-react";

const ServiceHeroHeader = ({ service, details }) => {
  if (!service || !details) return null;

  const getTitleStyle = () => {
    const titleColor = details.titleColor || "#fff";
    const baseClasses = "text-4xl lg:text-5xl font-bold leading-tight";

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
      className="relative"
      style={{
        backgroundImage: `url(${service.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        height: "70vh",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-14 py-16 lg:py-48 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-3xl">
            <h1 {...titleStyle}>{details.title}</h1>

            <p
              className="text-xl lg:text-2xl leading-relaxed"
              {...subtitleStyle}
            >
              {details.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroHeader;

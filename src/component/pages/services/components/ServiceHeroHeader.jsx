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
        height: "65vh",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 py-16 lg:py-48 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              {service.category}
            </div> */}

            <h1 {...titleStyle}>{details.title}</h1>

            <p
              className="text-xl lg:text-2xl leading-relaxed"
              {...subtitleStyle}
            >
              {details.subtitle}
            </p>

            {/* <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              {details.description}
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroHeader;

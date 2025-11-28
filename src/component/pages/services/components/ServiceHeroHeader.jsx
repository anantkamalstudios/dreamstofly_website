// import { Star } from "lucide-react";

// const ServiceHeroHeader = ({ service, details }) => {
//   if (!service || !details) return null;

//   const getTitleStyle = () => {
//     const titleColor = details.titleColor || "#fff";
//     const baseClasses = "text-4xl lg:text-5xl font-bold leading-tight";

//     if (
//       titleColor.includes("bg-") ||
//       (titleColor.includes("text-") && titleColor.includes("bg-clip"))
//     ) {
//       return { className: `${baseClasses} ${titleColor}` };
//     }

//     return {
//       className: baseClasses,
//       style: { color: titleColor },
//     };
//   };

//   const getSubtitleStyle = () => {
//     const subTitleColor = details.subTitleColor || "#fff";
//     return { style: { color: subTitleColor } };
//   };

//   const titleStyle = getTitleStyle();
//   const subtitleStyle = getSubtitleStyle();

//   return (
//     <section
//       className="relative"
//       style={{
//         backgroundImage: `url(${service.backgroundImage})`,
//         backgroundRepeat: "no-repeat",
//         height: "70vh",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="container mx-auto px-14 py-16 lg:py-48 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8 max-w-3xl">
//             <h1 {...titleStyle}>{details.title}</h1>

//             <p
//               className="text-xl lg:text-2xl leading-relaxed"
//               {...subtitleStyle}
//             >
//               {details.subtitle}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceHeroHeader;

// ============================================
// ServiceHeroHeader.jsx
// ============================================
import { Star } from "lucide-react";
import ServiceFormSection from "../components/ServiceFormSection";

const ServiceHeroHeader = ({ service, details, formConfig, slug }) => {
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
      className="relative max-h-[60vh]"
      style={{
        backgroundImage: `url(${service.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-6 md:px-14 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:justify-between">
          {/* Hero Content */}
          <div className="flex-1 space-y-6 lg:space-y-8 max-w-3xl">
            <h1 {...titleStyle}>{details.title}</h1>

            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed"
              {...subtitleStyle}
            >
              {details.subtitle}
            </p>
          </div>

          {/* Form Section - Integrated inside hero */}
          {formConfig && (
            <div className="w-full lg:w-auto lg:flex-shrink-0 ml-auto">
              <ServiceFormSection formConfig={formConfig} slug={slug} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroHeader;

import { Star } from "lucide-react";

const ServiceHeroHeader = ({ service, details }) => {
  if (!service || !details) return null;

  return (
    <section
      className="relative"
      style={{
        backgroundImage: `url(${service.backgroundImage})`,
        backgroundRepeat: "no-repeat",
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

            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              {details.title}
            </h1>

            <p className="text-xl lg:text-2xl text-white leading-relaxed">
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

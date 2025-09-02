import React from "react";
import { CheckCircle, Clock, Shield, Star, Users, Target } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const ServiceInfo = ({ service, details }) => {
  if (!service || !details) return null;

  const sections = [
    {
      title: "Key Features",
      icon: Star,
      items: details.features,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      title: "Requirements",
      icon: Shield,
      items: details.requirements,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      title: "Our Process",
      icon: Target,
      items: details.process,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      title: "Benefits",
      icon: CheckCircle,
      items: details.benefits,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
  ];

  const topRowCountries = [
    {
      name: "Austria",
      code: "AT",
      flag: "🇦🇹",
      color: "bg-red-600",
      image: "https://flagcdn.com/w40/at.png",
    },
    {
      name: "New Zealand",
      code: "NZ",
      flag: "🇳🇿",
      color: "bg-blue-600",
      image: "https://flagcdn.com/w40/nz.png",
    },
    {
      name: "China",
      code: "CN",
      flag: "🇨🇳",
      color: "bg-red-600",
      image: "https://flagcdn.com/w40/cn.png",
    },
    {
      name: "Afghanistan",
      code: "AF",
      flag: "🇦🇫",
      color: "bg-green-600",
      image: "https://flagcdn.com/w40/af.png",
    },
    {
      name: "Brazil",
      code: "BR",
      flag: "🇧🇷",
      color: "bg-green-600",
      image: "https://flagcdn.com/w40/br.png",
    },
    {
      name: "Australia",
      code: "AU",
      flag: "🇦🇺",
      color: "bg-blue-600",
      image: "https://flagcdn.com/w40/au.png",
    },
    {
      name: "Germany",
      code: "DE",
      flag: "🇩🇪",
      color: "bg-black",
      image: "https://flagcdn.com/w40/de.png",
    },
    {
      name: "France",
      code: "FR",
      flag: "🇫🇷",
      color: "bg-blue-600",
      image: "https://flagcdn.com/w40/fr.png",
    },
  ];

  const bottomRowCountries = [
    {
      name: "Malaysia",
      code: "MY",
      flag: "🇲🇾",
      color: "bg-blue-600",
      image: "https://flagcdn.com/w40/my.png",
    },
    {
      name: "Thailand",
      code: "TH",
      flag: "🇹🇭",
      color: "bg-red-600",
      image: "https://flagcdn.com/w40/th.png",
    },
    {
      name: "Cambodia",
      code: "KH",
      flag: "🇰🇭",
      color: "bg-blue-600",
      image: "https://flagcdn.com/w40/kh.png",
    },
    {
      name: "Belgium",
      code: "BE",
      flag: "🇧🇪",
      color: "bg-yellow-600",
      image: "https://flagcdn.com/w40/be.png",
    },
    {
      name: "Canada",
      code: "CA",
      flag: "🇨🇦",
      color: "bg-red-600",
      image: "https://flagcdn.com/w40/ca.png",
    },
    {
      name: "Bangladesh",
      code: "BD",
      flag: "🇧🇩",
      color: "bg-green-600",
      image: "https://flagcdn.com/w40/bd.png",
    },
    {
      name: "Italy",
      code: "IT",
      flag: "🇮🇹",
      color: "bg-green-600",
      image: "https://flagcdn.com/w40/it.png",
    },
    {
      name: "Japan",
      code: "JP",
      flag: "🇯🇵",
      color: "bg-white border-2 border-red-600",
      image: "https://flagcdn.com/w40/jp.png",
    },
  ];

  const CountryCard = ({ country }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-full p-5 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/90 min-w-max group">
      <div className="flex items-center gap-4">
        <div className="relative">
          {country.image ? (
            <img
              src={country.image}
              alt={`${country.name} flag`}
              className="w-10 h-10 rounded-full object-cover shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow duration-300"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : null}

          <div
            className={`w-10 h-8 ${
              country.color
            } rounded-md flex items-center justify-center shadow-sm ${
              country.image ? "hidden" : "flex"
            }`}
          >
            <span
              className={`text-xs font-bold ${
                country.color.includes("white")
                  ? "text-red-600"
                  : country.color.includes("yellow")
                  ? "text-black"
                  : "text-white"
              }`}
            >
              {country.code}
            </span>
          </div>

          {/* Emoji fallback */}
          {!country.image && country.flag && (
            <div className="absolute -top-1 -right-1 text-sm opacity-70 rounded-full w-8 h-8 flex items-center justify-center bg-white shadow">
              {country.flag}
            </div>
          )}
        </div>

        <div>
          <span className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {country.name}
          </span>
        </div>
      </div>
    </div>
  );

  const TopAirplaneIcon = () => (
    <div className="absolute -top-36 right-28 transform -translate-y-1/2 z-20">
      <div className="relative">
        <div className="w-full h-full transform -rotate-12">
          <img
            src="/images/services/ap.png"
            alt="Airplane Icon"
            className="w-full h-full object-contain"
          />
        </div>
        <img
          src="/images/services/topRight.svg"
          alt="Top Right Decoration"
          className="absolute -top-0 left-40 w-full h-full opacity-50 pointer-events-none select-none"
        />
      </div>
    </div>
  );

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* <div className="mb-16 relative overflow-hidden">
          <div className="p-8 lg:p-12 relative"> 
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-full translate-y-12 -translate-x-12"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                  Countries We Help Immigrate
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We provide comprehensive immigration services to help you
                  achieve your dreams of living and working abroad.
                </p>
              </div>
 
              <div className="relative space-y-8">
                <div className="overflow-hidden">
                  <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView="auto"
                    spaceBetween={16}
                    freeMode={{ enabled: true, momentum: false }}
                    loop={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                      reverseDirection: true,
                    }}
                    speed={3000}
                    allowTouchMove={false}
                    grabCursor={false}
                    className="countries-swiper-top py-12"
                    breakpoints={{
                      640: { spaceBetween: 20 },
                      1024: { spaceBetween: 24 },
                    }}
                    style={{ padding: "3rem 0" }}
                  >
                    {[
                      ...topRowCountries,
                      ...topRowCountries,
                      ...topRowCountries,
                      ...topRowCountries,
                      ...topRowCountries,
                    ].map((country, index) => (
                      <SwiperSlide key={`top-${index}`} className="!w-auto">
                        <CountryCard country={country} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="overflow-hidden">
                  <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView="auto"
                    spaceBetween={16}
                    freeMode={{
                      enabled: true,
                      momentum: false,
                      sticky: false,
                    }}
                    loop={true}
                    speed={3000}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                      reverseDirection: false,
                    }}
                    allowTouchMove={false}
                    grabCursor={false}
                    className="countries-swiper-bottom pb-12"
                    breakpoints={{
                      640: { spaceBetween: 20 },
                      1024: { spaceBetween: 24 },
                    }}
                    style={{
                      paddingBottom: "3rem",
                    }}
                  >
                    {[
                      ...bottomRowCountries,
                      ...bottomRowCountries,
                      ...bottomRowCountries,
                      ...bottomRowCountries,
                      ...bottomRowCountries,
                    ].map((country, index) => (
                      <SwiperSlide key={`bottom-${index}`} className="!w-auto">
                        <CountryCard country={country} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="hidden md:block">
                  <TopAirplaneIcon />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Service Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={index}
                className={`${section.bgColor} ${section.borderColor} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center mb-4">
                  <IconComponent
                    className={`w-6 h-6 ${section.iconColor} mr-3`}
                  />
                  <h4 className="text-lg font-semibold text-gray-900">
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {section.items?.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm text-gray-700 flex items-start"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Detailed Sections */}
        {/* <div className="grid lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`${section.bgColor} rounded-2xl p-8 border ${section.borderColor}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 ${section.bgColor.replace(
                    "50",
                    "100"
                  )} rounded-lg flex items-center justify-center`}
                >
                  <section.icon className={`w-6 h-6 ${section.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 ${section.iconColor.replace(
                        "600",
                        "100"
                      )} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <CheckCircle className={`w-3 h-3 ${section.iconColor}`} />
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

        {/* Why Choose Us */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose DreamsToFly?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to making your study abroad journey smooth and
              successful with our proven track record and dedicated support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Proven Track Record
              </h4>
              <p className="text-gray-600">
                Successfully helped thousands of students achieve their study
                abroad dreams.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Guidance
              </h4>
              <p className="text-gray-600">
                Experienced professionals who understand the complexities of
                international education.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 Support
              </h4>
              <p className="text-gray-600">
                Round-the-clock assistance to ensure you never feel alone in
                your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;

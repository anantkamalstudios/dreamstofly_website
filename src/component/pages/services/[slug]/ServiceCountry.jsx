import React from "react";
import { CheckCircle, Clock, Shield, Star, Users, Target } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const ServiceCountry = ({ countryData }) => {
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

  const CountryCard = ({ country }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/90 min-w-max group">
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
          src="/images/services/topright.png"
          alt="Top Right Decoration"
          className="absolute top-8 left-36 w-full h-full opacity-50 pointer-events-none select-none"
        />
      </div>
    </div>
  );

  return (
    <section className="pt-5">
      <div className="container mx-auto px-4">
        <div className="mb-16 relative overflow-hidden">
          <div className="p-10 lg:p-24 relative">
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                  {countryData.title}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {countryData.description}
                </p>
              </div>

              <div className="relative space-y-8">
                <div className="overflow-hidden">
                  <Swiper
                    modules={[Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={16}
                    loop={true}
                    autoplay={{
                      delay: 1,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                      reverseDirection: false,
                    }}
                    speed={5000}
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
                        <div className="hover-rotate">
                          <CountryCard country={country} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Second Swiper - Moving Right to Left (Opposite Direction) */}
                <div className="overflow-hidden">
                  <Swiper
                    modules={[Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={16}
                    loop={true}
                    speed={5000}
                    autoplay={{
                      delay: 1,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                      reverseDirection: true,
                    }}
                    allowTouchMove={false}
                    grabCursor={false}
                    className="countries-swiper-bottom"
                    breakpoints={{
                      640: { spaceBetween: 20 },
                      1024: { spaceBetween: 24 },
                    }}
                    style={{
                      paddingBottom: "3rem",
                      paddingTop: "1rem",
                    }}
                  >
                    {[
                      ...topRowCountries,
                      ...topRowCountries,
                      ...topRowCountries,
                      ...topRowCountries,
                      ...topRowCountries,
                    ].map((country, index) => (
                      <SwiperSlide key={`bottom-${index}`} className="!w-auto">
                        <div className="hover-rotate">
                          <CountryCard country={country} />
                        </div>
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
        </div>
      </div>
    </section>
  );
};

export default ServiceCountry;

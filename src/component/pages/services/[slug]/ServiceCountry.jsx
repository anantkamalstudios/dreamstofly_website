import React from "react";
import { CheckCircle, Clock, Shield, Star, Users, Target } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CountryCard from "../components/CountryCard";
import TopAirplaneIcon from "../components/TopAirplaneIcon";
import "swiper/css";
import "swiper/css/free-mode";
import Heading from "../../../../common/Heading";

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

  return (
    <section className="pt-2">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-28 ">
        <div className="mb-3 relative overflow-hidden">
          <div className=" px-2 md:px-4 lg:px-6 lg:py-12 relative">
            <div className="relative z-10">
              <div className="text-center mb-6">
                {/* <h3 className="text-2xl lg:text-4xl  xl:text-5xl font-normal text-[#115779] mb-4">
                  {countryData?.title || ""}
                </h3> */}
                <Heading
                  text={countryData?.title}
                  className="text-center mb-4"
                />
                <p className="text-md text-gray-600 max-w-2xl mx-auto">
                  {countryData?.discription || ""}
                </p>
              </div>

              <div className="relative space-y-4">
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

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ReceiptText } from "lucide-react";

import FreePlanModal from "./FreePlanModal";
import PremiumPlanModal from "./PremiumPlanModal";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import {
  processListItems,
  htmlContentToArray,
} from "../../../utils/processListItems";
import {
  faChartSimple,
  faParachuteBox,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { faGem, faHouse } from "@fortawesome/free-regular-svg-icons";

const PostAdmitServices = () => {
  const [openModal, setOpenModal] = useState(null);
  const [responseData, setResponseData] = useState({
    heroSection: null,
    planSection: [],
    whyChooseUs: null,
    ctaSection: null,
  });

  useEffect(() => {
    Promise.allSettled([
      axios.get(`${import.meta.env.VITE_BASE_URL}/api/post-admit/hero_section`),
      axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/post-admit/plans_section`
      ),
      axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/post-admit/why_choose_us`
      ),
      axios.get(`${import.meta.env.VITE_BASE_URL}/api/post-admit/cta_section`),
    ])
      .then((results) => {
        const [heroResult, plansResult, whyChooseResult, ctaResult] = results;

        const newData = {
          heroSection:
            heroResult.status === "fulfilled"
              ? heroResult.value?.data?.data?.[0]
              : null,
          planSection:
            plansResult.status === "fulfilled"
              ? plansResult.value?.data?.data
              : [],
          whyChooseUs:
            whyChooseResult.status === "fulfilled"
              ? whyChooseResult.value?.data?.data?.[0]
              : null,
          ctaSection:
            ctaResult.status === "fulfilled"
              ? ctaResult.value?.data?.data?.[0]
              : null,
        };

        setResponseData(newData);
        console.log("API Response:", newData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { heroSection, planSection, whyChooseUs, ctaSection } = responseData;
  console.log(responseData);

  const differentiators = whyChooseUs?.content
    ? processListItems(whyChooseUs.content)
    : [];

  const differentiatorsIcon = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faChartSimple}
          className="w-8 h-8 text-blue-600"
        />
      ),
      color: "bg-green-400/30",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faCcVisa} className="w-8 h-8 text-blue-600" />
      ),
      color: "bg-blue-400/30",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faHouse} className="w-8 h-8 text-blue-600" />
      ),
      color: "bg-purple-400/30",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faServer} className="w-8 h-8 text-blue-600" />
      ),
      color: "bg-orange-400/30",
    },
  ];

  const ctaContentIcon = [
    <ReceiptText className="w-10 h-10 text-blue-600" />,
    <FontAwesomeIcon
      icon={faParachuteBox}
      className="w-10 h-10 text-blue-600"
    />,
    <FontAwesomeIcon icon={faGem} className="w-10 h-10 text-blue-600" />,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-44 h-44 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {heroSection && (
        <section className="w-full relative px-6 md:px-12 flex flex-col md:flex-row justify-between items-stretch bg-gradient-to-b from-[#2DB4CF] via-[#1F7B8D] to-[#175B69] text-white h-[500px] md:h-[40vh] lg:h-[50vh] xl:h-[65vh]">
          <div className="flex-1 flex flex-col justify-center px-5 py-6 md:py-10 lg:py-12 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white mb-3 md:mb-4">
                {heroSection.title}
              </h1>
              {heroSection.subtitle && (
                <div
                  className="text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl text-start leading-relaxed text-white [&_*]:!text-white"
                  dangerouslySetInnerHTML={{ __html: heroSection.subtitle }}
                />
              )}
            </motion.div>
          </div>
          {heroSection.image && (
            <motion.div
              className="flex-1 relative flex items-end justify-center md:justify-end overflow-hidden h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1 }}
            >
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}${heroSection.image}`}
                alt="Hero"
                className="h-full w-auto object-contain object-bottom"
                loading="lazy"
              />
            </motion.div>
          )}
        </section>
      )}

      {/* Services Section */}
      <section className="py-10 px-6 relative z-10">
        <div className="max-w-[85%] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              {/* {planSection?.title} */}
            </h2>
            {/* <p
              className="text-base text-gray-600"
              dangerouslySetInnerHTML={{ __html: planSection?.subtitle }}
            ></p> */}
          </div>
          {planSection.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-10">
              {planSection.map((service, index) => (
                <motion.div
                  onClick={() => setOpenModal(index === 0 ? "free" : "premium")}
                  key={service.id || index}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  {service.image && (
                    <div className="relative h-full max-h-72 w-full overflow-hidden">
                      <img
                        src={`${import.meta.env.VITE_IMAGE_URL}${
                          service.image
                        }`}
                        alt={service.title || "Service Image"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <div
                        className="text-gray-600 mb-4"
                        dangerouslySetInnerHTML={{ __html: service.subtitle }}
                      />
                    )}
                    {service.content && (
                      <div
                        className="text-sm text-gray-500 mb-4"
                        dangerouslySetInnerHTML={{ __html: service.content }}
                      />
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-medium">
                        Learn more
                      </span>
                      <ArrowRight className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">
                No plan sections available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Differentiators */}
      {whyChooseUs && (
        <section className="py-10 px-6 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
          <div className="max-w-full px-10 mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {whyChooseUs.title || "Why Choose Our Services?"}
              </h2>
              {whyChooseUs.subtitle && (
                <div
                  className="text-base text-gray-600"
                  dangerouslySetInnerHTML={{ __html: whyChooseUs.subtitle }}
                />
              )}
            </div>
            {differentiators.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
                {differentiators.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white/90 backdrop-blur-sm p-6 shadow-lg border border-transparent cursor-pointer border-x-[8px] border-t-[8px] border-b-[8px] hover:border-b-blue-600"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 relative">
                      {differentiatorsIcon[index]?.icon || (
                        <FontAwesomeIcon
                          icon={faChartSimple}
                          className="w-8 h-8 text-blue-600"
                        />
                      )}
                      <p
                        className={`absolute bottom-4 left-5 w-8 h-8 rounded-full ${
                          differentiatorsIcon[index]?.color || "bg-blue-400/30"
                        } -z-10`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">
                  No differentiators available at the moment.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      {ctaSection && (
        <section className="py-12 px-8 relative overflow-hidden text-black flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-10">
          {ctaSection.image && (
            <div className="flex justify-center items-center">
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}${ctaSection.image}`}
                alt="Call to action"
                className="w-[500px] h-[500px] object-contain rounded-lg"
              />
            </div>
          )}
          <div className="relative mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold  mb-5">
              {ctaSection?.title}
            </h2>
            <p
              className="text-base text-black  mb-8 max-w-2xl mx-auto leading-relaxed"
              dangerouslySetInnerHTML={{ __html: ctaSection?.subtitle }}
            />
            <div className="flex flex-col sm:flex-row gap-5 justify-end items-center">
              {ctaSection?.button_text && (
                <button className="group bg-blue-600 px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm text-white sm:block">
                  {ctaSection.button_text}
                </button>
              )}
              <button className="group bg-blue-600 px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm text-white sm:flex">
                Download Guide
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Modals */}
      {openModal === "free" && (
        <FreePlanModal onClose={() => setOpenModal(null)} />
      )}
      {openModal === "premium" && (
        <PremiumPlanModal onClose={() => setOpenModal(null)} />
      )}
    </div>
  );
};

export default PostAdmitServices;

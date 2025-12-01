import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SOPHomePage = () => {
  const [data, setData] = useState(null);
  const endpoint = "/CMS/Sop_Lor_controller/get_sop_lor_data";
  const fetchData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}${endpoint}`);
    setData(res?.data);
    console.log(res?.data);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <div>
      {/* <header className="relative bg-[#003E79] w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 py-2 md:py-4">
        <div className="text-white text-center md:text-left max-w-xl mx-auto md:mx-20 lg:mx-28 xl:mx-32">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium mb-3">
            {data?.hero?.title}
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-light text-white">
            {data?.hero?.subtitle}
          </p>
        </div>

        <img
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}${data?.hero?.image}`}
          alt="logo"
          className="w-64 sm:w-72 md:w-[380px] lg:w-[430px] xl:w-[480px] object-contain"
          loading="lazy"
        />
      </header> */}

      <header className="relative bg-[#003E79] w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-[400px] md:min-h-[500px] lg:min-h-[440px] py-8 md:py-0">
            <div className="flex-1 text-white z-10 text-center md:text-left mb-8 md:mb-0 md:pr-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight">
                {data?.hero?.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white leading-relaxed max-w-2xl mx-auto md:mx-0">
                {data?.hero?.subtitle}
              </p>
            </div>
            <div className="flex-shrink-0 relative w-full md:w-auto bg-transparent">
              <div className="flex justify-center md:justify-end items-end">
                <img
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
                    data?.hero?.image
                  }`}
                  alt="Student working on laptop"
                  className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-4 py-10 max-w-7xl mx-auto">
          {data?.cards?.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <div className="w-full h-72 sm:h-80 md:h-96">
                <img
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}${card.image}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-10 py-8 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-[#003366] mb-3">
                  {card.title}
                </h2>

                <p className="text-black text-sm leading-relaxed mb-8">
                  {card.description}
                </p>
                <div className="flex justify-start items-center">
                  <Link
                    to={"/" + card.slug}
                    className="bg-[#007BFF] hover:bg-[#005FCC] text-white px-10 py-2 rounded-lg font-medium"
                  >
                    {card.slug === "sop-form"
                      ? "Go to SOP Form"
                      : "Go to LOR Form"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SOPHomePage;

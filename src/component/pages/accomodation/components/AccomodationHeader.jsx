import { ArrowRight, HomeIcon, Search } from "lucide-react";
import { asset } from "../../../../assets/asset.js";
import { GoTag } from "react-icons/go";
import { HiHome } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
const AccomodationHeader = () => {
  const tags = [
    {
      icon: <GoTag />,
      name: "Lowest Price Guarantee",
    },
    {
      icon: <RiCustomerService2Line />,
      name: "24x7 Personal Assistence",
    },
    {
      icon: <HiHome className="bg-transparent" />,
      name: "100% Verified Listings",
    },
  ];

  return (
    <div className="w-full">
      <div
        className="relative h-[90vh] max-xl:h-[70vh]  bg-cover bg-no-repeat bg-center flex flex-col gap-8"
        style={{ backgroundImage: `url(${asset.accomodationHeader})` }}
      >
        {/* nav div */}
        <div className="w-full p-4 flex justify-end items-center gap-4">
          <FaPhoneAlt className="text-white w-6 h-6" />
          <BsWhatsapp className="text-white w-8 h-8 bg-green-500 rounded-full" />
          {/* button */}
         
          <Link 
            to="/accomodation/list-your-property" 
            className="py-2 px-6 rounded-3xl bg-white text-black hover:bg-gray-100 transition-colors"
          >
            List Your Property
          </Link>
        </div>

        <img
          src={`${asset.accomodationHeadKeyImg}`}
          className="absolute h-32 top-5 left-10"
          alt=""
        />
        {/* main section */}
        <div className="w-[70%] mt-4 grid grid-rows-3 gap-10">
          <section className="w-full flex flex-col gap-8 px-4">
            <h1 className="text-center text-5xl text-white">
              Redefining Student Accommodation
            </h1>
            <div className="flex justify-evenly items-center">
              {tags.map((tags, index) => (
                <p className="text-white flex items-center gap-2 text-lg">
                  <span>{tags.icon}</span>
                  {tags.name}
                </p>
              ))}
            </div>
          </section>

          {/* Search input section */}
          <section className="w-full  flex justify-center items-center">
            <div className="w-[60%] rounded-3xl bg-white text-black flex justify-center items-center px-4">
              <input
                type="text"
                className="w-full px-6 py-3 rounded-3xl outline-none"
                placeholder="Enter something"
              />
              <Search className="text-blue-600" />
            </div>
          </section>

          <section className="flex justify-center items-center">
            <div className="flex gap-4">
              <p className="text-white flex items-center gap-2 text-lg">
                <span>
                  <HomeIcon />
                </span>
                Personalized Recommandations based on Your Preferences
              </p>
              <button className="py-2 px-6 rounded-3xl bg-white text black flex gap-2">
                Find My Home
                <span>
                  <ArrowRight className="text-blue-600" />
                </span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccomodationHeader;

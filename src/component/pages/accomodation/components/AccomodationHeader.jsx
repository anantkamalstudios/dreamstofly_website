// import { ArrowRight, HomeIcon, Search } from "lucide-react";
// import { asset } from "../../../../assets/asset.js";
// import { GoTag } from "react-icons/go";
// import { HiHome } from "react-icons/hi2";
// import { FaPhoneAlt } from "react-icons/fa";
// import { RiCustomerService2Line } from "react-icons/ri";
// import { BsWhatsapp } from "react-icons/bs";
// const AccomodationHeader = () => {
//   const tags = [
//     {
//       icon: <GoTag />,
//       name: "Lowest Price Guarantee",
//     },
//     {
//       icon: <RiCustomerService2Line />,
//       name: "24x7 Personal Assistence",
//     },
//     {
//       icon: <HiHome className="bg-transparent" />,
//       name: "100% Verified Listings",
//     },
//   ];

//   return (
//     <div className="w-full">
//       <div
//         className="relative h-[90vh] bg-cover bg-no-repeat bg-center flex flex-col gap-8"
//         style={{ backgroundImage: `url(${asset.accomodationHeader})` }}
//       >
//         {/* nav div */}
//         <div className="w-full p-4 flex justify-end items-center gap-4">
//           <FaPhoneAlt className="text-white w-6 h-6" />
//           <BsWhatsapp className="text-white w-8 h-8 bg-green-500 rounded-full" />
//           {/* button */}
//           <button className="py-2 px-6 rounded-3xl bg-white text-black">
//             List Your Property
//           </button>
//         </div>

//         <img
//           src={`${asset.accomodationHeadKeyImg}`}
//           className="absolute h-32 top-5 left-10"
//           alt=""
//         />
//         {/* main section */}
//         <div className="w-[70%] mt-4 grid grid-rows-3 gap-10">
//           <section className="w-full flex flex-col gap-8 px-4">
//             <h1 className="text-center text-5xl text-white">
//               Redefining Student Accommodation
//             </h1>
//             <div className="flex justify-evenly items-center">
//               {tags.map((tags, index) => (
//                 <p className="text-white flex items-center gap-2 text-lg">
//                   <span>{tags.icon}</span>
//                   {tags.name}
//                 </p>
//               ))}
//             </div>
//           </section>

//           {/* Search input section */}
//           <section className="w-full  flex justify-center items-center">
//             <div className="w-[60%] rounded-3xl bg-white text-black flex justify-center items-center px-4">
//               <input
//                 type="text"
//                 className="w-full px-6 py-3 rounded-3xl outline-none"
//                 placeholder="Enter something"
//               />
//               <Search className="text-blue-600" />
//             </div>
//           </section>

//           <section className="flex justify-center items-center">
//             <div className="flex gap-4">
//               <p className="text-white flex items-center gap-2 text-lg">
//                 <span>
//                   <HomeIcon />
//                 </span>
//                 Personalized Recommandations based on Your Preferences
//               </p>
//               <button className="py-2 px-6 rounded-3xl bg-white text black flex gap-2">
//                 Find My Home
//                 <span>
//                   <ArrowRight className="text-blue-600" />
//                 </span>
//               </button>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccomodationHeader;

// import { ArrowRight, Search, Home } from "lucide-react";
// import { GoTag } from "react-icons/go";
// import { HiHome } from "react-icons/hi2";
// import { FaPhoneAlt } from "react-icons/fa";
// import { RiCustomerService2Line } from "react-icons/ri";
// import { BsWhatsapp } from "react-icons/bs";
// import { asset } from "../../../../assets/asset.js";

// const AccomodationHeader = () => {
//   const tags = [
//     {
//       icon: <GoTag />,
//       name: "Lowest Price Guarantee",
//     },
//     {
//       icon: <RiCustomerService2Line />,
//       name: "24x7 Personal Assistence",
//     },
//     {
//       icon: <HiHome className="bg-transparent" />,
//       name: "100% Verified Listings",
//     },
//   ];

//   return (
//     <div className="w-full">
//       <div
//         className="relative h-[90vh] md:h-[85vh] lg:h-[80vh] xl:h-[75vh] 2xl:h-[700px] bg-cover bg-no-repeat bg-center flex flex-col gap-8"
//         style={{ backgroundImage: `url(${asset.accomodationHeader})` }}
//       >
//         {/* nav div */}
//         <div className="w-full p-4 flex justify-end items-center gap-4">
//           <FaPhoneAlt className="text-white w-6 h-6" />
//           <BsWhatsapp className="text-white w-8 h-8 bg-green-500 rounded-full" />
//           {/* button */}
//           <button className="py-2 px-6 rounded-3xl bg-white text-black">
//             List Your Property
//           </button>
//         </div>

//         <img
//           src={`${asset.accomodationHeadKeyImg}`}
//           className="absolute h-32 top-5 left-10"
//           alt=""
//         />
//         {/* main section */}
//         <div className="w-[70%] mt-4 grid grid-rows-3 gap-10">
//           <section className="w-full flex flex-col gap-8 px-4">
//             <h1 className="text-center text-5xl text-white">
//               Redefining Student Accommodation
//             </h1>
//             <div className="flex justify-evenly items-center">
//               {tags.map((tags, index) => (
//                 <p
//                   key={index}
//                   className="text-white flex items-center gap-2 text-lg"
//                 >
//                   <span>{tags.icon}</span>
//                   {tags.name}
//                 </p>
//               ))}
//             </div>
//           </section>

//           {/* Search input section */}
//           <section className="w-full flex justify-center items-center">
//             <div className="w-[60%] rounded-3xl bg-white text-black flex justify-center items-center px-4">
//               <input
//                 type="text"
//                 className="w-full px-6 py-3 rounded-3xl outline-none"
//                 placeholder="Enter something"
//               />
//               <Search className="text-blue-600" />
//             </div>
//           </section>

//           <section className="flex justify-center items-center">
//             <div className="flex gap-4">
//               <p className="text-white flex items-center gap-2 text-lg">
//                 <span>
//                   <Home />
//                 </span>
//                 Personalized Recommandations based on Your Preferences
//               </p>
//               <button className="py-2 px-6 rounded-3xl bg-white text-black flex gap-2">
//                 Find My Home
//                 <span>
//                   <ArrowRight className="text-blue-600" />
//                 </span>
//               </button>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccomodationHeader;

// import { ArrowRight, Search, Home } from "lucide-react";
// import { GoTag } from "react-icons/go";
// import { HiHome } from "react-icons/hi2";
// import { FaPhoneAlt } from "react-icons/fa";
// import { RiCustomerService2Line } from "react-icons/ri";
// import { BsWhatsapp } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { asset } from "../../../../assets/asset.js";

// const AccomodationHeader = () => {
//   const tags = [
//     {
//       icon: <GoTag />,
//       name: "Lowest Price Guarantee",
//     },
//     {
//       icon: <RiCustomerService2Line />,
//       name: "24x7 Personal Assistence",
//     },
//     {
//       icon: <HiHome className="bg-transparent" />,
//       name: "100% Verified Listings",
//     },
//   ];

//   return (
//     <div className="w-full">
//       <div
//         className="relative h-fit md:h-[85vh] lg:h-[80vh] xl:h-[75vh] 2xl:h-[700px] bg-cover bg-no-repeat bg-center flex flex-col gap-8"
//         style={{ backgroundImage: `url(${asset.accomodationHeader})` }}
//       >
//         <div className="w-full p-3 md:p-4 flex justify-end items-center gap-3 md:gap-4">
//           <FaPhoneAlt className="text-white w-5 h-5 md:w-6 md:h-6" />
//           <BsWhatsapp className="text-white w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-full" />
//           <Link
//             to="/accomodation/list-your-property"
//             className="py-2 px-6 rounded-3xl bg-white text-black hover:bg-gray-100 transition-colors"
//           >
//             List Your Property
//           </Link>
//         </div>
//         <img
//           src={`${asset.accomodationHeadKeyImg}`}
//           className="absolute h-20 md:h-24 lg:h-28 xl:h-32 top-3 left-6 md:top-5 md:left-10"
//           alt=""
//         />
//         {/* main section */}
//         <div className="w-full md:w-[85%] lg:w-[80%] xl:w-[70%] mt-4 grid grid-rows-3 gap-6 md:gap-8 lg:gap-10 px-4">
//           <section className="w-full flex flex-col gap-4 md:gap-6 lg:gap-8 px-2 md:px-4">
//             <h1 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
//               Redefining Student Accommodation
//             </h1>
//             <div className="flex flex-col md:flex-row justify-evenly items-center gap-3 md:gap-4">
//               {tags.map((tags, index) => (
//                 <p
//                   key={index}
//                   className="text-white flex items-center gap-2 text-xs md:text-sm lg:text-base xl:text-lg"
//                 >
//                   <span className="flex-shrink-0">{tags.icon}</span>
//                   <span>{tags.name}</span>
//                 </p>
//               ))}
//             </div>
//           </section>

//           {/* Search input section */}
//           <section className="w-full flex justify-center items-center px-2 md:px-4">
//             <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] rounded-3xl bg-white text-black flex justify-center items-center px-3 md:px-4">
//               <input
//                 type="text"
//                 className="w-full px-4 md:px-6 py-2 md:py-3 rounded-3xl outline-none text-sm md:text-base"
//                 placeholder="Enter something"
//               />
//               <Search className="text-blue-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
//             </div>
//           </section>

//           <section className="flex justify-center items-center px-4">
//             <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center max-w-full">
//               <p className="text-white flex items-center gap-2 text-sm md:text-base lg:text-lg text-center md:text-left">
//                 <span className="flex-shrink-0">
//                   <Home className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
//                 </span>
//                 <span className="break-words">
//                   Personalized Recommandations based on Your Preferences
//                 </span>
//               </p>
//               <button className="py-1.5 px-4 md:py-2 md:px-6 rounded-3xl bg-white text-black flex gap-2 items-center text-sm md:text-base whitespace-nowrap flex-shrink-0">
//                 Find My Home
//                 <span>
//                   <ArrowRight className="text-blue-600 w-4 h-4 md:w-5 md:h-5" />
//                 </span>
//               </button>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccomodationHeader;

import { ArrowRight, Search, Home } from "lucide-react";
import { GoTag } from "react-icons/go";
import { HiHome } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { asset } from "../../../../assets/asset.js";

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
      <div className="relative h-fit md:h-[80vh] lg:h-[75vh] xl:h-[70vh] 2xl:h-[600px] bg-[#187ac7] flex flex-col md:flex-row gap-8">
        {/* Right side icons and button - now absolute positioned */}
        <div className="absolute top-0 right-0 w-full p-3 md:p-4 flex justify-end items-center gap-3 md:gap-4 z-10 py-4">
          <FaPhoneAlt className="text-white w-5 h-5 md:w-6 md:h-6" />
          <BsWhatsapp className="text-white w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-full" />
          <Link
            to="/accomodation/list-your-property"
            className="py-2 px-6 rounded-3xl bg-white text-black hover:bg-gray-100 transition-colors"
          >
            List Your Property
          </Link>
        </div>
        <img
          src={`${asset.accomodationHeadKeyImg}`}
          className="absolute h-20 md:h-24 lg:h-28 xl:h-32 top-3 left-6 md:top-5 md:left-10 z-10"
          alt=""
        />

        {/* Left side content */}
        <div className="w-full md:w-3/5 flex items-center justify-center px-4 md:px-8 lg:px-12 pt-24 md:pt-0 py-4">
          <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
            {/* Heading and tags */}
            <section className="w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
              <h1 className="text-left text-xl md:text-2xl lg:text-4xl xl:text-[43px] text-white">
                Redefining Student Accommodation
              </h1>
              <div className="flex flex-col md:flex-row justify-start items-start gap-3 md:gap-6">
                {tags.map((tags, index) => (
                  <p
                    key={index}
                    className="text-white flex items-center gap-2 text-xs md:text-sm lg:text-base xl:text-lg"
                  >
                    <span className="flex-shrink-0">{tags.icon}</span>
                    <span>{tags.name}</span>
                  </p>
                ))}
              </div>
            </section>

            {/* Search input section */}
            <section className="w-[70%] mx-auto flex justify-start items-center">
              <div className="w-full rounded-3xl bg-white text-black flex justify-center items-center px-3 md:px-4">
                <input
                  type="text"
                  className="w-full px-4 md:px-6 py-2 md:py-3 rounded-3xl outline-none text-sm md:text-base"
                  placeholder="Search by City, University or Property"
                />
                <Search className="text-blue-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              </div>
            </section>

            {/* Find My Home section */}
            <section className="flex justify-start items-center">
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center max-w-full">
                <p className="text-white flex items-center gap-2 text-sm md:text-base lg:text-lg">
                  <span className="flex-shrink-0">
                    <Home className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                  </span>
                  <span className="break-words">
                    Personalised Recommendations based on your preferences
                  </span>
                </p>
                <button className="py-1.5 px-4 md:py-2 md:px-6 rounded-3xl bg-white text-black flex gap-2 items-center text-sm md:text-base whitespace-nowrap flex-shrink-0">
                  Find My Home
                  <span>
                    <ArrowRight className="text-blue-600 w-4 h-4 md:w-5 md:h-5" />
                  </span>
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Right side image */}
        <div className="hidden md:flex md:w-2/5 items-center justify-center overflow-visible">
          <img
            src="/images/accomodation/accomodationHero.png"
            alt="Student with house model"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AccomodationHeader;

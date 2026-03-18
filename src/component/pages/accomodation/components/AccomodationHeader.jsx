// import { ArrowRight, Search, Home } from "lucide-react";
// import { GoTag } from "react-icons/go";
// import { HiHome } from "react-icons/hi2";
// import { FaPhoneAlt } from "react-icons/fa";
// import { RiCustomerService2Line } from "react-icons/ri";
// import { BsWhatsapp } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { asset } from "../../../../assets/asset.js";
// import { useState } from "react";
// import AdminLoginModal from "../../../../admin/AdminLoginModal.jsx";

// // const AccomodationHeader = () => {
// //   const tags = [
// //     {
// //       icon: <GoTag />,
// //       name: "Lowest Price Guarantee",
// //     },
// //     {
// //       icon: <RiCustomerService2Line />,
// //       name: "24x7 Personal Assistence",
// //     },
// //     {
// //       icon: <HiHome className="bg-transparent" />,
// //       name: "100% Verified Listings",
// //     },
// //   ];

// //   return (
// //     <div className="w-full">
// //       <div className="relative h-fit md:h-auto lg:h-[75vh] xl:h-[70vh] 2xl:h-[600px] bg-[#187ac7] flex flex-col md:flex-col lg:flex-row gap-8 font-bricolageGrotesque">
// //         <div className="absolute top-0 right-0 w-full p-3 md:p-4 flex justify-end items-center gap-3 md:gap-4 z-10 py-4">
// //           <FaPhoneAlt className="text-white w-5 h-5 md:w-6 md:h-6" />
// //           <BsWhatsapp className="text-white w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-full" />
// //           <Link
// //             to="/accomodation/list-your-property"
// //             className="py-2 px-6 rounded-3xl bg-white text-black hover:bg-gray-100 transition-colors"
// //           >
// //             List Your Property
// //           </Link>
// //         </div>
// //         <img
// //           src={`${asset.accomodationHeadKeyImg}`}
// //           className="absolute h-20 md:h-24 lg:h-28 xl:h-32 top-3 left-6 md:top-5 md:left-10 z-10 md:hidden"
// //           alt=""
// //         />

// //         {/* Left side content */}
// //         <div className="w-full md:w-full lg:w-3/5 flex items-center justify-center px-4 md:px-8 lg:px-12 pt-24 md:pt-16 py-4 md:py-6 lg:py-4">
// //           <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
// //             {/* Heading and tags */}
// //             <section className="w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
// //               <h1 className="text-left text-xl md:text-2xl lg:text-4xl xl:text-[45px] text-white">
// //                 Redefining Student Accommodation
// //               </h1>
// //               <div className="flex flex-col md:flex-row justify-between items-start gap-3 md:gap-6">
// //                 {tags.map((tags, index) => (
// //                   <p
// //                     key={index}
// //                     className="text-white flex items-center gap-2 font-medium text-sm md:text-md lg:text-lg"
// //                   >
// //                     <span className="flex-shrink-0">{tags.icon}</span>
// //                     <span>{tags.name}</span>
// //                   </p>
// //                 ))}
// //               </div>
// //             </section>

// //             {/* Search input section */}
// //             <section className="w-[70%] mx-auto flex justify-start items-center ">
// //               <div className="w-full rounded-3xl bg-white text-gray-900 flex justify-center items-center px-3 md:px-4">
// //                 <input
// //                   type="text"
// //                   className="w-full px-4 md:px-6 py-2 md:py-3 rounded-3xl outline-none text-sm md:text-base font-semibold"
// //                   placeholder="Search by City, University or Property"
// //                 />
// //                 <Search className="text-blue-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
// //               </div>
// //             </section>

// //             {/* Find My Home section */}
// //             <section className="w-full">
// //               <div className="flex flex-col md:flex-row items-center justify-between w-full">
// //                 <p className="text-white flex items-center gap-2 text-sm md:text-md lg:text-lg">
// //                   <span className="flex-shrink-0">
// //                     <Home className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
// //                   </span>
// //                   <span className="break-words font-medium">
// //                     Personalised Recommendations based on your preferences
// //                   </span>
// //                 </p>

// //                 <button className="py-1.5 px-4 md:py-2 md:px-6 rounded-3xl bg-white text-black flex gap-2 items-center text-sm md:text-md whitespace-nowrap">
// //                   Find My Home
// //                   <span>
// //                     <ArrowRight className="text-blue-600 w-4 h-4 md:w-5 md:h-5" />
// //                   </span>
// //                 </button>
// //               </div>
// //             </section>
// //           </div>
// //         </div>

// //         {/* Right side image */}
// //         <div className="hidden lg:block lg:w-2/5 items-center justify-center overflow-hidden lg:h-auto">
// //           <img
// //             src="/images/accomodation/accomodationHero.png"
// //             alt="Student with house model"
// //             className="w-full h-full md:h-[300px] lg:h-full object-cover"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

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

//   const [showLoginModal, setShowLoginModal] = useState(false);

//   return (
//     <div className="w-full">
//       {/* <div className="relative bg-[#187ac7]"> */}
//       <div className="relative min-h-[500px] bg-[url('/images/accomodation/AccomodationHeroBgImage.jpg')] bg-cover bg-center bg-no-repeat">
//         {/* Top right actions */}
//         {/* <div className="absolute top-0 right-0 w-full p-3 md:p-4 flex justify-end items-center gap-2 md:gap-4 z-20">
//           <FaPhoneAlt className="text-white w-4 h-4 md:w-5 md:h-5" />
//           <BsWhatsapp className="text-white w-6 h-6 md:w-7 md:h-7 bg-green-500 rounded-full p-1" />
//           <Link
//             to="/accomodation/list-your-property"
//             className="py-1.5 px-3 md:py-2 md:px-6 rounded-3xl bg-white text-black hover:bg-gray-100 transition-colors text-xs md:text-base font-medium"
//           >
//             List Your Property
//           </Link>
//           <button
//             className="py-1.5 px-3 md:py-2 md:px-6 rounded-3xl bg-white text-black hover:bg-gray-100 transition-colors text-xs md:text-base font-medium"
//             onClick={() => setShowLoginModal(true)}
//           >
//             Login
//           </button>
//         </div> */}

//         {/* Key image - mobile only */}
//         <img
//           src={`${asset.accomodationHeadKeyImg}`}
//           className="absolute h-14 md:h-20 top-3 left-4 md:left-6 z-20 md:hidden"
//           alt=""
//         />

//         {/* Main content wrapper - FLEX COL on mobile, ROW on medium+ */}
//         <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[470px]">
//           {/* Left side content */}
//           <div className="w-full md:w-3/5 flex items-center px-4 md:px-6 lg:px-12 pt-16 md:pt-20 pb-6 md:pb-8 lg:pb-0">
//             <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-6">
//               {/* Heading and tags */}
//               <section className="w-full flex flex-col gap-3 md:gap-4 lg:gap-5">
//                 <h1 className="text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[45px] text-white font-bold leading-tight">
//                   The UK's Number 1 Flatshare Site
//                 </h1>
//                 {/* <div className="flex flex-col sm:flex-row justify-start md:justify-between items-start gap-2 md:gap-3 lg:gap-4">
//                   {tags.map((tag, index) => (
//                     <p
//                       key={index}
//                       className="text-white flex items-center gap-2 font-medium text-xs md:text-sm lg:text-base"
//                     >
//                       <span className="flex-shrink-0 text-base md:text-lg lg:text-xl">
//                         {tag.icon}
//                       </span>
//                       <span>{tag.name}</span>
//                     </p>
//                   ))}
//                 </div> */}
//               </section>

//               {/* Search input section */}
//               <section className="w-full md:w-[90%] lg:w-[85%] xl:w-[75%]">
//                 <div className="w-full rounded-3xl bg-white text-gray-900 flex items-center px-2 md:px-3 shadow-lg">
//                   <input
//                     type="text"
//                     className="w-full px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-3xl outline-none text-xs md:text-sm lg:text-base font-semibold"
//                     placeholder="Search by area of pincode"
//                   />
//                   <Search className="text-blue-600 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
//                 </div>
//               </section>

//               <div className="flex flex-col sm:flex-row justify-start md:justify-between items-start gap-2 md:gap-3 lg:gap-4">
//                   {tags.map((tag, index) => (
//                     <p
//                       key={index}
//                       className="text-white flex items-center gap-2 font-medium text-xs md:text-sm lg:text-base"
//                     >
//                       <span className="flex-shrink-0 text-base md:text-lg lg:text-xl">
//                         {tag.icon}
//                       </span>
//                       <span>{tag.name}</span>
//                     </p>
//                   ))}
//                 </div>

//               {/* Find My Home section */}
//               <section className="w-full">
//                 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3">
//                   <p className="text-white flex items-center gap-2 text-xs md:text-sm lg:text-base">
//                     <span className="flex-shrink-0">
//                       <Home className="w-4 h-4 md:w-5 md:h-5" />
//                     </span>
//                     <span className="font-medium">
//                       123,526 rooms to rent and flatmates available now
//                     </span>
//                   </p>

//                   {/* <button className="py-1.5 px-4 md:py-2 md:px-5 lg:px-6 rounded-3xl bg-white text-black flex gap-2 items-center text-xs md:text-sm lg:text-base whitespace-nowrap hover:bg-gray-100 transition-colors shadow-lg font-medium">
//                     Find My Home
//                     <ArrowRight className="text-blue-600 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
//                   </button> */}
//                 </div>
//               </section>
//             </div>
//           </div>

//           {/* Right side image - Below content on mobile, beside on medium+ */}
//           {/* <div className="w-full md:w-2/5 h-[250px] sm:h-[300px] md:h-auto flex items-end md:items-center justify-center md:justify-end overflow-hidden">
//             <img
//               src="/images/accomodation/accomodationHero.png"
//               alt="Student with house model"
//               className="w-full h-full object-contain object-bottom md:object-right-bottom"
//             />
//           </div> */}
//         </div>
//       </div>
//       <AdminLoginModal
//         isOpen={showLoginModal}
//         onClose={() => setShowLoginModal(false)}
//       />
//     </div>
//   );
// };

// export default AccomodationHeader;

import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaTag, FaHome } from 'react-icons/fa';

const AccommodationHeader = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Rooms');

  const tabs = [
    { label: 'Rooms', icon: <FaTag size={14} /> },
    { label: 'Flatmates', icon: <FaHome size={14} /> },
    { label: 'Proprietor', icon: <FaHome size={14} /> },
  ];

  return (
    <div
      className="relative w-full min-h-[520px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/images/accomodation/AccomodationHeroBgImage.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-3xl mx-auto">

        {/* Heading */}
        <h1
          className="text-white font-bold mb-3 leading-tight"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontFamily: "'Georgia', serif",
            letterSpacing: '-0.5px',
            textShadow: '0 2px 12px rgba(0,0,0,0.35)',
          }}
        >
          The UK's Number 1 Flatshare Site
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/90 mb-8 text-base md:text-lg"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}
        >
          123,526 rooms to rent and flatmates available now
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-xl mb-8">
          <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden px-5 py-3 gap-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by area or pincode"
              className="flex-1 outline-none text-gray-600 text-base bg-transparent placeholder-gray-400"
            />
            <button className="text-blue-500 hover:text-blue-700 transition-colors flex-shrink-0">
              <FiSearch size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-0 text-white text-sm md:text-base font-medium">
          {tabs.map((tab, index) => (
            <React.Fragment key={tab.label}>
              <button
                onClick={() => setActiveTab(tab.label)}
                className="flex items-center gap-2 px-5 py-1.5 rounded-full transition-all"
                style={{
                  color: activeTab === tab.label ? '#fff' : 'rgba(255,255,255,0.75)',
                  fontWeight: activeTab === tab.label ? '700' : '400',
                  textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
              {index < tabs.length - 1 && (
                <span className="text-white/40 select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AccommodationHeader;
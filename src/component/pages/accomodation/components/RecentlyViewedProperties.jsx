// import { BedIcon, TablePropertiesIcon } from "lucide-react";
// import React, { useState, useEffect } from "react";
// import { FaShower } from "react-icons/fa";
// import { GoLocation } from "react-icons/go";

// function RecentlyViewedProperties() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const properties = [
//     {
//       type: "Apartment",
//       price: "£280/week",
//       image:
//         "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
//       address: "1032 Bloomingdale Ave",
//       beds: "3 Beds",
//       baths: "2 Baths",
//       size: "140 sqft",
//     },
//     {
//       type: "Twin bed",
//       price: "£250/week",
//       image:
//         "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
//       address: "4230 Rad Woods Hill",
//       beds: "2 Beds",
//       baths: "1 Bath",
//       size: "100 sqft",
//     },
//     {
//       type: "Single bed",
//       price: "£180/week",
//       image:
//         "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
//       address: "7722 18th Ave, Brooklyn",
//       beds: "1 Bed",
//       baths: "1 Bath",
//       size: "185 sqft",
//     },
//     {
//       type: "Studio",
//       price: "£220/week",
//       image:
//         "https://images.unsplash.com/photo-1502672260066-6bc35f0af07e?w=400&h=300&fit=crop",
//       address: "890 Madison Avenue",
//       beds: "1 Bed",
//       baths: "1 Bath",
//       size: "95 sqft",
//     },
//     {
//       type: "Shared Room",
//       price: "£150/week",
//       image:
//         "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=300&fit=crop",
//       address: "456 Oxford Street",
//       beds: "4 Beds",
//       baths: "2 Baths",
//       size: "200 sqft",
//     },
//   ];

//   const itemsPerPage = 3;
//   const totalPages = Math.ceil(properties.length / itemsPerPage);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, totalPages]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
//   };

//   const startIndex = currentIndex * itemsPerPage;
//   const visibleProperties = properties.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   // return (
//   //   <div className="mt-12 max-w-7xl mx-auto px-4">
//   //     <h2 className="text-3xl font-bold text-gray-900 mb-6">
//   //       Recently Viewed Properties
//   //     </h2>

//   //     <div className="relative overflow-hidden">
//   //       <div
//   //         className="flex transition-transform duration-500 ease-in-out gap-6"
//   //         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//   //       >
//   //         {Array.from({ length: totalPages }).map((_, pageIndex) => (
//   //           <div key={pageIndex} className="min-w-full flex gap-6">
//   //             {properties
//   //               .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
//   //               .map((property, propIndex) => (
//   //                 <div
//   //                   key={propIndex}
//   //                   className="flex-1 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
//   //                 >
//   //                   <img
//   //                     src={property.image}
//   //                     alt={property.type}
//   //                     className="w-full h-48 object-cover"
//   //                   />
//   //                   <div className="p-4">
//   //                     <div className="flex justify-between items-center mb-3">
//   //                       <span className="text-gray-700 font-medium">
//   //                         {property.type}
//   //                       </span>
//   //                       <span className="text-orange-500 font-bold">
//   //                         {property.price}
//   //                       </span>
//   //                     </div>
//   //                     <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
//   //                       <span>📍</span> {property.address}
//   //                     </p>
//   //                     <div className="flex gap-4 text-sm text-gray-600">
//   //                       <span className="flex items-center gap-1">
//   //                         🛏️ {property.beds}
//   //                       </span>
//   //                       <span className="flex items-center gap-1">
//   //                         🚿 {property.baths}
//   //                       </span>
//   //                       <span className="flex items-center gap-1">
//   //                         📐 {property.size}
//   //                       </span>
//   //                     </div>
//   //                   </div>
//   //                 </div>
//   //               ))}
//   //           </div>
//   //         ))}
//   //       </div>
//   //     </div>

//   //     <div className="flex justify-start gap-2 mt-6">
//   //       <button
//   //         onClick={handlePrev}
//   //         className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
//   //       >
//   //         ←
//   //       </button>
//   //       <button
//   //         onClick={handleNext}
//   //         className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
//   //       >
//   //         →
//   //       </button>
//   //     </div>
//   //   </div>
//   // );
// return (
//   <div className="mt-12 max-w-7xl mx-auto px-4 font-vollkorn">
//     <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
//       Recently Viewed Properties
//     </h2>

//     <div className="relative overflow-hidden">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {Array.from({ length: totalPages }).map((_, pageIndex) => (
//           <div
//             key={pageIndex}
//             className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
//           >
//             {properties
//               .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
//               .map((property, propIndex) => (
//                 <div
//                   key={propIndex}
//                   className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
//                 >
//                   <img
//                     src={property.image}
//                     alt={property.type}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <div className="flex justify-between items-center mb-3">
//                       <span className="text-gray-700 font-medium">
//                         {property.type}
//                       </span>
//                       <span className="text-orange-500 font-bold">
//                         {property.price}
//                       </span>
//                     </div>
//                     <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
//                       <span>
//                         <GoLocation />
//                       </span>{" "}
//                       {property.address}
//                     </p>
//                     <div className="flex gap-4 text-sm text-gray-600">
//                       <span className="flex items-center gap-1">
//                         <BedIcon /> {property.beds}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <FaShower /> {property.baths}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <TablePropertiesIcon /> {property.size}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>
//     </div>

//     <div className="flex justify-start gap-2 mt-6">
//       <button
//         onClick={handlePrev}
//         className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
//         aria-label="Previous"
//       >
//         ←
//       </button>
//       <button
//         onClick={handleNext}
//         className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
//         aria-label="Next"
//       >
//         →
//       </button>
//     </div>
//   </div>
// );

// }

// export default RecentlyViewedProperties;

import { Bed, Table } from "lucide-react";
import React, { useState, useEffect } from "react";

function RecentlyViewedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(1);

  const properties = [
    {
      type: "Apartment",
      price: "£280/week",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      address: "1032 Bloomingdale Ave",
      beds: "3 Beds",
      baths: "2 Baths",
      size: "140 sqft",
    },
    {
      type: "Twin bed",
      price: "£250/week",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
      address: "4230 Rad Woods Hill",
      beds: "2 Beds",
      baths: "1 Bath",
      size: "100 sqft",
    },
    {
      type: "Single bed",
      price: "£180/week",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
      address: "7722 18th Ave, Brooklyn",
      beds: "1 Bed",
      baths: "1 Bath",
      size: "185 sqft",
    },
    {
      type: "Studio",
      price: "£220/week",
      image:
        "https://images.unsplash.com/photo-1502672260066-6bc35f0af07e?w=400&h=300&fit=crop",
      address: "890 Madison Avenue",
      beds: "1 Bed",
      baths: "1 Bath",
      size: "95 sqft",
    },
    {
      type: "Shared Room",
      price: "£150/week",
      image:
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=300&fit=crop",
      address: "456 Oxford Street",
      beds: "4 Beds",
      baths: "2 Baths",
      size: "200 sqft",
    },
  ];

  // Create extended array for infinite loop
  const extendedProperties = [...properties, ...properties, ...properties];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // Reset to middle section without transition when reaching edges
    if (currentIndex >= properties.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(properties.length);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(properties.length);
    }
  };

  useEffect(() => {
    // Start at the middle section
    setCurrentIndex(properties.length);
    setIsTransitioning(false);
  }, []);

  const ShowerIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 12h3m9-9v3m0 0c1.66 0 3 1.34 3 3v12H9V9c0-1.66 1.34-3 3-3z" />
      <circle cx="12" cy="18" r="0.5" fill="currentColor" />
      <circle cx="9" cy="20" r="0.5" fill="currentColor" />
      <circle cx="15" cy="20" r="0.5" fill="currentColor" />
      <circle cx="12" cy="22" r="0.5" fill="currentColor" />
    </svg>
  );

  const LocationIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );

  const cardWidth = 100 / cardsToShow;

  return (
    <div className="mt-12 w-full px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Recently Viewed Properties
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}%)`,
              transition: isTransitioning
                ? "transform 500ms ease-in-out"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {extendedProperties.map((property, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2"
                style={{ width: `${cardWidth}%` }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={property.image}
                    alt={property.type}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 font-medium">
                        {property.type}
                      </span>
                      <span className="text-orange-500 font-bold">
                        {property.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                      <LocationIcon />
                      <span className="truncate">{property.address}</span>
                    </p>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Bed size={16} /> {property.beds}
                      </span>
                      <span className="flex items-center gap-1">
                        <ShowerIcon /> {property.baths}
                      </span>
                      <span className="flex items-center gap-1">
                        <Table size={16} /> {property.size}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-start gap-2 mt-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentlyViewedProperties;

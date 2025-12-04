// import React from "react";

// export default function ServicesBenefits({ whyChoose }) {
//   console.log(whyChoose);

//   const cards = JSON.parse(whyChoose.cards);

//   return (
//     <div className="w-full min-h-screen p-4 md:p-6 flex items-center justify-center">
//       <div className="w-full max-w-7xl relative bg-white">
//         <div
//           className="absolute top-0 right-0 h-full rounded-3xl"
//           style={{
//             width: "70%",
//             backgroundColor: "#f6fafd",
//             zIndex: 1,
//           }}
//         ></div>
//         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 py-12 px-6 md:px-12">
//           <div className="relative z-30 flex items-center">
//             <div
//               className="w-full max-w-md rounded-3xl relative overflow-hidden"
//               style={{
//                 backgroundColor: "#a3d5f0",
//                 aspectRatio: "1/1",
//                 height: "450px",
//               }}
//             >
//               <img
//                 src={`${import.meta.env.VITE_IMAGE_BASE_URL}${whyChoose.image}`}
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//           <div className="relative z-20 flex flex-col justify-center lg:pl-12">
//             <div className="text-center mb-10">
//               <h2
//                 className="text-4xl lg:text-5xl font-bold mb-3"
//                 style={{ color: "#0a1f44" }}
//               >
//                 {whyChoose.heading}
//               </h2>
//               <p className="text-base" style={{ color: "#5a6c7d" }}>
//                 {whyChoose.subheading}
//               </p>
//             </div>

//             {/* Three Feature Cards */}
//             <div className="max-w-full grid grid-cols-1 md:grid-cols-3 gap-6">
//               {/* Card 1 - Ultimate flexibility */}
//               {cards.map((card, index) => (
//                 <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow w-full">
//                   <div className="flex justify-center mb-4">
//                     <img
//                       src={`${import.meta.env.VITE_IMAGE_BASE_URL}${card.icon}`}
//                       alt=""
//                     />
//                   </div>
//                   <h3
//                     className="text-lg font-bold mb-2 text-center"
//                     style={{ color: "#0a1f44" }}
//                   >
//                     {card.title}
//                   </h3>
//                   <p
//                     className="text-sm text-center"
//                     style={{ color: "#5a6c7d" }}
//                   >
//                     {card.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function ServicesBenefits({ whyChoose }) {
  const cards = JSON.parse(whyChoose.cards);

  return (
    <div className="w-full min-h-screen p-2 md:py-4 md:px-10 lg:py-12 lg:px-20 flex items-center justify-center">
      <div className="w-full mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Image */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-sm rounded-3xl relative overflow-hidden"
              style={{
                backgroundColor: "#a3d5f0",
                aspectRatio: "1/1",
              }}
            >
              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}${whyChoose.image}`}
                alt="Dreams To Fly"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center px-4">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: "#0a1f44" }}
            >
              {whyChoose.heading}
            </h2>
            <p className="text-sm md:text-base" style={{ color: "#5a6c7d" }}>
              {whyChoose.subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow mr-5"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={`${import.meta.env.VITE_IMAGE_BASE_URL}${card.icon}`}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h3
                  className="text-base font-bold mb-2 text-center"
                  style={{ color: "#0a1f44" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-xs text-center leading-relaxed"
                  style={{ color: "#5a6c7d" }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block relative py-12">
          <div
            className="absolute top-0 -right-10 h-full rounded-3xl"
            style={{
              width: "80%",
              backgroundColor: "#f6fafd",
              zIndex: 1,
            }}
          ></div>

          <div className="relative z-10 flex items-center">
            <div
              className="relative z-30 flex-shrink-0"
              style={{ width: "400px" }}
            >
              <div
                className="w-full rounded-3xl relative overflow-hidden"
                style={{
                  backgroundColor: "#a3d5f0",
                  aspectRatio: "1/1",
                }}
              >
                <img
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
                    whyChoose.image
                  }`}
                  alt="Dreams To Fly"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 pl-16 xl:pl-24">
              {/* Title and Subtitle */}
              <div className="mb-10 text-center">
                <h2
                  className="text-4xl xl:text-5xl font-bold mb-3"
                  style={{ color: "#0a1f44" }}
                >
                  {whyChoose.heading}
                </h2>
                <p className="text-base" style={{ color: "#5a6c7d" }}>
                  {whyChoose.subheading}
                </p>
              </div>

              {/* Three Feature Cards - positioned to overlap image */}
              <div className="relative" style={{ marginLeft: "-150px" }}>
                <div className="grid grid-cols-3 gap-5">
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow z-40"
                      style={{
                        minWidth: "160px",
                      }}
                    >
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img
                            src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
                              card.icon
                            }`}
                            alt={card.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <h3
                        className="text-lg font-bold mb-2 text-center"
                        style={{ color: "#0a1f44" }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="text-sm text-center leading-relaxed"
                        style={{ color: "#5a6c7d" }}
                      >
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { Suspense, lazy } from "react";
// import { ArrowRight, Star, Clock } from "lucide-react";
// import { TbMoneybag } from "react-icons/tb";

// const ServiceEnquiryForm = lazy(() => import("./ServiceEnquiryForm"));

// const ServiceHero = ({ service, details, formConfig }) => {
//   if (!service || !details) return null;

//   return (
//     <section
//       className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden"
//       style={{
//         backgroundImage: `url(${service.backgroundImage})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "contain",
//       }}
//     >
//       <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
//               <Star className="w-4 h-4" />
//               {service.category}
//             </div>

//             <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
//               {details.title}
//             </h1>

//             <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
//               {details.subtitle}
//             </p>

//             <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
//               {details.description}
//             </p>
//           </div>

//           <div className="relative -right-24">
//             {formConfig ? (
//               <Suspense fallback={<div>Loading...</div>}>
//                 <ServiceEnquiryForm formConfig={formConfig} />
//               </Suspense>
//             ) : (
//               <div className="relative z-10">
//                 <img
//                   src={service.img}
//                   alt={service.title}
//                   className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
//                 />

//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
//                   Most Popular
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceHero;

import ServiceFormSection from "../components/ServiceFormSection";
import ServiceHeroHeader from "../components/ServiceHeroHeader";

const ServiceHero = ({ service, details, formConfig }) => {
  return (
    <div className="">
      <ServiceHeroHeader service={service} details={details} />
      {formConfig && <ServiceFormSection formConfig={formConfig} />}
    </div>
  );
};
export default ServiceHero;

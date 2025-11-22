// import { Suspense } from "react";
// import ServiceEnquiryForm from "../[slug]/ServiceEnquiryForm";

// const ServiceFormSection = ({ formConfig }) => {
//   if (!formConfig) return null;

//   return (
//     <div className="absolute right-10 top-10 z-20 pb-16">
//       <div className="mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12">
//           <div className="hidden lg:block"></div>

//           <div className="relative lg:-right-24">
//             <Suspense
//               fallback={
//                 <div className="bg-white rounded-2xl shadow-2xl p-8 animate-pulse">
//                   <div className="h-96 bg-gray-200 rounded"></div>
//                 </div>
//               }
//             >
//               <ServiceEnquiryForm formConfig={formConfig} />
//             </Suspense>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ServiceFormSection;

// import { Suspense } from "react";
// import ServiceEnquiryForm from "../[slug]/ServiceEnquiryForm";

// const ServiceFormSection = ({ formConfig }) => {
//   if (!formConfig) return null;

//   return (
//     <div className="absolute right-10 top-10 z-20">
//       <div className="w-auto min-w-[320px] max-w-3xl">
//         <Suspense
//           fallback={
//             <div className="bg-white rounded-2xl shadow-2xl p-8 animate-pulse min-w-[320px]">
//               <div className="h-96 bg-gray-200 rounded"></div>
//             </div>
//           }
//         >
//           <ServiceEnquiryForm formConfig={formConfig} />
//         </Suspense>
//       </div>
//     </div>
//   );
// };

// export default ServiceFormSection;

import { Suspense } from "react";
import ServiceEnquiryForm from "../[slug]/ServiceEnquiryForm";

const ServiceFormSection = ({ formConfig }) => {
  if (!formConfig) return null;

  return (
    <div className="absolute right-10 top-40 z-20">
      <div className="w-full max-w-md lg:max-w-lg">
        <Suspense
          fallback={
            <div className="bg-white rounded-2xl shadow-2xl p-8 animate-pulse">
              <div className="h-96 bg-gray-200 rounded"></div>
            </div>
          }
        >
          <ServiceEnquiryForm formConfig={formConfig} />
        </Suspense>
      </div>
    </div>
  );
};

export default ServiceFormSection;

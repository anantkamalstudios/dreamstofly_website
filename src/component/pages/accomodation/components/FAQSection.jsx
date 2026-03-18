// // import React, { useState } from "react";
// // import { ChevronRight, ChevronUp } from "lucide-react";
// // import Heading from "../../../../common/Heading";

// // const faqs = [
// //   {
// //     id: 1,
// //     q: "Why Choose DreamToFly for Student Accommodation?",
// //     a: "UniAcco is a trusted student accommodation provider offering fully furnished student housing near universities worldwide. With 10,000+ verified listings across 700+ cities in 10+ countries, we ensure a secure, affordable, and hassle-free booking experience. Plus, enjoy perks like price match guarantee, 24/7 assistance, and easy cancellation policies like No Visa, No Pay.",
// //   },
// //   {
// //     id: 2,
// //     q: "What Types Of Student Accommodations Are Available?",
// //     a: "You can find shared apartments, studio rooms, and private en-suites that fit every budget and preference near top universities.",
// //   },
// //   {
// //     id: 3,
// //     q: "How to Find Student Apartments Online?",
// //     a: "Simply search by your university or city, compare verified listings, and book your room securely online.",
// //   },
// //   {
// //     id: 4,
// //     q: "What Does My Student Room Rent Comprise?",
// //     a: "Rent usually covers utilities like water, gas, electricity, WiFi, and access to shared amenities like gyms or study spaces.",
// //   },
// // ];

// // export default function FAQSection() {
// //   const [openIndex, setOpenIndex] = useState(0);

// //   const openFAQ = (index) => setOpenIndex(index);

// //   const left = faqs[openIndex];
// //   const right = faqs.filter((_, idx) => idx !== openIndex);

// //   return (
// //     <section className="w-full py-16">
// //       <div className="max-w-6xl mx-auto px-4">
// //         <Heading
// //           text="Frequently ask Questions?"
// //           className="text-center mb-10"
// //         />

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
// //           {/* LEFT - Expanded card */}
// //           <div className="order-2 md:order-1">
// //             <div className="bg-white rounded-2xl p-8 shadow-lg min-h-[260px]">
// //               <div className="flex items-start justify-between gap-4">
// //                 <h3 className="text-lg md:text-xl font-semibold text-gray-900">
// //                   {left.q}
// //                 </h3>

// //                 <div className="ml-auto">
// //                   <button
// //                     aria-expanded="true"
// //                     className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow"
// //                     title="Collapse"
// //                   >
// //                     <ChevronUp size={18} />
// //                   </button>
// //                 </div>
// //               </div>

// //               <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed ">
// //                 {left.a}
// //               </p>
// //             </div>
// //           </div>

// //           {/* RIGHT - list of other questions */}
// //           <div className="order-1 md:order-2">
// //             <div className="space-y-4">
// //               {right.map((item) => {
// //                 const idx = faqs.findIndex((f) => f.id === item.id);
// //                 return (
// //                   <button
// //                     key={item.id}
// //                     onClick={() => openFAQ(idx)}
// //                     className="w-full flex items-center justify-between bg-white/80 hover:bg-white rounded-xl p-4 shadow-sm transition duration-200"
// //                   >
// //                     <span className="text-sm md:text-base text-gray-900 text-left">
// //                       {item.q}
// //                     </span>

// //                     <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50">
// //                       <ChevronRight size={18} className="text-green-600" />
// //                     </span>
// //                   </button>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import React, { useState } from "react";
// import { ChevronRight, ChevronUp } from "lucide-react";

// const Heading = ({ text, className }) => (
//   <h2 className={`text-3xl font-bold ${className}`}>{text}</h2>
// );

// const faqs = [
//   {
//     id: 1,
//     q: "Why Choose DreamToFly for Student Accommodation?",
//     a: "UniAcco is a trusted student accommodation provider offering fully furnished student housing near universities worldwide. With 10,000+ verified listings across 700+ cities in 10+ countries, we ensure a secure, affordable, and hassle-free booking experience. Plus, enjoy perks like price match guarantee, 24/7 assistance, and easy cancellation policies like No Visa, No Pay.",
//   },
//   {
//     id: 2,
//     q: "What Types Of Student Accommodations Are Available?",
//     a: "You can find shared apartments, studio rooms, and private en-suites that fit every budget and preference near top universities.",
//   },
//   {
//     id: 3,
//     q: "How to Find Student Apartments Online?",
//     a: "Simply search by your university or city, compare verified listings, and book your room securely online.",
//   },
//   {
//     id: 4,
//     q: "What Does My Student Room Rent Comprise?",
//     a: "Rent usually covers utilities like water, gas, electricity, WiFi, and access to shared amenities like gyms or study spaces.",
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(0);
//   const [animatingId, setAnimatingId] = useState(null);

//   const openFAQ = (index) => {
//     if (index === openIndex) return;

//     const clickedFaq = faqs[index];
//     setAnimatingId(clickedFaq.id);

//     setTimeout(() => {
//       setOpenIndex(index);
//       setTimeout(() => {
//         setAnimatingId(null);
//       }, 600);
//     }, 400);
//   };

//   const left = faqs[openIndex];
//   // const right = faqs.filter((_, idx) => idx !== openIndex);

//   return (
//     <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <Heading
//           text="Frequently ask Questions?"
//           className="text-center mb-10"
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
//           {/* LEFT - Expanded card */}
//           <div className="order-2 md:order-1 relative">
//             <div
//               key={left.id}
//               className="bg-white rounded-2xl p-8 shadow-lg min-h-[260px] animate-slideInLeft"
//               style={{
//                 animation:
//                   animatingId === left.id
//                     ? "slideInLeft 0.6s ease-out"
//                     : "none",
//               }}
//             >
//               <div className="flex items-start justify-between gap-4">
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-900">
//                   {left.q}
//                 </h3>

//                 <div className="ml-auto flex-shrink-0">
//                   <button
//                     aria-expanded="true"
//                     className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow hover:bg-blue-700 transition-colors"
//                     title="Expanded"
//                   >
//                     <ChevronUp size={18} />
//                   </button>
//                 </div>
//               </div>

//               <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
//                 {left.a}
//               </p>
//             </div>
//           </div>

//           {/* RIGHT - list of other questions */}
//           <div className="order-1 md:order-2">
//             <div className="space-y-4">
//               {/* {right.map((item) => { */}
//               {faqs.map((item) => {
//                 const idx = faqs.findIndex((f) => f.id === item.id);
//                 const isAnimating = animatingId === item.id;

//                 return (
//                   <button
//                     key={item.id}
//                     onClick={() => openFAQ(idx)}
//                     className={`w-full flex items-center justify-between bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden ${
//                       isAnimating
//                         ? "animate-slideOutLeft"
//                         : "hover:scale-[1.02]"
//                     }`}
//                     style={{
//                       animation: isAnimating
//                         ? "slideOutLeft 0.4s ease-in forwards"
//                         : "none",
//                     }}
//                   >
//                     <span className="text-sm md:text-base text-gray-900 text-left">
//                       {item.q}
//                     </span>

//                     <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 transition-all flex-shrink-0">
//                       <ChevronRight size={18} className="text-green-600" />
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes slideOutLeft {
//           0% {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//           100% {
//             opacity: 0;
//             transform: translateX(-100%) scale(0.8);
//           }
//         }

//         @keyframes slideInLeft {
//           0% {
//             opacity: 0;
//             transform: translateX(100%) scale(0.9);
//           }
//           60% {
//             transform: translateX(-10px) scale(1.02);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

import React, { useState } from "react";

const allFaqs = [
  {
    question: "Why Choose DreamToFly for Student Accommodation?",
    answer:
      "UniAcco is a trusted student accommodation provider offering fully furnished student housing near universities worldwide. With 10,000+ verified listings across 700+ cities in 10+ countries, we ensure a secure, affordable, and hassle-free booking experience. Plus, enjoy perks like price match guarantee, 24/7 assistance, and easy cancellation policies like No Visa, No Pay.",
  },
  {
    question: "What Types Of Student Accommodations Are Available?",
    answer:
      "We offer a wide range of student accommodations including en-suite rooms, studio apartments, shared flats, and purpose-built student accommodations (PBSAs) near top universities.",
  },
  {
    question: "How to Find Student Apartments Online?",
    answer:
      "Simply search by city or university on our platform, filter by budget and amenities, and book your preferred property directly. Our team is available 24/7 to assist you.",
  },
  {
    question: "What Does My Student Room Rent Comprise?",
    answer:
      "Your rent typically includes utilities like electricity, water, and Wi-Fi, along with access to common areas and amenities. Exact inclusions vary by property.",
  },
];

const FAQSection = () => {
  // activeIndex = which FAQ is currently shown on the LEFT (expanded)
  const [activeIndex, setActiveIndex] = useState(0);

  // All FAQs except the active one go to the right panel
  const rightFaqs = allFaqs
    .map((faq, index) => ({ ...faq, originalIndex: index }))
    .filter((_, index) => index !== activeIndex);

  const activeFaq = allFaqs[activeIndex];

  return (
    <div className="w-full bg-gray-100 px-6 md:px-16 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Frequently ask Questions?
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">

        {/* LEFT — expanded active FAQ */}
        <div
          className="bg-white rounded-2xl p-7 shadow-sm border border-blue-200 flex gap-5 transition-all duration-300"
        >
          <div className="flex-1">
            <h3 className="text-gray-900 font-bold text-base md:text-lg leading-snug mb-4">
              {activeFaq.question}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {activeFaq.answer}
            </p>
          </div>
          {/* Blue dot */}
          <div className="flex-shrink-0 mt-1">
            <div className="w-9 h-9 rounded-full bg-blue-600" />
          </div>
        </div>

        {/* RIGHT — remaining 3 questions */}
        <div className="flex flex-col gap-3">
          {rightFaqs.map((faq) => (
            <button
              key={faq.originalIndex}
              onClick={() => setActiveIndex(faq.originalIndex)}
              className="w-full bg-white rounded-2xl px-6 py-5 text-left flex items-center justify-between gap-4 shadow-sm border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
            >
              <span className="text-sm md:text-base font-semibold leading-snug text-gray-800 group-hover:text-gray-900">
                {faq.question}
              </span>
              {/* Plus icon */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-200">
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQSection;
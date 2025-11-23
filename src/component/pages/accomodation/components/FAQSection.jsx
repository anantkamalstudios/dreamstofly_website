// FAQSplit.jsx
import React, { useState } from "react";
import { ChevronRight, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    q: "Why Choose DreamToFly for Student Accommodation?",
    a: "UniAcco is a trusted student accommodation provider offering fully furnished student housing near universities worldwide. With 10,000+ verified listings across 700+ cities in 10+ countries, we ensure a secure, affordable, and hassle-free booking experience. Plus, enjoy perks like price match guarantee, 24/7 assistance, and easy cancellation policies like No Visa, No Pay.",
  },
  {
    id: 2,
    q: "What Types Of Student Accommodations Are Available?",
    a: "You can find shared apartments, studio rooms, and private en-suites that fit every budget and preference near top universities.",
  },
  {
    id: 3,
    q: "How to Find Student Apartments Online?",
    a: "Simply search by your university or city, compare verified listings, and book your room securely online.",
  },
  {
    id: 4,
    q: "What Does My Student Room Rent Comprise?",
    a: "Rent usually covers utilities like water, gas, electricity, WiFi, and access to shared amenities like gyms or study spaces.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const openFAQ = (index) => setOpenIndex(index);

  const left = faqs[openIndex];
  const right = faqs.filter((_, idx) => idx !== openIndex);

  return (
    <section className="w-full bg-[#f3f4f6] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Frequently ask Questions?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* LEFT - Expanded card */}
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg min-h-[260px]">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {left.q}
                </h3>

                <div className="ml-auto">
                  <button
                    aria-expanded="true"
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow"
                    title="Collapse"
                  >
                    <ChevronUp size={18} />
                  </button>
                </div>
              </div>

              <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
                {left.a}
              </p>
            </div>
          </div>

          {/* RIGHT - list of other questions */}
          <div className="order-1 md:order-2">
            <div className="space-y-4">
              {right.map((item) => {
                // find original index to set openIndex correctly
                const idx = faqs.findIndex((f) => f.id === item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => openFAQ(idx)}
                    className="w-full flex items-center justify-between bg-white/80 hover:bg-white rounded-xl p-4 shadow-sm transition duration-200"
                  >
                    <span className="text-sm md:text-base text-gray-900 text-left">
                      {item.q}
                    </span>

                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50">
                      <ChevronRight size={18} className="text-green-600" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { ArrowDown, ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import Heading from "../../../../common/Heading";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the best payment methods available?",
      answer:
        "We accept various payment methods including credit/debit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and digital wallets. All transactions are secured with industry-standard encryption to protect your financial information.",
    },
    {
      question: "Can I reserve a seat or special meal while making my booking?",
      answer:
        "Yes, you can select your preferred seat and request special meals during the booking process. Special meal options include vegetarian, vegan, gluten-free, halal, kosher, and other dietary requirements. Seat selection availability depends on the airline and fare type you choose.",
    },
    {
      question: "What are the baggage limitations and allowances?",
      answer:
        "Baggage allowances vary by airline, route, and ticket class. Typically, economy class allows 1 checked bag (23kg) and 1 carry-on (7-10kg). Business and first class offer higher allowances. Additional baggage can be purchased. Please check your specific airline's policy for exact details.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-2 md:py-4 lg:py-6 xl:py-8 px-4 bg-[#0073DF0F] ">
      <div className="max-w-4xl mx-auto">
        <div className="p-6 md:p-10">
          {/* <h2 className="text-3xl md:text-4xl font-medium text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2> */}
          <Heading
            text="Frequently Asked Questions"
            className="text-gray-900 text-center mb-8"
          />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="mt-4 w-full flex items-center justify-between p-4 md:px-14 md:py-4 text-left bg-white"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-sm md:text-lg font-normal text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-900">
                    {openIndex === index ? (
                      <ArrowDown className="w-5 h-5 text-gray-900" />
                    ) : (
                      <ArrowUp className="w-5 h-5 text-gray-900" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 md:p-6 pt-0 text-sm md:text-sm text-gray-600 leading-relaxed ">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;

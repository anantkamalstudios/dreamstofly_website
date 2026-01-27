import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

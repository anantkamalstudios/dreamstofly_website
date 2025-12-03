import React, { useState } from "react";
import NavigationTabs from "./components/NavigationTabs";
import CalculatorSection from "./components/CalculatorSection";
import GuideSection from "./components/GuideSection";
import FaqSection from "./components/FAQSection";
import RelatedScoreConversion from "./components/RelatedScoreConversion";
import SGAPAToCGPACalculator from "./components/SGPAToCGPACalculator";

const CalculatorMainPage = () => {
  const [activeSection, setActiveSection] = useState("calculator");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How do I convert my 10 Point CGPA to a 4 Point GPA?",
      answer:
        "To convert a 10 Point CGPA to a 4 Point GPA, divide your CGPA by 10 and multiply the result by 4.",
    },
    {
      question: "Is there a universal formula to convert CGPA to GPA?",
      answer:
        "Yes, the most common formula is: GPA = (CGPA ÷ 10) × 4. But some universities use custom conversions.",
    },
    {
      question: "Does converting CGPA to GPA lower my academic score?",
      answer:
        "No, converting CGPA to GPA is just a scale change. It does not change your real academic performance.",
    },
    {
      question: "Which universities require CGPA to GPA conversion?",
      answer:
        "Most US & European universities require GPA on a 4-point scale, so Indian CGPA needs conversion.",
    },
  ];

  const sidebarItems = [
    "How to Convert CGPA to GPA?",
    "What is GPA?",
    "What is CGPA?",
    "How to Convert CGPA to Percentage?",
    "What is the Difference Between GPA and CGPA?",
    "How to Convert GPA to CGPA?",
    "How to Convert 10 Point CGPA to 4 Point GPA for European Universities?",
    "Frequently Asked Questions about CGPA to GPA Conversion Calculator",
  ];

  const relatedServices = [
    {
      title: "CGPA to GPA Calculator",
    },
    {
      title: "GPA to CGPA Calculator",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2F7F7] font-vollkorn">
      {/* Mobile Tabs */}
      <NavigationTabs
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Calculator Section */}
      {(activeSection === "calculator" || window.innerWidth >= 768) && (
        <SGAPAToCGPACalculator />
      )}

      {/* Guide Section */}
      {(activeSection === "guide" || window.innerWidth >= 768) && (
        <GuideSection
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          sidebarItems={sidebarItems}
        />
      )}

      <RelatedScoreConversion relatedServices={relatedServices} />

      {/* FAQ Section */}
      {(activeSection === "faq" || window.innerWidth >= 768) && (
        <FaqSection faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      )}
    </div>
  );
};

export default CalculatorMainPage;

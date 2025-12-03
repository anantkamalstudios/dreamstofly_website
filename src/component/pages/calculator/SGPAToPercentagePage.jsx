// pages/CGPAConverterApp.jsx
import React, { useState } from "react";
import NavigationTabs from "./components/NavigationTabs";
import CalculatorSection from "./components/CalculatorSection";
import GuideSection from "./components/GuideSection";
import FaqSection from "./components/FAQSection";
import RelatedScoreConversion from "./components/RelatedScoreConversion";

const CalculatorMainPage = () => {
  const [activeSection, setActiveSection] = useState("calculator");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [sgpaValue, setSgpaValue] = useState("");
  const [percentageValue, setPercentageValue] = useState("");
  const [sgpaResult, setSgpaResult] = useState("");
  const [percentageResult, setPercentageResult] = useState("");
  const [sgpaError, setSgpaError] = useState("");
  const [percentageError, setPerentageError] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const convertSgpaToPercentage = () => {
    const sgpa = parseFloat(sgpaValue);

    if (isNaN(sgpa) || sgpa < 0 || sgpa > 10) {
      setSgpaError("Please enter a valid SGPA (between 0 - 10)");
      setSgpaResult("");
      return;
    }

    setSgpaError("");
    const percentage = (sgpa * 10).toFixed(2); // Common formula
    setSgpaResult(percentage);
  };

  const convertPercentageToSgpa = () => {
    const percentage = parseFloat(percentageValue);

    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
      setPerentageError("Please enter a valid Percentage (between 0 - 100)");
      setPercentageResult("");
      return;
    }

    setPerentageError("");
    const sgpa = (percentage / 10).toFixed(2);
    setPercentageResult(sgpa);
  };

  const relatedServices = [
    {
      title: "CGPA to GPA Calculator",
    },
    {
      title: "GPA to CGPA Calculator",
    },
  ];

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

  const headerData = {
    title: "10 Point CGPA to 4 Point GPA Converter Online",
    subTitle:
      " Use our CGPA to GPA calculator to convert your 10-point CGPA to a 4-point GPA accurately",
  };

  const calculatorCardContent = {
    first: { title: "SGPA to Percentage Calculator", label: "SGPA" },
    second: { title: "CGPA to Percentage Calculator", label: "Percentage" },
  };

  return (
    <div className="min-h-screen bg-[#F2F7F7] font-vollkorn">
      <NavigationTabs />

      {(activeSection === "calculator" || window.innerWidth >= 768) && (
        <CalculatorSection
          inputValue={sgpaValue}
          setInputValue={setSgpaValue}
          outputValue={percentageValue}
          setOutputValue={setPercentageValue}
          inputError={sgpaError}
          outputError={percentageError}
          resultValue={sgpaResult}
          setResultValue={percentageResult}
          onConvertForward={convertSgpaToPercentage}
          onConvertBackward={convertPercentageToSgpa}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          headerData={headerData}
          calculatorCardContent={calculatorCardContent}
        />
      )}

      {(activeSection === "guide" || window.innerWidth >= 768) && (
        <GuideSection
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          sidebarItems={sidebarItems}
        />
      )}

      <RelatedScoreConversion relatedServices={relatedServices} />

      {(activeSection === "faq" || window.innerWidth >= 768) && (
        <FaqSection faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      )}
    </div>
  );
};

export default CalculatorMainPage;

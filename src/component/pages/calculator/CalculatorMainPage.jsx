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

  const [cgpaValue, setCgpaValue] = useState("");
  const [gpaValue, setGpaValue] = useState("");
  const [cgpaResult, setCgpaResult] = useState("");
  const [gpaResult, setGpaResult] = useState("");
  const [cgpaError, setCgpaError] = useState("");
  const [gpaError, setGpaError] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const convertCgpaToGpa = () => {
    const cgpa = parseFloat(cgpaValue);
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
      setCgpaError("Please enter a valid CGPA (between 0 - 10)");
      setCgpaResult("");
      return;
    }
    setCgpaError("");
    const gpa = ((cgpa / 10) * 4).toFixed(2);
    setCgpaResult(gpa);
  };

  const convertGpaToCgpa = () => {
    const gpa = parseFloat(gpaValue);
    if (isNaN(gpa) || gpa < 0 || gpa > 4) {
      setGpaError("Please enter a valid GPA (between 0 - 4)");
      setGpaResult("");
      return;
    }
    setGpaError("");
    const cgpa = ((gpa / 4) * 10).toFixed(2);
    setGpaResult(cgpa);
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
    first: { title: "CGPA to GPA Calculator", label: "CGPA" },
    second: { title: "GPA to CGPA Calculator", label: "GPA" },
  };

  return (
    <div className="min-h-screen bg-[#F2F7F7] font-vollkorn">
      <NavigationTabs
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {(activeSection === "calculator" || window.innerWidth >= 768) && (
        <CalculatorSection
          inputValue={cgpaValue}
          setInputValue={setCgpaValue}
          outputValue={gpaValue}
          setOutputValue={setGpaValue}
          inputError={cgpaError}
          outputError={gpaError}
          resultValue={cgpaResult}
          ResultValue={gpaResult}
          onConvertForward={convertCgpaToGpa}
          onConvertBackward={convertGpaToCgpa}
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

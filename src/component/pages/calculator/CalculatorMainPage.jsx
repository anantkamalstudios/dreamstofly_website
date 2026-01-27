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
      title: "SGPA to Percentage Calculator",
      slug: "/sgpa-to-percentage-conversion",
    },
    {
      title: "SGPA to CGPA Calculator",
      slug: "/sgpa-to-cgpa-conversion",
    },
  ];

  const cgpaToGpaFaqs = [
    {
      question: "How does the CGPA to GPA calculator work?",
      answer:
        "Enter your 10-point CGPA → instantly get 4.0 GPA using the official formula: GPA = CGPA × 0.4. Example: 8.92 → 3.57 GPA, 8.5 → 3.4 GPA, 7.8 → 3.12 GPA. Used by students applying to USA, Canada, Germany, Australia. No registration needed.",
    },
    {
      question: "Is CGPA × 0.4 accepted by all foreign universities?",
      answer:
        "Yes! Harvard, Stanford, MIT, UC Berkeley, University of Toronto, UBC, NUS, TU Munich — all accept self-reported GPA using CGPA × 0.4 during application. WES evaluation (required later) may give slightly lower (0.1–0.3 less), but ×0.4 is perfect for initial applications and resume.",
    },
    {
      question: "Is 8.0 CGPA good for MS in USA/Canada?",
      answer:
        "Very good! 8.0 CGPA = 3.2 GPA → accepted by 90% of universities (including many top-50). With GRE 320+ and strong SOP/LORs, you can easily get into Purdue, UIUC, Texas A&M, University of Alberta, etc. Only Ivy League asks 3.7+ (9.2+ CGPA).",
    },
    {
      question: "Does WES reduce my GPA?",
      answer:
        "Sometimes yes, slightly. WES uses stricter mapping. Example: CGPA 8.5 → self: 3.4 GPA, WES: often 3.3 or 3.2. CGPA 9.0 → self: 3.6, WES: 3.7–4.0. But universities know this and still accept self-reported ×0.4 initially.",
    },
    {
      question: "Should I mention 'out of 10' on my resume?",
      answer:
        "YES! Always write: “CGPA: 8.7/10.0 (3.48/4.0 GPA)” or “GPA: 3.48/4.0 (equivalent to 8.7/10.0 CGPA)”. Without this, US recruiters think 8.7 is out of 10 and assume you have poor grades!",
    },
  ];

  const sidebarItems = [
    {
      id: "1",
      title: "What is CGPA?",
    },
    {
      id: "2",
      title: "What is GPA?",
    },
    {
      id: "3",
      title: "Why Do Students Need to Convert CGPA to GPA?",
    },
    {
      id: "4",
      title: "Understanding Global Grading Scales (4.0, 5.0, 7.0, 10.0)",
    },
    {
      id: "5",
      title: "How to Convert CGPA to GPA (General Formula)",
    },
    {
      id: "6",
      title: "CGPA to GPA Conversion Table",
    },
    {
      id: "7",
      title: "Conversion Examples (Step-by-Step)",
    },
    {
      id: "8",
      title: "University-Specific Conversion Rules",
    },
    {
      id: "9",
      title: "WES Conversion vs Simple GPA Conversion",
    },
    {
      id: "10",
      title: "Common Mistakes Students Make",
    },
    {
      id: "11",
      title: "Can a Low GPA Still Get Admission Abroad?",
    },
    {
      id: "12",
      title: "Tips to Improve Your Academic Profile",
    },
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

  const content = {
    title: "Ultimate Guide to CGPA to GPA Conversion for Studying Abroad",
    sections: [
      {
        type: "step",
        stepNumber: 1,
        title: "What is CGPA?",
        content: [
          {
            type: "paragraph",
            content:
              "Cumulative Grade Point Average (CGPA) is the weighted average of the grade points a student earns across all semesters of a degree program. In countries like India, Pakistan, Bangladesh, Sri Lanka, and many Middle Eastern and African nations, universities follow a 10-point grading system. For example, if you score 9 grade points in one subject and 8 in another, the CGPA reflects your overall academic performance until the final semester. It is usually mentioned on the final transcript or provisional certificate and is considered the most important academic indicator for higher studies and jobs in these countries.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 2,
        title: "What is GPA?",
        content: [
          {
            type: "paragraph",
            content:
              "Grade Point Average (GPA) is normally calculated for a single semester, term, or academic year. Unlike CGPA, which is cumulative, GPA can fluctuate semester to semester. The United States, Canada, UK, Australia, and most European countries use GPA as the primary grading metric. The most popular scale is the 4.0 scale (A = 4.0, B = 3.0, etc.), though some countries use 5.0, 7.0, or even 100-point systems. When applying abroad, universities almost always ask for your GPA on their specific scale.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 3,
        title: "Why Do Students Need to Convert CGPA to GPA?",
        content: [
          {
            type: "paragraph",
            content:
              "International universities receive applications from students following hundreds of different grading systems. To fairly compare an Indian student with a 9.0/10 CGPA against an American student with a 3.7/4.0 GPA, a standard conversion is required. Almost every application portal (Common App, university portals, UCAS, Studienkolleg, etc.) has a field that asks for “GPA on a 4.0 scale”. If you leave it blank or write your CGPA as-is, the admission committee cannot evaluate you properly, and your application may be rejected at the initial screening stage.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 4,
        title: "Understanding Global Grading Scales",
        content: [
          {
            type: "paragraph",
            content: "Different countries follow different maximum scales:",
          },
          {
            type: "table",
            title: "Global Grading Scales Overview",
            headers: ["Scale", "Countries/Regions", "Highest Grade Meaning"],
            rows: [
              ["4.0", "USA, Canada, Saudi Arabia, Korea", "A = 4.0"],
              ["5.0", "Germany (some universities), Indonesia", "Very Good"],
              [
                "7.0",
                "Australia (UniMelb, USyd, UQ), Netherlands",
                "High Distinction",
              ],
              [
                "10.0",
                "India, Pakistan, Bangladesh, UAE, Nigeria",
                "Outstanding",
              ],
              ["100", "China, some European countries", "Percentage system"],
            ],
          },
          {
            type: "paragraph",
            content:
              "Knowing the destination country’s scale is the first step in accurate conversion.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 5,
        title: "How to Convert CGPA to GPA (General Formula)",
        content: [
          {
            type: "paragraph",
            content:
              "The most widely accepted and university-recognized formula for converting a 10-point CGPA to a 4.0 GPA is:",
          },
          {
            type: "formula",
            content:
              "GPA (4.0 scale) = CGPA × (4 ÷ 10) or simply GPA = CGPA × 0.4",
          },
          {
            type: "paragraph",
            content:
              "This linear proportion method is recommended by the Association of Indian Universities (AIU), many IITs/NITs, and is accepted by thousands of universities worldwide. Some universities (especially in Germany and a few Canadian colleges) use a slightly modified formula, but 95% of US, UK, Australian, and Canadian universities accept the ×0.4 method during application.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 6,
        title: "CGPA to GPA Conversion Table (10-point to 4.0 scale)",
        content: [
          {
            type: "table",
            title: "CGPA to GPA Conversion Table",
            headers: [
              "CGPA (out of 10)",
              "Approximate GPA (out of 4.0)",
              "US Letter Grade Equivalent",
            ],
            rows: [
              ["9.5 – 10.0", "3.8 – 4.00", "A"],
              ["9.0 – 9.4", "3.6 – 3.79", "A-"],
              ["8.5 – 8.9", "3.4 – 3.59", "B+"],
              ["8.0 – 8.4", "3.2 – 3.39", "B"],
              ["7.5 – 7.9", "3.0 – 3.19", "B-"],
              ["7.0 – 7.4", "2.8 – 2.99", "C+"],
              ["6.5 – 6.9", "2.6 – 2.79", "C"],
              ["Below 6.0", "Below 2.4", "Failing / Conditional"],
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 7,
        title: "Conversion Examples (Step-by-Step)",
        content: [
          {
            type: "example",
            content:
              "Example 1: CGPA = 8.63 → 8.63 × 0.4 = 3.452 → rounded to 3.45 GPA",
          },
          {
            type: "example",
            content:
              "Example 2: CGPA = 7.2 → 7.2 × 0.4 = 2.88 GPA → usually reported as 2.9",
          },
          {
            type: "example",
            content:
              "Example 3 (with percentage given): Percentage = 87% → Many Indian universities consider 87% ≈ 9.0–9.2 CGPA → 9.1 × 0.4 = 3.64 GPA",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 8,
        title: "University-Specific Conversion Rules",
        content: [
          {
            type: "list",
            items: [
              "- Harvard, Stanford, MIT, UC Berkeley: Accept self-reported ×0.4 conversion; later verify with WES.",
              "- University of Toronto, UBC, McGill: Require official WES evaluation.",
              "- German universities (TU9, RWTH Aachen): Use the “Modified Bavarian Formula”: German Grade = 1 + 3×((10−CGPA)/4)",
              "- Australian Group of Eight universities: Accept AIU equivalence certificate or simple ×0.4.",
            ],
          },
          {
            type: "paragraph",
            content:
              "Always check the exact graduate admission page of each university.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 9,
        title: "WES Conversion vs Simple GPA Conversion",
        content: [
          {
            type: "paragraph",
            content:
              "World Education Services (WES) is the most trusted credential evaluator for the USA and Canada. While the simple ×0.4 method is convenient, WES applies a country-specific, course-by-course evaluation and is sometimes slightly stricter:",
          },
          {
            type: "table",
            title: "WES vs Simple Conversion Comparison",
            headers: ["CGPA", "Simple ×0.4 GPA", "Typical WES GPA"],
            rows: [
              ["9.0", "3.60", "3.7–4.0"],
              ["8.5", "3.40", "3.3–3.5"],
              ["8.0", "3.20", "3.0–3.3"],
              ["7.5", "3.00", "2.7–3.0"],
            ],
          },
          {
            type: "paragraph",
            content:
              "Most US universities now make WES/iCredential evaluation mandatory before final admission.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 10,
        title: "Common Mistakes Students Make",
        content: [
          {
            type: "list",
            items: [
              "- Converting percentage directly to GPA using random online calculators.",
              "- Assuming “First Division” automatically equals 4.0 GPA.",
              "- Forgetting to mention “out of 10.0 scale” on the résumé or application.",
              "- Using CBSE percentage → US GPA converters (they are completely different).",
              "- Relative grading ignorance: If the highest CGPA in your batch is 8.7, a 10.0 is impossible — some universities ask for class rank or topper’s score.",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 11,
        title: "Can a Low GPA Still Get Admission Abroad?",
        content: [
          {
            type: "paragraph",
            content:
              "Absolutely yes! Thousands of students with 2.8–3.3 GPA (7.0–8.2 CGPA) secure admission every year because universities adopt holistic evaluation:",
          },
          {
            type: "highlight",
            content:
              "Strong areas that compensate low GPA: GRE 320+ or GMAT 700+, IELTS 7.5+ or TOEFL 100+, 2–3 quality research papers or patents, 1–3 years of relevant work experience, Strong SOP explaining any dip in marks, Excellent Letters of Recommendation",
          },
          {
            type: "paragraph",
            content:
              "Many state universities in the USA, Canada’s smaller universities, almost all German public universities (tuitions-free), and Australian regional universities happily accept 3.0 GPA with a strong overall profile.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 12,
        title: "Tips to Improve Your Academic Profile",
        content: [
          {
            type: "list",
            items: [
              {
                content: "1. Retake GRE/GMAT if score is below 315/680.",
                small: false,
              },
              {
                content:
                  "2. Publish at least one paper in Scopus/UGC-CARE journal.",
                small: false,
              },
              {
                content:
                  "3. Complete high-quality internships at reputed organizations.",
                small: false,
              },
              {
                content:
                  "4. Build relationships with 2–3 professors for strong LORs.",
                small: false,
              },
              {
                content:
                  "5. Write a unique SOP focusing on your research interest and career goals.",
                small: false,
              },
              {
                content:
                  "6. Apply to 10–12 universities across safe, moderate, and ambitious categories.",
                small: false,
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F2F7F7] ">
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
          content={content}
        />
      )}

      <RelatedScoreConversion relatedServices={relatedServices} />

      {(activeSection === "faq" || window.innerWidth >= 768) && (
        <FaqSection
          faqs={cgpaToGpaFaqs}
          openFaq={openFaq}
          setOpenFaq={setOpenFaq}
        />
      )}
    </div>
  );
};

export default CalculatorMainPage;

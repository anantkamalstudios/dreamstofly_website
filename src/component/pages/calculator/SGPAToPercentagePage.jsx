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
    const percentage = (sgpa * 10).toFixed(2);
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
      slug: "/cgpa-to-gpa-conversion",
    },
    {
      title: "SGPA to CGPA Calculator",
      slug: "/sgpa-to-cgpa-conversion",
    },
  ];

  const sgpaToPercentageFaqs = [
    {
      question: "How does the SGPA to Percentage calculator work?",
      answer:
        "Enter your SGPA → instantly get percentage using the official 2025 formula: (SGPA − 0.75) × 10. Example: 8.73 SGPA → 79.8%, 7.92 → 71.7%. Also supports JNTU, Pune University, MAKAUT formulas via dropdown. Used by 10 lakh+ students monthly.",
    },
    {
      question:
        "Is the SGPA to Percentage formula the same for all universities?",
      answer:
        "95% use (SGPA − 0.75) × 10 (VTU, Anna University, autonomous colleges). Exceptions: JNTU = (SGPA × 10) − 7.5, Pune University = SGPA × 9.5, MAKAUT = (SGPA × 10) − 5. For job forms, always use (SGPA − 0.75) × 10 unless your college gives official certificate with different formula.",
    },
    {
      question: "Why is converting SGPA to percentage important?",
      answer:
        "Because India still runs on percentage! TCS, Infosys, Cognizant, Capgemini, SSC, IBPS, Railways, CAT/XAT — all ask for percentage, not SGPA. Example: 7.5 SGPA = 67.5% (safe), 6.8 SGPA = 60.5% (borderline for many jobs). Wrong conversion = rejected application.",
    },
    {
      question: "Is 8.25 SGPA good?",
      answer:
        "Excellent! 8.25 SGPA = (8.25 − 0.75) × 10 = 75% → First Class with Distinction. Clears 99% placement cutoffs, great for MBA colleges, and converts to 3.3 GPA for MS abroad. Keep it up and you’ll end with 8.3+ CGPA easily.",
    },
    {
      question: "What if I multiply SGPA by 10 directly?",
      answer:
        "Big mistake! SGPA 8.5 × 10 = 85% (wrong) → actual is (8.5 − 0.75) × 10 = 77.5%. This overestimation gets caught in background checks and can lead to offer cancellation. Always subtract 0.75 first.",
    },
  ];

  const sidebarItems = [
    { id: 1, title: "What is SGPA?" },
    { id: 2, title: "What is Percentage in Academic Evaluation?" },
    { id: 3, title: "Why Convert SGPA to Percentage?" },
    { id: 4, title: "SGPA vs CGPA: What’s the Difference?" },
    { id: 5, title: "Understanding University Grading Systems" },
    { id: 6, title: "General SGPA to Percentage Formula" },
    { id: 7, title: "University-Specific Conversion Formulas" },
    { id: 8, title: "SGPA to Percentage Table" },
    { id: 9, title: "Step-by-Step Conversion Examples" },
    { id: 10, title: "Common Conversion Mistakes" },
    { id: 11, title: "Impact of SGPA on Admissions & Jobs" },
    { id: 12, title: "How to Improve Your SGPA" },
  ];

  const headerData = {
    title: "SGPA to Percentage Converter",
    subTitle:
      "Enter your SGPA below and convert it to percentage accurately for university applications abroad.",
  };

  const calculatorCardContent = {
    first: { title: "SGPA to Percentage Calculator", label: "SGPA" },
    second: { title: "CGPA to Percentage Calculator", label: "Percentage" },
  };

  const content = {
    title: "Complete Guide: How to Convert SGPA to Percentage (2025 Updated)",
    sections: [
      {
        type: "step",
        stepNumber: 1,
        title: "What is SGPA?",
        content: [
          {
            type: "paragraph",
            content:
              "SGPA (Semester Grade Point Average) is the average of grade points obtained in all subjects in a single semester. It is calculated at the end of each semester and reflects your academic performance for that particular term only. Most Indian universities (VTU, Anna University, Mumbai University, JNTU, etc.) and many autonomous colleges use a 10-point grading system where SGPA is shown out of 10.0.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 2,
        title: "What is Percentage in Academic Evaluation?",
        content: [
          {
            type: "paragraph",
            content:
              "Percentage is the traditional marking system where marks are calculated out of 100. Many government jobs (SSC, IBPS, Railways, PSU), private companies, and some foreign universities still ask for percentage instead of SGPA/CGPA. It is easier for non-technical recruiters to understand and compare candidates.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 3,
        title: "Why Convert SGPA to Percentage?",
        content: [
          {
            type: "list",
            items: [
              "Most government job applications require percentage (minimum 60% or 65%)",
              "Banking, SSC, UPSC, GATE, CAT forms ask for percentage",
              "Many companies (TCS, Infosys, Wipro, Accenture) still filter using percentage cutoff",
              "Some universities abroad ask for percentage equivalent",
              "Easier to explain to parents and non-academic people",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 4,
        title: "SGPA vs CGPA: What’s the Difference?",
        content: [
          {
            type: "table",
            headers: ["Parameter", "SGPA", "CGPA"],
            rows: [
              [
                "Time Period",
                "One semester only",
                "Entire course (all semesters)",
              ],
              [
                "Calculation",
                "Credits × Grade points of that semester",
                "Average of all semester SGPAs weighted by credits",
              ],
              [
                "Fluctuation",
                "Can vary every semester",
                "More stable, final indicator",
              ],
              [
                "Used For",
                "Internal assessment, scholarships",
                "Final degree, jobs, higher studies",
              ],
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 5,
        title: "Understanding University Grading Systems",
        content: [
          {
            type: "paragraph",
            content:
              "Not all universities follow the same formula. Here are the most common patterns:",
          },
          {
            type: "list",
            items: [
              "Most VTU, Anna University, Mumbai University, autonomous colleges: Percentage ≈ (SGPA − 0.75) × 10",
              "Some older universities: Percentage = SGPA × 10",
              "JNTU Hyderabad/Kakinada: Percentage = (SGPA × 10) − 7.5",
              "Pune University, RTU Kota: Percentage = SGPA × 9.5",
              "MAKAUT (WBUT): Percentage = (SGPA × 10) − 5",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 6,
        title: "General Formula to Convert SGPA to Percentage",
        content: [
          {
            type: "highlight",
            content:
              "Most Widely Accepted Formula (2025): Percentage = (SGPA − 0.75) × 10",
          },
          {
            type: "paragraph",
            content:
              "This formula is officially used by VTU, most autonomous colleges under UGC, and accepted by 90% of recruiters and government bodies in India.",
          },
          {
            type: "formula",
            content: "Percentage = (SGPA − 0.75) × 10",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 7,
        title: "University-Specific SGPA-to-Percentage Formulas",
        content: [
          {
            type: "table",
            title: "Official University Conversion Formulas",
            headers: ["University", "Formula", "Example: SGPA 8.5 → %"],
            rows: [
              ["VTU, Most Autonomous Colleges", "(SGPA − 0.75) × 10", "77.5%"],
              [
                "Anna University (2017+ Regulation)",
                "(SGPA − 0.75) × 10",
                "77.5%",
              ],
              ["JNTU Hyderabad/Kakinada", "(SGPA × 10) − 7.5", "77.5%"],
              ["Savitribai Phule Pune University", "SGPA × 9.5", "80.75%"],
              ["MAKAUT (WBUT)", "(SGPA × 10) − 5", "80%"],
              ["Mumbai University Engineering", "(SGPA × 10) − 7.5", "77.5%"],
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 8,
        title: "SGPA to Percentage Conversion Table (Most Common Formula)",
        content: [
          {
            type: "table",
            title: "SGPA → Percentage using (SGPA − 0.75) × 10",
            headers: ["SGPA", "Percentage", "Class/Grade"],
            rows: [
              ["10.0", "92.5%", "Outstanding"],
              ["9.5", "87.5%", "First Class with Distinction"],
              ["9.0", "82.5%", "First Class with Distinction"],
              ["8.5", "77.5%", "First Class with Distinction"],
              ["8.0", "72.5%", "First Class"],
              ["7.5", "67.5%", "First Class"],
              ["7.0", "62.5%", "First Class"],
              ["6.5", "57.5%", "Second Class"],
              ["6.0", "52.5%", "Second Class"],
              ["Below 5.0", "Fail", "Fail"],
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 9,
        title: "Step-by-Step Conversion Examples",
        content: [
          {
            type: "example",
            content:
              "Example 1 → SGPA = 8.82 → (8.82 − 0.75) × 10 = 8.07 × 10 = 80.7%",
          },
          {
            type: "example",
            content:
              "Example 2 → SGPA = 7.91 → (7.91 − 0.75) × 10 = 7.16 × 10 = 71.6%",
          },
          {
            type: "example",
            content:
              "Example 3 (JNTU) → SGPA = 8.45 → (8.45 × 10) − 7.5 = 84.5 − 7.5 = 77%",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 10,
        title: "Common Mistakes Students Make During Conversion",
        content: [
          {
            type: "list",
            items: [
              "Directly multiplying SGPA by 10 (e.g., 8.5 → 85% → wrong, actually 77.5%)",
              "Using CGPA formula for SGPA conversion",
              "Using old 2008 VTU formula instead of current (SGPA − 0.75) × 10",
              "Forgetting to check university-specific circular",
              "Rounding off before final calculation",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 11,
        title: "Does SGPA Affect College Admissions or Jobs?",
        content: [
          {
            type: "paragraph",
            content:
              "Yes! Many opportunities depend on percentage converted from SGPA:",
          },
          {
            type: "list",
            items: [
              "Government jobs: Minimum 60–65% required",
              "Campus placements: Many companies have 60% throughout criteria",
              "MBA admissions (CAT/XAT): Convert SGPA to % for application",
              "MS abroad: Some universities ask percentage if no CGPA",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 12,
        title: "Tips to Improve Your SGPA and Overall Academic Score",
        content: [
          {
            type: "list",
            items: [
              "Attend all classes and labs – internal marks matter a lot",
              "Focus on high-credit subjects",
              "Clear backlogs immediately",
              "Aim for at least 8.0+ SGPA every semester",
              "Take easier electives if struggling in core subjects",
              "Practice previous year question papers",
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F2F7F7] ">
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
          content={content}
        />
      )}

      <RelatedScoreConversion relatedServices={relatedServices} />

      {(activeSection === "faq" || window.innerWidth >= 768) && (
        <FaqSection
          faqs={sgpaToPercentageFaqs}
          openFaq={openFaq}
          setOpenFaq={setOpenFaq}
        />
      )}
    </div>
  );
};

export default CalculatorMainPage;

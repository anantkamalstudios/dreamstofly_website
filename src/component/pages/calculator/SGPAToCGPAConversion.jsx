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

  const sgpaToCgpaFaqs = [
    {
      question: "How does the SGPA to CGPA calculator work?",
      answer:
        "Just enter all your semester SGPAs one by one and click calculate. The tool automatically adds them and divides by the number of semesters. If all semesters have equal credits (99% of B.Tech/BE courses), this gives exact final CGPA. Example: 8.1, 8.5, 7.8, 8.9, 8.4, 9.0 → (50.7) ÷ 6 = 8.45 CGPA. Works for 4, 6, or 8 semesters. No login needed — trusted by 8 lakh+ students.",
    },
    {
      question: "Do I need to enter backlogs or dropped subjects?",
      answer:
        "Yes! Even if you cleared a backlog later, the original low SGPA of that semester must be included. Example: Sem 3 SGPA was 5.8 due to backlog, later cleared → still use 5.8 in calculation. Excluding it will inflate your CGPA and get caught during placement verification.",
    },
    {
      question: "Is 8.0 CGPA good in 2025?",
      answer:
        "Very good! 8.0 CGPA ≈ 75–76% and 3.2 GPA. Clears almost all company cutoffs (except a few Dream companies asking 8.5+). Safe for IIMs via CAT, top MS universities abroad, and all government jobs. With strong projects/internships, you’ll easily get placed in product-based companies too.",
    },
    {
      question:
        "Can one high SGPA in the last semester increase my CGPA a lot?",
      answer:
        "Yes! Scoring 9.5+ in the final 1–2 semesters can boost your CGPA significantly. Example: Current average 7.8 after 6 sem, score 9.5 & 9.7 in last two → Final CGPA jumps to 8.25+. Many students improve from 7.6 to 8.1+ this way.",
    },
    {
      question: "Which CGPA is shown on the degree certificate?",
      answer:
        "Only the final calculated CGPA (up to 2 decimal places) is printed on your degree. Individual SGPAs are only on semester marksheets. That’s why companies ask for final CGPA — it’s the single number that defines your entire academic performance.",
    },
  ];

  const sidebarItems = [
    { id: 1, title: "What is SGPA?" },
    { id: 2, title: "What is CGPA?" },
    { id: 3, title: "Why Convert SGPA to CGPA?" },
    { id: 4, title: "SGPA vs CGPA: Key Differences" },
    { id: 5, title: "How Many SGPAs Are Needed?" },
    { id: 6, title: "SGPA to CGPA Formula" },
    { id: 7, title: "Role of Credits in Conversion" },
    { id: 8, title: "SGPA to CGPA Examples" },
    { id: 9, title: "SGPA to CGPA Table" },
    { id: 10, title: "Common Mistakes" },
    { id: 11, title: "How CGPA Impacts Your Profile" },
    { id: 12, title: "Tips to Improve SGPA & CGPA" },
  ];

  const content = {
    title: "How to Convert SGPA to CGPA – Full Guide with Examples (2025)",
    sections: [
      {
        type: "step",
        stepNumber: 1,
        title: "What is SGPA?",
        content: [
          {
            type: "paragraph",
            content:
              "SGPA (Semester Grade Point Average) is the grade point average calculated for a single semester. It reflects your academic performance only in that particular semester. Most Indian universities (VTU, Anna University, JNTU, AKTU, Mumbai University, etc.) award SGPA on a 10-point scale.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 2,
        title: "What is CGPA?",
        content: [
          {
            type: "paragraph",
            content:
              "CGPA (Cumulative Grade Point Average) is the overall average of grade points obtained in ALL semesters of your course. It is mentioned on your final degree certificate and is the most important academic metric for jobs, higher studies, and placements.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 3,
        title: "Why Convert SGPA to CGPA?",
        content: [
          {
            type: "list",
            items: [
              "Final degree certificate shows only CGPA, not individual SGPAs",
              "Almost all companies (TCS, Infosys, Accenture, etc.) ask for CGPA",
              "MBA colleges (IIMs, XLRI, SPJIMR) and MS abroad applications require CGPA",
              "Government jobs & PSUs use CGPA cutoffs",
              "To know your overall standing till current semester",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 4,
        title: "SGPA vs CGPA: Key Differences",
        content: [
          {
            type: "table",
            headers: ["Aspect", "SGPA", "CGPA"],
            rows: [
              ["Scope", "One semester only", "All semesters combined"],
              [
                "Calculation",
                "Based on one semester credits & grades",
                "Weighted average of all SGPAs",
              ],
              [
                "Frequency",
                "Calculated every 6 months",
                "Final value at course completion",
              ],
              [
                "Impact",
                "Affects only that semester",
                "Decides final degree class & eligibility",
              ],
              [
                "Shown on",
                "Semester marksheet",
                "Final degree/provisional certificate",
              ],
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 5,
        title: "How Many SGPAs Are Needed to Calculate CGPA?",
        content: [
          {
            type: "paragraph",
            content: "It depends on your course duration:",
          },
          {
            type: "list",
            items: [
              "B.Tech / BE → 8 semesters → 8 SGPAs",
              "B.Sc / B.Com / BA → Usually 6 semesters → 6 SGPAs",
              "MCA → 4 or 6 semesters",
              "M.Tech → 4 semesters",
              "Diploma → 6 semesters",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 6,
        title: "General Formula to Convert SGPA to CGPA",
        content: [
          {
            type: "highlight",
            content:
              "CGPA = (Sum of (SGPA × Semester Credits)) ÷ (Total Credits of All Semesters)",
          },
          {
            type: "paragraph",
            content:
              "In most universities (VTU, Anna, JNTU, etc.), all semesters have equal credits → Simple Average works.",
          },
          {
            type: "formula",
            content: "CGPA = (SGPA₁ + SGPA₂ + SGPA₃ + ... + SGPAₙ) ÷ n",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 7,
        title: "Weightage of Credits in SGPA to CGPA Conversion",
        content: [
          {
            type: "paragraph",
            content:
              "If semesters have different credit loads (common in autonomous colleges), use weighted formula:",
          },
          {
            type: "formula",
            content:
              "CGPA = (SGPA₁×C₁ + SGPA₂×C₂ + ... + SGPAₙ×Cₙ) ÷ (C₁ + C₂ + ... + Cₙ)",
          },
          {
            type: "paragraph",
            content:
              "C = Total credits in that semester. Most university portals calculate this automatically.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 8,
        title: "Step-by-Step SGPA to CGPA Calculation Examples",
        content: [
          {
            type: "example",
            content:
              "Example 1 (Equal Credits – B.Tech 8 semesters):\nSem 1: 8.2 | Sem 2: 8.6 | Sem 3:7.9 | Sem 4:8.8 | Sem 5:8.4 | Sem 6:9.0 | Sem 7:8.7 | Sem 8:9.1\nCGPA = (8.2+8.6+7.9+8.8+8.4+9.0+8.7+9.1)/8 = 8.59 ≈ 8.6",
          },
          {
            type: "example",
            content:
              "Example 2 (Current CGPA after 6 semesters):\nSGPA → 7.8 | 8.1 | 7.5 | 8.3 | 8.0 | 8.7\nCGPA till 6th sem = (7.8+8.1+7.5+8.3+8.0+8.7)/6 = 8.07",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 9,
        title: "SGPA to CGPA Conversion Table (Simple Average)",
        content: [
          {
            type: "table",
            title: "Average SGPA → Final CGPA Reference",
            headers: ["Average of All SGPAs", "Final CGPA", "Class"],
            rows: [
              [
                "9.0 – 10.0",
                "9.0+",
                "Outstanding / First Class with Distinction",
              ],
              ["8.5 – 8.99", "8.5 – 8.99", "First Class with Distinction"],
              ["7.5 – 8.49", "7.5 – 8.49", "First Class"],
              ["6.5 – 7.49", "6.5 – 7.49", "First Class"],
              ["5.5 – 6.49", "5.5 – 6.49", "Second Class"],
              ["Below 5.0", "<5.0", "Fail"],
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 10,
        title: "Common Mistakes in SGPA to CGPA Conversion",
        content: [
          {
            type: "list",
            items: [
              "Taking average of only passed subjects (backlogs reduce CGPA)",
              "Forgetting to include failed subject SGPA (even if 0 or 4)",
              "Using percentage formula instead of simple average",
              "Thinking one high SGPA can compensate multiple low ones easily",
              "Not checking if university uses credit-weighted CGPA",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 11,
        title: "How CGPA Impacts Your Academic Profile",
        content: [
          {
            type: "paragraph",
            content: "CGPA decides:",
          },
          {
            type: "list",
            items: [
              "Campus placement eligibility (most companies want 7.0–7.5+)",
              "MBA college shortlisting (IIMs prefer 8.5+)",
              "MS/PhD abroad applications",
              "Government jobs & GATE scholarship",
              "Degree classification (Distinction / First Class)",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 12,
        title: "Tips to Improve Your SGPA and CGPA",
        content: [
          {
            type: "list",
            items: [
              "Target 8.5+ SGPA in every remaining semester",
              "Clear all backlogs immediately",
              "Focus more on high-credit subjects",
              "Attend internals & practicals regularly",
              "Choose electives wisely",
              "Use last 1–2 semesters to boost CGPA significantly",
            ],
          },
        ],
      },
    ],
  };

  const relatedServices = [
    {
      title: "SGPA to Percentage Calculator",
      slug: "/sgpa-to-percentage-conversion",
    },
    {
      title: "CGPA to GPA Calculator",
      slug: "/cgpa-to-gpa-conversion",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2F7F7] ">
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
          content={content}
        />
      )}

      <RelatedScoreConversion relatedServices={relatedServices} />

      {/* FAQ Section */}
      {(activeSection === "faq" || window.innerWidth >= 768) && (
        <FaqSection
          faqs={sgpaToCgpaFaqs}
          openFaq={openFaq}
          setOpenFaq={setOpenFaq}
        />
      )}
    </div>
  );
};

export default CalculatorMainPage;

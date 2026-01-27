import React, { useState } from "react";
import GuideSection from "./components/GuideSection";

const PTEtoIELTSConversion = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarItems = [
    { id: 1, title: "What is PTE?" },
    { id: 2, title: "What is IELTS?" },
    { id: 3, title: "PTE to IELTS Official Conversion Table (2025)" },
    { id: 4, title: "Why Convert PTE to IELTS?" },
    { id: 5, title: "PTE vs IELTS: Key Differences" },
    { id: 6, title: "Types of IELTS Exams" },
    { id: 7, title: "How PTE & IELTS Scoring Works" },
    { id: 8, title: "Skill-Wise Score Comparison" },
    { id: 9, title: "Sample Conversion Examples" },
    { id: 10, title: "Country-wise Requirements (2025)" },
    { id: 11, title: "Common Conversion Mistakes" },
    { id: 12, title: "PTE or IELTS – Which Should You Choose?" },
  ];

  const content = {
    title: "PTE to IELTS Score Conversion 2025 – Official Table & Calculator",
    sections: [
      {
        type: "step",
        stepNumber: 1,
        title: "What is PTE?",
        content: [
          {
            type: "paragraph",
            content:
              "PTE Academic (Pearson Test of English) is a 100% computer-based English test accepted by thousands of universities and governments in Australia, Canada, UK, USA, New Zealand, and Ireland. Results come in 1–2 days and scoring is fully AI-driven (10–90 scale).",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 2,
        title: "What is IELTS?",
        content: [
          {
            type: "paragraph",
            content:
              "IELTS (International English Language Testing System) is the world’s most popular English test, jointly managed by British Council, IDP, and Cambridge. Available in Academic & General Training modules with band scores from 0–9.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 3,
        title: "PTE to IELTS Official Conversion Table (2025)",
        content: [
          {
            type: "highlight",
            content:
              "This is the ONLY official concordance table released by Pearson in collaboration with IELTS partners (updated 2024–2025). No formula exists — just match your PTE score to the exact IELTS band.",
          },
          {
            type: "table",
            title: "PTE Academic → IELTS Band Conversion (Official)",
            headers: [
              "PTE Overall Score",
              "IELTS Overall Band",
              "Typical Requirement",
            ],
            rows: [
              ["86–90", "9.0", "Oxford, Cambridge, Harvard, Medicine"],
              ["83–85", "8.5", "Top-20 universities, PhD"],
              ["76–82", "8.0", "High-ranked programs"],
              ["69–75", "7.5", "Canada PR, Australia, most UK/Canada unis"],
              ["59–68", "7.0", "Most common requirement worldwide"],
              ["50–58", "6.5", "Minimum for Master’s & Bachelor’s"],
              ["42–49", "6.0", "Undergraduate, Diploma, Foundation"],
              ["35–41", "5.5", "Pathway/Pre-sessional courses"],
              ["30–34", "5.0", "Visa & basic courses"],
            ],
          },
          {
            type: "formula",
            content:
              "How to Use → Find your PTE score in the left column → Read the exact IELTS band on the right.",
          },
          {
            type: "paragraph",
            bold: true,
            content:
              "Quick Examples:\n• PTE 74 → IELTS 7.5\n• PTE 65 → IELTS 7.0\n• PTE 55 → IELTS 6.5\n• PTE 51 → IELTS 6.5 (borderline)",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 4,
        title: "Why Convert PTE to IELTS?",
        content: [
          {
            type: "list",
            items: [
              "Most universities & immigration websites list only IELTS band requirements",
              "Canada Express Entry, Australia Subclass 189/190, UK Skilled Worker visa use IELTS bands",
              "Many employers & licensing bodies (nurses, teachers, doctors) accept only IELTS",
              "You took PTE but your dream university asks for IELTS equivalent",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 5,
        title: "PTE vs IELTS: Key Differences",
        content: [
          {
            type: "table",
            headers: ["Feature", "PTE Academic", "IELTS"],
            rows: [
              ["Format", "Fully computer-based", "Paper or Computer"],
              ["Duration", "2 hours", "2h 45min"],
              ["Results", "1–2 days", "3–13 days"],
              ["Speaking", "Speak to mic (AI)", "Face-to-face examiner"],
              ["Scoring", "10–90", "0–9 bands"],
              ["Acceptance", "Fastest growing", "Most widely accepted"],
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 6,
        title: "Types of IELTS Exams",
        content: [
          {
            type: "list",
            items: [
              "IELTS Academic – Higher education",
              "IELTS General Training – Migration & work",
              "IELTS UKVI – UK visa",
              "IELTS Life Skills – UK settlement/spouse",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 7,
        title: "How PTE & IELTS Scoring Works",
        content: [
          {
            type: "paragraph",
            content:
              "PTE: 10–90 scale (overall + 4 skills + enabling skills). Fully automated.\nIELTS: 0–9 bands in 0.5 increments. Speaking & Writing partially human-marked.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 8,
        title: "Skill-Wise Score Comparison",
        content: [
          {
            type: "table",
            headers: [
              "IELTS Band",
              "PTE Listening",
              "PTE Reading",
              "PTE Speaking",
              "PTE Writing",
            ],
            rows: [
              ["8.5+", "85+", "84+", "82+", "87+"],
              ["8.0", "79–84", "78–83", "75–81", "80–86"],
              ["7.5", "71–78", "69–77", "67–74", "73–79"],
              ["7.0", "60–70", "59–68", "59–66", "65–72"],
              ["6.5", "50–59", "50–58", "50–58", "58–64"],
              ["6.0", "42–49", "42–49", "42–49", "50–57"],
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 9,
        title: "Sample Conversion Examples",
        content: [
          {
            type: "example",
            content: "PTE 78 → IELTS 8.0 → Great for top universities",
          },
          {
            type: "example",
            content: "PTE 66 → IELTS 7.0 → Safe for Canada, UK, Australia",
          },
          {
            type: "example",
            content: "PTE 53 → IELTS 6.5 → Minimum for most programs",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 10,
        title: "Country-wise Requirements (2025)",
        content: [
          {
            type: "list",
            items: [
              "Canada SDS/PGWP → IELTS 6.5 (no band <6.0) ≈ PTE 58–68",
              "Australia Student Visa → IELTS 6.0–7.0 ≈ PTE 50–75",
              "UK Student Visa → IELTS 6.0–7.5 (UKVI) ≈ PTE 59–76",
              "USA → Most accept PTE directly (55–68 common)",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 11,
        title: "Common Conversion Mistakes",
        content: [
          {
            type: "list",
            items: [
              "Thinking PTE 65 = 7.5 (wrong — 65 ≈ 7.0 only)",
              "Using 2018–2020 old tables",
              "Ignoring 'no band less than 6.0' rule",
              "Using average instead of official concordance",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 12,
        title: "PTE or IELTS – Which Should You Choose?",
        content: [
          {
            type: "highlight",
            content:
              "Choose PTE if → Fast results, computer comfort, Australia/Canada target\nChoose IELTS if → University specifically asks for IELTS, strong in face-to-face speaking",
          },
        ],
      },
    ],
  };
  return (
    <div className="bg-[#F2F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-start mb-4">
          PTE To IELTS Conversion
        </h1>

        <p className="text-base sm:text-lg text-gray-600 text-start mb-8 sm:mb-12 max-w-4xl">
          PTE to IELTS Score Conversion: Chart, Formula & Instant Converter
        </p>
      </div>

      <GuideSection
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarItems={sidebarItems}
        content={content}
      />
    </div>
  );
};

export default PTEtoIELTSConversion;

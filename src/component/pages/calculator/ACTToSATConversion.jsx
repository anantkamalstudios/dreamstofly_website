import React, { useState } from "react";
import GuideSection from "./components/GuideSection";

const ACTToSATConversion = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarItems = [
    { id: 1, title: "What is the ACT Exam?" },
    { id: 2, title: "What is the SAT Exam?" },
    { id: 3, title: "Why Convert ACT to SAT Scores?" },
    { id: 4, title: "ACT vs SAT: Key Differences" },
    { id: 5, title: "ACT Scoring System Explained" },
    { id: 6, title: "SAT Scoring System Explained" },
    { id: 7, title: "How ACT to SAT Conversion Works" },
    { id: 8, title: "ACT to SAT Concordance Table" },
    { id: 9, title: "Section-Wise Concordance" },
    { id: 10, title: "Sample Conversion Examples" },
    { id: 11, title: "Which Test Should You Choose?" },
    { id: 12, title: "College Admission Requirements" },
    { id: 13, title: "Common Myths" },
    { id: 14, title: "Tips to Improve Scores" },
  ];

  const content = {
    title: "ACT to SAT Score Conversion 2025 – Official Table & Full Guide",
    sections: [
      {
        type: "step",
        stepNumber: 1,
        title: "What is the ACT Exam?",
        content: [
          {
            type: "paragraph",
            content:
              "The ACT (American College Testing) is a standardized test used for college admissions in the USA and increasingly abroad. It tests English, Math, Reading, Science, and an optional Writing section. Total score ranges from 1–36 (average of four sections).",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 2,
        title: "What is the SAT Exam?",
        content: [
          {
            type: "paragraph",
            content:
              "The SAT, administered by College Board, has two main sections: Evidence-Based Reading & Writing (EBRW) and Math. Total score: 400–1600.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 3,
        title: "ACT to SAT Official Conversion Table (2025 Latest)",
        content: [
          {
            type: "highlight",
            content:
              "Official College Board & ACT concordance table (updated 2024–2025). Use this exact table — no formula exists!",
          },
          {
            type: "table",
            title: "ACT Composite → SAT Total Score",
            headers: ["ACT", "SAT (400–1600)", "Percentile"],
            rows: [
              ["36", "1570–1600", "99+"],
              ["35", "1530–1560", "99"],
              ["34", "1490–1520", "98"],
              ["33", "1450–1480", "97"],
              ["32", "1420–1440", "96"],
              ["31", "1390–1410", "95"],
              ["30", "1360–1380", "93"],
              ["29", "1330–1350", "91"],
              ["28", "1300–1320", "88"],
              ["27", "1260–1290", "85"],
              ["26", "1230–1250", "81"],
              ["25", "1200–1220", "77"],
              ["24", "1160–1190", "72"],
              ["23", "1130–1150", "66"],
              ["22", "1100–1120", "60"],
              ["21", "1060–1090", "52"],
              ["20", "1030–1050", "45"],
            ],
          },
          {
            type: "paragraph",
            bold: true,
            content:
              "Examples:\n• ACT 32 = SAT 1420–1440\n• ACT 29 = SAT 1330–1350\n• ACT 25 = SAT 1200–1220",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 4,
        title: "Why Convert ACT to SAT Scores?",
        content: [
          {
            type: "list",
            items: [
              "Many universities list only SAT ranges",
              "Super-scoring across tests",
              "Scholarships use SAT cutoffs",
              "Compare with friends/peers",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 5,
        title: "ACT vs SAT: Key Differences",
        content: [
          {
            type: "table",
            headers: ["Feature", "ACT", "SAT"],
            rows: [
              ["Time", "2h 55m (+Writing 3h 50m)", "3h"],
              ["Sections", "Eng, Math, Reading, Science", "EBRW + Math"],
              ["Math Level", "Up to Trig", "Up to Pre-Calc"],
              ["Science", "Yes", "No"],
              ["Scoring", "1–36", "400–1600"],
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 6,
        title: "ACT Scoring (1–36)",
        content: [
          {
            type: "paragraph",
            content: "Composite = Average of 4 sections, rounded.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 7,
        title: "SAT Scoring (400–1600)",
        content: [
          { type: "paragraph", content: "EBRW (200–800) + Math (200–800)." },
        ],
      },
      {
        type: "step",
        stepNumber: 8,
        title: "How Conversion Works",
        content: [
          {
            type: "paragraph",
            content:
              "No exact formula — only official concordance ranges based on millions of students.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 9,
        title: "Section-Wise Comparison",
        content: [
          {
            type: "table",
            headers: ["ACT Score", "SAT EBRW", "SAT Math"],
            rows: [
              ["36", "760–800", "800"],
              ["32–33", "680–710", "720–750"],
              ["28–29", "620–640", "620–650"],
              ["24–25", "540–570", "540–570"],
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 10,
        title: "Sample Conversions",
        content: [
          { type: "example", content: "ACT 31 → SAT 1390–1410" },
          { type: "example", content: "ACT 27 → SAT 1260–1290" },
        ],
      },
      {
        type: "step",
        stepNumber: 11,
        title: "Which Test Should You Take?",
        content: [
          {
            type: "highlight",
            content:
              "Take ACT → strong in science & speed\nTake SAT → prefer more time & advanced algebra",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 12,
        title: "College Requirements",
        content: [
          {
            type: "paragraph",
            content:
              "Top 20: ACT 32+ / SAT 1450+\nMost unis: ACT 25+ / SAT 1200+",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 13,
        title: "Common Myths",
        content: [
          {
            type: "list",
            items: [
              "Myth: Colleges prefer SAT → False",
              "Myth: Exact conversion exists → Only ranges",
              "Myth: ACT only for Midwest → Accepted everywhere",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 14,
        title: "Score Improvement Tips",
        content: [
          {
            type: "list",
            items: [
              "Take official practice tests",
              "Focus on weak areas",
              "Use super-scoring",
              "Practice timing",
            ],
          },
        ],
      },
    ],
  };
  return (
    <div className="bg-[#F2F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-start mb-4">
          ACT To SAT Conversion
        </h1>

        <p className="text-base sm:text-lg text-gray-600 text-start mb-8 sm:mb-12 max-w-4xl">
          ACT to SAT Score Conversion Chart 2024
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

export default ACTToSATConversion;

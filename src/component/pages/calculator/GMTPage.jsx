import React, { useState } from "react";
import GREtoGMAT from "./components/GREToGMAT";
import GuideSection from "./components/GuideSection";

const GMTPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarItems = [
    { id: 1, title: "What is the GMAT Exam?" },
    { id: 2, title: "What is the GRE Exam?" },
    { id: 3, title: "Why Convert GMAT to GRE Scores?" },
    { id: 4, title: "GMAT vs GRE: Key Differences" },
    { id: 5, title: "GMAT Scoring System Explained" },
    { id: 6, title: "GRE Scoring System Explained" },
    { id: 7, title: "How GMAT to GRE Conversion Works" },
    { id: 8, title: "GMAT to GRE Concordance Table" },
    { id: 9, title: "Section-Wise GMAT vs GRE Comparison" },
    { id: 10, title: "Sample Conversion Examples" },
    { id: 11, title: "GMAT or GRE — Which is Better?" },
    { id: 12, title: "Top Universities Accepting GRE for MBA" },
    { id: 13, title: "Common Myths" },
    { id: 14, title: "Tips to Improve Scores" },
  ];

  const content = {
    title: "GMAT to GRE Score Conversion 2025 – Official ETS Table & Guide",
    sections: [
      {
        type: "step",
        stepNumber: 1,
        title: "What is the GMAT Exam?",
        content: [
          {
            type: "paragraph",
            content:
              "The GMAT (Graduate Management Admission Test) is the traditional exam required by most top MBA programs worldwide. It is owned by GMAC and specifically designed for business school admissions. Current format (GMAT Focus Edition): 205–805 score scale.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 2,
        title: "What is the GRE Exam?",
        content: [
          {
            type: "paragraph",
            content:
              "The GRE (Graduate Record Examination) by ETS is accepted for MBA, MS, PhD, and other graduate programs. It is more widely accepted across disciplines. Current GRE score range: Verbal 130–170, Quant 130–170, Total 260–340.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 3,
        title: "GMAT to GRE Official Conversion Table (2025 ETS Table)",
        content: [
          {
            type: "highlight",
            content:
              "This is the ONLY official ETS-released concordance table (updated 2024–2025). Use this exact table — no other calculator or formula is accurate.",
          },
          {
            type: "table",
            title: "GMAT Focus Edition (205–805) → GRE Total Score",
            headers: [
              "GMAT Score",
              "GRE Verbal + Quant (Total)",
              "Approx Percentile",
            ],
            rows: [
              ["805", "340", "99+"],
              ["785–795", "339", "99"],
              ["765–775", "338", "98"],
              ["745–755", "337", "97"],
              ["725–735", "336", "96"],
              ["705–715", "335", "95"],
              ["685–695", "334", "94"],
              ["665–675", "333", "92"],
              ["645–655", "332", "90"],
              ["625–635", "331", "88"],
              ["605–615", "330", "86"],
              ["585–595", "328–329", "82"],
              ["565–575", "326–327", "77"],
              ["545–555", "324–325", "72"],
              ["525–535", "322–323", "66"],
              ["505–515", "320–321", "60"],
              ["485–495", "318–319", "54"],
              ["465–475", "316–317", "48"],
              ["445–455", "314–315", "42"],
              ["425–435", "312–313", "36"],
            ],
          },
          {
            type: "paragraph",
            bold: true,
            content:
              "Quick Examples:\n• GMAT 705 → GRE 335 (95th percentile)\n• GMAT 645 → GRE 332 (90th percentile)\n• GMAT 585 → GRE 328–329 (top 18%)",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 4,
        title: "Why Convert GMAT to GRE Scores?",
        content: [
          {
            type: "list",
            items: [
              "Many top B-schools now accept GRE (Harvard, Stanford, Wharton, INSEAD, LBS, etc.)",
              "You took GMAT but want to apply to GRE-only programs",
              "Some schools compare applicants using converted scores",
              "Scholarships & fellowships often compare GMAT/GRE",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 5,
        title: "GMAT vs GRE: Key Differences",
        content: [
          {
            type: "table",
            headers: ["Feature", "GMAT Focus", "GRE"],
            rows: [
              ["Duration", "2 hours 15 mins", "1 hour 58 mins"],
              [
                "Sections",
                "Quant, Verbal, Data Insights",
                "Quant, Verbal, Analytical Writing",
              ],
              [
                "Scoring",
                "205–805 (10-point increments)",
                "V130–170, Q130–170",
              ],
              [
                "Math Difficulty",
                "Harder (Data Insights unique)",
                "Slightly easier",
              ],
              ["Vocabulary", "Moderate", "Very heavy"],
              [
                "Accepted for MBA",
                "Preferred by most top-25 B-schools",
                "Widely accepted, growing fast",
              ],
              ["Test Fee (2025)", "~$275", "~$220–240"],
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 6,
        title: "GMAT Scoring System Explained",
        content: [
          {
            type: "paragraph",
            content:
              "GMAT Focus Edition: Total score 205–805 in 10-point increments. Three sections: Quantitative Reasoning, Verbal Reasoning, Data Insights (replaced Integrated Reasoning + added Data Sufficiency).",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 7,
        title: "GRE Scoring System Explained",
        content: [
          {
            type: "paragraph",
            content:
              "GRE: Verbal 130–170, Quant 130–170 (1-point increments). Total = V + Q. Analytical Writing scored separately 0–6.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 8,
        title: "How GMAT to GRE Conversion Works",
        content: [
          {
            type: "ETS conducted a massive study comparing thousands of test-takers who took both exams. The official concordance table (Step 3) is the result. There is no perfect 1:1 formula — only ranges.",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 9,
        title: "Section-Wise Comparison (Approximate)",
        content: [
          {
            type: "table",
            headers: ["GMAT Section Score (approx)", "GRE Verbal", "GRE Quant"],
            rows: [
              ["75–85", "165–170", "165–170"],
              ["65–74", "160–164", "160–164"],
              ["55–64", "155–159", "155–159"],
              ["45–54", "150–154", "150–154"],
              ["35–44", "145–149", "145–149"],
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 10,
        title: "Sample Conversion Examples",
        content: [
          {
            type: "example",
            content: "GMAT 705 → GRE 335 → Excellent for all top-10 B-schools",
          },
          {
            type: "example",
            content: "GMAT 645 → GRE 332 → Safe for top-25 programs",
          },
          {
            type: "example",
            content: "GMAT 585 → GRE 328–329 → Good for top-50 schools",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 11,
        title: "GMAT or GRE — Which is Better?",
        content: [
          {
            type: "highlight",
            content:
              "Take GMAT if → Targeting top-15 MBA, strong in data interpretation\nTake GRE if → Also applying to MS/PhD, strong vocabulary, want cheaper test",
          },
        ],
      },
      {
        type: "step",
        stepNumber: 12,
        title: "Top Universities Accepting GRE for MBA (2025)",
        content: [
          {
            type: "list",
            items: [
              "Harvard, Stanford, Wharton, MIT Sloan",
              "Columbia, Chicago Booth, Northwestern Kellogg",
              "INSEAD, LBS, Oxford Saïd, Cambridge Judge",
              "IIM Ahmedabad, ISB (via GRE)",
            ],
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
              "Myth: Top B-schools prefer GMAT → False — most are test-neutral",
              "Myth: GRE is easier → Not true; different strengths",
              "Myth: Conversion is exact → Only ranges exist",
            ],
          },
        ],
      },
      {
        type: "step",
        stepNumber: 14,
        title: "Tips to Improve Scores",
        content: [
          {
            type: "list",
            items: [
              "Take official mock tests from mba.com & ets.org",
              "Target 700+ GMAT or 330+ GRE for top-10 schools",
              "Practice Data Insights (GMAT) or Vocabulary (GRE) heavily",
              "Use score preview & cancel if needed",
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
          GMAT Conversion
        </h1>

        <p className="text-base sm:text-lg text-gray-600 text-start mb-8 sm:mb-12 max-w-4xl">
          GRE to GMAT Score Conversion Calculator: Formula & Conversion Chart
        </p>
        <GREtoGMAT />
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

export default GMTPage;

// import React from "react";

// const GuideContent = () => {
//   return (
//     <div className="flex-1 bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10">
//       <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
//         How to Convert CGPA to GPA?
//       </h1>

//       <p className="text-gray-700 mb-4">
//         To convert a 10 Point CGPA to a 4 Point GPA, divide your CGPA by 10 and
//         multiply the result by 4.
//       </p>

//       <p className="text-gray-700 mb-6">
//         This converts your CGPA scores (common in Indian universities) into a
//         4-point GPA system widely used in American and European institutions.
//       </p>

//       <p className="text-gray-700 mb-6">Here’s a step-by-step explanation:</p>

//       <div className="space-y-6">
//         <div>
//           <div className="flex items-start mb-3">
//             <div className="w-5 h-5 bg-blue-600 rounded mr-3 mt-1 flex-shrink-0" />
//             <h3 className="text-lg font-semibold text-gray-900">
//               Step 1: Check your CGPA
//             </h3>
//           </div>

//           <div className="ml-8">
//             <p className="font-semibold text-gray-900 mb-2">
//               Your CGPA is usually mentioned clearly on your marksheet or
//               transcript.
//             </p>

//             <p className="text-gray-700 mb-3">
//               If your university uses a percentage system, convert percentage to
//               CGPA using:
//             </p>

//             <span className="font-mono bg-gray-100 px-2 py-1 rounded inline-block mb-3">
//               CGPA = Percentage ÷ 9.5
//             </span>

//             <p className="ml-4 text-sm mb-2">Example: 76% ÷ 9.5 = 8.0 CGPA</p>

//             <p className="text-gray-700">
//               If your university uses a different CGPA scale (like 7 or 9),
//               convert it to the 10-point scale:
//             </p>

//             <ul className="space-y-2 text-gray-700 mt-2 ml-4">
//               <li>• For a 9-point scale → multiply by 1.1</li>
//               <li>• For a 7-point scale → multiply by 1.43</li>
//               <li className="text-sm">
//                 Example: 7.5 CGPA on a 9-point scale → 7.5 × 1.1 = 8.25
//                 (10-point scale)
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Step 2 */}
//         <div>
//           <div className="flex items-start mb-3">
//             <div className="w-5 h-5 bg-blue-600 rounded mr-3 mt-1 flex-shrink-0" />
//             <h3 className="text-lg font-semibold text-gray-900">
//               Step 2: Apply the formula
//             </h3>
//           </div>

//           <div className="ml-8">
//             <p className="text-gray-700 mb-3">The standard formula is:</p>

//             <div className="bg-gray-100 p-4 rounded-lg mb-4">
//               <p className="font-mono text-lg font-semibold text-gray-900">
//                 GPA = (CGPA ÷ 10) × 4
//               </p>
//             </div>

//             <p className="text-gray-700 mb-2">Example: CGPA = 8.2</p>

//             <ul className="space-y-1 text-gray-700 ml-4">
//               <li>• 8.2 ÷ 10 = 0.82</li>
//               <li>• 0.82 × 4 = 3.28</li>
//             </ul>

//             <p className="text-gray-700 mt-3">
//               So an Indian CGPA of 8.2 converts to a US GPA of 3.28.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GuideContent;

import React from "react";

// Content structure for the guide
const guideData = {
  title: "How to Convert CGPA to GPA?",
  sections: [
    {
      type: "paragraph",
      content:
        "To convert a 10 Point CGPA to a 4 Point GPA, divide your CGPA by 10 and multiply the result by 4.",
    },
    {
      type: "paragraph",
      content:
        "This converts your CGPA scores (common in Indian universities) into a 4-point GPA system widely used in American and European institutions.",
    },
    {
      type: "paragraph",
      content: "Here's a step-by-step explanation:",
    },
    {
      type: "step",
      stepNumber: 1,
      title: "Check your CGPA",
      content: [
        {
          type: "paragraph",
          content:
            "Your CGPA is usually mentioned clearly on your marksheet or transcript.",
          bold: true,
        },
        {
          type: "paragraph",
          content:
            "If your university uses a percentage system, convert percentage to CGPA using:",
        },
        {
          type: "formula",
          content: "CGPA = Percentage ÷ 9.5",
        },
        {
          type: "example",
          content: "Example: 76% ÷ 9.5 = 8.0 CGPA",
        },
        {
          type: "paragraph",
          content:
            "If your university uses a different CGPA scale (like 7 or 9), convert it to the 10-point scale:",
        },
        {
          type: "list",
          items: [
            "For a 9-point scale → multiply by 1.1",
            "For a 7-point scale → multiply by 1.43",
            {
              content:
                "Example: 7.5 CGPA on a 9-point scale → 7.5 × 1.1 = 8.25 (10-point scale)",
              small: true,
            },
          ],
        },
      ],
    },
    {
      type: "step",
      stepNumber: 2,
      title: "Apply the formula",
      content: [
        {
          type: "paragraph",
          content: "The standard formula is:",
        },
        {
          type: "highlight",
          content: "GPA = (CGPA ÷ 10) × 4",
        },
        {
          type: "paragraph",
          content: "Example: CGPA = 8.2",
        },
        {
          type: "list",
          items: ["8.2 ÷ 10 = 0.82", "0.82 × 4 = 3.28"],
        },
        {
          type: "paragraph",
          content: "So an Indian CGPA of 8.2 converts to a US GPA of 3.28.",
        },
      ],
    },
    {
      type: "table",
      title: "CGPA to GPA Conversion Reference",
      headers: ["CGPA (10-point)", "GPA (4-point)", "Grade"],
      rows: [
        ["9.5 - 10.0", "3.8 - 4.0", "A+"],
        ["9.0 - 9.4", "3.6 - 3.79", "A"],
        ["8.5 - 8.9", "3.4 - 3.59", "A-"],
        ["8.0 - 8.4", "3.2 - 3.39", "B+"],
        ["7.5 - 7.9", "3.0 - 3.19", "B"],
        ["7.0 - 7.4", "2.8 - 2.99", "B-"],
        ["6.5 - 6.9", "2.6 - 2.79", "C+"],
        ["6.0 - 6.4", "2.4 - 2.59", "C"],
      ],
    },
  ],
};

const GuideContent = ({ data = guideData }) => {
  const renderParagraph = (item, index) => {
    const className = `text-gray-700 mb-4 ${
      item.bold ? "font-semibold text-gray-900" : ""
    }`;
    return (
      <p key={index} className={className}>
        {item.content}
      </p>
    );
  };

  const renderFormula = (item, index) => (
    <span
      key={index}
      className="font-mono bg-gray-100 px-2 py-1 rounded inline-block mb-3"
    >
      {item.content}
    </span>
  );

  const renderExample = (item, index) => (
    <p key={index} className="ml-4 text-sm mb-2">
      {item.content}
    </p>
  );

  const renderHighlight = (item, index) => (
    <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
      <p className="font-mono text-lg font-semibold text-gray-900">
        {item.content}
      </p>
    </div>
  );

  const renderList = (item, index) => (
    <ul key={index} className="space-y-2 text-gray-700 mt-2 ml-4">
      {item.items.map((listItem, i) => {
        if (typeof listItem === "string") {
          return <li key={i}>• {listItem}</li>;
        }
        return (
          <li key={i} className={listItem.small ? "text-sm" : ""}>
            • {listItem.content}
          </li>
        );
      })}
    </ul>
  );

  const renderTable = (item, index) => (
    <div key={index} className="mb-6">
      {item.title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          {item.title}
        </h3>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              {item.headers.map((header, i) => (
                <th
                  key={i}
                  className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {item.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="border border-gray-300 px-4 py-2 text-gray-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderStepContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case "paragraph":
          return renderParagraph(item, index);
        case "formula":
          return renderFormula(item, index);
        case "example":
          return renderExample(item, index);
        case "highlight":
          return renderHighlight(item, index);
        case "list":
          return renderList(item, index);
        case "table":
          return renderTable(item, index);
        default:
          return null;
      }
    });
  };

  const renderStep = (section, index) => (
    <div key={index}>
      <div className="flex items-start mb-3">
        <div className="w-5 h-5 bg-blue-600 rounded mr-3 mt-1 flex-shrink-0" />
        <h3 className="text-lg font-semibold text-gray-900">
          Step {section.stepNumber}: {section.title}
        </h3>
      </div>
      <div className="ml-8">{renderStepContent(section.content)}</div>
    </div>
  );

  const renderSection = (section, index) => {
    switch (section.type) {
      case "paragraph":
        return renderParagraph(section, index);
      case "step":
        return renderStep(section, index);
      case "table":
        return renderTable(section, index);
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        {data.title}
      </h1>

      <div className="space-y-6">
        {data.sections.map((section, index) => renderSection(section, index))}
      </div>
    </div>
  );
};

export default GuideContent;

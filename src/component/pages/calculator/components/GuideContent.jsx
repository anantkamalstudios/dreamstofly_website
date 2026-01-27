// import React from "react";

// const GuideContent = ({ data }) => {
//   const renderParagraph = (item, index) => {
//     const className = `text-gray-700 mb-4 ${
//       item.bold ? "font-semibold text-gray-900" : ""
//     }`;
//     return (
//       <p key={index} className={className}>
//         {item.content}
//       </p>
//     );
//   };

//   const renderFormula = (item, index) => (
//     <span
//       key={index}
//       className=" bg-gray-100 px-2 py-1 rounded inline-block mb-3"
//     >
//       {item.content}
//     </span>
//   );

//   const renderExample = (item, index) => (
//     <p key={index} className="ml-4 text-sm mb-2">
//       {item.content}
//     </p>
//   );

//   const renderHighlight = (item, index) => (
//     <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
//       <p className=" text-lg font-semibold text-gray-900">{item.content}</p>
//     </div>
//   );

//   const renderList = (item, index) => (
//     <ul key={index} className="space-y-2 text-gray-700 mt-2 ml-4">
//       {item.items.map((listItem, i) => {
//         if (typeof listItem === "string") {
//           return <li key={i}>• {listItem}</li>;
//         }
//         return (
//           <li key={i} className={listItem.small ? "text-sm" : ""}>
//             • {listItem.content}
//           </li>
//         );
//       })}
//     </ul>
//   );

//   const renderTable = (item, index) => (
//     <div key={index} className="mb-6">
//       {item.title && (
//         <h3 className="text-lg font-semibold text-gray-900 mb-3">
//           {item.title}
//         </h3>
//       )}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               {item.headers.map((header, i) => (
//                 <th
//                   key={i}
//                   className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900"
//                 >
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {item.rows.map((row, i) => (
//               <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//                 {row.map((cell, j) => (
//                   <td
//                     key={j}
//                     className="border border-gray-300 px-4 py-2 text-gray-700"
//                   >
//                     {cell}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   const renderStepContent = (content) => {
//     return content.map((item, index) => {
//       switch (item.type) {
//         case "paragraph":
//           return renderParagraph(item, index);
//         case "formula":
//           return renderFormula(item, index);
//         case "example":
//           return renderExample(item, index);
//         case "highlight":
//           return renderHighlight(item, index);
//         case "list":
//           return renderList(item, index);
//         case "table":
//           return renderTable(item, index);
//         default:
//           return null;
//       }
//     });
//   };

//   const renderStep = (section, index) => (
//     <div key={index}>
//       <div className="flex items-start mb-3">
//         <div className="w-5 h-5 bg-blue-600 rounded mr-3 mt-1 flex-shrink-0" />
//         <h3 className="text-lg font-semibold text-gray-900">
//           Step {section.stepNumber}: {section.title}
//         </h3>
//       </div>
//       <div className="ml-8">{renderStepContent(section.content)}</div>
//     </div>
//   );

//   const renderSection = (section, index) => {
//     switch (section.type) {
//       case "paragraph":
//         return renderParagraph(section, index);
//       case "step":
//         return renderStep(section, index);
//       case "table":
//         return renderTable(section, index);
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex-1 bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10">
//       <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
//         {data.title}
//       </h1>

//       <div className="space-y-6">
//         {data.sections.map((section, index) => renderSection(section, index))}
//       </div>
//     </div>
//   );
// };

// export default GuideContent;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const GuideContent = ({ data }) => {
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
      className="bg-gray-100 px-2 py-1 rounded inline-block mb-3"
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
      <p className="text-lg font-semibold text-gray-900">{item.content}</p>
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
    <div className="flex-1 bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-10 overflow-y-auto custom-scrollbar mt-16 md:mt-0">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
        {data.title}
      </h1>

      <div className="space-y-4 sm:space-y-6">
        {data.sections.map((section, index) => (
          <div key={index} id={`section-${index}`}>
            {renderSection(section, index)}
          </div>
        ))}
      </div>
    </div>
  );
};
export default GuideContent;

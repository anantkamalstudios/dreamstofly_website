// import React, { useState } from "react";
// import {
//   ChevronRight,
//   ChevronLeft,
//   FileText,
//   Award,
//   Users,
//   CheckCircle,
// } from "lucide-react";
// const LorMaker = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [formData, setFormData] = useState({
//     recommender: {
//       recommenderName: "Dr. Anjali Mehta",
//       designation: "Professor of Computer Science",
//       organization: "Indian Institute of Technology, Delhi",
//       applicantName: "Dipika Ghose",
//       position: "Final Year B.Tech Student",
//       relationship: "Professor - Student",
//       duration: "2 Years (2023 - 2025)",
//     },
//     performance: {
//       professionalAchievement: "",
//       strength: "",
//       keyCompetencies: "",
//       specificExample: "",
//       peerComparison: "",
//     },
//     RecommandationSummary: {
//       overallImpression: "",
//       endorsemantStatement: "",
//       reasonForRecommandation: "",
//       closingRemarks: "",
//     },
//   });
//   const sections = [
//     {
//       id: 0,
//       title: "Recommender & Applicant Information",
//       icon: Users,
//       fields: [
//         { name: "recommenderName", label: "Recommender Name", type: "text" },
//         { name: "designation", label: "Designation", type: "text" },
//         { name: "organization", label: "Organization", type: "text" },
//         { name: "applicantName", label: "Applicant Name", type: "text" },
//         { name: "position", label: "Position/Role", type: "text" },
//         { name: "relationship", label: "Relationship", type: "text" },
//         { name: "duration", label: "Duration of Association", type: "text" },
//       ],
//     },
//     {
//       id: 1,
//       title: "Performance & Key Qualities",
//       icon: Award,
//       fields: [
//         {
//           name: "professionalAchievement",
//           label: "Professional Achievement",
//           type: "text",
//           placeholder:
//             "Secured first rank in DSA course; Published a research paper on AI in a national conference",
//         },
//         {
//           name: "strength",
//           label: "Strength",
//           type: "text",
//           placeholder: "Analytical thinking, problem-solving, leadership",
//         },
//         {
//           name: "keyCompetencies",
//           label: "Key Competencies",
//           type: "text",
//           placeholder:
//             "Programming (Python, Java), Project Management, Team Collaboration",
//         },
//         {
//           name: "specificExample",
//           label: "Specific Examples",
//           type: "text",
//           placeholder:
//             "Led a team of 5 in developing a campus management system; Designed an AI-based project for final year research",
//         },
//         {
//           name: "peerComparison",
//           label: "Peer Comparison",
//           type: "text",
//           placeholder: "Among top 5% of students I taught in the last 10 years",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "Recommendation Summary",
//       icon: CheckCircle,
//       fields: [
//         {
//           name: "overallImpression",
//           label: "Overall Impression",
//           type: "text",
//           placeholder:
//             "Deepika is a highly motivated, disciplined, and intelligent student with strong technical and leadership abilities",
//         },
//         {
//           name: "endorsemantStatement",
//           label: "Endorsement Statement",
//           type: "text",
//           placeholder:
//             "I strongly recommand Dipika for admission to your Master's program in Computer Science",
//         },
//         {
//           name: "reasonForRecommandation",
//           label: "Reason for Recommandation",
//           type: "text",
//           placeholder:
//             "Exceptional academic record, project experience, and excellent teamwork skills",
//         },
//         {
//           name: "closingRemarks",
//           label: "Closing Remarks",
//           type: "text",
//           placeholder:
//             "I am confident that Dipika will excel in your program and contribute positively to your university",
//         },
//         {},
//       ],
//     },
//     {
//       id: 3,
//       title: "Review Your Letter of Recommendation (LOR)",
//       icon: FileText,
//     },
//   ];
//   const progress = ((currentStep + 1) / sections.length) * 100;
//   const handleInputChange = (name, value) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
//   const handleNext = () => {
//     if (currentStep < sections.length - 1) {
//       setCurrentStep(currentStep + 1);
//     }
//   };
//   const handleBack = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };
//   const currentSection = sections[currentStep];
//   const Icon = currentSection.icon;
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
//       {/* Header */}
//       <div className="bg-[#003E79] text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex-1 text-center md:text-left">
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
//                 Letter of Recommendation
//               </h1>
//               <h2 className="text-xl sm:text-2xl font-semibold mb-2">
//                 (LOR Maker)
//               </h2>
//               <p className="text-blue-100 text-sm sm:text-base">
//                 Generate authoritative recommendation letters in minutes with
//                 guided fields.
//               </p>
//             </div>
//             <div className="hidden md:block">
//               <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
//                 <img
//                   src="../../../assets/LOR_Header_Image.png"
//                   className="w-full"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Progress Bar */}
//       <div className="bg-white shadow-sm  top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="py-4">
//             <div className="mb-3">
//               <div className="flex justify-between text-xs sm:text-sm font-medium text-gray-600 mb-2">
//                 <span>Progress: {Math.round(progress)}%</span>
//                 <span>
//                   Step {currentStep + 1} of {sections.length}
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-3">
//                 <div
//                   className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-500 ease-out"
//                   style={{ width: `${progress}%` }}
//                 />
//               </div>
//             </div>
//             {/* Step Indicators */}
//             <div className="flex justify-between mt-4 overflow-x-auto pb-2">
//               {sections.map((section, idx) => {
//                 const StepIcon = section.icon;
//                 return (
//                   <div
//                     key={section.id}
//                     className="flex flex-col items-center min-w-fit px-2"
//                   >
//                     <div
//                       className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
//                         idx <= currentStep
//                           ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
//                           : "bg-gray-200 text-gray-400"
//                       }`}
//                     >
//                       <StepIcon className="w-5 h-5 sm:w-6 sm:h-6" />
//                     </div>
//                     <span
//                       className={`text-xs mt-2 text-center max-w-[100px] hidden sm:block ${
//                         idx <= currentStep
//                           ? "text-blue-700 font-semibold"
//                           : "text-gray-500"
//                       }`}
//                     >
//                       {section.title}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Main Content */}
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Section Header */}
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-6">
//             <div className="flex items-center gap-4">
//               <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
//                 <Icon className="w-8 h-8" />
//               </div>
//               <div>
//                 <h2 className="text-2xl sm:text-3xl font-bold">
//                   {currentSection.title}
//                 </h2>
//                 <p className="text-blue-100 text-sm mt-1">
//                   Step {currentStep + 1} of {sections.length}
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* Form Content */}
//           <div className="p-6 sm:p-8 lg:p-10">
//             {currentSection.fields.length > 0 ? (
//               <div className="space-y-6">
//                 {currentSection.fields.map((field) => (
//                   <div key={field.name} className="group">
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       {field.label}
//                     </label>
//                     {field.type === "textarea" ? (
//                       <textarea
//                         value={formData[field.name]}
//                         onChange={(e) =>
//                           handleInputChange(field.name, e.target.value)
//                         }
//                         placeholder={field.placeholder}
//                         rows={4}
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 resize-none text-gray-700 placeholder-gray-400"
//                       />
//                     ) : (
//                       <input
//                         type={field.type}
//                         value={formData[field.name]}
//                         onChange={(e) =>
//                           handleInputChange(field.name, e.target.value)
//                         }
//                         placeholder={field.placeholder}
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-gray-700 placeholder-gray-400"
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-12">
//                 <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12">
//                   <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <FileText className="w-10 h-10 text-white" />
//                   </div>
//                   <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
//                     Ready to Generate Your LOR
//                   </h3>
//                   <p className="text-gray-600 mb-8 max-w-md mx-auto">
//                     Review your information and click the button below to
//                     generate a professional letter of recommendation.
//                   </p>
//                   <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
//                     Generate Letter
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* Navigation Buttons */}
//           <div className="bg-gray-50 px-6 sm:px-8 lg:px-10 py-6 flex flex-col sm:flex-row gap-3 sm:justify-between">
//             <button
//               onClick={handleBack}
//               disabled={currentStep === 0}
//               className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
//                 currentStep === 0
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md"
//               }`}
//             >
//               <ChevronLeft className="w-5 h-5" />
//               Back
//             </button>
//             <button
//               onClick={handleNext}
//               disabled={currentStep === sections.length - 1}
//               className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
//                 currentStep === sections.length - 1
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl hover:scale-105"
//               }`}
//             >
//               Next
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default LorMaker;

import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  FileText,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";

const LorMaker = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    recommender: {
      recommenderName: "",
      designation: "",
      organization: "",
      applicantName: "",
      position: "",
      relationship: "",
      duration: "",
    },
    performance: {
      professionalAchievement: "",
      strength: "",
      keyCompetencies: "",
      specificExample: "",
      peerComparison: "",
    },
    RecommandationSummary: {
      overallImpression: "",
      endorsemantStatement: "",
      reasonForRecommandation: "",
      closingRemarks: "",
    },
  });

  const sections = [
    {
      id: 0,
      key: "recommender",
      title: "Recommender & Applicant Information",
      icon: Users,
      fields: [
        { name: "recommenderName", label: "Recommender Name", type: "text" },
        { name: "designation", label: "Designation", type: "text" },
        { name: "organization", label: "Organization", type: "text" },
        { name: "applicantName", label: "Applicant Name", type: "text" },
        { name: "position", label: "Position/Role", type: "text" },
        { name: "relationship", label: "Relationship", type: "text" },
        { name: "duration", label: "Duration of Association", type: "text" },
      ],
    },
    {
      id: 1,
      key: "performance",
      title: "Performance & Key Qualities",
      icon: Award,
      fields: [
        {
          name: "professionalAchievement",
          label: "Professional Achievement",
          type: "text",
        },
        { name: "strength", label: "Strength", type: "text" },
        { name: "keyCompetencies", label: "Key Competencies", type: "text" },
        { name: "specificExample", label: "Specific Example", type: "text" },
        { name: "peerComparison", label: "Peer Comparison", type: "text" },
      ],
    },
    {
      id: 2,
      key: "RecommandationSummary",
      title: "Recommendation Summary",
      icon: CheckCircle,
      fields: [
        {
          name: "overallImpression",
          label: "Overall Impression",
          type: "text",
        },
        {
          name: "endorsemantStatement",
          label: "Endorsement Statement",
          type: "text",
        },
        {
          name: "reasonForRecommandation",
          label: "Reason for Recommendation",
          type: "text",
        },
        { name: "closingRemarks", label: "Closing Remarks", type: "text" },
      ],
    },
    {
      id: 3,
      key: "review",
      title: "Review Your Letter of Recommendation (LOR)",
      icon: FileText,
      fields: [],
    },
  ];

  const progress = ((currentStep + 1) / sections.length) * 100;
  const currentSection = sections[currentStep];
  const Icon = currentSection.icon;

  const handleInputChange = (sectionKey, name, value) => {
    setFormData((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        [name]: value,
      },
    }));
  };

  const handleNext = () => {
    if (currentStep < sections.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-[#003E79] text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold mb-2">Letter of Recommendation</h1>
          <h2 className="text-xl font-semibold mb-3">(LOR Maker)</h2>
          <p className="text-blue-100">
            Generate authoritative recommendation letters in minutes with guided
            fields.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden px-10">
          <div className="hidden sm:block bg-white border-b border-gray-200 py-6 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-4">
                {/* Step Tabs */}
                <div className="flex gap-1 mb-2">
                  {sections.map((section, idx) => (
                    <div key={section.id} className="flex-1">
                      <div
                        className={`text-xs font-medium pb-2 ${
                          idx === currentStep
                            ? "text-blue-600"
                            : idx < currentStep
                            ? "text-gray-600"
                            : "text-gray-400"
                        }`}
                      >
                        {section.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sectional Progress Bar */}
              <div className="flex gap-1">
                {sections.map((section, idx) => (
                  <div
                    key={section.id}
                    className="flex-1 bg-gray-200 rounded-full h-2"
                  >
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ease-out ${
                        idx < currentStep
                          ? "bg-blue-600 w-full"
                          : idx === currentStep
                          ? "bg-blue-600"
                          : "bg-gray-200"
                      }`}
                      style={{
                        width: "100%",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-black px-6 py-6 flex items-center gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                {currentSection.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            {currentStep === 3 ? (
              <div className="space-y-8">
                <div className=" rounded-xl px-6 py-2">
                  <h3 className="text-lg font-medium mb-4 text-black">
                    Recommender & Applicant Information
                  </h3>
                  {Object.entries(formData.recommender).map(([key, value]) => (
                    <p key={key} className="relative text-gray-700 mb-1">
                      <label className="absolute top-3 bg-white left-2 capitalize block text-sm text-black mb-2">
                        {key.replace(/([A-Z])/g, " $1")}:
                      </label>
                      <input
                        type="text"
                        value={value}
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 mt-5"
                        readOnly={true}
                      />
                    </p>
                  ))}
                </div>

                <div className=" rounded-xl px-6 py-2">
                  <h3 className="text-xl font-medium mb-4 text-black">
                    Performance & Key Qualities
                  </h3>
                  {Object.entries(formData.performance).map(([key, value]) => (
                    <p key={key} className="relative text-gray-700 mb-1">
                      <label className="absolute top-3 bg-white left-2 capitalize block text-sm text-black mb-2">
                        {key.replace(/([A-Z])/g, " $1")}:
                      </label>
                      <input
                        type="text"
                        value={value}
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 mt-5"
                        readOnly={true}
                      />
                    </p>
                  ))}
                </div>

                <div className=" rounded-xl px-6 py-2">
                  <h3 className="text-xl font-medium mb-4 text-black">
                    Recommendation Summary
                  </h3>
                  {Object.entries(formData.RecommandationSummary).map(
                    ([key, value]) => (
                      <p key={key} className="relative text-gray-700 mb-1">
                        <label className="absolute top-3 bg-white left-2 capitalize block text-sm text-black mb-2">
                          {key.replace(/([A-Z])/g, " $1")}:
                        </label>
                        <input
                          type="text"
                          value={value}
                          className="w-full px-4 py-3 border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 mt-5"
                          readOnly={true}
                        />
                      </p>
                    )
                  )}
                </div>

                <div className="flex flex-col justify-start mt-10 max-w-72 gap-3">
                  <p className="text-lg">Download LOR (PDF/DOCX)</p>
                  <button className="bg-[#0073DF] text-white px-8 py-4 rounded-md font-semibold text-lg inline-block">
                    Generate Sample LOR
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {currentSection.fields.map((field) => (
                  <p key={field.name} className="relative">
                    <label className="absolute -top-2 bg-white left-2 block text-sm text-black mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={formData[currentSection.key]?.[field.name] || ""}
                      onChange={(e) =>
                        handleInputChange(
                          currentSection.key,
                          field.name,
                          e.target.value
                        )
                      }
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
                    />
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className=" px-10 py-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                currentStep === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={currentStep === sections.length - 1}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                currentStep === sections.length - 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed hidden"
                  : "bg-[#0073DF] text-white hover:shadow-xl hover:scale-105"
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LorMaker;

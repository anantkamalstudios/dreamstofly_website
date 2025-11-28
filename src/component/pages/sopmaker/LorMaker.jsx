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
  const [lorFormData, setLorFormData] = useState({
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
    setLorFormData((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        [name]: value,
      },
    }));
  };

  const getFlatlorFormData = (obj) => {
    const result = {};
    for (const section in obj) {
      Object.assign(result, obj[section]);
    }
    return result;
  };

  const handleSubmit = () => {
    const data = getFlatlorFormData(lorFormData);
    console.log(data);
  };

  const handleNext = () => {
    if (currentStep < sections.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="relative bg-[#003E79] w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10">
        <div className="text-white text-center md:text-left max-w-3xl mx-auto md:mx-20 lg:mx-28 xl:mx-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">
            Letter of Recommendation
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            (LOR Maker)
          </h2>
          <p className="text-blue-100 text-sm sm:text-base md:text-md">
            Generate authoritative recommendation letters in minutes with guided
            fields.
          </p>
        </div>
        <img
          src="/images/SOP_LOR/SOPLORHero2.png"
          alt=""
          className="w-52 sm:w-64 md:w-80 lg:w-[380px] object-contain mb-6 md:mb-0"
        />
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
                  {Object.entries(lorFormData.recommender).map(
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

                <div className=" rounded-xl px-6 py-2">
                  <h3 className="text-xl font-medium mb-4 text-black">
                    Performance & Key Qualities
                  </h3>
                  {Object.entries(lorFormData.performance).map(
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

                <div className=" rounded-xl px-6 py-2">
                  <h3 className="text-xl font-medium mb-4 text-black">
                    Recommendation Summary
                  </h3>
                  {Object.entries(lorFormData.RecommandationSummary).map(
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
                  <button
                    className="bg-[#0073DF] text-white px-8 py-4 rounded-md font-semibold text-lg inline-block"
                    onClick={handleSubmit}
                  >
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
                      value={
                        lorFormData[currentSection.key]?.[field.name] || ""
                      }
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

import React, { useEffect, useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  FileText,
  Award,
  Users,
  CheckCircle,
  Download,
} from "lucide-react";
import axios from "axios";
import { useServicesData } from "../../../hooks/useServicesData";
import Loader from "../../../common/Loader";
import Error from "../../../common/Error";
import { downloadLORAsPDF } from "./pdfDownloadUtils";
import { formUtils } from "./Services";

const LorMaker = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLOR, setGeneratedLOR] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [lorFormData, setLorFormData] = useState({
    recommender: {
      recommender_name: "",
      designation: "",
      organization: "",
      applicant_name: "",
      position_role: "",
      relationship: "",
      duration: "",
    },
    performance: {
      achievement: "",
      strength: "",
      competencies: "",
      example: "",
      peer_comparison: "",
    },
    RecommandationSummary: {
      overall_impression: "",
      endorsement: "",
      reason: "",
      closing_remarks: "",
    },
  });

  const { data, loading, error } = useServicesData(
    "/api/sor_lor/get_lor_hero_section"
  );

  const lorData = data?.data;

  const sections = [
    {
      id: 0,
      key: "recommender",
      title: "Recommender & Applicant Information",
      icon: Users,
      fields: [
        { name: "recommender_name", label: "Recommender Name", type: "text" },
        { name: "designation", label: "Designation", type: "text" },
        { name: "organization", label: "Organization", type: "text" },
        { name: "applicant_name", label: "Applicant Name", type: "text" },
        { name: "position_role", label: "Position/Role", type: "text" },
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
          name: "achievement",
          label: "Professional Achievement",
          type: "text",
        },
        { name: "strength", label: "Strength", type: "text" },
        { name: "competencies", label: "Key Competencies", type: "text" },
        { name: "example", label: "Specific Example", type: "text" },
        { name: "peer_comparison", label: "Peer Comparison", type: "text" },
      ],
    },
    {
      id: 2,
      key: "RecommandationSummary",
      title: "Recommendation Summary",
      icon: CheckCircle,
      fields: [
        {
          name: "overall_impression",
          label: "Overall Impression",
          type: "text",
        },
        {
          name: "endorsement",
          label: "Endorsement Statement",
          type: "text",
        },
        {
          name: "reason",
          label: "Reason for Recommendation",
          type: "text",
        },
        { name: "closing_remarks", label: "Closing Remarks", type: "text" },
      ],
    },
    {
      id: 3,
      key: "review",
      title: "Review Your Letter of Recommendation",
      icon: FileText,
      fields: [],
    },
  ];

  const progress = formUtils.calculateProgress(currentStep, sections.length);
  const currentSection = sections[currentStep];

  const isSectionComplete = (section) =>
    formUtils.isSectionComplete(lorFormData, section);

  const handleNext = () =>
    formUtils.handleNext(
      currentStep,
      sections,
      lorFormData,
      currentSection,
      setCurrentStep,
      setFormErrors
    );

  const handlePrev = () => formUtils.handlePrev(currentStep, setCurrentStep);

  const handleInputChange = (sectionKey, name, value) =>
    formUtils.handleInputChange(setLorFormData, sectionKey, name, value);

  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    const result = await formUtils.handleSubmit(
      lorFormData,
      "/api/lor/generate",
      setGeneratedLOR,
      setIsGenerating
    );
    if (result.success) {
      alert("LOR generated successfully! You can now download it.");
    } else {
      console.error("Error generating LOR:", result.error);
      alert("Failed to generate LOR. Please try again.");
    }
  };

  const handleDownloadPDF = async () => {
    if (!generatedLOR || !generatedLOR.lor_text) {
      alert("No LOR text available to download");
      return;
    }
    const applicantName = lorFormData.applicant_name || "Applicant";
    const result = await downloadLORAsPDF(generatedLOR.lor_text, applicantName);
    if (result.success) {
      alert("PDF downloaded successfully!");
    } else {
      alert("Failed to download PDF. Please try again.");
    }
  };

  if (loading) <Loader />;
  if (error) <Error />;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="relative bg-[#003E79] w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10">
        <div className="text-white text-center md:text-left max-w-3xl mx-auto md:mx-20 lg:mx-28 xl:mx-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">
            {lorData?.title}
          </h1>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg">
            {lorData?.subtitle}
          </p>
        </div>
        <img
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}${lorData?.image}`}
          alt=""
          className="w-52 sm:w-64 md:w-80 lg:w-[380px] object-contain mb-6 md:mb-0"
        />
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8">
          <h1 className="my-1 sm:my-3 font-medium text-base md:text-lg lg:text-xl">
            Progress: {progress.toFixed(0)}%
          </h1>
          <div className="hidden sm:block bg-white border-b border-gray-200 py-6 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-2">
                {/* Step Tabs */}
                <div className="flex gap-1">
                  {sections.map((section, idx) => (
                    <div key={section.id} className="flex-1">
                      <div
                        className={`text-sm font-medium ${
                          idx === currentStep
                            ? "text-blue-600"
                            : idx < currentStep
                            ? "text-gray-800"
                            : "text-gray-600"
                        }`}
                      >
                        {section.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sectional Progress Bar */}
              <div className="flex gap-2">
                {sections.map((section, idx) => (
                  <div
                    key={section.id}
                    className="flex-1 bg-gray-200 rounded-full h-2"
                  >
                    <div
                      className={`w-full h-2 transition-all duration-500 ease-out ${
                        idx < currentStep
                          ? "bg-blue-600 w-full"
                          : idx === currentStep
                          ? "bg-blue-600"
                          : "bg-gray-200"
                      }`}
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

                <div className="flex flex-col items-center justify-start mt-10 w-full gap-3">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-2xl px-4">
                    {/* {!isGenerating && (
                      <p className="text-lg text-center w-full sm:w-auto mb-2 sm:mb-0">
                        Download LOR (PDF/DOCX)
                      </p>
                    )} */}

                    <button
                      className="bg-[#0073DF] text-white px-8 py-3 rounded-md font-medium text-lg inline-flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed w-full sm:w-auto"
                      onClick={handleSubmit}
                      disabled={isGenerating}
                    >
                      {isGenerating ? "Submitting..." : "Submit"}
                    </button>

                    {generatedLOR && (
                      <button
                        className="bg-green-600 text-white px-8 py-3 rounded-md font-medium text-lg inline-flex items-center justify-center gap-2 hover:bg-green-700 transition-colors w-full sm:w-auto"
                        onClick={handleDownloadPDF}
                      >
                        <Download className="w-5 h-5" />
                        Download PDF
                      </button>
                    )}
                  </div>
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
                      onBlur={() => {
                        const value =
                          lorFormData[currentSection.key]?.[field.name] || "";
                        setFormErrors((prev) => ({
                          ...prev,
                          [field.name]: value.trim()
                            ? ""
                            : "This field is required",
                        }));
                      }}
                      placeholder={field.placeholder}
                      className={`w-full px-4 py-3 border-2 ${
                        formErrors[field.name]
                          ? "border-red-500"
                          : "border-gray-200"
                      } focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200`}
                    />
                    {formErrors[field.name] && (
                      <p className="mt-1 text-sm text-red-500">
                        {formErrors[field.name]}
                      </p>
                    )}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          {currentStep !== sections.length - 1 && (
            <div className=" px-10 py-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePrev}
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
                disabled={
                  currentStep === sections.length - 1 ||
                  !isSectionComplete(currentSection)
                }
                className={`px-6 py-2 ${
                  isSectionComplete(currentSection)
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-300 cursor-not-allowed"
                } text-white rounded-md flex items-center gap-2`}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LorMaker;

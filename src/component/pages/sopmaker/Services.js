import axiosInstance from "../../../api/axiosInstance";

export const formUtils = {
  isSectionComplete: (formData, section) => {
    return section.fields.every((field) => {
      const value = formData[section.key]?.[field.name];
      return value && value.trim() !== "";
    });
  },

  validateCurrentSection: (formData, currentSection, setFormErrors) => {
    const errors = {};
    currentSection.fields.forEach((field) => {
      const value = formData[currentSection.key]?.[field.name] || "";
      if (!value.trim()) {
        errors[field.name] = "This field is required";
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  },

  handleNext: (
    currentStep,
    sections,
    formData,
    currentSection,
    setCurrentStep,
    setFormErrors
  ) => {
    if (
      formUtils.validateCurrentSection(formData, currentSection, setFormErrors)
    ) {
      setCurrentStep((prev) => Math.min(prev + 1, sections.length - 1));
    }
  },

  handlePrev: (currentStep, setCurrentStep) => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  },

  handleInputChange: (setFormData, sectionKey, name, value) => {
    setFormData((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        [name]: value,
      },
    }));
  },

  getFlatFormData: (formData) => {
    const result = {};
    for (const section in formData) {
      Object.assign(result, formData[section]);
    }
    return result;
  },

  handleSubmit: async (
    formData,
    apiUrl,
    setGeneratedDoc,
    setIsGenerating
  ) => {
    try {
      setIsGenerating(true);
      const payload = formUtils.getFlatFormData(formData);
      const response = await axiosInstance.post(
        apiUrl,
        payload,
      );

      if (response.data.status === "success") {
        setGeneratedDoc(response.data);
        return { success: true, data: response.data };
      }
      return { success: false, error: "Failed to generate document" };
    } catch (error) {
      console.error(`Error:`, error);
      return { success: false, error: error.message };
    } finally {
      setIsGenerating(false);
    }
  },

  calculateProgress: (currentStep, totalSections) => {
    return Math.min(100, Math.round((currentStep / (totalSections - 1)) * 100));
  },
};

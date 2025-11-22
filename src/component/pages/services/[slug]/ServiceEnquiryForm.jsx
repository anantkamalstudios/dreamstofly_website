import React, { useState } from "react";
import { Send } from "lucide-react";

// Country codes data - default to India (+91)
const countryCodes = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+353", country: "Ireland", flag: "🇮🇪" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
];

const ServiceEnquiryForm = ({ formConfig }) => {
  // Initialize formData with default values for select fields
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    formConfig?.fields?.forEach((field) => {
      if (field.defaultValue !== undefined) {
        initialData[field.name] = field.defaultValue;
      }
    });
    return initialData;
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAllFields, setShowAllFields] = useState(false);

  // Initialize country codes for phone fields - default to +91 (India)
  const [countryCodesState, setCountryCodesState] = useState(() => {
    const codes = {};
    formConfig?.fields?.forEach((field) => {
      if (field.type === "tel") {
        codes[field.name] = "+91"; // Default to India
      }
    });
    return codes;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryCodeChange = (fieldName, code) => {
    setCountryCodesState((prev) => ({
      ...prev,
      [fieldName]: code,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Combine country codes with phone numbers for submission
    const submissionData = { ...formData };
    formConfig?.fields?.forEach((field) => {
      if (field.type === "tel" && formData[field.name]) {
        const countryCode = countryCodesState[field.name] || "+91";
        submissionData[field.name] = `${countryCode} ${formData[field.name]}`;
      }
    });

    console.log("Form Data:", submissionData);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    // Reset form data but preserve default values
    const resetData = {};
    formConfig?.fields?.forEach((field) => {
      if (field.defaultValue !== undefined) {
        resetData[field.name] = field.defaultValue;
      }
    });
    setFormData(resetData);
    alert("Form submitted successfully! We'll get back to you soon.");
  };

  const getFieldColSpanClass = (field) => {
    if (field.colSpan !== undefined) {
      return field.colSpan === 1 ? "md:col-span-1 mb-1" : "md:col-span-2 mb-1";
    }

    if (field.type === "textarea") {
      return "md:col-span-2";
    }

    return "md:col-span-2";
  };

  const getInitialFields = () => {
    if (formConfig.fields.length <= 6) {
      return formConfig.fields;
    }
    return formConfig.fields.slice(0, 6);
  };

  const getFieldsToDisplay = () => {
    if (showAllFields) {
      return formConfig.fields;
    }
    return getInitialFields();
  };

  const renderField = (field) => {
    const { name, label, type, required, placeholder, options } = field;

    switch (type) {
      case "select":
        const selectValue = formData[name] || field.defaultValue || "";
        return (
          <select
            name={name}
            value={selectValue}
            onChange={handleInputChange}
            required={required}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
          >
            {!field.defaultValue && <option value="">Select {label}</option>}
            {options?.map((option, index) => (
              <option key={index} value={option} className="text-sm">
                {option}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            name={name}
            value={formData[name] || ""}
            onChange={handleInputChange}
            required={required}
            placeholder={placeholder}
            rows={3}
            className="w-full px-4 py-3 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
          />
        );

      case "date":
        return (
          <input
            type="date"
            name={name}
            value={formData[name] || ""}
            onChange={handleInputChange}
            required={required}
            className="w-full px-4 py-3 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        );

      case "time":
        return (
          <input
            type="time"
            name={name}
            value={formData[name] || ""}
            onChange={handleInputChange}
            required={required}
            className="w-full px-4 py-3 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        );

      case "tel":
        return (
          <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all duration-300">
            <select
              value={countryCodesState[name] || "+91"}
              onChange={(e) => handleCountryCodeChange(name, e.target.value)}
              className="px-3 py-3 border-r border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
              style={{ minWidth: "80px" }}
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name={name}
              value={formData[name] || ""}
              onChange={handleInputChange}
              required={required}
              placeholder={placeholder || "Enter your phone number"}
              className="flex-1 px-4 py-3 text-sm border-0 focus:outline-none focus:ring-0"
            />
          </div>
        );

      default:
        return (
          <input
            type={type}
            name={name}
            value={formData[name] || ""}
            onChange={handleInputChange}
            required={required}
            placeholder={placeholder}
            className="w-full px-4 py-3 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 w-[500px] items-start mt-10">
      <div className="text-center mb-2">
        {formConfig.icon && (
          <div className="mb-3">
            <img
              src={formConfig.icon}
              alt={formConfig.title || "Form Icon"}
              className="w-12 h-12 object-contain"
            />
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">
          {formConfig.title || "Enquire Now"}
        </h3>
        {/* <p className="text-gray-600">
          {formConfig.subtitle ||
            "Fill out the form and we'll get back to you soon"}
        </p> */}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {getFieldsToDisplay().map((field, index) => {
            const colSpanClass = getFieldColSpanClass(field);
            return (
              <div key={field.name} className={colSpanClass}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}{" "}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                {renderField(field)}
              </div>
            );
          })}
        </div>

        {formConfig.fields.length > 6 && !showAllFields && (
          <button
            type="button"
            onClick={() => setShowAllFields(true)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            + Show more fields
          </button>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center px-6 py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
              isSubmitting
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                {formConfig.buttonText || "Send Message"}
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceEnquiryForm;

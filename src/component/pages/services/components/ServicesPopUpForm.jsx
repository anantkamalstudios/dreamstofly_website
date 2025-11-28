import React, { useState } from "react";
import { X, Calendar, ChevronDown } from "lucide-react";

const ServicesPopUpForm = ({
  onClose,
  onSubmit,
  initialData = {},
  formConfig,
}) => {
  const [formData, setFormData] = useState(initialData);

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
  
  const [countryCodesState, setCountryCodesState] = useState({});

  const handleInputChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Call the parent's onSubmit handler with form data
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const renderField = (field) => {
    const commonClasses =
      "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

    switch (field.type) {
      case "text":
      case "email":
      case "number":
        return (
          <input
            type={field.type}
            id={field.id}
            placeholder={field.placeholder}
            className={commonClasses}
            value={formData[field.id] || ""}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            required={field.required}
          />
        );

      case "phone":
        return (
          <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300">
            <select
              value={countryCodesState[name] || "+91"}
              onChange={(e) => handleCountryCodeChange(name, e.target.value)}
              className="px-3 py-auto border-r border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 focus:outline-none cursor-pointer text-center"
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
              placeholder=" "
              className="flex-1 px-4 pt-3 pb-3 text-sm border-0 focus:outline-none focus:ring-0 peer"
            />
          </div>
        );

      case "date":
        return (
          <div className="relative">
            <input
              type="date"
              id={field.id}
              className={commonClasses}
              value={formData[field.id] || ""}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              required={field.required}
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        );

      case "select":
        return (
          <select
            id={field.id}
            className={commonClasses}
            value={formData[field.id] || ""}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            required={field.required}
          >
            <option value="">{field.placeholder || "Select an option"}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            id={field.id}
            placeholder={field.placeholder}
            className={`${commonClasses} min-h-24 resize-y`}
            value={formData[field.id] || ""}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            required={field.required}
          />
        );

      default:
        return null;
    }
  };

  return (
    // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
    // <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden animate-slide-up">
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        {/* Header */}
        <div className="flex items-center justify-between py-4 px-6">
          <div className="flex flex-col items-start gap-2">
            <img src={formConfig.icon} alt="" />
            <h2 className="text-xl font-semibold text-gray-800">
              {formConfig.title}
            </h2>
            {formConfig.description && (
              <p className="text-xs text-black">{formConfig.description}</p>
            )}
          </div>
        </div>

        {/* Form Content */}
        <div className="overflow-y-auto max-h-full p-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {formConfig.fields.map((field) => (
                <div
                  key={field.id}
                  className={`${
                    field.colSpan === 2 ? "col-span-2" : "col-span-1"
                  }`}
                >
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.label}
                    {field.required && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </label>
                  {renderField(field)}
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              {formConfig.buttonText || "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPopUpForm;

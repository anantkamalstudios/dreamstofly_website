import React, { useState } from "react";
import { ArrowRight, Star, Clock, DollarSign, Send } from "lucide-react";
import { TbMoneybag } from "react-icons/tb";

const ServiceHero = ({ service, details, formConfig }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAllFields, setShowAllFields] = useState(false);

  if (!service || !details) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormData({});

    alert("Form submitted successfully! We'll get back to you soon.");
  };

  const shouldBeInSameRow = (fieldName) => {
    const sameRowFields = ["fullName", "email", "phone", "nationality"];
    return sameRowFields.includes(fieldName);
  };

  // Function to check if field should be full width
  const shouldBeFullWidth = (fieldType) => {
    return fieldType === "textarea";
  };

  const getInitialFields = () => {
    if (formConfig.fields.length <= 6) {
      return formConfig.fields;
    }
    return formConfig.fields.slice(0, 6);
  };

  // Function to get fields to display
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
        return (
          <select
            name={name}
            value={formData[name] || ""}
            onChange={handleInputChange}
            required={required}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs"
          >
            <option value="">Select {label}</option>
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
            className="w-full px-4 py-3 border text-xs border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
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
            className="w-full px-4 py-3 border text-xs border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
            className="w-full px-4 py-3 border text-xs border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
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
            className="w-full px-4 py-3 border text-xs border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        );
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              {service.category}
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {details.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              {details.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              {details.description}
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TbMoneybag className="w-6 h-6 text-blue-600 transition-transform duration-500 ease-in-out group-hover:scale-125 icon-rotate" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Starting Price</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {details.price}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600 transition-transform duration-500 ease-in-out group-hover:scale-125 icon-rotate" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {details.duration}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 group">
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Dynamic Form */}
          <div className="relative">
            {formConfig ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 max-w-xl mx-auto max-h-[600px] overflow-y-auto">
                {/* Form Header */}
                <div className="text-center mb-5">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {formConfig.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {formConfig.description}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {(() => {
                    const fieldsToDisplay = getFieldsToDisplay();
                    const renderedFields = [];

                    for (let i = 0; i < fieldsToDisplay.length; i++) {
                      const field = fieldsToDisplay[i];
                      const nextField = fieldsToDisplay[i + 1];

                      // Check if current field should be full width (textarea)
                      const isCurrentFullWidth = shouldBeFullWidth(field.type);

                      // Check if next field should be full width
                      const isNextFullWidth =
                        nextField && shouldBeFullWidth(nextField.type);

                      // Check if next field can be paired (not full width and not textarea)
                      const canPairWithNext =
                        nextField && !isCurrentFullWidth && !isNextFullWidth;

                      if (isCurrentFullWidth) {
                        // Full width field (textarea) - single row
                        renderedFields.push(
                          <div key={i}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              {field.label}
                              {field.required && (
                                <span className="text-red-500"> *</span>
                              )}
                            </label>
                            {renderField(field)}
                          </div>
                        );
                      } else if (canPairWithNext) {
                        // Create a row with two fields
                        renderedFields.push(
                          <div key={i} className="flex gap-4">
                            <div className="w-1/2">
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                {field.label}
                                {field.required && (
                                  <span className="text-red-500"> *</span>
                                )}
                              </label>
                              {renderField(field)}
                            </div>
                            <div className="w-1/2">
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                {nextField.label}
                                {nextField.required && (
                                  <span className="text-red-500"> *</span>
                                )}
                              </label>
                              {renderField(nextField)}
                            </div>
                          </div>
                        );
                        // Skip the next field since we've already rendered it
                        i++;
                      } else {
                        // Single field
                        renderedFields.push(
                          <div key={i}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              {field.label}
                              {field.required && (
                                <span className="text-red-500"> *</span>
                              )}
                            </label>
                            {renderField(field)}
                          </div>
                        );
                      }
                    }

                    return renderedFields;
                  })()}

                  {/* Toggle Button for Long Forms */}
                  {formConfig.fields.length > 6 && (
                    <div className="text-center pt-2 border-t border-gray-100">
                      <button
                        type="button"
                        onClick={() => setShowAllFields(!showAllFields)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 mx-auto py-2 px-4 rounded-md hover:bg-blue-50 transition-colors"
                      >
                        {showAllFields ? (
                          <>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                              />
                            </svg>
                            Show Less Fields
                          </>
                        ) : (
                          <>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                            Show All Fields ({formConfig.fields.length})
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2.5 rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>

                {/* Quick Contact */}
                <div className="mt-5 text-center">
                  <p className="text-xs text-gray-400">Need immediate help?</p>
                  <div className="flex gap-4 justify-center mt-2">
                    <a
                      href="tel:+1234567890"
                      className="text-blue-600 hover:text-blue-700 text-xs font-medium"
                    >
                      Call Now
                    </a>
                    <span className="text-gray-300">|</span>
                    <a
                      href="mailto:info@dreamstofly.com"
                      className="text-blue-600 hover:text-blue-700 text-xs font-medium"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* Fallback Image if no form config */
              <div className="relative z-10">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Success Rate</p>
                      <p className="text-xl font-bold text-gray-900">95%+</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      {/* <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-31.76,206.8-58.46,73.84-28.2,138.54,73.6,218.2,46.29,73.84-25.36,145.54-138.75,207-189.61,51.84-43.73,136.53-30.25,175.38,0L1200,120V0Z"
            fill="white"
          />
        </svg>
      </div> */}
    </section>
  );
};

export default ServiceHero;

import React, { useState } from "react";
import { CheckCircle, Send, ArrowRight } from "lucide-react";

const ServiceForm = ({ service, formConfig }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!formConfig) return null;

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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({});
    }, 3000);
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          >
            <option value="">Select {label}</option>
            {options?.map((option, index) => (
              <option key={index} value={option}>
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
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        );
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Your inquiry has been submitted successfully. Our team will get
              back to you within 24 hours.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-sm text-gray-500 mb-2">Reference Number:</p>
              <p className="text-lg font-mono text-gray-900">
                {service.slug.toUpperCase()}-{Date.now().toString().slice(-6)}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {formConfig.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {formConfig.description}
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {formConfig.fields.map((field, index) => (
                  <div
                    key={index}
                    className={field.type === "textarea" ? "md:col-span-2" : ""}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              {/* Additional Info */}
              <div className="text-center pt-4">
                <p className="text-sm text-gray-500">
                  By submitting this form, you agree to our{" "}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need immediate assistance? Contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Send className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <a
                href="mailto:info@dreamstofly.com"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Send className="w-4 h-4" />
                info@dreamstofly.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceForm;

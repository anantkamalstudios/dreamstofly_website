import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronDown, Info } from "lucide-react";

const InternationalMoneyTransferForm = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationality: "",
    destinationCountry: "",
    provider: "",
    email: "",
    countryCode: "+91",
    phone: "",
    paymentMethod: "wire",
    accountAmount: "500 GBP",
    amountToPay: "59747.21 INR + Charges",
    fxRate: "1 GBP = 119.4944 INR",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (method) => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
  };

  const closeModal = () => {
    if (setShowModal) setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert("Money transfer request submitted successfully!");
    closeModal();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300"
        style={{ backdropFilter: "blur(2px)" }}
        onClick={closeModal}
      ></div>

      {/* Modal content */}
      <div
        className="relative z-10 w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 z-10"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Form content */}
        <div className="p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Select destination country
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First name and Last name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Dipika"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Ilag"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Nationality and Destination Country */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Destination Country
                </label>
                <input
                  type="text"
                  name="destinationCountry"
                  value={formData.destinationCountry}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Select Provider */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Select Provider
              </label>
              <div className="relative">
                <select
                  name="provider"
                  value={formData.provider}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a provider</option>
                  <option value="provider1">Provider 1</option>
                  <option value="provider2">Provider 2</option>
                  <option value="provider3">Provider 3</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
              </div>
            </div>

            {/* Email address */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="dipika@gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">Phone</label>
              <div className="flex gap-2">
                <div className="relative w-24">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-full px-2 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-600 pointer-events-none" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="7623439577"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="pt-4">
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                Payment Method
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="wire"
                    checked={formData.paymentMethod === "wire"}
                    onChange={() => handlePaymentMethodChange("wire")}
                    className="w-4 h-4 text-blue-600"
                    required
                  />
                  <span className="text-sm text-gray-900">Wire Transfer</span>
                  <Info className="w-4 h-4 text-gray-400 ml-auto" />
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="agent"
                    checked={formData.paymentMethod === "agent"}
                    onChange={() => handlePaymentMethodChange("agent")}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-900">Agent Assisted</span>
                  <Info className="w-4 h-4 text-gray-400 ml-auto" />
                </label>
              </div>
            </div>

            {/* Payment details */}
            <div className="pt-2 space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">
                  Account Student needs to receive
                </span>
                <span className="font-medium text-gray-900 flex items-center gap-1">
                  <span className="text-xl">🇨🇦</span> {formData.accountAmount}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Amount need to pay</span>
                <span className="font-medium text-gray-900 flex items-center gap-1">
                  {formData.amountToPay}
                  <Info className="w-4 h-4 text-gray-400" />
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">
                  FX rate (Valid for 48 hours)
                </span>
                <span className="font-medium text-gray-900">
                  {formData.fxRate}
                </span>
              </div>
            </div>

            {/* Continue button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Continue"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default InternationalMoneyTransferForm;

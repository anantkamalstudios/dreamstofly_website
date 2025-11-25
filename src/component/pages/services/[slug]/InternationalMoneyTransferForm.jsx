// import React, { useState } from "react";
// import { ChevronDown, Info } from "lucide-react";

// export default function InternationalMoneyTransferForm() {
//   const [form, setForm] = useState({
//     firstName: "Dipika",
//     lastName: "Ilag",
//     nationality: "",
//     destinationCountry: "",
//     provider: "",
//     email: "dipika@gmail.com",
//     countryCode: "+91",
//     phone: "7623439577",
//     paymentMethod: "wire",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", form);
//     alert("Transfer request submitted successfully!");
//   };

//   return (
//     <div className="w-full max-w-2xl">
//       <div className="bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-xl font-semibold text-gray-900 mb-6">
//           Select destination country
//         </h2>

//         <div className="space-y-5">
//           {/* First name and Last name */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm text-gray-700 mb-2">
//                 First name
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={form.firstName}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-700 mb-2">
//                 Last name
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={form.lastName}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>

//           {/* Nationality and Destination Country */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm text-gray-700 mb-2">
//                 Nationality
//               </label>
//               <input
//                 type="text"
//                 name="nationality"
//                 value={form.nationality}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-700 mb-2">
//                 Destination Country
//               </label>
//               <input
//                 type="text"
//                 name="destinationCountry"
//                 value={form.destinationCountry}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>

//           {/* Select Provider */}
//           <div>
//             <label className="block text-sm text-gray-700 mb-2">
//               Select Provider
//             </label>
//             <div className="relative">
//               <select
//                 name="provider"
//                 value={form.provider}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2.5 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
//               >
//                 <option value=""></option>
//                 <option value="provider1">Provider 1</option>
//                 <option value="provider2">Provider 2</option>
//                 <option value="provider3">Provider 3</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
//             </div>
//           </div>

//           {/* Email address */}
//           <div>
//             <label className="block text-sm text-gray-700 mb-2">
//               Email address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm text-gray-700 mb-2">Phone</label>
//             <div className="flex gap-2">
//               <div className="relative w-24">
//                 <select
//                   name="countryCode"
//                   value={form.countryCode}
//                   onChange={handleChange}
//                   className="w-full px-2 py-2.5 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
//                 >
//                   <option value="+91">+91</option>
//                   <option value="+1">+1</option>
//                   <option value="+44">+44</option>
//                   <option value="+86">+86</option>
//                 </select>
//                 <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
//               </div>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={form.phone}
//                 onChange={handleChange}
//                 className="flex-1 px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>

//           {/* Payment Method */}
//           <div className="pt-4">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">
//               Payment Method
//             </h3>
//             <div className="space-y-3">
//               <label className="flex items-center gap-3 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="paymentMethod"
//                   value="wire"
//                   checked={form.paymentMethod === "wire"}
//                   onChange={handleChange}
//                   className="w-4 h-4 text-blue-600 focus:ring-blue-500"
//                 />
//                 <span className="text-sm text-gray-900">Wire Transfer</span>
//                 <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center ml-1">
//                   <Info className="w-3 h-3 text-white" />
//                 </div>
//               </label>
//               <label className="flex items-center gap-3 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="paymentMethod"
//                   value="agent"
//                   checked={form.paymentMethod === "agent"}
//                   onChange={handleChange}
//                   className="w-4 h-4 text-blue-600 focus:ring-blue-500"
//                 />
//                 <span className="text-sm text-gray-900">Agent Assisted</span>
//                 <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center ml-1">
//                   <Info className="w-3 h-3 text-white" />
//                 </div>
//               </label>
//             </div>
//           </div>

//           {/* Payment Details */}
//           <div className="pt-4 space-y-2 text-sm">
//             <div className="flex justify-between items-center">
//               <span className="text-gray-700">
//                 Account Student needs to receive
//               </span>
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl">🇨🇦</span>
//                 <span className="font-medium text-gray-900">500 GBP</span>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-gray-700">Amount need to pay</span>
//               <div className="flex items-center gap-1">
//                 <span className="font-medium text-gray-900">
//                   59747.21 INR + Charges
//                 </span>
//                 <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center ml-1">
//                   <Info className="w-2.5 h-2.5 text-white" />
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-gray-700">
//                 FX rate (Valid for 48 hours)
//               </span>
//               <span className="font-medium text-gray-900">
//                 1 GBP = 119.4944 INR
//               </span>
//             </div>
//           </div>

//           {/* Continue Button */}
//           <div className="pt-6">
//             <button
//               onClick={handleSubmit}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors text-base"
//             >
//               Continue
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
    <>
      {typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto pointer-events-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Select destination country
                </h2>

                <div className="space-y-4">
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
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Phone
                    </label>
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
                        />
                        <span className="text-sm text-gray-900">
                          Wire Transfer
                        </span>
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
                        <span className="text-sm text-gray-900">
                          Agent Assisted
                        </span>
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
                        <span className="text-xl">🇨🇦</span>{" "}
                        {formData.accountAmount}
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
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Processing..." : "Continue"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default InternationalMoneyTransferForm;

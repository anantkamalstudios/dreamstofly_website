// import React, { useState } from "react";

// // Country codes data - default to India (+91)
// const countryCodes = [
//   { code: "+91", country: "India", flag: "🇮🇳" },
//   { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
//   { code: "+44", country: "UK", flag: "🇬🇧" },
//   { code: "+61", country: "Australia", flag: "🇦🇺" },
//   { code: "+49", country: "Germany", flag: "🇩🇪" },
//   { code: "+31", country: "Netherlands", flag: "🇳🇱" },
//   { code: "+353", country: "Ireland", flag: "🇮🇪" },
//   { code: "+64", country: "New Zealand", flag: "🇳🇿" },
//   { code: "+971", country: "UAE", flag: "🇦🇪" },
//   { code: "+65", country: "Singapore", flag: "🇸🇬" },
//   { code: "+86", country: "China", flag: "🇨🇳" },
//   { code: "+81", country: "Japan", flag: "🇯🇵" },
//   { code: "+82", country: "South Korea", flag: "🇰🇷" },
//   { code: "+33", country: "France", flag: "🇫🇷" },
//   { code: "+39", country: "Italy", flag: "🇮🇹" },
//   { code: "+34", country: "Spain", flag: "🇪🇸" },
//   { code: "+7", country: "Russia", flag: "🇷🇺" },
//   { code: "+27", country: "South Africa", flag: "🇿🇦" },
//   { code: "+55", country: "Brazil", flag: "🇧🇷" },
//   { code: "+52", country: "Mexico", flag: "🇲🇽" },
// ];

// const ServiceEnquiryForm = ({ formConfig }) => {
//   const [formData, setFormData] = useState(() => {
//     const initialData = {};
//     formConfig?.fields?.forEach((field) => {
//       if (field.defaultValue !== undefined) {
//         initialData[field.name] = field.defaultValue;
//       }
//     });
//     return initialData;
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [countryCodesState, setCountryCodesState] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleCountryCodeChange = (fieldName, code) => {
//     setCountryCodesState((prev) => ({
//       ...prev,
//       [fieldName]: code,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isSubmitting) return;

//     setIsSubmitting(true);

//     try {
//       const submissionData = { ...formData };
//       formConfig?.fields?.forEach((field) => {
//         if (
//           field.type === "tel" ||
//           (field.type === "phone" && formData[field.name])
//         ) {
//           const countryCode = countryCodesState[field.name] || "+91";
//           submissionData[field.name] = `${countryCode} ${formData[field.name]}`;
//         }
//       });

//       console.log("First Form Data:", submissionData);

//       if (formConfig.onSubmit) {
//         formConfig.onSubmit(submissionData);
//       } else {
//         alert("Form submitted successfully! We'll get back to you soon.");
//       }

//       const resetData = {};
//       formConfig?.fields?.forEach((field) => {
//         if (field.defaultValue !== undefined) {
//           resetData[field.name] = field.defaultValue;
//         }
//       });
//       setFormData(resetData);
//     } catch (error) {
//       console.error("Form submission error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const renderField = (field) => {
//     const { name, label, type, required, options } = field;
//     const hasValue = formData[name] && formData[name].toString().length > 0;

//     switch (type) {
//       case "select":
//         const selectValue = formData[name] || field.defaultValue || "";
//         return (
//           <div className="relative">
//             <select
//               name={name}
//               value={selectValue}
//               onChange={handleInputChange}
//               required={required}
//               className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm appearance-none bg-white peer"
//             >
//               {!field.defaultValue && <option value="">Select option</option>}
//               {options?.map((option, index) => (
//                 <option key={index} value={option} className="text-sm">
//                   {option}
//                 </option>
//               ))}
//             </select>
//             <label className="absolute left-4 top-2 text-xs font-medium text-gray-600 transition-all duration-200">
//               {label}
//             </label>
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
//               <svg
//                 className="w-4 h-4 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </div>
//           </div>
//         );

//       case "textarea":
//         return (
//           <div className="relative">
//             <textarea
//               name={name}
//               value={formData[name] || ""}
//               onChange={handleInputChange}
//               required={required}
//               placeholder=" "
//               rows={3}
//               className="w-full px-4 pt-6 pb-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none peer"
//             />
//             <label
//               className={`absolute left-4 transition-all duration-200 pointer-events-none ${
//                 hasValue
//                   ? "top-2 text-xs text-gray-600"
//                   : "top-4 text-sm text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600"
//               }`}
//             >
//               {label}
//             </label>
//           </div>
//         );

//       case "date":
//         return (
//           <div className="relative">
//             <input
//               type="date"
//               name={name}
//               value={formData[name] || ""}
//               onChange={handleInputChange}
//               required={required}
//               className="w-full px-4 pt-6 pb-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 peer"
//             />
//             <label className="absolute left-4 top-2 text-xs font-medium text-gray-600 transition-all duration-200">
//               {label}
//             </label>
//           </div>
//         );

//       case "time":
//         return (
//           <div className="relative">
//             <input
//               type="time"
//               name={name}
//               value={formData[name] || ""}
//               onChange={handleInputChange}
//               required={required}
//               className="w-full px-4 pt-6 pb-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 peer"
//             />
//             <label className="absolute left-4 top-2 text-xs font-medium text-gray-600 transition-all duration-200">
//               {label}
//             </label>
//           </div>
//         );

//       case "phone":
//       case "tel":
//         return (
//           <div className="relative">
//             <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300">
//               <select
//                 value={countryCodesState[name] || "+91"}
//                 onChange={(e) => handleCountryCodeChange(name, e.target.value)}
//                 className="px-3 py-auto border-r border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
//                 style={{ minWidth: "80px" }}
//               >
//                 {countryCodes.map((country) => (
//                   <option key={country.code} value={country.code}>
//                     {country.flag} {country.code}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="tel"
//                 name={name}
//                 value={formData[name] || ""}
//                 onChange={handleInputChange}
//                 required={required}
//                 placeholder="Phone Number"
//                 className="flex-1 px-4 pt-3 pb-3 text-sm border-0 focus:outline-none focus:ring-0 peer"
//               />
//             </div>
//             {/* <label
//               className={`absolute left-24 transition-all duration-200 pointer-events-none ${
//                 hasValue
//                   ? "top-2 text-xs text-gray-600"
//                   : "top-4 text-sm text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600"
//               }`}
//             >
//               {label} {required && <span className="text-red-500">*</span>}
//             </label> */}
//           </div>
//         );

//       case "number":
//         return (
//           <div className="relative">
//             <input
//               type="number"
//               name={name}
//               value={formData[name] || ""}
//               onChange={handleInputChange}
//               required={required}
//               placeholder=" "
//               className="w-full px-4 pt-6 pb-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 peer"
//             />
//             <label
//               className={`absolute left-4 transition-all duration-200 pointer-events-none ${
//                 hasValue
//                   ? "top-2 text-xs text-gray-600"
//                   : "top-4 text-sm text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600"
//               }`}
//             >
//               {label}
//             </label>
//           </div>
//         );

//       default:
//         return (
//           <div className="relative">
//             <input
//               type={type}
//               name={name}
//               value={formData[name] || ""}
//               onChange={handleInputChange}
//               required={required}
//               placeholder=" "
//               className="w-full px-4 pt-6 pb-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 peer"
//             />
//             <label
//               className={`absolute left-4 transition-all duration-200 pointer-events-none ${
//                 hasValue
//                   ? "top-2 text-xs text-gray-600"
//                   : "top-4 text-sm text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600"
//               }`}
//             >
//               {label}
//             </label>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-xl p-6 lg:p-8 w-full lg:w-[500px]">
//       <div className="text-center mb-2 font-vollkorn">
//         {formConfig.icon && (
//           <div className="mb-3">
//             <img
//               src={formConfig.icon}
//               alt={formConfig.title || "Form Icon"}
//               className="w-12 h-12 object-contain"
//             />
//           </div>
//         )}
//         <h3 className="text-xl font-bold text-gray-900 mb-1 text-left">
//           {formConfig.title || "Enquire Now"}
//         </h3>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4 font-vollkorn">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {formConfig.fields.map((field) => (
//             <div
//               key={field.name}
//               className={`md:col-span-${field.colSpan || 2}`}
//             >
//               {renderField(field)}
//             </div>
//           ))}
//         </div>

//         <div className="pt-1 font-vollkorn">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full flex items-center justify-center px-6 py-2 rounded-md font-semibold text-white transition-all duration-300 ${
//               isSubmitting
//                 ? "bg-blue-400 cursor-not-allowed"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             {isSubmitting ? (
//               "Submitting..."
//             ) : (
//               <>{formConfig.buttonText || "Send Message"}</>
//             )}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ServiceEnquiryForm;

import React, { useState } from "react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCodesState, setCountryCodesState] = useState({});
  const { formData, setFormData } = formConfig;

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (isSubmitting) return;

  //   setIsSubmitting(true);

  //   try {
  //     const submissionData = { ...formData };
  //     formConfig?.fields?.forEach((field) => {
  //       if (
  //         field.type === "tel" ||
  //         (field.type === "phone" && formData[field.name])
  //       ) {
  //         const countryCode = countryCodesState[field.name] || "+91";
  //         submissionData[field.name] = `${countryCode} ${formData[field.name]}`;
  //       }
  //     });

  //     console.log("First Form Data:", submissionData);

  //     if (formConfig.onSubmit) {
  //       formConfig.onSubmit(submissionData);
  //     } else {
  //       alert("Form submitted successfully! We'll get back to you soon.");
  //     }

  //     const resetData = {};
  //     formConfig?.fields?.forEach((field) => {
  //       if (field.defaultValue !== undefined) {
  //         resetData[field.name] = field.defaultValue;
  //       }
  //     });
  //     setFormData(resetData);
  //   } catch (error) {
  //     console.error("Form submission error:", error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const renderField = (field) => {
    const { name, label, type, required, options } = field;
    const hasValue = formData[name] && formData[name].toString().length > 0;

    switch (type) {
      case "select":
        const selectValue = formData[name] || field.defaultValue || "";
        return (
          <div className="relative">
            <select
              name={name}
              value={selectValue}
              onChange={handleInputChange}
              required={required}
              className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm appearance-none bg-white peer"
            >
              {!field.defaultValue && <option value="">Select option</option>}
              {options?.map((option, index) => (
                <option key={index} value={option} className="text-sm">
                  {option}
                </option>
              ))}
            </select>
            <label className="absolute left-4 top-2 text-xs font-medium text-gray-600 transition-all duration-200">
              {label}
            </label>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
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
            </div>
          </div>
        );

      case "textarea":
        return (
          <div className="relative">
            <textarea
              name={name}
              value={formData[name] || ""}
              onChange={handleInputChange}
              required={required}
              placeholder=" "
              rows={3}
              className="w-full px-4 pt-6 pb-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none peer"
            />
            <label
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                hasValue
                  ? "top-2 text-xs text-gray-600"
                  : "top-4 text-sm text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600"
              }`}
            >
              {label}
            </label>
          </div>
        );

      case "date":
        return (
          <div className="relative">
            <input
              type="date"
              name={name}
              value={formData[name] || ""}
              onChange={handleInputChange}
              required={required}
              className="w-full px-4 pt-6 pb-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 peer"
            />
            <label className="absolute left-4 top-2 text-xs font-medium text-gray-600 transition-all duration-200">
              {label}
            </label>
          </div>
        );

      case "time":
        return (
          <div className="relative">
            <input
              type="time"
              name={name}
              value={formData[name] || ""}
              onChange={handleInputChange}
              required={required}
              className="w-full px-4 pt-6 pb-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 peer"
            />
            <label className="absolute left-4 top-2 text-xs font-medium text-gray-600 transition-all duration-200">
              {label}
            </label>
          </div>
        );

      case "phone":
      case "tel":
        return (
          <div className="relative">
            <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300">
              <select
                value={countryCodesState[name] || "+91"}
                onChange={(e) => handleCountryCodeChange(name, e.target.value)}
                className="px-3 py-auto border-r border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
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
                placeholder="Phone Number"
                className="flex-1 px-4 pt-3 pb-3 text-sm border-0 focus:outline-none focus:ring-0 peer"
              />
            </div>
            {/* <label
              className={`absolute left-24 transition-all duration-200 pointer-events-none ${
                hasValue
                  ? "top-2 text-xs text-gray-600"
                  : "top-4 text-sm text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600"
              }`}
            >
              {label} {required && <span className="text-red-500">*</span>}
            </label> */}
          </div>
        );

      case "number":
        return (
          <div className="relative">
            <input
              type="number"
              name={name}
              value={formData[name] || ""}
              onChange={handleInputChange}
              required={required}
              placeholder=" "
              className="w-full px-4 pt-6 pb-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 peer"
            />
            <label
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                hasValue
                  ? "top-2 text-xs text-gray-600"
                  : "top-4 text-sm text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600"
              }`}
            >
              {label}
            </label>
          </div>
        );

      default:
        return (
          <div className="relative">
            <input
              type={type}
              name={name}
              value={formData[name] || ""}
              onChange={handleInputChange}
              required={required}
              placeholder=" "
              className="w-full px-4 pt-6 pb-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 peer"
            />
            <label
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                hasValue
                  ? "top-2 text-xs text-gray-600"
                  : "top-4 text-sm text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600"
              }`}
            >
              {label}
            </label>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 lg:p-8 w-full lg:w-[500px]">
      <div className="text-center mb-2 font-vollkorn">
        {formConfig.icon && (
          <div className="mb-3">
            <img
              src={formConfig.icon}
              alt={formConfig.title || "Form Icon"}
              className="w-12 h-12 object-contain"
            />
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-1 text-left">
          {formConfig.title || "Enquire Now"}
        </h3>
      </div>

      <form
        className="space-y-4 font-vollkorn"
        onSubmit={(e) => {
          e.preventDefault();
          formConfig.onSubmit();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formConfig.fields.map((field) => (
            <div
              key={field.name}
              className={`md:col-span-${field.colSpan || 2}`}
            >
              {renderField(field)}
            </div>
          ))}
        </div>

        <div className="pt-1 font-vollkorn">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center px-6 py-2 rounded-md font-semibold text-white transition-all duration-300 ${
              isSubmitting
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>{formConfig.buttonText || "Send Message"}</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceEnquiryForm;

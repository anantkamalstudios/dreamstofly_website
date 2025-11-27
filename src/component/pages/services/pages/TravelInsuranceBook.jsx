// import React, { useState } from "react";
// import ServiceEnquiryForm from "../[slug]/ServiceEnquiryForm";
// import { useLocation, useNavigate } from "react-router-dom";

// const travelInsuranceBookingForm = {
//   title: "Complete Travel Insurance Form",
//   icon: "/images/formicon/suit.png",
//   description: "Share your trip details and we’ll send tailored plan options.",
//   buttonText: "Submit Request",
//   fields: [
//     {
//       name: "fullName",
//       label: "Full Name",
//       type: "text",
//       required: true,
//     },
//     {
//       name: "email",
//       label: "Email Address",
//       type: "email",
//       required: true,
//       placeholder: "Enter your email",
//     },
//     {
//       name: "phone",
//       label: "Phone Number",
//       type: "tel",
//       required: true,
//       placeholder: "Enter your phone number",
//     },
//     {
//       name: "destinationCountry",
//       label: "Destination Country",
//       type: "text",
//       required: true,
//       placeholder: "Where are you travelling?",
//     },
//     {
//       name: "travelDates",
//       label: "Travel Dates",
//       type: "text",
//       required: true,
//       placeholder: "e.g. 12 May - 28 May 2026",
//     },
//     {
//       name: "coverageType",
//       label: "Coverage Type",
//       type: "select",
//       options: ["Single Trip", "Multi Trip", "Student Plan", "Family Plan"],
//       required: true,
//     },
//     {
//       name: "notes",
//       label: "Additional Notes",
//       type: "textarea",
//       required: false,
//       placeholder: "Any specific requirements?",
//     },
//   ],
// };

// const TravelInsuranceBook = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const initialData = location.state?.formData || {};

//   const handleSubmit = async (formData) => {
//     setIsSubmitting(true);
//     try {
//       // Here you would typically make an API call
//       console.log("Form submitted:", formData);

//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Navigate to success page or show success message
//       alert("Your travel insurance request has been submitted successfully!");
//       navigate("/services/travel-insurance");
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-4">
//       <div className="max-w-5xl mx-auto">
//         <div className="mb-10 text-center">
//           <p className="text-sm uppercase text-blue-600 tracking-[0.2em]">
//             Travel Insurance
//           </p>
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
//             Tell us about your trip
//           </h1>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             Fill in a few quick details and our team will share the best plan
//             for your itinerary, budget, and coverage needs.
//           </p>
//         </div>

//         <div className="flex justify-center">
//           <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 w-full max-w-2xl">
//             <ServiceEnquiryForm
//               formConfig={{
//                 ...travelInsuranceBookingForm,
//                 onSubmit: handleSubmit,
//                 initialData: initialData,
//                 isSubmitting: isSubmitting,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelInsuranceBook;
import React, { useState } from "react";
import { Plane, User, FileText, Calendar } from "lucide-react";

export default function TravelInsuranceBook() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    travelCountry: "United Kingdom",
    planType: "Worldwide Including USA/Canada",
    departureDate: "",
    returnDate: "",
    dateOfBirth: "",
  });

  const steps = [
    { icon: Plane, label: "Travel Details", key: "travel" },
    { icon: User, label: "Choose Plan", key: "plan" },
    { icon: FileText, label: "Traveller Details", key: "traveller" },
    { icon: Calendar, label: "Declarations", key: "declarations" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGetQuote = () => {
    if (
      !formData.departureDate ||
      !formData.returnDate ||
      !formData.dateOfBirth
    ) {
      alert("Please fill in all required fields");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Quote request submitted! Check console for details.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Stepper */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;

              return (
                <React.Fragment key={step.key}>
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : isCompleted
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs md:text-sm font-medium text-center ${
                        isActive ? "text-blue-600" : "text-gray-600"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-2 mt-[-20px] transition-colors ${
                        isCompleted ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Travel Details
          </h2>

          <div className="space-y-6">
            {/* Travel Country and Plan Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="travelCountry"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Select Travel Country
                </label>
                <select
                  id="travelCountry"
                  name="travelCountry"
                  value={formData.travelCountry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Europe</option>
                  <option>Asia</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="planType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Select Plan Type
                </label>
                <select
                  id="planType"
                  name="planType"
                  value={formData.planType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option>Worldwide Including USA/Canada</option>
                  <option>Worldwide Excluding USA/Canada</option>
                  <option>Europe Only</option>
                  <option>UK Only</option>
                </select>
              </div>
            </div>

            {/* Departure and Return Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="departureDate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Date of Departure
                </label>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="returnDate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Date of Return
                </label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleGetQuote}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg transition-colors focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              Get Quote
            </button>
          </div>
        </div>

        {/* Form Data Display (for demonstration) */}
        <div className="mt-6 bg-gray-100 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Form Tracking Data:
          </h3>
          <pre className="text-xs text-gray-600 overflow-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
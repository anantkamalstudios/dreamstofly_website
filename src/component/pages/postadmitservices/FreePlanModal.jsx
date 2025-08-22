import React from "react";
import { X } from "lucide-react";

const FreePlanModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Free Services Plan
        </h2>
        <p className="text-gray-600 mb-4">
          Thank you for choosing our Free Services with Counselling plan. 🎉
          You will receive:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Visa Counselling</li>
          <li>Loan Documents Review & Support</li>
          <li>Accommodation Securing Support</li>
        </ul>

        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default FreePlanModal;

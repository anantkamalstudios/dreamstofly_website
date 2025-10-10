import React from "react";
import { X, Phone, FileText, House } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PremiumPlanModal = ({ onClose }) => {
  const features = [
    {
      icon: <Phone className="w-5 h-5 text-blue-600" />,
      text: "Visa Counselling with Mock Interviews",
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      text: "Vicinity-based Accommodation Guidance",
    },
    {
      icon: <House className="w-5 h-5 text-blue-600" />,
      text: "Cultural Mentor Abroad Assistance",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl w-[90%] sm:w-[85%] md:max-w-lg p-6 relative overflow-hidden flex flex-col gap-3"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Title */}
          <h3 className="text-2xl font-medium text-black mb-2 flex items-center gap-2">
            Premium Services Plan
          </h3>
          <p className="text-black mb-10">
            Thank you for choosing our Premium Counselling Plan.
            <br /> 🚀 You’re on your way to success!
          </p>

          {/* Features List */}
          <div className="space-y-5 mb-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg shadow-sm"
              >
                {f.icon}
                <span className="text-gray-700">{f.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Action Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-3xl font-semibold shadow-md hover:shadow-xl transition"
          >
            Proceed to Dashboard
          </motion.button>

          {/* Footer */}
          <div className="text-center text-xs text-black mt-4">
            Need help?{" "}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              Contact Support
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PremiumPlanModal;

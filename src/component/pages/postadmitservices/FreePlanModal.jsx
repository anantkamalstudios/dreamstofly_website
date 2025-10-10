import React, { useEffect } from "react";
import {
  X,
  Shield,
  FileText,
  Home,
  PartyPopper,
  Phone,
  House,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FreePlanModal = ({ onClose }) => {
  const features = [
    {
      icon: <Phone className="w-5 h-5 text-blue-600" />,
      text: "Visa Counselling",
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      text: "Loan Documents Review & Support",
    },
    {
      icon: <House className="w-5 h-5 text-blue-600" />,
      text: "Accommodation Securing Support",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 gap-2 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal Box */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative overflow-hidden flex flex-col gap-3"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          {/* Floating Confetti 🎉
          <div className="absolute -top-4 -right-4 text-5xl animate-bounce">
            🎉
          </div>
          <div className="absolute -bottom-4 -left-4 text-4xl animate-spin-slow">
            ✨
          </div> */}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Title */}
          <h3 className="text-2xl font-medium text-black mb-2 flex items-center gap-2">
            Free Services Plan
          </h3>
          <p className="text-black mb-10">
            Thank you for choosing our{" "}
            <span className="font-medium">Free Counselling Plan</span>. You’re
            on your way to success! 🚀
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
                <span className="text-medium">{f.text}</span>
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

export default FreePlanModal;

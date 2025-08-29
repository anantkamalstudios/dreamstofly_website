import React from "react";
import { X, Shield, FileText, Home, PartyPopper } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FreePlanModal = ({ onClose }) => {
  const features = [
    { icon: <Shield className="w-5 h-5 text-blue-600" />, text: "Visa Counselling" },
    { icon: <FileText className="w-5 h-5 text-blue-600" />, text: "Loan Documents Review & Support" },
    { icon: <Home className="w-5 h-5 text-blue-600" />, text: "Accommodation Securing Support" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal Box */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative overflow-hidden"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          {/* Floating Confetti 🎉 */}
          <div className="absolute -top-4 -right-4 text-5xl animate-bounce">🎉</div>
          <div className="absolute -bottom-4 -left-4 text-4xl animate-spin-slow">✨</div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Title */}
          <h2 className="text-2xl font-extrabold text-blue-600 mb-2 flex items-center gap-2">
            <PartyPopper className="w-6 h-6 text-yellow-500" />
            Free Services Plan
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing our <span className="font-medium">Free Counselling Plan</span>. 
            You’re on your way to success! 🚀
          </p>

          {/* Features List */}
          <div className="space-y-3 mb-6">
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
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition"
          >
            Proceed to Dashboard
          </motion.button>

          {/* Footer */}
          <div className="text-center text-xs text-gray-400 mt-4">
            Need help? <a href="tel:+1234567890" className="text-blue-600 hover:underline">Contact Support</a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FreePlanModal;

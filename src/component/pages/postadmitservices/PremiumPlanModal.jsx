import React from "react";
import { X, CheckCircle } from "lucide-react";
import axios from "axios";

const PremiumPlanModal = ({ onClose }) => {
  const features = [
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: "Visa counselling with mock interviews",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: "Loan documents procurement support and guidance on securing best interest rates",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: "Cultural Mentor Abroad to provide detailed guidance on accommodation selection",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: "Ensuring vicinity of the accommodation to university & essential facilities",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: "Checking accessibility to supermarket, public transport, and university",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: "Cross-checking legal documents of accommodation and securing best deals",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: "Helping students manage utility bills like water, electricity, gas, etc. during the first month",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: "Providing a video tour of accommodation to help students choose based on preference",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: "Airport meet & greet and helping students reach university and settle safely",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: "Helping students in medical emergency situations with guidance over call",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      text: "Providing emergency support in critical conditions — valid for 1 month",
    },
  ];

  const handleProceed = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/premium/razorpay_pay`,
        { pay_id: 2 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(res);
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: 10000,
        currency: "INR",
        name: "DreamsToFly",
        description: "Payment",
        order_id: orderId,

        prefill: {},

        handler: async function (response) {
          await axios.post(
            `${import.meta.env.VITE_BASE_URL}/premium/razorpay_callback`,
            {
              response,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        },

        modal: {
          ondismiss: function () {
            console.log("Payment Cancelled");
          },
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] sm:w-[85%] md:max-w-lg relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-6 flex flex-col gap-3">
          {/* Title */}
          <h3 className="text-2xl font-medium text-black mb-2 flex items-center gap-2">
            Premium Services Plan
          </h3>
          <p className="text-black mb-10">
            Thank you for choosing our Premium Counselling Plan.
            <br /> 🚀 You're on your way to success!
          </p>

          {/* Features List */}
          <div className="space-y-5 mb-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg shadow-sm hover:scale-105 transition-transform"
              >
                {f.icon}
                <span className="text-gray-700">{f.text}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <button
            onClick={handleProceed}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-3xl font-semibold shadow-md hover:shadow-xl transition hover:scale-105"
          >
            Proceed to Dashboard
          </button>

          {/* Footer */}
          <div className="text-center text-xs text-black mt-4">
            Need help?{" "}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPlanModal;

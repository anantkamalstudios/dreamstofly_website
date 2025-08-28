import React, { useState } from "react";
import { X, Key } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OtpModal = ({ isOpen, onClose }) => {
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("enter"); // "enter" | "error"
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      navigate("/"); // ✅ instantly go to home
      onClose();     // ✅ close modal
    } else {
      setStep("error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* OTP Form */}
        {step === "enter" && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Verify OTP
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Enter the 6-digit OTP sent to your email
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative group">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  maxLength={6}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl 
                  focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 
                  transition-all duration-200 hover:bg-white/80 text-center tracking-widest font-mono"
                />
              </div>

              {/* Error message */}
              {step === "error" && (
                <p className="text-red-500 text-sm text-center">
                  Invalid OTP. Try again.
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 
                bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:scale-[1.02] hover:shadow-lg"
              >
                Verify OTP
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default OtpModal;

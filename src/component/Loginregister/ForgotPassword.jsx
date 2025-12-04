import React, { useState, useEffect } from "react";
import { Mail, ArrowLeft, Send, Sparkles, Lock } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [currentText, setCurrentText] = useState("");
  const navigate = useNavigate();

  // const phrases = ["Password", "Access", "Account", "Security"];
  // const [phraseIndex, setPhraseIndex] = useState(0);
  // const [charIndex, setCharIndex] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  const [slide, setSlide] = useState(0);

  // useEffect(() => {
  //   const timeout = setTimeout(
  //     () => {
  //       const currentPhrase = phrases[phraseIndex];
  //       if (!isDeleting) {
  //         if (charIndex < currentPhrase.length) {
  //           setCurrentText(currentPhrase.substring(0, charIndex + 1));
  //           setCharIndex(charIndex + 1);
  //         } else {
  //           setTimeout(() => setIsDeleting(true), 2000);
  //         }
  //       } else {
  //         if (charIndex > 0) {
  //           setCurrentText(currentPhrase.substring(0, charIndex - 1));
  //           setCharIndex(charIndex - 1);
  //         } else {
  //           setIsDeleting(false);
  //           setPhraseIndex((phraseIndex + 1) % phrases.length);
  //         }
  //       }
  //     },
  //     isDeleting ? 50 : 100
  //   );
  //   return () => clearTimeout(timeout);
  // }, [charIndex, isDeleting, phraseIndex]);

  const images = [
    "https://cdn-icons-png.flaticon.com/512/295/295128.png",
    "https://cdn-icons-png.flaticon.com/512/542/542638.png",
    "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSendOTP = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "https://devlopment.dreamstofly.com/users/send_otp_api",
        { email }
      );

      if (!response.status_code === 200) throw new Error("Failed to send OTP");
      setStep(2);
    } catch (error) {
      setError(error.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      setLoading(true);
      setError("");
      const otpCode = otp.join("");

      const response = await axios.post(
        "https://devlopment.dreamstofly.com/users/verify_otp_api",
        {
          email,
          otp: otpCode,
        }
      );

      if (!response.status_code === 200) throw new Error("Invalid OTP");

      setStep(3);
    } catch (error) {
      setError(error.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async () => {
    try {
      if (newPassword !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      if (newPassword.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      setLoading(true);
      setError("");
      const response = await axios.post(
        "https://devlopment.dreamstofly.com/users/reset_password_api",
        {
          email,
          new_password: newPassword,
        }
      );

      if (!response.status_code === 200)
        throw new Error("Failed to change password");
      navigate("/login");
    } catch (error) {
      setError(error.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value[0];
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split("").concat(Array(6).fill("")).slice(0, 6);
    setOtp(newOtp);
  };

  // Handle OTP backspace
  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50 flex items-center justify-center px-4 py-8">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Left: Image Slider */}
        <div className="relative hidden md:flex items-center justify-center bg-blue-50 p-8">
          <img
            src={images[slide]}
            alt="Forgot password illustration"
            className="w-3/4 h-3/4 object-contain transition-all duration-700 ease-in-out"
          />
          {/* Slider dots */}
          <div className="absolute bottom-6 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === slide ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-6 sm:p-8 md:p-10">
          <div className="text-center mb-6 sm:mb-8">
            {/* <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-1 shadow-sm text-sm font-medium text-gray-700">
              <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
              Password Recovery
            </div> */}
            {/* <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-4">
              {step === 1 && "Reset Your"}
              {step === 2 && "Verify"}
              {step === 3 && "Create New"}
              <span className="block text-blue-600 min-h-[1.5em]">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h1> */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-4">
              {step === 1 && "Reset Your"}
              {step === 2 && "Verify"}
              {step === 3 && "Create New"}

              <span className="block text-blue-600 min-h-[1.5em]">
                {step === 1 && "Password"}
                {step === 2 && "OTP"}
                {step === 3 && "Password"}
                {/* <span className="animate-pulse">|</span> */}
              </span>
            </h1>

            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {step === 1 &&
                "Enter your email address and we'll send you an OTP to reset your password"}
              {step === 2 && "Enter the 6-digit OTP sent to your email"}
              {step === 3 && "Enter your new password to complete the reset"}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Step 1: Email Input */}
          {step === 1 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <button
                onClick={handleSendOTP}
                disabled={loading || !email}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? "Sending..." : "Send OTP"}
                <Send className="w-4 h-4" />
              </button>

              <div className="text-center">
                <button
                  onClick={() => navigate("/login")}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Log In
                </button>
              </div>
            </div>
          )}

          {/* Step 2: OTP Verification */}
          {step === 2 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4 sm:mb-6">
                <p className="text-sm text-blue-700 text-center break-all">
                  OTP sent to <span className="font-semibold">{email}</span>
                </p>
              </div>

              <div
                className="flex gap-2 justify-center flex-wrap sm:flex-nowrap"
                onPaste={handleOtpPaste}
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-10 h-10 sm:w-12 sm:h-12 text-center text-xl font-bold bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                ))}
              </div>

              <button
                onClick={handleVerifyOTP}
                disabled={loading || otp.some((d) => !d)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? "Verifying..." : "Verify OTP"}
                <Send className="w-4 h-4" />
              </button>

              <div className="text-center space-y-2">
                <button
                  onClick={() => {
                    setStep(1);
                    setOtp(["", "", "", "", "", ""]);
                    setError("");
                  }}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Resend OTP
                </button>
                <div>
                  <button
                    onClick={() => navigate("/login")}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Log In
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: New Password */}
          {step === 3 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>

              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <button
                onClick={handleChangePassword}
                disabled={loading || !newPassword || !confirmPassword}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? "Changing..." : "Change Password"}
                <Send className="w-4 h-4" />
              </button>

              <div className="text-center">
                <button
                  onClick={() => navigate("/login")}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Log In
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

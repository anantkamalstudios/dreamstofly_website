import React, { useState, useEffect } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import OtpModal from "./OtpModal";

const LoginRegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error states
  const [emailError, setEmailError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Animated header text
  const phrases = ["Success", "Dreams", "Achievement", "Excellence"];
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[phraseIndex];
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  // Email validation
  const validateEmail = (value) => {
    setEmail(value);
    if (!value.includes("@") || !value.includes(".")) {
      setEmailError("Invalid email address. Must contain '@' and '.'");
    } else {
      setEmailError("");
    }
  };

  // Password strength check
  const checkPasswordStrength = (value) => {
    setPassword(value);
    if (value.length < 6) {
      setPasswordStrength("Weak (min 6 characters)");
    } else if (!/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
      setPasswordStrength("Medium (add uppercase & numbers)");
    } else {
      setPasswordStrength("Strong password ✅");
    }
  };

  // Confirm password match
  const checkConfirmPassword = (value) => {
    setConfirmPassword(value);
    if (password && value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const isFormValid =
    fullName &&
    email &&
    password &&
    confirmPassword &&
    !emailError &&
    !confirmPasswordError &&
    passwordStrength.startsWith("Strong");

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setShowOtpModal(true);
    }
  };

  // ------------------- Image Slider -------------------
  const slides = [
    "https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1328.jpg",
    "https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7863.jpg",
    "https://img.freepik.com/free-vector/email-campaign-concept-illustration_114360-1686.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50/50 px-4">
      {/* Card Container */}
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left: Image Slider */}
        <div className="relative w-full md:w-1/2 h-72 md:h-auto">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Signup Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1 mb-3 text-sm font-medium text-gray-700">
              <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
              Join Us Today
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Start Your Journey to
              <span className="block text-blue-600">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </div>

          <form className="space-y-5" onSubmit={handleCreateAccount}>
            {/* Full Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                placeholder="Email Address"
                required
                className={`w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                  emailError ? "border-red-500" : "border-gray-200"
                }`}
              />
            </div>
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => checkPasswordStrength(e.target.value)}
                placeholder="Create Password"
                required
                className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {password && (
              <p
                className={`text-sm ${
                  passwordStrength.includes("Weak")
                    ? "text-red-500"
                    : passwordStrength.includes("Medium")
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                {passwordStrength}
              </p>
            )}

            {/* Confirm Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => checkConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
                className={`w-full pl-12 pr-12 py-3 bg-gray-50 border rounded-xl ${
                  confirmPasswordError ? "border-red-500" : "border-gray-200"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {confirmPasswordError && (
              <p className="text-red-500 text-sm">{confirmPasswordError}</p>
            )}

            {/* Terms */}
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="w-4 h-4 mt-1" required />
              <span className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 ${
                isFormValid
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:scale-[1.02]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Create Account
              <CheckCircle className="w-4 h-4" />
            </button>

            {/* Switch */}
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* OTP Modal */}
      <OtpModal isOpen={showOtpModal} onClose={() => setShowOtpModal(false)} />
    </div>
  );
};

export default LoginRegisterPage;

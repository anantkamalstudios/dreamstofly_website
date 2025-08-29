import React, { useState, useEffect } from "react";
import { Mail, ArrowLeft, Send, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [currentText, setCurrentText] = useState("");

  const phrases = ["Password", "Access", "Account", "Security"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [slide, setSlide] = useState(0);

  // ✅ Typing Effect
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentPhrase = phrases[phraseIndex];
        if (!isDeleting) {
          if (charIndex < currentPhrase.length) {
            setCurrentText(currentPhrase.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCurrentText(currentPhrase.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setPhraseIndex((phraseIndex + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  // ✅ Image slider effect
  const images = [
    "https://cdn-icons-png.flaticon.com/512/295/295128.png", // Email illustration
    "https://cdn-icons-png.flaticon.com/512/542/542638.png", // Forgot password illustration
    "https://cdn-icons-png.flaticon.com/512/3064/3064197.png", // Reset security illustration
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    setEmailSent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Left: Image Slider */}
        <div className="relative hidden md:flex items-center justify-center bg-blue-50">
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
                className={`w-3 h-3 rounded-full ${
                  i === slide ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-1 shadow-sm text-sm font-medium text-gray-700">
              <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
              Password Recovery
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-4">
              Reset Your
              <span className="block text-blue-600 min-h-[1.5em]">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-gray-600 mt-2">
              {emailSent
                ? "Check your email for password reset instructions"
                : "Enter your email address and we'll send you a link to reset your password"}
            </p>
          </div>

          {!emailSent ? (
            <div className="space-y-6">
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                Send Reset Link
                <Send className="w-4 h-4" />
              </button>

              <div className="text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Log In
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Email Sent Successfully!
              </h3>
              <p className="text-gray-600">
                We've sent password reset instructions to your email address.
                Please check your inbox and follow the link.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                <p className="text-sm text-blue-700">
                  Didn’t get it?{" "}
                  <button
                    onClick={() => setEmailSent(false)}
                    className="ml-1 text-blue-600 hover:underline"
                  >
                    Try again
                  </button>
                </p>
              </div>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Log In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;

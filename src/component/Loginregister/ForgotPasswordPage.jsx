import React, { useState, useEffect } from 'react';
import { Mail, ArrowLeft, Send, Sparkles } from 'lucide-react';

const ForgotPasswordPage = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [currentText, setCurrentText] = useState('');
  
  const phrases = ['Password', 'Access', 'Account', 'Security'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
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
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const handleSubmit = () => {
    setEmailSent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
      {/* Header Section */}
      <section className="relative pt-16 pb-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-1 mb-6 shadow-sm text-sm font-medium text-gray-700">
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
            Password Recovery
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Reset Your
            <span className="block text-blue-600 min-h-[1.5em]">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            {emailSent 
              ? "Check your email for password reset instructions"
              : "Enter your email address and we'll send you a link to reset your password"
            }
          </p>
        </div>
      </section>

      {/* Forgot Password Form */}
      <div className="max-w-md mx-auto px-6 pb-16">
        <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/90">
          {!emailSent ? (
            <div className="space-y-6">
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 hover:bg-white/80"
                />
              </div>

              <button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                Send Reset Link
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <div className="text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Sign In
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Email Sent Successfully!</h3>
                <p className="text-gray-600 leading-relaxed">
                  We've sent password reset instructions to your email address. 
                  Please check your inbox and follow the link to reset your password.
                </p>
              </div>

              <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>Didn't receive the email?</strong> Check your spam folder or 
                  <button 
                    onClick={() => setEmailSent(false)}
                    className="ml-1 text-blue-600 hover:text-blue-800 font-medium hover:underline"
                  >
                    try again
                  </button>
                </p>
              </div>

              <div className="pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Sign In
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-blue-100/30 rounded-full blur-xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 right-20 w-16 h-16 bg-blue-300/20 rounded-full blur-lg animate-pulse delay-500"></div>
    </div>
  );
};

export default ForgotPasswordPage;
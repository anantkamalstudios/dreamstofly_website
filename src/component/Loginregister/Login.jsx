import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentText, setCurrentText] = useState('');

  // Typing effect
  const phrases = ['Success', 'Dreams', 'Achievement', 'Excellence'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Form state
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Slider state
  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80"
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4s
    return () => clearInterval(slider);
  }, []);

  // Typing effect
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

  // Email validation
  const handleEmailChange = (value) => {
    setEmail(value);
    if (!value.includes("@") || !value.includes(".")) {
      setEmailError("Invalid email. Must contain '@' and '.'");
    } else {
      setEmailError("");
    }
  };

  // Password validation
  const handlePasswordChange = (value) => {
    setPassword(value);
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError && email && password) {
      alert(`Login successful!\nEmail: ${email}`);
    }
  };

  const isFormValid = email && password && !emailError && !passwordError;

<<<<<<< HEAD
                                    {/* Password Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                value={formData.password}
                                                onChange={(e) => handleInputChange('password', e.target.value)}
                                                className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-#08dceb-500 focus:border-#08dceb-500 outline-none transition-colors ${errors.password ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter your password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <div className="flex items-center space-x-1 mt-1">
                                                <AlertCircle className="w-4 h-4 text-red-500" />
                                                <span className="text-sm text-red-500">{errors.password}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between text-sm">
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" className="rounded border-gray-300 text-#08dceb-600 focus:ring-#08dceb-500" />
                                            <span className="text-gray-600">Remember me</span>
                                        </label>
                                        <button type="button" className="text-#08dceb-600 hover:text-#08dceb-700 font-medium">
                                            Forgot Password?
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Phone Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-#08dceb-500 focus:border-#08dceb-500 outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter 10-digit phone number"
                                                maxLength="10"
                                            />
                                        </div>
                                        {errors.phone && (
                                            <div className="flex items-center space-x-1 mt-1">
                                                <AlertCircle className="w-4 h-4 text-red-500" />
                                                <span className="text-sm text-red-500">{errors.phone}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* OTP Input */}
                                    {isOtpSent && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Enter OTP
                                            </label>
                                            <div className="flex space-x-2 mb-2">
                                                {formData.otp.map((digit, index) => (
                                                    <input
                                                        key={index}
                                                        id={`otp-${index}`}
                                                        type="text"
                                                        value={digit}
                                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                                        className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-#08dceb-500 focus:border-#08dceb-500 outline-none font-semibold text-lg"
                                                        maxLength="1"
                                                    />
                                                ))}
                                            </div>
                                            {errors.otp && (
                                                <div className="flex items-center space-x-1 mb-2">
                                                    <AlertCircle className="w-4 h-4 text-red-500" />
                                                    <span className="text-sm text-red-500">{errors.otp}</span>
                                                </div>
                                            )}
                                            <div className="text-sm text-gray-600">
                                                Didn't receive OTP?
                                                <button type="button" className="text-#08dceb-600 hover:text-#08dceb-700 font-medium ml-1">
                                                    Resend in 30s
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className="w-full bg-blue-700 hover:from-blue-300 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        {loginMethod === 'otp' && !isOtpSent ? (
                                            <>
                                                <Smartphone className="w-5 h-5" />
                                                <span>Send OTP</span>
                                            </>
                                        ) : (
                                            <>
                                                <KeyRound className="w-5 h-5" />
                                                <span>Sign In</span>
                                            </>
                                        )}
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                        <div className="flex items-center mb-4">
                            <div className="flex-1 border-t border-gray-300"></div>
                            <span className="px-4 text-sm text-gray-500">Or continue with</span>
                            <div className="flex-1 border-t border-gray-300"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <Chrome className="w-5 h-5 text-red-500" />
                                <span className="font-medium text-gray-700">Google</span>
                            </button>
                            <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <Facebook className="w-5 h-5 text-blue-600" />
                                <span className="font-medium text-gray-700">Facebook</span>
                            </button>
                        </div>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center">
                        <p className="text-gray-600">
                            Don't have an account?
                            <Link to={"/register"}>
                                <button className="text-blue-600 hover:text-blue-700 font-semibold ml-1">
                                    Sign up here
                                </button>
                            </Link>

                        </p>
                    </div>
                </div>
            </div>
=======
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50/50 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left - Slider */}
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full transition-all duration-500 ${
                  idx === currentImage ? "bg-white w-4" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
>>>>>>> a1c0cf687bac9b4a4838fa83ac06415152e1e079
        </div>

        {/* Right - Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
          <section className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-1 mb-4 shadow-sm text-sm font-medium text-gray-700">
              <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
              Welcome Back
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Login to Your
              <span className="block text-blue-600 min-h-[1.5em]">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              Access your personalized learning dashboard and continue your journey
            </p>
          </section>

          <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-xl shadow p-6 hover:shadow-lg transition-all duration-300 hover:bg-white/90"
          >
            <div className="space-y-6">
              {/* Email */}
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full pl-12 pr-4 py-3 bg-gray-50/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 hover:bg-white/80 ${emailError ? "border-red-500" : "border-gray-200"}`}
                />
              </div>
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

              {/* Password */}
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  placeholder="Enter your password"
                  className={`w-full pl-12 pr-12 py-3 bg-gray-50/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 hover:bg-white/80 ${passwordError ? "border-red-500" : "border-gray-200"}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800">Remember me</span>
                </label>
                <Link 
                  to="/Forget-Password" 
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 group transition-all duration-300 
                  ${isFormValid
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transform hover:scale-[1.02] hover:shadow-lg"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
              >
                Log In
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              {/* Sign Up */}
              <div className="text-center">
                <span className="text-gray-600">Don't have an account? </span>
                <Link 
                  to="/register" 
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

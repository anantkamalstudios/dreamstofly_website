import React, { useState, useEffect } from 'react';
import { Mail, ArrowLeft, Send, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";

const Register = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [currentText, setCurrentText] = useState('');
  
  const phrases = ['Password', 'Access', 'Account', 'Security'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [slide, setSlide] = useState(0);

  // ✅ Typing Effect
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

<<<<<<< HEAD
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(2);
        }
    };

    const handleSubmit = async () => {
        if (!validateStep(2)) return;

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Sign up successful', formData);
            setIsLoading(false);
            // Handle success
        }, 2000);
    };

    const getPasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        if (strength <= 2) return { level: 'weak', color: 'bg-red-500', text: 'Weak' };
        if (strength <= 3) return { level: 'medium', color: 'bg-yellow-500', text: 'Medium' };
        return { level: 'strong', color: 'bg-green-500', text: 'Strong' };
    };

    const passwordStrength = getPasswordStrength(formData.password);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="flex items-center justify-center p-4 min-h-[calc(100vh-80px)]">
                <div className="w-full max-w-md">
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex items-center space-x-4">
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${currentStep >= 1 ? 'bg-blue-300 text-white' : 'bg-gray-200 text-gray-600'
                                }`}>
                                {currentStep > 1 ? <Check className="w-5 h-5" /> : '1'}
                            </div>
                            <div className={`w-12 h-1 rounded transition-all duration-300 ${currentStep > 1 ? 'bg-[#08dceb]' : 'bg-gray-200'
                                }`}></div>
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${currentStep >= 2 ? 'bg-blue-300 text-white' : 'bg-gray-200 text-gray-600'
                                }`}>
                                2
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-gradient-to-r from-#08dceb-300 to-#08dceb-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <User className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Join Dreams To Fly</h1>
                        <p className="text-gray-600">
                            {currentStep === 1 ? 'Create your account to get started' : 'Complete your profile setup'}
                        </p>
                    </div>

                    {/* Form Container */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                        {currentStep === 1 ? (
                            /* Step 1: Basic Information */
                            <div className="space-y-6">
                                <div className="text-center mb-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h2>
                                    <p className="text-gray-600 text-sm">Tell us about yourself</p>
                                </div>

                                {/* Name Fields */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <input
                                                type="text"
                                                value={formData.firstName}
                                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-#08dceb-500 focus:border-#08dceb-500 outline-none transition-all ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="First name"
                                            />
                                        </div>
                                        {errors.firstName && (
                                            <div className="flex items-center space-x-1 mt-2">
                                                <AlertCircle className="w-4 h-4 text-red-500" />
                                                <span className="text-sm text-red-500">{errors.firstName}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <input
                                                type="text"
                                                value={formData.lastName}
                                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-#08dceb-500 focus:border-#08dceb-500 outline-none transition-all ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Last name"
                                            />
                                        </div>
                                        {errors.lastName && (
                                            <div className="flex items-center space-x-1 mt-2">
                                                <AlertCircle className="w-4 h-4 text-red-500" />
                                                <span className="text-sm text-red-500">{errors.lastName}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Username */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Username *
                                    </label>
                                    <div className="relative">
                                        <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            value={formData.username}
                                            onChange={(e) => handleInputChange('username', e.target.value.toLowerCase())}
                                            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-#08dceb-500 focus:border-#08dceb-500 outline-none transition-all ${errors.username ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Choose a unique username"
                                        />
                                    </div>
                                    {errors.username && (
                                        <div className="flex items-center space-x-1 mt-2">
                                            <AlertCircle className="w-4 h-4 text-red-500" />
                                            <span className="text-sm text-red-500">{errors.username}</span>
                                        </div>
                                    )}
                                    <p className="text-xs text-gray-500 mt-1">
                                        Only letters, numbers, and underscores allowed
                                    </p>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-#08dceb-500 focus:border-#08dceb-500 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                    {errors.email && (
                                        <div className="flex items-center space-x-1 mt-2">
                                            <AlertCircle className="w-4 h-4 text-red-500" />
                                            <span className="text-sm text-red-500">{errors.email}</span>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={handleNext}
                                    className="w-full bg-gradient-to-r from-#08dceb-200 to-#08dceb-600 hover:from-#08dceb-300 hover:to-#08dceb-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
                                >
                                    <span>Continue</span>
                                    <ArrowLeft className="w-5 h-5 rotate-180" />
                                </button>
                            </div>
                        ) : (
                            /* Step 2: Contact & Security */
                            <div className="space-y-6">
                                <div className="text-center mb-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact & Security</h2>
                                    <p className="text-gray-600 text-sm">Setup your contact details and password</p>
                                </div>

                                {/* Country Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Country *
                                    </label>
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                            className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-#08dceb-500 focus:border-#08dceb-500 outline-none transition-all bg-white"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <Globe className="w-5 h-5 text-gray-400" />
                                                <span className="text-lg">{selectedCountry?.flag}</span>
                                                <span className="text-gray-700 font-medium">{selectedCountry?.short}</span>
                                                <span className="text-gray-500">({selectedCountry?.dialCode})</span>
                                            </div>
                                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''
                                                }`} />
                                        </button>

                                        {/* Country Dropdown */}
                                        {isCountryDropdownOpen && (
                                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                                                {countries.map((country) => (
                                                    <button
                                                        key={country.code}
                                                        onClick={() => handleCountrySelect(country)}
                                                        className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors text-left"
                                                    >
                                                        <span className="text-lg">{country.flag}</span>
                                                        <span className="font-medium">{country.short}</span>
                                                        <span className="text-gray-500">({country.dialCode})</span>
                                                        <span className="flex-1 text-gray-700">{country.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Mobile Number */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Mobile Number *
                                    </label>
                                    <div className="flex space-x-2">
                                        <div className="flex items-center px-3 py-3 border border-gray-300 rounded-xl bg-gray-50 min-w-0">
                                            <span className="text-lg mr-2">{selectedCountry?.flag}</span>
                                            <span className="text-gray-700 font-medium whitespace-nowrap">{selectedCountry?.dialCode}</span>
                                        </div>
                                        <div className="flex-1 relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <input
                                                type="tel"
                                                value={formData.mobile}
                                                onChange={(e) => handleInputChange('mobile', e.target.value)}
                                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-#08dceb-500 focus:border-#08dceb-500 outline-none transition-all ${errors.mobile ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Mobile number"
                                            />
                                        </div>
                                    </div>
                                    {errors.mobile && (
                                        <div className="flex items-center space-x-1 mt-2">
                                            <AlertCircle className="w-4 h-4 text-red-500" />
                                            <span className="text-sm text-red-500">{errors.mobile}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Password *
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={formData.password}
                                            onChange={(e) => handleInputChange('password', e.target.value)}
                                            className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-#08dceb-500 focus:border-#08dceb-500 outline-none transition-all ${errors.password ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Create a strong password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>

                                    {/* Password Strength */}
                                    {formData.password && (
                                        <div className="mt-2">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                    <div className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.level === 'weak' ? 'w-1/3' :
                                                        passwordStrength.level === 'medium' ? 'w-2/3' : 'w-full'
                                                        } ${passwordStrength.color}`}></div>
                                                </div>
                                                <span className={`text-sm font-medium ${passwordStrength.level === 'weak' ? 'text-red-500' :
                                                    passwordStrength.level === 'medium' ? 'text-yellow-500' : 'text-green-500'
                                                    }`}>
                                                    {passwordStrength.text}
                                                </span>
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                Password must contain uppercase, lowercase, number and be 8+ characters
                                            </div>
                                        </div>
                                    )}

                                    {errors.password && (
                                        <div className="flex items-center space-x-1 mt-2">
                                            <AlertCircle className="w-4 h-4 text-red-500" />
                                            <span className="text-sm text-red-500">{errors.password}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Confirm Password */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirm Password *
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            value={formData.confirmPassword}
                                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                            className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-#08dceb-500 focus:border-#08dceb-500 outline-none transition-all ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Confirm your password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && (
                                        <div className="flex items-center space-x-1 mt-2">
                                            <AlertCircle className="w-4 h-4 text-red-500" />
                                            <span className="text-sm text-red-500">{errors.confirmPassword}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Referral Code */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Referral Code (Optional)
                                    </label>
                                    <div className="relative">
                                        <Gift className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            value={formData.referralCode}
                                            onChange={(e) => handleInputChange('referralCode', e.target.value.toUpperCase())}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-#08dceb-500 focus:border-#08dceb-500 outline-none transition-all"
                                            placeholder="Enter referral code"
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        🎁 Get special benefits with a referral code
                                    </p>
                                </div>

                                {/* Terms */}
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <label className="flex items-start space-x-3 cursor-pointer">
                                        <input type="checkbox" className="mt-1 rounded border-gray-300 text-#08dceb-600 focus:ring-#08dceb-500" />
                                        <span className="text-sm text-gray-700 leading-relaxed">
                                            I agree to Dreams To Fly's{' '}
                                            <button className="text-#08dceb-600 hover:text-#08dceb-700 font-medium">Terms of Service</button>
                                            {' '}and{' '}
                                            <button className="text-#08dceb-600 hover:text-#08dceb-700 font-medium">Privacy Policy</button>
                                        </span>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-300 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <CheckCircle className="w-5 h-5" />
                                            <span>Create Account</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Social Sign Up */}
                    {currentStep === 1 && (
                        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                            <div className="flex items-center mb-4">
                                <div className="flex-1 border-t border-gray-300"></div>
                                <span className="px-4 text-sm text-gray-500">Or sign up with</span>
                                <div className="flex-1 border-t border-gray-300"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                                    <Chrome className="w-5 h-5 text-red-500" />
                                    <span className="font-medium text-gray-700">Google</span>
                                </button>
                                <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                                    <Facebook className="w-5 h-5 text-blue-600" />
                                    <span className="font-medium text-gray-700">Facebook</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Login Link */}
                    <div className="text-center">
                        <p className="text-gray-600">
                            Already have an account?
                            <Link to={"/login"}>
                                <button className="text-#08dceb-600 hover:text-#08dceb-700 font-semibold ml-1">
                                    Sign in here
                                </button>
                            </Link>

                        </p>
                    </div>


                </div>
            </div>
=======
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
                className={`w-3 h-3 rounded-full ${i === slide ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
>>>>>>> a1c0cf687bac9b4a4838fa83ac06415152e1e079
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
                : "Enter your email address and we'll send you a link to reset your password"
              }
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
              <h3 className="text-xl font-semibold text-gray-900">Email Sent Successfully!</h3>
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

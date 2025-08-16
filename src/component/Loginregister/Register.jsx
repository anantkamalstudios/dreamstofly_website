// // import React from 'react'

// // function Register() {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default Register

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//     User,
//     Mail,
//     Phone,
//     Lock,
//     Eye,
//     EyeOff,
//     ArrowLeft,
//     CheckCircle,
//     AlertCircle,
//     Globe,
//     Gift,
//     Shield,
//     Star,
//     Facebook,
//     Chrome,
//     ChevronDown,
//     Check
// } from 'lucide-react';

// const Register = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [currentStep, setCurrentStep] = useState(1);
//     const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         country: 'IN',
//         countryCode: '+91',
//         mobile: '',
//         password: '',
//         confirmPassword: '',
//         referralCode: ''
//     });

//     const [errors, setErrors] = useState({});

//     const countries = [
//         { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
//         { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
//         { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
//         { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
//         { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
//         { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
//         { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
//         { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
//         { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳' },
//         { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
//         { code: 'AE', name: 'UAE', dialCode: '+971', flag: '🇦🇪' },
//         { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
//         { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
//         { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽' },
//         { code: 'RU', name: 'Russia', dialCode: '+7', flag: '🇷🇺' },
//         { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦' },
//         { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷' },
//         { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹' },
//         { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸' },
//         { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱' }
//     ];

//     const handleInputChange = (field, value) => {
//         setFormData(prev => ({
//             ...prev,
//             [field]: value
//         }));

//         if (errors[field]) {
//             setErrors(prev => ({ ...prev, [field]: '' }));
//         }
//     };

//     const handleCountrySelect = (country) => {
//         setFormData(prev => ({
//             ...prev,
//             country: country.code,
//             countryCode: country.dialCode
//         }));
//         setIsCountryDropdownOpen(false);
//     };

//     const selectedCountry = countries.find(c => c.code === formData.country);

//     const validateStep = (step) => {
//         const newErrors = {};

//         if (step === 1) {
//             if (!formData.firstName.trim()) {
//                 newErrors.firstName = 'First name is required';
//             } else if (formData.firstName.length < 2) {
//                 newErrors.firstName = 'First name must be at least 2 characters';
//             }

//             if (!formData.lastName.trim()) {
//                 newErrors.lastName = 'Last name is required';
//             } else if (formData.lastName.length < 2) {
//                 newErrors.lastName = 'Last name must be at least 2 characters';
//             }

//             if (!formData.email) {
//                 newErrors.email = 'Email is required';
//             } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//                 newErrors.email = 'Invalid email format';
//             }
//         }

//         if (step === 2) {
//             if (!formData.mobile) {
//                 newErrors.mobile = 'Mobile number is required';
//             } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
//                 newErrors.mobile = 'Invalid mobile number';
//             }

//             if (!formData.password) {
//                 newErrors.password = 'Password is required';
//             } else if (formData.password.length < 8) {
//                 newErrors.password = 'Password must be at least 8 characters';
//             } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
//                 newErrors.password = 'Password must contain uppercase, lowercase and number';
//             }

//             if (!formData.confirmPassword) {
//                 newErrors.confirmPassword = 'Confirm password is required';
//             } else if (formData.password !== formData.confirmPassword) {
//                 newErrors.confirmPassword = 'Passwords do not match';
//             }
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleNext = () => {
//         if (validateStep(currentStep)) {
//             setCurrentStep(2);
//         }
//     };

//     const handleSubmit = async () => {
//         if (!validateStep(2)) return;

//         setIsLoading(true);

//         // Simulate API call
//         setTimeout(() => {
//             console.log('Sign up successful', formData);
//             setIsLoading(false);
//             // Handle success
//         }, 2000);
//     };

//     const getPasswordStrength = (password) => {
//         let strength = 0;
//         if (password.length >= 8) strength++;
//         if (/[a-z]/.test(password)) strength++;
//         if (/[A-Z]/.test(password)) strength++;
//         if (/\d/.test(password)) strength++;
//         if (/[^A-Za-z0-9]/.test(password)) strength++;

//         if (strength <= 2) return { level: 'weak', color: 'bg-red-500', text: 'Weak' };
//         if (strength <= 3) return { level: 'medium', color: 'bg-yellow-500', text: 'Medium' };
//         return { level: 'strong', color: 'bg-green-500', text: 'Strong' };
//     };

//     const passwordStrength = getPasswordStrength(formData.password);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//             <div className="flex items-center justify-center p-4 min-h-[calc(100vh-80px)]">
//                 <div className="w-full max-w-md">
//                     <div className="flex items-center justify-center mb-8">
//                         <div className="flex items-center space-x-4">
//                             <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${currentStep >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
//                                 }`}>
//                                 {currentStep > 1 ? <Check className="w-5 h-5" /> : '1'}
//                             </div>
//                             <div className={`w-12 h-1 rounded transition-all duration-300 ${currentStep > 1 ? 'bg-orange-500' : 'bg-gray-200'
//                                 }`}></div>
//                             <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${currentStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
//                                 }`}>
//                                 2
//                             </div>
//                         </div>
//                     </div>

//                     <div className="text-center mb-8">
//                         <div className="w-20 h-20 bg-gradient-to-r from-orange-300 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <User className="w-10 h-10 text-white" />
//                         </div>
//                         <h1 className="text-3xl font-bold text-gray-800 mb-2">Join Dreams To Fly</h1>
//                         <p className="text-gray-600">
//                             {currentStep === 1 ? 'Create your account to get started' : 'Complete your profile setup'}
//                         </p>
//                     </div>

//                     {/* Form Container */}
//                     <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
//                         {currentStep === 1 ? (
//                             /* Step 1: Basic Information */
//                             <div className="space-y-6">
//                                 <div className="text-center mb-6">
//                                     <h2 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h2>
//                                     <p className="text-gray-600 text-sm">Tell us about yourself</p>
//                                 </div>

//                                 {/* Name Fields */}
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             First Name *
//                                         </label>
//                                         <div className="relative">
//                                             <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                                             <input
//                                                 type="text"
//                                                 value={formData.firstName}
//                                                 onChange={(e) => handleInputChange('firstName', e.target.value)}
//                                                 className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${errors.firstName ? 'border-red-500' : 'border-gray-300'
//                                                     }`}
//                                                 placeholder="First name"
//                                             />
//                                         </div>
//                                         {errors.firstName && (
//                                             <div className="flex items-center space-x-1 mt-2">
//                                                 <AlertCircle className="w-4 h-4 text-red-500" />
//                                                 <span className="text-sm text-red-500">{errors.firstName}</span>
//                                             </div>
//                                         )}
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Last Name *
//                                         </label>
//                                         <div className="relative">
//                                             <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                                             <input
//                                                 type="text"
//                                                 value={formData.lastName}
//                                                 onChange={(e) => handleInputChange('lastName', e.target.value)}
//                                                 className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${errors.lastName ? 'border-red-500' : 'border-gray-300'
//                                                     }`}
//                                                 placeholder="Last name"
//                                             />
//                                         </div>
//                                         {errors.lastName && (
//                                             <div className="flex items-center space-x-1 mt-2">
//                                                 <AlertCircle className="w-4 h-4 text-red-500" />
//                                                 <span className="text-sm text-red-500">{errors.lastName}</span>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Email */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Email Address *
//                                     </label>
//                                     <div className="relative">
//                                         <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                                         <input
//                                             type="email"
//                                             value={formData.email}
//                                             onChange={(e) => handleInputChange('email', e.target.value)}
//                                             className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
//                                                 }`}
//                                             placeholder="your.email@example.com"
//                                         />
//                                     </div>
//                                     {errors.email && (
//                                         <div className="flex items-center space-x-1 mt-2">
//                                             <AlertCircle className="w-4 h-4 text-red-500" />
//                                             <span className="text-sm text-red-500">{errors.email}</span>
//                                         </div>
//                                     )}
//                                 </div>


//                                 <button
//                                     onClick={handleNext}
//                                     className="w-full bg-gradient-to-r from-orange-200 to-orange-600 hover:from-orange-300 hover:to-orange-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
//                                 >
//                                     <span>Continue</span>
//                                     <ArrowLeft className="w-5 h-5 rotate-180" />
//                                 </button>
//                             </div>
//                         ) : (
//                             /* Step 2: Contact & Security */
//                             <div className="space-y-6">
//                                 <div className="text-center mb-6">
//                                     <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact & Security</h2>
//                                     <p className="text-gray-600 text-sm">Setup your contact details and password</p>
//                                 </div>

//                                 {/* Country Selection */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Country *
//                                     </label>
//                                     <div className="relative">
//                                         <button
//                                             onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
//                                             className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
//                                         >
//                                             <div className="flex items-center space-x-3">
//                                                 <Globe className="w-5 h-5 text-gray-400" />
//                                                 <span className="text-2xl">{selectedCountry?.flag}</span>
//                                                 <span className="text-gray-700">{selectedCountry?.name}</span>
//                                             </div>
//                                             <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''
//                                                 }`} />
//                                         </button>

//                                         {/* Country Dropdown */}
//                                         {isCountryDropdownOpen && (
//                                             <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
//                                                 {countries.map((country) => (
//                                                     <button
//                                                         key={country.code}
//                                                         onClick={() => handleCountrySelect(country)}
//                                                         className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors text-left"
//                                                     >
//                                                         <span className="text-xl">{country.flag}</span>
//                                                         <span className="flex-1">{country.name}</span>
//                                                         <span className="text-gray-500 text-sm">{country.dialCode}</span>
//                                                     </button>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Mobile Number */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Mobile Number *
//                                     </label>
//                                     <div className="flex space-x-2">
//                                         <div className="flex items-center px-3 py-3 border border-gray-300 rounded-xl bg-gray-50 min-w-0">
//                                             <span className="text-xl mr-2">{selectedCountry?.flag}</span>
//                                             <span className="text-gray-700 font-medium whitespace-nowrap">{selectedCountry?.dialCode}</span>
//                                         </div>
//                                         <div className="flex-1 relative">
//                                             <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                                             <input
//                                                 type="tel"
//                                                 value={formData.mobile}
//                                                 onChange={(e) => handleInputChange('mobile', e.target.value)}
//                                                 className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${errors.mobile ? 'border-red-500' : 'border-gray-300'
//                                                     }`}
//                                                 placeholder="Mobile number"
//                                             />
//                                         </div>
//                                     </div>
//                                     {errors.mobile && (
//                                         <div className="flex items-center space-x-1 mt-2">
//                                             <AlertCircle className="w-4 h-4 text-red-500" />
//                                             <span className="text-sm text-red-500">{errors.mobile}</span>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Password */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Password *
//                                     </label>
//                                     <div className="relative">
//                                         <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                                         <input
//                                             type={showPassword ? 'text' : 'password'}
//                                             value={formData.password}
//                                             onChange={(e) => handleInputChange('password', e.target.value)}
//                                             className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${errors.password ? 'border-red-500' : 'border-gray-300'
//                                                 }`}
//                                             placeholder="Create a strong password"
//                                         />
//                                         <button
//                                             type="button"
//                                             onClick={() => setShowPassword(!showPassword)}
//                                             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                                         >
//                                             {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                                         </button>
//                                     </div>

//                                     {/* Password Strength */}
//                                     {formData.password && (
//                                         <div className="mt-2">
//                                             <div className="flex items-center space-x-2 mb-2">
//                                                 <div className="flex-1 bg-gray-200 rounded-full h-2">
//                                                     <div className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.level === 'weak' ? 'w-1/3' :
//                                                         passwordStrength.level === 'medium' ? 'w-2/3' : 'w-full'
//                                                         } ${passwordStrength.color}`}></div>
//                                                 </div>
//                                                 <span className={`text-sm font-medium ${passwordStrength.level === 'weak' ? 'text-red-500' :
//                                                     passwordStrength.level === 'medium' ? 'text-yellow-500' : 'text-green-500'
//                                                     }`}>
//                                                     {passwordStrength.text}
//                                                 </span>
//                                             </div>
//                                             <div className="text-xs text-gray-500">
//                                                 Password must contain uppercase, lowercase, number and be 8+ characters
//                                             </div>
//                                         </div>
//                                     )}

//                                     {errors.password && (
//                                         <div className="flex items-center space-x-1 mt-2">
//                                             <AlertCircle className="w-4 h-4 text-red-500" />
//                                             <span className="text-sm text-red-500">{errors.password}</span>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Confirm Password */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Confirm Password *
//                                     </label>
//                                     <div className="relative">
//                                         <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                                         <input
//                                             type={showConfirmPassword ? 'text' : 'password'}
//                                             value={formData.confirmPassword}
//                                             onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
//                                             className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
//                                                 }`}
//                                             placeholder="Confirm your password"
//                                         />
//                                         <button
//                                             type="button"
//                                             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                                             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                                         >
//                                             {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                                         </button>
//                                     </div>
//                                     {errors.confirmPassword && (
//                                         <div className="flex items-center space-x-1 mt-2">
//                                             <AlertCircle className="w-4 h-4 text-red-500" />
//                                             <span className="text-sm text-red-500">{errors.confirmPassword}</span>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Referral Code (Optional)
//                                     </label>
//                                     <div className="relative">
//                                         <Gift className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                                         <input
//                                             type="text"
//                                             value={formData.referralCode}
//                                             onChange={(e) => handleInputChange('referralCode', e.target.value.toUpperCase())}
//                                             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
//                                             placeholder="Enter referral code"
//                                         />
//                                     </div>
//                                     <p className="text-xs text-gray-500 mt-2">
//                                         🎁 Get special benefits with a referral code
//                                     </p>
//                                 </div>

//                                 {/* Terms */}
//                                 <div className="bg-gray-50 rounded-xl p-4">
//                                     <label className="flex items-start space-x-3 cursor-pointer">
//                                         <input type="checkbox" className="mt-1 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
//                                         <span className="text-sm text-gray-700 leading-relaxed">
//                                             I agree to Collegedunia's{' '}
//                                             <button className="text-orange-600 hover:text-orange-700 font-medium">Terms of Service</button>
//                                             {' '}and{' '}
//                                             <button className="text-orange-600 hover:text-orange-700 font-medium">Privacy Policy</button>
//                                         </span>
//                                     </label>
//                                 </div>

//                                 {/* Submit Button */}
//                                 <button
//                                     onClick={handleSubmit}
//                                     disabled={isLoading}
//                                     className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
//                                 >
//                                     {isLoading ? (
//                                         <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                                     ) : (
//                                         <>
//                                             <CheckCircle className="w-5 h-5" />
//                                             <span>Create Account</span>
//                                         </>
//                                     )}
//                                 </button>
//                             </div>
//                         )}
//                     </div>

//                     {/* Social Sign Up */}
//                     {currentStep === 1 && (
//                         <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
//                             <div className="flex items-center mb-4">
//                                 <div className="flex-1 border-t border-gray-300"></div>
//                                 <span className="px-4 text-sm text-gray-500">Or sign up with</span>
//                                 <div className="flex-1 border-t border-gray-300"></div>
//                             </div>

//                             <div className="grid grid-cols-2 gap-3">
//                                 <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
//                                     <Chrome className="w-5 h-5 text-red-500" />
//                                     <span className="font-medium text-gray-700">Google</span>
//                                 </button>
//                                 <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
//                                     <Facebook className="w-5 h-5 text-blue-600" />
//                                     <span className="font-medium text-gray-700">Facebook</span>
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {/* Login Link */}
//                     <div className="text-center">
//                         <p className="text-gray-600">
//                             Already have an account?
//                             <Link to={"/login"}>
//                                 <button className="text-orange-600 hover:text-orange-700 font-semibold ml-1">
//                                     Sign in here
//                                 </button>
//                             </Link>

//                         </p>
//                     </div>


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    User,
    Mail,
    Phone,
    Lock,
    Eye,
    EyeOff,
    ArrowLeft,
    CheckCircle,
    AlertCircle,
    Globe,
    Gift,
    Shield,
    Star,
    Facebook,
    Chrome,
    ChevronDown,
    Check,
    AtSign
} from 'lucide-react';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        country: 'IN',
        countryCode: '+91',
        mobile: '',
        password: '',
        confirmPassword: '',
        referralCode: ''
    });

    const [errors, setErrors] = useState({});

    const countries = [
        { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', short: 'IND' },
        { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', short: 'USA' },
        { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', short: 'GBR' },
        { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', short: 'CAN' },
        { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', short: 'AUS' },
        { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', short: 'DEU' },
        { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷', short: 'FRA' },
        { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵', short: 'JPN' },
        { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳', short: 'CHN' },
        { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', short: 'SGP' },
        { code: 'AE', name: 'UAE', dialCode: '+971', flag: '🇦🇪', short: 'ARE' },
        { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦', short: 'SAU' },
        { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷', short: 'BRA' },
        { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽', short: 'MEX' },
        { code: 'RU', name: 'Russia', dialCode: '+7', flag: '🇷🇺', short: 'RUS' },
        { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦', short: 'ZAF' },
        { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷', short: 'KOR' },
        { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹', short: 'ITA' },
        { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸', short: 'ESP' },
        { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱', short: 'NLD' }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleCountrySelect = (country) => {
        setFormData(prev => ({
            ...prev,
            country: country.code,
            countryCode: country.dialCode
        }));
        setIsCountryDropdownOpen(false);
    };

    const selectedCountry = countries.find(c => c.code === formData.country);

    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            if (!formData.firstName.trim()) {
                newErrors.firstName = 'First name is required';
            } else if (formData.firstName.length < 2) {
                newErrors.firstName = 'First name must be at least 2 characters';
            }

            if (!formData.lastName.trim()) {
                newErrors.lastName = 'Last name is required';
            } else if (formData.lastName.length < 2) {
                newErrors.lastName = 'Last name must be at least 2 characters';
            }

            if (!formData.username.trim()) {
                newErrors.username = 'Username is required';
            } else if (formData.username.length < 3) {
                newErrors.username = 'Username must be at least 3 characters';
            } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
                newErrors.username = 'Username can only contain letters, numbers, and underscores';
            }

            if (!formData.email) {
                newErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Invalid email format';
            }
        }

        if (step === 2) {
            if (!formData.mobile) {
                newErrors.mobile = 'Mobile number is required';
            } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
                newErrors.mobile = 'Invalid mobile number';
            }

            if (!formData.password) {
                newErrors.password = 'Password is required';
            } else if (formData.password.length < 8) {
                newErrors.password = 'Password must be at least 8 characters';
            } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
                newErrors.password = 'Password must contain uppercase, lowercase and number';
            }

            if (!formData.confirmPassword) {
                newErrors.confirmPassword = 'Confirm password is required';
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
            }
        }

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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="flex items-center justify-center p-4 min-h-[calc(100vh-80px)]">
                <div className="w-full max-w-md">
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex items-center space-x-4">
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${currentStep >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                                }`}>
                                {currentStep > 1 ? <Check className="w-5 h-5" /> : '1'}
                            </div>
                            <div className={`w-12 h-1 rounded transition-all duration-300 ${currentStep > 1 ? 'bg-orange-500' : 'bg-gray-200'
                                }`}></div>
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${currentStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                                }`}>
                                2
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-gradient-to-r from-orange-300 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${errors.firstName ? 'border-red-500' : 'border-gray-300'
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
                                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${errors.lastName ? 'border-red-500' : 'border-gray-300'
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
                                            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${errors.username ? 'border-red-500' : 'border-gray-300'
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
                                            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
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
                                    className="w-full bg-gradient-to-r from-orange-200 to-orange-600 hover:from-orange-300 hover:to-orange-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
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
                                            className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
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
                                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${errors.mobile ? 'border-red-500' : 'border-gray-300'
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
                                            className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${errors.password ? 'border-red-500' : 'border-gray-300'
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
                                            className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
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
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
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
                                        <input type="checkbox" className="mt-1 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                                        <span className="text-sm text-gray-700 leading-relaxed">
                                            I agree to Dreams To Fly's{' '}
                                            <button className="text-orange-600 hover:text-orange-700 font-medium">Terms of Service</button>
                                            {' '}and{' '}
                                            <button className="text-orange-600 hover:text-orange-700 font-medium">Privacy Policy</button>
                                        </span>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
                                <button className="text-orange-600 hover:text-orange-700 font-semibold ml-1">
                                    Sign in here
                                </button>
                            </Link>

                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Register;
// import React from 'react'

// function Login() {
//     return (
//         <div>
//             fhfgh
//         </div>
//     )
// }

// export default Login
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    Phone,
    ArrowLeft,
    CheckCircle,
    AlertCircle,
    Smartphone,
    KeyRound,
    User,
    Facebook,
    Chrome
} from 'lucide-react';

const Login = () => {
    const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'otp'
    const [showPassword, setShowPassword] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone: '',
        otp: ['', '', '', '', '', '']
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleOtpChange = (index, value) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...formData.otp];
            newOtp[index] = value;
            setFormData(prev => ({ ...prev, otp: newOtp }));

            // Auto focus next input
            if (value && index < 5) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                if (nextInput) nextInput.focus();
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (loginMethod === 'email') {
            if (!formData.email) {
                newErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Invalid email format';
            }

            if (!formData.password) {
                newErrors.password = 'Password is required';
            } else if (formData.password.length < 6) {
                newErrors.password = 'Password must be at least 6 characters';
            }
        } else {
            if (!formData.phone) {
                newErrors.phone = 'Phone number is required';
            } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
                newErrors.phone = 'Invalid phone number';
            }

            if (isOtpSent) {
                const otpString = formData.otp.join('');
                if (otpString.length !== 6) {
                    newErrors.otp = 'Please enter complete OTP';
                }
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            if (loginMethod === 'otp' && !isOtpSent) {
                setIsOtpSent(true);
            } else {
                // Handle login success
                console.log('Login successful', formData);
            }
            setIsLoading(false);
        }, 1500);
    };

    const handleSendOtp = () => {
        if (formData.phone && /^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            setIsLoading(true);
            setTimeout(() => {
                setIsOtpSent(true);
                setIsLoading(false);
            }, 1000);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-#08dceb-50 via-white to-purple-50 flex flex-col">
            {/* Header */}


            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    {/* Welcome Section */}
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-gradient-to-r from-#08dceb-300 to-#08dceb-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <User className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
                        <p className="text-gray-600">Sign in to access your personalized dashboard</p>
                    </div>

                    {/* Login Method Toggle */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                        <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
                            <button
                                onClick={() => {
                                    setLoginMethod('email');
                                    setIsOtpSent(false);
                                    setErrors({});
                                }}
                                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all duration-200 ${loginMethod === 'email'
                                    ? 'bg-white text-#08dceb-600 shadow-sm font-medium'
                                    : 'text-gray-600 hover:text-gray-800'
                                    }`}
                            >
                                <Mail className="w-4 h-4" />
                                <span>Email</span>
                            </button>
                            <button
                                onClick={() => {
                                    setLoginMethod('otp');
                                    setIsOtpSent(false);
                                    setErrors({});
                                }}
                                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all duration-200 ${loginMethod === 'otp'
                                    ? 'bg-white text-#08dceb-600 shadow-sm font-medium'
                                    : 'text-gray-600 hover:text-gray-800'
                                    }`}
                            >
                                <Smartphone className="w-4 h-4" />
                                <span>OTP</span>
                            </button>
                        </div>

                        <div className="space-y-4">
                            {loginMethod === 'email' ? (
                                <>
                                    {/* Email Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-#08dceb-500 focus:border-#08dceb-500 outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        {errors.email && (
                                            <div className="flex items-center space-x-1 mt-1">
                                                <AlertCircle className="w-4 h-4 text-red-500" />
                                                <span className="text-sm text-red-500">{errors.email}</span>
                                            </div>
                                        )}
                                    </div>

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
        </div>
    );
};

export default Login;

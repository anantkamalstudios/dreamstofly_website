import React, { useState, useEffect, useContext } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const LoginRegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const { fetchProfile } = useContext(AuthContext);

  const validateEmail = (value) => {
    setEmail(value);
    if (!value.includes("@") || !value.includes(".")) {
      setEmailError("Invalid email address. Must contain '@' and '.'");
    } else {
      setEmailError("");
    }
  };

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
    mobile &&
    password &&
    confirmPassword &&
    !emailError &&
    !confirmPasswordError &&
    passwordStrength.startsWith("Strong");

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      const payload = {
        name: fullName,
        email: email,
        mobile: mobile,
        password: password,
        refer_code: referralCode,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register_api`,
        payload
      );
      console.log(res);
      if (res && (res.status === 200 || res.status === 201)) {
        localStorage.setItem("token", res?.data?.data?.token);
        await fetchProfile();
        alert("Registration successful!");
        const destination = localStorage.getItem("intendedDestination") || "/";
        localStorage.removeItem("intendedDestination");
        navigate(destination, { replace: true });
      }
    } catch (err) {
      console.error("Registration error:", err);
      alert("Registration failed. Please try again.");
    }
  };

  // Image Slider
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50/50 px-4 py-8">
      {/* Card Container */}
      <div className="w-full max-w-6xl bg-white rounded-md sm:rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row">
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

        {/* Right: Signup Form with New UI */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center relative bg-white overflow-y-auto max-h-screen">
          {/* Logo */}
          <div className="my-2 sm:my-3 flex items-center justify-center w-36 sm:w-44 mx-auto">
            <img
              src="/images/DreamsToFlyLogo.png"
              alt="Dreams To Fly Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='35' text-anchor='middle' fill='%232563eb' font-size='24' font-weight='bold'%3EDreams To Fly%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Title */}
          <h2 className="text-md sm:text-lg font-normal mb-4 text-center text-gray-800">
            Start Your Journey to Dreams to Fly
          </h2>

          {/* Decorative Image (hidden on small screens, visible on large) */}
          <div className="absolute top-0 right-0 hidden lg:block">
            <img
              src="/images/login2.png"
              alt=""
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          <div className="space-y-2 sm:space-y-3">
            {/* Full Name with Floating Label */}
            <div className="relative">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder=" "
                required
                className="w-full px-3 sm:px-4 pt-5 pb-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none peer"
              />
              <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                Full name
              </label>
            </div>

            {/* Email with Floating Label */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                placeholder=" "
                required
                className={`w-full px-3 sm:px-4 pt-5 pb-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none peer ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
              />
              <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                Email address
              </label>
              {emailError && (
                <p className="mt-1 text-sm text-red-500">{emailError}</p>
              )}
            </div>

            {/* Mobile with Floating Label */}
            <div className="relative">
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder=" "
                required
                className="w-full px-3 sm:px-4 pt-5 pb-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none peer"
              />
              <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                Mobile No.
              </label>
            </div>

            {/* Referral Code with Floating Label */}
            <div className="relative">
              <input
                type="text"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                placeholder=" "
                className="w-full px-3 sm:px-4 pt-5 pb-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none peer"
              />
              <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                Referral Code
              </label>
            </div>

            {/* Password with Floating Label */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => checkPasswordStrength(e.target.value)}
                placeholder=" "
                required
                className="w-full px-3 sm:px-4 pt-5 pb-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-10 sm:pr-12 peer"
              />
              <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
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

            {/* Confirm Password with Floating Label */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => checkConfirmPassword(e.target.value)}
                placeholder=" "
                required
                className={`w-full px-3 sm:px-4 pt-5 pb-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-10 sm:pr-12 peer ${
                  confirmPasswordError ? "border-red-500" : "border-gray-300"
                }`}
              />
              <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                Confirm password
              </label>
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
              {confirmPasswordError && (
                <p className="mt-1 text-sm text-red-500">
                  {confirmPasswordError}
                </p>
              )}
            </div>

            {/* Terms */}
            <label className="flex items-start space-x-3 text-xs sm:text-sm">
              <input type="checkbox" className="w-4 h-4 mt-1" required />
              <span className="text-gray-600">
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

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleCreateAccount}
              disabled={!isFormValid}
              className={`w-full py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-semibold transition-colors shadow-md ${
                isFormValid
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Create account
            </button>

            {/* Switch to Login */}
            <div className="text-center text-xs sm:text-sm">
              <p>
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;

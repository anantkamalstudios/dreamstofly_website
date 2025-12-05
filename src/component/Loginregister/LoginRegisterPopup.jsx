import React, { useContext, useState } from "react";
import { X, Eye, EyeOff, Plane } from "lucide-react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function LoginRegisterPopup({ setShowModal }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordStrength, setPasswordStrength] = useState("");
  const { fetchProfile } = useContext(AuthContext);

  const validateEmail = (email) => {
    if (!email.includes("@") || !email.includes(".")) {
      setErrors((prev) => ({
        ...prev,
        email: "Invalid email. Must contain '@' and '.'",
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, email: "" }));
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters long",
      }));
      setPasswordStrength("Weak (min 6 characters)");
      return false;
    } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      setErrors((prev) => ({ ...prev, password: "" }));
      setPasswordStrength("Medium (add uppercase & numbers)");
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
      setPasswordStrength("Strong password");
    }
    return true;
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword !== formData.password) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, confirmPassword: "" }));
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      validateEmail(value);
    } else if (name === "password") {
      validatePassword(value);
    } else if (name === "confirmPassword") {
      validateConfirmPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(formData.email);
    const isPasswordValid = validatePassword(formData.password);

    if (!isLogin) {
      const isConfirmPasswordValid = validateConfirmPassword(
        formData.confirmPassword
      );
      if (!isEmailValid || !isPasswordValid || !isConfirmPasswordValid) return;
    } else {
      if (!isEmailValid || !isPasswordValid) return;
    }

    try {
      if (isLogin) {
        const res = await axios.post(
          "https://devlopment.dreamstofly.com/users/login_api",
          {
            email: formData.email,
            password: formData.password,
          }
        );
        if (res.status === 200 || res.status === 201) {
          localStorage.setItem("token", res.data.token);
          await fetchProfile();
          alert("Login successful!");
          setShowModal(false);
        }
      } else {
        const res = await axios.post(
          "https://devlopment.dreamstofly.com/users/register_api",
          {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            password: formData.password,
            refer_code: formData.referralCode,
          }
        );
        console.log(res);

        if (res.status === 200 || 201) {
          localStorage.setItem("token", res.data.token);
          await fetchProfile();
          alert("Registration successful!");
          setShowModal(false);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 sm:px-2 py-2 font-sans">
      <div className="bg-white rounded-md sm:rounded-lg shadow-2xl max-w-lg w-full relative flex flex-col">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-gray-800 hover:text-gray-900 font-bold bg-white rounded-full p-1.5 sm:p-2"
        >
          <X size={24} />
        </button>

        <div className="gap-0 flex-1 overflow-y-auto p-2 md:p-3 lg:p-4 xl:p-6">
          <div className="relative p-4 sm:p-6 md:p-8 bg-white">
            <div className="my-2 sm:my-3 flex items-center justify-center w-36 sm:w-44 mx-auto">
              <img
                src="/images/DreamsToFlyLogo.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-md sm:text-lg font-normal mb-4 text-center">
              {isLogin ? "Login to Your " : "Start Your Journey to "}
              Dreams to Fly
            </h2>
            <div className="absolute top-0 right-0 hidden lg:block">
              <img src="/images/login2.png" alt="" />
            </div>

            <div className="space-y-2 sm:space-y-3">
              {!isLogin && (
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full px-3 sm:px-4 pt-4 pb-1 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none peer"
                  />
                  <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                    Full name
                  </label>
                </div>
              )}

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=" "
                  className={`w-full px-3 sm:px-4 pt-5 pb-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none peer ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                  Email address
                </label>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {!isLogin && (
                <div className="relative">
                  <input
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full px-3 sm:px-4 pt-5 pb-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none peer"
                  />
                  <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                    Mobile No.
                  </label>
                </div>
              )}

              {!isLogin && (
                <div className="relative">
                  <input
                    type="text"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full px-3 sm:px-4 pt-5 pb-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none peer"
                  />
                  <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                    Referral Code
                  </label>
                </div>
              )}

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder=" "
                  className="w-full px-3 sm:px-4 pt-5 pb-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-10 sm:pr-12 peer"
                />
                <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>

              {!isLogin && (
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder=" "
                    className={`w-full px-3 sm:px-4 pt-5 pb-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-10 sm:pr-12 peer ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                    Confirm password
                  </label>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.confirmPassword}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </button>
                </div>
              )}

              {isLogin && (
                <div className="text-right">
                  <button className="text-blue-600 text-xs sm:text-sm font-semibold hover:underline">
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors shadow-md"
              >
                {isLogin ? "Login" : "Create account"}
              </button>

              {isLogin && (
                <div className="text-center">
                  <div className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
                    OR
                  </div>
                  <div className="flex justify-center gap-2 sm:gap-3">
                    <button className="w-full h-12 bg-gray-100 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors shadow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.6 20.5H42V20H24v8h11.3C33.7 33.3 29.3 36 24 36c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 3l5.7-5.7C34 4.5 29.1 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c11.6 0 21-9.4 21-21c0-1.4-.1-2.7-.4-3.9z"
                        />
                        <path
                          fill="#FF3D00"
                          d="M6.3 14.7l6.6 4.8C14.5 15 18.9 12 24 12c3.1 0 6 .9 8.3 3l5.7-5.7C34 4.5 29.1 3 24 3c-7.9 0-14.7 4.4-17.7 10.7z"
                        />
                        <path
                          fill="#4CAF50"
                          d="M24 45c5.2 0 10-2 13.5-5.3l-6.2-5.3c-2 1.3-4.6 2.1-7.3 2.1c-5.2 0-9.6-3.3-11.2-7.9l-6.6 5C9.2 40.7 16 45 24 45z"
                        />
                        <path
                          fill="#1976D2"
                          d="M43.6 20.5H42V20H24v8h11.3c-1 2.9-3 5.3-5.5 6.9l6.2 5.3C39.3 37 42 31 42 24c0-1.4-.1-2.7-.4-3.9z"
                        />
                      </svg>

                      <span className="text-gray-700 font-medium">
                        Continue with Google
                      </span>
                    </button>
                  </div>
                </div>
              )}

              <div className="text-center text-xs sm:text-sm">
                {isLogin ? (
                  <p>
                    Don't have account?{" "}
                    <button
                      onClick={() => setIsLogin(false)}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Register Now
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <button
                      onClick={() => setIsLogin(true)}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Log In
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

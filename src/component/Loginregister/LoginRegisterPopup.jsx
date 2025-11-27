import React, { useState } from "react";
import { X, Eye, EyeOff, Plane } from "lucide-react";

export default function LoginRegisterPopup({ setShowModal }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (isLogin) {
      console.log("Login:", {
        email: formData.email,
        password: formData.password,
      });
      alert("Login successful!");
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Register:", formData);
      alert("Account created successfully!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-lg w-full relative flex flex-col  overflow-hidden"
        style={{ height: "auto", maxHeight: "90vh" }}
      >
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1.5 sm:p-2 shadow-md"
        >
          <X size={20} />
        </button>

        <div className=" gap-0 flex-1 overflow-hidden">
          <div className="p-4 sm:p-6 md:p-8 bg-white overflow-y-auto">
            <div className="mb-3 sm:mb-2 flex items-center justify-center">
              <img src="/images/DreamsToFlyLogo.png" alt="" className=" w-" />
            </div>
            <h2 className="text-md sm:text-xl md:text-xl font-normal mb-10 text-center">
              {isLogin ? "Login to Your " : "Start Your Journey to "}
              Dreams to Fly
            </h2>
            <div className="absolute top-8 right-12 sm:right-20 hidden lg:block"></div>

            <div className="space-y-3 sm:space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="dipika"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="dipika@gmail.com"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password@123"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-10 sm:pr-12"
                  />
                  <button
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
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                    Confirm password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Password@123"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-10 sm:pr-12"
                    />
                    <button
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </button>
                  </div>
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
                className="w-full bg-blue-600 text-white py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors shadow-md"
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

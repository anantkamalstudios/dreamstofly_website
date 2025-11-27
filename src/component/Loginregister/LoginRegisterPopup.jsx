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
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-5xl w-full relative flex flex-col  overflow-hidden"
        style={{ height: "auto", maxHeight: "90vh" }}
      >
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1.5 sm:p-2 shadow-md"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2 gap-0 flex-1 overflow-hidden">
          {/* Left Side - Promotional Image Only */}
          <div className="hidden md:flex relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-600 to-purple-800">
            <img
              src="/images/loginBanner.png"
              alt=""
              className="w-full h-full object-center"
            />
          </div>

          {/* Right Side - Form */}
          <div className="p-4 sm:p-6 md:p-8 bg-white overflow-y-auto">
            <div className="mb-3 sm:mb-4 flex items-center justify-between">
              <div className="text-xs sm:text-sm text-gray-800">Welcome</div>
              {/* <div className="flex items-center gap-1 sm:gap-2">
                <Plane className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
                <div className="text-xl sm:text-2xl">✈️</div>
              </div> */}
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
              {isLogin ? "Login to Your" : "Start Your Journey to"}
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-4 sm:mb-6">
              Dreams to Fly
            </h3>

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
                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors shadow">
                      <span className="text-lg sm:text-xl">G</span>
                    </button>
                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors shadow">
                      <span className="text-lg sm:text-xl text-blue-600">
                        f
                      </span>
                    </button>
                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors shadow">
                      <span className="text-lg sm:text-xl"></span>
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

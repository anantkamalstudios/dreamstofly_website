// import React, { useState, useEffect } from "react";
// import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [currentText, setCurrentText] = useState("");

//   // Typing effect
//   const phrases = ["Success", "Dreams", "Achievement", "Excellence"];
//   const [phraseIndex, setPhraseIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   // Form state
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   // Slider state
//   const images = [
//     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
//     "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=80",
//     "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80",
//   ];
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const slider = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(slider);
//   }, []);

//   // Typing effect
//   useEffect(() => {
//     const timeout = setTimeout(
//       () => {
//         const currentPhrase = phrases[phraseIndex];
//         if (!isDeleting) {
//           if (charIndex < currentPhrase.length) {
//             setCurrentText(currentPhrase.substring(0, charIndex + 1));
//             setCharIndex(charIndex + 1);
//           } else {
//             setTimeout(() => setIsDeleting(true), 2000);
//           }
//         } else {
//           if (charIndex > 0) {
//             setCurrentText(currentPhrase.substring(0, charIndex - 1));
//             setCharIndex(charIndex - 1);
//           } else {
//             setIsDeleting(false);
//             setPhraseIndex((phraseIndex + 1) % phrases.length);
//           }
//         }
//       },
//       isDeleting ? 50 : 100
//     );

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, phraseIndex]);

//   // Email validation
//   const handleEmailChange = (value) => {
//     setEmail(value);
//     if (!value.includes("@") || !value.includes(".")) {
//       setEmailError("Invalid email. Must contain '@' and '.'");
//     } else {
//       setEmailError("");
//     }
//   };

//   // Password validation
//   const handlePasswordChange = (value) => {
//     setPassword(value);
//     if (value.length < 6) {
//       setPasswordError("Password must be at least 6 characters long");
//     } else {
//       setPasswordError("");
//     }
//   };

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password || emailError || passwordError) return;

//     try {
//       const res = await axios.post(
//         "https://devlopment.dreamstofly.com/users/login_api",
//         {
//           email: email,
//           password: password,
//         }
//       );

//       console.log(res);

//       if (res.status === 200 || res.status === 201) {
//         localStorage.setItem("token", res?.data?.data?.token);
//         alert("Login successful!");
//         navigate("/");
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       alert(
//         error.response?.data?.message ||
//           "Login failed. Please check your credentials and try again."
//       );
//     }
//   };

//   const isFormValid = email && password && !emailError && !passwordError;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50/50 px-4">
//       <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
//         {/* Left - Slider */}
//         <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
//           {images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Slide ${index}`}
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//                 index === currentImage ? "opacity-100" : "opacity-0"
//               }`}
//             />
//           ))}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
//           <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {images.map((_, idx) => (
//               <span
//                 key={idx}
//                 className={`h-2 w-2 rounded-full transition-all duration-500 ${
//                   idx === currentImage ? "bg-white w-4" : "bg-gray-300"
//                 }`}
//               ></span>
//             ))}
//           </div>
//         </div>

//         {/* Right - Form */}
//         <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
//           <section className="text-center mb-8">
//             <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-1 mb-4 shadow-sm text-sm font-medium text-gray-700">
//               <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
//               Welcome Back
//             </div>
//             <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
//               Login to Your
//               <span className="block text-blue-600 min-h-[1.5em]">
//                 {currentText}
//                 <span className="animate-pulse">|</span>
//               </span>
//             </h1>
//             <p className="text-gray-600 text-base md:text-lg">
//               Access your personalized learning dashboard and continue your
//               journey
//             </p>
//           </section>

//           <form
//             onSubmit={handleSubmit}
//             className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-xl shadow p-6 hover:shadow-lg transition-all duration-300 hover:bg-white/90"
//           >
//             <div className="space-y-6">
//               {/* Email */}
//               <div className="relative group">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => handleEmailChange(e.target.value)}
//                   placeholder="Enter your email"
//                   className={`w-full pl-12 pr-4 py-3 bg-gray-50/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 hover:bg-white/80 ${
//                     emailError ? "border-red-500" : "border-gray-200"
//                   }`}
//                 />
//               </div>
//               {emailError && (
//                 <p className="text-red-500 text-sm">{emailError}</p>
//               )}

//               {/* Password */}
//               <div className="relative group">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => handlePasswordChange(e.target.value)}
//                   placeholder="Enter your password"
//                   className={`w-full pl-12 pr-12 py-3 bg-gray-50/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 hover:bg-white/80 ${
//                     passwordError ? "border-red-500" : "border-gray-200"
//                   }`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors duration-200"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="w-5 h-5" />
//                   ) : (
//                     <Eye className="w-5 h-5" />
//                   )}
//                 </button>
//               </div>
//               {passwordError && (
//                 <p className="text-red-500 text-sm">{passwordError}</p>
//               )}

//               {/* Remember + Forgot */}
//               <div className="flex items-center justify-between">
//                 <label className="flex items-center space-x-2 cursor-pointer group">
//                   <input
//                     type="checkbox"
//                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//                   />
//                   <span className="text-sm text-gray-600 group-hover:text-gray-800">
//                     Remember me
//                   </span>
//                 </label>
//                 <Link
//                   to="/Forget-Password"
//                   className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
//                 >
//                   Forgot Password?
//                 </Link>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={!isFormValid}
//                 className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 group transition-all duration-300
//                   ${
//                     isFormValid
//                       ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transform hover:scale-[1.02] hover:shadow-lg"
//                       : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   }`}
//               >
//                 Log In
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
//               </button>

//               {/* Sign Up */}
//               <div className="text-center">
//                 <span className="text-gray-600">Don't have an account? </span>
//                 <Link
//                   to="/register"
//                   className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
//                 >
//                   Sign up
//                 </Link>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect, use, useContext } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Form state
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { fetchProfile } = useContext(AuthContext);

  // Slider state
  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slider);
  }, [images.length]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || emailError || passwordError) return;

    try {
      const res = await fetch(
        "https://devlopment.dreamstofly.com/users/login_api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.status === 200 || res.status === 201) {
        localStorage.setItem("token", data?.data?.token);
        await fetchProfile();
        alert("Login successful!");
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  const isFormValid = email && password && !emailError && !passwordError;

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50/50 px-4 ">
    //   <div className="w-full max-w-6xl bg-white rounded-md sm:rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row">
    //     {/* Left - Slider */}
    //     <div className="relative w-full md:w-1/2 h-72 md:h-auto">
    //       {images.map((img, index) => (
    //         <img
    //           key={index}
    //           src={img}
    //           alt={`Slide ${index}`}
    //           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
    //             index === currentImage ? "opacity-100" : "opacity-0"
    //           }`}
    //         />
    //       ))}
    //       <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
    //       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
    //         {images.map((_, idx) => (
    //           <span
    //             key={idx}
    //             className={`h-2 w-2 rounded-full transition-all duration-500 ${
    //               idx === currentImage ? "bg-white w-4" : "bg-gray-300"
    //             }`}
    //           ></span>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Right - Login Form with New UI */}
    //     <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center relative bg-white overflow-y-auto max-h-full">
    //       {/* Logo */}
    //       <div className="my-2 sm:my-3 flex items-center justify-center w-36 sm:w-44 mx-auto">
    //         <img
    //           src="/images/DreamsToFlyLogo.png"
    //           alt="Dreams To Fly Logo"
    //           className="w-full h-full object-cover"
    //           onError={(e) => {
    //             e.target.src =
    //               "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='35' text-anchor='middle' fill='%232563eb' font-size='24' font-weight='bold'%3EDreams To Fly%3C/text%3E%3C/svg%3E";
    //           }}
    //         />
    //       </div>

    //       {/* Title */}
    //       <h2 className="text-md sm:text-lg font-normal mb-4 text-center text-gray-800">
    //         Login to Your Dreams to Fly
    //       </h2>

    //       {/* Decorative Image (hidden on small screens, visible on large) */}
    //       <div className="absolute top-0 right-0 hidden lg:block">
    //         <img
    //           src="/images/login2.png"
    //           alt=""
    //           onError={(e) => {
    //             e.target.style.display = "none";
    //           }}
    //         />
    //       </div>

    //       <div className="space-y-2 sm:space-y-3">
    //         {/* Email with Floating Label */}
    //         <div className="relative">
    //           <input
    //             type="email"
    //             value={email}
    //             onChange={(e) => handleEmailChange(e.target.value)}
    //             placeholder=" "
    //             required
    //             className={`w-full px-3 sm:px-4 pt-5 pb-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none peer ${
    //               emailError ? "border-red-500" : "border-gray-300"
    //             }`}
    //           />
    //           <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
    //             Email address
    //           </label>
    //           {emailError && (
    //             <p className="mt-1 text-sm text-red-500">{emailError}</p>
    //           )}
    //         </div>

    //         {/* Password with Floating Label */}
    //         <div className="relative">
    //           <input
    //             type={showPassword ? "text" : "password"}
    //             value={password}
    //             onChange={(e) => handlePasswordChange(e.target.value)}
    //             placeholder=" "
    //             required
    //             className={`w-full px-3 sm:px-4 pt-5 pb-2 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-10 sm:pr-12 peer ${
    //               passwordError ? "border-red-500" : "border-gray-300"
    //             }`}
    //           />
    //           <label className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
    //             Password
    //           </label>
    //           <button
    //             type="button"
    //             onClick={() => setShowPassword(!showPassword)}
    //             className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
    //           >
    //             {showPassword ? (
    //               <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
    //             ) : (
    //               <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
    //             )}
    //           </button>
    //           {passwordError && (
    //             <p className="mt-1 text-sm text-red-500">{passwordError}</p>
    //           )}
    //         </div>

    //         {/* Forgot Password */}
    //         <div className="text-right">
    //           <a
    //             href="/Forget-Password"
    //             className="text-blue-600 text-xs sm:text-sm font-semibold hover:underline"
    //           >
    //             Forgot password?
    //           </a>
    //         </div>

    //         {/* Submit Button */}
    //         <button
    //           type="button"
    //           onClick={handleSubmit}
    //           disabled={!isFormValid}
    //           className={`w-full py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-semibold transition-colors shadow-md ${
    //             isFormValid
    //               ? "bg-blue-600 text-white hover:bg-blue-700"
    //               : "bg-gray-300 text-gray-500 cursor-not-allowed"
    //           }`}
    //         >
    //           Login
    //         </button>

    //         {/* OR Divider */}
    //         <div className="text-center">
    //           <div className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
    //             OR
    //           </div>
    //         </div>

    //         {/* Google Sign In */}
    //         <div className="flex justify-center">
    //           <button
    //             type="button"
    //             className="w-full h-12 bg-gray-100 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors shadow"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="22"
    //               height="22"
    //               viewBox="0 0 48 48"
    //             >
    //               <path
    //                 fill="#FFC107"
    //                 d="M43.6 20.5H42V20H24v8h11.3C33.7 33.3 29.3 36 24 36c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 3l5.7-5.7C34 4.5 29.1 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c11.6 0 21-9.4 21-21c0-1.4-.1-2.7-.4-3.9z"
    //               />
    //               <path
    //                 fill="#FF3D00"
    //                 d="M6.3 14.7l6.6 4.8C14.5 15 18.9 12 24 12c3.1 0 6 .9 8.3 3l5.7-5.7C34 4.5 29.1 3 24 3c-7.9 0-14.7 4.4-17.7 10.7z"
    //               />
    //               <path
    //                 fill="#4CAF50"
    //                 d="M24 45c5.2 0 10-2 13.5-5.3l-6.2-5.3c-2 1.3-4.6 2.1-7.3 2.1c-5.2 0-9.6-3.3-11.2-7.9l-6.6 5C9.2 40.7 16 45 24 45z"
    //               />
    //               <path
    //                 fill="#1976D2"
    //                 d="M43.6 20.5H42V20H24v8h11.3c-1 2.9-3 5.3-5.5 6.9l6.2 5.3C39.3 37 42 31 42 24c0-1.4-.1-2.7-.4-3.9z"
    //               />
    //             </svg>
    //             <span className="text-gray-700 font-medium">
    //               Continue with Google
    //             </span>
    //           </button>
    //         </div>

    //         {/* Switch to Register */}
    //         <div className="text-center text-xs sm:text-sm">
    //           <p>
    //             Don't have account?{" "}
    //             <a
    //               href="/register"
    //               className="text-blue-600 font-semibold hover:underline"
    //             >
    //               Register Now
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50/50 p-4 lg:p-8">
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        {/* Left - Slider */}
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto min-h-[400px]">
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
        </div>

        {/* Right - Login Form */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-white relative overflow-hidden">
          {/* Logo */}
          <div className="mb-6 flex items-center justify-center w-48 mx-auto">
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
          <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-gray-800">
            Login to Your Dreams to Fly
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

          <div className="space-y-5">
            {/* Email with Floating Label */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder=" "
                required
                className={`w-full px-4 pt-6 pb-2 text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none peer ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
              />
              <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                Email address
              </label>
              {emailError && (
                <p className="mt-1.5 text-sm text-red-500">{emailError}</p>
              )}
            </div>

            {/* Password with Floating Label */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                placeholder=" "
                required
                className={`w-full px-4 pt-6 pb-2 text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-12 peer ${
                  passwordError ? "border-red-500" : "border-gray-300"
                }`}
              />
              <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
              {passwordError && (
                <p className="mt-1.5 text-sm text-red-500">{passwordError}</p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="/Forget-Password"
                className="text-blue-600 text-sm font-semibold hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`w-full py-3 rounded-lg text-base font-semibold transition-all duration-200 shadow-md ${
                isFormValid
                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Login
            </button>

            {/* OR Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Google Sign In */}
            <div className="flex justify-center">
              <button
                type="button"
                className="w-full py-3 bg-gray-100 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors shadow border border-gray-300"
              >
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

            {/* Switch to Register */}
            <div className="text-center text-sm pt-2">
              <p className="text-gray-600">
                Don't have account?{" "}
                <a
                  href="/register"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Register Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

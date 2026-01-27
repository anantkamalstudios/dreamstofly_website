import React, { useState } from "react";

export default function ServicesExperiences() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      alert("Newsletter subscription submitted!");
      setEmail("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div
      className="max-h-fit flex items-center justify-center py-5 md:py-10 mx-5 md:mx-20 mb-10"
      style={{ backgroundColor: "#2b6b82" }}
    >
      <div className="w-full max-w-2xl text-center px-5 py-10">
        {/* Newsletter Label */}
        <div className="flex items-center justify-start gap-4 mb-8">
          <div className="w-10 h-px bg-white"></div>
          <span className="text-white text-xs tracking-[0.2em] uppercase font-light ">
            OUR NEWSLETTER
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl leading-snug mb-10 font-light text-start ">
          Begin Your Search Now And Embark On A Journey Toward Educational And
          Professional Growth.
        </h2>

        {/* Form */}
        <div className="flex flex-col md:flex-row max-w-full mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Email Address..."
            className="flex-1 px-6 py-3 bg-transparent border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-60 outline-none focus:border-opacity-60 transition-all md:border-r-0 "
          />
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-white text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all group cursor-pointer  text-[#2b6b82]"
          >
            SUBMIT
            <svg
              className="w-5 h-3 transition-transform group-hover:translate-x-1"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="6"
                x2="18"
                y2="6"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M14 2L18 6L14 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

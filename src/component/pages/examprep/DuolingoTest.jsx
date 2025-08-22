import React from "react";
import { motion } from "framer-motion";

 function DuolingoTest() {
  const modules = [
    { title: "Adaptive Test", desc: "Questions adjust based on your answers for accurate scoring." },
    { title: "Video Interview", desc: "Record answers to open-ended questions." },
    { title: "Writing Sample", desc: "Respond to a prompt for academic writing evaluation." },
  ];

  const features = [
    { title: "At-Home Test", desc: "Take the test online anytime from your home." },
    { title: "Affordable", desc: "Low cost compared to IELTS/TOEFL with the same global acceptance." },
    { title: "Fast Results", desc: "Get results in just 2 days." },
    { title: "Global Acceptance", desc: "Recognized by 4000+ institutions worldwide." },
  ];

  const faqs = [
    { q: "How long is the Duolingo test?", a: "The test takes about 1 hour." },
    { q: "What is the score scale?", a: "Scored between 10–160." },
    { q: "Where can I take it?", a: "Anywhere with a computer, camera, and internet." },
    { q: "Is Duolingo accepted by US universities?", a: "Yes, many universities in the US, Canada, UK, and beyond accept it." },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
  className="relative bg-gradient-to-r from-blue-700/80 to-indigo-600/80 text-white py-16 px-6 text-center bg-cover bg-center"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')')`
  }}
>   <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Duolingo English Test Prep</h1>
          <p className="text-sm md:text-base opacity-90">
            Online | Affordable | Accepted Worldwide
          </p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-yellow-600 font-medium px-6 py-2 rounded-md shadow hover:bg-gray-100 transition">
            Book Free Trial Class
          </motion.button>
        </div>
      </section>

      {/* About */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">What is the Duolingo English Test?</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          The Duolingo English Test is a modern, convenient, and affordable test accepted by thousands 
          of institutions worldwide. It evaluates English proficiency in listening, reading, writing, 
          and speaking — all through an online adaptive test and video interview. 
        </p>
      </section>

      {/* Modules */}
      <section className="bg-yellow-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Duolingo Test <span className="text-blue-600 font-bold">Format</span>
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {modules.map((m, i) => (
                <div key={i} className="bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-gray-600">{m.desc}</p>
                </div>
              ))}
            </div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md shadow hover:bg-yellow-600 transition">
              Explore Duolingo Prep
            </motion.button>
          </div>

          <div className="relative flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=500&q=80"
              alt="Student"
              className="rounded-2xl shadow-lg w-64 h-80 object-cover"
            />
            <div className="absolute -left-6 top-10 bg-white shadow-md rounded-lg px-4 py-2">
              <p className="text-lg font-bold text-gray-900">1,50,000+</p>
              <p className="text-xs text-gray-600">Students Trained</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
              alt="Happy Student"
              className="absolute right-0 top-32 rounded-2xl shadow-md w-40 h-52 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-center mb-8">Why Choose Us for Duolingo Prep?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-center">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-lg shadow p-4">
                <summary className="font-medium cursor-pointer">{f.q}</summary>
                <p className="text-sm mt-2 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
     <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Start Your Duolingo Test Prep with Us</h2>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="bg-white text-yellow-600 font-medium px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
          Enroll Now
        </motion.button>
      </section>
    </div>
  );
}
export default DuolingoTest;
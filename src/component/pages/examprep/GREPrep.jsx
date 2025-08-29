import React from "react";
import { motion } from "framer-motion";

 function GREPrep() {
  const modules = [
    { title: "Verbal Reasoning", desc: "Reading comprehension, text completion & vocabulary." },
    { title: "Quantitative Reasoning", desc: "Problem solving, data interpretation & arithmetic." },
    { title: "Analytical Writing", desc: "Essay tasks that test critical thinking & argument building." },
  ];

  const features = [
    { title: "Adaptive Test Format", desc: "Sections adapt based on your performance." },
    { title: "Global Recognition", desc: "Accepted by thousands of graduate & business schools worldwide." },
    { title: "Expert Trainers", desc: "Learn from our GRE faculty with 10+ years of experience." },
    { title: "Mock Exams", desc: "Simulated exams for real GRE experience." },
  ];

  const faqs = [
    { q: "What is the GRE test format?", a: "GRE includes Verbal, Quant, and Analytical Writing sections." },
    { q: "How long is the GRE?", a: "The GRE is around 3 hours 45 minutes." },
    { q: "Who accepts GRE?", a: "Graduate schools, MBA programs, and some law schools." },
    { q: "Can I retake GRE?", a: "Yes, once every 21 days, up to 5 times a year." },
  ];

  return (
    <div className="bg-white text-gray-800">
      <section
  className="relative bg-gradient-to-r from-blue-700/80 to-indigo-600/80 text-white py-16 px-6 text-center bg-cover bg-center"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')`
  }}
>
      <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">GRE Preparation</h1>
          <p className="text-sm md:text-base opacity-90">
            Verbal | Quant | Analytical Writing | Practice Tests
          </p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-green-700 font-medium px-6 py-2 rounded-md shadow hover:bg-gray-100 transition">
            Book Free Trial Class
          </motion.button>
        </div>
      </section>

      {/* About */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">What is the GRE?</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          The Graduate Record Examination (GRE) is a standardized test required for admission 
          into many graduate and business schools worldwide. It measures verbal reasoning, 
          quantitative reasoning, and analytical writing. A good GRE score boosts your chances 
          of securing admission into top programs.
        </p>
      </section>

      {/* Modules */}
      <section className="bg-green-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              GRE <span className="text-blue-600 font-bold" >Exam Modules</span>
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
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md shadow hover:bg-green-700 transition">
              Explore GRE Course
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
        <h2 className="text-xl font-semibold text-center mb-8">Why Choose Us for GRE Prep?</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Start Your GRE Journey with Us</h2>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="bg-white text-green-700 font-medium px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
          Enroll for GRE Coaching
        </motion.button>
      </section>
    </div>
  );
}
export default GREPrep;
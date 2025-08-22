import React from "react";
import { motion } from "framer-motion";

function PTEAcademic() {
  const modules = [
    { title: "Speaking & Writing", desc: "Tests pronunciation, fluency & written communication" },
    { title: "Reading", desc: "Academic texts, MCQs, fill-in-the-blanks" },
    { title: "Listening", desc: "Summarize, highlight, and recognize spoken English" },
  ];

  const features = [
    { title: "AI-Based Scoring", desc: "Get accurate and unbiased scores powered by AI technology." },
    { title: "Worldwide Acceptance", desc: "Accepted by thousands of universities and governments globally." },
    { title: "Fast Results", desc: "Receive results typically within 48 hours of the test." },
    { title: "Smart Preparation", desc: "Practice with real exam formats & AI-driven mock tests." },
  ];

  const faqs = [
    { q: "What is the duration of the PTE Academic test?", a: "The PTE Academic takes about 2 hours to complete." },
    { q: "Where is PTE accepted?", a: "It is accepted for study, work, and migration in countries like Australia, New Zealand, UK, USA, and Canada." },
    { q: "When will I get my results?", a: "Most candidates receive their results within 2 business days." },
    { q: "What is the scoring scale?", a: "PTE Academic is scored on a scale of 10–90." },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
     <section
  className="relative bg-gradient-to-r from-blue-700/80 to-indigo-600/80 text-white py-16 px-6 text-center bg-cover bg-center"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')')`
  }}
>
      <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">PTE Academic Preparation</h1>
          <p className="text-sm md:text-base opacity-90">
            Computer-Based Test | AI-Powered Evaluation | Fast Results
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-purple-700 font-medium px-6 py-2 rounded-md shadow hover:bg-gray-100 transition"
          >
            Book Free Trial Class
          </motion.button>
        </div>
      </section>

      {/* About PTE */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">What is the PTE Academic Test?</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          The Pearson Test of English (PTE Academic) is a computer-based test designed to assess 
          the English language skills of non-native speakers who wish to study or work abroad. 
          With quick results and AI-based scoring, PTE has become a popular choice for international students 
          and professionals. It evaluates real-life English used in academic environments.
        </p>
      </section>

      {/* Modules Section */}
      <section className="bg-purple-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              PTE Exam <span className="text-blue-600 font-bold">Modules & Training</span>
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {modules.map((m, i) => (
                <div key={i} className="bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-gray-600">{m.desc}</p>
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md shadow hover:bg-purple-700 transition"
            >
              Explore PTE Course Details
            </motion.button>
          </div>

          {/* Right */}
          <div className="relative flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=500&q=80"
              alt="PTE Exam Student"
              className="rounded-2xl shadow-lg w-64 h-80 object-cover"
            />
            <div className="absolute -left-6 top-10 bg-white shadow-md rounded-lg px-4 py-2">
              <p className="text-lg font-bold text-gray-900">90</p>
              <p className="text-xs text-gray-600">Max PTE Score</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
              alt="Study Abroad"
              className="absolute right-0 top-32 rounded-2xl shadow-md w-40 h-52 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-center mb-8">Why Choose Us for PTE Prep?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
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
        <h2 className="text-2xl font-semibold mb-4">Start Your PTE Journey with Us</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-700 font-medium px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
        >
          Enroll for PTE Coaching
        </motion.button>
      </section>
    </div>
  );
}
export default PTEAcademic ;
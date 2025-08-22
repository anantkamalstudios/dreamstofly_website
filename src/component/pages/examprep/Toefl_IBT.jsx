import React from "react";
import { motion } from "framer-motion";

function ToeflIBT() {
  const modules = [
    { title: "Reading", desc: "Academic texts, comprehension & inference" },
    { title: "Listening", desc: "Lectures, classroom discussions, conversations" },
    { title: "Speaking", desc: "Expressing opinions & academic discussions" },
    { title: "Writing", desc: "Integrated tasks, academic essays" },
  ];

  const features = [
    { title: "Global Recognition", desc: "Accepted by 11,500+ universities worldwide." },
    { title: "Structured Prep", desc: "Practice with real test formats & mock exams." },
    { title: "Expert Guidance", desc: "Trainers specializing in TOEFL iBT coaching." },
    { title: "Flexible Learning", desc: "Daily classes, weekend batches, and online modes." },
  ];

  const faqs = [
    { q: "Who should take TOEFL iBT?", a: "Students applying to universities abroad, mainly in the USA and Canada." },
    { q: "What is the TOEFL iBT scoring scale?", a: "The total score ranges from 0 to 120, with each section scored 0–30." },
    { q: "How long is the test?", a: "The TOEFL iBT takes about 3 hours including all four sections." },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
     <section
  className="relative bg-gradient-to-r from-blue-700/80 to-indigo-600/80 text-white py-16 px-6 text-center bg-cover bg-center"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')')`
  }}
>
     <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">TOEFL iBT Preparation</h1>
          <p className="text-sm md:text-base opacity-90">
            The Gateway to Your University Dreams | Online & Offline Coaching | Real Mock Tests
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-blue-700 font-medium px-6 py-2 rounded-md shadow hover:bg-gray-100 transition"
          >
            Start Free Demo Class
          </motion.button>
        </div>
      </section>

      {/* Who needs TOEFL */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Why Take the TOEFL iBT Test?</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          TOEFL iBT is one of the most widely accepted English proficiency tests for studying abroad. 
          It evaluates how well you can use and understand English at the university level, 
          covering academic reading, listening, speaking, and writing.  
          With a score out of 120, it is accepted in over 160 countries.
        </p>
      </section>

      {/* Modules Section */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Get trained by <span className="text-blue-700 font-bold">Certified Experts</span> for a higher TOEFL Score
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
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
            >
              Know More About TOEFL iBT
            </motion.button>
          </div>

          {/* Right */}
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
        <h2 className="text-xl font-semibold text-center mb-8">Why Choose Us for TOEFL Preparation?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
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
        <h2 className="text-2xl font-semibold mb-4">Start Your TOEFL Journey with Confidence</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-700 font-medium px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
        >
          Enroll for TOEFL Coaching Now
        </motion.button>
      </section>
    </div>
  );
}
export default ToeflIBT;
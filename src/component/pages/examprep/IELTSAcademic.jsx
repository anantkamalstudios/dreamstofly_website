import React from "react";

function IELTSAcademic () {
  const modules = [
    { title: "Listening", desc: "Spelling, Prediction" },
    { title: "Reading", desc: "Scanning, Skimming" },
    { title: "Writing", desc: "Lexical Resources, Cohesion" },
    { title: "Speaking", desc: "Pronunciation, Fluency, Coherence" },
  ];

  const features = [
    { title: "Experienced Tutors", desc: "Highly trained mentors for your ideal study experience." },
    { title: "Standardized Content", desc: "Prep material designed at the actual exam level." },
    { title: "Support at Every Step", desc: "Guidance via email, phone & social media." },
    { title: "Mock Tests", desc: "Sharpen skills with sectional & full-length mocks." },
  ];

  const faqs = [
    { q: "What is the IELTS Academic score validity?", a: "The score is valid for 2 years." },
    { q: "Can I appear more than once a year?", a: "Yes, you can attempt as many times as needed." },
    { q: "Can I use my smartphone to access the prep portal?", a: "Yes, the prep portal is mobile-friendly." },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section
  className="relative bg-gradient-to-r from-blue-700/80 to-indigo-600/80 text-white py-16 px-6 text-center bg-cover bg-center"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')`
  }}
>
    <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">IELTS Academic Test Prep</h1>
          <p className="text-sm md:text-base opacity-90">
            Daily Live Classes | 5 Full-Length Mock Tests | Speaking & Writing Evaluations
          </p>
          <button className="mt-6 bg-white text-blue-600 font-medium px-6 py-2 rounded-md shadow hover:bg-gray-100 transition">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Who needs IELTS */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Who needs to take the IELTS Academic Test?</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          IELTS Academic is suitable for students planning to study or train in English-speaking countries at undergraduate or postgraduate levels. Professionals such as doctors and nurses also take IELTS for licensing. Recognized globally by universities, the test evaluates listening, reading, writing, and speaking skills.
        </p>
      </section>

      {/* Modules Section */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              We have <span className="text-blue-600 font-bold">100+ Trainers</span> to help you achieve your study abroad dream
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {modules.map((m, i) => (
                <div key={i} className="bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-gray-600">{m.desc}</p>
                </div>
              ))}
            </div>
            <button className="bg-blue-500 text-white font-medium px-6 py-3 rounded-md shadow hover:bg-blue-600 transition">
              Click Here To Know More
            </button>
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
        <h2 className="text-xl font-semibold text-center mb-8">IELTS @ Our Academy - Top Features</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Ready to Achieve Your Dream Band?</h2>
        <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
          Join IELTS Academic Training Now
        </button>
      </section>
    </div>
  );
}
export default IELTSAcademic ;

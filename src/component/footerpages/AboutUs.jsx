import React from "react";
import { motion } from "framer-motion";
import { Users, Globe2, Target, BookOpen, Star } from "lucide-react";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-blue-100 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
              <Users className="w-4 h-4" /> About Us
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Welcome to <span className="text-sky-600">DreamsToFly</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
              Empowering students to achieve their dreams of studying abroad with
              guidance, innovation, and trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-sky-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To simplify the study abroad journey by providing transparent,
              reliable, and personalized guidance to students worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe2 className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted global education platform, connecting
              students with institutions and opportunities across the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              DreamsToFly was founded with a simple belief: every student
              deserves the chance to pursue education abroad without confusion or
              barriers. From humble beginnings, we’ve grown into a trusted
              platform helping thousands of students connect with universities,
              scholarships, and career opportunities across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <BookOpen className="w-8 h-8 text-sky-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600 text-sm">
                We provide honest, clear, and reliable information to every
                student and parent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <Users className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Student First</h3>
              <p className="text-gray-600 text-sm">
                Every decision we make is guided by what benefits the student
                most.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We aim for the highest standards in our services and support to
                students worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
export default AboutUs;
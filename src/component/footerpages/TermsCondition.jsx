import React from "react";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, Scale, Lock, Globe2 } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-blue-100 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
              <FileText className="w-4 h-4" /> Terms & Conditions
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Our <span className="text-sky-600">Terms & Conditions</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
              Please read these terms carefully before using DreamsToFly.  
              By accessing our website, you agree to these conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section 1 */}
          <motion.div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-sky-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              By using our website, services, or engaging with our content, you agree to abide by these Terms and Conditions, our Privacy Policy, and any other applicable policies. If you do not agree, kindly discontinue use of our platform.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">User Responsibilities</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide accurate and genuine information while using our services.</li>
              <li>Respect intellectual property rights of DreamsToFly and third parties.</li>
              <li>Do not misuse or attempt to disrupt our platform, services, or security systems.</li>
            </ul>
          </motion.div>

          {/* Section 3 */}
          <motion.div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-green-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Privacy & Data Usage</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We value your privacy. Information you share with us will be handled in accordance with our Privacy Policy. By using our website, you consent to the collection and use of your data as described therein.
            </p>
          </motion.div>

          {/* Section 4 */}
          <motion.div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Globe2 className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Third-Party Links</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our platform may contain links to third-party websites. DreamsToFly does not endorse, control, or take responsibility for the content, policies, or practices of any external sites.
            </p>
          </motion.div>

          {/* Section 5 */}
          <motion.div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-red-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Changes to Terms</h2>
            </div>
          
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}

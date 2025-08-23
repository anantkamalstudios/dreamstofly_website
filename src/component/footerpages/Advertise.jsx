import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Building2,
  BadgeCheck,
  Globe2,
  Target,
  LayoutGrid,
  RotateCw,
  ServerCog,
  Bell,
  Link2,
  Mail,
  ArrowRight,
} from "lucide-react";

// Replace with your email
const AD_EMAIL = "advertising@dreamstofly.com";

const offersInstitutes = [
  "Creation of a separate microsite for the institute",
  "Responsive presentation of image and other creative",
  "Guaranteed rise in user interaction and click-through rate",
  "Option to migrate traffic through referral link",
  "Add your own API to get instant notification of candidates seeking information",
];

const offersAdvertisers = [
  "Ample space for third-party banners",
  "Algorithm places banners only on relevant pages",
  "Ad rotation policy ensures sustainable reach & frequency",
];

const adFormats = [
  { icon: LayoutGrid, title: "Sidebar Banners", desc: "High-visibility placements across our most-read pages." },
  { icon: LayoutGrid, title: "Footer Banners", desc: "Persistent placements with great CPM efficiency." },
  { icon: Link2, title: "Text Links", desc: "Native-style links blended into relevant content." },
  { icon: Bell, title: "Opt-in Mailers", desc: "Target our verified, opt-in student & parent audience." },
  { icon: ServerCog, title: "Microsites", desc: "A dedicated, SEO-friendly hub for your institute." },
  { icon: RotateCw, title: "API Integration", desc: "Instant lead notifications and CRM handoff." },
];

const FeatureItem = ({ children }) => (
  <li className="flex items-start gap-3 text-gray-700">
    <BadgeCheck className="w-5 h-5 flex-shrink-0" aria-hidden />
    <span>{children}</span>
  </li>
);

function Advertise() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-blue-100 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
              <Megaphone className="w-4 h-4" /> Advertise with DreamsToFly
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
               Adververtising for <span className="text-sky-600">Study Abroad</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
              India’s most innovative and interactive education portal with an ergonomically designed interface that maximizes conversions.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`mailto:${AD_EMAIL}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-sky-600 text-white font-semibold shadow-sm hover:bg-sky-700 transition"
              >
                <Mail className="w-5 h-5 mr-2" /> Email us
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-sky-200 text-sky-700 font-semibold hover:bg-sky-50 transition"
              >
                Book a call <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What we offer</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Institutes */}
            <motion.div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-sky-100 text-sky-700">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Educational Institutes</h3>
              </div>
              <ul className="space-y-3">
                {offersInstitutes.map((item, i) => (
                  <FeatureItem key={i}>{item}</FeatureItem>
                ))}
              </ul>
            </motion.div>

            {/* Advertisers */}
            <motion.div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700">
                  <Megaphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Advertisers</h3>
              </div>
              <ul className="space-y-3">
                {offersAdvertisers.map((item, i) => (
                  <FeatureItem key={i}>{item}</FeatureItem>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ad formats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Ad formats we support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {adFormats.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                className="rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md bg-white"
              >
                <Icon className="w-6 h-6" aria-hidden />
                <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Tell us about your campaign</h2>
            <p className="mt-1 text-gray-600">Share a few details and we’ll get back within one business day.</p>

            <form
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = [
                  `Name: ${data.get("name")}`,
                  `Email: ${data.get("email")}`,
                  `Company: ${data.get("company")}`,
                  `Goal: ${data.get("goal")}`,
                  `Budget: ${data.get("budget")}`,
                  `Message: ${data.get("message")}`,
                ].join("%0D%0A");
                window.location.href = `mailto:${AD_EMAIL}?subject=Advertising%20Inquiry&body=${body}`;
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Campaign Goal</label>
                <select name="goal" className="mt-1 w-full rounded-xl border px-3 py-2">
                  <option>Lead generation</option>
                  <option>Brand awareness</option>
                  <option>Traffic</option>
                  <option>Event promotion</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Budget</label>
                <select name="budget" className="mt-1 w-full rounded-xl border px-3 py-2">
                  <option>Under ₹50k</option>
                  <option>₹50k – ₹2L</option>
                  <option>₹2L – ₹5L</option>
                  <option>₹5L+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row justify-between gap-3">
                <p className="text-sm text-gray-500">
                  Or email us directly at{" "}
                  <a className="font-medium text-sky-700 hover:underline" href={`mailto:${AD_EMAIL}`}>
                    {AD_EMAIL}
                  </a>
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      
    </div>
  );
}
export default Advertise;
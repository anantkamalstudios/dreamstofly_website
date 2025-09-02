import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
} from "lucide-react";

const ServiceCTA = ({ service, details }) => {
  if (!service || !details) return null;

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Subtle background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              Ready to Get Started with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {service.title}?
              </span>
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of successful students. Let us guide you through
              the process.
            </p>
          </div>

          {/* Compact Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-1">10K+</p>
              <p className="text-xs text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Star className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-1">95%</p>
              <p className="text-xs text-gray-600">Success</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-1">24/7</p>
              <p className="text-xs text-gray-600">Support</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Star className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-1">50+</p>
              <p className="text-xs text-gray-600">Countries</p>
            </div>
          </div>

          {/* Compact Action Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {/* Quick Start */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-3">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quick Start
              </h3>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                Fill out our form above and get started immediately.
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Free Consultation */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Free Consultation
              </h3>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                Schedule a free consultation to discuss your needs.
              </p>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                Book Now
              </button>
            </div>

            {/* Direct Contact */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Direct Contact
              </h3>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                Call or email us for immediate assistance.
              </p>
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Compact Contact Information */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Get in Touch Today
              </h3>
              <p className="text-sm text-gray-600">
                Our expert team is ready to help you succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  Call Us
                </h4>
                <p className="text-xs text-gray-600 mb-1">+1 (234) 567-890</p>
                <p className="text-xs text-gray-500">Mon-Fri: 9AM-6PM EST</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  Email Us
                </h4>
                <p className="text-xs text-gray-600 mb-1">
                  info@dreamstofly.com
                </p>
                <p className="text-xs text-gray-500">Response within 2 hours</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  Live Chat
                </h4>
                <p className="text-xs text-gray-600 mb-1">Available 24/7</p>
                <p className="text-xs text-gray-500">Instant responses</p>
              </div>
            </div>

            {/* Compact Final CTA */}
            <div className="text-center mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3">
                Don't wait to start your journey. Every day counts.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 px-6 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 mx-auto group">
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;

import React from "react";

const ServicesCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6 backdrop-blur-sm border border-white/30">
            Ready to Start?
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Journey?
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Our expert team is here to guide you through every step of your
            study abroad experience. Get personalized assistance and make your
            dreams take flight today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Contact Our Team
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📞
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Call Us</h3>
              <p className="text-blue-100 text-lg mb-2">+1 (555) 123-4567</p>
              <p className="text-blue-100 text-sm opacity-80">24/7 Support</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                💬
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Chat Live</h3>
              <p className="text-blue-100 text-lg mb-2">Available Now</p>
              <p className="text-blue-100 text-sm opacity-80">
                Instant Response
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📧
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Email Us</h3>
              <p className="text-blue-100 text-lg mb-2">info@dreamstofly.com</p>
              <p className="text-blue-100 text-sm opacity-80">Within 2 Hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;

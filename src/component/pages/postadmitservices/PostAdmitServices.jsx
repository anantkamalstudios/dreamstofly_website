// src/components/pages/PostAdmitServices.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Home,
  DollarSign,
  FileText,
  Star,
  Phone,
  Shield,
  ArrowRight,
  Sparkles,
  Globe,
  Award,
  Clock,
} from "lucide-react";

import FreePlanModal from './FreePlanModal';
import PremiumPlanModal from './PremiumPlanModal';

const PostAdmitServices = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [studentCount, setStudentCount] = useState(0);
  const [visaCount, setVisaCount] = useState(0);
  const [countryCount, setCountryCount] = useState(0);
  const [openModal, setOpenModal] = useState(null);

  const heroTexts = ["Study Abroad Dreams", "Global Education Success", "Your Future Awaits"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const typeText = () => {
      const currentText = heroTexts[currentTextIndex];
      let index = 0;
      setTypedText("");
      const typeInterval = setInterval(() => {
        if (index <= currentText.length) {
          setTypedText(currentText.substring(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
          }, 2000);
        }
      }, 100);
    };

    typeText();
    const textInterval = setInterval(typeText, 5000);

    const studentInterval = setInterval(() => {
      setStudentCount(prev => prev < 10000 ? prev + 150 : 10000);
    }, 30);

    const visaInterval = setInterval(() => {
      setVisaCount(prev => prev < 99 ? prev + 2 : 99);
    }, 80);

    const countryInterval = setInterval(() => {
      setCountryCount(prev => prev < 50 ? prev + 1 : 50);
    }, 120);

    setTimeout(() => {
      clearInterval(studentInterval);
      clearInterval(visaInterval);
      clearInterval(countryInterval);
    }, 3000);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(textInterval);
      clearInterval(studentInterval);
      clearInterval(visaInterval);
      clearInterval(countryInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentTextIndex]);

  const services = [
    {
      id: "free",
      title: "Essential Support",
      subtitle: "Complete guidance at zero cost",
      price: "FREE",
      originalPrice: "₹2,00,000",
      features: ["Visa counselling & documentation", "Loan application assistance", "Accommodation support", "Pre-departure briefing"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop&auto=format",
      icon: <Shield className="w-5 h-5" />,
      popular: false
    },
    {
      id: "premium",
      title: "Premium Experience", 
      subtitle: "Complete end-to-end excellence",
      price: "₹35,000",
      features: ["Mock visa interviews & training", "Premium accommodation selection", "Cultural mentor abroad", "24/7 support for first month"],
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop&auto=format",
      icon: <Star className="w-5 h-5" />,
      popular: true
    }
  ];

  const differentiators = [
    { title: "Smart Loan Solutions", description: "Collateral-free & low-interest loans", icon: <DollarSign className="w-5 h-5" /> },
    { title: "Visa Excellence", description: "99% visa success rate with expert guidance", icon: <FileText className="w-5 h-5" /> },
    { title: "Premium Housing", description: "Verified, safe housing near campus", icon: <Home className="w-5 h-5" /> },
    { title: "Cultural Integration", description: "Local mentors for seamless adaptation", icon: <Users className="w-5 h-5" /> }
  ];

  const stats = [
    { number: `${Math.floor(studentCount/1000)}K+`, label: "Students", icon: <Users className="w-4 h-4" /> },
    { number: `${visaCount}%`, label: "Visa Success", icon: <Award className="w-4 h-4" /> },
    { number: `${countryCount}+`, label: "Countries", icon: <Globe className="w-4 h-4" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Mouse gradient */}
      <div className="fixed inset-0 pointer-events-none transition-opacity duration-300 z-0" style={{ background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,115,223,0.05), transparent 40%)` }} />
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-44 h-44 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-1 mb-6 shadow-sm text-sm font-medium text-gray-700">
        <Sparkles className="w-4 h-4 text-blue-500" />
        Post Admit Services
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
        Seamless Support for
        <span className="block text-blue-600 typing min-h-[1.5em]">
          {typedText}
        </span>
      </h1>

      {/* Paragraph */}
      <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
        End-to-end assistance from visa to accommodation — ensuring a smooth transition for your global education journey.
      </p>
    </motion.div>
  </div>
</section>



      {/* Services Section */}
      <section className="py-10 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Choose Your <span className="text-blue-600">Perfect Plan</span>
            </h2>
            <p className="text-base text-gray-600">Tailored services for every requirement</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05 }}
                className={`relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${service.popular ? 'ring-2 ring-blue-500/40' : ''}`}
              >
                <div className="relative h-40 overflow-hidden cursor-pointer">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.15 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 p-2 rounded-lg bg-white/90 backdrop-blur-sm text-blue-600 shadow">{service.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.subtitle}</p>
                  <button onClick={() => setOpenModal(service.id)} className="w-full py-3 rounded-xl font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl transition-all duration-300 text-sm flex items-center justify-center gap-2">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-10 px-6 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Why Choose <span className="text-blue-600">Our Services?</span>
            </h2>
            <p className="text-base text-gray-600">Comprehensive support that sets us apart</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100/50 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Start Your <span className="block bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">Global Journey?</span>
          </h2>
          <p className="text-base text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
            Join thousands of successful students. Your global education adventure starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-blue-600 px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm">
              <Phone className="w-5 h-5" /> Start Your Journey
            </button>
            <button className="group border-2 border-white/50 text-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm text-sm">
              Download Guide
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> No hidden fees</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Expert guidance</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Success guarantee</div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {openModal === 'free' && <FreePlanModal onClose={() => setOpenModal(null)} />}
      {openModal === 'premium' && <PremiumPlanModal onClose={() => setOpenModal(null)} />}
    </div>
  );
};

export default PostAdmitServices;

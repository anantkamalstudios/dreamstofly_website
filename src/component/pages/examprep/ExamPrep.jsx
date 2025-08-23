import React, { useState, useEffect, useRef } from "react";
import { 
  Star, Clock, MessageCircle, Globe, Shield, DollarSign, Eye, 
  ChevronRight, Play, Users, Award, Target
} from "lucide-react";

const ExamPrep = () => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    students: 0,
    successRate: 0,
    trainers: 0,
    countries: 0
  });
  const [flipped, setFlipped] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const statsRef = useRef(null);

  const typingTexts = [
    "Master IELTS with expert guidance",
    "Achieve your dream TOEFL score",
    "Excel in GRE with training",
    "Pass PTE with confidence"
  ];

  // Typing animation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (charIndex < typingTexts[textIndex].length) {
        setCurrentText(prev => prev + typingTexts[textIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setCurrentText("");
          setTextIndex(prev => (prev + 1) % typingTexts.length);
        }, 1500);
      }
    }, 80);
    return () => clearTimeout(timer);
  }, [charIndex, textIndex]);

  // Animated number counters
  useEffect(() => {
    const targets = { students: 2000000, successRate: 98, trainers: 500, countries: 50 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    const counters = { students: 0, successRate: 0, trainers: 0, countries: 0 };

    const timer = setInterval(() => {
      let allComplete = true;
      Object.keys(targets).forEach(key => {
        if (counters[key] < targets[key]) {
          allComplete = false;
          counters[key] = Math.min(counters[key] + targets[key] / steps, targets[key]);
          setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(counters[key]) }));
        }
      });
      if (allComplete) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // IntersectionObserver for stats/trustpilot animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  const examPreparations = [
    { id: "IELTS-ACEDEMIC", name: "IELTS Academic", logo: "🎯", image: "https://images.unsplash.com/photo-1581091215361-7dca71d4c8f2?auto=format&fit=crop&w=800&q=80", description: "Reading, Writing, Listening & Speaking", backText: "Master all 4 skills with personalized coaching and practice tests.", students: "50K+", rating: "4.8" },
    { id: "IELTS", name: "IELTS General", logo: "📚", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80", description: "Immigration & work visa prep", backText: "Perfect for immigration with real-world scenarios and mock tests.", students: "35K+", rating: "4.7" },
    { id: "ToeflIBT", name: "TOEFL-iBT", logo: "🌐", image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80", description: "Interactive online preparation", backText: "Computer-based training with AI feedback and practice sessions.", students: "28K+", rating: "4.9" },
    { id: "PTEAcademic", name: "PTE Academic", logo: "⚡", image: "https://images.unsplash.com/photo-1554774853-bc78e2db57d4?auto=format&fit=crop&w=800&q=80", description: "Fast-track preparation", backText: "Quick results in 2-3 days with computer-scored accuracy.", students: "22K+", rating: "4.6" },
    { id: "DuolingoTest", name: "Duolingo Test", logo: "🦉", image: "https://images.unsplash.com/photo-1596496054972-c01a83edb3c2?auto=format&fit=crop&w=800&q=80", description: "Convenient online testing", backText: "Take from home with 48-hour results. 4,000+ institutions.", students: "18K+", rating: "4.5" },
    { id: "GREPrep", name: "GRE", logo: "🎓", image: "https://images.unsplash.com/photo-1581092795361-83a9b94782ec?auto=format&fit=crop&w=800&q=80", description: "Graduate school prep", backText: "Verbal, Quantitative & Writing preparation for top schools.", students: "15K+", rating: "4.8" }
  ];

  const trustpilotFeatures = [
    { icon: <Clock className="w-4 h-4" />, title: "Book instantly", delay: 0 },
    { icon: <MessageCircle className="w-4 h-4" />, title: "24/7 Support", delay: 100 },
    { icon: <Globe className="w-4 h-4" />, title: "93+ Countries", delay: 200 },
    { icon: <Shield className="w-4 h-4" />, title: "Trustworthy", delay: 300 },
    { icon: <DollarSign className="w-4 h-4" />, title: "Affordable", delay: 400 },
    { icon: <Eye className="w-4 h-4" />, title: "No hidden fees", delay: 500 }
  ];

  const stats = [
    { icon: <Users className="w-5 h-5" />, number: `${(animatedNumbers.students / 1000000).toFixed(1)}M+`, label: "Students", delay: 0 },
    { icon: <Award className="w-5 h-5" />, number: `${animatedNumbers.successRate}%`, label: "Success Rate", delay: 100 },
    { icon: <Target className="w-5 h-5" />, number: `${animatedNumbers.trainers}+`, label: "Trainers", delay: 200 },
    { icon: <Globe className="w-5 h-5" />, number: `${animatedNumbers.countries}+`, label: "Countries", delay: 300 }
  ];

  const partners = [
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
    { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
    { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" }
  ];

  const handleGetStarted = (examId, event) => {
    event.stopPropagation();
    window.location.href = `/${examId}`;
  };

  const toggleFlip = (id) => setFlipped(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/20">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-white via-blue-50 to-[#0073df]/10 py-12 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center px-4">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-[#0073df] bg-clip-text text-transparent">
            Exam Preparation
          </h1>
          <div className="h-8 mb-6 flex items-center justify-center">
            <span className="text-lg text-gray-600">
              {currentText}<span className="animate-pulse text-[#0073df]">|</span>
            </span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Comprehensive test preparation with expert guidance and proven strategies
          </p>
        </div>
      </div>

      {/* Exam Cards */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Choose Your <span className="text-[#0073df]">Exam</span>
            </h2>
            <p className="text-gray-600">Expert-designed courses with personalized learning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examPreparations.map(exam => (
              <div key={exam.id} className="group relative h-80 [perspective:1000px] cursor-pointer" onClick={() => toggleFlip(exam.id)}>
                <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${flipped[exam.id] ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"}`}>
                  {/* Front */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden">
                    <img src={exam.image} alt={exam.name} className="h-32 w-full object-cover"/>
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="text-3xl">{exam.logo}</div>
                      <h3 className="text-lg font-bold text-gray-900 mt-2">{exam.name}</h3>
                      <p className="text-gray-600 text-sm flex-grow">{exam.description}</p>
                      <div className="flex justify-between items-center mt-2 text-sm">
                        <span>{exam.students}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current"/>
                          <span>{exam.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#0073df] to-blue-700 rounded-xl shadow-lg text-white p-4 flex flex-col">
                    <div className="text-3xl mb-2">{exam.logo}</div>
                    <h3 className="text-lg font-bold mb-2">{exam.name}</h3>
                    <p className="text-blue-100 text-sm flex-grow">{exam.backText}</p>
                    <div className="flex items-center justify-between text-sm mt-3">
                      <span>{exam.students} students</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-300 fill-current"/>
                        <span>{exam.rating}</span>
                      </div>
                    </div>
                    <button onClick={(e) => handleGetStarted(exam.id, e)} className="mt-3 w-full bg-white text-[#0073df] font-semibold py-2 rounded-lg hover:bg-blue-50">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div ref={statsRef} className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Our <span className="text-[#0073df]">Achievement</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-[#0073df] rounded-xl flex items-center justify-center text-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trustpilot */}
      <div className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-green-500 fill-current animate-pulse" />
              <span className="text-2xl font-bold text-gray-900">Trustpilot</span>
              <div className="flex items-center space-x-2 ml-4">
                <span className="text-lg font-bold">4.7</span>
                <div className="flex animate-bounce">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-green-500 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">• 4,700+ Reviews</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustpilotFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group flex flex-col items-center text-center p-4 rounded-lg bg-white hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 animate-pulse ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${feature.delay}ms`, animationDelay: `${feature.delay}ms` }}
              >
                <div className="w-10 h-10 bg-[#0073df] rounded-lg flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 mb-2">
                  <div className="group-hover:animate-bounce">
                    {feature.icon}
                  </div>
                </div>
                <span className="text-gray-700 text-sm font-medium">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Trusted <span className="text-[#0073df]">Partners</span>
            </h2>
          </div>
          
          <div className="relative overflow-hidden">
            <div
              className="flex space-x-6 animate-scroll"
              style={{
                animation: 'scroll 20s linear infinite',
                width: 'calc(200%)',
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-110 group border border-gray-100"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-xs font-semibold text-gray-700 text-center px-2">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative py-12 bg-gradient-to-r from-[#0073df] to-blue-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: "2s"}}></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Begin Your Success Journey?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of successful students with our expert guidance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-[#0073df] font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg animate-bounce">
              <span className="flex items-center justify-center gap-2">
                <Target className="w-4 h-4 group-hover:animate-spin" />
                Start Assessment
              </span>
            </button>
            <button className="group bg-white/20 border border-white/40 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-[#0073df] transform hover:scale-105 transition-all duration-300 animate-pulse">
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ExamPrep;

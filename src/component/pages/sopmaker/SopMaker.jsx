import React, { useState, useEffect } from "react";
import { 
  FileText, 
  Download, 
  Copy, 
  CheckCircle, 
  PenLine, 
  GraduationCap, 
  Target,
  User,
  BookOpen,
  Trophy,
  Heart,
  Building,
  Lightbulb,
  Star,
  Zap,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles
} from "lucide-react";

export default function SopMaker() {
  const [formData, setFormData] = useState({
    name: "",
    university: "",
    course: "",
    currentEducation: "",
    workExperience: "",
    goals: "",
    achievements: "",
    motivation: "",
    whyUniversity: "",
    whyCourse: "",
    contribution: ""
  });

  const [sop, setSop] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('personal');
  const [completedSections, setCompletedSections] = useState([]);
  const [progress, setProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");

  const heroTexts = ["Statement of Purpose", "Your Academic Future", "Dream University Path"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const sections = [
    { id: 'personal', name: 'Personal Info', icon: User },
    { id: 'academic', name: 'Academic Background', icon: BookOpen },
    { id: 'goals', name: 'Goals & Motivation', icon: Target },
    { id: 'preview', name: 'Generate SOP', icon: FileText }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
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

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      clearInterval(textInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentTextIndex]);

  const handleChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
    updateProgress(newFormData);
  };

  const updateProgress = (data) => {
    const totalFields = Object.keys(data).length;
    const filledFields = Object.values(data).filter(value => value.trim() !== '').length;
    const newProgress = Math.round((filledFields / totalFields) * 100);
    setProgress(newProgress);
  };

  const markSectionComplete = (sectionId) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId]);
    }
  };

  const generateSop = () => {
    const { 
      name, 
      university, 
      course, 
      currentEducation,
      workExperience,
      goals, 
      achievements, 
      motivation, 
      whyUniversity,
      whyCourse,
      contribution 
    } = formData;

    const template = `Statement of Purpose

Dear Admissions Committee,

I am ${name || "[Your Name]"}, and I am writing to express my strong interest in pursuing ${course || "[Course Name]"} at ${university || "[University Name]"}. With my background in ${currentEducation || "[Your Current Education]"}, I am eager to take the next step in my academic journey.

ACADEMIC BACKGROUND & EXPERIENCE
${currentEducation ? `My educational foundation in ${currentEducation} has equipped me with fundamental knowledge and analytical skills.` : "My academic journey has been marked by consistent dedication to learning and growth."} ${workExperience ? `Additionally, my professional experience in ${workExperience} has provided me with practical insights and real-world application of theoretical concepts.` : ""}

KEY ACHIEVEMENTS
${achievements || "Throughout my academic and professional journey, I have demonstrated commitment to excellence through various accomplishments that have shaped my perspective and strengthened my resolve to pursue higher education."}

WHY THIS COURSE
${whyCourse || "I am particularly drawn to this program because of its comprehensive curriculum, research opportunities, and alignment with my career aspirations. The interdisciplinary approach and emphasis on practical application make it an ideal fit for my academic goals."}

WHY THIS UNIVERSITY
${whyUniversity || "I am impressed by the university's reputation for academic excellence, distinguished faculty, and commitment to innovation. The institution's values align perfectly with my own academic philosophy and career objectives."}

MOTIVATION & INSPIRATION
${motivation || "My passion for this field stems from a deep-seated curiosity and desire to contribute meaningfully to the discipline. I am motivated by the potential to make a positive impact through research, innovation, and practical application of knowledge."}

FUTURE GOALS
My long-term goal is ${goals || "to leverage the knowledge and skills gained from this program to make significant contributions to my chosen field, whether through research, industry leadership, or academic pursuits"}. This program represents a crucial step toward achieving these aspirations.

CONTRIBUTION TO THE UNIVERSITY
${contribution || "I believe I can contribute to the university community through my diverse perspective, collaborative spirit, and commitment to academic excellence. I am eager to engage with fellow students, participate in research projects, and contribute to the vibrant academic environment."}

I am confident that ${university || "this esteemed institution"} will provide the ideal environment for my academic and personal growth. I am excited about the opportunity to be part of this distinguished community and contribute to its legacy of excellence.

Thank you for considering my application. I look forward to the opportunity to discuss my candidacy further.

Sincerely,
${name || "[Your Name]"}`;

    setSop(template);
    setActiveSection('preview');
    markSectionComplete('preview');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sop);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const downloadSOP = () => {
    const element = document.createElement("a");
    const file = new Blob([sop], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${formData.name || 'Your'}_SOP.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'personal':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 p-6 rounded-2xl border border-gray-200 relative overflow-hidden shimmer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-[#0073df] rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
                  <p className="text-gray-600">Let's start with your basic details</p>
                </div>
              </div>
            </div>
            
            {[
              { label: "Full Name", name: "name", placeholder: "Enter your full name", icon: User },
              { label: "Target University", name: "university", placeholder: "e.g., Harvard University, MIT", icon: Building },
              { label: "Desired Course/Program", name: "course", placeholder: "e.g., Master's in Computer Science", icon: GraduationCap }
            ].map((field, index) => (
              <div key={index} className="group">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <field.icon className="w-4 h-4 text-[#0073df]" />
                  {field.label}
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0073df] focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-gray-800 font-medium group-hover:border-gray-300 transform group-hover:scale-105"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
        );

      case 'academic':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 p-6 rounded-2xl border border-gray-200 relative overflow-hidden shimmer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-[#0073df] rounded-full flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Academic & Professional Background</h3>
                  <p className="text-gray-600">Tell us about your educational journey</p>
                </div>
              </div>
            </div>

            {[
              { 
                label: "Current Education", 
                name: "currentEducation", 
                placeholder: "e.g., Bachelor's in Engineering, Currently pursuing MBA",
                icon: BookOpen,
                type: "textarea"
              },
              { 
                label: "Work Experience", 
                name: "workExperience", 
                placeholder: "Describe your professional experience, internships, or relevant projects",
                icon: Building,
                type: "textarea"
              },
              { 
                label: "Key Achievements", 
                name: "achievements", 
                placeholder: "Academic awards, publications, certifications, leadership roles, etc.",
                icon: Trophy,
                type: "textarea"
              }
            ].map((field, index) => (
              <div key={index} className="group">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <field.icon className="w-4 h-4 text-[#0073df]" />
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0073df] focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-gray-800 font-medium resize-none group-hover:border-gray-300 transform group-hover:scale-105"
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0073df] focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-gray-800 font-medium group-hover:border-gray-300 transform group-hover:scale-105"
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
          </div>
        );

      case 'goals':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 p-6 rounded-2xl border border-gray-200 relative overflow-hidden shimmer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-[#0073df] rounded-full flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Goals & Motivation</h3>
                  <p className="text-gray-600">Share your aspirations and motivations</p>
                </div>
              </div>
            </div>

            {[
              { 
                label: "Why This Course?", 
                name: "whyCourse", 
                placeholder: "Explain why you're interested in this specific program",
                icon: BookOpen
              },
              { 
                label: "Why This University?", 
                name: "whyUniversity", 
                placeholder: "What attracts you to this particular institution?",
                icon: Building
              },
              { 
                label: "Career Goals", 
                name: "goals", 
                placeholder: "Describe your short-term and long-term career objectives",
                icon: Target
              },
              { 
                label: "Motivation & Inspiration", 
                name: "motivation", 
                placeholder: "What drives your passion for this field?",
                icon: Heart
              },
              { 
                label: "Your Contribution", 
                name: "contribution", 
                placeholder: "How will you contribute to the university community?",
                icon: Lightbulb
              }
            ].map((field, index) => (
              <div key={index} className="group">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <field.icon className="w-4 h-4 text-[#0073df]" />
                  {field.label}
                </label>
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0073df] focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-gray-800 font-medium resize-none group-hover:border-gray-300 transform group-hover:scale-105"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
        );

      case 'preview':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0073df] to-blue-700 text-white shadow-lg rounded-2xl p-6 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Your Statement of Purpose</h3>
                  <p className="text-white/80">Review your generated SOP</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 max-h-80 overflow-y-auto whitespace-pre-wrap text-sm leading-relaxed">
                {sop || "Click 'Generate SOP' to create your statement of purpose."}
              </div>

              {sop && (
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={copyToClipboard}
                    className="flex-1 bg-white text-[#0073df] font-semibold py-2 rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 transform hover:scale-105"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-500" /> 
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" /> 
                        Copy SOP
                      </>
                    )}
                  </button>
                  <button
                    onClick={downloadSOP}
                    className="flex-1 bg-white text-[#0073df] font-semibold py-2 rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 transform hover:scale-105"
                  >
                    <Download className="w-4 h-4" /> 
                    Download
                  </button>
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      
      {/* Mouse following gradient */}
      <div 
        className="fixed inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,115,223,0.03), transparent 40%)`
        }}
      />

      {/* Floating elements */}
      <div 
        className="absolute top-10 left-10 w-32 h-32 rounded-full blur-2xl opacity-30"
        style={{
          background: 'linear-gradient(45deg, rgba(0,115,223,0.2), rgba(0,115,223,0.1))',
          animation: 'float 8s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-2xl opacity-30"
        style={{
          background: 'linear-gradient(45deg, rgba(0,115,223,0.15), rgba(0,115,223,0.05))',
          animation: 'float 10s ease-in-out infinite reverse'
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        @keyframes typing { 
          from { width: 0; } 
          to { width: 100%; } 
        }
        @keyframes blink { 
          50% { border-color: transparent; } 
        }
        .typing { 
          border-right: 2px solid #0073df;
          animation: blink 1s infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        .shimmer:hover::before {
          left: 100%;
        }
      `}</style>

      <div className="relative z-10 py-12 px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-2 mb-4 shadow-sm text-sm font-medium text-gray-700">
              <Sparkles className="w-4 h-4 text-[#0073df]" />
              SOP Maker
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-[#0073df] bg-clip-text text-transparent">
              SOP Maker
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              Create Your Perfect
              <span className="block text-[#0073df] typing min-h-[1.2em]">
                {typedText}
              </span>
            </h2>
            
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Create a professional, structured, and compelling Statement of Purpose with ease. 
              Fill out your details step by step and generate your SOP instantly.
            </p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mt-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-600">Progress: {progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-[#0073df] h-3 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Navigation Tabs */}
          <div className="bg-white rounded-2xl shadow-lg p-2 mb-8 border border-gray-200">
            <div className="flex flex-wrap gap-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-gray-800 to-[#0073df] text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <section.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{section.name}</span>
                  {completedSections.includes(section.id) && (
                    <CheckCircle2 className="w-4 h-4" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-slate-50/20 pointer-events-none"></div>
            <div className="relative z-10">
              

              {renderSection()}

{/* Action Buttons */}
<div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
  <div className="flex items-center gap-2 text-sm text-gray-500">
    <Zap className="w-4 h-4 text-[#0073df]" />
    <span>Fill all sections for best results</span>
  </div>

  {/* Navigation Flow */}
  {activeSection === "personal" && (
    <button
      onClick={() => setActiveSection("academic")}
      className="group relative overflow-hidden bg-gradient-to-r from-gray-800 to-[#0073df] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#005bb5] hover:to-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg transform hover:scale-105"
    >
      Next <ArrowRight className="w-4 h-4" />
    </button>
  )}

  {activeSection === "academic" && (
    <div className="flex gap-3">
      <button
        onClick={() => setActiveSection("personal")}
        className="bg-gray-100 text-gray-700 px-6 py-2 rounded-xl font-medium hover:bg-gray-200 transition-all"
      >
        Back
      </button>
      <button
        onClick={() => setActiveSection("goals")}
        className="group relative overflow-hidden bg-gradient-to-r from-gray-800 to-[#0073df] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#005bb5] hover:to-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg transform hover:scale-105"
      >
        Next <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )}

  {activeSection === "goals" && (
    <div className="flex gap-3">
      <button
        onClick={() => setActiveSection("academic")}
        className="bg-gray-100 text-gray-700 px-6 py-2 rounded-xl font-medium hover:bg-gray-200 transition-all"
      >
        Back
      </button>
      <button
        onClick={generateSop}
        className="group relative overflow-hidden bg-gradient-to-r from-gray-800 to-[#0073df] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#005bb5] hover:to-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg transform hover:scale-105"
      >
        <GraduationCap className="w-5 h-5" />
        Generate SOP
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )}

  {activeSection === "preview" && (
    <div className="text-sm text-[#0073df] font-medium flex items-center gap-2">
      <CheckCircle2 className="w-4 h-4" />
      SOP Generated Successfully!
    </div>
  )}
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React, { useState, useEffect } from "react";
// import {
//   FileText,
//   Download,
//   Copy,
//   CheckCircle,
//   GraduationCap,
//   Target,
//   User,
//   BookOpen,
//   Trophy,
//   Heart,
//   Building,
//   Lightbulb,
//   Zap,
//   ArrowRight,
//   CheckCircle2,
//   Clock,
//   Sparkles,
// } from "lucide-react";

// export default function SopMaker() {
//   const [sopFormData, setsopFormData] = useState({
//     name: "",
//     university: "",
//     course: "",
//     currentEducation: "",
//     workExperience: "",
//     goals: "",
//     achievements: "",
//     motivation: "",
//     whyUniversity: "",
//     whyCourse: "",
//     contribution: "",
//   });

//   const [sop, setSop] = useState("");
//   const [copied, setCopied] = useState(false);
//   const [activeSection, setActiveSection] = useState("personal");
//   const [completedSections, setCompletedSections] = useState([]);
//   const [progress, setProgress] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);
//   const [typedText, setTypedText] = useState("");

//   const heroTexts = [
//     "Statement of Purpose",
//     "Your Academic Future",
//     "Dream University Path",
//   ];
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);

//   const sections = [
//     { id: "personal", name: "Personal Info", icon: User },
//     { id: "academic", name: "Academic Background", icon: BookOpen },
//     { id: "goals", name: "Goals & Motivation", icon: Target },
//     { id: "preview", name: "Generate SOP", icon: FileText },
//   ];

//   useEffect(() => {
//     setIsVisible(true);

//     // Typing animation
//     const typeText = () => {
//       const currentText = heroTexts[currentTextIndex];
//       let index = 0;
//       setTypedText("");

//       const typeInterval = setInterval(() => {
//         if (index <= currentText.length) {
//           setTypedText(currentText.substring(0, index));
//           index++;
//         } else {
//           clearInterval(typeInterval);
//           setTimeout(() => {
//             setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
//           }, 2000);
//         }
//       }, 100);
//     };

//     typeText();
//     const textInterval = setInterval(typeText, 5000);

//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       clearInterval(textInterval);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [currentTextIndex]);

//   const handleChange = (e) => {
//     const newsopFormData = { ...sopFormData, [e.target.name]: e.target.value };
//     setsopFormData(newsopFormData);
//     updateProgress(newsopFormData);
//   };

//   const updateProgress = (data) => {
//     const totalFields = Object.keys(data).length;
//     const filledFields = Object.values(data).filter(
//       (value) => value.trim() !== ""
//     ).length;
//     const newProgress = Math.round((filledFields / totalFields) * 100);
//     setProgress(newProgress);
//   };

//   const markSectionComplete = (sectionId) => {
//     if (!completedSections.includes(sectionId)) {
//       setCompletedSections([...completedSections, sectionId]);
//     }
//   };

//   const generateSop = () => {
//     const {
//       name,
//       university,
//       course,
//       currentEducation,
//       workExperience,
//       goals,
//       achievements,
//       motivation,
//       whyUniversity,
//       whyCourse,
//       contribution,
//     } = sopFormData;

//     const template = `Statement of Purpose

// Dear Admissions Committee,

// I am ${
//       name || "[Your Name]"
//     }, and I am writing to express my strong interest in pursuing ${
//       course || "[Course Name]"
//     } at ${university || "[University Name]"}. With my background in ${
//       currentEducation || "[Your Current Education]"
//     }, I am eager to take the next step in my academic journey.

// ACADEMIC BACKGROUND & EXPERIENCE
// ${
//   currentEducation
//     ? `My educational foundation in ${currentEducation} has equipped me with fundamental knowledge and analytical skills.`
//     : "My academic journey has been marked by consistent dedication to learning and growth."
// } ${
//       workExperience
//         ? `Additionally, my professional experience in ${workExperience} has provided me with practical insights and real-world application of theoretical concepts.`
//         : ""
//     }

// KEY ACHIEVEMENTS
// ${
//   achievements ||
//   "Throughout my academic and professional journey, I have demonstrated commitment to excellence through various accomplishments that have shaped my perspective and strengthened my resolve to pursue higher education."
// }

// WHY THIS COURSE
// ${
//   whyCourse ||
//   "I am particularly drawn to this program because of its comprehensive curriculum, research opportunities, and alignment with my career aspirations. The interdisciplinary approach and emphasis on practical application make it an ideal fit for my academic goals."
// }

// WHY THIS UNIVERSITY
// ${
//   whyUniversity ||
//   "I am impressed by the university's reputation for academic excellence, distinguished faculty, and commitment to innovation. The institution's values align perfectly with my own academic philosophy and career objectives."
// }

// MOTIVATION & INSPIRATION
// ${
//   motivation ||
//   "My passion for this field stems from a deep-seated curiosity and desire to contribute meaningfully to the discipline. I am motivated by the potential to make a positive impact through research, innovation, and practical application of knowledge."
// }

// FUTURE GOALS
// My long-term goal is ${
//       goals ||
//       "to leverage the knowledge and skills gained from this program to make significant contributions to my chosen field, whether through research, industry leadership, or academic pursuits"
//     }. This program represents a crucial step toward achieving these aspirations.

// CONTRIBUTION TO THE UNIVERSITY
// ${
//   contribution ||
//   "I believe I can contribute to the university community through my diverse perspective, collaborative spirit, and commitment to academic excellence. I am eager to engage with fellow students, participate in research projects, and contribute to the vibrant academic environment."
// }

// I am confident that ${
//       university || "this esteemed institution"
//     } will provide the ideal environment for my academic and personal growth. I am excited about the opportunity to be part of this distinguished community and contribute to its legacy of excellence.

// Thank you for considering my application. I look forward to the opportunity to discuss my candidacy further.

// Sincerely,
// ${name || "[Your Name]"}`;

//     setSop(template);
//     setActiveSection("preview");
//     markSectionComplete("preview");
//   };

//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(sop);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch (err) {
//       console.error("Failed to copy text: ", err);
//     }
//   };

//   const downloadSOP = () => {
//     const element = document.createElement("a");
//     const file = new Blob([sop], { type: "application/octetstream" });
//     element.href = URL.createObjectURL(file);
//     element.download = `${sopFormData.name || "Your"}_SOP.pdf`;
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   };

//   const renderSection = () => {
//     switch (activeSection) {
//       case "personal":
//         return (
//           <div className="space-y-6">
//             <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 p-6 rounded-2xl border border-gray-200 relative overflow-hidden shimmer">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-[#0073df] rounded-full flex items-center justify-center shadow-lg">
//                   <User className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800">
//                     Personal Information
//                   </h3>
//                   <p className="text-gray-600">
//                     Let's start with your basic details
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {[
//               {
//                 label: "Full Name",
//                 name: "name",
//                 placeholder: "Enter your full name",
//                 icon: User,
//               },
//               {
//                 label: "Target University",
//                 name: "university",
//                 placeholder: "e.g., Harvard University, MIT",
//                 icon: Building,
//               },
//               {
//                 label: "Desired Course/Program",
//                 name: "course",
//                 placeholder: "e.g., Master's in Computer Science",
//                 icon: GraduationCap,
//               },
//             ].map((field, index) => (
//               <div key={index} className="group">
//                 <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
//                   <field.icon className="w-4 h-4 text-[#0073df]" />
//                   {field.label}
//                 </label>
//                 <input
//                   type="text"
//                   name={field.name}
//                   value={sopFormData[field.name]}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0073df] focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-gray-800 font-medium group-hover:border-gray-300 transform group-hover:scale-105"
//                   placeholder={field.placeholder}
//                 />
//               </div>
//             ))}
//           </div>
//         );

//       case "academic":
//         return (
//           <div className="space-y-6">
//             <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 p-6 rounded-2xl border border-gray-200 relative overflow-hidden shimmer">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-[#0073df] rounded-full flex items-center justify-center shadow-lg">
//                   <BookOpen className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800">
//                     Academic & Professional Background
//                   </h3>
//                   <p className="text-gray-600">
//                     Tell us about your educational journey
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {[
//               {
//                 label: "Current Education",
//                 name: "currentEducation",
//                 placeholder:
//                   "e.g., Bachelor's in Engineering, Currently pursuing MBA",
//                 icon: BookOpen,
//                 type: "textarea",
//               },
//               {
//                 label: "Work Experience",
//                 name: "workExperience",
//                 placeholder:
//                   "Describe your professional experience, internships, or relevant projects",
//                 icon: Building,
//                 type: "textarea",
//               },
//               {
//                 label: "Key Achievements",
//                 name: "achievements",
//                 placeholder:
//                   "Academic awards, publications, certifications, leadership roles, etc.",
//                 icon: Trophy,
//                 type: "textarea",
//               },
//             ].map((field, index) => (
//               <div key={index} className="group">
//                 <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
//                   <field.icon className="w-4 h-4 text-[#0073df]" />
//                   {field.label}
//                 </label>
//                 {field.type === "textarea" ? (
//                   <textarea
//                     name={field.name}
//                     value={sopFormData[field.name]}
//                     onChange={handleChange}
//                     rows={4}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0073df] focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-gray-800 font-medium resize-none group-hover:border-gray-300 transform group-hover:scale-105"
//                     placeholder={field.placeholder}
//                   />
//                 ) : (
//                   <input
//                     type="text"
//                     name={field.name}
//                     value={sopFormData[field.name]}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0073df] focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-gray-800 font-medium group-hover:border-gray-300 transform group-hover:scale-105"
//                     placeholder={field.placeholder}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         );

//       case "goals":
//         return (
//           <div className="space-y-6">
//             <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 p-6 rounded-2xl border border-gray-200 relative overflow-hidden shimmer">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-[#0073df] rounded-full flex items-center justify-center shadow-lg">
//                   <Target className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800">
//                     Goals & Motivation
//                   </h3>
//                   <p className="text-gray-600">
//                     Share your aspirations and motivations
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {[
//               {
//                 label: "Why This Course?",
//                 name: "whyCourse",
//                 placeholder:
//                   "Explain why you're interested in this specific program",
//                 icon: BookOpen,
//               },
//               {
//                 label: "Why This University?",
//                 name: "whyUniversity",
//                 placeholder:
//                   "What attracts you to this particular institution?",
//                 icon: Building,
//               },
//               {
//                 label: "Career Goals",
//                 name: "goals",
//                 placeholder:
//                   "Describe your short-term and long-term career objectives",
//                 icon: Target,
//               },
//               {
//                 label: "Motivation & Inspiration",
//                 name: "motivation",
//                 placeholder: "What drives your passion for this field?",
//                 icon: Heart,
//               },
//               {
//                 label: "Your Contribution",
//                 name: "contribution",
//                 placeholder:
//                   "How will you contribute to the university community?",
//                 icon: Lightbulb,
//               },
//             ].map((field, index) => (
//               <div key={index} className="group">
//                 <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
//                   <field.icon className="w-4 h-4 text-[#0073df]" />
//                   {field.label}
//                 </label>
//                 <textarea
//                   name={field.name}
//                   value={sopFormData[field.name]}
//                   onChange={handleChange}
//                   rows={3}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0073df] focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 text-gray-800 font-medium resize-none group-hover:border-gray-300 transform group-hover:scale-105"
//                   placeholder={field.placeholder}
//                 />
//               </div>
//             ))}
//           </div>
//         );

//       case "preview":
//         return (
//           <div className="space-y-6">
//             <div className="bg-gradient-to-br from-[#0073df] to-blue-700 text-white shadow-lg rounded-2xl p-6 relative">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
//                   <FileText className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-white">
//                     Your Statement of Purpose
//                   </h3>
//                   <p className="text-white/80">Review your generated SOP</p>
//                 </div>
//               </div>

//               <div className="bg-white/10 rounded-xl p-4 max-h-80 overflow-y-auto whitespace-pre-wrap text-sm leading-relaxed">
//                 {sop ||
//                   "Click 'Generate SOP' to create your statement of purpose."}
//               </div>

//               {sop && (
//                 <div className="flex gap-3 mt-6">
//                   <button
//                     onClick={copyToClipboard}
//                     className="flex-1 bg-white text-[#0073df] font-semibold py-2 rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 transform hover:scale-105"
//                   >
//                     {copied ? (
//                       <>
//                         <CheckCircle className="w-4 h-4 text-green-500" />
//                         Copied!
//                       </>
//                     ) : (
//                       <>
//                         <Copy className="w-4 h-4" />
//                         Copy SOP
//                       </>
//                     )}
//                   </button>
//                   <button
//                     onClick={downloadSOP}
//                     className="flex-1 bg-white text-[#0073df] font-semibold py-2 rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 transform hover:scale-105"
//                   >
//                     <Download className="w-4 h-4" />
//                     Download
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
//       {/* Mouse following gradient */}
//       <div
//         className="fixed inset-0 pointer-events-none transition-opacity duration-300 z-0"
//         style={{
//           background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,115,223,0.03), transparent 40%)`,
//         }}
//       />

//       {/* Floating elements */}
//       <div
//         className="absolute top-10 left-10 w-32 h-32 rounded-full blur-2xl opacity-30"
//         style={{
//           background:
//             "linear-gradient(45deg, rgba(0,115,223,0.2), rgba(0,115,223,0.1))",
//           animation: "float 8s ease-in-out infinite",
//         }}
//       />
//       <div
//         className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-2xl opacity-30"
//         style={{
//           background:
//             "linear-gradient(45deg, rgba(0,115,223,0.15), rgba(0,115,223,0.05))",
//           animation: "float 10s ease-in-out infinite reverse",
//         }}
//       />

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) scale(1); }
//           50% { transform: translateY(-30px) scale(1.1); }
//         }
//         @keyframes typing {
//           from { width: 0; }
//           to { width: 100%; }
//         }
//         @keyframes blink {
//           50% { border-color: transparent; }
//         }
//         .typing {
//           border-right: 2px solid #0073df;
//           animation: blink 1s infinite;
//         }
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .shimmer::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
//           transition: left 0.5s;
//         }
//         .shimmer:hover::before {
//           left: 100%;
//         }
//       `}</style>

//       <div className="relative z-10 py-12 px-4">
//         {/* Hero Section */}
//         <div className="max-w-4xl mx-auto text-center mb-12">
//           <div
//             className={`transition-all duration-800 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-6"
//             }`}
//           >
//             <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-2 mb-4 shadow-sm text-sm font-medium text-gray-700">
//               <Sparkles className="w-4 h-4 text-[#0073df]" />
//               SOP Maker
//             </div>

//             <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-[#0073df] bg-clip-text text-transparent">
//               SOP Maker
//             </h1>
//             <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
//               Create Your Perfect
//               <span className="block text-[#0073df] typing min-h-[1.2em]">
//                 {typedText}
//               </span>
//             </h2>

//             <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//               Create a professional, structured, and compelling Statement of
//               Purpose with ease. Fill out your details step by step and generate
//               your SOP instantly.
//             </p>

//             {/* Progress Bar */}
//             <div className="max-w-md mx-auto mt-6">
//               <div className="flex items-center gap-2 mb-2">
//                 <Clock className="w-4 h-4 text-gray-500" />
//                 <span className="text-sm font-medium text-gray-600">
//                   Progress: {progress}%
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                 <div
//                   className="bg-[#0073df] h-3 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
//                   style={{ width: `${progress}%` }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           {/* Navigation Tabs */}
//           <div className="bg-white rounded-2xl shadow-lg p-2 mb-8 border border-gray-200">
//             <div className="flex flex-wrap gap-2">
//               {sections.map((section, index) => (
//                 <button
//                   key={section.id}
//                   onClick={() => setActiveSection(section.id)}
//                   className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
//                     activeSection === section.id
//                       ? "bg-gradient-to-r from-gray-800 to-[#0073df] text-white shadow-lg"
//                       : "text-gray-600 hover:bg-gray-100"
//                   }`}
//                 >
//                   <section.icon className="w-5 h-5" />
//                   <span className="hidden sm:inline">{section.name}</span>
//                   {completedSections.includes(section.id) && (
//                     <CheckCircle2 className="w-4 h-4" />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-slate-50/20 pointer-events-none"></div>
//             <div className="relative z-10">
//               {renderSection()}

//               {/* Action Buttons */}
//               <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
//                 <div className="flex items-center gap-2 text-sm text-gray-500">
//                   <Zap className="w-4 h-4 text-[#0073df]" />
//                   <span>Fill all sections for best results</span>
//                 </div>

//                 {activeSection !== "preview" ? (
//                   <button
//                     onClick={generateSop}
//                     className="group relative overflow-hidden bg-gradient-to-r from-gray-800 to-[#0073df] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#005bb5] hover:to-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg transform hover:scale-105"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#0073df] to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="relative flex items-center gap-2">
//                       <GraduationCap className="w-5 h-5" />
//                       Generate SOP
//                       <ArrowRight className="w-4 h-4" />
//                     </div>
//                   </button>
//                 ) : (
//                   <div className="text-sm text-[#0073df] font-medium flex items-center gap-2">
//                     <CheckCircle2 className="w-4 h-4" />
//                     SOP Generated Successfully!
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import {
//   ChevronRight,
//   ChevronLeft,
//   FileText,
//   Award,
//   Users,
//   CheckCircle,
// } from "lucide-react";
// const LorMaker = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [sopFormData, setsopFormData] = useState({
//     recommender: {
//       recommenderName: "Dr. Anjali Mehta",
//       designation: "Professor of Computer Science",
//       organization: "Indian Institute of Technology, Delhi",
//       applicantName: "Dipika Ghose",
//       position: "Final Year B.Tech Student",
//       relationship: "Professor - Student",
//       duration: "2 Years (2023 - 2025)",
//     },
//     performance: {
//       professionalAchievement: "",
//       strength: "",
//       keyCompetencies: "",
//       specificExample: "",
//       peerComparison: "",
//     },
//     RecommandationSummary: {
//       overallImpression: "",
//       endorsemantStatement: "",
//       reasonForRecommandation: "",
//       closingRemarks: "",
//     },
//   });
//   const sections = [
//     {
//       id: 0,
//       title: "Recommender & Applicant Information",
//       icon: Users,
//       fields: [
//         { name: "recommenderName", label: "Recommender Name", type: "text" },
//         { name: "designation", label: "Designation", type: "text" },
//         { name: "organization", label: "Organization", type: "text" },
//         { name: "applicantName", label: "Applicant Name", type: "text" },
//         { name: "position", label: "Position/Role", type: "text" },
//         { name: "relationship", label: "Relationship", type: "text" },
//         { name: "duration", label: "Duration of Association", type: "text" },
//       ],
//     },
//     {
//       id: 1,
//       title: "Performance & Key Qualities",
//       icon: Award,
//       fields: [
//         {
//           name: "professionalAchievement",
//           label: "Professional Achievement",
//           type: "text",
//           placeholder:
//             "Secured first rank in DSA course; Published a research paper on AI in a national conference",
//         },
//         {
//           name: "strength",
//           label: "Strength",
//           type: "text",
//           placeholder: "Analytical thinking, problem-solving, leadership",
//         },
//         {
//           name: "keyCompetencies",
//           label: "Key Competencies",
//           type: "text",
//           placeholder:
//             "Programming (Python, Java), Project Management, Team Collaboration",
//         },
//         {
//           name: "specificExample",
//           label: "Specific Examples",
//           type: "text",
//           placeholder:
//             "Led a team of 5 in developing a campus management system; Designed an AI-based project for final year research",
//         },
//         {
//           name: "peerComparison",
//           label: "Peer Comparison",
//           type: "text",
//           placeholder: "Among top 5% of students I taught in the last 10 years",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "Recommendation Summary",
//       icon: CheckCircle,
//       fields: [
//         {
//           name: "overallImpression",
//           label: "Overall Impression",
//           type: "text",
//           placeholder:
//             "Deepika is a highly motivated, disciplined, and intelligent student with strong technical and leadership abilities",
//         },
//         {
//           name: "endorsemantStatement",
//           label: "Endorsement Statement",
//           type: "text",
//           placeholder:
//             "I strongly recommand Dipika for admission to your Master's program in Computer Science",
//         },
//         {
//           name: "reasonForRecommandation",
//           label: "Reason for Recommandation",
//           type: "text",
//           placeholder:
//             "Exceptional academic record, project experience, and excellent teamwork skills",
//         },
//         {
//           name: "closingRemarks",
//           label: "Closing Remarks",
//           type: "text",
//           placeholder:
//             "I am confident that Dipika will excel in your program and contribute positively to your university",
//         },
//         {},
//       ],
//     },
//     {
//       id: 3,
//       title: "Review Your Letter of Recommendation (LOR)",
//       icon: FileText,
//     },
//   ];
//   const progress = ((currentStep + 1) / sections.length) * 100;
//   const handleInputChange = (name, value) => {
//     setsopFormData((prev) => ({ ...prev, [name]: value }));
//   };
//   const handleNext = () => {
//     if (currentStep < sections.length - 1) {
//       setCurrentStep(currentStep + 1);
//     }
//   };
//   const handleBack = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };
//   const currentSection = sections[currentStep];
//   const Icon = currentSection.icon;
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
//       {/* Header */}
//       <div className="bg-[#003E79] text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex-1 text-center md:text-left">
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
//                 Letter of Recommendation
//               </h1>
//               <h2 className="text-xl sm:text-2xl font-semibold mb-2">
//                 (LOR Maker)
//               </h2>
//               <p className="text-blue-100 text-sm sm:text-base">
//                 Generate authoritative recommendation letters in minutes with
//                 guided fields.
//               </p>
//             </div>
//             <div className="hidden md:block">
//               <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
//                 <img
//                   src="../../../assets/LOR_Header_Image.png"
//                   className="w-full"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Progress Bar */}
//       <div className="bg-white shadow-sm  top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="py-4">
//             <div className="mb-3">
//               <div className="flex justify-between text-xs sm:text-sm font-medium text-gray-600 mb-2">
//                 <span>Progress: {Math.round(progress)}%</span>
//                 <span>
//                   Step {currentStep + 1} of {sections.length}
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-3">
//                 <div
//                   className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-500 ease-out"
//                   style={{ width: `${progress}%` }}
//                 />
//               </div>
//             </div>
//             {/* Step Indicators */}
//             <div className="flex justify-between mt-4 overflow-x-auto pb-2">
//               {sections.map((section, idx) => {
//                 const StepIcon = section.icon;
//                 return (
//                   <div
//                     key={section.id}
//                     className="flex flex-col items-center min-w-fit px-2"
//                   >
//                     <div
//                       className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
//                         idx <= currentStep
//                           ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
//                           : "bg-gray-200 text-gray-400"
//                       }`}
//                     >
//                       <StepIcon className="w-5 h-5 sm:w-6 sm:h-6" />
//                     </div>
//                     <span
//                       className={`text-xs mt-2 text-center max-w-[100px] hidden sm:block ${
//                         idx <= currentStep
//                           ? "text-blue-700 font-semibold"
//                           : "text-gray-500"
//                       }`}
//                     >
//                       {section.title}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Main Content */}
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Section Header */}
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-6">
//             <div className="flex items-center gap-4">
//               <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
//                 <Icon className="w-8 h-8" />
//               </div>
//               <div>
//                 <h2 className="text-2xl sm:text-3xl font-bold">
//                   {currentSection.title}
//                 </h2>
//                 <p className="text-blue-100 text-sm mt-1">
//                   Step {currentStep + 1} of {sections.length}
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* Form Content */}
//           <div className="p-6 sm:p-8 lg:p-10">
//             {currentSection.fields.length > 0 ? (
//               <div className="space-y-6">
//                 {currentSection.fields.map((field) => (
//                   <div key={field.name} className="group">
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       {field.label}
//                     </label>
//                     {field.type === "textarea" ? (
//                       <textarea
//                         value={sopFormData[field.name]}
//                         onChange={(e) =>
//                           handleInputChange(field.name, e.target.value)
//                         }
//                         placeholder={field.placeholder}
//                         rows={4}
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 resize-none text-gray-700 placeholder-gray-400"
//                       />
//                     ) : (
//                       <input
//                         type={field.type}
//                         value={sopFormData[field.name]}
//                         onChange={(e) =>
//                           handleInputChange(field.name, e.target.value)
//                         }
//                         placeholder={field.placeholder}
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-gray-700 placeholder-gray-400"
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-12">
//                 <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12">
//                   <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <FileText className="w-10 h-10 text-white" />
//                   </div>
//                   <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
//                     Ready to Generate Your LOR
//                   </h3>
//                   <p className="text-gray-600 mb-8 max-w-md mx-auto">
//                     Review your information and click the button below to
//                     generate a professional letter of recommendation.
//                   </p>
//                   <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
//                     Generate Letter
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* Navigation Buttons */}
//           <div className="bg-gray-50 px-6 sm:px-8 lg:px-10 py-6 flex flex-col sm:flex-row gap-3 sm:justify-between">
//             <button
//               onClick={handleBack}
//               disabled={currentStep === 0}
//               className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
//                 currentStep === 0
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md"
//               }`}
//             >
//               <ChevronLeft className="w-5 h-5" />
//               Back
//             </button>
//             <button
//               onClick={handleNext}
//               disabled={currentStep === sections.length - 1}
//               className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
//                 currentStep === sections.length - 1
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl hover:scale-105"
//               }`}
//             >
//               Next
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default LorMaker;

import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  FileText,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";

const SopMaker = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [sopFormData, setSopFormData] = useState({
    personalInfo: {
      fullName: "",
      targetUniversity: "",
      desiredCourse: "",
    },
    academic: {
      currentEducation: "",
      workExperience: "",
      keyAchievements: "",
    },
    goals: {
      whyCourse: "",
      whyUniversity: "",
      careerGoals: "",
      motivation: "",
      contribution: "",
    },
  });

  const sections = [
    {
      id: 0,
      key: "personalInfo",
      title: "Personal Information",
      fields: [
        { name: "fullName", label: "Full Name", type: "text" },
        { name: "targetUniversity", label: "Target University", type: "text" },
        {
          name: "desiredCourse",
          label: "Desired Course/Program",
          type: "text",
        },
      ],
    },
    {
      id: 1,
      key: "academic",
      title: "Academic & Professional Background",
      fields: [
        {
          name: "currentEducation",
          label: "Current Education",
          type: "textarea",
        },
        { name: "workExperience", label: "Work Experience", type: "textarea" },
        {
          name: "keyAchievements",
          label: "Key Achievements",
          type: "textarea",
        },
      ],
    },
    {
      id: 2,
      key: "goals",
      title: "Goals & Motivation",
      fields: [
        {
          name: "whyCourse",
          label: "Why This Course",
          type: "text",
        },
        {
          name: "whyUniversity",
          label: "Why This University",
          type: "text",
        },
        {
          name: "careerGoals",
          label: "Career Goals",
          type: "text",
        },
        {
          name: "motivation",
          label: "Motivation & Inspiration",
          type: "text",
        },
        {
          name: "contribution",
          label: "Your Contribution",
          type: "text",
        },
      ],
    },
    {
      id: 3,
      key: "review",
      title: "Review Your Letter of Recommendation (LOR)",
      icon: FileText,
      fields: [],
    },
  ];

  const progress = ((currentStep + 1) / sections.length) * 100;
  const currentSection = sections[currentStep];
  const Icon = currentSection.icon;

  const handleInputChange = (sectionKey, name, value) => {
    setSopFormData((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        [name]: value,
      },
    }));
  };

  const handleNext = () => {
    if (currentStep < sections.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-[#003E79] text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold mb-2">Letter of Recommendation</h1>
          <h2 className="text-xl font-semibold mb-3">(LOR Maker)</h2>
          <p className="text-blue-100">
            Generate authoritative recommendation letters in minutes with guided
            fields.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden px-10">
          <div className="hidden sm:block bg-white border-b border-gray-200 py-6 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-4">
                {/* Step Tabs */}
                <div className="flex gap-1 mb-2">
                  {sections.map((section, idx) => (
                    <div key={section.id} className="flex-1">
                      <div
                        className={`text-xs font-medium pb-2 ${
                          idx === currentStep
                            ? "text-blue-600"
                            : idx < currentStep
                            ? "text-gray-600"
                            : "text-gray-400"
                        }`}
                      >
                        {section.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sectional Progress Bar */}
              <div className="flex gap-1">
                {sections.map((section, idx) => (
                  <div
                    key={section.id}
                    className="flex-1 bg-gray-200 rounded-full h-2"
                  >
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ease-out ${
                        idx < currentStep
                          ? "bg-blue-600 w-full"
                          : idx === currentStep
                          ? "bg-blue-600"
                          : "bg-gray-200"
                      }`}
                      style={{
                        width: "100%",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-black px-6 py-6 flex items-center gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                {currentSection.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            {currentStep === 3 ? (
              <div className="space-y-8">
                <div className=" rounded-xl px-6 py-2">
                  <h3 className="text-lg font-medium mb-4 text-black">
                    Recommender & Applicant Information
                  </h3>
                  {Object.entries(sopFormData.personalInfo).map(
                    ([key, value]) => (
                      <p key={key} className="relative text-gray-700 mb-1">
                        <label className="absolute top-3 bg-white left-2 capitalize block text-sm text-black mb-2">
                          {key.replace(/([A-Z])/g, " $1")}:
                        </label>
                        <input
                          type="text"
                          value={value}
                          className="w-full px-4 py-3 border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 mt-5"
                          readOnly={true}
                        />
                      </p>
                    )
                  )}
                </div>

                <div className=" rounded-xl px-6 py-2">
                  <h3 className="text-xl font-medium mb-4 text-black">
                    Performance & Key Qualities
                  </h3>
                  {Object.entries(sopFormData.academic).map(([key, value]) => (
                    <p key={key} className="relative text-gray-700 mb-1">
                      <label className="absolute top-3 bg-white left-2 capitalize block text-sm text-black mb-2">
                        {key.replace(/([A-Z])/g, " $1")}:
                      </label>
                      <input
                        type="text"
                        value={value}
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 mt-5"
                        readOnly={true}
                      />
                    </p>
                  ))}
                </div>

                <div className=" rounded-xl px-6 py-2">
                  <h3 className="text-xl font-medium mb-4 text-black">
                    Recommendation Summary
                  </h3>
                  {Object.entries(sopFormData.goals).map(([key, value]) => (
                    <p key={key} className="relative text-gray-700 mb-1">
                      <label className="absolute top-3 bg-white left-2 capitalize block text-sm text-black mb-2">
                        {key.replace(/([A-Z])/g, " $1")}:
                      </label>
                      <input
                        type="text"
                        value={value}
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 mt-5"
                        readOnly={true}
                      />
                    </p>
                  ))}
                </div>

                <div className="flex flex-col justify-start mt-10 max-w-72 gap-3">
                  <p className="text-lg">Download LOR (PDF/DOCX)</p>
                  <button
                    className="bg-[#0073DF] text-white px-8 py-4 rounded-md font-semibold text-lg inline-block"
                    onClick={() => console.log(sopFormData)}
                  >
                    Generate Sample LOR
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {currentSection.fields.map((field) => (
                  <p key={field.name} className="relative">
                    <label className="absolute -top-2 bg-white left-2 block text-sm text-black mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={
                        sopFormData[currentSection.key]?.[field.name] || ""
                      }
                      onChange={(e) =>
                        handleInputChange(
                          currentSection.key,
                          field.name,
                          e.target.value
                        )
                      }
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
                    />
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className=" px-10 py-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                currentStep === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={currentStep === sections.length - 1}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                currentStep === sections.length - 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed hidden"
                  : "bg-[#0073DF] text-white hover:shadow-xl hover:scale-105"
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SopMaker;

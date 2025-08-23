import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const ExamPrep = () => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    students: 0,
    successRate: 0,
    trainers: 0,
    countries: 0,
  });
  const [flipped, setFlipped] = useState({});

  const typingTexts = [
    "Master IELTS with expert guidance",
    "Achieve your dream TOEFL score",
    "Excel in GRE with training",
    "Pass PTE with confidence",
  ];

  // typing effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (charIndex < typingTexts[textIndex].length) {
        setCurrentText((prev) => prev + typingTexts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setCurrentText("");
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }, 1500);
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [charIndex, textIndex]);

  // stats counter
  useEffect(() => {
    const targets = {
      students: 2000000,
      successRate: 98,
      trainers: 500,
      countries: 50,
    };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    const counters = {
      students: 0,
      successRate: 0,
      trainers: 0,
      countries: 0,
    };

    const timer = setInterval(() => {
      let allComplete = true;
      Object.keys(targets).forEach((key) => {
        if (counters[key] < targets[key]) {
          allComplete = false;
          counters[key] = Math.min(
            counters[key] + targets[key] / steps,
            targets[key]
          );
          setAnimatedNumbers((prev) => ({
            ...prev,
            [key]: Math.floor(counters[key]),
          }));
        }
      });
      if (allComplete) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const examPreparations = [
    {
      id: "IELTS-ACEDEMIC",
      name: "IELTS Academic",
      logo: "🎯",
      image:
        "https://images.unsplash.com/photo-1581091215361-7dca71d4c8f2?auto=format&fit=crop&w=800&q=80",
      description: "Reading, Writing, Listening & Speaking",
      backText:
        "Master all 4 skills with personalized coaching and practice tests.",
      students: "50K+",
      rating: "4.8",
    },
    {
      id: "IELTS",
      name: "IELTS General",
      logo: "📚",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      description: "Immigration & work visa prep",
      backText:
        "Perfect for immigration with real-world scenarios and mock tests.",
      students: "35K+",
      rating: "4.7",
    },
    {
      id: "ToeflIBT",
      name: "TOEFL-iBT",
      logo: "🌐",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      description: "Interactive online preparation",
      backText:
        "Computer-based training with AI feedback and practice sessions.",
      students: "28K+",
      rating: "4.9",
    },
    {
      id: "PTEAcademic",
      name: "PTE Academic",
      logo: "⚡",
      image:
        "https://images.unsplash.com/photo-1554774853-bc78e2db57d4?auto=format&fit=crop&w=800&q=80",
      description: "Fast-track preparation",
      backText:
        "Quick results in 2-3 days with computer-scored accuracy.",
      students: "22K+",
      rating: "4.6",
    },
    {
      id: "DuolingoTest",
      name: "Duolingo Test",
      logo: "🦉",
      image:
        "https://images.unsplash.com/photo-1596496054972-c01a83edb3c2?auto=format&fit=crop&w=800&q=80",
      description: "Convenient online testing",
      backText:
        "Take from home with 48-hour results. 4,000+ institutions.",
      students: "18K+",
      rating: "4.5",
    },
    {
      id: "GREPrep",
      name: "GRE",
      logo: "🎓",
      image:
        "https://images.unsplash.com/photo-1581092795361-83a9b94782ec?auto=format&fit=crop&w=800&q=80",
      description: "Graduate school prep",
      backText:
        "Verbal, Quantitative & Writing preparation for top schools.",
      students: "15K+",
      rating: "4.8",
    },
  ];

  const handleGetStarted = (examId, event) => {
    event.stopPropagation();
    window.location.href = `/${examId}`;
  };

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/20">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-white via-blue-50 to-[#0073df]/10 py-12 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center px-4">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-[#0073df] bg-clip-text text-transparent">
            Exam Preparation
          </h1>
          <div className="h-8 mb-6 flex items-center justify-center">
            <span className="text-lg text-gray-600">
              {currentText}
              <span className="animate-pulse text-[#0073df]">|</span>
            </span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Comprehensive test preparation with expert guidance and proven
            strategies
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
            <p className="text-gray-600">
              Expert-designed courses with personalized learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examPreparations.map((exam) => (
              <div
                key={exam.id}
                className="group relative h-80 [perspective:1000px] cursor-pointer"
                onClick={() => toggleFlip(exam.id)} // mobile click flip
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] 
                  ${flipped[exam.id] ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"}`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden">
                    <img
                      src={exam.image}
                      alt={exam.name}
                      className="h-32 w-full object-cover"
                    />
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="text-3xl">{exam.logo}</div>
                      <h3 className="text-lg font-bold text-gray-900 mt-2">
                        {exam.name}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow">
                        {exam.description}
                      </p>
                      <div className="flex justify-between items-center mt-2 text-sm">
                        <span>{exam.students}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span>{exam.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#0073df] to-blue-700 rounded-xl shadow-lg text-white p-4 flex flex-col">
                    <div className="text-3xl mb-2">{exam.logo}</div>
                    <h3 className="text-lg font-bold mb-2">{exam.name}</h3>
                    <p className="text-blue-100 text-sm flex-grow">
                      {exam.backText}
                    </p>
                    <div className="flex items-center justify-between text-sm mt-3">
                      <span>{exam.students} students</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-300 fill-current" />
                        <span>{exam.rating}</span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => handleGetStarted(exam.id, e)}
                      className="mt-3 w-full bg-white text-[#0073df] font-semibold py-2 rounded-lg hover:bg-blue-50"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPrep;

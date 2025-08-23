import React, { useState, useEffect } from "react";
import {
  Search, MapPin, Calendar, Users, Star, ChevronRight,
  Globe, Shield, Clock, Camera, Plane, Building,
  Play, Award, Target, CheckCircle,
  Mountain, Castle, Coffee, Sun, TreePalm
} from "lucide-react";

const Travel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [animatedNumbers, setAnimatedNumbers] = useState({
    destinations: 0,
    students: 0,
    countries: 0,
    satisfaction: 0
  });

  const typingTexts = [
    "Find your dream study destination",
    "Discover top universities worldwide",
    "Shape your future abroad",
    "Explore campus life and culture"
  ];

  // Typing effect
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
        }, 2000);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [charIndex, textIndex]);

  // Stats counter
  useEffect(() => {
    setIsVisible(true);

    const targets = { destinations: 120, students: 50000, countries: 30, satisfaction: 95 };
    const duration = 2500;
    const steps = 80;
    const interval = duration / steps;

    const counters = { destinations: 0, students: 0, countries: 0, satisfaction: 0 };

    const timer = setInterval(() => {
      let allComplete = true;
      Object.keys(targets).forEach((key) => {
        if (counters[key] < targets[key]) {
          allComplete = false;
          const increment = targets[key] / steps;
          counters[key] = Math.min(counters[key] + increment, targets[key]);
          setAnimatedNumbers((prev) => ({
            ...prev,
            [key]: Math.floor(counters[key])
          }));
        }
      });
      if (allComplete) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const destinations = [
    {
      id: 1,
      name: "London, UK",
      category: "modern",
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400&h=300&fit=crop",
      price: "Top Universities",
      duration: "3 years",
      rating: 4.9,
      reviews: 2100,
      description: "World-class education and global career opportunities",
      features: ["University College London", "Oxford", "Cambridge"],
      icon: <Building className="w-5 h-5" />
    },
    {
      id: 2,
      name: "Toronto, Canada",
      category: "modern",
      image: "https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=400&h=300&fit=crop",
      price: "Top Universities",
      duration: "4 years",
      rating: 4.8,
      reviews: 1800,
      description: "Diverse culture and welcoming environment for students",
      features: ["University of Toronto", "McGill University", "Waterloo"],
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 3,
      name: "Sydney, Australia",
      category: "campus",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop",
      price: "Top Universities",
      duration: "3 years",
      rating: 4.7,
      reviews: 1650,
      description: "Beautiful campus life with sunny beaches nearby",
      features: ["University of Sydney", "UNSW", "Monash"],
      icon: <Sun className="w-5 h-5" />
    },
    {
      id: 4,
      name: "Zurich, Switzerland",
      category: "nature",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      price: "Top Universities",
      duration: "2 years",
      rating: 4.9,
      reviews: 900,
      description: "Study surrounded by nature and innovation hubs",
      features: ["ETH Zurich", "University of Zurich"],
      icon: <Mountain className="w-5 h-5" />
    },
    {
      id: 5,
      name: "Tokyo, Japan",
      category: "cultural",
      image: "https://images.unsplash.com/photo-1552632145-9a31d309c0f3?w=400&h=300&fit=crop",
      price: "Top Universities",
      duration: "4 years",
      rating: 4.8,
      reviews: 1400,
      description: "Blend of tradition and modern technology",
      features: ["University of Tokyo", "Kyoto University"],
      icon: <Castle className="w-5 h-5" />
    }
  ];

  const filters = [
    { id: "all", label: "All", icon: <Globe className="w-4 h-4" /> },
    { id: "modern", label: "Modern Cities", icon: <Building className="w-4 h-4" /> },
    { id: "campus", label: "Campus Life", icon: <Sun className="w-4 h-4" /> },
    { id: "nature", label: "Nature", icon: <Mountain className="w-4 h-4" /> },
    { id: "cultural", label: "Culture", icon: <Castle className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/20">
      
      

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-[#0073df] to-blue-500 text-white">
  <div className="absolute inset-0 bg-black/20" />
  <div className="relative max-w-7xl mx-auto px-6 py-16 text-center"> {/* reduced py-24 → py-16 */}
    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight"> {/* reduced text-4xl/5xl → 3xl/4xl, mb-6 → mb-4 */}
      {currentText}<span className="animate-pulse">|</span>
    </h1>
    <p className="text-lg mb-6">Your study abroad journey starts here</p> {/* reduced text-xl → text-lg, mb-8 → mb-6 */}
    <div className="bg-white rounded-2xl shadow-xl p-4 text-black max-w-3xl mx-auto"> {/* reduced p-6 → p-4 */}
      <div className="grid md:grid-cols-4 gap-3"> {/* reduced gap-4 → gap-3 */}
        <div className="flex items-center gap-2 border rounded-lg px-2 py-1.5"> {/* reduced px-3 py-2 → px-2 py-1.5 */}
          <MapPin className="w-4 h-4 text-[#0073df]" /> {/* w-5 h-5 → w-4 h-4 */}
          <input type="text" placeholder="Destination" className="w-full outline-none text-sm" /> {/* added text-sm */}
        </div>
        <div className="flex items-center gap-2 border rounded-lg px-2 py-1.5">
          <Calendar className="w-4 h-4 text-[#0073df]" />
          <input type="month" className="w-full outline-none text-sm" />
        </div>
        <div className="flex items-center gap-2 border rounded-lg px-2 py-1.5">
          <Users className="w-4 h-4 text-[#0073df]" />
          <input type="number" min="1" defaultValue="1" className="w-full outline-none text-sm" />
        </div>
        <button className="bg-[#0073df] hover:bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2 text-sm"> {/* px-6 py-3 → px-4 py-2, text-sm */}
          <Search className="w-4 h-4" /> Search
        </button>
      </div>
    </div>
  </div>
</section>

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-4 justify-center">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                activeFilter === f.id
                  ? "bg-[#0073df] text-white"
                  : "bg-white border hover:bg-blue-50"
              }`}
            >
              {f.icon} {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Top Study Destinations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations
            .filter((d) => activeFilter === "all" || d.category === activeFilter)
            .map((d) => (
              <div
                key={d.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
              >
                <div className="relative">
                  <img src={d.image} alt={d.name} className="w-full h-56 object-cover group-hover:scale-105 transition" />
                  <div className="absolute top-4 left-4 bg-[#0073df] text-white px-3 py-1 rounded-full text-sm">{d.price}</div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[#0073df] mb-2">
                    {d.icon} <span className="text-sm">{d.category}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{d.name}</h3>
                  <p className="text-gray-600 mb-4">{d.description}</p>
                  <div className="flex items-center gap-2 text-yellow-500 mb-3">
                    <Star className="w-5 h-5 fill-yellow-500" /> {d.rating} ({d.reviews} reviews)
                  </div>
                  <ul className="text-sm text-gray-600 mb-4">
                    {d.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-[#0073df] hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-[#0073df] to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold">{animatedNumbers.destinations}+</h3>
            <p className="mt-2">Destinations</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">{animatedNumbers.students.toLocaleString()}</h3>
            <p className="mt-2">Students Guided</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">{animatedNumbers.countries}</h3>
            <p className="mt-2">Countries</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">{animatedNumbers.satisfaction}%</h3>
            <p className="mt-2">Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Travel;

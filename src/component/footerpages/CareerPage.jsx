import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Counter Component - Updated for continuous animation
const Counter = ({ value, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      
      const animate = () => {
        start += 1;
        if (start > end) start = 0; // Reset to 0 when reaching the end
        setCount(start);
        animationRef.current = setTimeout(animate, duration / end);
      };
      
      animate();
      
      return () => {
        if (animationRef.current) {
          clearTimeout(animationRef.current);
        }
      };
    }
  }, [isInView, value, duration]);
  
  return (
    <div ref={ref} className="text-3xl font-bold text-blue-600">
      {count}{suffix}
    </div>
  );
};

const CareerPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    department: 'all',
    location: 'all',
    search: ''
  });

  // Simulate data fetching
  useEffect(() => {
    const mockJobs = [
      {
        id: 1,
        title: "Senior Frontend Developer",
        department: "Engineering",
        location: "Remote / New York",
        type: "Full-time",
        posted: "3 days ago",
        description: "We're looking for an experienced frontend developer with React expertise to join our team.",
        logo: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
        company: "TechCorp"
      },
      {
        id: 2,
        title: "UI/UX Designer",
        department: "Design",
        location: "San Francisco / Remote",
        type: "Full-time",
        posted: "1 week ago",
        description: "Join our design team to create beautiful, intuitive user experiences for our products.",
        logo: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
        company: "DesignHub"
      },
      {
        id: 3,
        title: "Digital Marketing Specialist",
        department: "Marketing",
        location: "London / Remote",
        type: "Full-time",
        posted: "5 days ago",
        description: "Help us grow our digital presence and reach new audiences with creative marketing campaigns.",
        logo: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
        company: "GrowthLabs"
      },
      {
        id: 4,
        title: "Project Manager",
        department: "Operations",
        location: "New York",
        type: "Full-time",
        posted: "2 weeks ago",
        description: "We need an experienced project manager to oversee our product development lifecycle.",
        logo: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
        company: "ManagePro"
      },
      {
        id: 5,
        title: "Backend Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        posted: "1 day ago",
        description: "Looking for a backend engineer with Node.js and database expertise to scale our infrastructure.",
        logo: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
        company: "DataSystems"
      },
      {
        id: 6,
        title: "Content Writer",
        department: "Marketing",
        location: "Remote",
        type: "Part-time",
        posted: "4 days ago",
        description: "Create engaging content for our blog and marketing materials that resonates with our audience.",
        logo: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
        company: "ContentKing"
      }
    ];
    
    setJobs(mockJobs);
    setFilteredJobs(mockJobs);
  }, []);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    
    // Apply filters
    let results = jobs;
    
    if (newFilters.department !== 'all') {
      results = results.filter(job => job.department === newFilters.department);
    }
    
    if (newFilters.location !== 'all') {
      results = results.filter(job => job.location.includes(newFilters.location));
    }
    
    if (newFilters.search) {
      results = results.filter(job => 
        job.title.toLowerCase().includes(newFilters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(newFilters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(newFilters.search.toLowerCase())
      );
    }
    
    setFilteredJobs(results);
  };

  // Get unique departments and locations for filters
  const departments = [...new Set(jobs.map(job => job.department))];
  const locations = [...new Set(jobs.flatMap(job => job.location.split(' / ')))];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans overflow-x-hidden">
      {/* Hero Section - Fixed z-index issues */}
      <motion.section 
        className="gradient-bg text-white rounded-b-2xl md:rounded-2xl mx-4 md:mx-8 mt-4 p-8 md:p-12 mb-12 shadow-xl overflow-hidden relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto relative z-20">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join Our Dream Team
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We're looking for passionate individuals who want to make a difference. Explore our current openings and find where you fit.
            </motion.p>
            <motion.button 
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 transform hover:scale-105 shine-effect relative z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
          </div>
          <div className="md:w-1/3 flex justify-center relative z-20">
            <motion.img 
              src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png" 
              alt="Career illustration" 
              className="w-64 h-64"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ 
                rotate: [0, -3, 0, 3, 0],
                transition: { duration: 0.5 } 
              }}
            />
          </div>
        </div>
        
        {/* Animated background elements - Fixed z-index to not interfere with navigation */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <motion.div 
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white opacity-10"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-white opacity-10"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="mb-12 max-w-6xl mx-auto px-4 relative z-30"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: 25, label: "Open Positions" },
            { value: 12, label: "Countries" },
            { value: 150, label: "Team Members" },
            { value: 98, label: "Employee Satisfaction", suffix: "%" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Counter 
                value={stat.value} 
                suffix={stat.suffix || ""} 
                duration={2000} 
              />
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Company Logos Section */}
      <motion.section 
        className="mb-12 max-w-6xl mx-auto px-4 relative z-30"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-semibold text-center mb-8">We're Trusted by Top Companies</h2>
        <div className="logo-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            "https://cdn-icons-png.flaticon.com/512/732/732228.png",
            "https://cdn-icons-png.flaticon.com/512/732/732221.png",
            "https://cdn-icons-png.flaticon.com/512/732/732217.png",
            "https://cdn-icons-png.flaticon.com/512/5968/5968885.png",
            "https://cdn-icons-png.flaticon.com/512/5968/5968887.png",
            "https://cdn-icons-png.flaticon.com/512/5968/5968901.png"
          ].map((logo, index) => (
            <motion.div 
              key={index}
              className="logo-item flex justify-center p-4 bg-white rounded-lg shadow-sm"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 10px 25px -5px rgba(0, 115, 223, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={logo} alt={`Company ${index+1}`} className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Filters Section */}
      <motion.section 
        className="mb-12 max-w-6xl mx-auto px-4 relative z-30"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Find Your Perfect Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <select 
                name="department"
                value={filters.department}
                onChange={handleFilterChange}
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
            
            <div className="relative">
              <select 
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              >
                <option value="all">All Locations</option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
            
            <div className="relative">
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search jobs or companies..."
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="fas fa-search"></i>
              </div>
            </div>
            
            <motion.button 
              onClick={() => setFilters({ department: 'all', location: 'all', search: '' })}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fas fa-redo-alt mr-2"></i> Reset
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Job Listings */}
      <motion.section 
        className="mb-16 max-w-6xl mx-auto px-4 relative z-30"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Current Openings
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We're constantly looking for talented people to join our team. Check out our most recent job openings below.
        </motion.p>
        
        {filteredJobs.length === 0 ? (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <i className="fas fa-search fa-3x text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600">No jobs found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredJobs.map(job => (
                <motion.div 
                  key={job.id}
                  className="job-card bg-white rounded-xl shadow-md overflow-hidden card-hover group flex flex-col h-full"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  layout
                >
                  <div className="p-6 flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center p-2 shadow-sm">
                        <img src={job.logo} alt={job.company} className="w-8 h-8 object-contain" />
                      </div>
                      <span className="text-sm text-gray-500">{job.posted}</span>
                    </div>
                    
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          job.department === "Engineering" ? "bg-blue-100 text-blue-600" :
                          job.department === "Design" ? "bg-green-100 text-green-600" :
                          job.department === "Marketing" ? "bg-purple-100 text-purple-600" :
                          "bg-yellow-100 text-yellow-600"
                        }`}>
                          {job.department}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
                    
                    <div className="flex items-center text-gray-500 mb-2">
                      <i className="fas fa-building mr-2 text-sm"></i>
                      <span className="text-sm">{job.company}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 mb-2">
                      <i className="fas fa-map-marker-alt mr-2 text-sm"></i>
                      <span className="text-sm">{job.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500">
                      <i className="fas fa-clock mr-2 text-sm"></i>
                      <span className="text-sm">{job.type}</span>
                    </div>
                  </div>
                  
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center mt-auto">
                    <span className="text-blue-600 font-semibold">Apply Now</span>
                    <span className="text-blue-600">
                      <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="max-w-6xl mx-auto px-4 mb-16 relative z-30"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We offer a great work environment and benefits to help you thrive both professionally and personally.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "dollar-sign", title: "Competitive Salary", desc: "We offer industry-leading compensation packages." },
            { icon: "laptop-house", title: "Remote Work", desc: "Work from anywhere with our flexible remote policy." },
            { icon: "graduation-cap", title: "Learning & Development", desc: "Annual budget for courses, conferences, and training." },
            { icon: "heart", title: "Health & Wellness", desc: "Comprehensive health insurance and wellness programs." }
          ].map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col h-full"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 115, 223, 0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fas fa-${benefit.icon} text-blue-600 text-2xl`}></i>
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className="max-w-4xl mx-auto px-4 mb-16 relative z-30"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
          <p className="text-gray-600 mb-6">Sign up for our newsletter to get notified about new job openings</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <motion.button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </motion.section>

      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(120deg, #0073df, #00a8ff);
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .logo-item {
          filter: grayscale(100%);
          opacity: 0.6;
          transition: all 0.4s ease;
        }
        
        .logo-item:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.05);
        }
        
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.1) 20%,
            rgba(255, 255, 255, 0) 60%
          );
          transform: rotate(30deg);
          transition: all 0.5s ease-out;
          opacity: 0;
        }
        
        .shine-effect:hover::after {
          opacity: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default CareerPage;
// // import React from 'react'

// // function CourceFinder() {
// //     return (
// //         <div>
// //             fghfghfghfthb
// //         </div>
// //     )
// // }

// // export default CourceFinder
// import React, { useState } from 'react';
// import {
//     Search,
//     Filter,
//     MapPin,
//     Star,
//     Users,
//     Clock,
//     BookOpen,
//     GraduationCap,
//     ChevronDown,
//     ChevronRight,
//     Heart,
//     Share2,
//     Eye,
//     Bookmark,
//     Award,
//     TrendingUp,
//     Building,
//     Calendar,
//     IndianRupee,
//     CheckCircle,
//     X
// } from 'lucide-react';

// const CourceFinder = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedLevel, setSelectedLevel] = useState('');
//     const [selectedStream, setSelectedStream] = useState('');
//     const [selectedLocation, setSelectedLocation] = useState('');
//     const [showFilters, setShowFilters] = useState(false);
//     const [sortBy, setSortBy] = useState('popularity');
//     const [viewType, setViewType] = useState('grid');

//     const streams = [
//         'Engineering', 'Medical', 'Management', 'Commerce', 'Arts', 'Science',
//         'Computer Science', 'Design', 'Law', 'Agriculture', 'Architecture', 'Pharmacy'
//     ];

//     const levels = ['UG', 'PG', 'Diploma', 'Certificate', 'PhD', 'Distance Learning'];

//     const locations = [
//         'Delhi', 'Mumbai', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad',
//         'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'All India'
//     ];

//     const courses = [
//         {
//             id: 1,
//             name: 'B.Tech Computer Science Engineering',
//             college: 'IIT Delhi',
//             location: 'New Delhi',
//             rating: 4.8,
//             reviews: 1234,
//             duration: '4 Years',
//             fees: '2,50,000',
//             level: 'UG',
//             stream: 'Engineering',
//             seats: 120,
//             cutoff: '98.5%',
//             placement: '95%',
//             avgPackage: '18 LPA',
//             topRecruiter: 'Google, Microsoft',
//             image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
//             trending: true,
//             featured: true
//         },
//         {
//             id: 2,
//             name: 'MBBS',
//             college: 'AIIMS Delhi',
//             location: 'New Delhi',
//             rating: 4.9,
//             reviews: 956,
//             duration: '5.5 Years',
//             fees: '1,450',
//             level: 'UG',
//             stream: 'Medical',
//             seats: 125,
//             cutoff: '99.9%',
//             placement: '100%',
//             avgPackage: 'N/A',
//             topRecruiter: 'Govt Hospitals',
//             image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
//             trending: true,
//             featured: true
//         },
//         {
//             id: 3,
//             name: 'MBA',
//             college: 'IIM Ahmedabad',
//             location: 'Ahmedabad',
//             rating: 4.7,
//             reviews: 789,
//             duration: '2 Years',
//             fees: '25,00,000',
//             level: 'PG',
//             stream: 'Management',
//             seats: 395,
//             cutoff: '99%',
//             placement: '100%',
//             avgPackage: '31 LPA',
//             topRecruiter: 'McKinsey, BCG',
//             image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
//             trending: false,
//             featured: true
//         },
//         {
//             id: 4,
//             name: 'B.Sc Data Science',
//             college: 'Christ University',
//             location: 'Bangalore',
//             rating: 4.6,
//             reviews: 567,
//             duration: '3 Years',
//             fees: '4,50,000',
//             level: 'UG',
//             stream: 'Science',
//             seats: 60,
//             cutoff: '85%',
//             placement: '88%',
//             avgPackage: '8 LPA',
//             topRecruiter: 'TCS, Infosys',
//             image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
//             trending: true,
//             featured: false
//         },
//         {
//             id: 5,
//             name: 'B.Des Product Design',
//             college: 'NID Ahmedabad',
//             location: 'Ahmedabad',
//             rating: 4.8,
//             reviews: 234,
//             duration: '4 Years',
//             fees: '3,20,000',
//             level: 'UG',
//             stream: 'Design',
//             seats: 35,
//             cutoff: '90%',
//             placement: '92%',
//             avgPackage: '12 LPA',
//             topRecruiter: 'Apple, Samsung',
//             image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&h=300&fit=crop',
//             trending: false,
//             featured: false
//         },
//         {
//             id: 6,
//             name: 'LLB',
//             college: 'National Law School',
//             location: 'Bangalore',
//             rating: 4.7,
//             reviews: 445,
//             duration: '3 Years',
//             fees: '2,80,000',
//             level: 'UG',
//             stream: 'Law',
//             seats: 80,
//             cutoff: '92%',
//             placement: '95%',
//             avgPackage: '15 LPA',
//             topRecruiter: 'Top Law Firms',
//             image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
//             trending: false,
//             featured: true
//         }
//     ];

//     const trendingSearches = [
//         'Engineering Colleges', 'Medical Colleges', 'MBA Colleges', 'Delhi Colleges',
//         'Private Colleges', 'Government Colleges', 'Distance Learning', 'Online Courses'
//     ];

//     const filteredCourses = courses.filter(course => {
//         const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             course.college.toLowerCase().includes(searchTerm.toLowerCase());
//         const matchesLevel = selectedLevel === '' || course.level === selectedLevel;
//         const matchesStream = selectedStream === '' || course.stream === selectedStream;
//         const matchesLocation = selectedLocation === '' || course.location.includes(selectedLocation);

//         return matchesSearch && matchesLevel && matchesStream && matchesLocation;
//     });

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Hero Section with Search */}


//             {/* Filters and Results */}
//             <div className="container mx-auto px-4 py-8">
//                 {/* Quick Stats */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//                     <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//                         <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                             <BookOpen className="w-6 h-6 text-blue-600" />
//                         </div>
//                         <h3 className="text-2xl font-bold text-gray-800">10,000+</h3>
//                         <p className="text-gray-600">Courses</p>
//                     </div>
//                     <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//                         <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                             <Building className="w-6 h-6 text-green-600" />
//                         </div>
//                         <h3 className="text-2xl font-bold text-gray-800">5,000+</h3>
//                         <p className="text-gray-600">Colleges</p>
//                     </div>
//                     <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//                         <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                             <Users className="w-6 h-6 text-purple-600" />
//                         </div>
//                         <h3 className="text-2xl font-bold text-gray-800">1M+</h3>
//                         <p className="text-gray-600">Students</p>
//                     </div>
//                     <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//                         <div className="w-12 h-12 bg-#08dceb-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                             <Award className="w-6 h-6 text-#08dceb-600" />
//                         </div>
//                         <h3 className="text-2xl font-bold text-gray-800">95%</h3>
//                         <p className="text-gray-600">Success Rate</p>
//                     </div>
//                 </div>

//                 {/* Filters Bar */}
//                 <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//                     <div className="flex flex-wrap items-center justify-between gap-4">
//                         <div className="flex flex-wrap items-center gap-4">
//                             <button
//                                 onClick={() => setShowFilters(!showFilters)}
//                                 className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                             >
//                                 <Filter className="w-4 h-4" />
//                                 <span>Filters</span>
//                             </button>

//                             <div className="flex items-center space-x-2">
//                                 <select
//                                     value={selectedStream}
//                                     onChange={(e) => setSelectedStream(e.target.value)}
//                                     className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                                 >
//                                     <option value="">All Streams</option>
//                                     {streams.map(stream => (
//                                         <option key={stream} value={stream}>{stream}</option>
//                                     ))}
//                                 </select>

//                                 <select
//                                     value={selectedLocation}
//                                     onChange={(e) => setSelectedLocation(e.target.value)}
//                                     className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                                 >
//                                     <option value="">All Locations</option>
//                                     {locations.map(location => (
//                                         <option key={location} value={location}>{location}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>

//                         <div className="flex items-center space-x-4">
//                             <span className="text-gray-600">{filteredCourses.length} courses found</span>
//                             <select
//                                 value={sortBy}
//                                 onChange={(e) => setSortBy(e.target.value)}
//                                 className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                             >
//                                 <option value="popularity">Sort by Popularity</option>
//                                 <option value="rating">Sort by Rating</option>
//                                 <option value="fees">Sort by Fees</option>
//                                 <option value="name">Sort by Name</option>
//                             </select>
//                         </div>
//                     </div>

//                     {/* Active Filters */}
//                     {(selectedLevel || selectedStream || selectedLocation || searchTerm) && (
//                         <div className="mt-4 flex flex-wrap gap-2">
//                             {searchTerm && (
//                                 <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//                                     Search: {searchTerm}
//                                     <button onClick={() => setSearchTerm('')}>
//                                         <X className="w-3 h-3" />
//                                     </button>
//                                 </span>
//                             )}
//                             {selectedLevel && (
//                                 <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//                                     Level: {selectedLevel}
//                                     <button onClick={() => setSelectedLevel('')}>
//                                         <X className="w-3 h-3" />
//                                     </button>
//                                 </span>
//                             )}
//                             {selectedStream && (
//                                 <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//                                     Stream: {selectedStream}
//                                     <button onClick={() => setSelectedStream('')}>
//                                         <X className="w-3 h-3" />
//                                     </button>
//                                 </span>
//                             )}
//                             {selectedLocation && (
//                                 <span className="bg-#08dceb-100 text-#08dceb-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//                                     Location: {selectedLocation}
//                                     <button onClick={() => setSelectedLocation('')}>
//                                         <X className="w-3 h-3" />
//                                     </button>
//                                 </span>
//                             )}
//                         </div>
//                     )}
//                 </div>

//                 {/* Course Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {filteredCourses.map((course) => (
//                         <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
//                             {/* Course Image */}
//                             <div className="relative h-48 overflow-hidden">
//                                 <img
//                                     src={course.image}
//                                     alt={course.name}
//                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                                 />
//                                 <div className="absolute top-4 left-4 flex space-x-2">
//                                     {course.trending && (
//                                         <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
//                                             <TrendingUp className="w-3 h-3" />
//                                             Trending
//                                         </span>
//                                     )}
//                                     {course.featured && (
//                                         <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
//                                             Featured
//                                         </span>
//                                     )}
//                                 </div>
//                                 <div className="absolute top-4 right-4 flex space-x-2">
//                                     <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
//                                         <Heart className="w-4 h-4 text-gray-600" />
//                                     </button>
//                                     <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
//                                         <Share2 className="w-4 h-4 text-gray-600" />
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Course Content */}
//                             <div className="p-6">
//                                 {/* College Info */}
//                                 <div className="flex items-center justify-between mb-3">
//                                     <h3 className="text-lg font-bold text-gray-800 leading-tight">
//                                         {course.name}
//                                     </h3>
//                                     <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
//                                         <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                                         <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center space-x-2 text-gray-600 mb-4">
//                                     <Building className="w-4 h-4" />
//                                     <span className="font-medium">{course.college}</span>
//                                 </div>

//                                 <div className="flex items-center space-x-2 text-gray-600 mb-4">
//                                     <MapPin className="w-4 h-4" />
//                                     <span>{course.location}</span>
//                                 </div>

//                                 {/* Course Details */}
//                                 <div className="grid grid-cols-2 gap-4 mb-4">
//                                     <div className="flex items-center space-x-2 text-sm text-gray-600">
//                                         <Clock className="w-4 h-4" />
//                                         <span>{course.duration}</span>
//                                     </div>
//                                     <div className="flex items-center space-x-2 text-sm text-gray-600">
//                                         <Users className="w-4 h-4" />
//                                         <span>{course.seats} seats</span>
//                                     </div>
//                                 </div>

//                                 {/* Fees and Placement */}
//                                 <div className="grid grid-cols-2 gap-4 mb-4">
//                                     <div>
//                                         <p className="text-xs text-gray-500">Total Fees</p>
//                                         <p className="text-lg font-bold text-green-600 flex items-center">
//                                             <IndianRupee className="w-4 h-4" />
//                                             {course.fees}
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <p className="text-xs text-gray-500">Avg Package</p>
//                                         <p className="text-lg font-bold text-blue-600">
//                                             {course.avgPackage}
//                                         </p>
//                                     </div>
//                                 </div>

//                                 {/* Stats */}
//                                 <div className="grid grid-cols-3 gap-3 mb-4">
//                                     <div className="text-center p-2 bg-gray-50 rounded-lg">
//                                         <p className="text-xs text-gray-500">Cutoff</p>
//                                         <p className="font-semibold text-sm">{course.cutoff}</p>
//                                     </div>
//                                     <div className="text-center p-2 bg-gray-50 rounded-lg">
//                                         <p className="text-xs text-gray-500">Placement</p>
//                                         <p className="font-semibold text-sm">{course.placement}</p>
//                                     </div>
//                                     <div className="text-center p-2 bg-gray-50 rounded-lg">
//                                         <p className="text-xs text-gray-500">Reviews</p>
//                                         <p className="font-semibold text-sm">{course.reviews}</p>
//                                     </div>
//                                 </div>

//                                 {/* Action Buttons */}
//                                 <div className="flex space-x-3">
//                                     <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200">
//                                         View Details
//                                     </button>
//                                     <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-1">
//                                         <Bookmark className="w-4 h-4" />
//                                         <span>Save</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Load More */}
//                 <div className="text-center mt-12">
//                     <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200">
//                         Load More Courses
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CourceFinder;
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Star, ExternalLink, Heart, BookOpen, GraduationCap, Users, DollarSign, Clock, Filter, SortDesc } from 'lucide-react';

const CollegeFinder = () => {
    const [filters, setFilters] = useState({
        studyLevel: '',
        fieldOfStudy: '',
        countries: [],
        gpa: '',
        budget: '',
        ielts: '',
        gre: '',
        gmat: ''
    });

    const [colleges, setColleges] = useState([]);
    const [filteredColleges, setFilteredColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('relevance');
    const [favorites, setFavorites] = useState([]);

    // Sample college data
    const sampleColleges = [
        {
            id: 1,
            name: 'Stanford University',
            location: 'California, USA',
            country: 'usa',
            logo: 'SU',
            ranking: 2,
            acceptance: '4.3%',
            tuition: '$56,169',
            students: '17,249',
            rating: 4.9,
            category: 'ambitious',
            programs: ['Computer Science', 'Engineering', 'Business'],
            tags: ['Top Ranked', 'Research University', 'Silicon Valley'],
            requirements: {
                gpa: '3.8+',
                ielts: '7.0+',
                gre: '320+',
                gmat: 'N/A'
            }
        },
        {
            id: 2,
            name: 'University of Toronto',
            location: 'Toronto, Canada',
            country: 'canada',
            logo: 'UT',
            ranking: 25,
            acceptance: '43%',
            tuition: 'CAD 58,160',
            students: '97,000',
            rating: 4.6,
            category: 'moderate',
            programs: ['Engineering', 'Medicine', 'Arts'],
            tags: ['Public University', 'Diverse Programs', 'Research Intensive'],
            requirements: {
                gpa: '3.3+',
                ielts: '6.5+',
                gre: '310+',
                gmat: '600+'
            }
        },
        {
            id: 3,
            name: 'University of Melbourne',
            location: 'Melbourne, Australia',
            country: 'australia',
            logo: 'UM',
            ranking: 33,
            acceptance: '70%',
            tuition: 'AUD 45,824',
            students: '51,000',
            rating: 4.4,
            category: 'safe',
            programs: ['Business', 'Arts', 'Science'],
            tags: ['Go8 University', 'City Campus', 'International Focus'],
            requirements: {
                gpa: '3.0+',
                ielts: '6.5+',
                gre: '300+',
                gmat: '550+'
            }
        },
        {
            id: 4,
            name: 'Imperial College London',
            location: 'London, UK',
            country: 'uk',
            logo: 'ICL',
            ranking: 6,
            acceptance: '14.3%',
            tuition: '£34,000',
            students: '19,000',
            rating: 4.7,
            category: 'ambitious',
            programs: ['Engineering', 'Medicine', 'Natural Sciences'],
            tags: ['Russell Group', 'STEM Focus', 'London'],
            requirements: {
                gpa: '3.7+',
                ielts: '7.0+',
                gre: '315+',
                gmat: 'N/A'
            }
        },
        {
            id: 5,
            name: 'Technical University of Munich',
            location: 'Munich, Germany',
            country: 'germany',
            logo: 'TUM',
            ranking: 50,
            acceptance: '8%',
            tuition: '€150',
            students: '45,000',
            rating: 4.5,
            category: 'moderate',
            programs: ['Engineering', 'Computer Science', 'Natural Sciences'],
            tags: ['TU9 University', 'Low Tuition', 'Industry Connections'],
            requirements: {
                gpa: '3.5+',
                ielts: '6.5+',
                gre: '305+',
                gmat: 'N/A'
            }
        },
        {
            id: 6,
            name: 'Arizona State University',
            location: 'Arizona, USA',
            country: 'usa',
            logo: 'ASU',
            ranking: 103,
            acceptance: '88%',
            tuition: '$29,428',
            students: '80,000',
            rating: 4.2,
            category: 'safe',
            programs: ['Business', 'Engineering', 'Liberal Arts'],
            tags: ['Large University', 'Online Programs', 'Innovation'],
            requirements: {
                gpa: '3.0+',
                ielts: '6.0+',
                gre: '295+',
                gmat: '500+'
            }
        }
    ];

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setColleges(sampleColleges);
            setFilteredColleges(sampleColleges);
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        filterColleges();
    }, [filters, colleges]);

    const filterColleges = () => {
        let filtered = [...colleges];

        if (filters.studyLevel) {
            // Filter by study level logic
        }

        if (filters.fieldOfStudy) {
            filtered = filtered.filter(college =>
                college.programs.some(program =>
                    program.toLowerCase().includes(filters.fieldOfStudy.toLowerCase())
                )
            );
        }

        if (filters.countries.length > 0) {
            filtered = filtered.filter(college =>
                filters.countries.includes(college.country)
            );
        }

        setFilteredColleges(filtered);
    };

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleCountryChange = (country, checked) => {
        setFilters(prev => ({
            ...prev,
            countries: checked
                ? [...prev.countries, country]
                : prev.countries.filter(c => c !== country)
        }));
    };

    const toggleFavorite = (collegeId) => {
        setFavorites(prev =>
            prev.includes(collegeId)
                ? prev.filter(id => id !== collegeId)
                : [...prev, collegeId]
        );
    };

    const getCategoryColor = (category) => {
        switch (category) {
            case 'ambitious': return 'bg-gray-500';
            case 'moderate': return 'bg-gray-500';
            case 'safe': return 'bg-gray-500';
            default: return 'bg-blue-500';
        }
    };

    const getCategoryText = (category) => {
        switch (category) {
            case 'ambitious': return 'Ambitious';
            case 'moderate': return 'Moderate';
            case 'safe': return 'Safe';
            default: return 'Match';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-gradient-to-r from-blue-900 to-blue-400 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">College Finder</h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                        Discover your perfect university match from thousands of colleges worldwide
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filter Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                            <div className="flex items-center gap-2 mb-6">
                                <Filter className="w-5 h-5 text-blue-600" />
                                <h2 className="text-xl font-bold text-gray-800">Find Your Match</h2>
                            </div>

                            {/* Study Level */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <GraduationCap className="w-4 h-4" />
                                    Study Level
                                </h4>
                                <select
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0073df] focus:outline-none transition-colors"
                                    value={filters.studyLevel}
                                    onChange={(e) => handleFilterChange('studyLevel', e.target.value)}
                                >
                                    <option value="">Select Study Level</option>
                                    <option value="bachelors">Bachelor's Degree</option>
                                    <option value="masters">Master's Degree</option>
                                    <option value="phd">PhD</option>
                                    <option value="diploma">Diploma</option>
                                </select>
                            </div>

                            {/* Field of Study */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" />
                                    Field of Study
                                </h4>
                                <select
                                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0073df] focus:outline-none transition-colors"
                                    value={filters.fieldOfStudy}
                                    onChange={(e) => handleFilterChange('fieldOfStudy', e.target.value)}
                                >
                                    <option value="">Select Field</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="business">Business & Management</option>
                                    <option value="computer-science">Computer Science</option>
                                    <option value="medicine">Medicine</option>
                                    <option value="arts">Arts & Humanities</option>
                                    <option value="science">Natural Sciences</option>
                                    <option value="social-science">Social Sciences</option>
                                </select>
                            </div>

                            {/* Countries */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    Preferred Countries
                                </h4>
                                <div className="space-y-2">
                                    {[
                                        { value: 'usa', label: 'United States' },
                                        { value: 'canada', label: 'Canada' },
                                        { value: 'uk', label: 'United Kingdom' },
                                        { value: 'australia', label: 'Australia' },
                                        { value: 'germany', label: 'Germany' }
                                    ].map(country => (
                                        <label key={country.value} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
                                                checked={filters.countries.includes(country.value)}
                                                onChange={(e) => handleCountryChange(country.value, e.target.checked)}
                                            />
                                            <span className="text-sm text-gray-600">{country.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Academic Scores */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-700 mb-3">Academic Scores</h4>
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">GPA (out of 4.0)</label>
                                        <input
                                            type="text"
                                            placeholder="3.5"
                                            className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm"
                                            value={filters.gpa}
                                            onChange={(e) => handleFilterChange('gpa', e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">IELTS Score</label>
                                        <input
                                            type="text"
                                            placeholder="7.0"
                                            className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm"
                                            value={filters.ielts}
                                            onChange={(e) => handleFilterChange('ielts', e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">GRE Score</label>
                                        <input
                                            type="text"
                                            placeholder="320"
                                            className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm"
                                            value={filters.gre}
                                            onChange={(e) => handleFilterChange('gre', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Search Button */}
                            <button className="w-full bg-[#0073df]  text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                                <Search className="w-4 h-4" />
                                Find Colleges
                            </button>

                            <button className="w-full mt-3 bg-[#0073df] text-white border-2 border-#08dceb-600 py-2 px-4 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                                Reset Filters
                            </button>
                        </div>
                    </aside>

                    {/* Results Section */}
                    <main className="lg:col-span-3">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            {/* Results Header */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-gray-200">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">
                                        {loading ? 'Loading...' : `${filteredColleges.length} Colleges Found`}
                                    </h2>
                                    <p className="text-gray-600 text-sm mt-1">Based on your preferences and profile</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4 md:mt-0">
                                    <SortDesc className="w-4 h-4 text-gray-500" />
                                    <select
                                        className="p-2 border border-gray-300 rounded-lg focus:border-#08dceb-500 focus:outline-none text-sm"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="relevance">Sort by Relevance</option>
                                        <option value="ranking">Sort by Ranking</option>
                                        <option value="acceptance">Sort by Acceptance Rate</option>
                                        <option value="tuition">Sort by Tuition</option>
                                    </select>
                                </div>
                            </div>

                            {/* College Results */}
                            {loading ? (
                                <div className="text-center py-12">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-#08dceb-600 mx-auto"></div>
                                    <p className="text-gray-600 mt-4">Finding perfect matches for you...</p>
                                </div>
                            ) : filteredColleges.length === 0 ? (
                                <div className="text-center py-12">
                                    <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No colleges found</h3>
                                    <p className="text-gray-600">Try adjusting your filters to find more options</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {filteredColleges.map((college) => (
                                        <div key={college.id} className="relative border-2 border-gray-200 rounded-xl p-6 hover:border-#08dceb-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                            {/* Recommendation Badge */}
                                            <div className={`absolute -top-2 -right-2 ${getCategoryColor(college.category)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                                                {getCategoryText(college.category)}
                                            </div>

                                            {/* College Header */}
                                            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                                                <div className="flex items-start gap-4 flex-1">
                                                    <div className="w-16 h-16 bg-#08dceb-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                                        {college.logo}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{college.name}</h3>
                                                        <div className="flex items-center text-gray-600 mb-2">
                                                            <MapPin className="w-4 h-4 mr-1" />
                                                            <span className="text-sm">{college.location}</span>
                                                        </div>
                                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                                            <div className="flex items-center">
                                                                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                                                                <span>{college.rating}/5</span>
                                                            </div>
                                                            <div>World Rank #{college.ranking}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => toggleFavorite(college.id)}
                                                    className={`p-2 rounded-full transition-colors ${favorites.includes(college.id)
                                                        ? 'bg-red-100 text-red-600 hover:bg-red-200'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    <Heart className={`w-5 h-5 ${favorites.includes(college.id) ? 'fill-current' : ''}`} />
                                                </button>
                                            </div>

                                            {/* College Stats */}
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                                <div className="bg-gray-50 rounded-lg p-3 text-center">
                                                    <div className="font-bold text-gray-800">{college.acceptance}</div>
                                                    <div className="text-xs text-gray-600 mt-1">Acceptance Rate</div>
                                                </div>
                                                <div className="bg-gray-50 rounded-lg p-3 text-center">
                                                    <div className="font-bold text-gray-800">{college.tuition}</div>
                                                    <div className="text-xs text-gray-600 mt-1">Annual Tuition</div>
                                                </div>
                                                <div className="bg-gray-50 rounded-lg p-3 text-center">
                                                    <div className="font-bold text-gray-800">{college.students}</div>
                                                    <div className="text-xs text-gray-600 mt-1">Students</div>
                                                </div>
                                                <div className="bg-gray-50 rounded-lg p-3 text-center">
                                                    <div className="font-bold text-gray-800">{college.requirements.gpa}</div>
                                                    <div className="text-xs text-gray-600 mt-1">Min GPA</div>
                                                </div>
                                            </div>

                                            {/* Programs */}
                                            <div className="mb-4">
                                                <div className="text-sm text-gray-600 mb-2">Popular Programs:</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {college.programs.map((program, index) => (
                                                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                                            {program}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {college.tags.map((tag, index) => (
                                                    <span key={index} className="bg-gradient-to-r from-#08dceb-400 to-#08dceb-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Actions */}
                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <button className="flex-1 bg-[#0073df] text-white py-2 px-4 rounded-lg font-medium hover:from-#08dceb-400 hover:to-#08dceb-700 transition-all flex items-center justify-center gap-2">
                                                    <ExternalLink className="w-4 h-4" />
                                                    View Details
                                                </button>
                                                <button className="flex-1 bg-white text-#08dceb-600 border-2 border-#08dceb-600 py-2 px-4 rounded-lg font-medium  hover:text-white  hover:bg-blue-500 transition-colors">
                                                    Compare
                                                </button>
                                                <button className="flex-1 bg-blue-300 text-#08dceb-600-white border-2 border-blue-300 py-2 px-4 rounded-lg font-medium hover:text-white  hover:bg-blue-500 transition-colors">
                                                    Apply Now
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default CollegeFinder;

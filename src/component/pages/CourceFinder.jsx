// import React from 'react'

// function CourceFinder() {
//     return (
//         <div>
//             fghfghfghfthb
//         </div>
//     )
// }

// export default CourceFinder
import React, { useState } from 'react';
import {
    Search,
    Filter,
    MapPin,
    Star,
    Users,
    Clock,
    BookOpen,
    GraduationCap,
    ChevronDown,
    ChevronRight,
    Heart,
    Share2,
    Eye,
    Bookmark,
    Award,
    TrendingUp,
    Building,
    Calendar,
    IndianRupee,
    CheckCircle,
    X
} from 'lucide-react';

const CourceFinder = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedStream, setSelectedStream] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('popularity');
    const [viewType, setViewType] = useState('grid');

    const streams = [
        'Engineering', 'Medical', 'Management', 'Commerce', 'Arts', 'Science',
        'Computer Science', 'Design', 'Law', 'Agriculture', 'Architecture', 'Pharmacy'
    ];

    const levels = ['UG', 'PG', 'Diploma', 'Certificate', 'PhD', 'Distance Learning'];

    const locations = [
        'Delhi', 'Mumbai', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad',
        'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'All India'
    ];

    const courses = [
        {
            id: 1,
            name: 'B.Tech Computer Science Engineering',
            college: 'IIT Delhi',
            location: 'New Delhi',
            rating: 4.8,
            reviews: 1234,
            duration: '4 Years',
            fees: '2,50,000',
            level: 'UG',
            stream: 'Engineering',
            seats: 120,
            cutoff: '98.5%',
            placement: '95%',
            avgPackage: '18 LPA',
            topRecruiter: 'Google, Microsoft',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
            trending: true,
            featured: true
        },
        {
            id: 2,
            name: 'MBBS',
            college: 'AIIMS Delhi',
            location: 'New Delhi',
            rating: 4.9,
            reviews: 956,
            duration: '5.5 Years',
            fees: '1,450',
            level: 'UG',
            stream: 'Medical',
            seats: 125,
            cutoff: '99.9%',
            placement: '100%',
            avgPackage: 'N/A',
            topRecruiter: 'Govt Hospitals',
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
            trending: true,
            featured: true
        },
        {
            id: 3,
            name: 'MBA',
            college: 'IIM Ahmedabad',
            location: 'Ahmedabad',
            rating: 4.7,
            reviews: 789,
            duration: '2 Years',
            fees: '25,00,000',
            level: 'PG',
            stream: 'Management',
            seats: 395,
            cutoff: '99%',
            placement: '100%',
            avgPackage: '31 LPA',
            topRecruiter: 'McKinsey, BCG',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
            trending: false,
            featured: true
        },
        {
            id: 4,
            name: 'B.Sc Data Science',
            college: 'Christ University',
            location: 'Bangalore',
            rating: 4.6,
            reviews: 567,
            duration: '3 Years',
            fees: '4,50,000',
            level: 'UG',
            stream: 'Science',
            seats: 60,
            cutoff: '85%',
            placement: '88%',
            avgPackage: '8 LPA',
            topRecruiter: 'TCS, Infosys',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
            trending: true,
            featured: false
        },
        {
            id: 5,
            name: 'B.Des Product Design',
            college: 'NID Ahmedabad',
            location: 'Ahmedabad',
            rating: 4.8,
            reviews: 234,
            duration: '4 Years',
            fees: '3,20,000',
            level: 'UG',
            stream: 'Design',
            seats: 35,
            cutoff: '90%',
            placement: '92%',
            avgPackage: '12 LPA',
            topRecruiter: 'Apple, Samsung',
            image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&h=300&fit=crop',
            trending: false,
            featured: false
        },
        {
            id: 6,
            name: 'LLB',
            college: 'National Law School',
            location: 'Bangalore',
            rating: 4.7,
            reviews: 445,
            duration: '3 Years',
            fees: '2,80,000',
            level: 'UG',
            stream: 'Law',
            seats: 80,
            cutoff: '92%',
            placement: '95%',
            avgPackage: '15 LPA',
            topRecruiter: 'Top Law Firms',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
            trending: false,
            featured: true
        }
    ];

    const trendingSearches = [
        'Engineering Colleges', 'Medical Colleges', 'MBA Colleges', 'Delhi Colleges',
        'Private Colleges', 'Government Colleges', 'Distance Learning', 'Online Courses'
    ];

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.college.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLevel = selectedLevel === '' || course.level === selectedLevel;
        const matchesStream = selectedStream === '' || course.stream === selectedStream;
        const matchesLocation = selectedLocation === '' || course.location.includes(selectedLocation);

        return matchesSearch && matchesLevel && matchesStream && matchesLocation;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Search */}


            {/* Filters and Results */}
            <div className="container mx-auto px-4 py-8">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <BookOpen className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">10,000+</h3>
                        <p className="text-gray-600">Courses</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Building className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">5,000+</h3>
                        <p className="text-gray-600">Colleges</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">1M+</h3>
                        <p className="text-gray-600">Students</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Award className="w-6 h-6 text-orange-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">95%</h3>
                        <p className="text-gray-600">Success Rate</p>
                    </div>
                </div>

                {/* Filters Bar */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-4">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <Filter className="w-4 h-4" />
                                <span>Filters</span>
                            </button>

                            <div className="flex items-center space-x-2">
                                <select
                                    value={selectedStream}
                                    onChange={(e) => setSelectedStream(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                >
                                    <option value="">All Streams</option>
                                    {streams.map(stream => (
                                        <option key={stream} value={stream}>{stream}</option>
                                    ))}
                                </select>

                                <select
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                >
                                    <option value="">All Locations</option>
                                    {locations.map(location => (
                                        <option key={location} value={location}>{location}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600">{filteredCourses.length} courses found</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <option value="popularity">Sort by Popularity</option>
                                <option value="rating">Sort by Rating</option>
                                <option value="fees">Sort by Fees</option>
                                <option value="name">Sort by Name</option>
                            </select>
                        </div>
                    </div>

                    {/* Active Filters */}
                    {(selectedLevel || selectedStream || selectedLocation || searchTerm) && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {searchTerm && (
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    Search: {searchTerm}
                                    <button onClick={() => setSearchTerm('')}>
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            )}
                            {selectedLevel && (
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    Level: {selectedLevel}
                                    <button onClick={() => setSelectedLevel('')}>
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            )}
                            {selectedStream && (
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    Stream: {selectedStream}
                                    <button onClick={() => setSelectedStream('')}>
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            )}
                            {selectedLocation && (
                                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    Location: {selectedLocation}
                                    <button onClick={() => setSelectedLocation('')}>
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {/* Course Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course) => (
                        <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            {/* Course Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4 flex space-x-2">
                                    {course.trending && (
                                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                            <TrendingUp className="w-3 h-3" />
                                            Trending
                                        </span>
                                    )}
                                    {course.featured && (
                                        <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                            Featured
                                        </span>
                                    )}
                                </div>
                                <div className="absolute top-4 right-4 flex space-x-2">
                                    <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                                        <Heart className="w-4 h-4 text-gray-600" />
                                    </button>
                                    <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                                        <Share2 className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            {/* Course Content */}
                            <div className="p-6">
                                {/* College Info */}
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-bold text-gray-800 leading-tight">
                                        {course.name}
                                    </h3>
                                    <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                        <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                                    <Building className="w-4 h-4" />
                                    <span className="font-medium">{course.college}</span>
                                </div>

                                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                                    <MapPin className="w-4 h-4" />
                                    <span>{course.location}</span>
                                </div>

                                {/* Course Details */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <Users className="w-4 h-4" />
                                        <span>{course.seats} seats</span>
                                    </div>
                                </div>

                                {/* Fees and Placement */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-xs text-gray-500">Total Fees</p>
                                        <p className="text-lg font-bold text-green-600 flex items-center">
                                            <IndianRupee className="w-4 h-4" />
                                            {course.fees}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Avg Package</p>
                                        <p className="text-lg font-bold text-blue-600">
                                            {course.avgPackage}
                                        </p>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                                        <p className="text-xs text-gray-500">Cutoff</p>
                                        <p className="font-semibold text-sm">{course.cutoff}</p>
                                    </div>
                                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                                        <p className="text-xs text-gray-500">Placement</p>
                                        <p className="font-semibold text-sm">{course.placement}</p>
                                    </div>
                                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                                        <p className="text-xs text-gray-500">Reviews</p>
                                        <p className="font-semibold text-sm">{course.reviews}</p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-3">
                                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200">
                                        View Details
                                    </button>
                                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-1">
                                        <Bookmark className="w-4 h-4" />
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200">
                        Load More Courses
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourceFinder;

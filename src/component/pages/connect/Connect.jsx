// import React from 'react'

// function Connect() {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="w-64 h-40 bg-white rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
//                 <h2 className="text-xl font-bold text-gray-700 animate-bounce">
//                     Coming Soon 🚀
//                 </h2>
//                 <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse opacity-30"></div>
//             </div>
//         </div>
//     )
// }

// export default Connect
import React, { useState, useEffect } from 'react';

const Connect = () => {
    const [selectedDegree, setSelectedDegree] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [studyYear, setStudyYear] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedExpert, setSelectedExpert] = useState(null);
    const [modalStep, setModalStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [studyStage, setStudyStage] = useState('');
    const [filters, setFilters] = useState({
        course: '',
        university: '',
        country: '',
        experience: ''
    });
    const [currentSwiperIndex, setCurrentSwiperIndex] = useState(0);
    const [phoneError, setPhoneError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const experts = [
        {
            id: 1,
            name: "Diksha Chajjed",
            status: "Offline",
            university: "Coventry University",
            rate: "7/Min",
            type: "Current Student",
            languages: ["English", "Hindi"],
            rating: 4.5
        },
        {
            id: 2,
            name: "Keshav Kunthe",
            status: "Offline",
            university: "University of Oxford",
            rate: "30/Min",
            type: "Alumni",
            languages: ["English"],
            rating: 4.8
        },
        {
            id: 3,
            name: "Nikita Chavan",
            status: "Offline",
            university: "Imperial College London",
            rate: "15/Min",
            type: "Current Student",
            languages: ["English", "Marathi"],
            rating: 4.3
        },
        {
            id: 4,
            name: "Neel Bendre",
            status: "Offline",
            university: "Cranfield University",
            rate: "11/Min",
            type: "Alumni",
            languages: ["English", "Hindi", "Marathi"],
            rating: 4.7
        },
        {
            id: 5,
            name: "Astha Khurana",
            status: "Offline",
            university: "University of Cambridge",
            rate: "13/Min",
            type: "Current Student",
            languages: ["English", "Hindi"],
            rating: 4.6
        }
    ];

    // Swiper items data
    const swiperItems = [
        {
            id: 1,
            title: "Application process",
            tags: ["Scholarships", "SOP & LOR Documents"],
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            title: "Visa Guidance",
            tags: ["Documentation", "Interview Preparation"],
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "University Selection",
            tags: ["Shortlisting", "Admission Process"],
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ];

    // Auto swipe effect
    useEffect(() => {
        let swipeInterval;
        if (showModal) {
            swipeInterval = setInterval(() => {
                setCurrentSwiperIndex((prev) => (prev + 1) % swiperItems.length);
            }, 5000);
        }

        return () => {
            if (swipeInterval) clearInterval(swipeInterval);
        };
    }, [showModal, swiperItems.length]);

    const handleFilterChange = (filterName, value) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: value
        }));
    };

    const handleCallClick = (expert) => {
        setSelectedExpert(expert);
        setShowModal(true);
        setModalStep(1);
        setValidationErrors({});
    };

    const validatePhone = (phone) => {
        // Remove any non-digit characters
        const cleanedPhone = phone.replace(/\D/g, '');

        // Check if phone number has exactly 10 digits
        if (cleanedPhone.length !== 10) {
            return "Phone number must be 10 digits";
        }

        return "";
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        // Allow only numbers and limit to 10 digits
        const cleanedValue = value.replace(/\D/g, '').slice(0, 10);
        setPhone(cleanedValue);

        // Validate phone number
        if (cleanedValue.length === 10) {
            setPhoneError("");
            setValidationErrors(prev => ({ ...prev, phone: '' }));
        } else if (cleanedValue.length > 0) {
            setPhoneError("Phone number must be 10 digits");
            setValidationErrors(prev => ({ ...prev, phone: 'Phone number must be 10 digits' }));
        } else {
            setPhoneError("");
            setValidationErrors(prev => ({ ...prev, phone: '' }));
        }
    };

    const validateStep1 = () => {
        const errors = {};

        if (!selectedDegree) errors.degree = "Please select a degree";
        if (!email) errors.email = "Email is required";
        if (!phone) errors.phone = "Phone number is required";
        else if (phone.length !== 10) errors.phone = "Phone number must be 10 digits";
        if (!studyYear) errors.studyYear = "Please select a year";

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const validateStep2 = () => {
        const errors = {};

        if (!firstName) errors.firstName = "First name is required";
        if (!lastName) errors.lastName = "Last name is required";
        if (!selectedDate) errors.selectedDate = "Please select a date";
        if (!selectedCourse) errors.selectedCourse = "Please select a course";
        if (!studyStage) errors.studyStage = "Please select a study stage";
        if (!selectedTime) errors.selectedTime = "Please select a time";

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleNextStep = () => {
        if (modalStep === 1) {
            if (!validateStep1()) return;
            setModalStep(2);
            setValidationErrors({});
        } else if (modalStep === 2) {
            if (!validateStep2()) return;
            handleBookSlot();
        }
    };

    const handleBookSlot = () => {
        alert(`Booking confirmed with ${selectedExpert.name} on ${selectedDate} at ${selectedTime}!`);
        setShowModal(false);
        resetForm();
    };

    const resetForm = () => {
        setEmail('');
        setPhone('');
        setSelectedDegree('');
        setStudyYear('');
        setFirstName('');
        setLastName('');
        setSelectedDate('');
        setSelectedTime('');
        setSelectedCourse('');
        setStudyStage('');
        setModalStep(1);
        setCurrentSwiperIndex(0);
        setPhoneError('');
        setValidationErrors({});
    };

    const nextSwiper = () => {
        setCurrentSwiperIndex((prev) => (prev + 1) % swiperItems.length);
    };

    const prevSwiper = () => {
        setCurrentSwiperIndex((prev) => (prev - 1 + swiperItems.length) % swiperItems.length);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-[#0073df] mb-6">
                    Book your 1-1 call with Experts
                </h1>
                <p className="text-gray-600 mb-8">
                    Know the basics of the process, docs, scholarships & draft your roadmap
                </p>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Filters Section */}
                    <div className="w-full lg:w-1/4 bg-white p-5 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter</h2>

                        <div className="mb-5">
                            <h3 className="text-md font-medium text-gray-700 mb-2">Course</h3>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0073df] focus:border-transparent"
                                value={filters.course}
                                onChange={(e) => handleFilterChange('course', e.target.value)}
                            >
                                <option value="">Select Course</option>
                                <option value="engineering">Engineering</option>
                                <option value="business">Business</option>
                                <option value="medicine">Medicine</option>
                                <option value="arts">Arts</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <h3 className="text-md font-medium text-gray-700 mb-2">University</h3>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0073df] focus:border-transparent"
                                value={filters.university}
                                onChange={(e) => handleFilterChange('university', e.target.value)}
                            >
                                <option value="">Select University</option>
                                <option value="cambridge">University of Cambridge</option>
                                <option value="oxford">University of Oxford</option>
                                <option value="imperial">Imperial College London</option>
                                <option value="cranfield">Cranfield University</option>
                                <option value="coventry">Coventry University</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <h3 className="text-md font-medium text-gray-700 mb-2">Country</h3>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0073df] focus:border-transparent"
                                value={filters.country}
                                onChange={(e) => handleFilterChange('country', e.target.value)}
                            >
                                <option value="">Select Country</option>
                                <option value="uk">United Kingdom</option>
                                <option value="usa">United States</option>
                                <option value="canada">Canada</option>
                                <option value="australia">Australia</option>
                                <option value="germany">Germany</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <h3 className="text-md font-medium text-gray-700 mb-2">Experience</h3>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0073df] focus:border-transparent"
                                value={filters.experience}
                                onChange={(e) => handleFilterChange('experience', e.target.value)}
                            >
                                <option value="">Select Year</option>
                                <option value="1">Current Student</option>
                                <option value="2">Alumni</option>
                                <option value="3">1-2 Years Experience</option>
                                <option value="4">3+ Years Experience</option>
                            </select>
                        </div>

                        <button className="w-full bg-[#0073df] text-white py-2 rounded-md font-medium hover:bg-[#0063c5] transition-colors">
                            Apply Filters
                        </button>
                    </div>

                    {/* Experts List */}
                    <div className="w-full lg:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {experts.map(expert => (
                                <div key={expert.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-4">
                                            <h2 className="text-xl font-semibold text-gray-800">{expert.name}</h2>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${expert.status === 'Online' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                                {expert.status}
                                            </span>
                                        </div>

                                        <div className="mb-4">
                                            <p className="text-gray-700 font-medium">{expert.university}</p>
                                            <div className="flex items-center mt-1">
                                                <span className="text-[#0073df] font-bold">{expert.rate}</span>
                                                <span className="mx-2 text-gray-400">•</span>
                                                <span className="text-gray-600">{expert.type}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm mt-1">
                                                {expert.languages.join(', ')}
                                            </p>
                                        </div>

                                        <div className="flex items-center mb-4">
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className={`w-5 h-5 ${i < Math.floor(expert.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 24 24">
                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="ml-2 text-gray-600 text-sm">({expert.rating})</span>
                                        </div>

                                        <div className="flex space-x-3">
                                            <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
                                                Chat
                                            </button>
                                            <button
                                                className="flex-1 bg-[#0073df] text-white py-2 rounded-md font-medium hover:bg-[#0063c5] transition-colors"
                                                onClick={() => handleCallClick(expert)}
                                            >
                                                Call
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex flex-col md:flex-row">
                            {/* Left Side - Image Swiper */}
                            <div className="hidden md:block md:w-2/5 relative">
                                <div className="h-full w-full">
                                    <img
                                        src={swiperItems[currentSwiperIndex].image}
                                        alt={swiperItems[currentSwiperIndex].title}
                                        className="h-full w-full object-cover rounded-l-lg"
                                    />
                                </div>

                                {/* Swiper navigation buttons */}
                                <button
                                    onClick={prevSwiper}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSwiper}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Swiper indicators */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                                    {swiperItems.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`w-3 h-3 rounded-full ${currentSwiperIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                                            onClick={() => setCurrentSwiperIndex(index)}
                                        />
                                    ))}
                                </div>

                                {/* Content overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                                    <h3 className="text-lg font-semibold">{swiperItems[currentSwiperIndex].title}</h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {swiperItems[currentSwiperIndex].tags.map((tag, index) => (
                                            <span key={index} className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Form Content */}
                            <div className="w-full md:w-3/5 p-6">
                                <div className="flex justify-between items-center mb-5">
                                    <h2 className="text-xl font-bold text-gray-800">Book your 1-1 call with Experts</h2>
                                    <button
                                        onClick={() => {
                                            setShowModal(false);
                                            resetForm();
                                        }}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <p className="text-gray-600 mb-6 text-sm">
                                    Know the basics of the process, docs, scholarships & draft your roadmap
                                </p>

                                <div className="border-t border-gray-200 my-4"></div>

                                {/* Mobile Swiper Section (only visible on mobile) */}
                                <div className="md:hidden mb-6 relative">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-md font-semibold text-gray-800">{swiperItems[currentSwiperIndex].title}</h3>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={prevSwiper}
                                                className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={nextSwiper}
                                                className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {swiperItems[currentSwiperIndex].tags.map((tag, index) => (
                                            <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Swiper indicators */}
                                    <div className="flex justify-center space-x-1 mt-3">
                                        {swiperItems.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-2 h-2 rounded-full ${currentSwiperIndex === index ? 'bg-[#0073df]' : 'bg-gray-300'}`}
                                                onClick={() => setCurrentSwiperIndex(index)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 my-4"></div>

                                {modalStep === 1 ? (
                                    <>
                                        <div className="mb-1">
                                            <h3 className="text-md font-semibold text-gray-800 mb-3">Degree you're planning to study</h3>
                                            <div className="flex space-x-3">
                                                <button
                                                    className={`px-6 py-3 rounded-lg text-sm font-medium ${selectedDegree === 'bachelors' ? 'bg-[#0073df] text-white' : 'bg-gray-100 text-gray-700 border border-gray-300'} ${validationErrors.degree ? 'border-red-500' : ''}`}
                                                    onClick={() => {
                                                        setSelectedDegree('bachelors');
                                                        setValidationErrors(prev => ({ ...prev, degree: '' }));
                                                    }}
                                                >
                                                    Bachelor's
                                                </button>
                                                <button
                                                    className={`px-6 py-3 rounded-lg text-sm font-medium ${selectedDegree === 'masters' ? 'bg-[#0073df] text-white' : 'bg-gray-100 text-gray-700 border border-gray-300'} ${validationErrors.degree ? 'border-red-500' : ''}`}
                                                    onClick={() => {
                                                        setSelectedDegree('masters');
                                                        setValidationErrors(prev => ({ ...prev, degree: '' }));
                                                    }}
                                                >
                                                    Master's/MBA
                                                </button>
                                            </div>
                                            {validationErrors.degree && <p className="text-red-500 text-xs mt-1">{validationErrors.degree}</p>}
                                        </div>

                                        <div className="border-t border-gray-200 my-4"></div>

                                        <div className="mb-1">
                                            <label className="block text-md font-semibold text-gray-800 mb-2">Email ID</label>
                                            <input
                                                type="email"
                                                placeholder="eg: example@gmail.com"
                                                className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#0073df] focus:border-transparent ${validationErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    setValidationErrors(prev => ({ ...prev, email: '' }));
                                                }}
                                                required
                                            />
                                            {validationErrors.email && <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>}
                                        </div>

                                        <div className="border-t border-gray-200 my-4"></div>

                                        <div className="mb-1">
                                            <label className="block text-md font-semibold text-gray-800 mb-2">Mobile number</label>
                                            <div className="flex">
                                                <div className="w-1/4 mr-2">
                                                    <select className="w-full p-3 border border-gray-300 rounded-md text-sm bg-white">
                                                        <option>IN +(91)</option>
                                                        <option>US +(1)</option>
                                                        <option>UK +(44)</option>
                                                    </select>
                                                </div>
                                                <input
                                                    type="tel"
                                                    placeholder="eg: 1234567890"
                                                    className={`w-3/4 p-3 border rounded-md focus:ring-2 focus:ring-[#0073df] focus:border-transparent ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                                    value={phone}
                                                    onChange={handlePhoneChange}
                                                    maxLength="10"
                                                    required
                                                />
                                            </div>
                                            {validationErrors.phone && <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>}
                                            <p className="text-xs text-gray-500 mt-2">You will receive a verification code on this number</p>
                                        </div>

                                        <div className="border-t border-gray-200 my-4"></div>

                                        <div className="mb-4">
                                            <h3 className="text-md font-semibold text-gray-800 mb-2">When are you going to study abroad?</h3>
                                            <div className="grid grid-cols-3 gap-2">
                                                {[2025, 2026, 2027].map(year => (
                                                    <button
                                                        key={year}
                                                        className={`py-3 rounded-md text-sm font-medium ${studyYear === year ? 'bg-[#0073df] text-white' : 'bg-gray-100 text-gray-700 border border-gray-300'} ${validationErrors.studyYear ? 'border-red-500' : ''}`}
                                                        onClick={() => {
                                                            setStudyYear(year);
                                                            setValidationErrors(prev => ({ ...prev, studyYear: '' }));
                                                        }}
                                                    >
                                                        {year}
                                                    </button>
                                                ))}
                                            </div>
                                            {validationErrors.studyYear && <p className="text-red-500 text-xs mt-1">{validationErrors.studyYear}</p>}
                                        </div>

                                        <div className="border-t border-gray-200 my-4"></div>

                                        <button
                                            className="w-full bg-[#0073df] text-white py-3 rounded-md font-semibold hover:bg-[#0063c5] transition-colors mt-2"
                                            onClick={handleNextStep}
                                        >
                                            Book a Slot
                                        </button>

                                        <p className="text-xs text-gray-500 text-center mt-4">
                                            By continuing, you agree to our Terms of Service and Privacy Policy
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <div className="mb-1">
                                            <h3 className="text-md font-semibold text-gray-800 mb-3">Application process</h3>
                                            <div className="space-y-2">
                                                <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium border border-blue-200">
                                                    Scholarships
                                                </div>
                                                <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium border border-blue-200">
                                                    SOP & LOR Documents
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 my-4"></div>

                                        <div className="mb-1">
                                            <h3 className="text-md font-semibold text-gray-800 mb-2">Select date</h3>
                                            <input
                                                type="date"
                                                className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#0073df] focus:border-transparent ${validationErrors.selectedDate ? 'border-red-500' : 'border-gray-300'}`}
                                                value={selectedDate}
                                                onChange={(e) => {
                                                    setSelectedDate(e.target.value);
                                                    setValidationErrors(prev => ({ ...prev, selectedDate: '' }));
                                                }}
                                                required
                                            />
                                            {validationErrors.selectedDate && <p className="text-red-500 text-xs mt-1">{validationErrors.selectedDate}</p>}
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-1">
                                            <div>
                                                <label className="block text-md font-semibold text-gray-800 mb-2">First name</label>
                                                <input
                                                    type="text"
                                                    placeholder="First name"
                                                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#0073df] focus:border-transparent ${validationErrors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                                                    value={firstName}
                                                    onChange={(e) => {
                                                        setFirstName(e.target.value);
                                                        setValidationErrors(prev => ({ ...prev, firstName: '' }));
                                                    }}
                                                    required
                                                />
                                                {validationErrors.firstName && <p className="text-red-500 text-xs mt-1">{validationErrors.firstName}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-md font-semibold text-gray-800 mb-2">Last name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Last name"
                                                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#0073df] focus:border-transparent ${validationErrors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                                                    value={lastName}
                                                    onChange={(e) => {
                                                        setLastName(e.target.value);
                                                        setValidationErrors(prev => ({ ...prev, lastName: '' }));
                                                    }}
                                                    required
                                                />
                                                {validationErrors.lastName && <p className="text-red-500 text-xs mt-1">{validationErrors.lastName}</p>}
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 my-4"></div>

                                        <div className="mb-1">
                                            <h3 className="text-md font-semibold text-gray-800 mb-2">Course you're interested in</h3>
                                            <select
                                                className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#0073df] focus:border-transparent ${validationErrors.selectedCourse ? 'border-red-500' : 'border-gray-300'}`}
                                                value={selectedCourse}
                                                onChange={(e) => {
                                                    setSelectedCourse(e.target.value);
                                                    setValidationErrors(prev => ({ ...prev, selectedCourse: '' }));
                                                }}
                                                required
                                            >
                                                <option value="">Search your course</option>
                                                <option value="Computer Science">Computer Science</option>
                                                <option value="Business">Business</option>
                                                <option value="Engineering">Engineering</option>
                                                <option value="Medicine">Medicine</option>
                                            </select>
                                            {validationErrors.selectedCourse && <p className="text-red-500 text-xs mt-1">{validationErrors.selectedCourse}</p>}
                                        </div>

                                        <div className="border-t border-gray-200 my-4"></div>

                                        <div className="mb-1">
                                            <h3 className="text-md font-semibold text-gray-800 mb-2">Where are you in your study abroad journey?</h3>
                                            <select
                                                className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#0073df] focus:border-transparent ${validationErrors.studyStage ? 'border-red-500' : 'border-gray-300'}`}
                                                value={studyStage}
                                                onChange={(e) => {
                                                    setStudyStage(e.target.value);
                                                    setValidationErrors(prev => ({ ...prev, studyStage: '' }));
                                                }}
                                                required
                                            >
                                                <option value="">Select Stage</option>
                                                <option value="Researching">Just started researching</option>
                                                <option value="Shortlisting">Shortlisting universities</option>
                                                <option value="Preparing">Preparing documents</option>
                                                <option value="Applying">Ready to apply</option>
                                            </select>
                                            {validationErrors.studyStage && <p className="text-red-500 text-xs mt-1">{validationErrors.studyStage}</p>}
                                        </div>

                                        <div className="border-t border-gray-200 my-4"></div>

                                        <div className="mb-4">
                                            <h3 className="text-md font-semibold text-gray-800 mb-2">Select time</h3>
                                            <div className="grid grid-cols-2 gap-2">
                                                {['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '4:45 PM', '5:30 PM'].map(time => (
                                                    <button
                                                        key={time}
                                                        className={`py-2 rounded-md text-sm font-medium ${selectedTime === time ? 'bg-[#0073df] text-white' : 'bg-gray-100 text-gray-700 border border-gray-300'} ${validationErrors.selectedTime ? 'border-red-500' : ''}`}
                                                        onClick={() => {
                                                            setSelectedTime(time);
                                                            setValidationErrors(prev => ({ ...prev, selectedTime: '' }));
                                                        }}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                            {validationErrors.selectedTime && <p className="text-red-500 text-xs mt-1">{validationErrors.selectedTime}</p>}
                                        </div>

                                        <div className="border-t border-gray-200 my-4"></div>

                                        <button
                                            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors mt-2"
                                            onClick={handleNextStep}
                                        >
                                            Finish Booking
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Connect;

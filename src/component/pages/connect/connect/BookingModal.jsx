import React, { useState, useEffect } from 'react';

const BookingModal = ({ 
  expert, 
  onClose, 
  initialEmail = '', 
  initialPhone = '', 
  initialDegree = '', 
  initialStudyYear = '' 
}) => {
  const [selectedDegree, setSelectedDegree] = useState(initialDegree);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [studyYear, setStudyYear] = useState(initialStudyYear);
  const [modalStep, setModalStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [studyStage, setStudyStage] = useState('');
  const [currentSwiperIndex, setCurrentSwiperIndex] = useState(0);
  const [validationErrors, setValidationErrors] = useState({});

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
    swipeInterval = setInterval(() => {
      setCurrentSwiperIndex((prev) => (prev + 1) % swiperItems.length);
    }, 5000);
    
    return () => {
      if (swipeInterval) clearInterval(swipeInterval);
    };
  }, [swiperItems.length]);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and limit to 10 digits
    const cleanedValue = value.replace(/\D/g, '').slice(0, 10);
    setPhone(cleanedValue);
    
    // Validate phone number
    if (cleanedValue.length === 10) {
      setValidationErrors(prev => ({...prev, phone: ''}));
    } else if (cleanedValue.length > 0) {
      setValidationErrors(prev => ({...prev, phone: 'Phone number must be 10 digits'}));
    } else {
      setValidationErrors(prev => ({...prev, phone: ''}));
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
    alert(`Booking confirmed with ${expert.name} on ${selectedDate} at ${selectedTime}!`);
    onClose();
  };

  const nextSwiper = () => {
    setCurrentSwiperIndex((prev) => (prev + 1) % swiperItems.length);
  };

  const prevSwiper = () => {
    setCurrentSwiperIndex((prev) => (prev - 1 + swiperItems.length) % swiperItems.length);
  };

  return (
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
          </div>
          
          {/* Right Side - Form Content */}
          <div className="w-full md:w-3/5 p-6">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-gray-800">Book your 1-1 call with Experts</h2>
              <button 
                onClick={onClose}
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
                    <div className="flex space-x-3">
                      <select
                        className={`px-6 py-3 rounded-lg text-sm font-medium border ${
                          validationErrors.degree ? "border-red-500" : "border-gray-300"
                        }`}
                        value={selectedDegree}
                        onChange={(e) => {
                          setSelectedDegree(e.target.value);
                          setValidationErrors((prev) => ({ ...prev, degree: "" }));
                        }}
                      >
                        <option value="">Select Degree</option>
                        <option value="bachelors">Bachelor's</option>
                        <option value="masters">Master's / MBA</option>
                      </select>
                    </div>
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
                      setValidationErrors(prev => ({...prev, email: ''}));
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
                    <select
                      className={`px-6 py-3 rounded-md text-sm font-medium border ${
                        validationErrors.studyYear ? "border-red-500" : "border-gray-300"
                      }`}
                      value={studyYear}
                      onChange={(e) => {
                        setStudyYear(Number(e.target.value));
                        setValidationErrors((prev) => ({ ...prev, studyYear: "" }));
                      }}
                    >
                      <option value="">Select Year</option>
                      {[2025, 2026, 2027].map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
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
                <div className="border-t border-gray-200 my-4"></div>

                <div className="mb-1">
                  <h3 className="text-md font-semibold text-gray-800 mb-2">Select date</h3>
                  <input
                    type="date"
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#0073df] focus:border-transparent ${validationErrors.selectedDate ? 'border-red-500' : 'border-gray-300'}`}
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setValidationErrors(prev => ({...prev, selectedDate: ''}));
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
                        setValidationErrors(prev => ({...prev, firstName: ''}));
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
                        setValidationErrors(prev => ({...prev, lastName: ''}));
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
                      setValidationErrors(prev => ({...prev, selectedCourse: ''}));
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
                      setValidationErrors(prev => ({...prev, studyStage: ''}));
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
                          setValidationErrors(prev => ({...prev, selectedTime: ''}));
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
  );
};

export default BookingModal;
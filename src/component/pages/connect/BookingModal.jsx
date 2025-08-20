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
    const swipeInterval = setInterval(() => {
      setCurrentSwiperIndex((prev) => (prev + 1) % swiperItems.length);
    }, 5000);
    
    return () => clearInterval(swipeInterval);
  }, [swiperItems.length]);

  // Phone input handler
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const cleanedValue = value.replace(/\D/g, '').slice(0, 10);
    setPhone(cleanedValue);
    
    if (cleanedValue.length === 10) {
      setValidationErrors(prev => ({...prev, phone: ''}));
    } else if (cleanedValue.length > 0) {
      setValidationErrors(prev => ({...prev, phone: 'Phone number must be 10 digits'}));
    } else {
      setValidationErrors(prev => ({...prev, phone: ''}));
    }
  };

  // Step 1 validation
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

  // Step 2 validation
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

  // Next step handler
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

  const nextSwiper = () => setCurrentSwiperIndex((prev) => (prev + 1) % swiperItems.length);
  const prevSwiper = () => setCurrentSwiperIndex((prev) => (prev - 1 + swiperItems.length) % swiperItems.length);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Image Swiper */}
          <div className="hidden md:block md:w-2/5 relative">
            <img 
              src={swiperItems[currentSwiperIndex].image} 
              alt={swiperItems[currentSwiperIndex].title}
              className="h-full w-full object-cover rounded-l-lg"
            />
            
            {/* Navigation */}
            <button onClick={prevSwiper} className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextSwiper} className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Indicators */}
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
          
          {/* Right Side - Form */}
          <div className="w-full md:w-3/5 p-6">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-gray-800">Book your 1-1 call with Experts</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-gray-600 mb-6 text-sm">
              Know the basics of the process, docs, scholarships & draft your roadmap
            </p>

            <div className="border-t border-gray-200 my-4"></div>

            {modalStep === 1 ? (
              <>
                {/* Degree */}
                <div className="mb-1">
                  <h3 className="text-md font-semibold text-gray-800 mb-3">Degree you're planning to study</h3>
                  <select
                    className={`px-6 py-3 rounded-lg text-sm font-medium border ${validationErrors.degree ? "border-red-500" : "border-gray-300"}`}
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
                  {validationErrors.degree && <p className="text-red-500 text-xs mt-1">{validationErrors.degree}</p>}
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                {/* Email */}
                <div className="mb-1">
  <label className="block text-md font-semibold text-gray-800 mb-2">Email ID</label>
  <input
    type="text"
    placeholder="eg: example@gmail.com"
    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#0073df] focus:border-transparent ${validationErrors.email ? 'border-red-500' : 'border-gray-300'}`}
    value={email}
    onChange={(e) => {
      const val = e.target.value;
      // allow only valid email characters
      if (/^[a-zA-Z0-9@._-]*$/.test(val)) {
        setEmail(val);
        setValidationErrors(prev => ({ ...prev, email: '' }));
      }
    }}
    onBlur={() => {
      // validate final email format
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setValidationErrors(prev => ({
          ...prev,
          email: 'Please enter a valid email address',
        }));
      }
    }}
    required
  />
  {validationErrors.email && (
    <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
  )}
</div>


                <div className="border-t border-gray-200 my-4"></div>

                {/* Phone */}
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
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                {/* Study Year */}
                <div className="mb-4">
                  <h3 className="text-md font-semibold text-gray-800 mb-2">When are you going to study abroad?</h3>
                  <select
                    className={`px-6 py-3 rounded-md text-sm font-medium border ${validationErrors.studyYear ? "border-red-500" : "border-gray-300"}`}
                    value={studyYear}
                    onChange={(e) => {
                      setStudyYear(Number(e.target.value));
                      setValidationErrors((prev) => ({ ...prev, studyYear: "" }));
                    }}
                  >
                    <option value="">Select Year</option>
                    {[2025, 2026, 2027].map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  {validationErrors.studyYear && <p className="text-red-500 text-xs mt-1">{validationErrors.studyYear}</p>}
                </div>

                <button className="w-full bg-[#0073df] text-white py-3 rounded-md font-semibold hover:bg-[#0063c5] transition-colors mt-2" onClick={handleNextStep}>
                  Book a Slot
                </button>
              </>
            ) : (
              <>
                {/* Step 2 form here (unchanged) */}
                {/* First Name, Last Name, Date, Course, Study Stage, Time selection */}
                {/* Finish Booking button */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

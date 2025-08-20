import React, { useState, useEffect } from 'react';
import BookingModal from './BookingModal.jsx'; // Import the modal component

const Connect = () => {
  const [selectedDegree, setSelectedDegree] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [studyYear, setStudyYear] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [filters, setFilters] = useState({
    course: '',
    university: '',
    country: '',
    experience: ''
  });

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

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const handleCallClick = (expert) => {
    setSelectedExpert(expert);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Reset form fields if needed
    setEmail('');
    setPhone('');
    setSelectedDegree('');
    setStudyYear('');
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
            <h2 className=" text-gray-800 mb-4">Filter</h2>
            
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
        <BookingModal
          expert={selectedExpert}
          onClose={handleCloseModal}
          initialEmail={email}
          initialPhone={phone}
          initialDegree={selectedDegree}
          initialStudyYear={studyYear}
        />
      )}
    </div>
  );
};

export default Connect;
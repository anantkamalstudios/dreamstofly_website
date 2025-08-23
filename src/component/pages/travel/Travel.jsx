import React, { useState, useEffect } from 'react';
import { FaCar } from 'react-icons/fa';
import { FiSearch, FiUsers, FiCalendar, FiMapPin, FiChevronDown, FiHome, FiActivity, FiAward, FiBriefcase, FiGlobe } from 'react-icons/fi';

const Travel= () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [tripType, setTripType] = useState('oneWay');
  const [fromLocation, setFromLocation] = useState('Pune');
  const [toLocation, setToLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('2025-08-24');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [travelClass, setTravelClass] = useState('economy');
  const [specialFares, setSpecialFares] = useState([]);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [pickupTime, setPickupTime] = useState({ hours: '10', minutes: '30' });

  const placeholderTexts = [
    "Where would you like to go?",
    "Discover amazing destinations...",
    "Find your perfect flight...",
    "Explore the world with us..."
  ];

  // Sample location suggestions
  const locationSuggestions = [
    { code: 'PIC', name: 'Pine Cay', country: 'Turks And Caicos Islands' },
    { code: 'PBF', name: 'Pine Bluff', country: 'United States' },
    { code: 'PNE', name: 'Philadelphia', country: 'United States' },
    { code: 'PUN', name: 'Punia', country: 'India' },
    { code: 'PUE', name: 'Puerto Obaldia', country: 'Panama' },
    { code: 'LES', name: 'Lincelles', country: 'Lesotho' }
  ];

  // Auto-changing placeholder effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholderTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSpecialFareToggle = (fare) => {
    if (specialFares.includes(fare)) {
      setSpecialFares(specialFares.filter(f => f !== fare));
    } else {
      setSpecialFares([...specialFares, fare]);
    }
  };

  const handleLocationSelect = (location) => {
    setToLocation(`${location.code} - ${location.name}`);
    setShowLocationSuggestions(false);
  };

  const renderFlightsTab = () => (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
      <div className="flex space-x-4 mb-6">
        <button 
          onClick={() => setTripType('oneWay')} 
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${tripType === 'oneWay' ? 'bg-blue-100 text-blue-700 font-medium shadow-inner' : 'text-gray-600 hover:text-blue-600'}`}
        >
          One Way
        </button>
        <button 
          onClick={() => setTripType('roundTrip')} 
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${tripType === 'roundTrip' ? 'bg-blue-100 text-blue-700 font-medium shadow-inner' : 'text-gray-600 hover:text-blue-600'}`}
        >
          Round Trip
        </button>
        <button 
          onClick={() => setTripType('multiCity')} 
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${tripType === 'multiCity' ? 'bg-blue-100 text-blue-700 font-medium shadow-inner' : 'text-gray-600 hover:text-blue-600'}`}
        >
          Multi-city
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Start Location</label>
          <div className="flex items-center">
            <FiMapPin className="text-blue-600 mr-2" />
            <input 
              type="text" 
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              className="bg-transparent w-full focus:outline-none text-gray-800 placeholder-gray-500"
              placeholder="From where?"
            />
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
          <div className="flex items-center relative">
            <FiMapPin className="text-blue-600 mr-2" />
            <input 
              type="text" 
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              onFocus={() => setShowLocationSuggestions(true)}
              className="bg-transparent w-full focus:outline-none text-gray-800"
              placeholder={placeholderTexts[currentPlaceholder]}
            />
            {showLocationSuggestions && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-10 max-h-60 overflow-y-auto">
                {locationSuggestions.map((location, index) => (
                  <div 
                    key={index}
                    className="p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    onClick={() => handleLocationSelect(location)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{location.name}</p>
                        <p className="text-sm text-gray-600">{location.country}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                        {location.code}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
          <div className="flex items-center">
            <FiCalendar className="text-blue-600 mr-2" />
            <input 
              type="date" 
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="bg-transparent w-full focus:outline-none text-gray-800"
            />
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Travelers & Class</label>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FiUsers className="text-blue-600 mr-2" />
              <span className="text-gray-800">{travelers} Traveller, {travelClass}</span>
            </div>
            <FiChevronDown className="text-gray-500" />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Special Fares (Optional):</p>
        <div className="flex space-x-4">
          <button 
            onClick={() => handleSpecialFareToggle('student')}
            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${specialFares.includes('student') ? 'bg-blue-100 text-blue-700 shadow-inner' : 'bg-gray-100 text-gray-700 hover:bg-blue-50'}`}
          >
            <FiBriefcase className="mr-2" />
            Student
          </button>
          <button 
            onClick={() => handleSpecialFareToggle('armedForces')}
            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${specialFares.includes('armedForces') ? 'bg-blue-100 text-blue-700 shadow-inner' : 'bg-gray-100 text-gray-700 hover:bg-blue-50'}`}
          >
            <FiAward className="mr-2" />
            Armed Forces
          </button>
        </div>
      </div>

      {tripType === 'roundTrip' && (
        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 mb-6 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
          <div className="flex items-center">
            <FiCalendar className="text-blue-600 mr-2" />
            <input 
              type="date" 
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="bg-transparent w-full focus:outline-none text-gray-800"
              placeholder="Add a return date"
            />
          </div>
        </div>
      )}

      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-xl font-medium text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center">
        <FiSearch className="mr-2" />
        Search Flights
      </button>
    </div>
  );

  const renderHotelsTab = () => (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
          <div className="flex items-center">
            <FiMapPin className="text-blue-600 mr-2" />
            <input 
              type="text" 
              className="bg-transparent w-full focus:outline-none text-gray-800"
              placeholder="Where are you going?"
            />
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
          <div className="flex items-center">
            <FiCalendar className="text-blue-600 mr-2" />
            <input 
              type="date" 
              className="bg-transparent w-full focus:outline-none text-gray-800"
            />
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
          <div className="flex items-center">
            <FiCalendar className="text-blue-600 mr-2" />
            <input 
              type="date" 
              className="bg-transparent w-full focus:outline-none text-gray-800"
            />
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Guests & Rooms</label>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FiUsers className="text-blue-600 mr-2" />
              <span className="text-gray-800">2 Guests, 1 Room</span>
            </div>
            <FiChevronDown className="text-gray-500" />
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-xl font-medium text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center">
        <FiSearch className="mr-2" />
        Search Hotels
      </button>
    </div>
  );

  const renderTransfersTab = () => (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
      <div className="flex space-x-4 mb-6">
        <button 
          onClick={() => setTripType('oneWay')} 
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${tripType === 'oneWay' ? 'bg-blue-100 text-blue-700 font-medium shadow-inner' : 'text-gray-600 hover:text-blue-600'}`}
        >
          One Way
        </button>
        <button 
          onClick={() => setTripType('roundTrip')} 
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${tripType === 'roundTrip' ? 'bg-blue-100 text-blue-700 font-medium shadow-inner' : 'text-gray-600 hover:text-blue-600'}`}
        >
          Round Trip
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Start Location</label>
          <div className="flex items-center">
            <FiMapPin className="text-blue-600 mr-2" />
            <input 
              type="text" 
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              className="bg-transparent w-full focus:outline-none text-gray-800"
              placeholder="From where?"
            />
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
          <div className="flex items-center">
            <FiMapPin className="text-blue-600 mr-2" />
            <input 
              type="text" 
              className="bg-transparent w-full focus:outline-none text-gray-800"
              placeholder="Where to?"
            />
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Pick-Up Date</label>
          <div className="flex items-center">
            <FiCalendar className="text-blue-600 mr-2" />
            <input 
              type="date" 
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="bg-transparent w-full focus:outline-none text-gray-800"
            />
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Pick Up Time</label>
          <div className="flex items-center space-x-2">
            <select 
              value={pickupTime.hours}
              onChange={(e) => setPickupTime({...pickupTime, hours: e.target.value})}
              className="bg-transparent focus:outline-none text-gray-800"
            >
              {Array.from({length: 24}, (_, i) => i.toString().padStart(2, '0')).map(hour => (
                <option key={hour} value={hour}>{hour}</option>
              ))}
            </select>
            <span>:</span>
            <select 
              value={pickupTime.minutes}
              onChange={(e) => setPickupTime({...pickupTime, minutes: e.target.value})}
              className="bg-transparent focus:outline-none text-gray-800"
            >
              {['00', '15', '30', '45'].map(minute => (
                <option key={minute} value={minute}>{minute}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-xl font-medium text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center">
        <FiSearch className="mr-2" />
        Search Transfers
      </button>
    </div>
  );

  const renderActivitiesTab = () => (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
          <div className="flex items-center">
            <FiMapPin className="text-blue-600 mr-2" />
            <input 
              type="text" 
              className="bg-transparent w-full focus:outline-none text-gray-800"
              placeholder="Where are you going?"
            />
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Activity Date</label>
          <div className="flex items-center">
            <FiCalendar className="text-blue-600 mr-2" />
            <input 
              type="date" 
              className="bg-transparent w-full focus:outline-none text-gray-800"
            />
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FiUsers className="text-blue-600 mr-2" />
              <span className="text-gray-800">{travelers} Traveller</span>
            </div>
            <FiChevronDown className="text-gray-500" />
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 relative group hover:bg-blue-100/50 transition-colors duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1">Activity Type</label>
          <div className="flex items-center justify-between">
            <span className="text-gray-800">All Activities</span>
            <FiChevronDown className="text-gray-500" />
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-xl font-medium text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center">
        <FiSearch className="mr-2" />
        Search Activities
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation Bar */}
      

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {activeTab === 'flights' && 'Search for Flights'}
            {activeTab === 'hotels' && 'Find Your Perfect Stay'}
            {activeTab === 'transfers' && 'Book Inter-City Transfers'}
            {activeTab === 'activities' && 'Discover Amazing Activities'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {activeTab === 'flights' && 'Discover the best flight deals and travel the world with ease. Your journey begins here.'}
            {activeTab === 'hotels' && 'Find the perfect accommodation for your next adventure. From luxury resorts to cozy stays.'}
            {activeTab === 'transfers' && 'Comfortable and reliable transfers between cities. Travel with peace of mind.'}
            {activeTab === 'activities' && 'Experience unforgettable activities and create memories that last a lifetime.'}
          </p>
        </div>

        {/* Tab Content */}
        {activeTab === 'flights' && renderFlightsTab()}
        {activeTab === 'hotels' && renderHotelsTab()}
        {activeTab === 'transfers' && renderTransfersTab()}
        {activeTab === 'activities' && renderActivitiesTab()}

        {/* Featured Destinations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-48 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
              <h3 className="text-xl font-semibold mb-2 z-10">Paris, France</h3>
              <p className="opacity-90 z-10">The city of lights awaits you</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-48 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
              <h3 className="text-xl font-semibold mb-2 z-10">Bali, Indonesia</h3>
              <p className="opacity-90 z-10">Tropical paradise for your next escape</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-48 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
              <h3 className="text-xl font-semibold mb-2 z-10">Tokyo, Japan</h3>
              <p className="opacity-90 z-10">Experience the future today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DreamTravel</h3>
              <p className="text-gray-400">Your trusted partner for seamless travel experiences across the globe.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Flights</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hotels</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transfers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Activities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Travel;
import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const AccommodationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    city: '',
    propertyManagement: '',
    accommodationType: [],
    aboutYourself: '',
    governmentId: null,
    passport: null,
    driversLicense: null,
    profilePicture: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (type) => {
    setFormData(prev => ({
      ...prev,
      accommodationType: prev.accommodationType.includes(type)
        ? prev.accommodationType.filter(t => t !== type)
        : [...prev.accommodationType, type]
    }));
  };

  const handleFileChange = (e, fieldName) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: e.target.files[0]
    }));
  };

  const handleContinue = () => {
    if (formData.firstName && formData.lastName && formData.email && formData.phoneNumber) {
      setStep(2);
    } else {
      alert('Please fill all required fields');
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white py-3 px-6 border-b">
        <p className="text-gray-500 text-sm">Accommodation service page</p>
      </div>

      {/* Hero Section with Form */}
      <div className="relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center h-[50dvh] md:h-[70dvh] "
          style={{
            backgroundImage: 'url(/images/accomodation/formHero.png)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Top Right Buttons */}
        <div className="relative z-10 flex justify-end gap-3 pt-4 px-6">
          <button className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition">
            <MessageCircle size={20} />
          </button>
          <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition">
            <Phone size={20} />
          </button>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            List Your Property
          </button>
        </div>

        {/* Hero Text */}
        {step === 1 && (
          <div className="relative z-10 text-center text-white pt-10 pb-32">
            <h1 className="text-5xl font-bold mb-4">Tell us about Yourself</h1>
            <p className="text-lg text-white">Share your basic information such as Contact Details and</p>
            <p className="text-lg text-white">Type of Accommodations provided</p>
          </div>
        )}

        {step === 2 && <div className="h-64"></div>}

        {/* Form Card */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 pb-16" style={{ marginTop: '-80px' }}>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {step === 1 ? (
              /* Step 1: Your Details */
              <div>
                <h2 className="text-2xl font-semibold mb-6">Your Details</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-700 mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-gray-700 mb-2">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  onClick={handleContinue}
                  className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition"
                >
                  Continue
                </button>
              </div>
            ) : (
              /* Step 2: Business Details */
              <div>
                <h2 className="text-2xl font-semibold mb-6">Business Details</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-700 mb-2">
                    Do you use any Property Management System?
                  </label>
                  <select
                    name="propertyManagement"
                    value={formData.propertyManagement}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-700 mb-3">Type of Accommodation</label>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.accommodationType.includes('Student Housing (PBSA)')}
                        onChange={() => handleCheckboxChange('Student Housing (PBSA)')}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700">Student Housing (PBSA)</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.accommodationType.includes('Private Apartments')}
                        onChange={() => handleCheckboxChange('Private Apartments')}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700">Private Apartments</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.accommodationType.includes('Home Stays')}
                        onChange={() => handleCheckboxChange('Home Stays')}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700">Home Stays</span>
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-700 mb-2">
                    Tell us something about yourself (optional)
                  </label>
                  <textarea
                    name="aboutYourself"
                    value={formData.aboutYourself}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Documents Required (optional)</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Government ID</label>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'governmentId')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Passport</label>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'passport')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Driver's License</label>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'driversLicense')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Profile Picture</label>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'profilePicture')}
                        accept="image/*"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
};

export default AccommodationForm;
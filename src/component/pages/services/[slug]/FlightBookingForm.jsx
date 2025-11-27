import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Plane, Calendar, Users, ChevronDown, X } from "lucide-react";

const FlightBookingForm = ({ showModal, setShowModal }) => {
  const STORAGE_KEY = "flight_booking_form_data";
  const BOOKING_STORAGE_KEY = "flight_booking_details";

  const [formData, setFormData] = useState({
    tripType: "one-way",
    from: "Shahjalal International Airport, Bangladesh",
    to: "Qatar International Airport, Qatar",
    departure: "2025-10-08",
    returnDate: "",
    travellers: "2",
    classType: "Economy",
  });

  const [bookingFormData, setBookingFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "+91",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(BOOKING_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setBookingFormData((prev) => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error("Error parsing saved booking data:", error);
      }
    }
  }, []);

  // Save booking form data to localStorage
  useEffect(() => {
    localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(bookingFormData));
  }, [bookingFormData]);

  // Country codes for phone
  const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "USA/Canada" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+81", country: "Japan" },
    { code: "+86", country: "China" },
    { code: "+880", country: "Bangladesh" },
    { code: "+974", country: "Qatar" },
    { code: "+971", country: "UAE" },
    { code: "+65", country: "Singapore" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTripTypeChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      tripType: type,
      returnDate: type === "one-way" ? "" : prev.returnDate,
    }));
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}, ${days[date.getDay()]}`;
  };

  const handleSubmit = () => {
    if (setShowModal) {
      setShowModal(true);
    }
  };

  const handleBookingInputChange = (e) => {
    const { name, value } = e.target;
    setBookingFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save to localStorage
    localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(bookingFormData));

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    if (setShowModal) {
      setShowModal(false);
    }
    alert("Flight booking submitted successfully! We'll get back to you soon.");
  };

  const handleCloseModal = () => {
    if (setShowModal) {
      setShowModal(false);
    }
  };

  return (
    <div className="w-[1300px] relative" style={{ minHeight: "400px" }}>
      {/* Flight Tab - This sits on top */}
      <div className="flex justify-center">
        <button className="flex items-center gap-2 px-14 py-5 bg-white text-gray-800 font-medium">
          <img
            src="/images/services/flighttakeoff.png"
            alt="Flight Takeoff"
            className="w-5 h-5"
          />
          <span className="text-[#115779] relative">
            Flight
            <span
              className="block absolute left-0 right-0 mt-1 mx-auto"
              style={{
                height: "3px",
                width: "100px",
                backgroundColor: "#115779",
                borderRadius: "2px",
                position: "absolute",
                bottom: "-8px",
                left: "20%",
                transform: "translateX(-50%)",
              }}
            />
          </span>
        </button>
      </div>

      {/* Form Content Card - This extends below */}
      <div className="bg-white rounded-b-lg rounded-tr-lg shadow-xl overflow-visible w-full relative">
        <div className="p-8">
          <div className="flex justify-center gap-8 mb-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="one-way"
                checked={formData.tripType === "one-way"}
                onChange={() => handleTripTypeChange("one-way")}
                className="w-5 h-5 text-blue-600 border-gray-300"
              />
              <span className="text-gray-700 font-medium">One way</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="round-trip"
                checked={formData.tripType === "round-trip"}
                onChange={() => handleTripTypeChange("round-trip")}
                className="w-5 h-5 text-blue-600 border-gray-300"
              />
              <span className="text-gray-700 font-medium">Round Trip</span>
            </label>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
            {/* From */}
            <div className="w-full">
              <label className="block text-xs text-gray-600 mb-2 uppercase tracking-wide">
                From
              </label>
              <div className="relative">
                <img
                  src="/images/services/flighttakeoff.png"
                  alt="Flight Takeoff"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                />
                <input
                  type="text"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  className="text-xs text-slate-500 w-full pl-12 pr-10 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-[#115779] focus:border-transparent"
                />
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* To */}
            <div className="w-full">
              <label className="block text-xs text-gray-600 mb-2 uppercase tracking-wide">
                To
              </label>
              <div className="relative">
                <img
                  src="/images/services/planetakein.png"
                  alt="Flight Takeoff"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                />
                <input
                  type="text"
                  name="to"
                  value={formData.to}
                  onChange={handleInputChange}
                  className="text-xs text-slate-500 w-full pl-12 pr-10 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-[#115779] focus:border-transparent"
                />
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Departure */}
            <div className="w-full">
              <label className="block text-xs text-gray-600 mb-2 uppercase tracking-wide">
                Departure
              </label>
              <div className="relative">
                <img
                  src="/images/services/timedepeture.png"
                  alt="Calendar"
                  className="text-xs text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 "
                />
                <input
                  type="date"
                  name="departure"
                  value={formData.departure}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="text-xs text-slate-500 w-full pl-12 pr-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-[#115779]"
                />
              </div>
            </div>

            {/* Travellers & Class */}
            <div className="w-full">
              <label className="block text-xs text-gray-600 mb-2 uppercase tracking-wide">
                Travellers & Class
              </label>
              <div className="relative">
                <img
                  src="/images/services/user.png"
                  alt="Users"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                />

                <select
                  name="travellers"
                  value={formData.travellers}
                  onChange={handleInputChange}
                  className="text-xs text-slate-500 w-full pl-12 pr-10 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-[#115779] appearance-none bg-white"
                >
                  <option>1 Traveller / Economy</option>
                  <option>2 Travellers / Economy</option>
                  <option>3 Travellers / Economy</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="w-full flex items-end justify-center">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-56 mt-5 bg-[#0d8aff] hover:bg-[#0073df] text-white py-3 px-8 rounded-md font-semibold transition-all"
            >
              Search Flight
            </button>
          </div>
        </div>
      </div>

      {/* Modal Popup - Full page modal - Using Portal */}
      {showModal &&
        typeof window !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 flex items-center justify-center z-[10000] p-4 pointer-events-none">
            <div
              className="bg-white rounded-lg shadow-2xl w-full max-w-md relative pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Header */}
              <div className="px-6 pt-6 pb-4 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">
                  Book Flight Tickets
                </h3>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleBookingSubmit} className="p-6">
                {/* First Row: First Name and Last Name */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={bookingFormData.firstName}
                      onChange={handleBookingInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={bookingFormData.lastName}
                      onChange={handleBookingInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                {/* Second Row: Email Address */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingFormData.email}
                    onChange={handleBookingInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Third Row: Phone with Country Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="phoneCode"
                      value={bookingFormData.phoneCode}
                      onChange={handleBookingInputChange}
                      className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white"
                      style={{ width: "70px" }}
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingFormData.phone}
                      onChange={handleBookingInputChange}
                      required
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-[#0d8aff] hover:bg-[#0073df] text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default FlightBookingForm;

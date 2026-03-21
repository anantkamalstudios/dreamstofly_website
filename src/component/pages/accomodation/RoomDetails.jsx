import React, { useState } from "react";
import { MapPin, ChevronLeft, ChevronRight, Play, X, ChevronDown } from "lucide-react";

/* ─── Enquiry Dialog ─────────────────────────────────────────── */
const EnquiryDialog = ({ onClose }) => {
  const [phoneCode, setPhoneCode] = useState("+971");

  const countryCodes = [
    "+971", "+44", "+1", "+91", "+61", "+49", "+33", "+81", "+86", "+7",
  ];

  const nationalities = [
    "Select", "British", "American", "Indian", "Australian", "Canadian",
    "German", "French", "Japanese", "Chinese", "Other",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Enquiry Now</h2>
            <p className="text-sm text-gray-400 mt-1">
              So our team can reach out to you on time
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition mt-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="px-8 pt-5 pb-8 space-y-5">

          {/* Row 1: Full Name + Nationality */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="eg: John Doe"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />
            </div>

            {/* Nationality */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                Nationality
              </label>
              <div className="relative">
                <select
                  className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition pr-10"
                >
                  {nationalities.map((n) => (
                    <option key={n} value={n === "Select" ? "" : n}>
                      {n}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 2: Email + Message (message spans 2 rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Left col: Email + Phone stacked */}
            <div className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="eg: john@email.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  {/* Country code dropdown */}
                  <div className="relative flex-shrink-0">
                    <select
                      value={phoneCode}
                      onChange={(e) => setPhoneCode(e.target.value)}
                      className="appearance-none pl-3 pr-7 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                    >
                      {countryCodes.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                  </div>
                  {/* Number input */}
                  <input
                    type="tel"
                    placeholder="543210987"
                    className="flex-1 min-w-0 px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
              </div>
            </div>

            {/* Right col: Message textarea */}
            <div className="flex flex-col">
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                Share Your Message
              </label>
              <textarea
                placeholder="Message"
                rows={5}
                className="flex-1 w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-1">
            <button
              onClick={onClose}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
            >
              Enquiry Now
              <span className="bg-white bg-opacity-20 rounded-lg p-1 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Info Panel ─────────────────────────────────────────────── */
const InfoPanel = ({ onEnquireClick }) => (
  <div>
    <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
      House share Smethwick B67
    </h2>
    <div className="flex items-center gap-1 mt-3 flex-wrap">
      <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
      <span className="text-xs text-gray-500">Distance from City Centre</span>
      <button className="text-xs text-blue-500 hover:underline ml-1">View Location</button>
    </div>
    <p className="text-xs text-gray-400 ml-5">1.1k</p>
    <div className="flex items-center justify-between mt-3 gap-2 flex-wrap">
      <span className="text-sm text-gray-600">From £495/week</span>
      <button
        onClick={onEnquireClick}
        className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1.5 rounded-md transition font-medium"
      >
        Enquire Now
      </button>
    </div>
    <hr className="my-4 border-gray-200" />
    <div className="mb-4">
      <h4 className="text-sm font-bold text-gray-900 mb-3">Availability</h4>
      <div className="space-y-2">
        {[
          { label: "Available", value: "Available now" },
          { label: "Minimum term", value: "6 months" },
          { label: "Maximum term", value: "None" },
        ].map((row) => (
          <div key={row.label} className="flex justify-between text-sm">
            <span className="text-gray-500">{row.label}</span>
            <span className="text-gray-800 text-right">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
    <hr className="my-4 border-gray-200" />
    <div className="mb-4">
      <h4 className="text-sm font-bold text-gray-900 mb-3">Extra cost</h4>
      <div className="space-y-2">
        {[
          { label: "Deposit", value: "£565.00" },
          { label: "Bills included?", value: "Yes" },
        ].map((row) => (
          <div key={row.label} className="flex justify-between text-sm">
            <span className="text-gray-500">{row.label}</span>
            <span className="text-gray-800">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
    <hr className="my-4 border-gray-200" />
    <div>
      <h4 className="text-sm font-bold text-gray-900 mb-3">New housemate preferences</h4>
      <div className="space-y-2">
        {[
          { label: "Couples OK?", value: "No" },
          { label: "Smoking OK?", value: "No" },
          { label: "Pets OK?", value: "No" },
        ].map((pref) => (
          <div key={pref.label} className="flex justify-between text-sm">
            <span className="text-gray-500">{pref.label}</span>
            <span className="text-gray-800">{pref.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Main Component ─────────────────────────────────────────── */
const RoomDetails = ({ room, onBack }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showEnquiryDialog, setShowEnquiryDialog] = useState(false);

  const images = [
    "/images/accomodation/roomview.jpg",
    "/images/accomodation/roomview2.jpg",
    "/images/accomodation/roomvideo.jpg",
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-white px-4 md:px-6 py-6 max-w-5xl mx-auto">
      <h2 className="text-sm md:text-base font-semibold text-gray-800 mb-4">
        Luxery En Suit Double Room Arnos Grove N11
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left — Images + Description */}
        <div className="flex-1 min-w-0">
          {/* Main Image */}
          <div className="relative rounded-xl overflow-hidden mb-3">
            <img
              src={images[currentImage]}
              alt="Room"
              className="w-full h-56 sm:h-64 md:h-72 object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 md:p-2 shadow hover:shadow-md transition"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 md:p-2 shadow hover:shadow-md transition"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <div className="relative rounded-xl overflow-hidden cursor-pointer" onClick={() => setCurrentImage(1)}>
              <img
                src="/images/accomodation/roomview2.jpg"
                alt="Room view 2"
                className="w-full h-28 sm:h-32 md:h-36 object-cover hover:opacity-90 transition"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden cursor-pointer" onClick={() => setCurrentImage(2)}>
              <img
                src="/images/accomodation/roomvideo.jpg"
                alt="Room video"
                className="w-full h-28 sm:h-32 md:h-36 object-cover hover:opacity-90 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                <div className="bg-white bg-opacity-90 rounded-full p-2 md:p-3 shadow">
                  <Play className="w-5 h-5 md:w-6 md:h-6 text-gray-800 fill-gray-800" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Info Panel */}
          <div className="block md:hidden mt-6">
            <InfoPanel onEnquireClick={() => setShowEnquiryDialog(true)} />
          </div>

          {/* Description */}
          <div className="mt-6 md:mt-8">
            <h3 className="text-base md:text-xl font-extrabold text-gray-900 uppercase tracking-wide leading-snug">
              RESERVE THIS QUALITY, SPACIOUS AND BRIGHT ROOM
            </h3>
            <p className="text-gray-700 mt-3 font-semibold text-sm md:text-base">A MUST SEE!!!!</p>
            <p className="text-blue-600 font-semibold mt-1 text-sm md:text-base">Available January 2026</p>
            <ul className="mt-3 space-y-1.5">
              {[
                "Stunning brand new property",
                "Renovated to a high standard throughout.",
                "New kitchen, bathrooms, appliances, furniture, carpets...a real must see!",
                "All rooms come with new bedding, tv, Netflix subscription",
                "The rent includes gas, electricity, council tax, water, Virgin broadband",
              ].map((point, i) => (
                <li key={i} className="text-sm text-gray-700 flex gap-2">
                  <span className="text-gray-400 flex-shrink-0">·</span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-700 mt-4 font-medium">
              Walking distance to all food shops and local amenities.
            </p>

            {/* Amenities */}
            <div className="mt-6">
              <h4 className="text-base font-bold text-gray-900 text-center mb-4">Amenities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  "All bills inclusive", "High speed broadband", "Fully furnished",
                  "Central Heating", "Kitchen with Full White Goods", "Free Wi-Fi",
                  "Great Transport Links", "Off Street Parking", "Double Glazing",
                ].map((amenity, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {amenity}
                  </div>
                ))}
              </div>
              <button className="text-blue-500 text-sm mt-4 hover:underline">+24 more</button>
            </div>
          </div>
        </div>

        {/* Desktop Info Panel */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <InfoPanel onEnquireClick={() => setShowEnquiryDialog(true)} />
        </div>
      </div>

      {/* Enquiry Dialog */}
      {showEnquiryDialog && (
        <EnquiryDialog onClose={() => setShowEnquiryDialog(false)} />
      )}
    </div>
  );
};

export default RoomDetails;
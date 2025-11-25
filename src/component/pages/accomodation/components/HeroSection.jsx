import React from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  
  const handleBeginListing = () => {
    navigate('/accommodation/start-listing');
  };
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url(/images/accomodation/listingHero.png)" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Header with contact buttons */}
      <div className="relative z-10 flex justify-end items-center p-6 space-x-4">
        <a href="tel:+1234567890" className="flex items-center text-white hover:text-gray-200 transition-colors">
          <Phone className="w-5 h-5 mr-2" />
          <span className="hidden md:inline">+1 234 567 890</span>
        </a>
        <a href="https://wa.me/1234567890" className="flex items-center text-white hover:text-gray-200 transition-colors">
          <MessageCircle className="w-5 h-5 mr-2" />
          <span className="hidden md:inline">WhatsApp</span>
        </a>
        <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-full font-medium transition-colors">
          List Your Property
        </button>
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-start pt-10 justify-end">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Expand Your Reach,<br />Maximize Your Earnings
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">
            List your property and connect with a global student audience with UniAcco.
          </p>
          <button 
            onClick={handleBeginListing}
            className="bg-[#0073DF] hover:bg-blue-700 text-white font-medium px-10 py-4 rounded-full flex items-center space-x-2 transition-colors mx-auto"
          >
            <span>Begin Listing</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

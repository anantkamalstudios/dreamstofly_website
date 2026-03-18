
import React from 'react';

const AccomodationAdvertiseRoomHeader = () => {

  return (
    <div
      className="relative w-full min-h-[520px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/images/accomodation/AccommodationServiceHeaderBG.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-3xl mx-auto">

        {/* Heading */}
        <h1
          className="text-white font-bold mb-3 leading-tight"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontFamily: "'Georgia', serif",
            letterSpacing: '-0.5px',
            textShadow: '0 2px 12px rgba(0,0,0,0.35)',
          }}
        >
          Advertise your room
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/90 mb-8 text-base md:text-lg"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}
        >
          Get started with your free ad
        </p>
      </div>
    </div>
  );
};

export default AccomodationAdvertiseRoomHeader;
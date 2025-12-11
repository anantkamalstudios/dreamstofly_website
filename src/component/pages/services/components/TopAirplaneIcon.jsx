const TopAirplaneIcon = () => (
  <div className="absolute -top-28 right-0 md:right-32 transform -translate-y-1/2 z-20 hidden lg:block w-48 h-48 opacity-100 pointer-events-none select-none">
    <div className="relative">
      <div className="w-full h-full transform -rotate-12">
        <img
          src="/images/services/ap.png"
          alt="Airplane Icon"
          className="w-full h-full object-contain"
        />
      </div>
      <img
        src="/images/services/topright.png"
        alt="Top Right Decoration"
        className="absolute top-8 left-36 w-full h-full opacity-50 pointer-events-none select-none"
      />
    </div>
  </div>
);

export default TopAirplaneIcon;

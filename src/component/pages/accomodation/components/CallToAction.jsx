import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();
  
  const handleBeginListing = () => {
    navigate('/accommodation/start-listing');
  };
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-stretch bg-gradient-to-b from-orange-500 to-orange-400 text-white overflow-hidden max-w-7xl mx-auto">

      {/* Left */}
      <div className="w-full md:w-[35%] flex flex-col justify-center items-center px-8 md:px-12 py-12 md:py-16 space-y-6">
        <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
          List Your Property
        </h1>
        <p className="text-sm md:text-md text-white">
          List for free and maximize your profits
        </p>

        <button 
          onClick={handleBeginListing}
          className="bg-white text-blue-600 font-medium rounded-full px-8 py-3 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition w-fit"
        >
          Begin Listing →
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[65%]">
        <img
          src="/images/accomodation/listing4.png"
          alt="modern bedroom interior"
          className="w-full h-full object-cover"
        />
      </div>
      </div>
    </section>
  );
};

export default CallToAction;
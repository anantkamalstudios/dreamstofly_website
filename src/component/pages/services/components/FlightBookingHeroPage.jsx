import { useState } from "react";
import { Plane, Calendar, Users, MapPin, X } from "lucide-react";

const FlightBookingHeroPage = ({
  service,
  details,
  firstFormData,
  setFirstFormData,
  handleFirstFormSubmit,
  showPopup,
  setShowPopup,
  popupFormData,
  setPopupFormData,
  handlePopupFormSubmit,
}) => {
  const [tripType, setTripType] = useState("oneway");

  if (!service || !details) return null;

  const getTitleStyle = () => {
    const titleColor = details.titleColor || "#fff";
    const baseClasses = "text-3xl md:text-4xl lg:text-5xl leading-tight";

    if (
      titleColor.includes("bg-") ||
      (titleColor.includes("text-") && titleColor.includes("bg-clip"))
    ) {
      return { className: `${baseClasses} ${titleColor}` };
    }

    return {
      className: baseClasses,
      style: { color: titleColor },
    };
  };

  const getSubtitleStyle = () => {
    const subTitleColor = details.subTitleColor || "#fff";
    return { style: { color: subTitleColor } };
  };

  const titleStyle = getTitleStyle();
  const subtitleStyle = getSubtitleStyle();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFirstFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePopupInputChange = (e) => {
    const { name, value } = e.target;
    setPopupFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="relative">
        {/* Hero Background Section */}
        <section
          className="relative w-full"
          style={{
            backgroundImage: `url(${service.backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            minHeight: "400px",
          }}
        >
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/30"></div> */}

          <div className="container mx-auto px-4 md:px-8 lg:px-14 py-12 lg:py-10 relative z-10 h-full flex flex-col justify-center font-bellefair">
            {/* Hero Title & Subtitle */}
            <div className="mb-32 md:mb-40 lg:mb-48">
              <h1 className="mb-3 text-white text-3xl md:text-5xl lg:text-6xl leading-tight">
                {details.title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-xl text-white">
                {details.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Flight Booking Form Card - Overlapping */}
        <div
          className="container mx-auto px-4 md:px-8 lg:px-14 relative z-20"
          style={{ marginTop: "-180px" }}
        >
          <div className=" shadow-2xl overflow-hidden max-w-6xl mx-auto font-vollkorn">
            {/* Flight Tab */}
            <div className="bg-transparent border-b border-gray-200">
              <div className="flex items-center justify-center gap-2">
                <p className="font-semibold text-gray-800 bg-white flex px-6 py-3">
                  {" "}
                  <Plane className="w-5 h-5 text-blue-600" />
                  Flight
                </p>
              </div>
            </div>

            <div className="bg-white p-2 md:p-4 lg:px-8 lg:py-6">
              {/* Trip Type */}
              <div className="flex justify-center gap-4 md:gap-6 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value="oneway"
                    checked={tripType === "oneway"}
                    onChange={(e) => setTripType(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    One way
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value="roundtrip"
                    checked={tripType === "roundtrip"}
                    onChange={(e) => setTripType(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Round Trip
                  </span>
                </label>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* From */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
                    From
                  </label>
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 z-10 pointer-events-none" />
                    <select
                      name="from"
                      value={firstFormData?.from || ""}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white"
                    >
                      <option value="Shahjal International Airport Bangladesh">
                        Shahjal International Airport
                      </option>
                      <option value="Heathrow Airport London UK">
                        Heathrow Airport London
                      </option>
                      <option value="JFK Airport New York USA">
                        JFK Airport New York
                      </option>
                      <option value="Dubai International Airport UAE">
                        Dubai International Airport
                      </option>
                      <option value="Singapore Changi Airport Singapore">
                        Singapore Changi Airport
                      </option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {firstFormData?.from?.split(" ").pop()}
                  </div>
                </div>

                {/* To */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
                    To
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 z-10 pointer-events-none" />
                    <select
                      name="to"
                      value={firstFormData?.to || ""}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white"
                    >
                      <option value="Qatar International Airport Qatar">
                        Qatar International Airport
                      </option>
                      <option value="Heathrow Airport London UK">
                        Heathrow Airport London
                      </option>
                      <option value="JFK Airport New York USA">
                        JFK Airport New York
                      </option>
                      <option value="Dubai International Airport UAE">
                        Dubai International Airport
                      </option>
                      <option value="Toronto Pearson Airport Canada">
                        Toronto Pearson Airport
                      </option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {firstFormData?.to?.split(" ").pop()}
                  </div>
                </div>

                {/* Departure */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
                    Departure
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 z-10 pointer-events-none" />
                    <input
                      type="date"
                      name="departureDate"
                      value={firstFormData?.departureDate || ""}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {firstFormData?.departureDate &&
                      new Date(firstFormData.departureDate).toLocaleDateString(
                        "en-US",
                        { weekday: "long" }
                      )}
                  </div>
                </div>

                {/* Travelers & Class */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
                    Travellers & Class
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 z-10 pointer-events-none" />
                    <select
                      name="class"
                      value={firstFormData?.class || ""}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white"
                    >
                      <option>Economy</option>
                      <option>Premium Economy</option>
                      <option>Business</option>
                      <option>First Class</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {firstFormData?.travelers} Travellers /{" "}
                    {firstFormData?.class}
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="mt-3 flex justify-center">
                <button
                  onClick={handleFirstFormSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-normal px-12 py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Search Flight
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to prevent content overlap */}
        {/* <div className="h-32"></div> */}
      </div>

      {/* Modal Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6">
              <div className="grid">
                <img
                  src="/images/formicon/suit.png"
                  alt=""
                  className="w-12 h-12 object-contain"
                />
                <div className="grid">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Book Flight Tickets
                  </h3>
                  <p>
                    Leave us your contact details and get exclusive offers on
                    international flight bookings.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstname"
                      value={popupFormData?.firstname || ""}
                      onChange={handlePopupInputChange}
                      placeholder=""
                      className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                    />
                    <label className="absolute left-4 top-2 text-xs font-medium text-gray-600">
                      First Name <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="lastname"
                      value={popupFormData?.lastname || ""}
                      onChange={handlePopupInputChange}
                      placeholder=" "
                      className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                    />
                    <label className="absolute left-4 top-2 text-xs font-medium text-gray-600">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="relative md:col-span-2">
                    <input
                      type="email"
                      name="email"
                      value={popupFormData?.email || ""}
                      onChange={handlePopupInputChange}
                      placeholder=" "
                      className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                    />
                    <label className="absolute left-4 top-2 text-xs font-medium text-gray-600">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="relative md:col-span-2">
                    <input
                      type="tel"
                      name="mobile"
                      value={popupFormData?.mobile || ""}
                      onChange={handlePopupInputChange}
                      placeholder=" "
                      className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                    />
                    <label className="absolute left-4 top-2 text-xs font-medium text-gray-600">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handlePopupFormSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlightBookingHeroPage;

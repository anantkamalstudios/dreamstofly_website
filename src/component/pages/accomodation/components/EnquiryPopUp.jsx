import React, { useState } from "react";
import { X, MapPin } from "lucide-react";

const EnquiryPopup = ({ show, onClose, accommodation }) => {
  if (!show) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData, "for", accommodation);
    // Handle form submission (API etc.)
    if (onClose) onClose();
  };

  const propName = accommodation?.name || "Property";
  const propLocation = accommodation?.location || "Location not available";
  const propPrice = accommodation?.price || "Price not available";
  const propImage = accommodation?.image || "/api/placeholder/400/300";
  const fallbackImage =
    "https://via.placeholder.com/400x300?text=Property+Image";
  const finalPropImage = propImage.startsWith("/api/placeholder")
    ? fallbackImage
    : propImage;
  const propOffers = accommodation?.offers || "Offers";
  const propCashback = accommodation?.cashback || "";

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6"
      onClick={() => onClose && onClose()}
    >
      <div
        className="bg-white relative rounded-lg shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col md:flex-row "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onClose && onClose()}
          className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close enquiry"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
        <div className="w-full md:w-2/5  p-4 md:p-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="bg-blue-900 text-white px-4 py-2 text-sm font-medium">
              {propOffers} {propCashback ? `| ${propCashback}` : ""}
            </div>
            <div className="relative h-48">
              <img
                src={finalPropImage}
                alt={propName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {propName}
              </h3>
              <div className="flex items-start text-gray-600 text-sm mb-3">
                <MapPin className="w-4 h-4 mr-1 flex-shrink-0 mt-0.5" />
                <span>{propLocation}</span>
              </div>
              <div className="text-sm text-gray-700">
                <span className="font-medium">From</span>{" "}
                <span className="text-lg font-bold">{propPrice}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center text-gray-800">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="font-medium">Lowest Price Guarantee</span>
            </div>
            <div className="flex items-center text-gray-800">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="font-medium">Bills Inclusive</span>
            </div>
            <div className="flex items-center text-gray-800">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="font-medium">24x7 Assistance</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 p-2 md:p-4 relative overflow-y-auto bg-gray-100 rounded-lg m-10">
          {/* Close Button */}

          <div className="mb-4 ">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-3">
              Enquire Now
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your perfect student accommodation is just a few steps away!
              <br />
              Kindly provide your details below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Phone*
              </label>
              <div className="flex gap-3">
                <select className="px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>UK (+44)</option>
                  <option>US (+1)</option>
                  <option>IN (+91)</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="nationality"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Nationality*
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="text-xs text-gray-600 leading-relaxed">
              By submitting, you agree to UniAcco's{" "}
              <a href="#" className="text-blue-600 hover:underline">
                terms
              </a>
              ,{" "}
              <a href="#" className="text-blue-600 hover:underline">
                privacy policy
              </a>
              , and receiving communication via voice, email, and WhatsApp about
              our services and promotions.
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3.5 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;

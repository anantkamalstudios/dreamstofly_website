import React, { useState } from "react";
import {
  ChevronDown,
  MapPin,
  Zap,
  Wifi,
  Utensils,
  Waves,
  Microwave,
} from "lucide-react";
import EnquiryPopup from "./components/EnquiryPopUp";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

const AccommodationListing = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const navigate = useNavigate();

  const [selectedFilters, setSelectedFilters] = useState({
    university: "",
    propertyType: "",
    budget: "",
    moveIn: "",
    roomType: "",
  });

  const accommodations = [
    {
      id: 1,
      name: "GoBritanya - Vega Residence",
      location: "Vega 6 Miles St London SW6 1RZ",
      price: "£495",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
      amenities: [
        "Microwave",
        "Electric Stove",
        "Utility Bills Included",
        "WiFi",
        "Fridge",
      ],
      tags: ["Bills included", "No Visa No Pay"],
      features: ["No Visa", "No University No Pay", "Pay in installments"],
      offers: "3 Offers",
      cashback: "Cashback upto £450",
      lat: 51.501,
      lng: -0.1416,
    },
    {
      id: 2,
      name: "GoBritanya - Vega Residence",
      location: "Vega 6 Miles St London SW6 1RZ",
      price: "£495",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800",
      amenities: [
        "Microwave",
        "Electric Stove",
        "Utility Bills Included",
        "WiFi",
        "Fridge",
      ],
      tags: ["Bills included", "No Visa No Pay"],
      features: ["No Visa", "No University No Pay", "Pay in installments"],
      offers: "3 Offers",
      cashback: "Cashback upto £450",
      lat: 51.5074,
      lng: -0.1278,
    },
    {
      id: 3,
      name: "GoBritanya - Vega Residence",
      location: "Vega 6 Miles St London SW6 1RZ",
      price: "£495",
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a11",
      amenities: [
        "Microwave",
        "Electric Stove",
        "Utility Bills Included",
        "WiFi",
        "Fridge",
      ],
      tags: ["Bills included", "No Visa No Pay"],
      features: ["No Visa", "No University No Pay", "Pay in installments"],
      offers: "3 Offers",
      cashback: "Cashback upto £450",
      lat: 51.5155,
      lng: -0.132,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex py-4">
      {/* LEFT SIDE */}
      <div className="w-1/2 overflow-y-auto">
        <div className="shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-semibold text-gray-900">
                Student Accommodation in London
              </h1>
              <span className="text-gray-600">331 places to stay</span>
            </div>

            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by University"
                  className="w-full pl-12 pr-10 py-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              {/* Filter Buttons */}
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                <div className="flex items-center gap-2 text-gray-700 whitespace-nowrap px-4 py-2 bg-white rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                    />
                  </svg>
                  <span className="font-medium">Sort By</span>
                </div>

                {["Property Type", "Budget", "Move in", "Room Type"].map(
                  (filter) => (
                    <button
                      key={filter}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-gray-50 whitespace-nowrap"
                    >
                      <span className="text-gray-700">{filter}</span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="space-y-6">
            {accommodations.map((accommodation) => (
              <div
                key={accommodation.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-200"
              >
                <div className="flex h-[16rem] lg:h-fit">
                  <div className="w-64 h-full flex-shrink-0">
                    <img
                      src={accommodation.image}
                      alt={accommodation.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6 relative">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-medium text-gray-900">
                          {accommodation.name}
                        </h3>

                        {/* Location */}
                        <p className="text-gray-600 text-sm mt-1 flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {accommodation.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-600 mt-2 flex-wrap">
                      <div className="flex items-center gap-1">
                        <Microwave className="w-3 h-3" />
                        <span>Microwave</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        <span>Electric Stove</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        <span>Utility Bills Included</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Wifi className="w-3 h-3" />
                        <span>WiFi</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Utensils className="w-3 h-3" />
                        <span>Fridge</span>
                      </div>
                    </div>

                    {/* Tags Pills */}
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      {accommodation.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features with | */}
                    <div className="flex items-center flex-wrap gap-1 text-xs text-gray-600 mt-2">
                      {accommodation.features.map((feature, idx) => (
                        <React.Fragment key={idx}>
                          <span>{feature}</span>
                          {idx < accommodation.features.length - 1 && (
                            <span className="text-gray-300">|</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Enquire button */}
                  <div className="flex flex-col justify-between h-full py-5 px-2">
                    <div className="text-right pr-2">
                      <p className="text-lg font-medium text-gray-900">
                        {accommodation.price}{" "}
                        <span className="text-xs text-gray-500 -mt-1">
                          /week
                        </span>
                      </p>
                    </div>
                    <button
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium mt-11"
                      onClick={() => {
                        setSelectedAccommodation(accommodation);
                        setShowPopup(true);
                      }}
                    >
                      Enquire
                    </button>
                  </div>
                </div>

                {/* Bottom Offers Bar */}
                <div
                  className="bg-blue-900 text-white text-sm py-3 px-6 flex justify-center items-center gap-3 w-full"
                  onClick={() =>
                    navigate(`/accomodation/${accommodation.id}/details`)
                  }
                >
                  <span className="font-medium">{accommodation.offers}</span>
                  <span className="text-gray-300">|</span>
                  <span className="font-medium">{accommodation.cashback}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE MAP */}
      <div className="flex-1 h-screen sticky top-0">
        <MapContainer
          center={[51.5074, -0.1278]}
          zoom={12}
          scrollWheelZoom={true}
          className="h-full w-full z-0"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {accommodations.map((acc) =>
            acc.lat && acc.lng ? (
              <Marker key={acc.id} position={[acc.lat, acc.lng]}>
                <Popup>
                  <div className="font-bold">{acc.name}</div>
                  <div className="text-sm">{acc.location}</div>
                </Popup>
              </Marker>
            ) : null
          )}
        </MapContainer>
      </div>

      {showPopup && (
        <EnquiryPopup
          show={showPopup}
          onClose={() => setShowPopup(false)}
          accommodation={selectedAccommodation}
        />
      )}
    </div>
  );
};

export default AccommodationListing;

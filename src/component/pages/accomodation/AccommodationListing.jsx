import React, { useState } from "react";
import { Search, ChevronDown, Star, Heart, MapPin, Calendar, User, SlidersHorizontal, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AccommodationListing = () => {
  const [favorites, setFavorites] = useState([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const navigate = useNavigate();

  const accommodations = [
    {
      id: 1,
      title: "Luxery En Suit Double Room Arnos Grove N11",
      location: "Arnos Grove N11",
      price: "£965 pcm",
      priceLabel: "£965 pcm - bills inc.",
      roomType: "Double room",
      availability: "Available 24th Feb 2026",
      description:
        "High-Spec en suite Double Rooms in Newly Refurbished House – 5 Mins to Arnos Grove Station",
      image: "/images/accomodation/room.png",
      profileName: "Armando McClure",
      profileLocation: "Newcastle Upon Tyne, Newcastle University",
      profileImage: "/images/accomodation/room.png",
    },
    {
      id: 2,
      title: "Luxery En Suit Double Room Arnos Grove N11",
      location: "Arnos Grove N11",
      price: "£965 pcm",
      priceLabel: "£965 pcm - bills inc.",
      roomType: "Double room",
      availability: "Available 24th Feb 2026",
      description:
        "High-Spec en suite Double Rooms in Newly Refurbished House – 5 Mins to Arnos Grove Station",
      image: "/images/accomodation/room.png",
      profileName: "Armando McClure",
      profileLocation: "Newcastle Upon Tyne, Newcastle University",
      profileImage: "/images/accomodation/room.png",
    },
    {
      id: 3,
      title: "Luxery En Suit Double Room Arnos Grove N11",
      location: "Arnos Grove N11",
      price: "£965 pcm",
      priceLabel: "£965 pcm - bills inc.",
      roomType: "Double room",
      availability: "Available 24th Feb 2026",
      description:
        "High-Spec en suite Double Rooms in Newly Refurbished House – 5 Mins to Arnos Grove Station",
      image: "/images/accomodation/room.png",
      profileName: "Armando McClure",
      profileLocation: "Newcastle Upon Tyne, Newcastle University",
      profileImage: "/images/accomodation/room.png",
    },
    {
      id: 4,
      title: "Luxery En Suit Double Room Arnos Grove N11",
      location: "Arnos Grove N11",
      price: "£965 pcm",
      priceLabel: "£965 pcm - bills inc.",
      roomType: "Double room",
      availability: "Available 24th Feb 2026",
      description:
        "High-Spec en suite Double Rooms in Newly Refurbished House – 5 Mins to Arnos Grove Station",
      image: "/images/accomodation/room.png",
      profileName: "Armando McClure",
      profileLocation: "Newcastle Upon Tyne, Newcastle University",
      profileImage: "/images/accomodation/room.png",
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const FilterPanel = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Filters Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <div className="flex items-center gap-3">
          <button className="text-blue-600 text-sm hover:text-blue-700">Reset filters</button>
          {/* Close button on mobile */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setFiltersOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Search</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="roomType" defaultChecked className="text-blue-600" />
            <span className="text-sm text-gray-700">Rooms for Rent</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="roomType" className="text-blue-600" />
            <span className="text-sm text-gray-700">Rooms Wanted</span>
          </label>
        </div>
      </div>

      {/* Rooms suitable for ages */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Rooms suitable for ages</h3>
        <div className="flex gap-2">
          <select className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm">
            <option>Min</option>
          </select>
          <span className="self-center text-gray-500">To</span>
          <select className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm">
            <option>Max</option>
          </select>
        </div>
      </div>

      {/* Property type */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Property type</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" defaultChecked className="text-blue-600" />
            <span className="text-sm text-gray-700">Rooms in existing shares</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" defaultChecked className="text-blue-600" />
            <span className="text-sm text-gray-700">Studio / 1 bed flats</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" defaultChecked className="text-blue-600" />
            <span className="text-sm text-gray-700">Whole properties (suitable for sharing)</span>
          </label>
        </div>
      </div>

      {/* Rent */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Rent £</h3>
        <div className="flex gap-2">
          <select className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm">
            <option>Min</option>
          </select>
          <span className="self-center text-gray-500">To</span>
          <select className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm">
            <option>Max</option>
          </select>
        </div>
      </div>

      {/* Length of stay */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Length of stay</h3>
        <div className="flex gap-2">
          <select className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm">
            <option>Min</option>
          </select>
          <span className="self-center text-gray-500">To</span>
          <select className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm">
            <option>Max</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Mobile Filter Toggle Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* Mobile Filter Drawer Overlay */}
        {filtersOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black bg-opacity-40"
              onClick={() => setFiltersOpen(false)}
            />
            {/* Drawer */}
            <div className="relative z-10 w-80 max-w-full h-full bg-gray-50 overflow-y-auto p-4 shadow-xl">
              <FilterPanel />
            </div>
          </div>
        )}

        <div className="flex gap-6">
          {/* Left Sidebar - Filters (desktop only) */}
          <div className="hidden md:block w-72 flex-shrink-0">
            <div className="sticky top-6">
              <FilterPanel />
            </div>
          </div>

          {/* Right Side - Listings */}
          <div className="flex-1 space-y-4 md:space-y-6">
            {accommodations.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/accomodation/${item.id}/room-details`)}
              >
                {/* Top Section */}
                <div className="flex flex-col sm:flex-row gap-0 sm:gap-5 sm:p-5">

                  {/* Image */}
                  <div className="relative w-full sm:w-[45%] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-64 object-cover sm:rounded-xl"
                    />
                    {/* Heart */}
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          favorites.includes(item.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between p-4 sm:p-0">

                    {/* Top Right Price */}
                    <div className="flex justify-end">
                      <p className="text-sm text-gray-400">£965 pcm</p>
                    </div>

                    {/* Title */}
                    <h2 className="text-base sm:text-xl font-semibold text-gray-900 leading-snug mt-1">
                      {item.title} {item.location}
                    </h2>

                    {/* Sub Location */}
                    <p className="text-sm text-gray-400 mt-1">{item.location}</p>

                    {/* Price Full */}
                    <p className="text-sm text-gray-500 mt-2 sm:mt-3">{item.price}</p>

                    {/* Availability */}
                    <p className="text-sm text-gray-400 mt-1">
                      Double room - {item.availability}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-500 mt-2 sm:mt-3 leading-relaxed">
                      ⭐ {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Profile */}
                <div className="bg-gray-100 px-4 sm:px-5 py-3 flex items-center gap-3">
                  <img
                    src={item.profileImage}
                    alt={item.profileName}
                    className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.profileName}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {item.profileLocation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationListing;
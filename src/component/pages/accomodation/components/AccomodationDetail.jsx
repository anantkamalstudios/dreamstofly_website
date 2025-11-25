import {
  Bike,
  Bus,
  Car,
  Dumbbell,
  Footprints,
  Gamepad2,
  MapPin,
  Plane,
  Refrigerator,
  Shirt,
  Train,
  Wifi,
} from "lucide-react";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AccomodationDetail = () => {
  return (
    <div className="w-full px-10 py-10 bg-gray-100">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          {" "}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="row-span-2">
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop"
                alt="Student room main view"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=290&fit-crop"
                alt="Student room bed view"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=290&fit=crop"
                alt="Student room desk view"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            GoBritanya - Vega Residence
          </h1>
          <p className="text-gray-600 mb-4">
            iQ Vega 6 Miles St London SW8 1RZ
          </p>
          <p className="text-gray-700 mb-6">
            This residence offers students a dynamic living experience with easy
            access to both educational institutions an
          </p>
          {/* Amenities and Tags */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="3" strokeWidth="2" />
              </svg>
              <span className="text-sm">Microwave</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect
                  x="5"
                  y="6"
                  width="14"
                  height="12"
                  rx="1"
                  strokeWidth="2"
                />
                <path d="M9 2v4M15 2v4" strokeWidth="2" />
                <circle cx="9" cy="11" r="1" fill="currentColor" />
                <circle cx="9" cy="15" r="1" fill="currentColor" />
                <circle cx="15" cy="11" r="1" fill="currentColor" />
                <circle cx="15" cy="15" r="1" fill="currentColor" />
              </svg>
              <span className="text-sm">Electric Stove</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                  strokeWidth="2"
                />
                <polyline points="14 2 14 8 20 8" strokeWidth="2" />
                <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2" />
              </svg>
              <span className="text-sm">Utility Bills Included</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Wifi className="w-5 h-5" />
              <span className="text-sm">WiFi</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Refrigerator className="w-5 h-5" />
              <span className="text-sm">Fridge</span>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">
              Bills Included
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">
              No Visa No Pay
            </span>
          </div>
        </div>
        <div className="col-start-4">
          {" "}
          {/* Enquire Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
                  <IoLocationSharp />
                </div>
                <div>
                  <p className="text-xs text-gray-500">
                    Distance from City Centre
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    42 m &nbsp; 18 m &nbsp; 13 m
                  </p>
                </div>
                <a
                  className="text-sm text-blue-600 underline mt-2 inline-block"
                  href="#"
                >
                  View Map
                </a>
              </div>
              <hr className="border-gray-400" />
              <div className="mt-4">
                <p className="text-xl font-bold">
                  <span className="text-sm text-black font-light">From</span>
                  £495
                  <span className="text-sm text-black font-light">/week</span>
                </p>
                <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Link className="text-xs underline" to="#">
                    5 room options
                  </Link>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 row-start-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  d="M20 12H4"
                />
              </svg>
            </div>
            <h3 className=" font-semibold text-2xl">Special Offers</h3>
          </div>
          <ul className="divide-y divide-gray-200">
            {[
              "Stay Rent Free in August!",
              "Student Universe Offer!",
              "GoCity London Offer!",
              "Wellbeing, On Demand!",
              "TrainPal Offer!",
              "Get Up to £50 Exclusive Cashback!",
              "Turn your group chat into a payday!",
            ].map((item, i) => (
              <li key={i} className="py-5 text-md px-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-start-4 row-start-2">
          {" "}
          {/* Help Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-extrabold mb-2">Let us help you!</h2>
            <p className="text-sm text-gray-500 mb-6">
              Fill the form below and discover comfortable living spaces near
              your campus.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  className="w-full border rounded-md px-4 py-3 text-sm"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  className="w-full border rounded-md px-4 py-3 text-sm"
                  placeholder="bill.sanders@example.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Phone Number</label>
                <div className="flex items-center border rounded-md overflow-hidden">
                  <div className="px-3 py-2 flex items-center gap-2 bg-white text-xs">
                    🇮🇳 <span>(+91)</span>
                  </div>
                  <input
                    className="flex-1 px-4 py-3 text-sm"
                    placeholder="123334567788"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Nationality</label>
                  <input
                    className="w-full border rounded-md px-4 py-3 text-sm"
                    placeholder="e.g., Indian"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">University</label>
                  <input
                    className="w-full border rounded-md px-4 py-3 text-sm"
                    placeholder="e.g., University of London"
                  />
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold">
                Get Expert Help!
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-3 row-start-3">
          <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex gap-8">
                <button className="px-4 py-4 text-blue-600 border-b-2 border-blue-600 font-medium">
                  Room Options
                </button>
                <button className="px-4 py-4 text-gray-600 hover:text-gray-900">
                  Facilities
                </button>
                <button className="px-4 py-4 text-gray-600 hover:text-gray-900">
                  Location
                </button>
                <button className="px-4 py-4 text-gray-600 hover:text-gray-900">
                  House Policies
                </button>
              </div>
            </div>
          </div>
          {/* Room Options Section */}
          <div className="mx-auto px-6 py-8">
            {/* Header with filters */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Room Options</h2>
              <div className="flex gap-4">
                <select className="px-4 py-2 border border-gray-300 rounded bg-white">
                  <option>Room Type</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded bg-white">
                  <option>Academic Year</option>
                </select>
              </div>
            </div>
            {/* Room Card 1 */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              <div className="flex gap-6">
                {/* Room Images */}
                <div className="relative">
                  <div className="flex gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=150&h=150&fit=crop"
                      alt="Room view 1"
                      className="w-36 h-36 object-cover rounded"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=150&h=150&fit=crop"
                      alt="Room view 2"
                      className="w-36 h-36 object-cover rounded"
                    />
                  </div>
                  <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-xs rounded">
                    Stay 28 week
                  </div>
                </div>

                {/* Room Details */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">
                    Bronze Ensuite Deluxe
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Private Room • Private Bath
                  </p>

                  <div className="flex gap-4 text-xs text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Microwave</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="5"
                          y="6"
                          width="14"
                          height="12"
                          rx="1"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Electric Stove</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 2v4M15 2v4M3 10h18" strokeWidth="2" />
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Utility Bills Included</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Wifi className="w-4 h-4" />
                      <span>WiFi</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Refrigerator className="w-4 h-4" />
                      <span>Fridge</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-gray-600">Move in </span>
                      <span className="font-medium">2025-10-09</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Deposit </span>
                      <span className="font-medium">£250</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Rent </span>
                      <span className="font-bold">£455 / week</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div>
                  <button className="bg-blue-600 text-white px-8 py-2 rounded font-medium hover:bg-blue-700">
                    Instant Book
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-gray-600">
                    Looking for different dates?{" "}
                  </span>
                  <a href="#" className="text-blue-600 hover:underline">
                    Contact us
                  </a>
                </div>
                <button className="text-blue-600 border border-blue-600 px-6 py-2 rounded font-medium hover:bg-blue-50">
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Room Card 2 - Highlighted */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-4 border-2 border-blue-500">
              <div className="flex gap-6">
                {/* Room Images */}
                <div className="relative">
                  <div className="flex gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=150&h=150&fit=crop"
                      alt="Room view 1"
                      className="w-36 h-36 object-cover rounded"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=150&h=150&fit=crop"
                      alt="Room view 2"
                      className="w-36 h-36 object-cover rounded"
                    />
                  </div>
                  <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-xs rounded">
                    Stay 28 week
                  </div>
                </div>

                {/* Room Details */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">
                    Bronze Ensuite Deluxe
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Private Room • Private Bath
                  </p>

                  <div className="flex gap-4 text-xs text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Microwave</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="5"
                          y="6"
                          width="14"
                          height="12"
                          rx="1"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Electric Stove</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 2v4M15 2v4M3 10h18" strokeWidth="2" />
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Utility Bills Included</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Wifi className="w-4 h-4" />
                      <span>WiFi</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Refrigerator className="w-4 h-4" />
                      <span>Fridge</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-gray-600">Move in </span>
                      <span className="font-medium">2025-10-09</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Deposit </span>
                      <span className="font-medium">£250</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Rent </span>
                      <span className="font-bold">£495 / week</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div>
                  <button className="bg-blue-600 text-white px-8 py-2 rounded font-medium hover:bg-blue-700">
                    Instant Book
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-gray-600">
                    Looking for different dates?{" "}
                  </span>
                  <a href="#" className="text-blue-600 hover:underline">
                    Contact us
                  </a>
                </div>
                <button className="text-blue-600 border border-blue-600 px-6 py-2 rounded font-medium hover:bg-blue-50">
                  Enquire Now
                </button>
              </div>
            </div>

            <button className="text-gray-700 font-medium flex items-center gap-2 mt-4">
              View 3 More Rooms
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Facilities Section */}
          <div className="mx-auto bg-white rounded-lg px-6 py-8 mb-8">
            <h2 className="text-4xl font-bold mb-12">
              Facilities in GoBritanya - Vega Residence
            </h2>

            <div className="grid grid-cols-2 gap-16">
              {/* Apartment Column */}
              <div>
                <h3 className="text-2xl font-bold mb-8">Apartment</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Wifi className="w-6 h-6 text-gray-700" />
                    <span className="text-lg text-gray-700">WiFi</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Refrigerator className="w-6 h-6 text-gray-700" />
                    <span className="text-lg text-gray-700">Fridge</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                        strokeWidth="2"
                      />
                      <polyline points="14 2 14 8 20 8" strokeWidth="2" />
                    </svg>
                    <span className="text-lg text-gray-700">
                      Utility Bills Included
                    </span>
                  </div>
                </div>
              </div>

              {/* Community Column */}
              <div>
                <h3 className="text-2xl font-bold mb-8">Community</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="16"
                        rx="2"
                        strokeWidth="2"
                      />
                      <path d="M7 8h10M7 12h6" strokeWidth="2" />
                    </svg>
                    <span className="text-lg text-gray-700">Social Events</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                        strokeWidth="2"
                      />
                      <circle cx="9" cy="7" r="4" strokeWidth="2" />
                    </svg>
                    <span className="text-lg text-gray-700">
                      Communal Relaxing & Study Area
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="15"
                        rx="2"
                        strokeWidth="2"
                      />
                      <polyline points="17 2 12 7 7 2" strokeWidth="2" />
                    </svg>
                    <span className="text-lg text-gray-700">Cinema</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="3" strokeWidth="2" />
                      <path
                        d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-lg text-gray-700">CCTV</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Dumbbell className="w-6 h-6 text-gray-700" />
                    <span className="text-lg text-gray-700">On-Site Gym</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Gamepad2 className="w-6 h-6 text-gray-700" />
                    <span className="text-lg text-gray-700">Gameroom</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Shirt className="w-6 h-6 text-gray-700" />
                    <span className="text-lg text-gray-700">Laundry Room</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Bike className="w-6 h-6 text-gray-700" />
                    <span className="text-lg text-gray-700">Bike Storage</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="mt-8 text-lg font-medium border-b-2 border-black pb-1">
              Show More Facilities &gt;
            </button>
          </div>
        </div>

        <div className="col-span-3 row-start-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden px-6 py-4">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-5">
              <h2 className="text-2xl font-semibold text-gray-900">
                Location & Maps
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                iQ Vega 6 Miles St London SW8 1RZ
              </p>
            </div>

            {/* Map Container */}
            <div className="relative h-96 rounded-lg">
              {/* Real Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps?q=6+Miles+St%2C+London+SW8+1RZ%2C+UK&hl=en&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="iQ Vega Location Map"
              ></iframe>

              {/* Distance Calculator Overlay */}
              <div className="absolute top-4 left-4 bg-white rounded-lg shadow-xl p-4 min-w-80 z-10">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="font-medium text-gray-800">
                    Distance From University
                  </span>
                </div>

                <input
                  type="text"
                  placeholder="Select a university"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                />
                <div className="flex justify-between mt-4 gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition">
                    <Car className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition">
                    <Train className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition">
                    <Bus className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition">
                    <Plane className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition">
                    <Footprints className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Map Credit (Google style) */}
              <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white px-2 py-1 rounded z-10">
                © Google
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 row-start-5 px-4 bg-white">
          <div className="w-full flex justify-between my-3">
            <h2 className="text-2xl font-semibold">House Policies</h2>
            <button className="p-4 bg-gray-200 rounded-full flex items-center justify-center border-none mr-4">
              <FaAngleDown className="" />
            </button>
          </div>
          <p className="my-2">Cancellation Policy</p>
        </div>
      </div>
    </div>
  );
};

export default AccomodationDetail;

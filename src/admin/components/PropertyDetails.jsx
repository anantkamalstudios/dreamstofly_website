import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import EditPropertyForm from "./EditPropertyForm";

function PropertyDetails({ property, onBack }) {
  const [activeRoomTab, setActiveRoomTab] = useState("all");
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [editingProperty, setEditingProperty] = useState(null);
  const [currentProperty, setCurrentProperty] = useState(property);
  const [subProperties, setSubProperties] = useState([
    {
      id: 1,
      image: currentProperty.image,
      name: "Master Room",
      type: "Single",
      pricePerWeek: "£120 per week",
      deposit: "£300 refundable",
      stayDuration: "12 months max",
      moveInDate: "10 Jan 2025",
    },
    {
      id: 2,
      image: currentProperty.image,
      name: "Deluxe Room",
      type: "Double",
      pricePerWeek: "£150 per week",
      deposit: "£400 refundable",
      stayDuration: "12 months max",
      moveInDate: "15 Jan 2025",
    },
    {
      id: 3,
      image: currentProperty.image,
      name: "Standard Room",
      type: "Single",
      pricePerWeek: "£100 per week",
      deposit: "£250 refundable",
      stayDuration: "6 months max",
      moveInDate: "20 Jan 2025",
    },
  ]);
  const [formData, setFormData] = useState({});

  const propertyFields = [
    {
      name: "name",
      label: "Room Name",
      type: "text",
      placeholder: "e.g. Master Room",
      required: true,
    },
    {
      name: "type",
      label: "Room Type",
      type: "select",
      placeholder: "Select Room Type",
      required: true,
      options: [
        { value: "Single", label: "Single" },
        { value: "Double", label: "Double" },
        { value: "Deluxe", label: "Deluxe" },
        { value: "Suite", label: "Suite" },
      ],
    },
    {
      name: "pricePerWeek",
      label: "Price Per Week",
      type: "text",
      placeholder: "e.g. £120 per week",
      required: true,
    },
    {
      name: "deposit",
      label: "Deposit Amount",
      type: "text",
      placeholder: "e.g. £300 refundable",
      required: false,
    },
    {
      name: "stayDuration",
      label: "Stay Duration",
      type: "text",
      placeholder: "e.g. 12 months max",
      required: false,
    },
    {
      name: "moveInDate",
      label: "Move-in Date",
      type: "date",
      required: true,
    },
    {
      name: "IMAGE_UPLOAD_PLACEHOLDER",
      label: "",
      type: "image_upload",
    },
  ];

  const allRoomsCount = 3;
  const availableRoomsCount = 2;
  const bookedRoomsCount = 1;

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      setSubProperties(subProperties.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (property) => {
    setEditingProperty(property);
  };

  const handleSubmit = (updatedProperty) => {
    setCurrentProperty(updatedProperty);
    setEditingProperty(null);
    console.log(formData);

    // Here you can also call onBack with the updated property if needed
    // or trigger a parent component update
  };

  const handleCancelEdit = () => {
    setEditingProperty(null);
  };

  if (editingProperty) {
    return (
      <EditPropertyForm
        property={editingProperty}
        onSave={handleSubmit}
        onCancel={handleCancelEdit}
        source="propertydetails"
        propertyFields={propertyFields}
        formData={formData}
        setFormData={setFormData}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-1 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-4 sm:mb-6 font-medium transition px-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Properties
        </button>

        {/* Property Details Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 md:p-6 border-b border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  Property Details
                </h2>
                <p className="text-sm text-blue-600 mt-1">
                  Booking ID #0052466623
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {currentProperty.title}
                </h3>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span className="font-medium">Room Capacity:</span> 3-5
                    Person
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <span className="font-medium">Room Facilities</span>
              </div>
              <p className="text-sm text-gray-600">
                {currentProperty.facilities}
              </p>
            </div>

            {/* Images */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative rounded-lg overflow-hidden aspect-video group cursor-pointer"
                  onClick={() => setFullscreenImage(currentProperty.image)}
                >
                  <img
                    src={currentProperty.image}
                    alt={`Property ${i}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition text-sm font-medium">
                      View fullscreen
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Room Tabs */}
          <div className="border-b border-gray-200 px-4 md:px-6">
            <div className="flex gap-4 overflow-x-auto">
              <button
                onClick={() => setActiveRoomTab("all")}
                className={`py-3 border-b-2 transition whitespace-nowrap text-sm md:text-base ${
                  activeRoomTab === "all"
                    ? "border-blue-500 text-blue-600 font-medium"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                All Room ({allRoomsCount})
              </button>
              <button
                onClick={() => setActiveRoomTab("available")}
                className={`py-3 border-b-2 transition whitespace-nowrap text-sm md:text-base ${
                  activeRoomTab === "available"
                    ? "border-blue-500 text-blue-600 font-medium"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Available Room ({availableRoomsCount})
              </button>
              <button
                onClick={() => setActiveRoomTab("booked")}
                className={`py-3 border-b-2 transition whitespace-nowrap text-sm md:text-base ${
                  activeRoomTab === "booked"
                    ? "border-blue-500 text-blue-600 font-medium"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Booked ({bookedRoomsCount})
              </button>
            </div>
          </div>

          {/* Room Table */}
          <div className="overflow-auto">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <div className="bg-blue-50 px-6 py-3 sticky top-0 z-10">
                <div className="grid grid-cols-12 gap-4 items-center text-sm font-medium text-gray-700">
                  <div className="col-span-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                  </div>
                  <div className="col-span-1">Images</div>
                  <div className="col-span-2">Room Name</div>
                  <div className="col-span-1">Room Type</div>
                  <div className="col-span-2">Price Per Week</div>
                  <div className="col-span-1">Deposit</div>
                  <div className="col-span-2">Stay Duration</div>
                  <div className="col-span-1">Move In Date</div>
                  <div className="col-span-1">Action</div>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {subProperties.map((room) => (
                  <div
                    key={room.id}
                    className="px-6 py-4 hover:bg-gray-50 transition"
                  >
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-1">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                      </div>
                      <div className="col-span-1">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-16 h-12 object-cover rounded"
                        />
                      </div>
                      <div className="col-span-2 font-medium text-gray-900">
                        {room.name}
                      </div>
                      <div className="col-span-1 text-gray-600 text-sm">
                        {room.type}
                      </div>
                      <div className="col-span-2 text-gray-600 text-sm">
                        {room.pricePerWeek}
                      </div>
                      <div className="col-span-1 text-gray-600 text-sm">
                        {room.deposit}
                      </div>
                      <div className="col-span-2 text-gray-600 text-sm">
                        {room.stayDuration}
                      </div>
                      <div className="col-span-1 text-gray-600 text-sm">
                        {room.moveInDate}
                      </div>
                      <div className="col-span-1 flex gap-2">
                        {/* edit button */}
                        <button
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition"
                          onClick={() => handleEdit(room)}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        {/* delete button */}
                        <button
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded transition"
                          onClick={() => handleDelete(room.id)}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-100">
              {subProperties.map((room) => (
                <div key={room.id} className="p-4 hover:bg-gray-50">
                  <div className="flex gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded mt-1"
                    />
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-20 h-16 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 mb-2">
                        {room.name}
                      </h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Type:</span> {room.type}
                        </div>
                        <div>
                          <span className="font-medium">Price:</span>{" "}
                          {room.pricePerWeek}
                        </div>
                        <div>
                          <span className="font-medium">Deposit:</span>{" "}
                          {room.deposit}
                        </div>
                        <div>
                          <span className="font-medium">Duration:</span>{" "}
                          {room.stayDuration}
                        </div>
                        <div>
                          <span className="font-medium">Move In:</span>{" "}
                          {room.moveInDate}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button className="px-3 py-1.5 text-blue-600 bg-blue-50 rounded text-sm font-medium">
                          Edit
                        </button>
                        <button className="px-3 py-1.5 text-red-600 bg-red-50 rounded text-sm font-medium">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;

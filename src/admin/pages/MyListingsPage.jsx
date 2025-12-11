import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import PropertyDetails from "../components/PropertyDetails";
import { useNavigate } from "react-router-dom";
import EditPropertyForm from "../components/EditPropertyForm";

function MyListingsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [editingProperty, setEditingProperty] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    country: "",
    city: "",
    address: "",
    description: "",
    facilities: "",
    special_offers: "",
    house_policies: "",
    payment_info: "",
    location_map_link: "",
    images: [],
  });
  const [properties, setProperties] = useState([
    {
      id: 1,
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      ],
      title: "Luxury Villa in London",
      country: "UK",
      city: "London",
      facilities: "AC, Shower, Double Bed, WiFi, Kitchen",
      status: "available",
    },
    {
      id: 2,
      images: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
      ],
      title: "Modern Apartment NYC",
      country: "USA",
      city: "New York",
      facilities: "AC, Shower, Single Bed, Gym",
      status: "booked",
    },
    {
      id: 3,
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
      ],
      title: "Cozy Cottage Manchester",
      country: "UK",
      city: "Manchester",
      facilities: "AC, Shower, Double Bed, Garden",
      status: "available",
    },
    {
      id: 4,
      images: [
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
      ],
      title: "Downtown Loft Toronto",
      country: "Canada",
      city: "Toronto",
      facilities: "WiFi, Kitchen, Double Bed, Balcony",
      status: "available",
    },
    {
      id: 5,
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      ],
      title: "Beach House LA",
      country: "USA",
      city: "Los Angeles",
      facilities: "AC, Shower, Double Bed, Pool",
      status: "booked",
    },
  ]);
  const propertyFields = [
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Property Title",
      required: true,
    },
    {
      name: "price",
      label: "Price ($)",
      type: "number",
      placeholder: "e.g. 250000",
      required: true,
    },
    {
      name: "bedrooms",
      label: "Bedrooms",
      type: "number",
      placeholder: "Number of bedrooms",
      required: true,
    },
    {
      name: "bathrooms",
      label: "Bathrooms",
      type: "number",
      placeholder: "Number of bathrooms",
      required: true,
    },
    {
      name: "area",
      label: "Area (sq ft)",
      type: "number",
      placeholder: "Property area in sq ft",
      required: true,
    },
    {
      name: "country",
      label: "Country",
      type: "select",
      placeholder: "Select Country",
      required: true,
      options: [
        { value: "United States", label: "United States" },
        { value: "United Kingdom", label: "United Kingdom" },
        { value: "UK", label: "UK" },
        { value: "USA", label: "USA" },
        { value: "Canada", label: "Canada" },
        { value: "Australia", label: "Australia" },
      ],
    },
    {
      name: "city",
      label: "City",
      type: "select",
      placeholder: "Select City",
      required: true,
      options: [
        { value: "New York", label: "New York" },
        { value: "Los Angeles", label: "Los Angeles" },
        { value: "Chicago", label: "Chicago" },
        { value: "Houston", label: "Houston" },
        { value: "London", label: "London" },
        { value: "Manchester", label: "Manchester" },
        { value: "Toronto", label: "Toronto" },
      ],
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      placeholder: "Enter Full Address",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Write detailed description about the property",
      rows: 4,
      required: true,
    },
    {
      name: "IMAGE_UPLOAD_PLACEHOLDER",
      label: "",
      type: "image_upload",
    },
    {
      name: "facilities",
      label: "Facilities",
      type: "text",
      placeholder: "Enter Property Facilities",
      required: false,
    },
    {
      name: "special_offers",
      label: "Special Offers",
      type: "text",
      placeholder: "Enter Property Special Offers",
      required: false,
    },
    {
      name: "house_policies",
      label: "House Policies",
      type: "text",
      placeholder: "Enter Property House Policies",
      required: false,
    },
    {
      name: "payment_info",
      label: "Payment Information",
      type: "text",
      placeholder: "Enter Property Payment Info",
      required: false,
    },
    {
      name: "location_map_link",
      label: "Location Map Link",
      type: "url",
      placeholder: "Enter Google Maps Link",
      required: false,
    },
  ];

  const handleEdit = (property) => {
    setEditingProperty(property);
  };

  const handleSave = (updatedProperty) => {
    setProperties(
      properties.map((p) => (p.id === updatedProperty.id ? updatedProperty : p))
    );
    setEditingProperty(null);

    console.log("Property updated successfully in MyListings", updatedProperty);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      setProperties(properties.filter((p) => p.id !== id));
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    }
  };

  if (editingProperty) {
    return (
      <EditPropertyForm
        property={editingProperty}
        onSave={handleSave}
        onCancel={() => setEditingProperty(null)}
        source="mylistings"
        propertyFields={propertyFields}
        formData={formData}
        setFormData={setFormData}
      />
    );
  }

  if (selectedProperty) {
    return (
      <PropertyDetails
        property={selectedProperty}
        onBack={() => setSelectedProperty(null)}
      />
    );
  }

  const getFilteredByTab = () => {
    if (activeTab === "available") {
      return properties.filter((p) => p.status === "available");
    } else if (activeTab === "booked") {
      return properties.filter((p) => p.status === "booked");
    }
    return properties;
  };

  const getSortedProperties = () => {
    const filtered = getFilteredByTab();

    if (!sortConfig.key) return filtered;

    return [...filtered].sort((a, b) => {
      const aValue = a[sortConfig.key].toLowerCase();
      const bValue = b[sortConfig.key].toLowerCase();

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  const displayedProperties = getSortedProperties();

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === displayedProperties.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(displayedProperties.map((p) => p.id));
    }
  };

  const toggleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) {
      return <ChevronDown className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="w-4 h-4 text-blue-600" />
    ) : (
      <ChevronDown className="w-4 h-4 text-blue-600" />
    );
  };

  const availableCount = properties.filter(
    (p) => p.status === "available"
  ).length;
  const bookedCount = properties.filter((p) => p.status === "booked").length;

  return (
    <div className="min-h-screen bg-gray-50 p-1 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex gap-1 sm:gap-6 px-1 sm:px-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`py-3 sm:py-4 border-b-2 transition whitespace-nowrap text-sm sm:text-base ${
                  activeTab === "all"
                    ? "border-blue-500 text-blue-600 font-medium"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                All Properties ({properties.length})
              </button>
              <button
                onClick={() => setActiveTab("available")}
                className={`py-3 sm:py-4 border-b-2 transition whitespace-nowrap text-sm sm:text-base ${
                  activeTab === "available"
                    ? "border-blue-500 text-blue-600 font-medium"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Available ({availableCount})
              </button>
              <button
                onClick={() => setActiveTab("booked")}
                className={`py-3 sm:py-4 border-b-2 transition whitespace-nowrap text-sm sm:text-base ${
                  activeTab === "booked"
                    ? "border-blue-500 text-blue-600 font-medium"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Booked ({bookedCount})
              </button>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto bg-white shadow-sm">
            <div className="min-w-[1000px]">
              <div className="bg-blue-100 px-6 py-3">
                <div className="grid grid-cols-12 gap-4 items-center text-sm font-medium text-gray-700">
                  <div className="col-span-1 flex items-center">
                    <input
                      type="checkbox"
                      checked={
                        selectedRows.length === displayedProperties.length &&
                        displayedProperties.length > 0
                      }
                      onChange={toggleSelectAll}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                  </div>
                  <div className="col-span-2">Images</div>
                  <div className="col-span-2">
                    <button
                      onClick={() => handleSort("title")}
                      className="flex items-center gap-1 hover:text-gray-900"
                    >
                      Title
                      <SortIcon columnKey="title" />
                    </button>
                  </div>
                  <div className="col-span-2">
                    <button
                      onClick={() => handleSort("country")}
                      className="flex items-center gap-1 hover:text-gray-900"
                    >
                      Country
                      <SortIcon columnKey="country" />
                    </button>
                  </div>
                  <div className="col-span-1">
                    <button
                      onClick={() => handleSort("city")}
                      className="flex items-center gap-1 hover:text-gray-900"
                    >
                      City
                      <SortIcon columnKey="city" />
                    </button>
                  </div>
                  <div className="col-span-2">
                    <button
                      onClick={() => handleSort("facilities")}
                      className="flex items-center gap-1 hover:text-gray-900"
                    >
                      Facilities
                      <SortIcon columnKey="facilities" />
                    </button>
                  </div>
                  <div className="col-span-2">Action</div>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {displayedProperties.length === 0 ? (
                  <div className="px-6 py-12 text-center text-gray-500">
                    No properties found matching your filters.
                  </div>
                ) : (
                  displayedProperties.map((property) => (
                    <div
                      key={property.id}
                      className="px-6 py-4 hover:bg-gray-50 transition"
                    >
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-1">
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(property.id)}
                            onChange={() => toggleSelectRow(property.id)}
                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          />
                        </div>
                        <div className="col-span-2">
                          <img
                            src={property.images[0]}
                            alt={property.title}
                            className="w-20 h-16 object-cover rounded-lg"
                          />
                        </div>
                        <div className="col-span-2 font-medium text-gray-900 pr-2">
                          <div className="line-clamp-2 break-words">
                            {property.title}
                          </div>
                        </div>
                        <div className="col-span-2 text-gray-600 pr-2">
                          <div className="line-clamp-1 break-words">
                            {property.country}
                          </div>
                        </div>
                        <div className="col-span-1 text-gray-600 pr-2">
                          <div className="line-clamp-1 break-words">
                            {property.city}
                          </div>
                        </div>
                        <div className="col-span-2 text-gray-600 text-sm pr-2">
                          <div className="line-clamp-2 break-words">
                            {property.facilities}
                          </div>
                        </div>
                        <div className="col-span-2 flex items-center gap-1.5">
                          <button
                            className="px-2.5 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-xs font-medium whitespace-nowrap"
                            onClick={() => navigate("/admin/addproperties")}
                          >
                            Add room
                          </button>
                          <button
                            onClick={() => setSelectedProperty(property)}
                            className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition flex-shrink-0"
                            title="View Details"
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
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                          {/* edit property button */}
                          <button
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition flex-shrink-0"
                            onClick={() => handleEdit(property)}
                            title="Edit Property"
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
                          {/* delete property button */}
                          <button
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition flex-shrink-0"
                            onClick={() => handleDelete(property.id)}
                            title="Delete Property"
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
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Card View */}
          <div className="lg:hidden divide-y divide-gray-100">
            {displayedProperties.length === 0 ? (
              <div className="px-4 py-12 text-center text-gray-500">
                No properties found matching your filters.
              </div>
            ) : (
              displayedProperties.map((property) => (
                <div key={property.id} className="p-3 sm:p-4 hover:bg-gray-50">
                  <div className="flex gap-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(property.id)}
                      onChange={() => toggleSelectRow(property.id)}
                      className="w-4 h-4 text-blue-600 rounded mt-1 flex-shrink-0"
                    />
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-20 h-16 sm:w-24 sm:h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">
                        {property.title}
                      </h3>
                      <div className="space-y-1 text-xs sm:text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Country:</span>{" "}
                          {property.country}
                        </div>
                        <div>
                          <span className="font-medium">City:</span>{" "}
                          {property.city}
                        </div>
                        <div>
                          <span className="font-medium">Facilities:</span>{" "}
                          {property.facilities}
                        </div>
                        <div>
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                              property.status === "available"
                                ? "bg-green-100 text-green-800"
                                : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            {property.status === "available"
                              ? "Available"
                              : "Booked"}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <button
                          onClick={() => navigate("/admin/addproperties")}
                          className="px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-xs sm:text-sm font-medium"
                        >
                          Add room
                        </button>
                        <button
                          onClick={() => setSelectedProperty(property)}
                          className="px-3 py-1.5 text-green-600 bg-green-50 rounded-lg hover:bg-green-100 transition text-xs sm:text-sm font-medium"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleEdit(property)}
                          className="px-3 py-1.5 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-xs sm:text-sm font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(property.id)}
                          className="px-3 py-1.5 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition text-xs sm:text-sm font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyListingsPage;

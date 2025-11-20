import React, { useState, useEffect } from "react";

function RecentlyViewedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const properties = [
    {
      type: "Apartment",
      price: "£280/week",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      address: "1032 Bloomingdale Ave",
      beds: "3 Beds",
      baths: "2 Baths",
      size: "140 sqft",
    },
    {
      type: "Twin bed",
      price: "£250/week",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
      address: "4230 Rad Woods Hill",
      beds: "2 Beds",
      baths: "1 Bath",
      size: "100 sqft",
    },
    {
      type: "Single bed",
      price: "£180/week",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
      address: "7722 18th Ave, Brooklyn",
      beds: "1 Bed",
      baths: "1 Bath",
      size: "185 sqft",
    },
    {
      type: "Studio",
      price: "£220/week",
      image:
        "https://images.unsplash.com/photo-1502672260066-6bc35f0af07e?w=400&h=300&fit=crop",
      address: "890 Madison Avenue",
      beds: "1 Bed",
      baths: "1 Bath",
      size: "95 sqft",
    },
    {
      type: "Shared Room",
      price: "£150/week",
      image:
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=300&fit=crop",
      address: "456 Oxford Street",
      beds: "4 Beds",
      baths: "2 Baths",
      size: "200 sqft",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const startIndex = currentIndex * itemsPerPage;
  const visibleProperties = properties.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="mt-12 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Recently Viewed Properties
      </h2>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="min-w-full flex gap-6">
              {properties
                .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                .map((property, propIndex) => (
                  <div
                    key={propIndex}
                    className="flex-1 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={property.image}
                      alt={property.type}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-700 font-medium">
                          {property.type}
                        </span>
                        <span className="text-orange-500 font-bold">
                          {property.price}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                        <span>📍</span> {property.address}
                      </p>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          🛏️ {property.beds}
                        </span>
                        <span className="flex items-center gap-1">
                          🚿 {property.baths}
                        </span>
                        <span className="flex items-center gap-1">
                          📐 {property.size}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-start gap-2 mt-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default RecentlyViewedProperties;

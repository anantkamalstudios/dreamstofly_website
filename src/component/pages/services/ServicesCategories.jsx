import React, { useState } from "react";
import { services } from "../../data/services/ServicesData";

const ServicesCategories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services", count: services.length },
    {
      id: "preparation",
      name: "Test Preparation",
      count: services.filter((s) => s.category === "preparation").length,
    },
    {
      id: "accommodation",
      name: "Accommodation",
      count: services.filter((s) => s.category === "accommodation").length,
    },
    {
      id: "travel",
      name: "Travel & Insurance",
      count: services.filter((s) => s.category === "travel").length,
    },
    {
      id: "financial",
      name: "Financial Services",
      count: services.filter((s) => s.category === "financial").length,
    },
    {
      id: "support",
      name: "Student Support",
      count: services.filter((s) => s.category === "support").length,
    },
  ];

  const getServicesByCategory = (category) => {
    if (category === "all") return services;
    return services.filter((service) => service.category === category);
  };

  const filteredServices = getServicesByCategory(activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Services by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the services you need organized by category for easy navigation
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">
                ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {activeCategory === "all"
                      ? "Service"
                      : activeCategory.charAt(0).toUpperCase() +
                        activeCategory.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {service.desc}
                </p>

                {/* Price and Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-600 font-semibold text-sm">
                    {service.price}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Learn More →
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No services found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesCategories;

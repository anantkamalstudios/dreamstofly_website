import { useState } from "react";

function ProductsWeOffer() {
  const tabs = ["UniKitOut", "Student Essentials", "StuBuddy"];
  const [activeTab, setActiveTab] = useState(0);

  const products = Array(8).fill({
    title: "Bedroom Kit",
    price: "£67",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
  });

  return (
    <div className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
          Products we offer
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-lg sm:text-xl font-semibold pb-2 transition-colors ${
                activeTab === index
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">Starting From</p>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  {product.price}
                </p>
                <button className="w-full bg-blue-50 text-blue-900 font-semibold py-3 rounded-lg hover:bg-blue-100 transition-colors">
                  View Kit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsWeOffer;

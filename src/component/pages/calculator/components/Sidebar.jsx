import React from "react";
import { X } from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen, sidebarItems }) => {
  return (
    <div
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 fixed md:sticky top-0 left-0 h-full md:h-auto md:top-20 w-64 bg-white 
      border-r md:border border-gray-200 rounded-lg p-6 transition-transform duration-300 ease-in-out 
      z-40 overflow-y-auto`}
    >
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h3 className="font-bold text-gray-900">Table content</h3>
        <button onClick={() => setSidebarOpen(false)}>
          <X size={20} />
        </button>
      </div>
      <h3 className="font-bold text-gray-900 mb-4 hidden md:block">
        Table content
      </h3>

      <nav className="space-y-2">
        {sidebarItems.map((item, index) => (
          <a
            key={index}
            href={`#section-${index}`}
            className={`block text-sm py-2 px-3 rounded hover:bg-gray-100 transition ${
              index === 0
                ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                : "text-gray-700"
            }`}
            onClick={() => setSidebarOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

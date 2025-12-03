import React from "react";
import Sidebar from "./Sidebar";
import GuideContent from "./GuideContent";
import { Menu, X } from "lucide-react";

const GuideSection = ({ sidebarOpen, setSidebarOpen, sidebarItems }) => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Sidebar */}
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            sidebarItems={sidebarItems}
          />

          {/* Mobile Overlay */}
          {sidebarOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Guide Content */}
          <GuideContent />
        </div>
      </div>
    </div>
  );
};

export default GuideSection;

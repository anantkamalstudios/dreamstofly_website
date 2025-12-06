import React, { useState } from "react";
import Sidebar from "./Sidebar";
import GuideContent from "./GuideContent";
import { Menu, X } from "lucide-react";

// const GuideSection = ({
//   sidebarOpen,
//   setSidebarOpen,
//   sidebarItems,
//   content,
// }) => {
//   const [selectedItem, setSelectedItem] = useState(sidebarItems[0].id);
//   return (
//     <div className="w-full bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="md:hidden fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg"
//           >
//             {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           {/* Sidebar */}
//           <Sidebar
//             sidebarOpen={sidebarOpen}
//             setSidebarOpen={setSidebarOpen}
//             sidebarItems={sidebarItems}
//             selectedItem={selectedItem}
//             setSelectedItem={setSelectedItem}
//           />

//           {/* Mobile Overlay */}
//           {sidebarOpen && (
//             <div
//               className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
//               onClick={() => setSidebarOpen(false)}
//             />
//           )}

//           {/* Main Guide Content */}
//           <GuideContent data={content} />
//         </div>
//       </div>
//     </div>
//   );
// };

const GuideSection = ({ sidebarItems, content }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(sidebarItems[0].id);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2563eb;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1d4ed8;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #2563eb #e5e7eb;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-0 md:gap-8  ">
          {/* <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition flex items-center gap-2"
          >
            {sidebarOpen ? (
              <>
                <X size={20} />
                <span className="text-sm font-medium">Close</span>
              </>
            ) : (
              <>
                <Menu size={20} />
                <span className="text-sm font-medium">Contents</span>
              </>
            )}
          </button> */}
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition flex items-center gap-2"
            >
              {sidebarOpen ? (
                <>
                  <X size={20} />
                  <span className="text-sm font-medium">Close</span>
                </>
              ) : (
                <>
                  <Menu size={20} />
                  <span className="text-sm font-medium">Contents</span>
                </>
              )}
            </button>
          </div>

          {/* Sidebar - Sticky */}
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            sidebarItems={sidebarItems}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />

          {/* Mobile Overlay */}
          {sidebarOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Guide Content - Scrollable */}
          <GuideContent data={content} />
        </div>
      </div>
    </div>
  );
};

export default GuideSection;

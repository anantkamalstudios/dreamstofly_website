// import React from "react";

// const AsideBar = ({ setActiveTab, activeTab, tabs }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md border-2 border-blue-500 overflow-hidden sticky top-6">
//       {tabs.map((tab, index) => (
//         <button
//           key={tab.id}
//           onClick={() => setActiveTab(tab.id)}
//           className={`w-full text-left px-5 py-4 transition-all duration-200 border-b border-gray-200 last:border-b-0 ${
//             activeTab === tab.id
//               ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-l-blue-600 shadow-inner"
//               : "text-gray-700 hover:bg-gray-50 border-l-4 border-l-transparent hover:border-l-blue-300"
//           }`}
//         >
//           <span className="text-sm">{tab.label}</span>
//         </button>
//       ))}
//     </div>
//   );
// };

// export default AsideBar;

import React from "react";

const AsideBar = ({ setActiveTab, activeTab, tabs }) => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveTab(id);
  };

  return (
    <div className="bg-white shadow-md border-2 border-blue-500 overflow-hidden sticky top-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleScroll(tab.id)}
          className={`w-full text-left px-5 py-4 transition-all duration-200 border-b border-gray-200 last:border-b-0 ${
            activeTab === tab.id
              ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-l-blue-600 shadow-inner"
              : "text-gray-700 hover:bg-gray-50 border-l-4 border-l-transparent hover:border-l-blue-300"
          }`}
        >
          <span className="text-sm">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default AsideBar;

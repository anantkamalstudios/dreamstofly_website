// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="flex items-center py-2 px-[4%] justify-between">
//       <img
//         src="https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt=""
//         className="w-[max(10%,80px)]"
//       />
//       <button
//         className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
//         onClick={() => console.log("hello world")}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Bell, Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-2 lg:px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search .."
              className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white text-sm transition-all"
            />
          </div>
        </div>

        {/* Right Side - Notification & Profile */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notification Bell */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
            <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Picture */}
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Profile"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gray-200 cursor-pointer hover:border-blue-500 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

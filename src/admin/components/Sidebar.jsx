import { NavLink } from "react-router-dom";
import {
  Home,
  Plus,
  List,
  ShoppingCart,
  Tag,
  User,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { path: "/admin/dashboard", icon: Home, label: "Dashboard" },
    { path: "/admin/addproperties", icon: Plus, label: "Add Properties" },
    {
      path: "/admin/booking-requests",
      icon: ShoppingCart,
      label: "Booking Requests",
    },
    { path: "/admin/listing", icon: List, label: "My Listings" },
    { path: "/admin/enquiry", icon: Tag, label: "Enquiry" },
    { path: "/admin/account", icon: User, label: "Account" },
  ];

  return (
    <aside className="w-20 md:w-64 lg:w-[18%] bg-white min-h-screen border border-gray-200">
      <div className="flex flex-col gap-1 pt-6 px-2 md:pl-[20%] md:pr-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-all justify-center md:justify-start ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`
              }
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <p className="hidden md:block">{item.label}</p>
            </NavLink>
          );
        })}

        {/* Logout Button */}
        <button
          onClick={() => {
            console.log("Logout clicked");
          }}
          className="flex items-center gap-3 px-3 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all mt-2 justify-center md:justify-start"
        >
          <LogOut className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
          <p className="hidden md:block text-sm font-medium">Logout</p>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

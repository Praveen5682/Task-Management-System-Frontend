import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiClipboard,
  FiCheckCircle,
  FiUsers,
  FiBell,
} from "react-icons/fi";

const Sidebar = ({ closeSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Dashboard", icon: FiHome },
    { path: "/users", label: "Users", icon: FiUsers },
    { path: "/tasks", label: "Tasks", icon: FiClipboard },
    { path: "/projects", label: "Projects", icon: FiCheckCircle },
    { path: "/team", label: "Team", icon: FiUsers },
    {
      path: "/notifications",
      label: "Notifications",
      icon: FiBell,
    },
  ];

  return (
    <aside className="w-64 h-full bg-white border-r border-gray-300 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-300">
        <h2 className="text-xl font-bold tracking-tight">
          Task<span className="text-green-600">Manager</span>
        </h2>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map(({ path, label, icon: Icon }) => {
          const active = location.pathname === path;

          return (
            <Link
              key={path}
              to={path}
              onClick={closeSidebar}
              className={`group flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition
                ${
                  active
                    ? "bg-green-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-green-50"
                }
              `}
            >
              <Icon
                className={`text-lg ${
                  active
                    ? "text-white"
                    : "text-gray-500 group-hover:text-green-600"
                }`}
              />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-300 text-xs text-gray-600">
        Done by Praveen Kumar
      </div>
    </aside>
  );
};

export default Sidebar;

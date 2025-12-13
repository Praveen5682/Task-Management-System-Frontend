import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiClipboard,
  FiCheckCircle,
  FiUsers,
  FiBell,
  FiSettings,
  FiShield,
  FiLayers,
  FiBarChart2,
  FiColumns,
  FiUser,
  FiCheckSquare,
} from "react-icons/fi";

const Sidebar = ({ closeSidebar, role }) => {
  const location = useLocation();

  /* ===================== MENUS ===================== */

  const adminMenu = [
    { path: "/", label: "Dashboard", icon: FiHome },
    { path: "/users", label: "Users", icon: FiUsers },
    { path: "/roles", label: "Roles & Permissions", icon: FiShield },
    { path: "/projects", label: "Projects", icon: FiLayers },
    { path: "/team", label: "Teams", icon: FiUsers },
    { path: "/tasks", label: "All Tasks", icon: FiClipboard },
    { path: "/reports", label: "Reports", icon: FiBarChart2 },
    { path: "/notifications", label: "Notifications", icon: FiBell },
    { path: "/settings", label: "Settings", icon: FiSettings },
  ];

  const teamLeadMenu = [
    { path: "/", label: "Dashboard", icon: FiHome },
    { path: "/my-team", label: "My Team", icon: FiUsers },
    { path: "/projects", label: "Projects", icon: FiLayers },
    { path: "/tasks", label: "Team Tasks", icon: FiClipboard },
    { path: "/task-board", label: "Task Board", icon: FiColumns },
    { path: "/reports", label: "Reports", icon: FiBarChart2 },
    { path: "/notifications", label: "Notifications", icon: FiBell },
    { path: "/profile", label: "Profile", icon: FiUser },
  ];

  const employeeMenu = [
    { path: "/", label: "Dashboard", icon: FiHome },
    { path: "/my-tasks", label: "My Tasks", icon: FiCheckSquare },
    { path: "/task-board", label: "Task Board", icon: FiColumns },
    { path: "/my-projects", label: "Projects", icon: FiLayers },
    { path: "/notifications", label: "Notifications", icon: FiBell },
    { path: "/profile", label: "Profile", icon: FiUser },
  ];

  /* ===================== ROLE SWITCH ===================== */

  // const getMenuByRole = () => {
  //   if (role === "admin") return adminMenu;
  //   if (role === "TL") return teamLeadMenu;
  //   return employeeMenu;
  // };

  const menuItems = adminMenu;

  /* ===================== UI ===================== */

  return (
    <aside className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <h2 className="text-xl font-bold">
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
                }`}
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
      <div className="px-6 py-4 border-t text-xs text-gray-500 border-gray-200">
        Built by Praveen Kumar
      </div>
    </aside>
  );
};

export default Sidebar;

import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiClipboard,
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

import adminAvatar from "../../../assets/avatar/admin.jpg";
import teamLeadAvatar from "../../../assets/avatar/tl.jpg";
import employeeAvatar from "../../../assets/avatar/employee.png";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = ({ closeSidebar, role }) => {
  const location = useLocation();
  const roleIdFromLocalStorage = Number(localStorage.getItem("role"));

  const { user } = useContext(AuthContext);

  /* ===================== USER ===================== */

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
    { path: "/settings", label: "settings", icon: FiUser },
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

  const getMenuByRole = () => {
    if (roleIdFromLocalStorage === 1) return adminMenu;
    if (roleIdFromLocalStorage === 2) return teamLeadMenu;
    return employeeMenu;
  };

  const menuItems = getMenuByRole();

  /* ===================== UI ===================== */

  return (
    <aside className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <h2 className="text-xl font-bold">
          Task<span className="text-green-600">Manager</span>
        </h2>
      </div>

      {/* User Profile */}
      {/* User Profile */}
      <div className="px-6 py-4 border-b border-gray-200 flex flex-col items-center gap-2 hover:bg-gray-50">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full overflow-hidden">
          {roleIdFromLocalStorage === 1 && (
            <img
              src={adminAvatar}
              alt="Admin"
              className="w-full h-full object-cover"
            />
          )}
          {roleIdFromLocalStorage === 2 && (
            <img
              src={teamLeadAvatar}
              alt="Team Lead"
              className="w-full h-full object-cover"
            />
          )}
          {roleIdFromLocalStorage === 3 && (
            <div className="w-full h-full bg-green-600 flex items-center justify-center text-white text-lg font-semibold">
              {user?.name?.charAt(0) || "U"}
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="leading-tight text-center">
          <p className="text-sm font-semibold text-gray-800">
            {user?.name || "User"}
          </p>
          <p className="text-xs text-gray-500 truncate max-w-[160px]">
            {user?.email || "user@example.com"}
          </p>
        </div>
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
    </aside>
  );
};

export default Sidebar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiClipboard,
  FiCheckCircle,
  FiUsers,
  FiSettings,
  FiBell,
} from "react-icons/fi";

const Sidebar = ({ closeSidebar }) => {
  const location = useLocation();

  const handleClick = () => {
    if (closeSidebar) closeSidebar();
  };

  // Menu items for Admin in TMA MVP
  const menuItems = [
    {
      path: "/",
      label: "Dashboard",
      icon: <FiHome />,
      description: "Overview of tasks, projects, and team",
    },
    {
      path: "/tasks",
      label: "Tasks",
      icon: <FiClipboard />,
      description: "View, create, assign, and manage tasks",
    },
    {
      path: "/projects",
      label: "Projects",
      icon: <FiCheckCircle />,
      description: "Create projects and track progress",
    },
    {
      path: "/team",
      label: "Team",
      icon: <FiUsers />,
      description: "Manage team members and roles",
    },
    {
      path: "/notifications",
      label: "Notifications",
      icon: <FiBell />,
      description: "View task and project alerts",
    },
  ];

  return (
    <div className="w-64 bg-white h-full p-5 shadow-xl border-r">
      {/* Logo */}
      <h2 className="text-3xl font-extrabold mb-10 text-blue-600 tracking-wide">
        TaskManager
      </h2>

      {/* Menu */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200
                ${
                  active
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-100"
                }
              `}
              title={item.description} // Shows description on hover
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;

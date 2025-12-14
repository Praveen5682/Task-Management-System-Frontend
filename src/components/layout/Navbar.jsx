import React, { useContext } from "react";
import { FiMenu, FiLogOut } from "react-icons/fi";
import NotificationDropdown from "../NotificationDropdown";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const roleIdFromLocalStorage = Number(localStorage.getItem("role"));

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDashboardName = () => {
    if (roleIdFromLocalStorage === 1) return "Admin Dashboard";
    if (roleIdFromLocalStorage === 2) return "Team Lead Dashboard";
    return "Employee Dashboard";
  };

  const dashBoardName = handleDashboardName();

  return (
    <header className="h-16 bg-white border-b border-gray-300 flex items-center justify-between px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden text-xl text-gray-600 hover:text-gray-900"
          onClick={toggleSidebar}
        >
          <FiMenu />
        </button>
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
          <span>{dashBoardName}</span>
        </div>{" "}
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <NotificationDropdown />

        <button
          onClick={handleLogout}
          className="flex items-center bg-red-600 gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-white cursor-pointer hover:bg-red-700 transition"
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { FiMenu, FiLogOut } from "react-icons/fi";
import NotificationDropdown from "../NotificationDropdown";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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

        <h1 className="text-lg font-semibold text-gray-800">Admin Dashboard</h1>
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

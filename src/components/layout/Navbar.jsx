import React, { useContext } from "react";
import { FiMenu } from "react-icons/fi";
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
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={toggleSidebar}>
        <FiMenu />
      </button>

      <h1 className="text-xl font-semibold">Admin Dashboard</h1>

      <div className="flex items-center justify-center gap-4">
        <NotificationDropdown />

        <button
          onClick={handleLogout}
          className="px-4 py-1 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

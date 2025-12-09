import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={toggleSidebar}>
        <FiMenu />
      </button>

      <h1 className="text-xl font-semibold">Dashboard</h1>

      <button className="px-4 py-1 bg-blue-600 text-white rounded">
        Logout
      </button>
    </div>
  );
};

export default Navbar;

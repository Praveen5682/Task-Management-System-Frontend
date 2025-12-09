import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR — DESKTOP */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* SIDEBAR — MOBILE (Slide In) */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform bg-white shadow-md transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar closeSidebar={() => setOpen(false)} />
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        ></div>
      )}

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1">
        {/* NAVBAR */}
        <Navbar toggleSidebar={() => setOpen(true)} />

        {/* PAGE CONTENT */}
        <main className="p-4 overflow-y-auto flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

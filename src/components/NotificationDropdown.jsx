import React, { useState, useRef, useEffect } from "react";
import { FiBell } from "react-icons/fi";

const NotificationDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const notifications = [
    "New user registered",
    "Task assigned to you",
    "Server backup completed",
    "New project created",
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Icon */}
      <button
        className="text-xl p-2 rounded-full hover:bg-gray-100 transition"
        onClick={() => setOpen(!open)}
      >
        <FiBell className="cursor-pointer"/>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg  p-3 z-20">
          <h3 className="font-semibold text-gray-700 border-b pb-2">
            Notifications
          </h3>

          <div className="max-h-48 overflow-y-auto mt-2">
            {notifications.map((note, idx) => (
              <div
                key={idx}
                className="p-2 border-b last:border-none hover:bg-gray-50 cursor-pointer text-sm"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;

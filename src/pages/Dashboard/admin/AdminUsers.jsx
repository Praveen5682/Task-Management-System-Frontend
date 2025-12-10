import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const ToggleSwitch = ({ value, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all"></div>
      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition peer-checked:translate-x-5"></span>
    </label>
  );
};

const AdminUsers = () => {
  const [activeTab, setActiveTab] = useState("admin");

  const [users, setUsers] = useState({
    admin: [
      {
        id: 1,
        name: "Praveen Kumar",
        email: "admin1@example.com",
        joined: "2025-01-10",
      },
      {
        id: 2,
        name: "Arun Kumar",
        email: "admin2@example.com",
        joined: "2025-01-12",
      },
    ],

    tl: [
      {
        id: 3,
        name: "Keerthana",
        email: "tl1@example.com",
        employees: 12,
        joined: "2024-12-20",
        status: true,
      },
      {
        id: 4,
        name: "Nithya",
        email: "tl2@example.com",
        employees: 8,
        joined: "2024-11-15",
        status: false,
      },
    ],

    employee: [
      {
        id: 5,
        name: "Rahul",
        email: "emp1@example.com",
        joined: "2025-02-01",
        status: true,
      },
      {
        id: 6,
        name: "Vimal",
        email: "emp2@example.com",
        joined: "2025-02-05",
        status: true,
      },
      {
        id: 7,
        name: "Sathish",
        email: "emp3@example.com",
        joined: "2025-03-01",
        status: false,
      },
    ],
  });

  const getTitle = () => {
    if (activeTab === "admin") return "Admin Users";
    if (activeTab === "tl") return "Team Leaders";
    return "Employees";
  };

  const toggleStatus = (id) => {
    setUsers((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((u) =>
        u.id === id ? { ...u, status: !u.status } : u
      ),
    }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">User Management</h2>

      {/* Tabs */}
      <div className="flex gap-2 bg-gray-100 p-1 w-fit shadow-inner mb-4">
        {["admin", "tl", "employee"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-600 hover:bg-white hover:shadow-sm cursor-pointer"
            }`}
          >
            {tab === "admin"
              ? "Admins"
              : tab === "tl"
              ? "Team Leaders"
              : "Employees"}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="mt-6 bg-white shadow-lg p-6">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-gray-500 text-sm font-medium bg-gray-50">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                {activeTab === "tl" && (
                  <th className="p-3 text-left">Employees</th>
                )}
                <th className="p-3 text-left">Joined</th>
                {activeTab !== "admin" && (
                  <th className="p-3 text-left">Status</th>
                )}
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {users[activeTab].map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="p-4">{user.id}</td>
                  <td className="p-4 font-medium text-gray-800">{user.name}</td>
                  <td className="p-4 text-gray-600">{user.email}</td>

                  {activeTab === "tl" && (
                    <td className="p-4">{user.employees}</td>
                  )}

                  <td className="p-4">{user.joined}</td>

                  {activeTab !== "admin" && (
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full text-white ${
                          user.status ? "bg-green-600" : "bg-red-600"
                        }`}
                      >
                        {user.status ? "Active" : "Inactive"}
                      </span>
                    </td>
                  )}

                  <td className="p-4 text-center flex items-center gap-4 justify-center">
                    {activeTab !== "admin" && (
                      <ToggleSwitch
                        value={user.status}
                        onChange={() => toggleStatus(user.id)}
                      />
                    )}

                    <button className="text-indigo-600 hover:text-indigo-800 transition">
                      <FaEye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;

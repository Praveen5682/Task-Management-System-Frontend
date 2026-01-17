import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import getUsers from "../../../services/users/users";

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

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const usersData = data?.data;
  console.log(usersData);

  const getTitle = () => {
    if (activeTab === "admin") return "Admin Users";
    if (activeTab === "tl") return "Team Leaders";
    return "Employees";
  };

  const filteredUsers =
    usersData?.filter((user) =>
      activeTab === "admin"
        ? user.role === 1
        : activeTab === "tl"
          ? user.role === 2
          : user.role === 3,
    ) || [];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            User Management
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage admins, team leaders and employees
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-fit mb-6 ">
        {["admin", "tl", "employee"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
              activeTab === tab
                ? "bg-green-600 text-white shadow-sm cursor-pointer"
                : "text-gray-600 hover:bg-white cursor-pointer"
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

      {/* Table Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4 text-left">User</th>
              <th className="px-6 py-4 text-left">Role</th>

              {activeTab === "tl" && (
                <th className="px-6 py-4 text-left">Employees</th>
              )}

              <th className="px-6 py-4 text-left">Joined</th>
              <th className="px-6 py-4 text-left">Last Active</th>

              {activeTab !== "admin" && (
                <th className="px-6 py-4 text-left">Status</th>
              )}

              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {filteredUsers.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                {/* User */}
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{user.email}</p>
                </td>

                {/* Role */}
                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    {(user.role === 1 && "Admin") ||
                      (user.role === 2 && "Team Leader") ||
                      (user.role === 3 && "Employee")}
                  </span>
                </td>

                {/* Employees (TL only) */}
                {activeTab === "tl" && (
                  <td className="px-6 py-4 text-gray-700">{user.employees}</td>
                )}

                {/* Joined */}
                <td className="px-6 py-4 text-gray-600">{user.joined}</td>

                {/* Last Active */}
                <td className="px-6 py-4 text-gray-500">{user.lastActive}</td>

                {/* Status */}
                {activeTab !== "admin" && (
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                        user.status
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-red-50 text-red-600 border border-red-200"
                      }`}
                    >
                      {user.status ? "Active" : "Inactive"}
                    </span>
                  </td>
                )}

                {/* Actions */}
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    {activeTab !== "admin" && (
                      <ToggleSwitch
                        value={user.status}
                        onChange={() => toggleStatus(user.id)}
                      />
                    )}

                    <button
                      className="p-2 rounded-lg hover:bg-indigo-50 text-gray-500 transition cursor-pointer"
                      title="View User"
                    >
                      <FaEye size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;

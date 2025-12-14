import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const ToggleSwitch = ({ value, onChange }) => (
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

const MyTeamMembers = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Rahul",
      email: "rahul@example.com",
      joined: "2025-02-01",
      lastActive: "2 hours ago",
      status: true,
    },
    {
      id: 2,
      name: "Vimal",
      email: "vimal@example.com",
      joined: "2025-02-05",
      lastActive: "1 day ago",
      status: false,
    },
  ]);

  const toggleStatus = (id) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: !m.status } : m))
    );
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          My Team Members
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage employees assigned to you
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4 text-left">Employee</th>
              <th className="px-6 py-4 text-left">Joined</th>
              <th className="px-6 py-4 text-left">Last Active</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {members.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                {/* User */}
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </td>

                {/* Joined */}
                <td className="px-6 py-4 text-gray-600">{user.joined}</td>

                {/* Last Active */}
                <td className="px-6 py-4 text-gray-500">{user.lastActive}</td>

                {/* Status */}
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

                {/* Actions */}
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end items-center gap-3">
                    <ToggleSwitch
                      value={user.status}
                      onChange={() => toggleStatus(user.id)}
                    />

                    <button
                      className="p-2 rounded-lg hover:bg-indigo-50 text-gray-500"
                      title="View Employee"
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

export default MyTeamMembers;

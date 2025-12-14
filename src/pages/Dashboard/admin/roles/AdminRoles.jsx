import React, { useState } from "react";
import { FaEdit, FaTrash, FaUserShield } from "react-icons/fa";
import Button from "../../../../components/Button";
import CreateRoleModal from "./CreateRolesModal";
import EditRoleModal from "./EditRolesModal";

const AdminRoles = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editRole, setEditRole] = useState(null);

  const SYSTEM_ROLES = ["Admin", "Team Lead", "Employee"];

  const [roles, setRoles] = useState({
    active: [
      {
        id: 1,
        name: "Admin",
        permissions: "Full system access",
        description: "Manage users, roles, projects, reports",
        status: true,
        system: true,
      },
      {
        id: 2,
        name: "Team Lead",
        permissions: "Project & team access",
        description: "Manage team tasks and reports",
        status: true,
        system: true,
      },
    ],
    inactive: [
      {
        id: 3,
        name: "Employee",
        permissions: "Task access",
        description: "View and update assigned tasks",
        status: false,
        system: true,
      },
    ],
  });

  /* ===================== TOGGLE ===================== */

  const ToggleSwitch = ({ value, onChange }) => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition" />
      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition" />
    </label>
  );

  const toggleStatus = (id) => {
    setRoles((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((r) =>
        r.id === id ? { ...r, status: !r.status } : r
      ),
    }));
  };

  /* ===================== ACTIONS ===================== */

  const handleEdit = (role) => {
    setEditRole(role);
    setOpenEditModal(true);
  };

  const handleUpdateRole = (updatedRole) => {
    setRoles((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((r) =>
        r.id === updatedRole.id ? updatedRole : r
      ),
    }));
    setOpenEditModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      setRoles((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab].filter((r) => r.id !== id),
      }));
    }
  };

  const handleCreateRole = (newRole) => {
    setRoles((prev) => ({
      ...prev,
      active: [newRole, ...prev.active],
    }));
    setOpenCreateModal(false);
  };

  /* ===================== UI ===================== */

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Roles & Permissions
        </h2>
        <Button
          disabled
          className="flex items-center gap-2 bg-gray-300 text-gray-500 cursor-not-allowed"
        >
          <FaUserShield size={14} /> Create Role
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-fit mb-6">
        {["active", "inactive"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
              activeTab === tab
                ? "bg-green-600 text-white shadow-sm"
                : "text-gray-600 hover:bg-white"
            }`}
          >
            {tab === "active" ? "Active" : "Inactive"}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4 text-left">Role Name</th>
              <th className="px-6 py-4 text-left">Permissions</th>
              <th className="px-6 py-4 text-left">Description</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {roles[activeTab].map((role) => (
              <tr key={role.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {role.name}
                </td>
                <td className="px-6 py-4 text-gray-700">{role.permissions}</td>
                <td className="px-6 py-4 text-gray-700">{role.description}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      role.status
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-600 border border-red-200"
                    }`}
                  >
                    {role.status ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-end items-center gap-3">
                  <ToggleSwitch
                    value={role.status}
                    onChange={() => toggleStatus(role.id)}
                  />
                  <button
                    className="p-2 rounded-lg hover:bg-indigo-50 text-gray-500"
                    onClick={() => handleEdit(role)}
                    title="Edit Role"
                  >
                    <FaEdit size={16} />
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-red-50 text-red-600"
                    onClick={() => handleDelete(role.id)}
                    title="Delete Role"
                  >
                    <FaTrash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {openCreateModal && (
        <CreateRoleModal
          open={openCreateModal}
          onClose={() => setOpenCreateModal(false)}
          onCreate={handleCreateRole}
        />
      )}

      {openEditModal && editRole && (
        <EditRoleModal
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
          role={editRole}
          onUpdate={handleUpdateRole}
        />
      )}
    </div>
  );
};

export default AdminRoles;

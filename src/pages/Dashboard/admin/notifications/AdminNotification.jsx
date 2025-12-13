import React, { useState } from "react";
import { FaEdit, FaEye, FaObjectUngroup, FaTrash } from "react-icons/fa";
import Button from "../../../../components/Button";
import CreateNotificationModal from "./CreateNotificationModal";
import EditNotificationModal from "./EditNotificationModal";

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

const AdminNotification = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editNotification, setEditNotification] = useState(null);

  const [notifications, setNotifications] = useState({
    active: [
      {
        id: 1,
        title: "Server Maintenance",
        assignedTo: "Dev Team",
        message: "Server will be down from 2-4 PM",
        status: true,
      },
      {
        id: 2,
        title: "UI Update",
        assignedTo: "UI Team",
        message: "Update login page design",
        status: true,
      },
    ],
    inactive: [
      {
        id: 3,
        title: "Old Task",
        assignedTo: "QA Team",
        message: "Previous release testing",
        status: false,
      },
    ],
  });

  const toggleStatus = (id) => {
    setNotifications((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((n) =>
        n.id === id ? { ...n, status: !n.status } : n
      ),
    }));
  };

  // Open edit modal
  const handleEdit = (notification) => {
    setEditNotification(notification);
    setOpenEditModal(true);
  };

  // Update notification after edit
  const handleUpdateNotification = (updatedNotification) => {
    setNotifications((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((n) =>
        n.id === updatedNotification.id ? updatedNotification : n
      ),
    }));
    setOpenEditModal(false);
  };

  // Delete notification
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this notification?")) {
      setNotifications((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab].filter((n) => n.id !== id),
      }));
    }
  };

  // Add new notification
  const handleCreateNotification = (newNotification) => {
    setNotifications((prev) => ({
      ...prev,
      active: [newNotification, ...prev.active],
    }));
    setOpenCreateModal(false);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Notifications</h2>
        <Button
          onClick={() => setOpenCreateModal(true)}
          className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700"
        >
          <FaObjectUngroup size={14} /> Create Notification
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
                ? "bg-green-600 text-white shadow-sm cursor-pointer"
                : "text-gray-600 hover:bg-white cursor-pointer"
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
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-left">Assigned To</th>
              <th className="px-6 py-4 text-left">Description</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {notifications[activeTab].map((n) => (
              <tr key={n.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {n.title}
                </td>
                <td className="px-6 py-4 text-gray-700">{n.assignedTo}</td>
                <td className="px-6 py-4 text-gray-700">{n.message}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      n.status
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-600 border border-red-200"
                    }`}
                  >
                    {n.status ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right flex items-center justify-end gap-3">
                  <ToggleSwitch
                    value={n.status}
                    onChange={() => toggleStatus(n.id)}
                  />
                  <button
                    className="p-2 rounded-lg hover:bg-indigo-50 text-gray-500 transition"
                    title="Edit Notification"
                    onClick={() => handleEdit(n)}
                  >
                    <FaEdit size={16} />
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition"
                    title="Delete Notification"
                    onClick={() => handleDelete(n.id)}
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
        <CreateNotificationModal
          open={openCreateModal}
          onClose={() => setOpenCreateModal(false)}
          onCreate={handleCreateNotification}
        />
      )}

      {openEditModal && editNotification && (
        <EditNotificationModal
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
          onUpdate={handleUpdateNotification}
          notification={editNotification}
        />
      )}
    </div>
  );
};

export default AdminNotification;

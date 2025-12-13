import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "../../../../components/Button";

const EditNotificationModal = ({ open, onClose, onUpdate, notification }) => {
  const [form, setForm] = useState({
    title: "",
    message: "",
    type: "info",
    date: "",
  });

  // Prefill form when notification changes
  useEffect(() => {
    if (notification) {
      setForm({
        title: notification.title || "",
        message: notification.message || "",
        type: notification.type || "info",
        date: notification.date || "",
      });
    }
  }, [notification]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!form.title || !form.message || !form.date) return;

    const updatedNotification = {
      ...notification, // keep id
      ...form,
    };

    onUpdate(updatedNotification);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Edit Notification</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            name="title"
            placeholder="Notification Title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />

          <textarea
            name="message"
            placeholder="Notification Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="info">Info</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>

          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-6">
          <Button
            onClick={onClose}
            className="border text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-green-600 text-white hover:bg-green-700"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditNotificationModal;

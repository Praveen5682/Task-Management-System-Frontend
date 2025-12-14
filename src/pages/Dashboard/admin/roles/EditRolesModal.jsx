import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "../../../../components/Button";

const EditRolesModal = ({ open, onClose, onUpdate, role }) => {
  const [form, setForm] = useState({
    name: "",
    permissions: "",
    description: "",
  });

  useEffect(() => {
    if (role) {
      setForm({
        name: role.name,
        permissions: role.permissions,
        description: role.description,
      });
    }
  }, [role]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const updatedRole = {
      ...role,
      ...form,
    };
    onUpdate(updatedRole);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Edit Role</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            name="name"
            value={form.name}
            disabled={role?.system}
            className="w-full border rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed"
          />

          <input
            name="permissions"
            value={form.permissions}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-6">
          <Button onClick={onClose} className="border text-gray-600">
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

export default EditRolesModal;

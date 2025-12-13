import React from "react";
import { FaTimes } from "react-icons/fa";
import Button from "../Button";

const AssignDropdownModal = ({
  open,
  onClose,
  value,
  onChange,
  users,
  onSave,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Assign Task</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>

        {/* Dropdown */}
        <div className="space-y-4">
          <select
            value={value}
            onChange={onChange}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="" disabled>
              Select assignee
            </option>
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-6">
          <Button
            onClick={onClose}
            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </Button>
          <Button
            onClick={onSave}
            className="bg-green-600 text-white hover:bg-green-700"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssignDropdownModal;

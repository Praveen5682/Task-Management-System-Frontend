import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "../../../../components/Button";

const EditTaskModal = ({ open, onClose, onCreate, task }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    assignedTo: "",
    priority: "Medium",
    dueDate: "",
  });

  useEffect(() => {
    if (task) setForm(task);
  }, [task]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onCreate(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Edit Task</h3>
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
            placeholder="Task title"
            value={form.title}
            className="w-full border rounded-md px-3 py-2"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Task description"
            value={form.description}
            className="w-full border rounded-md px-3 py-2"
            onChange={handleChange}
          />

          <input
            name="assignedTo"
            placeholder="Assign to"
            value={form.assignedTo}
            className="w-full border rounded-md px-3 py-2"
            onChange={handleChange}
          />

          <div className="flex gap-3">
            <select
              name="priority"
              value={form.priority}
              className="w-1/2 border rounded-md px-3 py-2 bg-green-50 text-green-800"
              onChange={handleChange}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <input
              type="date"
              name="dueDate"
              value={form.dueDate}
              className="w-1/2 border rounded-md px-3 py-2"
              onChange={handleChange}
            />
          </div>
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

export default EditTaskModal;

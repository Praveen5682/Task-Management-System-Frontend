import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "../../../../components/Button";

const CreateTeamModal = ({ open, onClose, onCreate }) => {
  const [form, setForm] = useState({
    teamName: "",
    teamLeader: "",
    members: 0,
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!form.teamName || !form.teamLeader || !form.department) return;
    const newTeam = {
      id: Date.now(), // simple unique id
      ...form,
      members: Number(form.members),
      status: true,
    };
    onCreate(newTeam);
    onClose();
    setForm({ teamName: "", teamLeader: "", members: 0, department: "" });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Create Team</h3>
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
            name="teamName"
            placeholder="Team Name"
            value={form.teamName}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            name="teamLeader"
            placeholder="Team Leader"
            value={form.teamLeader}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            name="members"
            type="number"
            placeholder="Number of Members"
            value={form.members}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
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
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTeamModal;

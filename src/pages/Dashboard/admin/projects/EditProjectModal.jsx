import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "../../../../components/Button";

const EditProjectModal = ({ open, onClose, onUpdate, project }) => {
  const [form, setForm] = useState({
    projectName: "",
    team: "",
    description: "",
  });

  useEffect(() => {
    if (project) {
      setForm({
        projectName: project.projectName || "",
        team: project.team || "",
        description: project.description || "",
      });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!form.projectName || !form.team || !form.description) return;

    const updatedProject = {
      ...project,
      ...form,
    };

    onUpdate(updatedProject);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Edit Project</h3>
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
            name="projectName"
            placeholder="Project Name"
            value={form.projectName}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />

          <input
            name="team"
            placeholder="Assigned Team"
            value={form.team}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={form.description}
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

export default EditProjectModal;

import React, { useState } from "react";
import { FaEdit, FaTrash, FaFolderOpen } from "react-icons/fa";
import Button from "../../../../components/Button";
import CreateProjectModal from "./CreateProjectModal";
import EditProjectModal from "./EditProjectModal";

const AdminProjects = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editProject, setEditProject] = useState(null);

  const [projects, setProjects] = useState({
    active: [
      {
        id: 1,
        projectName: "HR Management System",
        team: "Dev Team",
        description: "Employee onboarding & payroll",
        status: true,
      },
      {
        id: 2,
        projectName: "Admin Dashboard",
        team: "UI Team",
        description: "Role & permission management",
        status: true,
      },
    ],
    inactive: [
      {
        id: 3,
        projectName: "Legacy CRM",
        team: "QA Team",
        description: "Old CRM maintenance",
        status: false,
      },
    ],
  });

  /* ================= TOGGLE ================= */

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
    setProjects((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((p) =>
        p.id === id ? { ...p, status: !p.status } : p
      ),
    }));
  };

  /* ================= ACTIONS ================= */

  const handleEdit = (project) => {
    setEditProject(project);
    setOpenEditModal(true);
  };

  const handleUpdateProject = (updatedProject) => {
    setProjects((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((p) =>
        p.id === updatedProject.id ? updatedProject : p
      ),
    }));
    setOpenEditModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab].filter((p) => p.id !== id),
      }));
    }
  };

  const handleCreateProject = (newProject) => {
    setProjects((prev) => ({
      ...prev,
      active: [newProject, ...prev.active],
    }));
    setOpenCreateModal(false);
  };

  /* ================= UI ================= */

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Projects</h2>
        <Button
          onClick={() => setOpenCreateModal(true)}
          className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700"
        >
          <FaFolderOpen size={14} /> Create Project
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
              <th className="px-6 py-4 text-left">Project Name</th>
              <th className="px-6 py-4 text-left">Team</th>
              <th className="px-6 py-4 text-left">Description</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {projects[activeTab].map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {p.projectName}
                </td>
                <td className="px-6 py-4 text-gray-700">{p.team}</td>
                <td className="px-6 py-4 text-gray-700">{p.description}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      p.status
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-600 border border-red-200"
                    }`}
                  >
                    {p.status ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-end items-center gap-3">
                  <ToggleSwitch
                    value={p.status}
                    onChange={() => toggleStatus(p.id)}
                  />
                  <button
                    className="p-2 rounded-lg hover:bg-indigo-50 text-gray-500"
                    onClick={() => handleEdit(p)}
                  >
                    <FaEdit size={16} />
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-red-50 text-red-600"
                    onClick={() => handleDelete(p.id)}
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
        <CreateProjectModal
          open={openCreateModal}
          onClose={() => setOpenCreateModal(false)}
          onCreate={handleCreateProject}
        />
      )}

      {openEditModal && editProject && (
        <EditProjectModal
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
          project={editProject}
          onUpdate={handleUpdateProject}
        />
      )}
    </div>
  );
};

export default AdminProjects;

import React, { useState } from "react";
import { FaEdit, FaEye, FaObjectUngroup, FaTrash } from "react-icons/fa";
import Button from "../../../../components/Button";
import CreateTeamModal from "./CreateTeamModal";
import EditTeamModal from "./EditTeamModal";

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

const AdminTeam = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [openTeamModal, setOpenTeamModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editTeam, setEditTeam] = useState(null);

  const [teams, setTeams] = useState({
    active: [
      {
        id: 1,
        teamName: "Development Team",
        teamLeader: "Praveen Kumar",
        members: 8,
        department: "Engineering",
        status: true,
      },
      {
        id: 2,
        teamName: "UI/UX Team",
        teamLeader: "Swetha R",
        members: 4,
        department: "Design",
        status: true,
      },
    ],
    inactive: [
      {
        id: 3,
        teamName: "Testing Team",
        teamLeader: "Arun Kumar",
        members: 5,
        department: "Quality Assurance",
        status: false,
      },
    ],
  });

  const toggleStatus = (id) => {
    setTeams((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((t) =>
        t.id === id ? { ...t, status: !t.status } : t
      ),
    }));
  };

  // Open edit modal and prefill data
  const handleEdit = (team) => {
    setEditTeam(team);
    setOpenEditModal(true);
  };

  // Update team after editing
  const handleUpdateTeam = (updatedTeam) => {
    setTeams((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((t) =>
        t.id === updatedTeam.id ? updatedTeam : t
      ),
    }));
    setOpenEditModal(false);
  };

  // Delete team
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this team?")) {
      setTeams((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab].filter((t) => t.id !== id),
      }));
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Team Management
        </h2>
        <Button
          onClick={() => setOpenTeamModal(true)}
          className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700"
        >
          <FaObjectUngroup size={14} /> Create Team
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
            {tab === "active" ? "Active Teams" : "Inactive Teams"}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4 text-left">Team Name</th>
              <th className="px-6 py-4 text-left">Team Leader</th>
              <th className="px-6 py-4 text-left">Members</th>
              <th className="px-6 py-4 text-left">Department</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {teams[activeTab].map((team) => (
              <tr key={team.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {team.teamName}
                </td>
                <td className="px-6 py-4 text-gray-700">{team.teamLeader}</td>
                <td className="px-6 py-4 text-gray-700">{team.members}</td>
                <td className="px-6 py-4 text-gray-700">{team.department}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      team.status
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-600 border border-red-200"
                    }`}
                  >
                    {team.status ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right flex items-center justify-end gap-3">
                  <ToggleSwitch
                    value={team.status}
                    onChange={() => toggleStatus(team.id)}
                  />
                  <button
                    className="p-2 rounded-lg hover:bg-indigo-50 text-gray-500 transition"
                    title="Edit Team"
                    onClick={() => handleEdit(team)}
                  >
                    <FaEdit size={16} />
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition"
                    title="Delete Team"
                    onClick={() => handleDelete(team.id)}
                  >
                    <FaTrash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Team Modal */}
      {openTeamModal && (
        <CreateTeamModal
          open={openTeamModal}
          onClose={() => setOpenTeamModal(false)}
          onClick={() => console.log("Team created!")}
        />
      )}

      {/* Edit Team Modal */}
      {openEditModal && editTeam && (
        <EditTeamModal
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
          onCreate={handleUpdateTeam} // updates the team in table
          team={editTeam} // pass team to prefill modal
        />
      )}
    </div>
  );
};

export default AdminTeam;

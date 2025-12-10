import React from "react";

const AdminTeam = () => {
  const teams = [
    {
      id: 1,
      teamName: "Development Team",
      teamLeader: "Praveen Kumar",
      members: 8,
      department: "Engineering",
      status: "Active",
    },
    {
      id: 2,
      teamName: "UI/UX Team",
      teamLeader: "Swetha R",
      members: 4,
      department: "Design",
      status: "Active",
    },
    {
      id: 3,
      teamName: "Testing Team",
      teamLeader: "Arun Kumar",
      members: 5,
      department: "Quality Assurance",
      status: "Inactive",
    },
  ];

  const statusColor = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-5">Teams Management</h2>

      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="p-3 border-b">ID</th>
              <th className="p-3 border-b">Team Name</th>
              <th className="p-3 border-b">Team Leader</th>
              <th className="p-3 border-b">Members</th>
              <th className="p-3 border-b">Department</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((team) => (
              <tr key={team.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{team.id}</td>
                <td className="p-3 border-b font-medium">{team.teamName}</td>
                <td className="p-3 border-b">{team.teamLeader}</td>
                <td className="p-3 border-b">{team.members} Members</td>
                <td className="p-3 border-b">{team.department}</td>

                <td className="p-3 border-b">
                  <span
                    className={`px-3 py-1 rounded-md text-sm font-medium ${statusColor(
                      team.status
                    )}`}
                  >
                    {team.status}
                  </span>
                </td>

                <td className="p-3 border-b">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-sm hover:bg-red-200">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTeam;

import React from "react";

const AdminProjects = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Website",
      description: "Full MERN e-commerce platform with admin panel.",
      manager: "Praveen",
      team: ["Arun", "Swetha", "Vishnu"],
      progress: 75,
      deadline: "2025-02-15",
      status: "In Progress",
    },
    {
      id: 2,
      name: "School Management System",
      description: "Attendance, grading and parent communication module.",
      manager: "John",
      team: ["Meera", "Kavin"],
      progress: 100,
      deadline: "2025-01-20",
      status: "Completed",
    },
    {
      id: 3,
      name: "Travel Booking App",
      description: "Flight, hotel & bus booking application.",
      manager: "Alisha",
      team: ["Rahul", "Praveen"],
      progress: 40,
      deadline: "2025-03-05",
      status: "Pending",
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-green-100 text-green-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  const progressColor = (progress) => {
    if (progress === 100) return "bg-green-500";
    if (progress >= 60) return "bg-green-500";
    return "bg-green-500";
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-5">Admin Project Management</h2>

      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="p-3 border-b">ID</th>
              <th className="p-3 border-b">Project Name</th>
              <th className="p-3 border-b">Description</th>
              <th className="p-3 border-b">Project Manager</th>
              <th className="p-3 border-b">Team Members</th>
              <th className="p-3 border-b">Progress</th>
              <th className="p-3 border-b">Deadline</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{project.id}</td>

                <td className="p-3 border-b font-medium">{project.name}</td>

                <td className="p-3 border-b text-sm text-gray-600">
                  {project.description}
                </td>

                <td className="p-3 border-b">{project.manager}</td>

                <td className="p-3 border-b">
                  {project.team.map((member, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs mr-1"
                    >
                      {member}
                    </span>
                  ))}
                </td>

                <td className="p-3 border-b w-40">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${progressColor(
                        project.progress
                      )}`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 ml-1">
                    {project.progress}%
                  </span>
                </td>

                <td className="p-3 border-b">{project.deadline}</td>

                <td className="p-3 border-b">
                  <span
                    className={`px-3 py-1 rounded-md text-sm font-medium ${statusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </td>

                <td className="p-3 border-b">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm hover:bg-green-200">
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

export default AdminProjects;

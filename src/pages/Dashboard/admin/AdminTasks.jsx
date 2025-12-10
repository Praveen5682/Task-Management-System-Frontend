import React from "react";

const AdminTasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Review new user registrations",
      description: "Verify identity and approve newly registered users.",
      assignedTo: "John Doe",
      priority: "High",
      dueDate: "2025-01-12",
      status: "Pending",
    },
    {
      id: 2,
      title: "Approve blog submissions",
      description: "Check content quality & publish approved posts.",
      assignedTo: "Alisha",
      priority: "Medium",
      dueDate: "2025-01-14",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Resolve support tickets",
      description: "Review and close open support tickets.",
      assignedTo: "Praveen",
      priority: "Low",
      dueDate: "2025-01-08",
      status: "Completed",
    },
  ];

  const badgeColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-red-100 text-red-700";
    }
  };

  const priorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-5">Admin Task Management</h2>

      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="p-3 border-b">ID</th>
              <th className="p-3 border-b">Task Title</th>
              <th className="p-3 border-b">Description</th>
              <th className="p-3 border-b">Assigned To</th>
              <th className="p-3 border-b">Priority</th>
              <th className="p-3 border-b">Due Date</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{task.id}</td>

                <td className="p-3 border-b font-medium">{task.title}</td>

                <td className="p-3 border-b text-sm text-gray-600">
                  {task.description}
                </td>

                <td className="p-3 border-b">{task.assignedTo}</td>

                <td className="p-3 border-b">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${priorityColor(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </span>
                </td>

                <td className="p-3 border-b">{task.dueDate}</td>

                <td className="p-3 border-b">
                  <span
                    className={`px-3 py-1 rounded-md text-sm font-medium ${badgeColor(
                      task.status
                    )}`}
                  >
                    {task.status}
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

export default AdminTasks;

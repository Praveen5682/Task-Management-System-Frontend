import React from "react";
import { FaPlus, FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";

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
        return "bg-green-50 text-green-600 border border-green-200";
      case "In Progress":
        return "bg-green-50 text-green-700 border border-green-200";
      default:
        return "bg-red-50 text-red-600 border border-red-200";
    }
  };

  const priorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-50 text-red-600 border border-red-200";
      case "Medium":
        return "bg-green-50 text-green-600 border border-green-200";
      default:
        return "bg-gray-50 text-gray-600 border border-gray-300";
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Tasks</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage admin-level tasks and approvals
          </p>
        </div>

        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer shadow-sm hover:bg-green-700 transition">
          <FaPlus size={14} />
          New Task
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4 text-left">Task</th>
              <th className="px-6 py-4 text-left">Assignee</th>
              <th className="px-6 py-4 text-left">Priority</th>
              <th className="px-6 py-4 text-left">Due</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50 transition">
                {/* Task Info */}
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{task.title}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {task.description}
                  </p>
                </td>

                <td className="px-6 py-4 text-gray-700">{task.assignedTo}</td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${priorityColor(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-600">{task.dueDate}</td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${badgeColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2  group-hover:opacity-100 transition">
                    <button className="p-2 rounded-lg hover:bg-indigo-50 text-gray-500 cursor-pointer">
                      <FaUserPlus size={14} />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-indigo-50 text-gray-500 cursor-pointer">
                      <FaEdit size={14} />
                    </button>

                    <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 cursor-pointer">
                      <FaTrash size={14} />
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

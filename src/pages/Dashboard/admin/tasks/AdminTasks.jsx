import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import CreateTaskModal from "./CreateTaskModal";
import EditTaskModal from "./EditTaskModal";
import AssignDropdownModal from "../../../../components/Dialogues/AssignDropdown";

const AdminTasks = () => {
  const initialTasks = [
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

  const usersList = ["John Doe", "Alisha", "Praveen", "Sophia"];

  const [tasks, setTasks] = useState(initialTasks);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [assignTaskId, setAssignTaskId] = useState(null); // which task dropdown is open
  const [assignedUser, setAssignedUser] = useState(""); // currently selected user in dropdown

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

  const handleEdit = (task) => {
    setSelectedTask(task);
    setOpenEditModal(true);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
    setOpenEditModal(false);
  };

  const handleAssign = (taskId) => {
    setAssignTaskId(assignTaskId === taskId ? null : taskId); // toggle dropdown
    const task = tasks.find((t) => t.id === taskId);
    setAssignedUser(task.assignedTo);
  };

  const saveAssignment = (taskId) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, assignedTo: assignedUser } : t
      )
    );
    setAssignTaskId(null);
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

        <button
          onClick={() => setOpenCreateModal(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer shadow-sm hover:bg-green-700 transition"
        >
          <FaPlus size={14} /> Create Task
        </button>
      </div>

      {/* Table */}
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
              <tr
                key={task.id}
                className="hover:bg-gray-50 transition relative"
              >
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{task.title}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {task.description}
                  </p>
                </td>

                <td className="px-6 py-4 text-gray-700 flex items-center gap-2">
                  {task.assignedTo}
                  <button
                    className="p-1 rounded hover:bg-green-50 text-green-600"
                    onClick={() => handleAssign(task.id)}
                  >
                    <FaUserPlus />
                  </button>
                  {assignTaskId === task.id && (
                    <div className="absolute bg-white shadow-lg p-2 rounded mt-10">
                      {assignTaskId && (
                        <AssignDropdownModal
                          open={!!assignTaskId}
                          onClose={() => setAssignTaskId(null)}
                          value={assignedUser}
                          onChange={(e) => setAssignedUser(e.target.value)}
                          users={usersList}
                          onSave={() => saveAssignment(assignTaskId)}
                        />
                      )}
                      <button
                        onClick={() => saveAssignment(task.id)}
                        className="mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                      >
                        Save
                      </button>
                    </div>
                  )}
                </td>

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

                <td className="px-6 py-4 text-right flex gap-2 justify-end">
                  <button
                    className="p-2 rounded-lg hover:bg-indigo-50 text-gray-500 cursor-pointer"
                    onClick={() => handleAssign(task.id)}
                  >
                    <FaUserPlus size={14} />
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-indigo-50 text-gray-500 cursor-pointer"
                    onClick={() => handleEdit(task)}
                  >
                    <FaEdit size={14} />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 cursor-pointer">
                    <FaTrash size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Task Modal */}
      <CreateTaskModal
        open={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        onCreate={(newTask) => setTasks((prev) => [newTask, ...prev])}
      />

      {/* Edit Task Modal */}
      {selectedTask && (
        <EditTaskModal
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
          onCreate={handleUpdateTask}
          task={selectedTask}
        />
      )}
    </div>
  );
};

export default AdminTasks;

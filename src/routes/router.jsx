import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import DashboardLayout from "../components/layout/DashboardLayout";
import AdminHome from "../pages/Dashboard/admin/AdminHome";
import AdminTasks from "../pages/Dashboard/admin/tasks/AdminTasks";
import AdminTeam from "../pages/Dashboard/admin/team/AdminTeam";
import AdminUsers from "../pages/Dashboard/admin/AdminUsers";
import AdminNotification from "../pages/Dashboard/admin/notifications/AdminNotification";
import AdminRoles from "../pages/Dashboard/admin/roles/AdminRoles";
import AdminProjects from "../pages/Dashboard/admin/projects/AdminProjects";
import AdminReports from "../pages/Dashboard/admin/reports/AdminReports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <AdminHome />, role: "admin" },
      { path: "users", element: <AdminUsers />, role: "admin" },
      { path: "tasks", element: <AdminTasks />, role: "admin" },
      { path: "projects", element: <AdminProjects />, role: "admin" },
      { path: "team", element: <AdminTeam />, role: "admin" },
      { path: "notifications", element: <AdminNotification />, role: "admin" },
      { path: "roles", element: <AdminRoles />, role: "admin" },
      { path: "reports", element: <AdminReports />, role: "admin" },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

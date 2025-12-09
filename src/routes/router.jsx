import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import DashboardLayout from "../components/layout/DashboardLayout";
import AdminHome from "../pages/Dashboard/admin/AdminHome";
import AdminTasks from "../pages/Dashboard/admin/AdminTasks";
import AdminProjects from "../pages/Dashboard/admin/AdminProjects";
import AdminTeam from "../pages/Dashboard/admin/AdminTeam";
import AdminNotifications from "../pages/Dashboard/admin/AdminNotifications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <AdminHome />, role: "admin" },
      { path: "tasks", element: <AdminTasks />, role: "admin" },
      { path: "projects", element: <AdminProjects />, role: "admin" },
      { path: "team", element: <AdminTeam />, role: "admin" },
      { path: "notifications", element: <AdminNotifications />, role: "admin" },
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

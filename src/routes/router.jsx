import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import DashboardLayout from "../components/layout/DashboardLayout";
import AdminHome from "../pages/Dashboard/admin/AdminHome";
import AdminTasks from "../pages/Dashboard/admin/tasks/AdminTasks";
import AdminProjects from "../pages/Dashboard/admin/AdminProjects";
import AdminTeam from "../pages/Dashboard/admin/team/AdminTeam";
import AdminUsers from "../pages/Dashboard/admin/AdminUsers";

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

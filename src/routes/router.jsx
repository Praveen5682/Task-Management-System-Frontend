import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";

// Auth Pages
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";

// Admin Dashboard Pages
import Dashboard from "../pages/Dashboard/admin/Dashboard";
import AdminUsers from "../pages/Dashboard/admin/AdminUsers";
import AdminRoles from "../pages/Dashboard/admin/roles/AdminRoles";
import AdminProjects from "../pages/Dashboard/admin/projects/AdminProjects";
import AdminTeam from "../pages/Dashboard/admin/team/AdminTeam";
import AdminTasks from "../pages/Dashboard/admin/tasks/AdminTasks";
import AdminReports from "../pages/Dashboard/admin/reports/AdminReports";
import AdminNotification from "../pages/Dashboard/admin/notifications/AdminNotification";
import SettingsPage from "../pages/Dashboard/Settings";
import ProtectedRoute from "./protectedRoute";

const router = createBrowserRouter([
  // Main dashboard layout
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      // Admin Home
      {
        index: true,
        element: (
          <ProtectedRoute element={<Dashboard />} allowedRoles={[1, 2, 3]} />
        ),
      },
      // Users management
      {
        path: "users",
        element: <ProtectedRoute element={<AdminUsers />} allowedRoles={[1]} />,
      },
      // Roles & Permissions
      {
        path: "roles",
        element: <ProtectedRoute element={<AdminRoles />} allowedRoles={[1]} />,
      },
      // Projects
      {
        path: "projects",
        element: (
          <ProtectedRoute element={<AdminProjects />} allowedRoles={[1]} />
        ),
      },
      // Teams
      {
        path: "team",
        element: <ProtectedRoute element={<AdminTeam />} allowedRoles={[1]} />,
      },
      // Tasks
      {
        path: "tasks",
        element: <ProtectedRoute element={<AdminTasks />} allowedRoles={[1]} />,
      },
      // Reports
      {
        path: "reports",
        element: (
          <ProtectedRoute element={<AdminReports />} allowedRoles={[1]} />
        ),
      },
      // Notifications
      {
        path: "notifications",
        element: (
          <ProtectedRoute element={<AdminNotification />} allowedRoles={[1]} />
        ),
      },
      // Settings (admin can access)
      {
        path: "settings",
        element: (
          <ProtectedRoute element={<SettingsPage />} allowedRoles={[1]} />
        ),
      },
    ],
  },
  // Auth routes
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

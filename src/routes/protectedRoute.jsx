import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" replace />;

  if (!allowedRoles.includes(user.role)) return <Navigate to="/" replace />;

  return element;
};

export default ProtectedRoute;

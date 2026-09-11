import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function RoleRedirect() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  switch (user.role) {
    case "FARMER":
      return <Navigate to="/farmer/dashboard" replace />;

    case "AGRI_ENTREPRENEUR":
      return (
        <Navigate
          to="/business/dashboard"
          replace
        />
      );

    case "ADMIN":
      return <Navigate to="/admin/dashboard" replace />;

    default:
      return <Navigate to="/unauthorized" replace />;
  }
}
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RoleRedirect from "./pages/RoleRedirect";
import FarmerDashboard from "./pages/FarmerDashboard";
import BusinessDashboard from "./pages/BusinessDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Unauthorized from "./pages/Unauthorized";

import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/login" replace />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          <Route
            path="/dashboard"
            element={<RoleRedirect />}
          />

          <Route
            path="/unauthorized"
            element={<Unauthorized />}
          />

          {/* FARMER */}
          <Route
            element={
              <ProtectedRoute
                allowedRoles={["FARMER"]}
              />
            }
          >
            <Route
              path="/farmer/dashboard"
              element={<FarmerDashboard />}
            />
          </Route>

          {/* AGRI-ENTREPRENEUR */}
          <Route
            element={
              <ProtectedRoute
                allowedRoles={[
                  "AGRI_ENTREPRENEUR",
                ]}
              />
            }
          >
            <Route
              path="/business/dashboard"
              element={<BusinessDashboard />}
            />
          </Route>

          {/* ADMIN */}
          <Route
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN"]}
              />
            }
          >
            <Route
              path="/admin/dashboard"
              element={<AdminDashboard />}
            />
          </Route>

          <Route
            path="*"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
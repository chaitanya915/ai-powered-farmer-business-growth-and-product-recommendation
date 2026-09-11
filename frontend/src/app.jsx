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
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import Settings from "./pages/Settings";
import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

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


  {/* Authenticated profile routes */}

  <Route element={<ProtectedRoute />}>

    <Route
      path="/profile"
      element={<Profile />}
    />

    <Route
      path="/profile/edit"
      element={<EditProfile />}
    />

    <Route
      path="/profile/change-password"
      element={<ChangePassword />}
    />

    <Route
      path="/settings"
      element={<Settings />}
    />

  </Route>


  {/* Farmer */}

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


  {/* Agri-Entrepreneur */}

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


  {/* Admin */}

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

</Routes>
        <Route
  element={<ProtectedRoute />}
/>
<Route element={<ProtectedRoute />}>

  <Route
    path="/profile"
    element={<Profile />}
  />

  <Route
    path="/profile/edit"
    element={<EditProfile />}
  />

  <Route
    path="/profile/change-password"
    element={<ChangePassword />}
  />

  <Route
    path="/settings"
    element={<Settings />}
  />

</Route>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-bold text-green-800">
        Admin Dashboard
      </h1>

      <p className="mt-2">
        Welcome, {user?.email}
      </p>

      <p className="mt-4">
        Role: {user?.role}
      </p>

      <button
        onClick={logout}
        className="mt-6 rounded-lg bg-red-600 px-5 py-3 text-white"
      >
        Logout
      </button>
    </div>
  );
}
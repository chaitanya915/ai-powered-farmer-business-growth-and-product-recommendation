import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AppNavbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const dashboardPath =
    user?.role === "FARMER"
      ? "/farmer/dashboard"
      : user?.role === "AGRI_ENTREPRENEUR"
        ? "/business/dashboard"
        : "/admin/dashboard";

  const isActive = (path) =>
    location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        <Link
          to={dashboardPath}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-xl">
            🌱
          </div>

          <div className="hidden sm:block">
            <p className="text-xs font-bold text-green-700">
              AI-POWERED
            </p>

            <p className="text-sm font-bold text-gray-900">
              Farmer Business Growth
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">

          <Link
            to={dashboardPath}
            className={`rounded-lg px-3 py-2 text-sm font-medium ${
              isActive(dashboardPath)
                ? "bg-green-100 text-green-800"
                : "text-gray-600 hover:bg-green-50"
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/profile"
            className={`rounded-lg px-3 py-2 text-sm font-medium ${
              isActive("/profile")
                ? "bg-green-100 text-green-800"
                : "text-gray-600 hover:bg-green-50"
            }`}
          >
            Profile
          </Link>

          <Link
            to="/settings"
            className={`rounded-lg px-3 py-2 text-sm font-medium ${
              isActive("/settings")
                ? "bg-green-100 text-green-800"
                : "text-gray-600 hover:bg-green-50"
            }`}
          >
            Settings
          </Link>

        </nav>

        <div className="flex items-center gap-3">

          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-gray-900">
              {user?.email}
            </p>

            <p className="text-xs text-green-700">
              {user?.role}
            </p>
          </div>

          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="rounded-xl border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
          >
            Logout
          </button>

        </div>
      </div>
    </header>
  );
}
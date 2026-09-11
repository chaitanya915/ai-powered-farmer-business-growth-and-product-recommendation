import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PublicNavbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const dashboardPath =
    user?.role === "FARMER"
      ? "/farmer/dashboard"
      : user?.role === "AGRI_ENTREPRENEUR"
        ? "/business/dashboard"
        : user?.role === "ADMIN"
          ? "/admin/dashboard"
          : "/dashboard";

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-700 text-2xl shadow-md">
            🌱
          </div>

          <div>
            <p className="text-sm font-bold text-green-700">
              AI-POWERED
            </p>

            <p className="text-sm font-bold text-gray-900">
              Farmer Business Growth
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-green-700"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-gray-700 hover:text-green-700"
          >
            About
          </Link>

          <Link
            to="/how-it-works"
            className="text-sm font-medium text-gray-700 hover:text-green-700"
          >
            How It Works
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <button
              onClick={() => navigate(dashboardPath)}
              className="rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Dashboard
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 sm:block"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

      </div>
    </header>
  );
}
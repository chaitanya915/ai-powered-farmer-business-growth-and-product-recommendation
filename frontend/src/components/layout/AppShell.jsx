import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { label: "Home", icon: "⌂" },
  { label: "Dashboard", icon: "▥" },
  { label: "Manual Prediction", icon: "◔", disabled: true },
  { label: "Batch Prediction", icon: "▤", disabled: true },
  { label: "Model Performance", icon: "▥", disabled: true },
  { label: "SHAP Explainability", icon: "✣", disabled: true },
];

export default function AppShell({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const dashboardPath =
    user?.role === "FARMER"
      ? "/farmer/dashboard"
      : user?.role === "AGRI_ENTREPRENEUR"
        ? "/business/dashboard"
        : "/admin/dashboard";

  const displayName =
    user?.name ||
    user?.full_name ||
    user?.email?.split("@")[0] ||
    "User";

  const initials =
    displayName
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "U";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f4f8f7] text-slate-800">

      {mobileOpen && (
        <button
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          aria-label="Close navigation"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[252px] flex-col bg-[#003d34] text-white shadow-2xl transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* Logo */}
        <div className="flex h-[78px] items-center border-b border-white/10 px-5">

          <Link
            to={dashboardPath}
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c7f5a5] text-2xl">
              🌿
            </div>

            <div className="leading-tight">
              <div className="text-[13px] font-extrabold">
                AI-Powered
              </div>

              <div className="text-[14px] font-bold">
                Farmer Business Growth
              </div>
            </div>

          </Link>

        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">

          {navItems.map((item, index) => {

            if (item.disabled) {
              return (
                <div
                  key={item.label}
                  className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-3 text-[14px] text-white/60"
                  title="Available in a later phase"
                >
                  <span className="flex h-6 w-6 items-center justify-center text-lg">
                    {item.icon}
                  </span>

                  <span>{item.label}</span>

                  <span className="ml-auto rounded-full bg-white/10 px-1.5 py-0.5 text-[9px] font-bold">
                    SOON
                  </span>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                to={dashboardPath}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-xl border-l-2 px-3 py-3 text-[14px] font-medium ${
                  index === 0
                    ? "border-emerald-300 bg-[#087458] text-white"
                    : "border-transparent text-white/85 hover:bg-white/10"
                }`}
              >
                <span className="flex h-6 w-6 items-center justify-center text-lg">
                  {item.icon}
                </span>

                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="my-4 border-t border-white/10" />

          <Link
            to="/profile"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-[14px] font-medium text-white/85 hover:bg-white/10"
          >
            <span>♙</span>
            Profile
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-[14px] font-medium text-white/85 hover:bg-white/10"
          >
            <span>⚙</span>
            Settings
          </Link>

        </nav>

        {/* Sidebar bottom */}
        <div className="hidden px-4 pb-5 lg:block">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

            <p className="text-sm font-bold text-emerald-100">
              Better Decisions
            </p>

            <p className="mt-1 text-sm text-white/70">
              Higher value from every agricultural resource.
            </p>

          </div>

        </div>

      </aside>

      {/* MAIN */}
      <div className="lg:pl-[252px]">

        {/* TOPBAR */}
        <header className="sticky top-0 z-30 flex h-[70px] items-center justify-between border-b border-slate-200 bg-white/95 px-4 shadow-sm backdrop-blur sm:px-6">

          <div className="flex items-center gap-3">

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-xl p-2 text-xl lg:hidden"
            >
              ☰
            </button>

            <div className="relative hidden w-[375px] sm:block">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400">
                ⌕
              </span>

              <input
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-emerald-400 focus:bg-white"
                placeholder="Search anything..."
              />

            </div>

          </div>

          <div className="flex items-center gap-4">

            <button className="relative rounded-xl p-2 text-xl">
              ♧
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <button
              onClick={() => navigate("/profile")}
              className="flex items-center gap-3 rounded-xl p-1.5"
            >

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-bold">
                {initials}
              </div>

              <div className="hidden text-left leading-tight md:block">
                <p className="text-[13px] font-bold">
                  {displayName}
                </p>

                <p className="text-[11px] text-slate-500">
                  {user?.role}
                </p>
              </div>

              <span className="hidden text-xs md:block">
                ⌄
              </span>

            </button>

            <button
              onClick={handleLogout}
              className="hidden rounded-lg px-2 py-1 text-xs font-semibold text-red-600 hover:bg-red-50 sm:block"
            >
              Logout
            </button>

          </div>

        </header>

        <main>
          {children}
        </main>

      </div>

    </div>
  );
}
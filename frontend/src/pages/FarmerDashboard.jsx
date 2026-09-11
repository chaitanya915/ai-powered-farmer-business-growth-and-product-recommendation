import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../services/api";
import { useAuth } from "../context/AuthContext";

import AppNavbar from "../components/layout/AppNavbar";
import FeatureCard from "../components/dashboard/FeatureCard";
import StatCard from "../components/dashboard/StatCard";
import ProfileCompletionChart from "../components/dashboard/ProfileCompletionChart";
import LoadingScreen from "../components/common/LoadingScreen";

const features = [
  {
    icon: "🤖",
    title: "AI Product Recommendation",
    description:
      "Explore suitable value-added product opportunities from agricultural resources.",
  },
  {
    icon: "📈",
    title: "Price Prediction",
    description:
      "Price intelligence interface prepared for the future forecasting module.",
  },
  {
    icon: "📊",
    title: "Demand Forecasting",
    description:
      "Future demand intelligence will help evaluate product opportunities.",
  },
  {
    icon: "🚚",
    title: "Supplier Recommendation",
    description:
      "Plan raw-material sourcing using supplier information.",
  },
  {
    icon: "🏪",
    title: "Best Market",
    description:
      "Compare potential markets using the future market recommendation engine.",
  },
  {
    icon: "💰",
    title: "Profit & ROI",
    description:
      "Evaluate business economics using deterministic calculations.",
  },
  {
    icon: "📄",
    title: "Business Plan",
    description:
      "Prepare a structured business plan after selecting an opportunity.",
  },
  {
    icon: "💬",
    title: "AI Assistant",
    description:
      "Get future AI-powered guidance for agriculture business questions.",
  },
];

export default function FarmerDashboard() {
  const { user } = useAuth();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await api.get("/profile");
        setProfile(response.data);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return <LoadingScreen message="Preparing your farmer dashboard..." />;
  }

  const completion =
    profile?.completion_percentage || 0;

  return (
    <div className="min-h-screen bg-[#f7faf5]">
      <AppNavbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Welcome */}
        <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-900 to-green-700 p-7 text-white shadow-lg sm:p-10">

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

            <div>

              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                Farmer Mode
              </span>

              <h1 className="mt-4 text-3xl font-black sm:text-4xl">
                Welcome, {profile?.name || user?.email}
              </h1>

              <p className="mt-3 max-w-2xl text-green-100">
                Turn your agricultural resources into opportunities
                with structured business decision support.
              </p>

              <Link
                to="/profile/edit"
                className="mt-6 inline-block rounded-xl bg-white px-5 py-3 font-bold text-green-800 hover:bg-green-50"
              >
                Complete Your Profile
              </Link>

            </div>

            <div className="hidden text-[100px] leading-none lg:block">
              👨‍🌾
            </div>

          </div>

        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon="👤"
            title="Profile Completion"
            value={`${completion}%`}
            description="Based on your saved profile information."
          />

          <StatCard
            icon="🌾"
            title="Raw Materials"
            value="Ready"
            description="Input interface will be connected in a future phase."
          />

          <StatCard
            icon="🤖"
            title="AI Engine"
            value="Planned"
            description="ML recommendation logic is not active in Phase 5."
          />

          <StatCard
            icon="📊"
            title="Business Analysis"
            value="Planned"
            description="Analysis modules will be implemented later."
          />

        </section>

        {/* Profile chart */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">

          <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm lg:col-span-2">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Farmer Journey
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-900">
              Prepare your profile for future recommendations
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Better profile information will allow future modules
              to use more relevant agriculture and business inputs.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-green-50 p-5">
                <p className="text-2xl">🌾</p>
                <p className="mt-3 font-bold">Resources</p>
                <p className="mt-1 text-sm text-gray-600">
                  Raw material information
                </p>
              </div>

              <div className="rounded-2xl bg-amber-50 p-5">
                <p className="text-2xl">⚙️</p>
                <p className="mt-3 font-bold">Processing</p>
                <p className="mt-1 text-sm text-gray-600">
                  Value-added product planning
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5">
                <p className="text-2xl">💼</p>
                <p className="mt-3 font-bold">Business</p>
                <p className="mt-1 text-sm text-gray-600">
                  Market and profitability planning
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-gray-900">
              Profile Progress
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Complete your information before using future recommendation features.
            </p>

            <ProfileCompletionChart
              percentage={completion}
            />

            <Link
              to="/profile/edit"
              className="block rounded-xl bg-green-700 px-4 py-3 text-center font-semibold text-white hover:bg-green-800"
            >
              Update Profile
            </Link>

          </div>

        </section>

        {/* Features */}
        <section className="mt-10">

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Platform Modules
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-900">
              Your future business toolkit
            </h2>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                {...feature}
              />
            ))}

          </div>

        </section>

      </main>
    </div>
  );
}
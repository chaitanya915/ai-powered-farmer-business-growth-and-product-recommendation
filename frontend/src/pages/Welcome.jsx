import { Link } from "react-router-dom";

import PublicNavbar from "../components/layout/PublicNavbar";
import Footer from "../components/layout/Footer";
import FeatureCard from "../components/dashboard/FeatureCard";

const features = [
  {
    icon: "🤖",
    title: "AI Product Recommendation",
    description:
      "Identify suitable value-added products from available agricultural raw materials.",
  },
  {
    icon: "📈",
    title: "Price Prediction",
    description:
      "Prepare the interface for future price forecasting and market intelligence.",
  },
  {
    icon: "📊",
    title: "Demand Forecasting",
    description:
      "Understand future demand opportunities using the planned demand intelligence module.",
  },
  {
    icon: "🚚",
    title: "Supplier Recommendation",
    description:
      "Compare potential suppliers using quantity, quality, price and location information.",
  },
  {
    icon: "🏪",
    title: "Best Market",
    description:
      "Evaluate market opportunities using the planned market recommendation engine.",
  },
  {
    icon: "💰",
    title: "Profit & ROI",
    description:
      "Plan investment, revenue, profit and ROI using deterministic business calculations.",
  },
  {
    icon: "📄",
    title: "Business Plan",
    description:
      "Generate a structured business plan after the recommendation workflow is implemented.",
  },
  {
    icon: "💬",
    title: "AI Assistant",
    description:
      "Get contextual guidance through the future agriculture business AI assistant.",
  },
];

export default function Welcome() {
  return (
    <div className="min-h-screen bg-[#f7faf5]">
      <PublicNavbar />

      <main>

        {/* Hero */}
        <section className="relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-800 to-green-700" />

          <div className="absolute inset-0 opacity-20">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-yellow-300 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-green-300 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">

            <div className="text-white">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-300/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                🌾 Agriculture + Food Processing + AI
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Turn Agricultural Resources Into
                <span className="block text-lime-300">
                  Profitable Opportunities
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-green-50">
                An AI-powered business growth platform designed
                to help farmers and agri-entrepreneurs explore
                value-added agricultural opportunities.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/signup"
                  className="rounded-2xl bg-white px-6 py-3.5 text-center font-bold text-green-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50"
                >
                  Get Started
                </Link>

                <Link
                  to="/how-it-works"
                  className="rounded-2xl border border-white/40 bg-white/10 px-6 py-3.5 text-center font-bold text-white backdrop-blur hover:bg-white/20"
                >
                  See How It Works
                </Link>

              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">

                <div>
                  <p className="text-2xl font-bold">
                    2
                  </p>
                  <p className="text-sm text-green-100">
                    User Modes
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    AI
                  </p>
                  <p className="text-sm text-green-100">
                    Decision Support
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    360°
                  </p>
                  <p className="text-sm text-green-100">
                    Business View
                  </p>
                </div>

              </div>

            </div>

            {/* Visual */}
            <div className="relative">

              <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur">

                <div
                  className="flex min-h-[430px] items-end rounded-[1.5rem] bg-cover bg-center p-6"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(0,0,0,.72), rgba(0,0,0,.05)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80')",
                  }}
                >

                  <div className="w-full rounded-2xl bg-white/95 p-5 backdrop-blur">

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                          Opportunity Engine
                        </p>

                        <p className="mt-1 text-xl font-bold text-gray-900">
                          From Raw Material → Business
                        </p>
                      </div>

                      <div className="text-3xl">
                        🌱
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3">

                      <div className="rounded-xl bg-green-50 p-3 text-center">
                        <p className="text-xl">
                          🥭
                        </p>
                        <p className="mt-1 text-xs font-semibold text-gray-700">
                          Resource
                        </p>
                      </div>

                      <div className="rounded-xl bg-amber-50 p-3 text-center">
                        <p className="text-xl">
                          ⚙️
                        </p>
                        <p className="mt-1 text-xs font-semibold text-gray-700">
                          Processing
                        </p>
                      </div>

                      <div className="rounded-xl bg-blue-50 p-3 text-center">
                        <p className="text-xl">
                          💼
                        </p>
                        <p className="mt-1 text-xs font-semibold text-gray-700">
                          Opportunity
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Modes */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-bold uppercase tracking-wider text-green-700">
              Choose Your Mode
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
              Built for agricultural businesses at different stages
            </h2>

            <p className="mt-4 text-gray-600">
              Farmers and agri-entrepreneurs can use the platform
              according to their individual business goals.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-4xl">
                👨‍🌾
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Farmer Mode
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Explore ways to create more value from agricultural
                production and available raw materials.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li>✓ Raw material based opportunity planning</li>
                <li>✓ Value-added product exploration</li>
                <li>✓ Future market intelligence</li>
                <li>✓ Business planning support</li>
              </ul>

              <Link
                to="/signup"
                className="mt-7 inline-block rounded-xl bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
              >
                Start as Farmer
              </Link>

            </div>

            <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-4xl">
                🏭
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Agri-Entrepreneur Mode
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Evaluate agricultural processing opportunities
                according to business budget, capacity and target market.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li>✓ Investment and capacity planning</li>
                <li>✓ Product opportunity exploration</li>
                <li>✓ Supplier and market planning</li>
                <li>✓ Profit and ROI planning</li>
              </ul>

              <Link
                to="/signup"
                className="mt-7 inline-block rounded-xl bg-amber-600 px-5 py-3 font-semibold text-white hover:bg-amber-700"
              >
                Start as Entrepreneur
              </Link>

            </div>

          </div>

        </section>

        {/* Features */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="text-center">
              <p className="font-bold uppercase tracking-wider text-green-700">
                Platform Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
                One platform for the complete business journey
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  {...feature}
                />
              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
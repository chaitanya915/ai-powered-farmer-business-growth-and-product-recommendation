import PublicNavbar from "../components/layout/PublicNavbar";
import Footer from "../components/layout/Footer";

const steps = [
  {
    number: "01",
    icon: "👤",
    title: "Create Your Profile",
    description:
      "Select Farmer or Agri-Entrepreneur mode and provide relevant agriculture or business information.",
  },
  {
    number: "02",
    icon: "🌾",
    title: "Enter Your Resources",
    description:
      "Provide raw material, quantity, location, budget, season and other relevant business preferences.",
  },
  {
    number: "03",
    icon: "🤖",
    title: "Explore Product Opportunities",
    description:
      "The future recommendation engine will evaluate suitable value-added product opportunities.",
  },
  {
    number: "04",
    icon: "📈",
    title: "Evaluate Market Intelligence",
    description:
      "Future modules will support demand forecasting, price prediction, supplier evaluation and market recommendation.",
  },
  {
    number: "05",
    icon: "💰",
    title: "Compare Business Potential",
    description:
      "Business calculations will help compare revenue, cost, profit, ROI and risk using deterministic logic.",
  },
  {
    number: "06",
    icon: "📄",
    title: "Build Your Business Plan",
    description:
      "The completed workflow will turn selected opportunities into a structured business plan.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#f7faf5]">
      <PublicNavbar />

      <main>

        <section className="bg-green-950 px-4 py-20 text-white sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <p className="font-bold uppercase tracking-wider text-lime-300">
              Simple Decision Workflow
            </p>

            <h1 className="mt-4 text-4xl font-black sm:text-5xl">
              From agricultural resource to business opportunity
            </h1>

            <p className="mt-6 text-lg leading-8 text-green-100">
              The platform is designed as a step-by-step decision-support
              journey for farmers and agri-entrepreneurs.
            </p>

          </div>

        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">

          <div className="space-y-6">

            {steps.map((step) => (
              <div
                key={step.number}
                className="grid gap-6 rounded-3xl border border-green-100 bg-white p-6 shadow-sm md:grid-cols-[100px_80px_1fr] md:items-center"
              >

                <div className="text-4xl font-black text-green-200">
                  {step.number}
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-3xl">
                  {step.icon}
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h2>

                  <p className="mt-2 max-w-3xl leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

          <div className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-6">

            <p className="font-bold text-amber-800">
              Phase 5 Preview
            </p>

            <p className="mt-2 text-sm leading-6 text-amber-900">
              This phase implements the frontend experience only.
              Machine-learning predictions and recommendation calculations
              are intentionally not active yet.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
import PublicNavbar from "../components/layout/PublicNavbar";
import Footer from "../components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f7faf5]">
      <PublicNavbar />

      <main>

        <section className="bg-green-950 px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">

            <p className="font-bold uppercase tracking-wider text-lime-300">
              About The Platform
            </p>

            <h1 className="mt-4 text-4xl font-black sm:text-5xl">
              Agriculture meets intelligent business planning
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-100">
              The AI-Powered Farmer Business Growth and Product
              Recommendation System is designed to connect agricultural
              resources with value-added business opportunities.
            </p>

          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <p className="font-bold text-green-700">
                OUR PURPOSE
              </p>

              <h2 className="mt-3 text-3xl font-black text-gray-900">
                Help users move from selling resources to exploring value
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Agricultural raw materials can potentially support many
                value-added products. The platform is designed to bring
                together agricultural data, processing information,
                market information and business preferences into one
                decision-support workflow.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                The goal is not to replace business judgment. Instead,
                the system is designed to provide structured information
                that helps users compare opportunities more effectively.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <h3 className="text-xl font-bold text-gray-900">
                Core Areas
              </h3>

              <div className="mt-6 space-y-4">

                {[
                  ["🌾", "Agricultural Resources"],
                  ["⚙️", "Food Processing"],
                  ["📊", "Data Intelligence"],
                  ["🤖", "Artificial Intelligence"],
                  ["💰", "Business Planning"],
                  ["🏪", "Market Opportunities"],
                ].map(([icon, title]) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-2xl bg-green-50 p-4"
                  >
                    <span className="text-2xl">
                      {icon}
                    </span>

                    <span className="font-semibold text-gray-800">
                      {title}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
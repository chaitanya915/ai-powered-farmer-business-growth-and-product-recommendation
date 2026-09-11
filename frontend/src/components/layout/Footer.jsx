export default function Footer() {
  return (
    <footer className="border-t border-green-100 bg-green-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="grid gap-8 md:grid-cols-3">

          <div>
            <div className="flex items-center gap-3">
              <div className="text-3xl">
                🌱
              </div>

              <div>
                <p className="font-bold">
                  AI-Powered Farmer
                </p>

                <p className="text-sm text-green-200">
                  Business Growth Platform
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-green-100">
              Helping farmers and agri-entrepreneurs
              discover better value-added business
              opportunities from agricultural resources.
            </p>
          </div>

          <div>
            <h3 className="font-bold">
              Platform
            </h3>

            <div className="mt-4 space-y-2 text-sm text-green-100">
              <p>AI Product Recommendation</p>
              <p>Price Prediction</p>
              <p>Demand Forecasting</p>
              <p>Supplier Recommendation</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold">
              Business Intelligence
            </h3>

            <div className="mt-4 space-y-2 text-sm text-green-100">
              <p>Best Market</p>
              <p>Profit & ROI</p>
              <p>Business Plan</p>
              <p>AI Assistant</p>
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-green-800 pt-6 text-center text-sm text-green-200">
          © {new Date().getFullYear()} AI-Powered Farmer Business Growth
        </div>

      </div>
    </footer>
  );
}
export default function Unauthorized() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-700">
          Access Denied
        </h1>

        <p className="mt-3 text-gray-700">
          You do not have permission to access this page.
        </p>
      </div>
    </div>
  );
}
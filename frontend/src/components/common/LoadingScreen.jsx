export default function LoadingScreen({
  message = "Loading...",
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50">
      <div className="text-center">

        <div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl bg-green-700 text-3xl">
          🌱
        </div>

        <p className="mt-4 font-semibold text-green-800">
          {message}
        </p>

      </div>
    </div>
  );
}
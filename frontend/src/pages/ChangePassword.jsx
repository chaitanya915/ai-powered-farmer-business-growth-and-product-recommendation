import { useState } from "react";
import { Link } from "react-router-dom";

import api from "../services/api";


export default function ChangePassword() {

  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
  });

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);


  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]:
        event.target.value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setMessage("");

    if (
      form.new_password !==
      confirmPassword
    ) {
      setError(
        "New passwords do not match."
      );
      return;
    }

    setLoading(true);

    try {
      const response =
        await api.post(
          "/profile/change-password",
          form
        );

      setMessage(
        response.data.message
      );

      setForm({
        current_password: "",
        new_password: "",
      });

      setConfirmPassword("");

    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Unable to change password."
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 to-amber-50 p-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8"
      >

        <h1 className="text-3xl font-bold text-green-800">
          Change Password
        </h1>

        <p className="mt-2 mb-6 text-gray-600">
          Keep your account secure with a strong password.
        </p>


        {message && (
          <div className="mb-4 rounded-xl bg-green-100 p-3 text-green-800">
            {message}
          </div>
        )}


        {error && (
          <div className="mb-4 rounded-xl bg-red-100 p-3 text-red-800">
            {error}
          </div>
        )}


        <label className="mb-2 block font-semibold">
          Current Password
        </label>

        <input
          type="password"
          name="current_password"
          value={
            form.current_password
          }
          onChange={handleChange}
          required
          className="mb-5 w-full rounded-xl border p-3"
        />


        <label className="mb-2 block font-semibold">
          New Password
        </label>

        <input
          type="password"
          name="new_password"
          value={form.new_password}
          onChange={handleChange}
          minLength={8}
          required
          className="mb-5 w-full rounded-xl border p-3"
        />


        <label className="mb-2 block font-semibold">
          Confirm New Password
        </label>

        <input
          type="password"
          value={confirmPassword}
          onChange={(event) =>
            setConfirmPassword(
              event.target.value
            )
          }
          minLength={8}
          required
          className="mb-6 w-full rounded-xl border p-3"
        />


        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-green-700 p-3 font-semibold text-white disabled:opacity-50"
        >
          {loading
            ? "Changing..."
            : "Change Password"}
        </button>


        <Link
          to="/profile"
          className="mt-4 block text-center text-green-700"
        >
          Back to Profile
        </Link>

      </form>
    </div>
  );
}
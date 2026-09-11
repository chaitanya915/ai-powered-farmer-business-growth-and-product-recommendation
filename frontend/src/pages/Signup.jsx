import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const navigate = useNavigate();

  const {
    signup,
  } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    location: "",
    language: "English",
    role: "FARMER",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await signup(form);

      setSuccess(
        "Account created successfully. Redirecting to login..."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Signup failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-2 text-3xl font-bold text-green-800">
          Create Account
        </h1>

        <p className="mb-6 text-gray-600">
          Join the AI-powered farmer business platform.
        </p>

        {error && (
          <div className="mb-4 rounded-lg bg-red-100 p-3 text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 rounded-lg bg-green-100 p-3 text-green-700">
            {success}
          </div>
        )}

        <label className="mb-2 block font-medium">
          Account Type
        </label>

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="mb-4 w-full rounded-lg border p-3"
        >
          <option value="FARMER">
            Farmer
          </option>

          <option value="AGRI_ENTREPRENEUR">
            Agri-Entrepreneur
          </option>
        </select>

        <label className="mb-2 block font-medium">
          Full Name
        </label>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mb-4 w-full rounded-lg border p-3"
        />

        <label className="mb-2 block font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="mb-4 w-full rounded-lg border p-3"
        />

        <label className="mb-2 block font-medium">
          Password
        </label>

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          minLength={8}
          className="mb-4 w-full rounded-lg border p-3"
          placeholder="Minimum 8 characters"
        />

        <label className="mb-2 block font-medium">
          Mobile
        </label>

        <input
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          className="mb-4 w-full rounded-lg border p-3"
        />

        <label className="mb-2 block font-medium">
          Location
        </label>

        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          className="mb-6 w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-green-700 p-3 font-semibold text-white hover:bg-green-800 disabled:opacity-50"
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-4 w-full text-green-700"
        >
          Already have an account? Login
        </button>
      </form>
    </div>
  );
}
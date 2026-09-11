import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../services/api";


export default function Settings() {

  const [settings, setSettings] =
    useState({
      language: "English",
      location: "",
    });

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");


  useEffect(() => {
    const loadSettings = async () => {
      try {
        const response =
          await api.get(
            "/profile/settings"
          );

        setSettings(
          response.data
        );

      } catch (err) {
        setError(
          err.response?.data?.detail ||
            "Unable to load settings."
        );
      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, []);


  const handleChange = (event) => {
    setSettings({
      ...settings,
      [event.target.name]:
        event.target.value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    setSaving(true);
    setError("");
    setMessage("");

    try {
      const response =
        await api.put(
          "/profile/settings",
          settings
        );

      setSettings(
        response.data
      );

      setMessage(
        "Settings saved successfully."
      );

    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Unable to save settings."
      );
    } finally {
      setSaving(false);
    }
  };


  if (loading) {
    return (
      <div className="p-8">
        Loading settings...
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 p-4 sm:p-8">

      <div className="mx-auto max-w-3xl">

        <div className="mb-8">
          <p className="font-semibold text-green-700">
            AI Farmer Business
          </p>

          <h1 className="text-3xl font-bold text-gray-900">
            Settings
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your account preferences.
          </p>
        </div>


        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-md sm:p-8"
        >

          {message && (
            <div className="mb-5 rounded-xl bg-green-100 p-4 text-green-800">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-5 rounded-xl bg-red-100 p-4 text-red-800">
              {error}
            </div>
          )}


          <label className="mb-2 block font-semibold">
            Preferred Language
          </label>

          <select
            name="language"
            value={
              settings.language || "English"
            }
            onChange={handleChange}
            className="mb-6 w-full rounded-xl border p-3"
          >
            <option value="English">
              English
            </option>

            <option value="Hindi">
              Hindi
            </option>

            <option value="Marathi">
              Marathi
            </option>
          </select>


          <label className="mb-2 block font-semibold">
            Location
          </label>

          <input
            name="location"
            value={
              settings.location || ""
            }
            onChange={handleChange}
            className="mb-6 w-full rounded-xl border p-3"
            placeholder="State / District / City"
          />


          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-xl bg-green-700 p-3 font-semibold text-white disabled:opacity-50"
          >
            {saving
              ? "Saving..."
              : "Save Settings"}
          </button>

        </form>


        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          <Link
            to="/profile"
            className="rounded-xl bg-white p-5 text-center font-semibold shadow hover:shadow-md"
          >
            ← Back to Profile
          </Link>

          <Link
            to="/profile/change-password"
            className="rounded-xl bg-white p-5 text-center font-semibold text-green-700 shadow hover:shadow-md"
          >
            Change Password
          </Link>

        </div>

      </div>
    </div>
  );
}
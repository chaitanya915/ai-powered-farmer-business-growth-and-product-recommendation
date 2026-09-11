import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import { useAuth } from "../context/AuthContext";


const Input = ({
  label,
  name,
  value,
  onChange,
  type = "text",
}) => (
  <div>
    <label className="mb-2 block text-sm font-semibold text-gray-700">
      {label}
    </label>

    <input
      type={type}
      name={name}
      value={value ?? ""}
      onChange={onChange}
      className="w-full rounded-xl border border-gray-300 bg-white p-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
    />
  </div>
);


export default function EditProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response =
          await api.get("/profile");

        setForm(response.data);
      } catch (err) {
        setError(
          err.response?.data?.detail ||
            "Unable to load profile."
        );
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);


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
    setSaving(true);

    try {
      const endpoint =
        user.role === "FARMER"
          ? "/profile/farmer"
          : "/profile/entrepreneur";

      const response =
        await api.put(
          endpoint,
          form
        );

      setForm(response.data);

      setMessage(
        "Profile updated successfully."
      );

    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Unable to update profile."
      );
    } finally {
      setSaving(false);
    }
  };


  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 p-4 sm:p-8">

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-6xl"
      >

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="font-semibold text-green-700">
              AI Farmer Business
            </p>

            <h1 className="text-3xl font-bold text-gray-900">
              Edit Profile
            </h1>
          </div>

          <div className="flex gap-3">

            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-green-700 px-5 py-3 font-semibold text-white disabled:opacity-50"
            >
              {saving
                ? "Saving..."
                : "Save Changes"}
            </button>

          </div>

        </div>


        {message && (
          <div className="mb-6 rounded-xl bg-green-100 p-4 text-green-800">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-xl bg-red-100 p-4 text-red-800">
            {error}
          </div>
        )}


        <section className="mb-6 rounded-2xl bg-white p-6 shadow-md">

          <h2 className="mb-6 text-xl font-bold text-green-800">
            Personal Information
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            <Input
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <Input
              label="Mobile"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
            />

            <Input
              label="Language"
              name="language"
              value={form.language}
              onChange={handleChange}
            />

            <Input
              label="Location"
              name="location"
              value={form.location}
              onChange={handleChange}
            />

          </div>

        </section>


        {user.role === "FARMER" && (
          <section className="mb-6 rounded-2xl bg-white p-6 shadow-md">

            <h2 className="mb-6 text-xl font-bold text-green-800">
              Farmer Information
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              <Input
                label="Farm Size (acres)"
                name="farm_size"
                type="number"
                value={form.farm_size}
                onChange={handleChange}
              />

              <Input
                label="Production Quantity"
                name="production_quantity"
                type="number"
                value={
                  form.production_quantity
                }
                onChange={handleChange}
              />

              <Input
                label="Primary Crops"
                name="primary_crops"
                value={form.primary_crops}
                onChange={handleChange}
              />

              <Input
                label="Secondary Crops"
                name="secondary_crops"
                value={form.secondary_crops}
                onChange={handleChange}
              />

              <Input
                label="Irrigation Type"
                name="irrigation_type"
                value={
                  form.irrigation_type
                }
                onChange={handleChange}
              />

              <Input
                label="Raw Materials"
                name="raw_materials"
                value={form.raw_materials}
                onChange={handleChange}
              />

            </div>

          </section>
        )}


        {user.role === "AGRI_ENTREPRENEUR" && (
          <section className="mb-6 rounded-2xl bg-white p-6 shadow-md">

            <h2 className="mb-6 text-xl font-bold text-green-800">
              Business Information
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              <Input
                label="Business Name"
                name="business_name"
                value={
                  form.business_name
                }
                onChange={handleChange}
              />

              <Input
                label="Business Type"
                name="business_type"
                value={
                  form.business_type
                }
                onChange={handleChange}
              />

              <Input
                label="Business Location"
                name="business_location"
                value={
                  form.business_location
                }
                onChange={handleChange}
              />

              <Input
                label="Budget"
                name="budget"
                type="number"
                value={form.budget}
                onChange={handleChange}
              />

              <Input
                label="Production Capacity"
                name="production_capacity"
                type="number"
                value={
                  form.production_capacity
                }
                onChange={handleChange}
              />

              <Input
                label="Existing Products"
                name="existing_products"
                value={
                  form.existing_products
                }
                onChange={handleChange}
              />

              <Input
                label="Target Market"
                name="target_market"
                value={
                  form.target_market
                }
                onChange={handleChange}
              />

            </div>

          </section>
        )}


        <section className="rounded-2xl bg-white p-6 shadow-md">

          <h2 className="mb-6 text-xl font-bold text-amber-700">
            Business Preferences
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <Input
              label="Preferred Product Category"
              name="preferred_product_category"
              value={
                form.preferred_product_category
              }
              onChange={handleChange}
            />

            <Input
              label="Maximum Investment"
              name="maximum_investment"
              type="number"
              value={
                form.maximum_investment
              }
              onChange={handleChange}
            />

            <Input
              label="Minimum ROI (%)"
              name="minimum_roi"
              type="number"
              value={form.minimum_roi}
              onChange={handleChange}
            />

            <Input
              label="Preferred Risk"
              name="preferred_risk"
              value={
                form.preferred_risk
              }
              onChange={handleChange}
            />

            <Input
              label="Preferred Market"
              name="preferred_market"
              value={
                form.preferred_market
              }
              onChange={handleChange}
            />

            <Input
              label="Preferred Raw Material"
              name="preferred_raw_material"
              value={
                form.preferred_raw_material
              }
              onChange={handleChange}
            />

          </div>

        </section>

      </form>
    </div>
  );
}
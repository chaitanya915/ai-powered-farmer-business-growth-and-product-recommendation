import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../services/api";
import { useAuth } from "../context/AuthContext";


function Field({ label, value }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-500">
        {label}
      </p>

      <p className="mt-1 text-gray-900">
        {value || "Not provided"}
      </p>
    </div>
  );
}


export default function Profile() {
  const { user } = useAuth();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response =
          await api.get("/profile");

        setProfile(response.data);
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


  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading profile...
      </div>
    );
  }


  if (error) {
    return (
      <div className="p-8 text-red-600">
        {error}
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 p-4 sm:p-8">

      <div className="mx-auto max-w-6xl">

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="font-semibold text-green-700">
              AI Farmer Business
            </p>

            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              My Profile
            </h1>

            <p className="mt-1 text-gray-600">
              Manage your agriculture and business information.
            </p>
          </div>

          <Link
            to="/profile/edit"
            className="rounded-xl bg-green-700 px-5 py-3 text-center font-semibold text-white hover:bg-green-800"
          >
            Edit Profile
          </Link>

        </div>


        <div className="mb-6 rounded-2xl bg-white p-6 shadow-md">

          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">
                Profile Completion
              </h2>

              <p className="text-sm text-gray-500">
                Complete your profile for better future recommendations.
              </p>
            </div>

            <span className="text-2xl font-bold text-green-700">
              {profile.completion_percentage}%
            </span>
          </div>

          <div className="h-4 overflow-hidden rounded-full bg-gray-200">

            <div
              className="h-full rounded-full bg-green-600 transition-all"
              style={{
                width: `${profile.completion_percentage}%`,
              }}
            />

          </div>

        </div>


        <div className="grid gap-6 lg:grid-cols-2">

          <section className="rounded-2xl bg-white p-6 shadow-md">

            <h2 className="mb-5 text-xl font-bold text-green-800">
              Account Information
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">

              <Field
                label="Name"
                value={profile.name}
              />

              <Field
                label="Email"
                value={user?.email}
              />

              <Field
                label="Mobile"
                value={profile.mobile}
              />

              <Field
                label="Role"
                value={user?.role}
              />

              <Field
                label="Language"
                value={profile.language}
              />

              <Field
                label="Location"
                value={profile.location}
              />

            </div>

          </section>


          {user?.role === "FARMER" && (
            <section className="rounded-2xl bg-white p-6 shadow-md">

              <h2 className="mb-5 text-xl font-bold text-green-800">
                Farmer Information
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">

                <Field
                  label="Farm Size"
                  value={
                    profile.farm_size
                      ? `${profile.farm_size} acres`
                      : null
                  }
                />

                <Field
                  label="Primary Crops"
                  value={profile.primary_crops}
                />

                <Field
                  label="Secondary Crops"
                  value={profile.secondary_crops}
                />

                <Field
                  label="Irrigation"
                  value={profile.irrigation_type}
                />

                <Field
                  label="Raw Materials"
                  value={profile.raw_materials}
                />

                <Field
                  label="Production Quantity"
                  value={
                    profile.production_quantity
                  }
                />

              </div>

            </section>
          )}


          {user?.role === "AGRI_ENTREPRENEUR" && (
            <section className="rounded-2xl bg-white p-6 shadow-md">

              <h2 className="mb-5 text-xl font-bold text-green-800">
                Business Information
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">

                <Field
                  label="Business Name"
                  value={profile.business_name}
                />

                <Field
                  label="Business Type"
                  value={profile.business_type}
                />

                <Field
                  label="Business Location"
                  value={profile.business_location}
                />

                <Field
                  label="Budget"
                  value={profile.budget}
                />

                <Field
                  label="Production Capacity"
                  value={
                    profile.production_capacity
                  }
                />

                <Field
                  label="Existing Products"
                  value={
                    profile.existing_products
                  }
                />

                <Field
                  label="Target Market"
                  value={profile.target_market}
                />

              </div>

            </section>
          )}


          <section className="rounded-2xl bg-white p-6 shadow-md lg:col-span-2">

            <h2 className="mb-5 text-xl font-bold text-amber-700">
              Business Preferences
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              <Field
                label="Preferred Product Category"
                value={
                  profile.preferred_product_category
                }
              />

              <Field
                label="Maximum Investment"
                value={
                  profile.maximum_investment
                }
              />

              <Field
                label="Minimum ROI"
                value={
                  profile.minimum_roi
                    ? `${profile.minimum_roi}%`
                    : null
                }
              />

              <Field
                label="Preferred Risk"
                value={profile.preferred_risk}
              />

              <Field
                label="Preferred Market"
                value={
                  profile.preferred_market
                }
              />

              <Field
                label="Preferred Raw Material"
                value={
                  profile.preferred_raw_material
                }
              />

            </div>

          </section>

        </div>

      </div>
    </div>
  );
}
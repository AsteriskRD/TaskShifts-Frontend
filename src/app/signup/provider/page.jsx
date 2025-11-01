"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Select from "react-select";

const countryData = [
  {
    label: "Nigeria 🇳🇬",
    value: "NG",
    cities: ["Lagos", "Abuja", "Port Harcourt", "Benin City"],
    phoneFormat: "+234 XXX XXX XXXX",
    states: ["Lagos", "Edo", "Rivers", "FCT"],
  },
  {
    label: "United States 🇺🇸",
    value: "US",
    cities: ["New York", "Los Angeles", "Chicago", "Houston"],
    phoneFormat: "+1 (XXX) XXX-XXXX",
    states: ["New York", "California", "Texas", "Illinois"],
  },
  {
    label: "United Kingdom 🇬🇧",
    value: "UK",
    cities: ["London", "Manchester", "Birmingham", "Liverpool"],
    phoneFormat: "+44 XXXX XXXXXX",
    states: ["England", "Scotland", "Wales", "Northern Ireland"],
  },
];

// ✅ Yup Validation Schema
const schema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  number: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9+\s()-]+$/, "Invalid phone number format"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "At least 8 characters")
    .matches(/[A-Z]/, "Include an uppercase letter")
    .matches(/[a-z]/, "Include a lowercase letter")
    .matches(/[0-9]/, "Include a number")
    .matches(/[^a-zA-Z0-9]/, "Include a special character"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),

  country: yup.string().required("Country is required"),
  state: yup.string().required("State/Province is required"),
  city: yup.string().required("City is required"),
  zip: yup
    .string()
    .required("ZIP/Postal Code is required")
    .matches(/^[0-9A-Za-z-]+$/, "Invalid ZIP Code"),
  address: yup.string().required("Address is required"),

  category: yup.string().required("Service category is required"),
  registrationStatus: yup.string().required("Registration status is required"),
  businessName: yup.string().required("Business name is required"),
  website: yup.string().url("Enter a valid URL").notRequired(),
  description: yup.string().required("Service description is required"),

  agree: yup
    .bool()
    .oneOf([true], "You must accept Terms and Conditions to continue"),
});

export default function ProviderSignup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [phoneFormat, setPhoneFormat] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    setCities(value.cities || []);
    setStates(value.states || []);
    setPhoneFormat(value.phoneFormat);
    setValue("country", value.label);
  };

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("provider", JSON.stringify(data));
    router.push("/verify-email");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-accent-50 lg:px-20 md:pt-20 pt-10 px-4">
      {/* Header */}
      <div className="bg-primary-600 text-white p-6 w-full mb-16">
        <h1 className="text-3xl font-bold mb-2">Provider</h1>
        <p>Join TaskShifts and start offering your services today!</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl my-10"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">
          Register as a <span className="text-secondary-400">Provider</span>
        </h2>
        <p className="text-center mb-8 text-gray-600">
          Fill in your details to start offering your services
        </p>

        {/* PERSONAL DETAILS */}
        <h3 className="text-xl font-semibold mb-4 text-primary-600">
          Personal Details
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label>First Name</label>
            <input
              {...register("firstname")}
              className="w-full border p-2 rounded-md"
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm">{errors.firstname.message}</p>
            )}
          </div>
          <div>
            <label>Last Name</label>
            <input
              {...register("lastname")}
              className="w-full border p-2 rounded-md"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label>Email</label>
            <input
              {...register("email")}
              className="w-full border p-2 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label>Phone Number</label>
            <input
              {...register("number")}
              placeholder={phoneFormat || "Enter phone number"}
              className="w-full border p-2 rounded-md"
            />
            {errors.number && (
              <p className="text-red-500 text-sm">{errors.number.message}</p>
            )}
          </div>
        </div>

        {/* Password */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="relative">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="w-full border p-2 rounded-md"
            />
            <span
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="relative">
            <label>Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              className="w-full border p-2 rounded-md"
            />
            <span
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        {/* LOCATION DETAILS */}
        <h3 className="text-xl font-semibold mb-4 text-primary-600">
          Location Details
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label>Country</label>
            <Select
              options={countryData}
              value={selectedCountry}
              onChange={handleCountryChange}
              placeholder="Select country"
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>
          <div>
            <label>State / Province</label>
            <select
              {...register("state")}
              className="w-full border p-2 rounded-md"
              disabled={!states.length}
            >
              <option value="">Select state</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label>City</label>
            <select
              {...register("city")}
              className="w-full border p-2 rounded-md"
              disabled={!cities.length}
            >
              <option value="">Select city</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>
          <div>
            <label>ZIP / Postal Code</label>
            <input
              {...register("zip")}
              className="w-full border p-2 rounded-md"
            />
            {errors.zip && (
              <p className="text-red-500 text-sm">{errors.zip.message}</p>
            )}
          </div>
        </div>

        <div className="mb-10">
          <label>Address</label>
          <input
            {...register("address")}
            className="w-full border p-2 rounded-md"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* SERVICE DETAILS */}
        <h3 className="text-xl font-semibold mb-4 text-primary-600">
          Service / Business Details
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label>Service Category</label>
            <select
              {...register("category")}
              className="w-full border p-2 rounded-md"
            >
              <option value="">Select category</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Event & Decoration">Event & Decoration</option>
              <option value="Cleaning & Laundry">Cleaning & Laundry</option>
              <option value="Logistics & Deliveries">
                Logistics & Deliveries
              </option>
              <option value="Tutoring">Tutoring</option>
              <option value="Business Support">Business Support</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>
          <div>
            <label>Registration Status</label>
            <select
              {...register("registrationStatus")}
              className="w-full border p-2 rounded-md"
            >
              <option value="">Select status</option>
              <option value="Registered">Registered</option>
              <option value="Individual Business">Individual Business</option>
            </select>
            {errors.registrationStatus && (
              <p className="text-red-500 text-sm">
                {errors.registrationStatus.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label>Business Name</label>
            <input
              {...register("businessName")}
              className="w-full border p-2 rounded-md"
            />
            {errors.businessName && (
              <p className="text-red-500 text-sm">
                {errors.businessName.message}
              </p>
            )}
          </div>

          <div>
            <label>Website (Optional)</label>
            <input
              {...register("website")}
              placeholder="https://example.com"
              className="w-full border p-2 rounded-md"
            />
            {errors.website && (
              <p className="text-red-500 text-sm">{errors.website.message}</p>
            )}
          </div>
        </div>

        <div className="mb-10">
          <label>Service Description</label>
          <textarea
            {...register("description")}
            className="w-full border p-2 rounded-md h-32 resize-none"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* TERMS */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            {...register("agree")}
            className="mr-2 accent-primary-600"
          />
          <p className="text-gray-700 text-sm">
            I agree to the{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Terms and Conditions
            </span>{" "}
            and{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
        {errors.agree && (
          <p className="text-red-500 text-sm mb-4">{errors.agree.message}</p>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

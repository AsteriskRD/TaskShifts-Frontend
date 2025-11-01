"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Select from "react-select";

// ✅ Dummy Country & City Data
const countryData = [
  {
    label: "Nigeria 🇳🇬",
    value: "NG",
    cities: ["Lagos", "Abuja", "Port Harcourt", "Benin City"],
    phoneFormat: "+234 XXX XXX XXXX",
  },
  {
    label: "United States 🇺🇸",
    value: "US",
    cities: ["New York", "Los Angeles", "Chicago", "Houston"],
    phoneFormat: "+1 (XXX) XXX-XXXX",
  },
  {
    label: "United Kingdom 🇬🇧",
    value: "UK",
    cities: ["London", "Manchester", "Birmingham", "Liverpool"],
    phoneFormat: "+44 XXXX XXXXXX",
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
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  zip: yup
    .string()
    .required("ZIP/Postal Code is required")
    .matches(/^[0-9A-Za-z-]+$/, "Invalid ZIP Code"),
  address: yup.string().required("Address is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Include at least one uppercase letter")
    .matches(/[a-z]/, "Include at least one lowercase letter")
    .matches(/[0-9]/, "Include at least one number")
    .matches(/[^a-zA-Z0-9]/, "Include at least one special character"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  agree: yup
    .bool()
    .oneOf([true], "You must accept Terms and Conditions to continue"),
});

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [cities, setCities] = useState([]);
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
    setPhoneFormat(value.phoneFormat);
    setValue("country", value.label);
  };

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    alert("Signup successful! Please check your email for verification.");
    router.push("/verify-email");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-accent-50 lg:px-20 md:pt-20 pt-10 px-4">
      {/* Header Section */}
      <div className="bg-primary-600 text-white p-6 w-full mb-16">
        <h1 className="text-3xl font-bold mb-2">Client</h1>
        <p>New to TaskShifts? Create your account and get started!</p>
      </div>

      {/* Signup Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl my-10"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">
          Register as a <span className="text-secondary-400">Client</span>
        </h2>
        <p className="text-center mb-8 text-gray-600">
          Fill in your correct information to set up your account
        </p>

        {/* Names */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              {...register("firstname")}
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm">{errors.firstname.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              {...register("lastname")}
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname.message}</p>
            )}
          </div>
        </div>

        {/* Country & City */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Country</label>
            <Select
              options={countryData}
              value={selectedCountry}
              onChange={handleCountryChange}
              placeholder="Select your country"
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">City</label>
            <select
              {...register("city")}
              className="w-full border p-2 rounded-md focus:outline-blue-400"
              disabled={!cities.length}
            >
              <option value="">Select city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>
        </div>

        {/* Address & ZIP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Address</label>
            <input
              type="text"
              {...register("address")}
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-1">
              Postal / ZIP Code
            </label>
            <input
              type="text"
              {...register("zip")}
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
            {errors.zip && (
              <p className="text-red-500 text-sm">{errors.zip.message}</p>
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              {...register("number")}
              placeholder={phoneFormat || "Enter phone number"}
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
            {errors.number && (
              <p className="text-red-500 text-sm">{errors.number.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="text"
              {...register("email")}
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Password Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Password */}
          <div className="relative">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Enter password"
              className="w-full border p-2 rounded-md focus:outline-blue-400"
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

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Re-enter password"
              className="w-full border p-2 rounded-md focus:outline-blue-400"
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

        {/* Terms and Conditions */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            {...register("agree")}
            className="mr-2 accent-primary-600"
          />
          <p className="text-gray-700 text-sm">
            I agree to the{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Terms and Conditions
            </span>{" "}
            and{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </p>
        </div>
        {errors.agree && (
          <p className="text-red-500 text-sm mb-4">{errors.agree.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition"
        >
          Continue
        </button>

        {/* Login Redirect */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

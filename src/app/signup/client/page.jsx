"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Select from "react-select";

export default function SignUpPage() {
  const [mounted, setMounted] = useState(false);
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const onChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));

    console.log(formDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/verify-email')


  }

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto items-center justify-center min-h-screen w-full bg-accent-50 md:px-10 md:pt-30 pt-10  px-4">
      {/* Header Section */}
      <div className="bg-primary-600 text-white p-6 w-full mb-16">
        <h1 className="text-3xl font-bold mb-2">Client</h1>
        <p>New to TaskShifts? Create your account and get started!</p>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl my-10">
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
              name="firstname"
              value={formDetails.firstname}
              onChange={onChangeHandler}
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Last Name</label>
            <input
              name="lastname"
              value={formDetails.lastname}
              onChange={onChangeHandler}
              type="text"
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
          </div>
        </div>

        {/* Country & City */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Country</label>
            <Select
              onChange={onChangeHandler}
              placeholder="Select your country"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">City</label>
            <select
              name="city"
              value={formDetails.city}
              onChange={onChangeHandler}
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            >
              <option value="">Select city</option>
            </select>
          </div>
        </div>

        {/* Address & ZIP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formDetails.address}
              onChange={onChangeHandler}
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">
              Postal / ZIP Code
            </label>
            <input
              type="text"
              name="zip"
              value={formDetails.zip}
              onChange={onChangeHandler}
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              name="number"
              value={formDetails.number}
              onChange={onChangeHandler}
              type="text"
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              name="email"
              value={formDetails.email}
              onChange={onChangeHandler}
              type="text"
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
          </div>
        </div>

        {/* Password Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Password */}
          <div className="relative">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formDetails.password}
              onChange={onChangeHandler}
              // type={showPassword ? "text" : "password"}

              placeholder="Enter password"
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formDetails.confirmPassword}
              onChange={onChangeHandler}
              // type={showConfirmPassword ? "text" : "password"}

              placeholder="Re-enter password"
              className="w-full border p-2 rounded-md focus:outline-blue-400"
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            name="terms"
            checked={formDetails.terms}
            onChange={onChangeHandler}
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

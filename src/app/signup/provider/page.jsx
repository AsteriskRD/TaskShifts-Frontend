"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Select from "react-select";

import { toast } from "react-toastify";
import { register } from "@/app/api/auth";

export default function ProviderSignup() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [providerDetails, setProviderDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
    availability: false,
    country: "",
    state: "",
    city: "",
    postalCode: "",
    address: "",
    serviceCategory: "",
    registrationStatus: "",
    businessName: "",
    website: "",
    serviceDescription: "",
  });
  const router = useRouter();
  


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const onChangeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    setProviderDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(providerDetails);
  };
  

  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const user = localStorage.getItem("activeUser");
  //   const validateEmail = (email) => {
  //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //     return emailRegex.test(email);
  //   };
  //   if (user === "provider") {
  //     if (!validateEmail(providerDetails.email)) {
  //       toast.error("Please enter a valid email address.");
  //       setLoading(false);
  //       return;
  //     }
  //   } else {
  //     if (!providerDetails.email) {
  //       toast.error("Please enter a valid email address.");
  //       setLoading(false);
  //       return;
  //     }
  //   }

  //   if (providerDetails.password !== providerDetails.confirmPassword) {
  //     toast.error("Passwords do not match.");
  //     setLoading(false);
  //     return;
  //   }

  //   if (providerDetails.password.length < 8) {
  //     toast.error("Password must be at least 8 characters long.");
  //     setLoading(false);
  //     return;
  //   }

  //   if (providerDetails.phone.length < 10) {
  //     toast.error("Phone number must be at least 10 digits long.");
  //     setLoading(false);
  //     return;
  //   }

  //   if (providerDetails.postalCode.length < 5) {
  //     toast.error("Postal code must be at least 5 digits long.");
  //     setLoading(false);
  //     return;
  //   }
  //   if (!providerDetails) {
  //     toast.error("Please fill in all required fields.");
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     const payLoad = {
  //       userType: "provider",
  //       email: providerDetails.email,
  //       password: providerDetails.password,
  //       confirmPassword: providerDetails.confirmPassword,
  //       firstName: providerDetails.firstname,
  //       lastName: providerDetails.lastname,
  //       phone: providerDetails.phone,
  //       availability: providerDetails.availability,
  //       location: {
  //         country: providerDetails.country,
  //         state: providerDetails.state,
  //         city: providerDetails.city,
  //         postalCode: providerDetails.postalCode,
  //         address: providerDetails.address,
  //       },
  //       service: {
  //         serviceCategory: providerDetails.serviceCategory,
  //         registrationStatus: providerDetails.registrationStatus,
  //         businessName: providerDetails.businessName,
  //         website: providerDetails.website,
  //         serviceDescription: providerDetails.serviceDescription,
  //       },
  //     };
  //     const response = await register(payLoad);
  //     console.log(response, "from checking response");
  //     if (!response) throw new Error("Registration failed. Please try again.");
  //     setLoading(false);
  //     if (response?.status === 200 || response?.status === 201) {
  //       localStorage.setItem("email", providerDetails.email);
  //       toast.success("Registration successful! Please verify your email.");
  //       router.push("/verify-email");
  //     }
  //   } catch (error) {
  //     toast.error(error.message || "Registration failed. Please try again.");
  //     console.log(error, "error from provider signup");
  //   }
  // };
const onSubmitHandler = (e) => {
  e.preventDefault();
  toast.success("Registration successful! Check your email.");
  router.push('/verify-email')
}
  return (
    <div className="flex flex-col max-w-[1440px] mx-auto items-center justify-center min-h-screen w-full bg-accent-50 md:px-10 md:pt-30 pt-10 px-4">
      {/* Header */}
      <div className="bg-primary-600 text-white p-6 w-full mb-16">
        <h1 className="text-3xl font-bold mb-2">Provider</h1>
        <p>Join TaskShifts and start offering your services today!</p>
      </div>

      <form
        onSubmit={onSubmitHandler}
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
              onChange={onChangeHandler}
              type="text"
              name="firstname"
              value={providerDetails.firstname}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              onChange={onChangeHandler}
              type="text"
              name="lastname"
              value={providerDetails.lastname}
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label>Email</label>
            <input
              onChange={onChangeHandler}
              type="email"
              name="email"
              value={providerDetails.email}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              onChange={onChangeHandler}
              type = {showPassword ? "text" : "tel"}
              name="phone"
              value={providerDetails.phone}
              placeholder="Enter phone number"
              className="w-full border p-2 rounded-md"
            />
            <span className="absolute right-3 top-9 text-gray-500 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Password */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="relative">
            <label>Password</label>
            <input
              onChange={onChangeHandler}
              value={providerDetails.password}
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full border p-2 rounded-md"
            />
             <span className="absolute right-3 top-9 text-gray-500 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="relative">
            <label>Confirm Password</label>
            <input
              onChange={onChangeHandler}
              value={providerDetails.confirmPassword}
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              className="w-full border p-2 rounded-md"
            />
            <span className="absolute right-3 top-9 text-gray-500 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
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
              onChange={onChangeHandler}
              value={providerDetails.country}
              name="country"
              placeholder="Select country"
            />
          </div>
          <div>
            <label>State / Province</label>
            <select
              onChange={onChangeHandler}
              value={providerDetails.state}
              name="state"
              className="w-full border p-2 rounded-md"
            >
              <option value="">Select state</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label>City</label>
            <select
              onChange={onChangeHandler}
              value={providerDetails.city}
              name="city"
              className="w-full border p-2 rounded-md"
            >
              <option value="">Select city</option>
            </select>
          </div>
          <div>
            <label>ZIP / Postal Code</label>
            <input
              onChange={onChangeHandler}
              value={providerDetails.zip}
              type="text"
              name="postalCode"
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        <div className="mb-10">
          <label>Address</label>
          <input
            onChange={onChangeHandler}
            value={providerDetails.address}
            type="text"
            name="address"
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* SERVICE DETAILS */}
        <h3 className="text-xl font-semibold mb-4 text-primary-600">
          Service / Business Details
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label>Service Category</label>
            <select
              onChange={onChangeHandler}
              value={providerDetails.serviceCategory}
              name="serviceCategory"
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
          </div>
          <div>
            <label>Registration Status</label>
            <select
              onChange={onChangeHandler}
              value={providerDetails.registrationStatus}
              name="registrationStatus"
              className="w-full border p-2 rounded-md"
            >
              <option value="">Select status</option>
              <option value="Registered">Registered</option>
              <option value="Individual Business">Individual Business</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label>Business Name</label>
            <input
              onChange={onChangeHandler}
              value={providerDetails.businessName}
              type="text"
              name="businessName"
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label>Website (Optional)</label>
            <input
              onChange={onChangeHandler}
              value={providerDetails.website}
              type="url"
              name="website"
              placeholder="https://example.com"
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        <div className="mb-10">
          <label>Service Description</label>
          <textarea
            onChange={onChangeHandler}
            name="serviceDescription"
            className="w-full border p-2 rounded-md h-32 resize-none"
          />
        </div>

        {/* TERMS */}
        <div className="flex items-center mb-6">
          <input
            onChange={onChangeHandler}
            name="availability"
            checked={providerDetails.availability}
            type="checkbox"
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

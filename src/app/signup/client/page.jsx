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
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   router.push('/verify-email')


  // }

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto items-center justify-center min-h-screen w-full bg-accent-50 md:px-10 md:pt-30 pt-10  px-4">
      {/* Header Section */}
      <div className="bg-primary-600 text-white p-6 w-full mb-16">
        <h1 className="text-3xl font-bold mb-2">Client</h1>
        <p>New to TaskShifts? Create your account and get started!</p>
      </div>

      {/* Signup Form */}
      <form
       
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-bold text-center mb-4">
          Register as a <span className="text-secondary-400">Provider</span>
        </h2>

        {/* PERSONAL DETAILS */}
        <div className="bg-[#FFE1D0] inline-flex p-1 rounded-md">
          <h3 className="text-xl  font-semibold  text-primary-600">
            Personal Information
          </h3>
        </div>

        <div className="grid  grid-cols-1 pt-4 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstname">First Name</label>
            <input
              name="firstname"
              value={formDetails.firstname}
              onChange={onChangeHandler}
              className="border border-[#D8D8DD] w-full mt-1 p-2 rounded-md"
              placeholder="First Name"
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              name="lastname"
              value={formDetails.lastname}
              onChange={onChangeHandler}
              className="border p-2 mt-1 w-full border-[#D8D8DD]  rounded-md"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={formDetails.email}
              onChange={onChangeHandler}
              className="border mt-1 w-full border-[#D8D8DD]  p-2 rounded-md"
              placeholder="Email"
            />
          </div>

          <div className="relative">
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formDetails.phone}
                onChange={onChangeHandler}
                className="border border-[#D8D8DD] mt-1 w-full  p-2 rounded-md"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>

        {/* PASSWORD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={onChangeHandler}
              value={formDetails.password}
              className="border border-[#D8D8DD] mt-1  p-2 rounded-md w-full"
              placeholder="Password"
            />
            <span
              className="absolute top-10 right-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="relative">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={onChangeHandler}
              value={formDetails.confirmPassword}
              className="border border-[#D8D8DD] mt-1 w-full  p-2 rounded-md"
              placeholder="Confirm Password"
            />
            <span
              className="absolute top-10 right-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* LOCATION */}
        <div className="bg-[#FFE1D0] inline-flex p-1 mt-6 rounded-md">
          <h3 className="text-xl  font-semibold  text-primary-600">
            Location Details
          </h3>
        </div>

        <div className="grid pt-4 grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="address">Address</label>
            <input
              name="address"
              value={formDetails.address}
              onChange={onChangeHandler}
              className="border border-[#D8D8DD]  p-2 rounded-md w-full mb-3"
              placeholder="Address"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              name="city"
              value={formDetails.city}
              onChange={onChangeHandler}
              className="border border-[#D8D8DD]  p-2 rounded-md w-full"
              placeholder="City"
            />
          </div>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 mt-2">
          {/* COUNTRY SELECT FIXED */}
          <div>
            <label htmlFor="country">Country</label>
            <Select
              className="mt-1"
              name="country"
              options={countries}
              placeholder="Select Country"
              value={countries.find((c) => c.value === formDetails.country)}
              onChange={(selected) =>
                setFormDetails((prev) => ({
                  ...prev,
                  country: selected.value,
                }))
              }
            />
          </div>
          <div className="py-2">
            <label htmlFor="state">State / Province</label>
            <input
              name="state"
              value={formDetails.state}
              onChange={onChangeHandler}
              className="border border-[#D8D8DD] w-full mt-1 p-2 rounded-md"
              placeholder="State / Province"
            />
          </div>
        </div>
        <div className="">
          <input
            name="postalCode"
            value={formDetails.postalCode}
            onChange={onChangeHandler}
            className="border border-[#D8D8DD] w-1/2  p-2 rounded-md"
            placeholder="Postal Code"
          />
        </div>

        {/* SERVICE DETAILS */}
        <div className="bg-[#FFE1D0] inline-flex p-1 mt-6 mb-2 rounded-md">
          <h3 className="text-xl font-semibold  text-primary-600">
            Service/Business Detail
          </h3>
        </div>

        <div className="grid grid-cols-1 py-4 lg:grid-cols-2 gap-6 mb-2">
          <div>
            <label className="mb-1" htmlFor="serviceCat">
              Service Categories
            </label>
            <select
              name="serviceCategory"
              onChange={onChangeHandler}
              value={formDetails.serviceCategory}
              className="border border-[#D8D8DD] w-full mt-1 p-2 rounded-md"
            >
              <option value="">Select Service Category</option>
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
            <label className="mb-1" htmlFor="registrationStatus">
              Registration Status
            </label>
            <select
              name="registrationStatus"
              onChange={onChangeHandler}
              value={formDetails.registrationStatus}
              className="border border-[#D8D8DD] w-full mt-1 p-2 rounded-md"
            >
              <option value="">Select Registration Status</option>
              <option value="Registered">Registered</option>
              <option value="Individual Business">Individual Business</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="businessName">Business Name</label>
            <input
              name="businessName"
              value={formDetails.businessName}
              onChange={onChangeHandler}
              className="border border-[#D8D8DD] w-full mt-1  p-2 rounded-md"
              placeholder="Business Name"
            />
          </div>

          <div>
            <label htmlFor="website">Website</label>
            <input
              type="url"
              name="website"
              value={formDetails.website}
              onChange={onChangeHandler}
              className="border border-[#D8D8DD] w-full mt-1 p-2 rounded-md"
              placeholder="Website (Optional)"
            />
          </div>
        </div>
        <h1 className="py-2">Service Description</h1>
        <textarea
          name="serviceDescription"
          value={formDetails.serviceDescription}
          onChange={onChangeHandler}
          className="border bg-[#989BA024] border-[#D8D8DD] p-2 rounded-md w-full h-32 mb-6 resize-none"
          placeholder="Enter a brief description"
        />

        {/* TERMS */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            name="availability"
            checked={formDetails.availability}
            onChange={onChangeHandler}
            className="mr-2"
          />
          <p className="text-sm text-gray-700">
            I agree to the{" "}
            <span className="text-[#003271] font-bold">
              Terms and Conditions & Privacy Policy.
            </span>
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#003271] text-white cursor-pointer py-3 rounded-md hover:bg-[#002050]"
        >
          {loading ? "Registering..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}

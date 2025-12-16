"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Select from "react-select";
import countryList from "react-select-country-list";
import { toast } from "react-toastify";
import { register } from "@/app/api/auth";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ProviderSignup() {
  const router = useRouter();

  // Countries from react-select-country-list
  const countries = countryList().getData();

  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [providerDetails, setProviderDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    availability: false,

    // LOCATION
    country: "",
    state: "",
    city: "",
    postalCode: "",
    address: "",

    // SERVICE INFO
    serviceCategory: "",
    registrationStatus: "",
    businessName: "",
    website: "",
    serviceDescription: "",
  });

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Generic form input handler
  const onChangeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    setProviderDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Submit Handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // EMAIL VALIDATION
    const validateEmail = (email) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    if (!validateEmail(providerDetails.email)) {
      toast.error("Enter a valid email.");
      return setLoading(false);
    }
    if(!providerDetails){
      toast.error("All fields are required.");
      return setLoading(false);
    }

    // PASSWORD VALIDATION
    if (providerDetails.password !== providerDetails.confirmPassword) {
      toast.error("Passwords do not match.");
      return setLoading(false);
    }

    if (providerDetails.password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return setLoading(false);
    }

    // PHONE VALIDATION....
    if (providerDetails.phone.length < 10) {
      toast.error("Phone number must be at least 10 digits.");
      return setLoading(false);
    }

    // POSTAL CODE VALIDATION
    if (providerDetails.postalCode.length < 4) {
      toast.error("Postal code too short.");
      return setLoading(false);
    }

    
    const payload = {
      userType: "provider",
      email: providerDetails.email,
      password: providerDetails.password,
      confirmPassword: providerDetails.confirmPassword,
      firstName: providerDetails.firstname,
      lastName: providerDetails.lastname,
      phone: providerDetails.phone,
      availability: providerDetails.availability,

      location: {
        country: providerDetails.country,
        state: providerDetails.state,
        city: providerDetails.city,
        postalCode: providerDetails.postalCode,
        address: providerDetails.address,
      },

      service: {
        serviceCategory: providerDetails.serviceCategory,
        registrationStatus: providerDetails.registrationStatus,
        businessName: providerDetails.businessName,
        website: providerDetails.website,
        serviceDescription: providerDetails.serviceDescription,
      },
        redirectUrl: `${window.location.origin}/success-verify`,
    };

    console.log(" Payload sent:", payload);

    try {
      const response = await register(payload);
      console.log("RESPONSE:", response);

      if (!response) throw new Error("No response from server.");

      if (response?.status === 200 || response?.status === 201) {
        localStorage.setItem("email", providerDetails.email);
        toast.success("Registration successful! Verify your email.");
        router.push("/verify-email");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong. Try again.");
      console.log("❌ Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${poppins.className} py-30  flex flex-col max-w-[1440px] mx-auto items-center min-h-screen bg-accent-50 px-4 md:px-10`}
    >
      <div className="bg-primary-600 text-white p-6 w-full mb-16">
        <h1 className="text-3xl font-bold">Provider</h1>
        <p>Join TaskShifts and start offering your services today!</p>
      </div>

      <form
        onSubmit={onSubmitHandler}
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
              value={providerDetails.firstname}
              onChange={onChangeHandler}
              className="border border-[#D8D8DD] w-full mt-1 p-2 rounded-md"
              placeholder="First Name"
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              name="lastname"
              value={providerDetails.lastname}
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
              value={providerDetails.email}
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
                value={providerDetails.phone}
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
              value={providerDetails.password}
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
              value={providerDetails.confirmPassword}
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
              value={providerDetails.address}
              onChange={onChangeHandler}
              className="border border-[#D8D8DD]  p-2 rounded-md w-full mb-3"
              placeholder="Address"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              name="city"
              value={providerDetails.city}
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
              value={countries.find((c) => c.value === providerDetails.country)}
              onChange={(selected) =>
                setProviderDetails((prev) => ({
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
              value={providerDetails.state}
              onChange={onChangeHandler}
              className="border border-[#D8D8DD] w-full mt-1 p-2 rounded-md"
              placeholder="State / Province"
            />
          </div>
        </div>
        <div className="">
          <input
            name="postalCode"
            value={providerDetails.postalCode}
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
              value={providerDetails.serviceCategory}
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
              value={providerDetails.registrationStatus}
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
              value={providerDetails.businessName}
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
              value={providerDetails.website}
              onChange={onChangeHandler}
              className="border border-[#D8D8DD] w-full mt-1 p-2 rounded-md"
              placeholder="Website (Optional)"
            />
          </div>
        </div>
        <h1 className="py-2">Service Description</h1>
        <textarea
          name="serviceDescription"
          value={providerDetails.serviceDescription}
          onChange={onChangeHandler}
          className="border bg-[#989BA024] border-[#D8D8DD] p-2 rounded-md w-full h-32 mb-6 resize-none"
          placeholder="Enter a brief description"
        />

        {/* TERMS */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            name="availability"
            checked={providerDetails.availability}
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

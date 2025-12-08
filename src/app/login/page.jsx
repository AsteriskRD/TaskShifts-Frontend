"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

export default function LoginPage() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const onChangeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    setLoginDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(loginDetails);
  };
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
 
  const onSubmitHandler = (e) => {
    e.preventDefault();
    router.push("/providers")
  }

  return (
    <main className="flex pt-40 pb-20 flex-col items-center justify-center min-h-screen bg-accent-50 px-4 lg:px-20">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome back to <span className="text-secondary-500">TaskShift</span>
        </h2>
        <p className="text-accent-100 text-center mb-6">
          Provide your credentials to access your account
        </p>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input name="email" value={loginDetails.email} onChange={onChangeHandler}
              type="email"
              className="w-full p-2 border rounded"
              placeholder="example@email.com"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block mb-1 font-medium">Password</label>
            <input name="password" value={loginDetails.password} onChange={onChangeHandler}
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border rounded pr-10"
              placeholder="Enter password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-10 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="rememberMe" checked={loginDetails.rememberMe} onChange={onChangeHandler} />
              Remember Me
            </label>

            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center mt-4 text-gray-600">
          Don’t have an account? <Link href="/chooserole">Sign Up</Link>
        </p>
      </div>
    </main>
  );
}

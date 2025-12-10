"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    router.push("/reset-password");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-sm w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Forgot Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email to receive a password reset link
          </p>
        </div>
        <form onSubmit={onSubmitHandler} className="mt-8 space-y-6">
          <div className="relative">
            <label className="block mb-1 font-medium">Password</label>
            <input
              name="password"
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

          <div>
            <button
              type="submit"
              className="group cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-[#003271] hover:bg-[#002050] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
            >
              Send Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

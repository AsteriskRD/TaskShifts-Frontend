"use client";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    router.push("/password-changed");
  };



  return (
    <main
      className={`${poppins.className} flex pt-40 pb-20 flex-col items-center justify-center min-h-screen bg-accent-50 px-4 lg:px-20`}
    >
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Set a new password for your account
          </p>
        </div>
        <form  onSubmit={onSubmitHandler} className="space-y-4 py-4">
   
         
          <div className="relative ">
            <label className="block mb-1 font-medium">New Password</label>
            <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

           <div className="relative">
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              name="password"
              value={confirmPassword}
              onChange={(e) => confirmPassword(e.target.value)}
              type={confirmPassword ? "text" : "password"}
              className="w-full p-2 border rounded pr-10"
              placeholder="Enter password"
            />
            <span
              onClick={() => setConfirmPassword(!confirmPassword)}
              className="absolute right-2 top-10 cursor-pointer text-gray-500"
            >
              {confirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#003271] cursor-pointer text-white py-2 rounded-xl hover:bg-[#002050]"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

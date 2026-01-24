"use client";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { login } from "../api/auth";
import { toast } from "react-toastify";
import { getProfile } from "../api/auth";
import Loading from "../Loading";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function LoginPage() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onChangeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    setLoginDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
   
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!loginDetails.email || !loginDetails.password) {
      toast.error("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await login(loginDetails);
      toast.success("Login successful.");
      console.log(response);
      const { accessToken, user } = response.data;

      if (!response) {
        toast.error("Invalid credentials.");
        setLoading(false);
        return;
      }

      if (response.status === 200 || response.status === 201) {
        if (rememberMe) {
          localStorage.setItem("accessToken", accessToken);
        } else {
          sessionStorage.setItem("accessToken", accessToken);
        }

        localStorage.setItem("user", JSON.stringify(user));

        const getProfileData = await getProfile(accessToken);
        const profile = getProfileData.data.user
        localStorage.setItem("userType", profile.userType);
        localStorage.setItem("email", profile.email);
        if (profile.userType === "provider") {
          router.replace("/providers");
          return;
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
if(loading) return <Loading />
  return (
    <main
      className={`${poppins.className} flex pt-40 pb-20 flex-col items-center justify-center min-h-screen bg-accent-50 px-4 lg:px-20`}
    >
      
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl text-[#484E53] font-bold text-center mb-6">
          Welcome back to <span className="text-secondary-500">TaskShift</span>
        </h2>
        <p className="text-accent-100 text-center mb-6">
          Provide your credentials to access your account
        </p>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              value={loginDetails.email}
              onChange={onChangeHandler}
              type="email"
              className="w-full p-2 border rounded"
              placeholder="example@email.com"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block mb-1 font-medium">Password</label>
            <input
              name="password"
              value={loginDetails.password}
              onChange={onChangeHandler}
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

          <div className="flex  justify-between items-center">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                value={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>

            <a
              href="/forgot-password"
              className="text-sm text-black hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#003271] text-white py-2 rounded-xl hover:bg-[#002050]"
          >
            Login
          </button>
          <button
            type="submit"
            className="w-full border-[2px] border-[#003271] text-[#003271] py-2 rounded-xl"
          >
            Continue with Google
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link className="text-[#FF6815] hover-underline" href="/chooserole">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}

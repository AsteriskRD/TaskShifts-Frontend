"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ClientIcon from "../assets/ClientIcon.png";
import ProviderIcon from "../assets/ProviderIcon.png";
import SuccessIcon from "../assets/success.png"; 

export default function ChooseRolePage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    localStorage.setItem("activeUser", JSON.stringify({ role }));
  };

  const handleContinue = () => {
    if (selectedRole === "client") {
      router.push("/signup/client");
    } else if (selectedRole === "provider") {
      router.push("/signup/provider");
    } else {
      alert("Please select a role before continuing.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-accent-50 lg:px-20 py-10 px-4">
      {/* Header section */}
      <div className="bg-primary-600 text-white p-6 w-full">
        <h1 className="text-3xl font-bold mb-2">Join TaskShifts</h1>
        <p>Sign up today to find services or offer your expertise</p>
      </div>

      {/* Role selection */}
      <div className="mt-10 text-center rounded-md md:w-3/4 p-8 shadow-lg bg-white flex flex-col justify-center items-center lg:px-20 lg:py-12 space-y-8 w-full">
        <h2 className="text-2xl font-semibold mb-12">
          How do you want to sign up?
        </h2>
        <div className="flex w-full justify-between items-center gap-6 md:flex-row flex-col">
          {/* Client button */}
          <button
            onClick={() => handleRoleSelect("client")}
            className={`relative p-4 rounded-md transition border-2 md:w-auto w-full flex md:flex-col md:justify-center justify-start items-center gap-2 ${
              selectedRole === "client"
                ? "border-primary-600 shadow-lg"
                : "border-gray-200"
            }`}
          >
            {selectedRole === "client" && (
              <Image
                src={SuccessIcon}
                alt="Selected"
                width={24}
                height={24}
                className="absolute top-2 right-2"
              />
            )}
            <Image
              src={ClientIcon}
              alt="ClientIcon"
              width={48}
              height={48}
              className="md:mb-8"
            />
            <div className="md:text-center text-start">
            <p className="font-semibold">I am Client</p>
            <p>I want to book a service</p>
            </div>
          </button>

          {/* Provider button */}
          <button
            onClick={() => handleRoleSelect("provider")}
            className={`relative p-4 rounded-md transition border-2 md:w-auto w-full flex md:flex-col md:justify-center justify-start items-center gap-2 ${
              selectedRole === "provider"
                ? "border-primary-600 shadow-lg"
                : "border-gray-200"
            }`}
          >
            {selectedRole === "provider" && (
              <Image
                src={SuccessIcon}
                alt="Selected"
                width={24}
                height={24}
                className="absolute top-2 right-2"
              />
            )}
            <Image
              src={ProviderIcon}
              alt="ProviderIcon"
              width={48}
              height={48}
              className="md:mb-8"
            />
            <div className="md:text-center text-start">
            <p className="font-semibold">I am Provider</p>
            <p>I want to offer a service</p>
            </div>
          </button>
        </div>

        <button
          onClick={handleContinue}
          className="w-full bg-primary-600 rounded-full text-white py-2 mt-6 hover:bg-primary-700 transition cursor-pointer"
        >
          Continue
        </button>

        <p className="mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-secondary-400 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";

export default function ChooseRolePage() {
  const router = useRouter();

  const handleRoleSelect = (role) => {
    localStorage.setItem("activeUser", JSON.stringify({ role }));
    if (role === "client") {
      router.push("/landing/client");
    } else {
      router.push("/landing/provider");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-100">
      {/* Header section */}
      <div className="bg-blue-600 text-white p-6 w-full text-center">
        <h1 className="text-3xl font-bold mb-2">Join TaskShifts</h1>
        <p>Sign up today to find services or offer your expertise</p>
      </div>

      {/* Role selection */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-6">Choose Your Role</h2>
        <div className="flex gap-6">
          <button
            onClick={() => handleRoleSelect("client")}
            className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            I’m a Client
          </button>

          <button
            onClick={() => handleRoleSelect("provider")}
            className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            I’m a Provider
          </button>
        </div>
      </div>
    </div>
  );
}

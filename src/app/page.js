"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if there's an active user in localStorage
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));

   /* if (activeUser) {
      // Redirect based on user role
      if (activeUser.role === "client") {
        router.push("/landing/client");
      } else if (activeUser.role === "provider") {
        router.push("/landing/provider");
      }
    } */
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Welcome to TaskShifts
      </h1>
      <p className="mb-8 text-gray-700">
        Connecting Clients with Service Providers
      </p>
      <div className="space-x-4">
        <Link
          href="/signup"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </Link>

        <Link
          href="/login"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          Login
        </Link>
      </div>
    </main>
  );
}

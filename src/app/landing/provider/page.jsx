"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProviderLanding() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (!activeUser || activeUser.role !== "provider") {
      router.push("/login");
    } else {
      setUser(activeUser);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("activeUser");
    router.push("/login");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      {user ? (
        <>
          <h1 className="text-3xl font-bold text-blue-700">
            Welcome, {user.name} 💼
          </h1>
          <p className="mt-2 text-gray-700">
            You are logged in as a <strong>Service Provider</strong>.
          </p>
          <button
            onClick={handleLogout}
            className="mt-6 px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
          >
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

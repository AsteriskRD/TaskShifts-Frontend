"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ClientLanding() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (!activeUser || activeUser.role !== "client") {
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
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      {user ? (
        <>
          <h1 className="text-3xl font-bold text-green-700">
            Welcome, {user.name} 👋
          </h1>
          <p className="mt-2 text-gray-700">
            You are logged in as a <strong>Client</strong>.
          </p>
          <button
            onClick={handleLogout}
            className="mt-6 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
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

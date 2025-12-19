"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";

export default function ClientLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        className="min-h-screen"
        isOpen={isMobileMenuOpen}
        toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Main content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}

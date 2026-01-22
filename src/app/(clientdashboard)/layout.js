// src/app/(clientdashboard)/layout.js
import Sidebar from '../components/bookingscreen/Sidebar';
import TopNav from '../components/dashboard/afterKyc/TopNav'
export default function Layout({ children }) {
  return (
    <div className="flex bg-[#E6E6EE] min-h-screen">
      {/* Sidebar - Sticky and scrollable */}
      <Sidebar />

      {/* Main Content Area - NO height constraints, let it flow */}
      <main className="flex-1 py-2 px-6 overflow-visible  ">
        <div className="w-full">
          <TopNav />
          {children}
        </div>
      </main>
    </div>
  );
}
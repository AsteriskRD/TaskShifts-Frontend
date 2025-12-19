'use client'
import { useState } from 'react'
import Sidebar from '../../components/dashboard/afterKyc/SideBar'
import TopNav from '../../components/dashboard/afterKyc/TopNav'

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation */}
        <TopNav onMenuClick={() => setSidebarOpen(true)} />
        
        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  )
}
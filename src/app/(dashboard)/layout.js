'use client'
import { useState } from 'react'
import Sidebar from '../components/dashboard/afterKyc/SideBar'
import TopNav from '../components/dashboard/afterKyc/TopNav'
import Footer from '../components/dashboard/afterKyc/dashboardFooter'

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <div className="flex h-screen bg-gray-50">
          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          {/* Main area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Navigation */}
            <TopNav onMenuClick={() => setSidebarOpen(true)} />
            
            {/* Scrollable Content Area with Footer */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {/* Page Content */}
              <main className="p-4 sm:p-6 lg:p-8">
                {children}
              </main>
              
              {/* Footer inside scrollable area */}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
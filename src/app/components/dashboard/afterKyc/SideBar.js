'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  History, 
  CreditCard, 
  DollarSign, 
  Star, 
  MessageSquare, 
  Users,
  Headphones,
  Settings,
  LogOut,
  X
} from 'lucide-react'

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname()
  
  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/profile', label: 'My Profile', icon: User },
    { href: '/dashboard/service', label: 'Service', icon: Briefcase },
    { href: '/dashboard/booking', label: 'Booking history', icon: History },
    { href: '/dashboard/payments', label: 'Payments', icon: CreditCard },
    { href: '/dashboard/withdrawals', label: 'Withdrawals', icon: DollarSign },
    { href: '/dashboard/ratings', label: 'My Ratings', icon: Star },
    { href: '/dashboard/messages', label: 'Messages', icon: MessageSquare },
    { href: '/dashboard/reviews', label: 'Customer Review', icon: Users },
  ]
  
  return (
    <>
      {/* Mobile Overlay - Darkens background when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white border-r border-gray-200 h-screen flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            Task<span className="text-blue-600">Shift</span>
          </h1>
          {/* Close button - Only visible on mobile */}
          <button 
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto p-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose} // Close sidebar when link is clicked on mobile
                className={`flex items-center gap-3 px-4 py-3 mb-1 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>
        
        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200">
          <Link
            href="/dashboard/support"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 mb-1 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <Headphones size={20} />
            <span className="text-sm font-medium">Customer support</span>
          </Link>
          
          <Link
            href="/dashboard/settings"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 mb-1 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <Settings size={20} />
            <span className="text-sm font-medium">Settings</span>
          </Link>
          
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </div>
        
      </div>
    </>
  )
}
'use client'
import { Search, Bell, MessageSquare, ShoppingCart, Settings, Menu } from 'lucide-react'

export default function TopNav({ onMenuClick }) {
  return (
    <div className="h-16 bg-white border-b border-gray-200 px-4 lg:px-6 flex items-center justify-between gap-2 sm:gap-4">
      
      {/* Left Section: Hamburger + Search */}
      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        {/* Hamburger Menu Button - Only visible on mobile/tablet */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
          aria-label="Open menu"
        >
          <Menu size={24} className="text-gray-600" />
        </button>

        {/* Search Bar - ALWAYS VISIBLE, adjusts width */}
        <div className="flex items-center gap-2 bg-gray-50 px-3 sm:px-4 py-2 rounded-lg flex-1 max-w-md">
          <Search size={18} className="sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
          <input 
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Icon Buttons - Some hidden on smaller screens */}
      <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
        {/* Bell - Always visible */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} className="sm:w-6 sm:h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">3</span>
        </button>

        {/* Message - Hidden on mobile, visible on tablet+ */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors hidden sm:flex">
          <MessageSquare size={24} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">5</span>
        </button>

        {/* Cart - Hidden on mobile/tablet, visible on desktop */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors hidden md:flex">
          <ShoppingCart size={24} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">6</span>
        </button>

        {/* Settings - Hidden on mobile/tablet, visible on desktop */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors hidden md:flex">
          <Settings size={24} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">2</span>
        </button>
      </div>

      {/* User Section */}
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        {/* Divider - Hidden on mobile */}
        <div className="hidden md:block w-px h-8 bg-gray-300"></div>
        
        {/* User name - Hidden on mobile/tablet */}
        <div className="hidden md:block text-sm whitespace-nowrap">
          <span className="text-gray-500">Hello, </span>
          <span className="font-semibold text-gray-800">Mercy. S</span>
        </div>
        
        {/* Avatar - Always visible, smaller on mobile */}
        <button className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-lg hover:bg-blue-800 transition-colors">
          M
        </button>
      </div>

    </div>
  )
}
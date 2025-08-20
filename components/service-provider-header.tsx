"use client";

import { useState } from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  Flag,
  Menu
} from 'lucide-react';

interface ServiceProviderHeaderProps {
  onMenuClick?: () => void;
}

export default function ServiceProviderHeader({ onMenuClick }: ServiceProviderHeaderProps) {
  const [user, setUser] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('welpco_user');
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        
        {/* Left - Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-4 sm:mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005C3C] focus:border-transparent text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Right side - Notifications, Language, Profile */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Notifications */}
          <div className="relative">
            <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
              6
            </span>
          </div>

          {/* Language Selector - Hidden on mobile */}
          <div className="hidden sm:flex items-center space-x-2 cursor-pointer">
            <Flag className="h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-700">English</span>
            <ChevronDown className="h-4 w-4 text-gray-600" />
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-pink-200 rounded-full flex items-center justify-center">
              <span className="text-xs sm:text-sm font-medium text-pink-800">S</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-medium text-gray-900">
                {user?.name || 'Star Shah'}
              </span>
              <span className="text-xs text-gray-500">
                {user?.role || 'Admin'}
              </span>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-600 hidden sm:block" />
          </div>
        </div>
      </div>
    </header>
  );
} 
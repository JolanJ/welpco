"use client";

import { useState } from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  Flag 
} from 'lucide-react';

export default function ServiceProviderHeader() {
  const [user, setUser] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('welpco_user');
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <h1 className="text-[#005C3C] text-2xl font-bold">WELPCO</h1>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005C3C] focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side - Notifications, Language, Profile */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              6
            </span>
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <Flag className="h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-700">English</span>
            <ChevronDown className="h-4 w-4 text-gray-600" />
          </div>

                     {/* Profile */}
           <div className="flex items-center space-x-3">
             <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
               <span className="text-sm font-medium text-pink-800">S</span>
             </div>
             <div className="flex flex-col">
               <span className="text-sm font-medium text-gray-900">
                 {user?.name || 'Star Shah'}
               </span>
               <span className="text-xs text-gray-500">
                 {user?.role || 'Admin'}
               </span>
             </div>
             <ChevronDown className="h-4 w-4 text-gray-600" />
           </div>
           
           {/* Quick Logout for Demo */}
           <button
             onClick={() => {
               localStorage.removeItem('welpco_user');
               window.location.href = '/login';
             }}
             className="ml-4 px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
           >
             Logout
           </button>
        </div>
      </div>
    </header>
  );
} 
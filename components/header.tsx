"use client"

import { Input } from "@/components/ui/input"
import {
  Search,
  Bell,
  ChevronDown,
  Menu,
  User,
} from "lucide-react"

interface HeaderProps {
  user?: any
  onMenuClick?: () => void
}

export default function Header({ user, onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between min-w-0">
        {/* Left side - Menu and Search */}
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 min-w-0 flex-1">
          <button 
            onClick={onMenuClick}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          <div className="relative flex-1 min-w-0">
            <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-7 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 w-full max-w-xs sm:max-w-sm lg:max-w-md border-gray-300 focus:border-[#005C3C] focus:ring-[#005C3C] text-sm"
            />
          </div>
        </div>

        {/* Right side - Notifications, Language, Profile */}
        <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3 flex-shrink-0">
          {/* Notifications */}
          <button className="relative p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            <div className="absolute top-0.5 sm:top-1 right-0.5 sm:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
          </button>

          {/* Language Selector - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-1.5 sm:space-x-2 p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">
              GB
            </div>
            <span className="text-xs sm:text-sm text-gray-700 hidden lg:block">English</span>
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-3 p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-pink-600" />
            </div>
            <div className="hidden lg:block text-left min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">{user?.name || "User"}</div>
              <div className="text-xs text-gray-500 truncate">{user?.role || "User"}</div>
            </div>
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
          </div>
        </div>
      </div>
    </header>
  )
} 
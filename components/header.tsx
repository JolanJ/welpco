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
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Menu and Search */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-80 border-gray-300 focus:border-[#005C3C] focus:ring-[#005C3C]"
            />
          </div>
        </div>

        {/* Right side - Notifications, Language, Profile */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>

          {/* Language Selector */}
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
            <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">
              GB
            </div>
            <span className="text-sm text-gray-700">English</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
            <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-pink-600" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-gray-900">{user?.name || "User"}</div>
              <div className="text-xs text-gray-500">{user?.role || "User"}</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  )
} 
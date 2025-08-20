"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  Users,
  Mail,
  CreditCard,
  Heart,
  User,
  Settings,
  LogOut,
  X,
} from "lucide-react"

interface ServiceProviderSidebarProps {
  currentPath?: string
  user?: any
  onLogout?: () => void
  onClose?: () => void
}

export default function ServiceProviderSidebar({ currentPath = "/service-provider-dashboard", user, onLogout, onClose }: ServiceProviderSidebarProps) {
  const router = useRouter()

  const handleLogout = () => {
    if (onLogout) {
      onLogout()
    } else {
      localStorage.removeItem("welpco_user")
      router.push("/login")
    }
  }

  const handleNavigation = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className="w-64 h-screen bg-white text-gray-900 flex flex-col border-r border-gray-200">
      {/* Logo */}
      <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold text-[#005C3C]">WELPCO®</div>
        {/* Mobile Close Button */}
        <button 
          onClick={onClose}
          className="lg:hidden p-1 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 sm:p-4 overflow-y-auto">
        <div className="space-y-2">
          {/* Main Navigation */}
          <div className="space-y-1">
            <Link
              href="/service-provider-dashboard"
              onClick={handleNavigation}
              className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                currentPath === "/service-provider-dashboard"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Find Jobs</span>
            </Link>
            <Link
              href="/service-provider-dashboard/profile"
              onClick={handleNavigation}
              className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                currentPath === "/service-provider-dashboard/profile"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Profile</span>
            </Link>
            <Link
              href="/service-provider-dashboard/reviews"
              onClick={handleNavigation}
              className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                currentPath === "/service-provider-dashboard/reviews"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Reviews</span>
            </Link>
            <Link
              href="/service-provider-dashboard/settings"
              onClick={handleNavigation}
              className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                currentPath === "/service-provider-dashboard/settings"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Settings</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Bottom Navigation */}
          <div className="space-y-1">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-gray-600 hover:bg-[#00492F] hover:text-white transition-colors w-full text-left text-sm sm:text-base"
            >
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
} 
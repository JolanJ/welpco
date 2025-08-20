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

interface SidebarProps {
  currentPath?: string
  user?: any
  onLogout?: () => void
  onClose?: () => void
}

export default function Sidebar({ currentPath = "/dashboard", user, onLogout, onClose }: SidebarProps) {
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
              href="/dashboard"
              onClick={handleNavigation}
              className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                currentPath === "/dashboard"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/jobs"
              onClick={handleNavigation}
              className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                currentPath === "/jobs"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Jobs</span>
            </Link>
            <Link
              href="/service-providers"
              onClick={handleNavigation}
              className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                currentPath === "/service-providers"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Service Providers</span>
            </Link>
            <Link
              href="/inbox"
              onClick={handleNavigation}
              className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                currentPath === "/inbox"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Inbox</span>
            </Link>
            <Link
              href="/subscription"
              onClick={handleNavigation}
              className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                currentPath === "/subscription"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Subscription</span>
            </Link>
            <Link
              href="/favorites"
              onClick={handleNavigation}
              className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                currentPath === "/favorites"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Favorites</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Account Section */}
          <div className="space-y-1">
            <div className="px-3 sm:px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Account
            </div>
            <Link
              href="/dashboard/profile"
              onClick={handleNavigation}
              className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                currentPath === "/dashboard/profile"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Profile</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Bottom Navigation */}
          <div className="space-y-1">
            <Link
              href="/settings"
              onClick={handleNavigation}
              className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                currentPath === "/settings"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Settings</span>
            </Link>
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
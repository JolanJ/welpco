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
} from "lucide-react"

interface SidebarProps {
  currentPath?: string
  user?: any
  onLogout?: () => void
}

export default function Sidebar({ currentPath = "/dashboard", user, onLogout }: SidebarProps) {
  const router = useRouter()

  const handleLogout = () => {
    if (onLogout) {
      onLogout()
    } else {
      localStorage.removeItem("welpco_user")
      router.push("/login")
    }
  }

  return (
    <div className="w-64 bg-white text-gray-900 flex flex-col border-r border-gray-200">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="text-2xl font-bold text-[#005C3C]">WELPCO®</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {/* Main Navigation */}
          <div className="space-y-1">
            <Link
              href="/dashboard"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentPath === "/dashboard"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/jobs"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentPath === "/jobs"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>Jobs</span>
            </Link>
            <Link
              href="/service-providers"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentPath === "/service-providers"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Service Providers</span>
            </Link>
            <Link
              href="/inbox"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentPath === "/inbox"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <Mail className="w-5 h-5" />
              <span>Inbox</span>
            </Link>
            <Link
              href="/subscription"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentPath === "/subscription"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <CreditCard className="w-5 h-5" />
              <span>Subscription</span>
            </Link>
            <Link
              href="/favorites"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentPath === "/favorites"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <Heart className="w-5 h-5" />
              <span>Favorites</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Account Section */}
          <div className="space-y-1">
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Account
            </div>
            <Link
              href="/profile"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentPath === "/profile"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Bottom Navigation */}
          <div className="space-y-1">
            <Link
              href="/settings"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentPath === "/settings"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-[#00492F] hover:text-white transition-colors w-full text-left"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
} 
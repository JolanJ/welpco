"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  CheckSquare, 
  Mail, 
  User, 
  Heart, 
  Settings, 
  LogOut 
} from 'lucide-react';

export default function ServiceProviderSidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('welpco_user');
    window.location.href = '/login';
  };

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
              href="/service-provider-dashboard"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === "/service-provider-dashboard"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <CheckSquare className="w-5 h-5" />
              <span>Find Jobs</span>
            </Link>
            <Link
              href="/service-provider-dashboard/inbox"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === "/service-provider-dashboard/inbox"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <Mail className="w-5 h-5" />
              <span>Inbox</span>
            </Link>
            <Link
              href="/service-provider-dashboard/reviews"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === "/service-provider-dashboard/reviews"
                  ? "bg-[#00492F] text-white"
                  : "text-gray-600 hover:bg-[#00492F] hover:text-white"
              }`}
            >
              <Heart className="w-5 h-5" />
              <span>Reviews</span>
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
              href="/service-provider-dashboard/profile"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === "/service-provider-dashboard/profile"
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
              href="/service-provider-dashboard/settings"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === "/service-provider-dashboard/settings"
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
  );
} 
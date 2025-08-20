"use client"

import { useState } from "react"
import Link from "next/link"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar currentPath="/settings" onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header onMenuClick={toggleSidebar} />

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Settings</h1>

            {/* General Info Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-0">General Info</h2>
                <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                  Edit Info
                </Link>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">First Name</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Star</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">Last Name</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Shah</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">City</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">London</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">Postalcode</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">1545</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3">
                  <span className="text-gray-600 text-sm sm:text-base">Password</span>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">**********</span>
                    <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                      Change Password
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Info Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-0">Membership Info</h2>
                <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                  Close Account
                </Link>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">Member Since</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">24-04-2024</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">Account Status</span>
                  <span className="font-semibold text-green-600 text-sm sm:text-base">Active</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3">
                  <span className="text-gray-600 text-sm sm:text-base">Plan</span>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">Basic</span>
                    <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                      Upgrade
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Credit Card Info Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-0">Credit Card Info</h2>
                <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                  Close Account
                </Link>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">Linked Card</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">None</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">PayPal</span>
                  <span className="font-semibold text-green-600 text-sm sm:text-base">Connected</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">Google Pay</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">None</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3">
                  <span className="text-gray-600 text-sm sm:text-base">Apple Pay</span>
                  <span className="font-semibold text-green-600 text-sm sm:text-base">Connected</span>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-100">
                <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                  View Billing History
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 
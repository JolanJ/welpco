"use client"

import { useState } from "react"
import Link from "next/link"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar currentPath="/settings" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

            {/* General Info Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">General Info</h2>
                <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                  Edit Info
                </Link>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">First Name</span>
                  <span className="font-semibold text-gray-900">Star</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Last Name</span>
                  <span className="font-semibold text-gray-900">Shah</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">City</span>
                  <span className="font-semibold text-gray-900">London</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Postalcode</span>
                  <span className="font-semibold text-gray-900">1545</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Password</span>
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-900">**********</span>
                    <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                      Change Password
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Info Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Membership Info</h2>
                <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                  Close Account
                </Link>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-semibold text-gray-900">24-04-2024</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Account Status</span>
                  <span className="font-semibold text-green-600">Active</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Plan</span>
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-900">Basic</span>
                    <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                      Upgrade
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Credit Card Info Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Credit Card Info</h2>
                <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                  Close Account
                </Link>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Linked Card</span>
                  <span className="font-semibold text-gray-900">None</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">PayPal</span>
                  <span className="font-semibold text-green-600">Connected</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Google Pay</span>
                  <span className="font-semibold text-gray-900">None</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Apple Pay</span>
                  <span className="font-semibold text-green-600">Connected</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
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
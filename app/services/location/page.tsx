"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin } from "lucide-react"

export default function LocationPage() {
  const [location, setLocation] = useState("")
  const [service, setService] = useState("")

  useEffect(() => {
    // Get service from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    if (serviceParam) {
      setService(serviceParam)
    }
  }, [])

  const handleContinue = () => {
    if (location.trim()) {
      // Check if this is a welper registration flow by looking at the referrer
      const referrer = document.referrer
      if (referrer.includes('find-job-sp')) {
        // Navigate to welper opportunities page
        window.location.href = `/register/welper/opportunities?service=${service}&location=${encodeURIComponent(location)}`
      } else {
        // Navigate directly to the schedule page for regular users
        window.location.href = `/services/schedule?service=${service}&location=${encodeURIComponent(location)}`
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-[#005C3C]">WELPCO®</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#4CA76A] h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            {/* Progress Bubble */}
            <div className="absolute top-0 transform -translate-y-full -translate-x-1/2 -mt-2" style={{ left: '75%' }}>
              <div className="bg-[#4CA76A] text-white text-sm px-3 py-1 rounded-lg relative">
                75%
                {/* Triangle pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4CA76A]"></div>
              </div>
            </div>
          </div>
        </div>


        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Where do you need the service?
          </h1>
        </div>

        {/* Location Input */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="relative">
                         <input
               type="text"
               placeholder="Enter Location here"
               value={location}
               onChange={(e) => setLocation(e.target.value)}
               className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
               onKeyPress={(e) => {
                 if (e.key === 'Enter') {
                   handleContinue()
                 }
               }}
             />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <MapPin className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
                     <button
             onClick={handleContinue}
             disabled={!location.trim()}
             className={`px-12 py-3 rounded-full text-xl font-semibold transition-colors ${
               location.trim()
                 ? 'bg-[#005C3C] text-white hover:bg-[#00492F]'
                 : 'bg-[#005C3C] text-white cursor-not-allowed opacity-50'
             }`}
           >
             Continue
           </button>
        </div>
      </div>
    </div>
  )
} 
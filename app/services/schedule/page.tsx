"use client"

import React, { useState, useEffect } from "react"
import { Calendar } from "lucide-react"

interface ScheduleOption {
  id: string
  title: string
  selected?: boolean
}

export default function SchedulePage() {
  const [selectedSchedule, setSelectedSchedule] = useState<string | null>(null)
  const [service, setService] = useState("")
  const [location, setLocation] = useState("")

  useEffect(() => {
    // Get service and location from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    const locationParam = urlParams.get('location')
    if (serviceParam) {
      setService(serviceParam)
    }
    if (locationParam) {
      setLocation(locationParam)
    }
  }, [])

  const scheduleOptions: ScheduleOption[] = [
    {
      id: "today",
      title: "Today"
    },
    {
      id: "within-3-days",
      title: "Within 3 days"
    },
    {
      id: "within-a-week",
      title: "Within a Week"
    },
    {
      id: "flexible",
      title: "I'm Flexible"
    },
    {
      id: "choose-dates",
      title: "Choose Dates"
    }
  ]

  const handleScheduleSelect = (scheduleId: string) => {
    setSelectedSchedule(scheduleId)
  }

  const handleContinue = () => {
    if (selectedSchedule) {
      // Navigate to the service type selection page
      window.location.href = `/services/type?service=${service}&location=${encodeURIComponent(location)}&schedule=${selectedSchedule}`
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-xl sm:text-2xl font-bold text-[#005C3C]">WELPCO®</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#4CA76A] h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            {/* Progress Bubble */}
            <div className="absolute top-0 transform -translate-y-full -translate-x-1/2 -mt-2" style={{ left: '75%' }}>
              <div className="bg-[#4CA76A] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg relative">
                75%
                {/* Triangle pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4CA76A]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4 px-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            When do you need the service?
          </h1>
        </div>

                 {/* Schedule Options */}
         <div className="max-w-lg mx-auto mb-8 sm:mb-12 lg:mb-16 px-4">
           <div className="space-y-4 sm:space-y-6">
            {scheduleOptions.map((option) => (
                             <div
                 key={option.id}
                 className={`border-2 rounded-full p-3 sm:p-4 cursor-pointer transition-all ${
                   selectedSchedule === option.id
                     ? 'border-[#005C3C] bg-[#005C3C] text-white'
                     : 'border-[#005C3C] hover:bg-gray-50'
                 }`}
                 onClick={() => handleScheduleSelect(option.id)}
               >
                                                                   <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-medium" style={{ 
                      color: selectedSchedule === option.id ? 'white' : '#00492F', 
                      fontWeight: 500 
                    }}>{option.title}</span>
                    {option.id === "choose-dates" && (
                      <Calendar className={`w-4 h-4 sm:w-5 sm:h-5 ${selectedSchedule === option.id ? 'text-white' : 'text-gray-400'}`} />
                    )}
                  </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center px-4">
          <button
            onClick={handleContinue}
            disabled={!selectedSchedule}
            className={`w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold transition-colors ${
              selectedSchedule
                ? 'bg-[#005C3C] text-white hover:bg-[#00492F]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
} 
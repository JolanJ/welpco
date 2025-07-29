"use client"

import React, { useState, useEffect } from "react"
import { Building2 } from "lucide-react"

interface ServiceType {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  selected?: boolean
}

export default function ServiceTypePage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [service, setService] = useState("")
  const [location, setLocation] = useState("")
  const [schedule, setSchedule] = useState("")

  useEffect(() => {
    // Get service, location, and schedule from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    const locationParam = urlParams.get('location')
    const scheduleParam = urlParams.get('schedule')
    if (serviceParam) {
      setService(serviceParam)
    }
    if (locationParam) {
      setLocation(locationParam)
    }
    if (scheduleParam) {
      setSchedule(scheduleParam)
    }
  }, [])

  const serviceTypes: ServiceType[] = [
    {
      id: "recurring",
      title: "recurring services",
      description: "Hire for regular hours, ongoing care, full or part-time",
      icon: <Building2 className="w-8 h-8 text-white" />
    },
    {
      id: "one-time",
      title: "One-time service",
      description: "Instantly book for events, occasional plans or backup care",
      icon: <Building2 className="w-8 h-8 text-white" />
    }
  ]

  const handleTypeSelect = (typeId: string) => {
    setSelectedType(typeId)
  }

  const handleContinue = () => {
    if (selectedType) {
      // Navigate to the finding welpers page with all collected data
      window.location.href = `/services/finding-welpers?service=${service}&location=${encodeURIComponent(location)}&schedule=${schedule}&type=${selectedType}`
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
              <div className="bg-[#4CA76A] h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
            {/* Progress Bubble */}
            <div className="absolute top-0 transform -translate-y-full -translate-x-1/2 -mt-2" style={{ left: '100%' }}>
              <div className="bg-[#4CA76A] text-white text-sm px-3 py-1 rounded-lg relative">
                100%
                {/* Triangle pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4CA76A]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            What kind of service you need?
          </h1>
        </div>

        {/* Service Type Options */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceTypes.map((type) => (
              <div
                key={type.id}
                className={`bg-white border-2 rounded-lg p-6 cursor-pointer transition-all hover:shadow-md ${
                  selectedType === type.id
                    ? 'border-[#005C3C] shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleTypeSelect(type.id)}
              >
                <div className="flex flex-col items-start space-y-4">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-[#00492F] rounded-lg">
                    {type.icon}
                  </div>
                  
                  {/* Title and Description */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900 text-lg">
                      {type.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            disabled={!selectedType}
            className={`px-12 py-3 rounded-full text-xl font-semibold transition-colors ${
              selectedType
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
"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Music } from "lucide-react"

interface EducationType {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function EducationTypePage() {
  const [service, setService] = useState("")
  const [selectedType, setSelectedType] = useState<string | null>(null)

  useEffect(() => {
    // Get service from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    if (serviceParam) {
      setService(serviceParam)
    }
  }, [])

  const educationTypes: EducationType[] = [
    {
      id: "tutoring",
      title: "Tutoring",
      description: "Academic support and subject-specific help",
      icon: <BookOpen className="w-8 h-8 text-[#005C3C]" />
    },
    {
      id: "music-lessons",
      title: "Music Lessons",
      description: "Learn to play instruments and develop musical skills",
      icon: <Music className="w-8 h-8 text-[#005C3C]" />
    }
  ]

  const handleTypeSelect = (typeId: string) => {
    setSelectedType(typeId)
  }

  const handleContinue = () => {
    if (selectedType) {
      // Navigate to the education details page with the selected type
      window.location.href = `/find-job-sp/education-details?service=${service}&educationType=${selectedType}`
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
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#4CA76A] h-2 rounded-full" style={{ width: '55%' }}></div>
            </div>
            {/* Progress Bubble */}
            <div className="absolute top-0 transform -translate-y-full -translate-x-1/2 -mt-2" style={{ left: '55%' }}>
              <div className="bg-[#4CA76A] text-white text-sm px-3 py-1 rounded-lg relative">
                55%
                {/* Triangle pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4CA76A]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            What type of education services do you provide?
          </h1>
        </div>

        {/* Education Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {educationTypes.map((type) => (
            <div
              key={type.id}
              className={`bg-white border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md group ${
                selectedType === type.id
                  ? 'border-[#005C3C] shadow-lg'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-[#00492F] hover:text-white'
              }`}
              onClick={() => handleTypeSelect(type.id)}
            >
              <div className="flex flex-col items-center space-y-4 text-center">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-[#00492F] rounded-lg">
                  {React.cloneElement(type.icon as React.ReactElement<any>, { className: "w-8 h-8 text-white" })}
                </div>
                
                {/* Title and Description */}
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {type.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white">
                    {type.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <Button
            onClick={handleContinue}
            disabled={!selectedType}
            className={`px-8 py-3 rounded-lg text-lg font-semibold ${
              selectedType
                ? 'bg-[#005C3C] text-white hover:bg-[#00492F]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

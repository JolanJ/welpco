"use client"

import React, { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function WelperOpportunitiesPage() {
  const [servicesProvided, setServicesProvided] = useState("")
  const [experienceSkills, setExperienceSkills] = useState("")
  const [hourlyRate, setHourlyRate] = useState("$14")
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
    if (servicesProvided && experienceSkills && hourlyRate) {
      // Navigate to the next step in welper registration
      window.location.href = `/register/welper/personal-info?service=${service}&services=${encodeURIComponent(servicesProvided)}&experience=${encodeURIComponent(experienceSkills)}&rate=${encodeURIComponent(hourlyRate)}`
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
          Find your ideal opportunitie
          </h1>
          <h3 className="text-gray-500" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Describe your service & experience below
          </h3>
        </div>

        {/* Form */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="space-y-8">
                         {/* Services Provided */}
             <div>
               <label className="block text-gray-700 font-medium mb-3">
                 Services provided
               </label>
                              <Select value={servicesProvided} onValueChange={setServicesProvided}>
                  <SelectTrigger className="w-full text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400" style={{ padding: '0.75rem 1.5rem' }}>
                    <SelectValue placeholder="How many children you can care for?" />
                  </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2">1-2 children</SelectItem>
                  <SelectItem value="3-4">3-4 children</SelectItem>
                  <SelectItem value="5+">5+ children</SelectItem>
                  <SelectItem value="any">Any number</SelectItem>
                </SelectContent>
              </Select>
            </div>

                         {/* Experience & Skills */}
             <div>
               <label className="block text-gray-700 font-medium mb-3">
                 Experience & skills
               </label>
                              <Select value={experienceSkills} onValueChange={setExperienceSkills}>
                  <SelectTrigger className="w-full text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400" style={{ padding: '0.75rem 1.5rem' }}>
                    <SelectValue placeholder="How much experience do you have?" />
                  </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                  <SelectItem value="experienced">Experienced (3-5 years)</SelectItem>
                  <SelectItem value="expert">Expert (5+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>

                         {/* Hourly Rate */}
             <div>
               <label className="block text-gray-700 font-medium mb-3">
                 The hourly rate I charge is:
               </label>
                              <Select value={hourlyRate} onValueChange={setHourlyRate}>
                  <SelectTrigger className="w-full text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400" style={{ padding: '0.75rem 1.5rem' }}>
                    <SelectValue />
                  </SelectTrigger>
                <SelectContent>
                  <SelectItem value="$10">$10</SelectItem>
                  <SelectItem value="$12">$12</SelectItem>
                  <SelectItem value="$14">$14</SelectItem>
                  <SelectItem value="$16">$16</SelectItem>
                  <SelectItem value="$18">$18</SelectItem>
                  <SelectItem value="$20">$20</SelectItem>
                  <SelectItem value="$25">$25</SelectItem>
                  <SelectItem value="$30">$30</SelectItem>
                  <SelectItem value="$35+">$35+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            disabled={!servicesProvided || !experienceSkills || !hourlyRate}
            className={`px-12 py-3 rounded-full text-xl font-semibold transition-colors ${
              servicesProvided && experienceSkills && hourlyRate
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

"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Plus, DollarSign } from "lucide-react"

export default function CareDetailsPage() {
  const [service, setService] = useState("")
  const [careType, setCareType] = useState("")
  const [ageGroups, setAgeGroups] = useState([{ minAge: "", maxAge: "" }])
  const [experience, setExperience] = useState("")
  const [certifications, setCertifications] = useState("")
  const [hourlyRate, setHourlyRate] = useState("")
  const [availability, setAvailability] = useState("")
  const [bio, setBio] = useState("")

  useEffect(() => {
    // Get service and careType from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    const careTypeParam = urlParams.get('careType')
    if (serviceParam) {
      setService(serviceParam)
    }
    if (careTypeParam) {
      setCareType(careTypeParam)
    }
  }, [])

  // Auto-resize textarea function
  const autoResize = (element: HTMLTextAreaElement) => {
    element.style.height = 'auto'
    element.style.height = element.scrollHeight + 'px'
  }

  const addAgeGroup = () => {
    setAgeGroups([...ageGroups, { minAge: "", maxAge: "" }])
  }

  const updateAgeGroup = (index: number, field: string, value: string) => {
    const updatedAgeGroups = [...ageGroups]
    updatedAgeGroups[index][field as keyof typeof updatedAgeGroups[0]] = value
    setAgeGroups(updatedAgeGroups)
  }

  const removeAgeGroup = (index: number) => {
    if (ageGroups.length > 1) {
      setAgeGroups(ageGroups.filter((_, i) => i !== index))
    }
  }

  const handleContinue = () => {
    if (experience && hourlyRate && availability) {
      // Navigate to location page with the form data
      const queryParams = new URLSearchParams({
        service: service,
        careType: careType,
        experience: experience,
        hourlyRate: hourlyRate,
        availability: availability,
        bio: bio,
        ageGroups: JSON.stringify(ageGroups),
        certifications: certifications
      })
      
      window.location.href = `/find-job-sp/verification?${queryParams.toString()}`
    }
  }

  const isFormValid = () => {
    return experience && hourlyRate && availability && ageGroups.every(group => group.minAge && group.maxAge)
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
              <div className="bg-[#4CA76A] h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            {/* Progress Bubble */}
            <div className="absolute top-0 transform -translate-y-full -translate-x-1/2 -mt-2" style={{ left: '60%' }}>
              <div className="bg-[#4CA76A] text-white text-sm px-3 py-1 rounded-lg relative">
                60%
                {/* Triangle pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4CA76A]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {careType === "elderly-care" ? "Elderly Care" : careType === "special-needs" ? "Special Needs Care" : "Child Care"} Services
          </h1>
        </div>

        {/* Form */}
        <div className="max-w-lg mx-auto space-y-8">
          {/* Age groups you can care for */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">
                Age groups you can care for
              </h2>
            </div>
            
            {ageGroups.map((group, index) => (
              <div key={index} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Age</label>
                    <input
                      type="number"
                      placeholder="0"
                      value={group.minAge}
                      onChange={(e) => updateAgeGroup(index, "minAge", e.target.value)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Age</label>
                    <input
                      type="number"
                      placeholder="18"
                      value={group.maxAge}
                      onChange={(e) => updateAgeGroup(index, "maxAge", e.target.value)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                    />
                  </div>
                </div>
                {ageGroups.length > 1 && (
                  <div className="flex justify-end">
                    <button
                      onClick={() => removeAgeGroup(index)}
                      className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-red-500 border-2 border-red-300 rounded-full hover:bg-red-50 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
            
            <button
              onClick={addAgeGroup}
              className="px-6 py-3 border-2 border-[#005C3C] text-[#005C3C] rounded-full hover:bg-[#005C3C] hover:text-white transition-colors"
            >
              <Plus className="w-4 h-4 mr-2 inline" />
              Add age group
            </button>
          </div>

          {/* Years of experience */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">Years of experience</h2>
            </div>
            <Select value={experience} onValueChange={setExperience}>
              <SelectTrigger className="w-full text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400" style={{ padding: '0.75rem 1.5rem' }}>
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1">0-1 years (Beginner)</SelectItem>
                <SelectItem value="1-3">1-3 years (Intermediate)</SelectItem>
                <SelectItem value="3-5">3-5 years (Experienced)</SelectItem>
                <SelectItem value="5+">5+ years (Expert)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">Certifications (optional)</h2>
            </div>
            <input
              type="text"
              placeholder="e.g., CPR, First Aid, Child Care Certificate"
              value={certifications}
              onChange={(e) => setCertifications(e.target.value)}
              className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Hourly rate */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">Your hourly rate</h2>
            </div>
            <input
              type="number"
              placeholder="Enter your hourly rate"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Availability */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">Your availability</h2>
            </div>
            <Select value={availability} onValueChange={setAvailability}>
              <SelectTrigger className="w-full text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400" style={{ padding: '0.75rem 1.5rem' }}>
                <SelectValue placeholder="Select your availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekdays">Weekdays only</SelectItem>
                <SelectItem value="weekends">Weekends only</SelectItem>
                <SelectItem value="weekdays-weekends">Weekdays and weekends</SelectItem>
                <SelectItem value="flexible">Flexible schedule</SelectItem>
                <SelectItem value="on-demand">On-demand availability</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">About you</h2>
            <textarea
              placeholder="Tell families about your experience, approach to care, and what makes you a great caregiver..."
              value={bio}
              onChange={(e) => {
                setBio(e.target.value)
                autoResize(e.target)
              }}
              onInput={(e) => autoResize(e.target as HTMLTextAreaElement)}
              className="w-full px-4 py-3 border-2 border-[#005C3C] rounded-lg focus:outline-none focus:border-[#005C3C] min-h-[100px] resize-y"
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleContinue}
            disabled={!isFormValid()}
            className={`px-8 py-2 rounded-lg text-lg font-semibold ${
              isFormValid()
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

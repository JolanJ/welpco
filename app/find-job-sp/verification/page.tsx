"use client"

import React, { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function WelperPersonalInfoPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [gender, setGender] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [heardAbout, setHeardAbout] = useState("")
  const [service, setService] = useState("")
  const [services, setServices] = useState("")
  const [experience, setExperience] = useState("")
  const [rate, setRate] = useState("")

  useEffect(() => {
    // Get parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    const servicesParam = urlParams.get('services')
    const experienceParam = urlParams.get('experience')
    const rateParam = urlParams.get('rate')
    
    if (serviceParam) setService(serviceParam)
    if (servicesParam) setServices(servicesParam)
    if (experienceParam) setExperience(experienceParam)
    if (rateParam) setRate(rateParam)
  }, [])

  const handleContinue = () => {
    if (firstName && lastName && gender && dateOfBirth && heardAbout) {
      // Navigate to the location page
      window.location.href = `/find-job-sp/location?service=${service}&services=${encodeURIComponent(services)}&experience=${encodeURIComponent(experience)}&rate=${encodeURIComponent(rate)}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&gender=${encodeURIComponent(gender)}&dob=${encodeURIComponent(dateOfBirth)}&heard=${encodeURIComponent(heardAbout)}`
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
              <div className="bg-[#4CA76A] h-2 rounded-full" style={{ width: '50%' }}></div>
            </div>
            {/* Progress Bubble */}
            <div className="absolute top-0 transform -translate-y-full -translate-x-1/2 -mt-2" style={{ left: '50%' }}>
              <div className="bg-[#4CA76A] text-white text-sm px-3 py-1 rounded-lg relative">
                50%
                {/* Triangle pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4CA76A]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Nice work! Your profile is nearly complete
          </h1>
        </div>

        {/* Form */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="space-y-8">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                First Name
              </label>
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                style={{ padding: '0.75rem 1.5rem' }}
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Last Name
              </label>
              <Input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                style={{ padding: '0.75rem 1.5rem' }}
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Please select a gender
              </label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger className="w-full text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400" style={{ padding: '0.75rem 1.5rem' }}>
                  <SelectValue placeholder="Select Option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Date of birth
              </label>
              <Input
                type="text"
                placeholder="MM/DD/YYYY"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="w-full text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                style={{ padding: '0.75rem 1.5rem' }}
              />
            </div>

            {/* How did you hear about us */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                How did you hear about us?
              </label>
              <Select value={heardAbout} onValueChange={setHeardAbout}>
                <SelectTrigger className="w-full text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400" style={{ padding: '0.75rem 1.5rem' }}>
                  <SelectValue placeholder="Select Option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="social-media">Social Media</SelectItem>
                  <SelectItem value="friend-referral">Friend Referral</SelectItem>
                  <SelectItem value="online-search">Online Search</SelectItem>
                  <SelectItem value="advertisement">Advertisement</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm">
            By clicking "Continue", you agree to our{" "}
            <a href="/terms" className="underline text-[#005C3C]">Terms of Use</a>{" "}
            and{" "}
            <a href="/privacy" className="underline text-[#005C3C]">Privacy Policy</a>.
          </p>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            disabled={!firstName || !lastName || !gender || !dateOfBirth || !heardAbout}
            className={`px-12 py-3 rounded-full text-xl font-semibold transition-colors ${
              firstName && lastName && gender && dateOfBirth && heardAbout
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

"use client"

import React, { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { MapPin } from "lucide-react"

export default function WelperLocationPage() {
  const [location, setLocation] = useState("")
  const [range, setRange] = useState(25)
  const [service, setService] = useState("")
  const [services, setServices] = useState("")
  const [experience, setExperience] = useState("")
  const [rate, setRate] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [gender, setGender] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [heardAbout, setHeardAbout] = useState("")

  useEffect(() => {
    // Get parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    const servicesParam = urlParams.get('services')
    const experienceParam = urlParams.get('experience')
    const rateParam = urlParams.get('rate')
    const firstNameParam = urlParams.get('firstName')
    const lastNameParam = urlParams.get('lastName')
    const genderParam = urlParams.get('gender')
    const dobParam = urlParams.get('dob')
    const heardParam = urlParams.get('heard')
    
    if (serviceParam) setService(serviceParam)
    if (servicesParam) setServices(servicesParam)
    if (experienceParam) setExperience(experienceParam)
    if (rateParam) setRate(rateParam)
    if (firstNameParam) setFirstName(firstNameParam)
    if (lastNameParam) setLastName(lastNameParam)
    if (genderParam) setGender(genderParam)
    if (dobParam) setDateOfBirth(dobParam)
    if (heardParam) setHeardAbout(heardParam)
  }, [])

  const handleJoinNow = () => {
    if (location.trim()) {
      // Navigate to the next step in welper registration
      window.location.href = `/register/welper/verification?service=${service}&services=${encodeURIComponent(services)}&experience=${encodeURIComponent(experience)}&rate=${encodeURIComponent(rate)}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&gender=${encodeURIComponent(gender)}&dob=${encodeURIComponent(dateOfBirth)}&heard=${encodeURIComponent(heardAbout)}&location=${encodeURIComponent(location)}&range=${range}`
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
            Please provide your location and select the
          </h1>
          <h3 className="text-2xl font-medium text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            area you'd like to cover
          </h3>
        </div>

        {/* Form */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="space-y-12">
            {/* Location Input */}
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter Location here"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400 pr-12"
                style={{ padding: '0.75rem 1.5rem' }}
              />
              <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
            </div>

            {/* Range Slider */}
            <div>
              <div className="mb-4">
                <div className="flex justify-between text-gray-700 font-medium">
                  <span>0km</span>
                  <span>500km</span>
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={range}
                  onChange={(e) => setRange(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#005C3C] rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #005C3C 0%, #005C3C ${(range / 500) * 100}%, #e5e7eb ${(range / 500) * 100}%, #e5e7eb 100%)`
                  }}
                />
                
                {/* Range Value Display */}
                <div 
                  className="absolute top-6 transform -translate-x-1/2 text-gray-700 font-medium"
                  style={{ left: `${(range / 500) * 100}%` }}
                >
                  {range}km
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Now Button */}
        <div className="text-center">
          <button
            onClick={handleJoinNow}
            disabled={!location.trim()}
            className={`px-12 py-3 rounded-full text-xl font-semibold transition-colors ${
              location.trim()
                ? 'bg-[#005C3C] text-white hover:bg-[#00492F]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Join Now
          </button>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #4CA76A;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #4CA76A;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  )
}

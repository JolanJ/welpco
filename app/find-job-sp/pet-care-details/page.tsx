"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Plus, DollarSign, PawPrint, Scissors, Fish, GraduationCap, Home } from "lucide-react"

export default function PetCareDetailsPage() {
  const [service, setService] = useState("")
  const [petCareType, setPetCareType] = useState("")
  const [petTypes, setPetTypes] = useState([{ type: "", experience: "" }])
  const [experience, setExperience] = useState("")
  const [certifications, setCertifications] = useState("")
  const [hourlyRate, setHourlyRate] = useState("")
  const [availability, setAvailability] = useState("")
  const [bio, setBio] = useState("")

  useEffect(() => {
    // Get service and petCareType from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    const petCareTypeParam = urlParams.get('petCareType')
    if (serviceParam) {
      setService(serviceParam)
    }
    if (petCareTypeParam) {
      setPetCareType(petCareTypeParam)
    }
  }, [])

  // Auto-resize textarea function
  const autoResize = (element: HTMLTextAreaElement) => {
    element.style.height = 'auto'
    element.style.height = element.scrollHeight + 'px'
  }

  const addPetType = () => {
    setPetTypes([...petTypes, { type: "", experience: "" }])
  }

  const updatePetType = (index: number, field: string, value: string) => {
    const updatedPetTypes = [...petTypes]
    updatedPetTypes[index][field as keyof typeof updatedPetTypes[0]] = value
    setPetTypes(updatedPetTypes)
  }

  const removePetType = (index: number) => {
    if (petTypes.length > 1) {
      setPetTypes(petTypes.filter((_, i) => i !== index))
    }
  }

  const getTitle = () => {
    switch (petCareType) {
      case "dog-walks": return "Dog Walking"
      case "pet-grooming": return "Pet Grooming"
      case "aquarium-cleaning": return "Aquarium & Terrarium Cleaning"
      case "dog-training": return "Dog Training"
      case "pet-sitting": return "Pet Sitting"
      default: return "Pet Care"
    }
  }

  const getServiceIcon = () => {
    switch (petCareType) {
      case "dog-walks": return <PawPrint className="w-5 h-5 text-[#005C3C]" />
      case "pet-grooming": return <Scissors className="w-5 h-5 text-[#005C3C]" />
      case "aquarium-cleaning": return <Fish className="w-5 h-5 text-[#005C3C]" />
      case "dog-training": return <GraduationCap className="w-5 h-5 text-[#005C3C]" />
      case "pet-sitting": return <Home className="w-5 h-5 text-[#005C3C]" />
      default: return <PawPrint className="w-5 h-5 text-[#005C3C]" />
    }
  }

  const isFormValid = () => {
    return experience && hourlyRate && availability && petTypes.every(pet => pet.type && pet.experience)
  }

  const handleContinue = () => {
    if (isFormValid()) {
      // Navigate to location page with the form data
      const queryParams = new URLSearchParams({
        service: service,
        petCareType: petCareType,
        experience: experience,
        hourlyRate: hourlyRate,
        availability: availability,
        bio: bio,
        petTypes: JSON.stringify(petTypes),
        certifications: certifications
      })
      
      window.location.href = `/find-job-sp/location?${queryParams.toString()}`
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
            {getTitle()} Services
          </h1>
        </div>

        {/* Form */}
        <div className="max-w-lg mx-auto space-y-8">
          {/* Pet types you can care for */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">
                Pet types you can care for
              </h2>
            </div>
            
            {petTypes.map((pet, index) => (
              <div key={index} className="flex space-x-4 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pet Type</label>
                  <input
                    type="text"
                    placeholder="e.g., Dogs, Cats, Birds, Fish"
                    value={pet.type}
                    onChange={(e) => updatePetType(index, "type", e.target.value)}
                    className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  <input
                    type="text"
                    placeholder="e.g., 3 years, Certified"
                    value={pet.experience}
                    onChange={(e) => updatePetType(index, "experience", e.target.value)}
                    className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                  />
                </div>
                {petTypes.length > 1 && (
                  <button
                    onClick={() => removePetType(index)}
                    className="px-4 py-3 text-red-500 border-2 border-red-300 rounded-full hover:bg-red-50 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            
            <button
              onClick={addPetType}
              className="px-6 py-3 border-2 border-[#005C3C] text-[#005C3C] rounded-full hover:bg-[#005C3C] hover:text-white transition-colors"
            >
              <Plus className="w-4 h-4 mr-2 inline" />
              Add pet type
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
              placeholder="e.g., Pet First Aid, Dog Training Certificate, Grooming License"
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
              placeholder="Tell pet owners about your experience, approach to pet care, and what makes you a great pet caregiver..."
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
            className={`px-12 py-3 rounded-full text-xl font-semibold transition-colors ${
              isFormValid()
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

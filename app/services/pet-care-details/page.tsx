"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Plus, DollarSign, PawPrint, Scissors, Fish, GraduationCap, Home } from "lucide-react"

export default function PetCareDetailsPage() {
  const [service, setService] = useState("")
  const [petCareType, setPetCareType] = useState("")
  const [dogs, setDogs] = useState([{ name: "", size: "" }])
  const [pets, setPets] = useState([{ type: "", name: "" }])
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [payPerHour, setPayPerHour] = useState("")
  const [notes, setNotes] = useState("")
  const [petType, setPetType] = useState("")
  const [terrariumSize, setTerrariumSize] = useState("")
  const [numberOfDays, setNumberOfDays] = useState("")
  const [endDate, setEndDate] = useState("")

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

  const addDog = () => {
    setDogs([...dogs, { name: "", size: "" }])
  }

  const updateDog = (index: number, field: string, value: string) => {
    const updatedDogs = [...dogs]
    updatedDogs[index][field as keyof typeof updatedDogs[0]] = value
    setDogs(updatedDogs)
  }

  const removeDog = (index: number) => {
    if (dogs.length > 1) {
      setDogs(dogs.filter((_, i) => i !== index))
    }
  }

  const addPet = () => {
    setPets([...pets, { type: "", name: "" }])
  }

  const updatePet = (index: number, field: string, value: string) => {
    const updatedPets = [...pets]
    updatedPets[index][field as keyof typeof updatedPets[0]] = value
    setPets(updatedPets)
  }

  const removePet = (index: number) => {
    if (pets.length > 1) {
      setPets(pets.filter((_, i) => i !== index))
    }
  }

  const getTitle = () => {
    switch (petCareType) {
      case "dog-walks": return "Dog Walks"
      case "pet-grooming": return "Pet Grooming"
      case "aquarium-cleaning": return "Aquarium & Terrarium"
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
    const baseValid = date && startTime && endTime && payPerHour
    
    switch (petCareType) {
      case "dog-walks":
      case "dog-training":
        return baseValid && dogs.every(dog => dog.name && dog.size)
      case "pet-grooming":
        return baseValid && petType
      case "aquarium-cleaning":
        return baseValid && terrariumSize
      case "pet-sitting":
        return baseValid && pets.every(pet => pet.type && pet.name) && numberOfDays
      default:
        return baseValid
    }
  }

  const handleContinue = () => {
    if (isFormValid()) {
      // Navigate to location page with the form data
      const queryParams = new URLSearchParams({
        service: service,
        petCareType: petCareType,
        date: date,
        startTime: startTime,
        endTime: endTime,
        payPerHour: payPerHour,
        notes: notes
      })

      // Add specific data based on pet care type
      switch (petCareType) {
        case "dog-walks":
        case "dog-training":
          queryParams.append("dogs", JSON.stringify(dogs))
          break
        case "pet-grooming":
          queryParams.append("petType", petType)
          break
        case "aquarium-cleaning":
          queryParams.append("terrariumSize", terrariumSize)
          break
        case "pet-sitting":
          queryParams.append("pets", JSON.stringify(pets))
          queryParams.append("numberOfDays", numberOfDays)
          if (endDate) queryParams.append("endDate", endDate)
          break
      }
      
      window.location.href = `/services/location?${queryParams.toString()}`
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
            {getTitle()}
          </h1>
        </div>

        {/* Form */}
        <div className="max-w-lg mx-auto space-y-8">
          {/* Service Type Selection */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {getServiceIcon()}
              <h2 className="text-xl font-bold text-gray-900">Select your type of service</h2>
            </div>
          </div>

          {/* Dog Walks & Dog Training Specific Fields */}
          {(petCareType === "dog-walks" || petCareType === "dog-training") && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#005C3C]" />
                <h2 className="text-xl font-bold text-gray-900">How many dogs?</h2>
              </div>
              
              {dogs.map((dog, index) => (
                <div key={index} className="flex space-x-4 items-end">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dog Name</label>
                    <input
                      type="text"
                      placeholder="Enter dog's name"
                      value={dog.name}
                      onChange={(e) => updateDog(index, "name", e.target.value)}
                      className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                    <select
                      value={dog.size}
                      onChange={(e) => updateDog(index, "size", e.target.value)}
                      className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none"
                    >
                      <option value="">Select size</option>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>
                  {dogs.length > 1 && (
                    <button
                      onClick={() => removeDog(index)}
                      className="px-4 py-3 text-red-500 border-2 border-red-300 rounded-full hover:bg-red-50 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              
              <button
                onClick={addDog}
                className="px-6 py-3 border-2 border-[#005C3C] text-[#005C3C] rounded-full hover:bg-[#005C3C] hover:text-white transition-colors"
              >
                <Plus className="w-4 h-4 mr-2 inline" />
                Add dog
              </button>
            </div>
          )}

          {/* Pet Grooming Specific Fields */}
          {petCareType === "pet-grooming" && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <PawPrint className="w-5 h-5 text-[#005C3C]" />
                <h2 className="text-xl font-bold text-gray-900">Type of pet?</h2>
              </div>
              <input
                type="text"
                placeholder="Enter pet type (e.g., dog, cat, rabbit)"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
              />
            </div>
          )}

          {/* Aquarium Cleaning Specific Fields */}
          {petCareType === "aquarium-cleaning" && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Fish className="w-5 h-5 text-[#005C3C]" />
                <h2 className="text-xl font-bold text-gray-900">Approximate size of Terrarium</h2>
              </div>
              <input
                type="text"
                placeholder="Enter size (e.g., 20 gallons, 50L)"
                value={terrariumSize}
                onChange={(e) => setTerrariumSize(e.target.value)}
                className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
              />
            </div>
          )}

          {/* Pet Sitting Specific Fields */}
          {petCareType === "pet-sitting" && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#005C3C]" />
                <h2 className="text-xl font-bold text-gray-900">How many pets?</h2>
              </div>
              
              {pets.map((pet, index) => (
                <div key={index} className="flex space-x-4 items-end">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pet Type</label>
                    <input
                      type="text"
                      placeholder="Enter pet type"
                      value={pet.type}
                      onChange={(e) => updatePet(index, "type", e.target.value)}
                      className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pet Name</label>
                    <input
                      type="text"
                      placeholder="Enter pet's name"
                      value={pet.name}
                      onChange={(e) => updatePet(index, "name", e.target.value)}
                      className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                    />
                  </div>
                  {pets.length > 1 && (
                    <button
                      onClick={() => removePet(index)}
                      className="px-4 py-3 text-red-500 border-2 border-red-300 rounded-full hover:bg-red-50 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              
              <button
                onClick={addPet}
                className="px-6 py-3 border-2 border-[#005C3C] text-[#005C3C] rounded-full hover:bg-[#005C3C] hover:text-white transition-colors"
              >
                <Plus className="w-4 h-4 mr-2 inline" />
                Add pet
              </button>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-[#005C3C]" />
                  <h2 className="text-xl font-bold text-gray-900">Number of days</h2>
                </div>
                <input
                  type="number"
                  placeholder="Enter number of days"
                  value={numberOfDays}
                  onChange={(e) => setNumberOfDays(e.target.value)}
                  className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                />
              </div>
            </div>
          )}

          {/* Date needed */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">
                {petCareType === "pet-sitting" ? "Estimated start date" : "Date needed"}
              </h2>
            </div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none"
            />
          </div>

          {/* End date for pet sitting (if more than 1 day) */}
          {petCareType === "pet-sitting" && numberOfDays && parseInt(numberOfDays) > 1 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-[#005C3C]" />
                <h2 className="text-xl font-bold text-gray-900">Estimated end date</h2>
              </div>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none"
              />
            </div>
          )}

          {/* Time Range */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">Time Range</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Pay per hour */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">Pay per hour</h2>
            </div>
            <input
              type="number"
              placeholder="Enter amount"
              value={payPerHour}
              onChange={(e) => setPayPerHour(e.target.value)}
              className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Notes */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Notes</h2>
            <textarea
              placeholder="Any additional notes or special requirements..."
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value)
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

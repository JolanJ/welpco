"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Plus, DollarSign, Utensils, Dumbbell, Apple, Leaf } from "lucide-react"

export default function HealthWellnessDetailsPage() {
  const [service, setService] = useState("")
  const [healthWellnessType, setHealthWellnessType] = useState("")
  const [people, setPeople] = useState([{ name: "", age: "" }])
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [payPerHour, setPayPerHour] = useState("")
  const [notes, setNotes] = useState("")
  const [numberOfDays, setNumberOfDays] = useState("")
  const [mealsPerDay, setMealsPerDay] = useState("")
  const [endDate, setEndDate] = useState("")
  const [trainingType, setTrainingType] = useState("")

  useEffect(() => {
    // Get service and healthWellnessType from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    const healthWellnessTypeParam = urlParams.get('healthWellnessType')
    if (serviceParam) {
      setService(serviceParam)
    }
    if (healthWellnessTypeParam) {
      setHealthWellnessType(healthWellnessTypeParam)
    }
  }, [])

  // Auto-resize textarea function
  const autoResize = (element: HTMLTextAreaElement) => {
    element.style.height = 'auto'
    element.style.height = element.scrollHeight + 'px'
  }

  const addPerson = () => {
    setPeople([...people, { name: "", age: "" }])
  }

  const updatePerson = (index: number, field: string, value: string) => {
    const updatedPeople = [...people]
    updatedPeople[index][field as keyof typeof updatedPeople[0]] = value
    setPeople(updatedPeople)
  }

  const removePerson = (index: number) => {
    if (people.length > 1) {
      setPeople(people.filter((_, i) => i !== index))
    }
  }

  const getTitle = () => {
    switch (healthWellnessType) {
      case "meal-preparation": return "Meal Preparation"
      case "personal-trainer": return "Personal Trainer"
      case "dietician": return "Dietician"
      case "nutritionist": return "Nutritionist"
      default: return "Health & Wellness"
    }
  }

  const getServiceIcon = () => {
    switch (healthWellnessType) {
      case "meal-preparation": return <Utensils className="w-5 h-5 text-[#005C3C]" />
      case "personal-trainer": return <Dumbbell className="w-5 h-5 text-[#005C3C]" />
      case "dietician": return <Apple className="w-5 h-5 text-[#005C3C]" />
      case "nutritionist": return <Leaf className="w-5 h-5 text-[#005C3C]" />
      default: return <Utensils className="w-5 h-5 text-[#005C3C]" />
    }
  }

  const isFormValid = () => {
    const baseValid = date && payPerHour
    
    switch (healthWellnessType) {
      case "meal-preparation":
        return baseValid && people.every(person => person.name && person.age) && numberOfDays && mealsPerDay
      case "personal-trainer":
        return baseValid && trainingType && startTime && endTime
      case "dietician":
      case "nutritionist":
        return baseValid && endDate
      default:
        return baseValid
    }
  }

  const handleContinue = () => {
    if (isFormValid()) {
      // Navigate to location page with the form data
      const queryParams = new URLSearchParams({
        service: service,
        healthWellnessType: healthWellnessType,
        date: date,
        payPerHour: payPerHour,
        notes: notes
      })

      // Add specific data based on health and wellness type
      switch (healthWellnessType) {
        case "meal-preparation":
          queryParams.append("people", JSON.stringify(people))
          queryParams.append("numberOfDays", numberOfDays)
          queryParams.append("mealsPerDay", mealsPerDay)
          break
        case "personal-trainer":
          queryParams.append("trainingType", trainingType)
          if (startTime) queryParams.append("startTime", startTime)
          if (endTime) queryParams.append("endTime", endTime)
          break
        case "dietician":
        case "nutritionist":
          queryParams.append("endDate", endDate)
          if (time) queryParams.append("time", time)
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

          {/* Meal Preparation Specific Fields */}
          {healthWellnessType === "meal-preparation" && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#005C3C]" />
                <h2 className="text-xl font-bold text-gray-900">How many people?</h2>
              </div>
              
              {people.map((person, index) => (
                <div key={index} className="flex space-x-4 items-end">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Person Name</label>
                    <input
                      type="text"
                      placeholder="Enter person's name"
                      value={person.name}
                      onChange={(e) => updatePerson(index, "name", e.target.value)}
                      className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input
                      type="number"
                      placeholder="Age"
                      value={person.age}
                      onChange={(e) => updatePerson(index, "age", e.target.value)}
                      className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                    />
                  </div>
                  {people.length > 1 && (
                    <button
                      onClick={() => removePerson(index)}
                      className="px-4 py-3 text-red-500 border-2 border-red-300 rounded-full hover:bg-red-50 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              
              <button
                onClick={addPerson}
                className="px-6 py-3 border-2 border-[#005C3C] text-[#005C3C] rounded-full hover:bg-[#005C3C] hover:text-white transition-colors"
              >
                <Plus className="w-4 h-4 mr-2 inline" />
                Add person
              </button>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-[#005C3C]" />
                  <h2 className="text-xl font-bold text-gray-900">How many days?</h2>
                </div>
                <input
                  type="number"
                  placeholder="Enter number of days"
                  value={numberOfDays}
                  onChange={(e) => setNumberOfDays(e.target.value)}
                  className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Utensils className="w-5 h-5 text-[#005C3C]" />
                  <h2 className="text-xl font-bold text-gray-900">How many meals per day?</h2>
                </div>
                <input
                  type="number"
                  placeholder="Enter number of meals per day"
                  value={mealsPerDay}
                  onChange={(e) => setMealsPerDay(e.target.value)}
                  className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                />
              </div>
            </div>
          )}

          {/* Personal Trainer Specific Fields */}
          {healthWellnessType === "personal-trainer" && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Dumbbell className="w-5 h-5 text-[#005C3C]" />
                <h2 className="text-xl font-bold text-gray-900">Training Type</h2>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setTrainingType("one-time")}
                  className={`px-6 py-3 border-2 rounded-full transition-colors ${
                    trainingType === "one-time"
                      ? 'bg-[#005C3C] text-white border-[#005C3C]'
                      : 'border-[#005C3C] text-[#005C3C] hover:bg-[#005C3C] hover:text-white'
                  }`}
                >
                  One-time training
                </button>
                <button
                  onClick={() => setTrainingType("recurring")}
                  className={`px-6 py-3 border-2 rounded-full transition-colors ${
                    trainingType === "recurring"
                      ? 'bg-[#005C3C] text-white border-[#005C3C]'
                      : 'border-[#005C3C] text-[#005C3C] hover:bg-[#005C3C] hover:text-white'
                  }`}
                >
                  Recurring
                </button>
              </div>
            </div>
          )}

          {/* Date needed */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">Estimated Start Date</h2>
            </div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none"
            />
          </div>

          {/* End date for dietician and nutritionist */}
          {(healthWellnessType === "dietician" || healthWellnessType === "nutritionist") && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-[#005C3C]" />
                <h2 className="text-xl font-bold text-gray-900">Estimated End Date</h2>
              </div>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none"
              />
            </div>
          )}

          {/* Time Range (only for personal trainer) */}
          {healthWellnessType === "personal-trainer" && (
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
          )}

          {/* Time (only for dietician, nutritionist) */}
          {(healthWellnessType === "dietician" || healthWellnessType === "nutritionist") && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#005C3C]" />
                <h2 className="text-xl font-bold text-gray-900">Time</h2>
              </div>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none"
              />
            </div>
          )}

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

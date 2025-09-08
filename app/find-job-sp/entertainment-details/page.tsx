"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, DollarSign, PartyPopper } from "lucide-react"

export default function EntertainmentDetailsPage() {
  const [service, setService] = useState("")
  const [entertainmentType, setEntertainmentType] = useState("")
  const [eventType, setEventType] = useState("")
  const [numberOfPeople, setNumberOfPeople] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [payPerHour, setPayPerHour] = useState("")
  const [notes, setNotes] = useState("")

  useEffect(() => {
    // Get service and entertainmentType from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    const entertainmentTypeParam = urlParams.get('entertainmentType')
    if (serviceParam) {
      setService(serviceParam)
    }
    if (entertainmentTypeParam) {
      setEntertainmentType(entertainmentTypeParam)
    }
  }, [])

  // Auto-resize textarea function
  const autoResize = (element: HTMLTextAreaElement) => {
    element.style.height = 'auto'
    element.style.height = element.scrollHeight + 'px'
  }

  const getTitle = () => {
    switch (entertainmentType) {
      case "catering": return "Catering"
      case "party-planning": return "Party Planning"
      case "magician": return "Magician"
      case "clown": return "Clown"
      case "server": return "Server"
      case "assistant": return "Assistant for Party"
      case "bartender": return "Bartender"
      default: return "Entertainment"
    }
  }

  const getServiceIcon = () => {
    return <PartyPopper className="w-5 h-5 text-[#005C3C]" />
  }

  const isFormValid = () => {
    return date && time && payPerHour && eventType && numberOfPeople
  }

  const handleContinue = () => {
    if (isFormValid()) {
      // Navigate to location page with the form data
      const queryParams = new URLSearchParams({
        service: service,
        entertainmentType: entertainmentType,
        eventType: eventType,
        numberOfPeople: numberOfPeople,
        date: date,
        time: time,
        payPerHour: payPerHour,
        notes: notes
      })
      
      window.location.href = `/find-job-sp/verification?${queryParams.toString()}`
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

          {/* Event Type Selection */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">Who is this event for?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <button
                onClick={() => setEventType("adults")}
                className={`px-4 sm:px-6 py-3 border-2 rounded-full transition-colors text-center ${
                  eventType === "adults"
                    ? 'bg-[#005C3C] text-white border-[#005C3C]'
                    : 'border-[#005C3C] text-[#005C3C] hover:bg-[#005C3C] hover:text-white'
                }`}
              >
                Adults Only
              </button>
              <button
                onClick={() => setEventType("children")}
                className={`px-4 sm:px-6 py-3 border-2 rounded-full transition-colors text-center ${
                  eventType === "children"
                    ? 'bg-[#005C3C] text-white border-[#005C3C]'
                    : 'border-[#005C3C] text-[#005C3C] hover:bg-[#005C3C] hover:text-white'
                }`}
              >
                Children
              </button>
              <button
                onClick={() => setEventType("family")}
                className={`px-4 sm:px-6 py-3 border-2 rounded-full transition-colors text-center ${
                  eventType === "family"
                    ? 'bg-[#005C3C] text-white border-[#005C3C]'
                    : 'border-[#005C3C] text-[#005C3C] hover:bg-[#005C3C] hover:text-white'
                }`}
              >
                All Ages
              </button>
            </div>
          </div>

          {/* Number of People */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">How many people are attending the event?</h2>
            </div>
            <input
              type="number"
              placeholder="Enter number of people"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
              className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Date needed */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">Date needed</h2>
            </div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none"
            />
          </div>

          {/* Time */}
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

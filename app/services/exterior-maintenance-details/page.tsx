"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, DollarSign, Leaf } from "lucide-react"

export default function ExteriorMaintenanceDetailsPage() {
  const [service, setService] = useState("")
  const [exteriorMaintenanceType, setExteriorMaintenanceType] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [costRange, setCostRange] = useState("")
  const [notes, setNotes] = useState("")

  useEffect(() => {
    // Get service and exteriorMaintenanceType from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    const exteriorMaintenanceTypeParam = urlParams.get('exteriorMaintenanceType')
    if (serviceParam) {
      setService(serviceParam)
    }
    if (exteriorMaintenanceTypeParam) {
      setExteriorMaintenanceType(exteriorMaintenanceTypeParam)
    }
  }, [])

  // Auto-resize textarea function
  const autoResize = (element: HTMLTextAreaElement) => {
    element.style.height = 'auto'
    element.style.height = element.scrollHeight + 'px'
  }

  const getTitle = () => {
    switch (exteriorMaintenanceType) {
      case "lawn-mowing": return "Lawn Mowing"
      case "tree-planting": return "Tree Planting"
      case "gardening": return "Gardening"
      case "car-washing": return "Car Washing"
      case "gutter-cleaning": return "Gutter Cleaning"
      case "window-cleaning": return "Window Cleaning"
      case "exterior-property-cleaning": return "Exterior Property Cleaning"
      case "snow-removal": return "Snow Removal"
      case "pool-opening-closing": return "Pool Opening/Closing"
      case "raking-leaves": return "Raking Leaves"
      case "summer-winter-preparation": return "Summer/Winter Preparation"
      default: return "Exterior Maintenance"
    }
  }

  const getServiceIcon = () => {
    return <Leaf className="w-5 h-5 text-[#005C3C]" />
  }

  const isFormValid = () => {
    return date && time && costRange
  }

  const handleContinue = () => {
    if (isFormValid()) {
      // Navigate to location page with the form data
      const queryParams = new URLSearchParams({
        service: service,
        exteriorMaintenanceType: exteriorMaintenanceType,
        date: date,
        time: time,
        costRange: costRange,
        notes: notes
      })
      
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

          {/* Estimated date */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">Estimated date</h2>
            </div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none"
            />
          </div>

          {/* Estimated time */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">Estimated time</h2>
            </div>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none"
            />
          </div>

          {/* Range of cost per hour */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-[#005C3C]" />
              <h2 className="text-xl font-bold text-gray-900">Range of cost per hour</h2>
            </div>
            <input
              type="text"
              placeholder="e.g., $20-30, $50-75"
              value={costRange}
              onChange={(e) => setCostRange(e.target.value)}
              className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Notes */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">More details</h2>
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

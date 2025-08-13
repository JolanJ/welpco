"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import TimeRangeSlider from "@/components/time-range-slider"
import {
  X,
  Plus,
  Calendar,
  Clock,
} from "lucide-react"

export default function CareRequestPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    location: "",
    ageRange: "",
    scheduleType: "one-time",
    startDate: "23-06-2024",
    endDate: "",
    timeRange: [9, 17], // 9 AM to 5 PM
    helpTypes: [] as string[],
    caregiverQualities: [] as string[],
    priceRange: [15, 32], // $15 to $32 per hour
  })

  const helpTypes = [
    "Light housekeeping / Meal prep",
    "Activities / Outings / Help",
    "Emergency situations"
  ]

  const caregiverQualities = [
    "Comfortable with pets",
    "CPR / First aid trained",
    "Can provide a meal",
    "Has a vehicle / Car",
    "Non-smoker"
  ]

  const handleHelpTypeToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      helpTypes: prev.helpTypes.includes(type)
        ? prev.helpTypes.filter(t => t !== type)
        : [...prev.helpTypes, type]
    }))
  }

  const handleQualityToggle = (quality: string) => {
    setFormData(prev => ({
      ...prev,
      caregiverQualities: prev.caregiverQualities.includes(quality)
        ? prev.caregiverQualities.filter(q => q !== quality)
        : [...prev.caregiverQualities, quality]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Navigate to caregiver results page
    router.push("/caregiver-results")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar currentPath="/care-request" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Enter your details to connect with caregivers!
            </h1>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Location */}
              <div>
                <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                  Where do you need the child care?
                </Label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Enter location here"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    className="pr-10"
                  />
                  {formData.location && (
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, location: "" }))}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  )}
                </div>
              </div>

              {/* Who needs Care */}
              <div>
                <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                  Who needs Care?
                </Label>
                <select
                  value={formData.ageRange}
                  onChange={(e) => setFormData(prev => ({ ...prev, ageRange: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#005C3C] focus:ring-[#005C3C]"
                >
                  <option value="">Select an age range</option>
                  <option value="0-1">0-1 years (Infant)</option>
                  <option value="1-3">1-3 years (Toddler)</option>
                  <option value="3-5">3-5 years (Preschool)</option>
                  <option value="5-12">5-12 years (School age)</option>
                  <option value="12+">12+ years (Teen)</option>
                </select>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-3 border-[#005C3C] text-[#005C3C] hover:bg-[#005C3C] hover:text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add another child
                </Button>
              </div>

              {/* When do you need care */}
              <div>
                <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                  When do you need care?
                </Label>
                <RadioGroup
                  value={formData.scheduleType}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, scheduleType: value }))}
                  className="flex space-x-6 mb-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="recurring" id="recurring" />
                    <Label htmlFor="recurring">Recurring</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time">One-time</Label>
                  </div>
                </RadioGroup>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                                         <Label className="text-sm font-medium text-gray-700 mb-2 block" style={{ fontWeight: 500 }}>
                       Estimated Start Date
                     </Label>
                    <div className="relative">
                      <Input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                        className="pr-10"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <div>
                                         <Label className="text-sm font-medium text-gray-700 mb-2 block" style={{ fontWeight: 500 }}>
                       Estimated End Date
                     </Label>
                    <div className="relative">
                      <Input
                        type="date"
                        placeholder="optional"
                        value={formData.endDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                        className="pr-10"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                                     <Label className="text-sm font-medium text-gray-700 mb-2 block" style={{ fontWeight: 500 }}>
                     Time
                   </Label>
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-900">
                      {formData.timeRange[0]}:00 AM - {formData.timeRange[1]}:00 PM
                    </div>
                  </div>
                  <div className="relative">
                    <TimeRangeSlider
                      value={formData.timeRange}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, timeRange: value }))}
                      min={0}
                      max={24}
                      step={1}
                    />
                  </div>
                </div>
              </div>

              {/* What do you need help with */}
              <div>
                <Label className="text-lg font-semibold text-gray-900 mb-2 block">
                  What do you need help with? (optional)
                </Label>
                <p className="text-sm text-gray-600 mb-4">Select all that apply</p>
                <div className="flex flex-wrap gap-3">
                  {helpTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleHelpTypeToggle(type)}
                      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                        formData.helpTypes.includes(type)
                          ? "bg-[#005C3C] text-white border-[#005C3C]"
                          : "bg-white text-gray-700 border-gray-300 hover:border-[#005C3C]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Caregiver qualities */}
              <div>
                <Label className="text-lg font-semibold text-gray-900 mb-2 block">
                  Your ideal caregiver qualities? (optional)
                </Label>
                <p className="text-sm text-gray-600 mb-4">Select all that apply</p>
                <div className="flex flex-wrap gap-3">
                  {caregiverQualities.map((quality) => (
                    <button
                      key={quality}
                      type="button"
                      onClick={() => handleQualityToggle(quality)}
                      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                        formData.caregiverQualities.includes(quality)
                          ? "bg-[#005C3C] text-white border-[#005C3C]"
                          : "bg-white text-gray-700 border-gray-300 hover:border-[#005C3C]"
                      }`}
                    >
                      {quality}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div>
                <Label className="text-lg font-semibold text-gray-900 mb-2 block">
                  What would you like to pay?
                </Label>
                <p className="text-sm text-gray-600 mb-4">
                  The average caregiver in your area is $17 - $25.
                </p>
                                 <div className="space-y-4">
                   <div className="text-center mb-4">
                     <div className="text-sm text-gray-900">
                       ${formData.priceRange[0]} - ${formData.priceRange[1]}
                     </div>
                   </div>
                   <div className="relative">
                     <TimeRangeSlider
                       value={formData.priceRange}
                       onValueChange={(value) => setFormData(prev => ({ ...prev, priceRange: value }))}
                       min={10}
                       max={50}
                       step={1}
                     />
                   </div>
                   <p className="text-sm text-gray-500 text-center">Per hour</p>
                 </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#005C3C] text-white py-4 text-lg font-semibold hover:bg-[#00492F] transition-colors"
              >
                Search for Caregivers
              </Button>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
} 
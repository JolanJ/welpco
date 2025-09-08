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
  const [children, setChildren] = useState([{ name: "", age: "", gender: "" }])
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [frequency, setFrequency] = useState("")
  const [recurringType, setRecurringType] = useState("")
  const [payPerHour, setPayPerHour] = useState("")
  const [notes, setNotes] = useState("")

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

  const addChild = () => {
    setChildren([...children, { name: "", age: "", gender: "" }])
  }

  const updateChild = (index: number, field: string, value: string) => {
    const updatedChildren = [...children]
    updatedChildren[index][field as keyof typeof updatedChildren[0]] = value
    setChildren(updatedChildren)
  }

  const removeChild = (index: number) => {
    if (children.length > 1) {
      setChildren(children.filter((_, i) => i !== index))
    }
  }

  const handleContinue = () => {
    if (date && startTime && endTime && payPerHour) {
      // Navigate to location page with the form data
      const queryParams = new URLSearchParams({
        service: service,
        date: date,
        startTime: startTime,
        endTime: endTime,
        payPerHour: payPerHour,
        notes: notes,
        children: JSON.stringify(children)
      })
      
      window.location.href = `/services/location?${queryParams.toString()}`
    }
  }

  const isFormValid = () => {
    return date && startTime && endTime && payPerHour && children.every(child => child.name && child.age)
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
            {careType === "elderly-care" ? "Elderly Care" : careType === "special-needs" ? "Special Needs Care" : "Babysitter"}
          </h1>
        </div>

                 {/* Form */}
         <div className="max-w-lg mx-auto space-y-8">
                       {/* Who needs care? */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#005C3C]" />
                <h2 className="text-xl font-bold text-gray-900">
                  {careType === "elderly-care" ? "Who needs elderly care?" : careType === "special-needs" ? "Who needs special needs care?" : "Who needs babysitting?"}
                </h2>
              </div>
              
              {children.map((child, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {careType === "elderly-care" ? "Person Name" : "Child Name"}
                    </label>
                    <input
                      type="text"
                      placeholder={careType === "elderly-care" ? "Enter person's name" : "Enter child's name"}
                      value={child.name}
                      onChange={(e) => updateChild(index, "name", e.target.value)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input
                      type="number"
                      placeholder="Age"
                      value={child.age}
                      onChange={(e) => updateChild(index, "age", e.target.value)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                    />
                  </div>
                  {careType === "elderly-care" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                      <select
                        value={child.gender}
                        onChange={(e) => updateChild(index, "gender", e.target.value)}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  )}
                  {children.length > 1 && (
                    <div className="flex justify-end">
                      <button
                        onClick={() => removeChild(index)}
                        className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-red-500 border-2 border-red-300 rounded-full hover:bg-red-50 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              ))}
              
              <button
                onClick={addChild}
                className="px-6 py-3 border-2 border-[#005C3C] text-[#005C3C] rounded-full hover:bg-[#005C3C] hover:text-white transition-colors"
              >
                <Plus className="w-4 h-4 mr-2 inline" />
                {careType === "elderly-care" ? "Add person" : "Add child"}
              </button>
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

"use client"

import React, { useState, useEffect } from "react"
import { Shield } from "lucide-react"
import { useRouter } from "next/navigation"

interface Welper {
  id: string
  name: string
  rating: number
  image: string
}

export default function FindingWelpersPage() {
  const [progress, setProgress] = useState(0)
  const [service, setService] = useState("")
  const [location, setLocation] = useState("")
  const [schedule, setSchedule] = useState("")
  const [serviceType, setServiceType] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Get parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    const locationParam = urlParams.get('location')
    const scheduleParam = urlParams.get('schedule')
    const typeParam = urlParams.get('type')
    
    if (serviceParam) setService(serviceParam)
    if (locationParam) setLocation(locationParam)
    if (scheduleParam) setSchedule(scheduleParam)
    if (typeParam) setServiceType(typeParam)

    // Animate the progress bar over 5 seconds
    const duration = 5000 // 5 seconds
    const interval = 50 // Update every 50ms for smooth animation
    const increment = 100 / (duration / interval) // Calculate increment to reach 100% in 5 seconds
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          // Navigate to email capture page after 5 seconds
          setTimeout(() => {
            router.push(`/services/email-capture?service=${serviceParam}&location=${locationParam}&schedule=${scheduleParam}&type=${typeParam}`)
          }, 1000) // Wait 1 second after progress reaches 100%
          return 100
        }
        return Math.min(prev + increment, 100)
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const welpers: Welper[] = [
    {
      id: "1",
      name: "Sansa Stark",
      rating: 5,
      image: "/placeholder-user.jpg"
    },
    {
      id: "2", 
      name: "Arya Stark",
      rating: 5,
      image: "/placeholder-user.jpg"
    },
    {
      id: "3",
      name: "Brienne Tarth", 
      rating: 5,
      image: "/placeholder-user.jpg"
    }
  ]

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
        {/* Main Message */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Every Welper you encounter on WELPCO has undergone a background check, ensuring 100% assurance.
          </h1>
        </div>

        {/* Welper Cards */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {welpers.map((welper) => (
              <div key={welper.id} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                {/* Profile Picture */}
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src={welper.image}
                    alt={welper.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                
                {/* Name and Rating */}
                <div className="flex items-center justify-center mb-2">
                  <h3 className="font-semibold text-gray-900 mr-2">{welper.name}</h3>
                  <Shield className="w-4 h-4 text-gray-400" />
                </div>
                
                {/* Stars */}
                <div className="flex justify-center">
                  {[...Array(welper.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simulation Bar */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Sit tight, we are finding matches near you...
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#4CA76A] h-2 rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
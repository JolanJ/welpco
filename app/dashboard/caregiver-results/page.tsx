"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { Shield, Star } from "lucide-react"

interface Caregiver {
  id: number
  name: string
  age: number
  rating: number
  reviewCount: number
  image: string
  verified: boolean
  selected?: boolean
}

export default function CaregiverResultsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [caregivers, setCaregivers] = useState<Caregiver[]>([
    {
      id: 1,
      name: "Jason Price",
      age: 26,
      rating: 4.5,
      reviewCount: 131,
      image: "/placeholder-user.jpg",
      verified: true,
      selected: true
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 28,
      rating: 4.8,
      reviewCount: 89,
      image: "/placeholder-user.jpg",
      verified: true
    },
    {
      id: 3,
      name: "David Rodriguez",
      age: 24,
      rating: 4.2,
      reviewCount: 67,
      image: "/placeholder-user.jpg",
      verified: true
    },
    {
      id: 4,
      name: "Alex Thompson",
      age: 30,
      rating: 4.7,
      reviewCount: 156,
      image: "/placeholder-user.jpg",
      verified: true
    },
    {
      id: 5,
      name: "James Wilson",
      age: 27,
      rating: 4.4,
      reviewCount: 94,
      image: "/placeholder-user.jpg",
      verified: true
    },
    {
      id: 6,
      name: "Ryan Davis",
      age: 25,
      rating: 4.6,
      reviewCount: 112,
      image: "/placeholder-user.jpg",
      verified: true
    }
  ])

  const handleCardSelect = (id: number) => {
    setCaregivers(prev => 
      prev.map(caregiver => ({
        ...caregiver,
        selected: caregiver.id === id
      }))
    )
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />)
    }

    return stars
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar currentPath="/caregiver-results" onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header onMenuClick={toggleSidebar} />

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Greeting */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Hey Star Shah,</h1>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">We have some results for you!</h1>
            </div>

            {/* Caregiver Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {caregivers.map((caregiver) => (
                <div
                  key={caregiver.id}
                  className={`bg-white rounded-xl border transition-all cursor-pointer ${
                    caregiver.selected 
                      ? 'border-[#005C3C] shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                  onClick={() => handleCardSelect(caregiver.id)}
                >
                  {/* Profile Image */}
                  <div className="relative">
                    <img
                      src={caregiver.image}
                      alt={caregiver.name}
                      className="w-full h-40 sm:h-48 object-cover rounded-t-xl"
                    />
                  </div>

                  {/* Profile Info */}
                  <div className="p-3 sm:p-4">
                    {/* Name and Verification */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">{caregiver.name}</h3>
                      {caregiver.verified && (
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      )}
                    </div>

                    {/* Age */}
                    <p className="text-sm text-gray-600 mb-3">Age {caregiver.age}</p>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-2">
                        {renderStars(caregiver.rating)}
                      </div>
                      <span className="text-sm text-gray-600">({caregiver.reviewCount})</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                      >
                        View Details
                      </Button>
                      <Button
                        className="flex-1 bg-[#005C3C] text-white hover:bg-[#00492F]"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 
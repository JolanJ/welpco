"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Baby, 
  Heart, 
  Shield,
  ArrowLeft
} from "lucide-react"

interface CareService {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  selected?: boolean
}

export default function CareServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const careServices: CareService[] = [
    {
      id: "babysitter",
      title: "Babysitter",
      description: "Professional childcare for your little ones",
      icon: <Baby className="w-8 h-8 text-[#005C3C]" />
    },
    {
      id: "child-care",
      title: "Child Care",
      description: "Comprehensive childcare services",
      icon: <Users className="w-8 h-8 text-[#005C3C]" />
    },
    {
      id: "elderly-care",
      title: "Elderly Care",
      description: "Compassionate care for seniors",
      icon: <Heart className="w-8 h-8 text-[#005C3C]" />
    },
    {
      id: "special-needs",
      title: "Special Needs Care",
      description: "Specialized care for individuals with special needs",
      icon: <Shield className="w-8 h-8 text-[#005C3C]" />
    }
  ]

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
  }

  const handleContinue = () => {
    if (selectedService) {
      // Navigate to the location page with service data
      window.location.href = `/services/location?service=${selectedService}`
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Progress */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-[#005C3C]">WELPCO®</div>
            <div className="flex items-center space-x-2">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-[#005C3C] h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-sm text-gray-600">75%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/find-service">
            <Button variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to categories</span>
            </Button>
          </Link>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Care Services
          </h1>
          <p className="text-gray-600 text-lg">
            Choose the specific care service you need
          </p>
        </div>

        {/* Care Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {careServices.map((service) => (
            <div
              key={service.id}
              className={`bg-white border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                selectedService === service.id
                  ? 'border-[#005C3C] shadow-lg'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleServiceSelect(service.id)}
            >
              <div className="flex flex-col items-start space-y-4">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg">
                  {service.icon}
                </div>
                
                {/* Title and Description */}
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <Button
            onClick={handleContinue}
            disabled={!selectedService}
            className={`px-8 py-3 rounded-lg text-lg font-semibold ${
              selectedService
                ? 'bg-[#005C3C] text-white hover:bg-[#00492F]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue
          </Button>
        </div>
      </div>


    </div>
  )
} 
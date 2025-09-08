"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  PawPrint, 
  GraduationCap, 
  Wrench, 
  Leaf, 
  Heart, 
  PartyPopper, 
  Building2 
} from "lucide-react"

interface ServiceCategory {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  selected?: boolean
}

export default function FindServicePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const serviceCategories: ServiceCategory[] = [
    {
      id: "care",
      title: "Care",
      description: "babysitter, child care, elderly care, special needs",
      icon: <Users className="w-8 h-8 text-[#005C3C]" />
    },
    {
      id: "pet-care",
      title: "Pet care",
      description: "dog walks, pet grooming, aquarium and terrarium cleaning.....",
      icon: <PawPrint className="w-8 h-8 text-[#005C3C]" />
    },
    {
      id: "education",
      title: "Education",
      description: "Help your children's with their education",
      icon: <GraduationCap className="w-8 h-8 text-[#005C3C]" />
    },
    {
      id: "in-home-maintenance",
      title: "In-home maintenance",
      description: "housekeeping, painting, organizing, moving......",
      icon: <Wrench className="w-8 h-8 text-[#005C3C]" />
    },
    {
      id: "exterior-maintenance",
      title: "Exterior maintenance",
      description: "lawn-mowing, tree-planting, gardening, car washing........",
      icon: <Leaf className="w-8 h-8 text-[#005C3C]" />
    },
    {
      id: "health-wellness",
      title: "Health and wellness",
      description: "meal preparation, personal trainer, dietician, nutritionist",
      icon: <Heart className="w-8 h-8 text-[#005C3C]" />
    },
    {
      id: "entertainment",
      title: "Entertainment",
      description: "catering, party-planning, magician, clown, server, assist.....",
      icon: <PartyPopper className="w-8 h-8 text-[#005C3C]" />
    }
  ]

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const handleContinue = () => {
    if (selectedCategory) {
      // Navigate to the appropriate type selection page based on service category
      if (selectedCategory === "care") {
        window.location.href = `/find-job-sp/care-type?service=${selectedCategory}`
      } else if (selectedCategory === "pet-care") {
        window.location.href = `/find-job-sp/pet-care-type?service=${selectedCategory}`
      } else if (selectedCategory === "health-wellness") {
        window.location.href = `/find-job-sp/health-wellness-type?service=${selectedCategory}`
      } else if (selectedCategory === "entertainment") {
        window.location.href = `/find-job-sp/entertainment-type?service=${selectedCategory}`
      } else if (selectedCategory === "education") {
        window.location.href = `/find-job-sp/education-type?service=${selectedCategory}`
      } else if (selectedCategory === "in-home-maintenance") {
        window.location.href = `/find-job-sp/in-home-maintenance-type?service=${selectedCategory}`
      } else if (selectedCategory === "exterior-maintenance") {
        window.location.href = `/find-job-sp/exterior-maintenance-type?service=${selectedCategory}`
      } else {
        // For other services, navigate directly to location page
        window.location.href = `/find-job-sp/location?service=${selectedCategory}`
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-xl sm:text-2xl font-bold text-[#005C3C]">WELPCO®</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="relative">
                         <div className="w-full bg-gray-200 rounded-full h-2">
               <div className="bg-[#4CA76A] h-2 rounded-full" style={{ width: '50%' }}></div>
             </div>
             {/* Progress Bubble */}
             <div className="absolute top-0 transform -translate-y-full -translate-x-1/2 -mt-2" style={{ left: '50%' }}>
               <div className="bg-[#4CA76A] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg relative">
                 50%
                 {/* Triangle pointing down */}
                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4CA76A]"></div>
               </div>
             </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4 px-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          What kind of job you are looking for?
          </h1>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
                             className={`bg-white border-2 rounded-xl p-4 sm:p-6 cursor-pointer transition-all hover:shadow-md group ${
                 selectedCategory === category.id
                   ? 'border-[#005C3C] shadow-lg'
                   : 'border-gray-200 hover:border-gray-300 hover:bg-[#00492F] hover:text-white'
               }`}
              onClick={() => handleCategorySelect(category.id)}
            >
              <div className="flex flex-col items-start space-y-3 sm:space-y-4">
                                 {/* Icon */}
                 <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#00492F] rounded-lg">
                   {React.cloneElement(category.icon as React.ReactElement<any>, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white" })}
                 </div>
                
                                 {/* Title and Description */}
                 <div className="space-y-2">
                   <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                     {category.title}
                   </h3>
                   <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-white">
                     {category.description}
                   </p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="text-center px-4">
          <Button
            onClick={handleContinue}
            disabled={!selectedCategory}
            className={`w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold ${
              selectedCategory
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
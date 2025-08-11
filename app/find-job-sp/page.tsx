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
    },
    {
      id: "health-wellness-2",
      title: "Health and wellness",
      description: "Take care of your loved ones by caring their health and wellness",
      icon: <Building2 className="w-8 h-8 text-[#005C3C]" />
    }
  ]

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const handleContinue = () => {
    if (selectedCategory) {
      // Navigate directly to the opportunities page with the selected job category
      window.location.href = `/register/welper/opportunities?service=${selectedCategory}`
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
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="relative">
                         <div className="w-full bg-gray-200 rounded-full h-2">
               <div className="bg-[#4CA76A] h-2 rounded-full" style={{ width: '50%' }}></div>
             </div>
             {/* Progress Bubble */}
             <div className="absolute top-0 transform -translate-y-full -translate-x-1/2 -mt-2" style={{ left: '50%' }}>
               <div className="bg-[#4CA76A] text-white text-sm px-3 py-1 rounded-lg relative">
                 50%
                 {/* Triangle pointing down */}
                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4CA76A]"></div>
               </div>
             </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          What kind of job you are looking for?
          </h1>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
                             className={`bg-white border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md group ${
                 selectedCategory === category.id
                   ? 'border-[#005C3C] shadow-lg'
                   : 'border-gray-200 hover:border-gray-300 hover:bg-[#00492F] hover:text-white'
               }`}
              onClick={() => handleCategorySelect(category.id)}
            >
              <div className="flex flex-col items-start space-y-4">
                                 {/* Icon */}
                 <div className="flex items-center justify-center w-12 h-12 bg-[#00492F] rounded-lg">
                   {React.cloneElement(category.icon as React.ReactElement<any>, { className: "w-8 h-8 text-white" })}
                 </div>
                
                                 {/* Title and Description */}
                 <div className="space-y-2">
                   <h3 className="font-bold text-gray-900 text-lg group-hover:text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                     {category.title}
                   </h3>
                   <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white">
                     {category.description}
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
            disabled={!selectedCategory}
            className={`px-8 py-3 rounded-lg text-lg font-semibold ${
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
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { ChevronDown } from "lucide-react"

interface ServiceProvider {
  id: number
  date: string
  name: string
  age: string
  description: string
  image: string
}

export default function ServiceProvidersPage() {
  const [activeTab, setActiveTab] = useState<'applicants' | 'favorites' | 'viewed' | 'hired'>('applicants')
  const [selectedJob, setSelectedJob] = useState("Baby Sitter needed for 1 child | Downtown Street")

  const applicants: ServiceProvider[] = [
    {
      id: 1,
      date: "MAY 27",
      name: "Jonathan James",
      age: "26 Years",
      description: "Babysitting needed for 1 child in Mainstreet Location",
      image: "/placeholder-user.jpg"
    },
    {
      id: 2,
      date: "April 15",
      name: "Jonathan James",
      age: "26 Years",
      description: "Plumber needed for Kitchen in Mainstreet Location",
      image: "/placeholder-user.jpg"
    },
    {
      id: 3,
      date: "Jan 27",
      name: "Jonathan James",
      age: "26 Years",
      description: "Plumber needed for Kitchen in Mainstreet Location",
      image: "/placeholder-user.jpg"
    }
  ]

  const favorites: ServiceProvider[] = [
    {
      id: 4,
      date: "MAY 20",
      name: "Sarah Wilson",
      age: "24 Years",
      description: "House cleaning service in Downtown Area",
      image: "/placeholder-user.jpg"
    }
  ]

  const viewed: ServiceProvider[] = [
    {
      id: 5,
      date: "MAY 18",
      name: "Michael Brown",
      age: "28 Years",
      description: "Lawn mowing service in Suburban Location",
      image: "/placeholder-user.jpg"
    }
  ]

  const hired: ServiceProvider[] = [
    {
      id: 6,
      date: "MAY 15",
      name: "Emily Davis",
      age: "25 Years",
      description: "Completed house cleaning service",
      image: "/placeholder-user.jpg"
    }
  ]

  const getServiceProviders = () => {
    switch (activeTab) {
      case 'applicants':
        return applicants
      case 'favorites':
        return favorites
      case 'viewed':
        return viewed
      case 'hired':
        return hired
      default:
        return applicants
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar currentPath="/service-providers" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Service Providers</h1>

            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
              <Button
                onClick={() => setActiveTab('applicants')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === 'applicants'
                    ? 'bg-[#005C3C] text-white'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Applicants
              </Button>
              <Button
                onClick={() => setActiveTab('favorites')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === 'favorites'
                    ? 'bg-[#005C3C] text-white'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Favorites
              </Button>
              <Button
                onClick={() => setActiveTab('viewed')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === 'viewed'
                    ? 'bg-[#005C3C] text-white'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Viewed
              </Button>
              <Button
                onClick={() => setActiveTab('hired')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === 'hired'
                    ? 'bg-[#005C3C] text-white'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Hired
              </Button>
            </div>

            {/* Job Filter */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                For Job
              </label>
              <div className="relative">
                <select
                  value={selectedJob}
                  onChange={(e) => setSelectedJob(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#005C3C] focus:ring-[#005C3C] appearance-none bg-white"
                >
                  <option value="Baby Sitter needed for 1 child | Downtown Street">
                    Baby Sitter needed for 1 child | Downtown Street
                  </option>
                  <option value="Plumber needed for Kitchen | Mainstreet Location">
                    Plumber needed for Kitchen | Mainstreet Location
                  </option>
                  <option value="House cleaning service | Downtown Area">
                    House cleaning service | Downtown Area
                  </option>
                  <option value="Lawn mowing service | Suburban Location">
                    Lawn mowing service | Suburban Location
                  </option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Service Provider Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getServiceProviders().map((provider) => (
                <div
                  key={provider.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-900 mb-2">{provider.date}</p>
                      <div className="flex items-center space-x-3">
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                          <p className="text-sm text-gray-600">{provider.age}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {provider.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-6">
                    <Button
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                    >
                      View Details
                    </Button>
                    <Button
                      className="flex-1 bg-[#005C3C] text-white hover:bg-[#00492F]"
                    >
                      {activeTab === 'applicants' ? 'Review' : 
                       activeTab === 'favorites' ? 'Contact' :
                       activeTab === 'viewed' ? 'Reconnect' : 'View'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {getServiceProviders().length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No {activeTab} found.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
} 
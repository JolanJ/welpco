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
  const [sidebarOpen, setSidebarOpen] = useState(false)
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar currentPath="/service-providers" onClose={() => setSidebarOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={toggleSidebar} />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <div className="mb-4 sm:mb-6 ml-2 sm:ml-4 lg:ml-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Service Providers</h1>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 ml-2 sm:ml-4 lg:ml-8 mr-2 sm:mr-4 lg:mr-8">
              <Button
                onClick={() => setActiveTab('applicants')}
                className={`px-4 sm:px-6 py-2 rounded-full transition-colors text-sm sm:text-base ${
                  activeTab === 'applicants'
                    ? 'bg-[#005C3C] text-white'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Applicants
              </Button>
              <Button
                onClick={() => setActiveTab('favorites')}
                className={`px-4 sm:px-6 py-2 rounded-full transition-colors text-sm sm:text-base ${
                  activeTab === 'favorites'
                    ? 'bg-[#005C3C] text-white'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Favorites
              </Button>
              <Button
                onClick={() => setActiveTab('viewed')}
                className={`px-4 sm:px-6 py-2 rounded-full transition-colors text-sm sm:text-base ${
                  activeTab === 'viewed'
                    ? 'bg-[#005C3C] text-white'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Viewed
              </Button>
              <Button
                onClick={() => setActiveTab('hired')}
                className={`px-4 sm:px-6 py-2 rounded-full transition-colors text-sm sm:text-base ${
                  activeTab === 'hired'
                    ? 'bg-[#005C3C] text-white'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Hired
              </Button>
            </div>

            {/* Job Filter */}
            <div className="mb-4 sm:mb-6 ml-2 sm:ml-4 lg:ml-8 mr-2 sm:mr-4 lg:mr-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                For Job
              </label>
              <div className="relative">
                <select
                  value={selectedJob}
                  onChange={(e) => setSelectedJob(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#005C3C] focus:ring-[#005C3C] appearance-none bg-white text-sm sm:text-base"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ml-2 sm:ml-4 lg:ml-8 mr-2 sm:mr-4 lg:mr-8">
              {getServiceProviders().map((provider) => (
                <div
                  key={provider.id}
                  className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-900 mb-2">{provider.date}</p>
                      <div className="flex items-center space-x-3">
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{provider.name}</h3>
                          <p className="text-sm text-gray-600">{provider.age}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 sm:mb-6">
                    {provider.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <Button
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 text-sm"
                    >
                      View Details
                    </Button>
                    <Button
                      className="flex-1 bg-[#005C3C] text-white hover:bg-[#00492F] text-sm"
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
              <div className="text-center py-8 sm:py-12 ml-2 sm:ml-4 lg:ml-8 mr-2 sm:mr-4 lg:mr-8">
                <p className="text-gray-500 text-sm sm:text-base">
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
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"

interface Job {
  id: number
  date: string
  name: string
  age: string
  description: string
  status: 'active' | 'paused' | 'pending'
  image: string
}

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState<'current' | 'previous'>('current')

  const currentJobs: Job[] = [
    {
      id: 1,
      date: "MAY 27",
      name: "Jonathan James",
      age: "26 Years",
      description: "Babysitting needed for 1 child in Mainstreet Location",
      status: 'active',
      image: "/placeholder-user.jpg"
    },
    {
      id: 2,
      date: "MAY 27",
      name: "Sarah Wilson",
      age: "24 Years",
      description: "Plumber needed for kitchen in Main street Location",
      status: 'paused',
      image: "/placeholder-user.jpg"
    },
    {
      id: 3,
      date: "MAY 27",
      name: "Michael Brown",
      age: "28 Years",
      description: "Plumber needed for kitchen in Main street Location",
      status: 'pending',
      image: "/placeholder-user.jpg"
    }
  ]

  const previousJobs: Job[] = [
    {
      id: 4,
      date: "MAY 20",
      name: "Emily Davis",
      age: "25 Years",
      description: "House cleaning service in Downtown Area",
      status: 'completed',
      image: "/placeholder-user.jpg"
    },
    {
      id: 5,
      date: "MAY 15",
      name: "David Miller",
      age: "30 Years",
      description: "Lawn mowing service in Suburban Location",
      status: 'completed',
      image: "/placeholder-user.jpg"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'paused':
        return 'bg-gray-100 text-gray-800'
      case 'pending':
        return 'bg-orange-100 text-orange-800'
      case 'completed':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active'
      case 'paused':
        return 'Paused'
      case 'pending':
        return 'Pending'
      case 'completed':
        return 'Completed'
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar currentPath="/jobs" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Jobs</h1>

            {/* Tabs */}
            <div className="flex space-x-4 mb-8">
              <Button
                onClick={() => setActiveTab('current')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === 'current'
                    ? 'bg-[#005C3C] text-white'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Current Jobs
              </Button>
              <Button
                onClick={() => setActiveTab('previous')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === 'previous'
                    ? 'bg-[#005C3C] text-white'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Previous Jobs
              </Button>
            </div>

            {/* Job Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeTab === 'current' ? currentJobs : previousJobs).map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                                     {/* Header */}
                   <div className="flex items-start justify-between mb-4">
                     <div className="text-left">
                       <p className="text-sm text-gray-500 mb-2">{job.date}</p>
                       <div className="flex items-center space-x-3">
                         <img
                           src={job.image}
                           alt={job.name}
                           className="w-12 h-12 rounded-full object-cover"
                         />
                         <div>
                           <h3 className="font-semibold text-gray-900">{job.name}</h3>
                           <p className="text-sm text-gray-600">{job.age}</p>
                         </div>
                       </div>
                     </div>
                     <div className="text-right">
                       <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                         {getStatusText(job.status)}
                       </span>
                     </div>
                   </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {job.description}
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
                      {activeTab === 'current' ? 'Manage' : 'View'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {(activeTab === 'current' ? currentJobs : previousJobs).length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No {activeTab === 'current' ? 'current' : 'previous'} jobs found.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
} 
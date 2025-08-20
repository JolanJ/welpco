"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import DemoHelper from "@/components/demo-helper"
import {
  Users,
  PawPrint,
  GraduationCap,
  Wrench,
  Leaf,
  Heart,
  PartyPopper,
} from "lucide-react"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("welpco_user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      // Redirect to login if not authenticated
      router.push("/login")
      return
    }
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("welpco_user")
    router.push("/login")
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#005C3C] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }
  const serviceCategories = [
    {
      title: "Care",
      icon: Users,
      description: "babysitter, child care, elderly care, special needs",
    },
    {
      title: "Pet care",
      icon: PawPrint,
      description: "dog walks, pet grooming, aquarium and terrarium cleaning",
    },
    {
      title: "Education",
      icon: GraduationCap,
      description: "tutoring, music lessons, academic support",
    },
    {
      title: "In-home maintenance",
      icon: Wrench,
      description: "housekeeping, painting, organizing, moving, furniture assembly",
    },
    {
      title: "Exterior maintenance",
      icon: Leaf,
      description: "lawn-mowing, tree-planting, gardening, car washing, gutter cleaning",
    },
    {
      title: "Health and wellness",
      icon: Heart,
      description: "meal preparation, personal trainer, dietician, nutritionist",
    },
    {
      title: "Entertainment",
      icon: PartyPopper,
      description: "catering, party-planning, magician, clown, server, assistant",
    },
  ]

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
        <Sidebar currentPath="/dashboard" user={user} onLogout={handleLogout} onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header user={user} onMenuClick={toggleSidebar} />

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
        
        {/* Demo Helper */}
        <DemoHelper />
                     {/* Greeting */}
           <div className="mb-6 sm:mb-8">
             <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Hey {user?.name || "User"},</h1>
             <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">What kind of service do you need?</h1>
           </div>

                     {/* Service Categories Grid */}
                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
             {serviceCategories.map((service, index) => (
               <Link
                 key={index}
                 href="/dashboard/care-request"
                 className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer block"
               >
                 <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                   <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#005C3C] rounded-lg flex items-center justify-center">
                     <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                   </div>
                   <h3 className="text-lg sm:text-xl font-bold text-gray-900">{service.title}</h3>
                 </div>
                 <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
               </Link>
             ))}
           </div>
        </main>
      </div>
    </div>
  )
} 
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
      {/* Sidebar */}
      <Sidebar currentPath="/dashboard" user={user} onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header user={user} />

        {/* Main Content Area */}
        <main className="flex-1 p-8">
        
        {/* Demo Helper */}
        <DemoHelper />
                     {/* Greeting */}
           <div className="mb-8">
             <h1 className="text-3xl font-bold text-gray-900 mb-2">Hey {user?.name || "User"},</h1>
             <h1 className="text-3xl font-bold text-gray-900">What kind of service do you need?</h1>
           </div>

                     {/* Service Categories Grid */}
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
             {serviceCategories.map((service, index) => (
               <Link
                 key={index}
                 href="/dashboard/care-request"
                 className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer block"
               >
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="w-12 h-12 bg-[#005C3C] rounded-lg flex items-center justify-center">
                     <service.icon className="w-6 h-6 text-white" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
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
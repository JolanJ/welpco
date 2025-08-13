import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column - Image */}
      <div className="relative bg-white">
        {/* Logo */}
        <div className="absolute top-8 left-8 z-10">
          <div className="text-2xl font-bold text-[#005C3C]">WELPCO</div>
        </div>
        
        {/* Main Image */}
        <div className="h-full flex items-center justify-center p-8">
          <div className="relative max-w-md w-full">
            <Image
              src="/Image.png?height=600&width=500&text=Father+and+baby+with+toys"
              alt="Father and baby playing with toys"
              width={400}
              height={600}
              className="w-full h-auto rounded-3xl"
            />
            {/* Gradient overlay on bottom right */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#005C3C]/20 to-transparent rounded-br-3xl"></div>
          </div>
        </div>
      </div>

             {/* Right Column - Content */}
       <div className="flex flex-col items-center justify-center p-4 lg:p-8 bg-white">
                   <div className="w-full max-w-2.5xl">
            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 text-center mb-10">
              How do you want to<br />
              continue?
            </h1>
            
            {/* Choice Cards */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                                       {/* Card 1: I need a service */}
              <div className="bg-[#005C3C] rounded-2xl p-10 shadow-xl flex flex-col h-full min-h-[280px] text-center">
                <h2 className="text-xl font-bold text-white mb-4">I need a service</h2>
                                <p className="text-gray-200 mb-8 flex-grow">
                  Search for the service<br />
                  you need
                </p>
                <div className="flex justify-center mt-auto">
                                     <Link href="/find-service">
                     <Button className="bg-white text-[#005C3C] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full text-xl">
                       Find a service
                     </Button>
                   </Link>
                </div>
              </div>

              {/* Card 2: I want to become a Welper */}
              <div className="bg-[#005C3C] rounded-2xl p-10 shadow-xl flex flex-col h-full min-h-[280px] text-center">
                <h2 className="text-xl font-bold text-white mb-4">I want to become a Welper</h2>
                                 <p className="text-gray-200 mb-8 flex-grow">
                   Apply to provide services<br />
                   in your area
                 </p>
                <div className="flex justify-center mt-auto">
                                     <Link href="/find-job-sp">
                     <Button className="bg-white text-[#005C3C] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full text-xl">
                       Become a Welper
                     </Button>
                   </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
"use client"

import React, { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"

export default function WelperVerificationPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [service, setService] = useState("")
  const [services, setServices] = useState("")
  const [experience, setExperience] = useState("")
  const [rate, setRate] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [gender, setGender] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [heardAbout, setHeardAbout] = useState("")
  const [location, setLocation] = useState("")
  const [range, setRange] = useState("")

  useEffect(() => {
    // Get parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    const servicesParam = urlParams.get('services')
    const experienceParam = urlParams.get('experience')
    const rateParam = urlParams.get('rate')
    const firstNameParam = urlParams.get('firstName')
    const lastNameParam = urlParams.get('lastName')
    const genderParam = urlParams.get('gender')
    const dobParam = urlParams.get('dob')
    const heardParam = urlParams.get('heard')
    const locationParam = urlParams.get('location')
    const rangeParam = urlParams.get('range')
    
    if (serviceParam) setService(serviceParam)
    if (servicesParam) setServices(servicesParam)
    if (experienceParam) setExperience(experienceParam)
    if (rateParam) setRate(rateParam)
    if (firstNameParam) setFirstName(firstNameParam)
    if (lastNameParam) setLastName(lastNameParam)
    if (genderParam) setGender(genderParam)
    if (dobParam) setDateOfBirth(dobParam)
    if (heardParam) setHeardAbout(heardParam)
    if (locationParam) setLocation(locationParam)
    if (rangeParam) setRange(rangeParam)
  }, [])

  const handleCreateAccount = () => {
    if (email && password && confirmPassword && password === confirmPassword) {
      // Here you would typically:
      // 1. Create the user account
      // 2. Send verification email
      // 3. Store all the collected data
      // 4. Redirect to dashboard or success page
      
      // For now, redirect to the service provider dashboard
      window.location.href = "/service-provider-dashboard"
    }
  }

  const isFormValid = email && password && confirmPassword && password === confirmPassword

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
              <div className="bg-[#4CA76A] h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
            {/* Progress Bubble */}
            <div className="absolute top-0 transform -translate-y-full -translate-x-1/2 -mt-2" style={{ left: '100%' }}>
              <div className="bg-[#4CA76A] text-white text-sm px-3 py-1 rounded-lg relative">
                100%
                {/* Triangle pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4CA76A]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Create your account
          </h1>
          <h3 className="text-gray-500" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Set up your email and password to complete registration
          </h3>
        </div>

        {/* Form */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="space-y-8">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
                style={{ padding: '0.75rem 1.5rem' }}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400 pr-12"
                  style={{ padding: '0.75rem 1.5rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full text-xl border-2 rounded-full focus:outline-none placeholder-gray-400 pr-12 ${
                    confirmPassword && password !== confirmPassword 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-[#005C3C] focus:border-[#005C3C]'
                  }`}
                  style={{ padding: '0.75rem 1.5rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {confirmPassword && password !== confirmPassword && (
                <p className="text-red-500 text-sm mt-2">Passwords do not match</p>
              )}
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm">
            By clicking "Create Account", you agree to our{" "}
            <a href="/terms" className="underline text-[#005C3C]">Terms of Use</a>{" "}
            and{" "}
            <a href="/privacy" className="underline text-[#005C3C]">Privacy Policy</a>.
          </p>
        </div>

        {/* Create Account Button */}
        <div className="text-center">
          <button
            onClick={handleCreateAccount}
            disabled={!isFormValid}
            className={`px-12 py-3 rounded-full text-xl font-semibold transition-colors ${
              isFormValid
                ? 'bg-[#005C3C] text-white hover:bg-[#00492F]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  )
}

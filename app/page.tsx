"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import {
  Shield,
  Clock,
  MapPin,
  Calendar,
  User,
  Heart,
  GraduationCap,
  Home,
  Wrench,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Mail,
} from "lucide-react"

export default function LandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number>(0) // First FAQ is open by default

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index)
  }

  const faqData = [
    {
      question: "What is WELPCO?",
      answer:
        "Welpco is a home and child care platform that connects homeowners and parents with professional service providers offering a wide range of services, including care of children's, maintenance, cleaning, and more.",
    },
    {
      question: "Are the service providers on WELPCO reliable and qualified?",
      answer:
        "Yes, all service providers on WELPCO go through a thorough vetting process including background checks, skill assessments, and reference verification to ensure they meet our high standards of quality and reliability.",
    },
    {
      question: "What if I have an issue or complaint about a service provider?",
      answer:
        "We have a comprehensive support system in place. You can contact our customer service team 24/7, and we'll work to resolve any issues quickly. We also have a rating and review system to help maintain service quality.",
    },
    {
      question: "How are payments handled on WELPCO?",
      answer:
        "Payments are processed securely through our platform. You can pay using credit cards, debit cards, or digital wallets. Payment is typically processed after the service is completed to your satisfaction.",
    },
    {
      question: "How do I leave a review for a service provider?",
      answer:
        "After your service is completed, you'll receive an email with a link to leave a review. You can also log into your account and find the 'My Services' section to rate and review any past services.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#005C3C] text-white px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">WELPCO</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="hover:text-gray-200 transition-colors">
              About Us
            </Link>
            <Link href="/services" className="hover:text-gray-200 transition-colors">
              Services
            </Link>
            <Link href="/become-welper" className="hover:text-gray-200 transition-colors">
              Become a Welper
            </Link>
            <Link href="/login" className="hover:text-gray-200 transition-colors">
              Login
            </Link>
          </div>
          <Button className="bg-white text-[#005C3C] hover:bg-gray-100 font-semibold px-6">Join Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#00492F] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between min-h-[600px]">
            {/* Left Image - Mother and daughter */}
            <div className="w-1/4">
              <div className="bg-white rounded-3xl p-4 shadow-xl max-w-[320px]">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Mother+and+daughter"
                  alt="Mother and daughter using laptop"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="flex-1 text-center px-8">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-12">
                Search for the
                <br />
                service you need and
                <br />
                get help in no time!
              </h1>

              {/* Search Bar */}
              <div className="flex max-w-2xl mx-auto mb-16 gap-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Enter Location here"
                    className="w-full bg-transparent border-2 border-white rounded-full px-6 py-4 pr-12 text-white placeholder:text-gray-300 outline-none"
                  />
                  <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
                </div>
                <Button className="bg-white text-[#00492F] hover:bg-gray-100 rounded-full px-8 py-4 font-semibold whitespace-nowrap">
                  Search
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex justify-center items-center space-x-16">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#00492F]" />
                  </div>
                  <span className="text-sm font-medium text-left">
                    Satisfaction
                    <br />
                    Guarantee
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#00492F]" />
                  </div>
                  <span className="text-sm font-medium text-left">
                    24H
                    <br />
                    Availability
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#00492F]" />
                  </div>
                  <span className="text-sm font-medium text-left">
                    Local
                    <br />
                    Service Provider
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#00492F]" />
                  </div>
                  <span className="text-sm font-medium text-left">
                    Flexible
                    <br />
                    Appointments
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image - Professional worker */}
            <div className="w-1/4 flex justify-end">
              <div className="bg-white rounded-3xl p-4 shadow-xl max-w-[320px]">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Professional+worker"
                  alt="Professional worker with tools"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Need a hand with interior/exterior home maintenance? In search of a baby sitter or dog-walker? There are
              plenty of services to choose from. We can help!
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Care */}
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#005C3C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Care</h3>
              <p className="text-gray-600">babysitter, child care, elderly care, special needs</p>
            </div>

            {/* Pet Care */}
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#005C3C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pet care</h3>
              <p className="text-gray-600">dog walks, pet grooming, aquarium and terrarium cleaning....</p>
            </div>

            {/* Education */}
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#005C3C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">tutoring, music lessons</p>
            </div>

            {/* In-home Maintenance */}
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#005C3C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">In-home maintenance</h3>
              <p className="text-gray-600">housekeeping, painting, organizing, moving.....</p>
            </div>

            {/* Exterior Maintenance */}
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#005C3C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Exterior maintenance</h3>
              <p className="text-gray-600">lawn-mowing, tree-planting, gardening, car washing.....</p>
            </div>

            {/* Health and wellness */}
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#005C3C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Health and wellness</h3>
              <p className="text-gray-600">meal preparation, personal trainer, dietician, nutritionist</p>
            </div>

            {/* Entertainment */}
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#005C3C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Entertainment</h3>
              <p className="text-gray-600">
                catering, party-planning, magician, clown, server, assistant for party, bartender
              </p>
            </div>

            {/* Special Card - Looking for something else */}
            <div className="bg-[#005C3C] text-white p-8 rounded-2xl text-center">
              <h3 className="text-xl font-semibold mb-3">Looking for something else?</h3>
              <p className="text-gray-200 mb-6">You can tell us what you need and we can help!</p>
              <Button className="bg-white text-[#005C3C] hover:bg-gray-100 font-semibold w-full">Log in now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* How WELPCO Works Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=400&text=Smiling+worker+in+blue+cap"
                  alt="Professional worker with tools"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
                {/* Green checkmark overlay */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-[#005C3C] rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
                How WELPCO
                <br />
                works
              </h2>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-[#4CA76A] font-bold text-3xl">1.</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Find your
                      <br />
                      service
                    </h3>
                    <p className="text-gray-600">
                      Search for the service you need using the tools we've provided and we will connect you with a
                      Welper in your area.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-[#4CA76A] font-bold text-3xl">2.</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Schedule
                      <br />
                      your service
                    </h3>
                    <p className="text-gray-600">
                      Once you schedule your service with the Welper you've selected, you will receive a confirmation.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-[#4CA76A] font-bold text-3xl">3.</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Your request
                      <br />
                      is completed
                    </h3>
                    <p className="text-gray-600">
                      The Welper will arrive as scheduled and complete the service to your satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Card Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="bg-[#005C3C] rounded-3xl p-24 relative ticket-card">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white max-w-md">
                Fast, friendly, and
                <br />
                satisfaction guaranteed
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Satisfaction Guarantee */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-lg font-medium">Satisfaction Guarantee</span>
                </div>

                {/* Local service providers */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white text-lg font-medium">Local service providers</span>
                </div>

                {/* Flexible Appointments */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white text-lg font-medium">Flexible Appointments</span>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Suitable Rates */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-lg font-medium">Suitable Rates</span>
                </div>

                {/* Fast 24-Hour Service */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white text-lg font-medium">Fast 24-Hour Service</span>
                </div>

                {/* 100% Commitment-Free */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-lg font-medium">100% Commitment-Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title and Help */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked
                <br />
                Questions
              </h2>
              <p className="text-gray-700 mb-2">Still need help?</p>
              <button className="text-[#4CA76A] hover:text-[#5CB87A] font-semibold underline">Get Help Now</button>
            </div>

            {/* Right Side - FAQ Items */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-lg transition-colors duration-200 ${
                    openFAQ === index ? "bg-[#F3F5F9]" : "bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-opacity-80 transition-all duration-200"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        openFAQ === index ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4 animate-in slide-in-from-top-2 duration-200">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#005C3C] text-white py-16 px-4">
        <div className="container mx-auto">
          {/* Newsletter Section */}
          <div className="bg-white rounded-3xl p-8 mb-12">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay connected with our newsletter</h3>
                <p className="text-gray-600">Subscribe to our newsletter to get more news, promo, or news services</p>
              </div>
              <div className="flex items-center space-x-4 ml-8">
                <Input
                  type="email"
                  placeholder="Enter email address"
                  className="bg-gray-100 border-0 rounded-full px-6 py-3 w-80"
                />
                <Button className="bg-[#005C3C] hover:bg-[#004a32] text-white rounded-full px-8 py-3 font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="text-3xl font-bold mb-4">WELPCO</div>
              <p className="text-gray-300 mb-6 max-w-md">
                Welpco is your premier destination for top-notch child care & home service.
              </p>
              <div className="flex space-x-4">
                <Youtube className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
                <Instagram className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
                <Facebook className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
                <Twitter className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
                <Mail className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Our Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-white transition-colors">
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white transition-colors">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/license" className="hover:text-white transition-colors">
                    License
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-green-600 pt-8 text-center">
            <p className="text-gray-300">©2024 WELPCO . All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

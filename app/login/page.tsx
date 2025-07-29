"use client"

import { useState } from "react"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" fill="#1877F2" />
  </svg>
)

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84Z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
      fill="#EA4335"
    />
  </svg>
)

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Mock user data
  const mockUsers = [
    {
      email: "star@welpco.com",
      password: "password123",
      name: "Star Shah",
      role: "Admin"
    },
    {
      email: "user@welpco.com", 
      password: "password123",
      name: "John Doe",
      role: "User"
    },
    {
      email: "welper@welpco.com",
      password: "password123", 
      name: "Jane Smith",
      role: "Welper"
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Check if user exists in mock data
    const user = mockUsers.find(u => u.email === email && u.password === password)

    if (user) {
      // Store user data in localStorage (in a real app, this would be a JWT token)
      localStorage.setItem("welpco_user", JSON.stringify({
        email: user.email,
        name: user.name,
        role: user.role
      }))
      
      // Redirect to dashboard
      router.push("/dashboard")
    } else {
      setError("Invalid email or password")
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column - Login Form */}
      <div className="flex flex-col items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <Image src="/placeholder.svg?height=40&width=150&text=WELPCO" alt="WELPCO Logo" width={150} height={40} />
          </div>

          {/* Welcome Message */}
          <h1 className="text-3xl font-medium text-gray-900 mb-2">Welcome to Welpco</h1>
          <p className="text-gray-600 mb-8">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#005C3C] font-semibold hover:underline">
              Sign up
            </Link>
          </p>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email / Username
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-10"
                  placeholder="Enter your password"
                />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <EyeOff className="h-5 w-5" />
                  <span className="ml-1 text-sm">Hide</span>
                </button>
              </div>
            </div>

            {/* Social Logins */}
            <div className="space-y-4 pt-4">
              <Button variant="outline" className="w-full py-6 text-lg bg-transparent">
                <FacebookIcon className="h-6 w-6 mr-2" />
                Continue with Facebook
              </Button>
              <Button variant="outline" className="w-full py-6 text-lg bg-transparent">
                <GoogleIcon className="h-6 w-6 mr-2" />
                Continue with Google
              </Button>
              <Button variant="secondary" className="w-full py-6 text-lg">
                Continue as guest
              </Button>
            </div>

            {/* Sign In Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </form>

          {/* Bottom Sign Up Link */}
          <p className="mt-8 text-center text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#005C3C] font-semibold hover:underline">
              Sign up
            </Link>
          </p>

          {/* Mock Login Info */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Mock Login Credentials:</h3>
            <div className="text-xs text-gray-600 space-y-1">
              <div><strong>Admin:</strong> star@welpco.com / password123</div>
              <div><strong>User:</strong> user@welpco.com / password123</div>
              <div><strong>Welper:</strong> welper@welpco.com / password123</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="hidden lg:block relative">
        <Image
          src="/placeholder.svg?height=1080&width=960"
          alt="Woman and children playing"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

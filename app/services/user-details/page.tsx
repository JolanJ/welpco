'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

export default function UserDetailsPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [hearAboutUs, setHearAboutUs] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  
  const searchParams = useSearchParams();
  const router = useRouter();

  const service = searchParams.get('service');
  const location = searchParams.get('location');
  const schedule = searchParams.get('schedule');
  const type = searchParams.get('type');
  const email = searchParams.get('email');

  const hearAboutUsOptions = [
    'Social Media',
    'Friend/Family',
    'Search Engine',
    'Advertisement',
    'Other'
  ];

  const handleJoinNow = () => {
    if (firstName.trim() && lastName.trim() && password.trim() && hearAboutUs) {
      // Navigate to the account created page
      router.push(`/services/account-created?service=${service}&location=${location}&schedule=${schedule}&type=${type}&email=${email}&firstName=${firstName}&lastName=${lastName}&hearAboutUs=${hearAboutUs}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-xl sm:text-2xl font-bold text-[#005C3C]">WELPCO®</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#4CA76A] h-2 rounded-full" style={{ width: '50%' }}></div>
            </div>
            {/* Progress Bubble */}
            <div className="absolute top-0 transform -translate-y-full -translate-x-1/2 -mt-2" style={{ left: '50%' }}>
              <div className="bg-[#4CA76A] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg relative">
                50%
                {/* Triangle pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4CA76A]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4 px-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Almost done, add a few details about yourself.
          </h1>
        </div>

        {/* Form */}
        <div className="max-w-lg mx-auto px-4">
          {/* First Name */}
          <div className="mb-4 sm:mb-6">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4 sm:mb-6">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4 sm:mb-6">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* How did you hear about us */}
          <div className="mb-6 sm:mb-8">
            <label className="block text-gray-700 text-base sm:text-lg mb-3">How did you hear about us?</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none text-left flex items-center justify-between"
              >
                <span className={hearAboutUs ? 'text-gray-900' : 'text-gray-400'}>
                  {hearAboutUs || 'Select Option'}
                </span>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-[#005C3C] rounded-lg shadow-lg z-10">
                  {hearAboutUsOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setHearAboutUs(option);
                        setShowDropdown(false);
                      }}
                      className="w-full px-4 sm:px-6 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-base sm:text-lg"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Legal Text */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm text-gray-600">
              By clicking "Join now", you agree to our{' '}
              <a href="#" className="text-[#005C3C] hover:underline">Terms of Use</a>
              {' '}and{' '}
              <a href="#" className="text-[#005C3C] hover:underline">Privacy Policy</a>.
            </p>
          </div>

          {/* Join Now Button */}
          <div className="text-center">
            <button
              onClick={handleJoinNow}
              disabled={!firstName.trim() || !lastName.trim() || !password.trim() || !hearAboutUs}
              className={`w-full px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold transition-colors ${
                firstName.trim() && lastName.trim() && password.trim() && hearAboutUs
                  ? 'bg-[#005C3C] text-white hover:bg-[#00492F]'
                  : 'bg-[#005C3C] text-white cursor-not-allowed opacity-50'
              }`}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
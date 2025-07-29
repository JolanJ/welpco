'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Check } from 'lucide-react';

export default function EmailCapturePage() {
  const [email, setEmail] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const service = searchParams.get('service');
  const location = searchParams.get('location');
  const schedule = searchParams.get('schedule');
  const type = searchParams.get('type');

  const handleContinue = () => {
    if (email.trim()) {
      // Navigate to the user details page
      router.push(`/services/user-details?service=${service}&location=${location}&schedule=${schedule}&type=${type}&email=${email}`);
    }
  };

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
              <div className="bg-[#4CA76A] h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
            {/* Progress Bubble */}
            <div className="absolute top-0 transform -translate-y-full -translate-x-1/2 -mt-2" style={{ left: '90%' }}>
              <div className="bg-[#4CA76A] text-white text-sm px-3 py-1 rounded-lg relative">
                90%
                {/* Triangle pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4CA76A]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Message Box */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-[#005C3C] rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-2">
                <Check className="w-6 h-6 text-[#005C3C]" />
              </div>
            </div>
            <p className="text-white text-lg">
              We have found <span className="font-bold">25 caregivers</span> near you!
            </p>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            What's your email address?
          </h1>
        </div>

        {/* Email Input */}
        <div className="max-w-lg mx-auto mb-16">
          <input
            type="email"
            placeholder="Enter Email Address here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-3 text-xl border-2 border-[#005C3C] rounded-full focus:border-[#005C3C] focus:outline-none placeholder-gray-400"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleContinue()
              }
            }}
          />
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            disabled={!email.trim()}
            className={`px-12 py-3 rounded-full text-xl font-semibold transition-colors ${
              email.trim()
                ? 'bg-[#005C3C] text-white hover:bg-[#00492F]'
                : 'bg-[#005C3C] text-white cursor-not-allowed opacity-50'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
} 
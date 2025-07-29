'use client';

import { useSearchParams } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

export default function FinalCompletionPage() {
  const searchParams = useSearchParams();
  
  const service = searchParams.get('service');
  const location = searchParams.get('location');
  const schedule = searchParams.get('schedule');
  const type = searchParams.get('type');
  const email = searchParams.get('email');
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const hearAboutUs = searchParams.get('hearAboutUs');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#005C3C]">WELPCO®</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-[#4CA76A]" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-medium text-gray-900 mb-4">
            Welcome to WELPCO, {firstName}!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Your account has been created successfully. We'll be in touch with you shortly about your service request.
          </p>

          {/* Request Summary */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Service Request Summary</h2>
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-medium">{service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium">{location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Schedule:</span>
                <span className="font-medium">{schedule}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Service Type:</span>
                <span className="font-medium">{type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">{firstName} {lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Referred by:</span>
                <span className="font-medium">{hearAboutUs}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-[#005C3C] rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">What happens next?</h3>
            <ul className="text-left space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We'll review your request and match you with qualified Welpers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You'll receive an email with available service providers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Choose your preferred Welper and schedule your service</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Enjoy your service with peace of mind knowing all Welpers are vetted</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 
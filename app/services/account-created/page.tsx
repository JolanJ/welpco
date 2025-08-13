'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Check } from 'lucide-react';
import { useEffect } from 'react';

export default function AccountCreatedPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const service = searchParams.get('service');
  const location = searchParams.get('location');
  const schedule = searchParams.get('schedule');
  const type = searchParams.get('type');
  const email = searchParams.get('email');
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const hearAboutUs = searchParams.get('hearAboutUs');

  // Redirect to login after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

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
              <div className="bg-[#4CA76A] h-2 rounded-full" style={{ width: '50%' }}></div>
            </div>
            {/* Progress Bubble */}
            <div className="absolute top-0 transform -translate-y-full -translate-x-1/2 -mt-2" style={{ left: '50%' }}>
              <div className="bg-[#4CA76A] text-white text-sm px-3 py-1 rounded-lg relative">
                50%
                {/* Triangle pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4CA76A]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Message Box */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="bg-[#005C3C] rounded-2xl p-12 text-center max-w-md w-full">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-2">
                <Check className="w-6 h-6 text-[#005C3C]" />
              </div>
            </div>
            <p className="text-white text-lg font-medium mb-2">
              Account Created!
            </p>
            <p className="text-gray-200 text-sm">
              Redirecting to login in 3 seconds...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
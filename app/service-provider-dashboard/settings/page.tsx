'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ServiceProviderSidebar from '@/components/service-provider-sidebar';
import ServiceProviderHeader from '@/components/service-provider-header';
import Link from 'next/link';

export default function ServiceProviderSettingsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } else {
      router.push('/login');
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <ServiceProviderSidebar />
      
      <div className="flex-1 flex flex-col bg-gray-50">
        <ServiceProviderHeader />
        
        <main className="flex-1 p-8 bg-gray-50">
          <div className="max-w-4xl ml-8 mr-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

            {/* General Info Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">General Info</h2>
                <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                  Edit Info
                </Link>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">First Name</span>
                  <span className="font-semibold text-gray-900">Jennifer</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Last Name</span>
                  <span className="font-semibold text-gray-900">White</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">City</span>
                  <span className="font-semibold text-gray-900">London</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Postal code</span>
                  <span className="font-semibold text-gray-900">11345</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Password</span>
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-900">*********</span>
                    <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                      Change Password
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Info Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Membership Info</h2>
                <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                  Close Account
                </Link>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Joined Since</span>
                  <span className="font-semibold text-gray-900">24-04-2024</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Account Status</span>
                  <span className="font-semibold text-green-600">Active</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Plan</span>
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-900">Basic</span>
                    <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                      Upgrade
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Credit Card Info Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Credit Card Info</h2>
                <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                  Close Account
                </Link>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Linked Card</span>
                  <span className="font-semibold text-gray-900">None</span>
                </div>
                <div className="pt-3">
                  <Link href="#" className="text-blue-600 text-sm hover:underline">
                    View Billing History
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

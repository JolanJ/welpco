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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <ServiceProviderSidebar onClose={() => setSidebarOpen(false)} />
      </div>
      
      <div className="flex-1 flex flex-col min-w-0">
        <ServiceProviderHeader onMenuClick={toggleSidebar} />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50">
          <div className="max-w-4xl mx-auto lg:ml-8 lg:mr-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Settings</h1>

            {/* General Info Section */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">General Info</h2>
                <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                  Edit Info
                </Link>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 space-y-1 sm:space-y-0">
                  <span className="text-gray-600 text-sm sm:text-base">First Name</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Jennifer</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 space-y-1 sm:space-y-0">
                  <span className="text-gray-600 text-sm sm:text-base">Last Name</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">White</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 space-y-1 sm:space-y-0">
                  <span className="text-gray-600 text-sm sm:text-base">City</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">London</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 space-y-1 sm:space-y-0">
                  <span className="text-gray-600 text-sm sm:text-base">Postal code</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">11345</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 space-y-2 sm:space-y-0">
                  <span className="text-gray-600 text-sm sm:text-base">Password</span>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3">
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">*********</span>
                    <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                      Change Password
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Info Section */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Membership Info</h2>
                <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                  Close Account
                </Link>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 space-y-1 sm:space-y-0">
                  <span className="text-gray-600 text-sm sm:text-base">Joined Since</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">24-04-2024</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 space-y-1 sm:space-y-0">
                  <span className="text-gray-600 text-sm sm:text-base">Account Status</span>
                  <span className="font-semibold text-green-600 text-sm sm:text-base">Active</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 space-y-2 sm:space-y-0">
                  <span className="text-gray-600 text-sm sm:text-base">Plan</span>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3">
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">Basic</span>
                    <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                      Upgrade
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Credit Card Info Section */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Credit Card Info</h2>
                <Link href="#" className="text-[#005C3C] text-sm hover:underline">
                  Close Account
                </Link>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200 space-y-1 sm:space-y-0">
                  <span className="text-gray-600 text-sm sm:text-base">Linked Card</span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">None</span>
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

"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ServiceProviderSidebar from '@/components/service-provider-sidebar';
import ServiceProviderHeader from '@/components/service-provider-header';
import DemoHelper from '@/components/demo-helper';
import { Search, Filter, User, PawPrint } from 'lucide-react';

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "Qualified Baby sitter wanted",
    postedBy: "Irfan Shahid",
    location: "London",
    startDate: "08/04/2024",
    payRate: "$13-16",
    description: "We are looking for a nurturing and responsible cat sitter near Yarmouth. We would like someone with a few years experience and references. Please apply if you think you'd",
    category: "Care",
    icon: User
  },
  {
    id: 2,
    title: "Qualified Baby sitter wanted",
    postedBy: "Irfan Shahid",
    location: "London",
    startDate: "08/04/2024",
    payRate: "$13-16",
    description: "We are looking for a nurturing and responsible cat sitter near Yarmouth. We would like someone with a few years experience and references. Please apply if you think you'd",
    category: "Care",
    icon: User
  },
  {
    id: 3,
    title: "Qualified Baby sitter wanted",
    postedBy: "Irfan Shahid",
    location: "London",
    startDate: "08/04/2024",
    payRate: "$13-16",
    description: "We are looking for a nurturing and responsible cat sitter near Yarmouth. We would like someone with a few years experience and references. Please apply if you think you'd",
    category: "Care",
    icon: User
  }
];

const latestJobCategories = [
  { name: "Pet care", icon: PawPrint },
  { name: "Care", icon: User }
];

const lastJobs = [
  {
    title: "baby sitter needed for 1 child in my location",
    category: "Child Care",
    date: "May 27, 2024"
  }
];

export default function ServiceProviderDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const storedUser = localStorage.getItem('welpco_user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    } else {
      router.push('/login');
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <ServiceProviderSidebar />
      
      <div className="flex-1 flex flex-col">
        <ServiceProviderHeader />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Demo Helper */}
            <DemoHelper />
            
                                                   {/* Title - Full Width */}
              <div className="mb-6 ml-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Hey {user.name},
                </h1>
                <h1 className="text-3xl font-bold text-gray-900">
                  Here is our latest jobs.
                </h1>
              </div>

                                                                                                                                                                                                                               {/* Search Bar and Right Sidebar - Side by Side */}
                 <div className="flex">
                   {/* Main Content */}
                   <div className="max-w-2xl ml-8">
                     {/* Search Bar */}
                     <div className="relative mb-6">
                       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                       <input
                         type="text"
                         placeholder="Search"
                         className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005C3C] focus:border-transparent"
                       />
                       <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 cursor-pointer" />
                     </div>

                     {/* Job Listings */}
                     <div className="space-y-4">
                       {mockJobs.map((job) => (
                         <div key={job.id} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                           <div className="flex items-start space-x-4">
                             {/* Job Icon */}
                             <div className="w-12 h-12 bg-[#005C3C] rounded-lg flex items-center justify-center flex-shrink-0">
                               <job.icon className="h-6 w-6 text-white" />
                             </div>

                             {/* Job Details */}
                             <div className="flex-1">
                               <h3 className="text-lg font-bold text-gray-900 mb-1">
                                 {job.title}
                               </h3>
                               <p className="text-gray-600 mb-2">
                                 Posted by {job.postedBy} • {job.location}
                               </p>
                               <p className="text-gray-700 text-sm">
                                 {job.description}
                               </p>
                             </div>

                             {/* Job Meta */}
                             <div className="text-right flex-shrink-0">
                               <p className="text-gray-600 text-sm mb-1">
                                 Starts: {job.startDate}
                               </p>
                               <p className="text-[#005C3C] font-semibold">
                                 {job.payRate}
                               </p>
                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>

                   {/* Spacer to center the sidebar */}
                   <div className="flex-1"></div>

                   {/* Right Sidebar - Centered */}
                   <div className="w-80 space-y-6 mr-8">
                  {/* Latest Jobs */}
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Latest Jobs</h3>
                    <div className="space-y-3">
                      {latestJobCategories.map((category) => (
                        <div key={category.name} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#005C3C] rounded flex items-center justify-center">
                            <category.icon className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700">{category.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* No Active Jobs */}
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">No Active Jobs</h3>
                    <button className="text-[#005C3C] font-medium hover:underline">
                      Get a Job
                    </button>
                  </div>

                  {/* Last Jobs */}
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Last Jobs</h3>
                    <div className="space-y-3">
                      {lastJobs.map((job, index) => (
                        <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                          <p className="text-gray-700 text-sm mb-1">{job.title}</p>
                          <p className="text-gray-500 text-xs mb-1">{job.category}</p>
                          <p className="text-gray-400 text-xs">{job.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </main>
      </div>
    </div>
  );
} 
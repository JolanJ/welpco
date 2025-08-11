"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ServiceProviderSidebar from '@/components/service-provider-sidebar';
import ServiceProviderHeader from '@/components/service-provider-header';
import DemoHelper from '@/components/demo-helper';
import { Search, Filter, User, PawPrint, X } from 'lucide-react';

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

interface Job {
  id: number;
  title: string;
  postedBy: string;
  location: string;
  startDate: string;
  payRate: string;
  description: string;
  category: string;
  icon: any;
}

interface User {
  name: string;
  email: string;
  role: string;
}

export default function ServiceProviderDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showModal, setShowModal] = useState(false);
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

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleAcceptJob = () => {
    // Handle job acceptance logic here
    setShowModal(false);
    setSelectedJob(null);
  };

  const handleDeclineJob = () => {
    // Handle job decline logic here
    console.log('Job declined:', selectedJob);
    setShowModal(false);
    setSelectedJob(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

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
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl">
            
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
               <div className="max-w-4xl ml-8 mr-8">
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
                    <div 
                      key={job.id} 
                      className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer hover:bg-gray-50"
                      onClick={() => handleJobClick(job)}
                      style={{ cursor: 'pointer' }}
                    >
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
               <div className="w-80 space-y-6 ml-8 mr-8">
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

      {/* Job Acceptance Modal */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-4 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              {/* Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Do you want to accept this job?
              </h2>

              {/* Icon */}
              <div className="w-12 h-12 bg-[#005C3C] rounded-lg flex items-center justify-center mx-auto mb-4">
                <User className="h-6 w-6 text-white" />
              </div>

              {/* Job Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {selectedJob.title}
              </h3>

              {/* Posted By */}
              <p className="text-gray-600 mb-2">
                Posted by {selectedJob.postedBy}
              </p>

              {/* Start Date */}
              <p className="text-gray-600 mb-8">
                Starts: {selectedJob.startDate}
              </p>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={handleAcceptJob}
                  className="flex-1 bg-[#005C3C] text-white py-3 px-6 rounded-full font-medium hover:bg-[#00492F] transition-colors"
                >
                  Accept
                </button>
                <button
                  onClick={handleDeclineJob}
                  className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-full font-medium hover:bg-gray-600 transition-colors"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
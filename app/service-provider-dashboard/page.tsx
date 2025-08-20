"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ServiceProviderSidebar from '@/components/service-provider-sidebar';
import ServiceProviderHeader from '@/components/service-provider-header';
import DemoHelper from '@/components/demo-helper';
import { Search, Filter, User, PawPrint, X, Menu } from 'lucide-react';

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Demo Helper */}
            <DemoHelper />
            
            {/* Title - Full Width */}
            <div className="mb-4 sm:mb-6 ml-2 sm:ml-4 lg:ml-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                Hey {user.name},
              </h1>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Here is our latest jobs.
              </h1>
            </div>

            {/* Search Bar and Right Sidebar - Side by Side */}
            <div className="flex flex-col lg:flex-row">
              {/* Main Content */}
              <div className="w-full lg:max-w-4xl lg:ml-8 lg:mr-8 mb-6 lg:mb-0">
                {/* Search Bar */}
                <div className="relative mb-4 sm:mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-12 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005C3C] focus:border-transparent text-sm sm:text-base"
                  />
                  <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 cursor-pointer" />
                </div>

                {/* Job Listings */}
                <div className="space-y-3 sm:space-y-4">
                  {mockJobs.map((job) => (
                    <div 
                      key={job.id} 
                      className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer hover:bg-gray-50"
                      onClick={() => handleJobClick(job)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                        {/* Job Icon */}
                        <div className="w-12 h-12 bg-[#005C3C] rounded-lg flex items-center justify-center flex-shrink-0">
                          <job.icon className="h-6 w-6 text-white" />
                        </div>

                        {/* Job Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                            {job.title}
                          </h3>
                          <p className="text-gray-600 mb-2 text-sm sm:text-base">
                            Posted by {job.postedBy} • {job.location}
                          </p>
                          <p className="text-gray-700 text-sm line-clamp-2 sm:line-clamp-none">
                            {job.description}
                          </p>
                        </div>

                        {/* Job Meta */}
                        <div className="text-left sm:text-right flex-shrink-0">
                          <p className="text-gray-600 text-sm mb-1">
                            Starts: {job.startDate}
                          </p>
                          <p className="text-[#005C3C] font-semibold text-sm sm:text-base">
                            {job.payRate}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spacer to center the sidebar on desktop */}
              <div className="hidden lg:block flex-1"></div>

              {/* Right Sidebar - Centered */}
              <div className="w-full lg:w-80 space-y-4 sm:space-y-6 lg:ml-8 lg:mr-8">
                {/* Latest Jobs */}
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Latest Jobs</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {latestJobCategories.map((category) => (
                      <div key={category.name} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#005C3C] rounded flex items-center justify-center">
                          <category.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm sm:text-base">{category.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* No Active Jobs */}
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">No Active Jobs</h3>
                  <button className="text-[#005C3C] font-medium hover:underline text-sm sm:text-base">
                    Get a Job
                  </button>
                </div>

                {/* Last Jobs */}
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Last Jobs</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {lastJobs.map((job, index) => (
                      <div key={index} className="border-b border-gray-100 pb-2 sm:pb-3 last:border-b-0">
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
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 sm:p-8 max-w-lg w-full mx-4 relative max-h-[90vh] overflow-y-auto">
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
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Do you want to accept this job?
              </h2>

              {/* Icon */}
              <div className="w-12 h-12 bg-[#005C3C] rounded-lg flex items-center justify-center mx-auto mb-4">
                <User className="h-6 w-6 text-white" />
              </div>

              {/* Job Title */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                {selectedJob.title}
              </h3>

              {/* Posted By */}
              <p className="text-gray-600 mb-2 text-sm sm:text-base">
                Posted by {selectedJob.postedBy}
              </p>

              {/* Start Date */}
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Starts: {selectedJob.startDate}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleAcceptJob}
                  className="flex-1 bg-[#005C3C] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-medium hover:bg-[#00492F] transition-colors text-sm sm:text-base"
                >
                  Accept
                </button>
                <button
                  onClick={handleDeclineJob}
                  className="flex-1 bg-gray-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-medium hover:bg-gray-600 transition-colors text-sm sm:text-base"
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
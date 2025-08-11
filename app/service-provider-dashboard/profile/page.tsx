"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ServiceProviderSidebar from '@/components/service-provider-sidebar';
import ServiceProviderHeader from '@/components/service-provider-header';
import DemoHelper from '@/components/demo-helper';
import { 
  User, 
  Shield, 
  Share2, 
  Edit, 
  Calendar, 
  PawPrint, 
  Clock,
  Heart,
  Settings,
  Power,
  X,
  Copy
} from 'lucide-react';

interface User {
  name: string;
  email: string;
  role: string;
}

const previousJobs = [
  {
    title: "Pet care",
    icon: PawPrint,
    date: "2 days ago"
  },
  {
    title: "Care",
    icon: User,
    date: "4 days ago"
  }
];

const lastJobs = [
  {
    title: "baby sitter needed for 1 child in at downtown, London",
    category: "Child Care"
  }
];

export default function ServiceProviderProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
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

  const handleShare = () => {
    setShowShareModal(true);
  };

  const handleCloseModal = () => {
    setShowShareModal(false);
  };

  const handleViewCalendar = () => {
    setShowCalendarModal(true);
  };

  const handleCloseCalendarModal = () => {
    setShowCalendarModal(false);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://welpco.com/profile/jennifer-white');
      // You could add a toast notification here
      console.log('Profile link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleSocialShare = (platform: string) => {
    const url = 'https://welpco.com/profile/jennifer-white';
    const text = 'Check out my profile on WELPCO!';
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'reddit':
        shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
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
    <div className="flex min-h-screen bg-gray-50">
      <ServiceProviderSidebar />
      
      <div className="flex-1 flex flex-col bg-gray-50">
        <ServiceProviderHeader />
        
        <main className="flex-1 p-8 bg-gray-50">
          <div className="max-w-7xl">
            
            {/* Demo Helper */}
            <DemoHelper />
            
            {/* Title - Full Width */}
            <div className="mb-6 ml-8">
              <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            </div>

            {/* Main Content and Right Sidebar - Side by Side */}
            <div className="flex">
              {/* Main Content */}
              <div className="max-w-4xl ml-8 mr-8">
                {/* Profile Section */}
                <div className="p-6 mb-6">
                  <div className="flex items-center justify-end mb-6">
                    <button className="text-[#005C3C] font-medium hover:underline">
                      Edit Profile
                    </button>
                  </div>

                  <div className="flex items-start space-x-6">
                    {/* Profile Picture */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-yellow-400 rounded-lg flex items-center justify-center mb-2">
                        <User className="h-12 w-12 text-white" />
                      </div>
                      <button className="text-[#005C3C] text-sm font-medium hover:underline">
                        Change Photo
                      </button>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h2 className="text-2xl font-bold text-gray-900">Jennifer White</h2>
                        <Shield className="h-5 w-5 text-[#005C3C]" />
                      </div>
                      <p className="text-gray-600 mb-1">Downtown, London</p>
                      <p className="text-gray-600 mb-1">Joined 2024</p>
                      <p className="text-gray-600">Total Jobs 24 | 20 Reviews</p>
                    </div>
                  </div>
                </div>

                {/* Bio Section */}
                <div className="p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Bio</h3>
                    <button className="text-[#005C3C] font-medium hover:underline">
                      Edit Bio
                    </button>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Hello! I'm Star shah a devoted parent and homeowner who values quality care and reliable service. With a busy schedule and a growing family, I rely on trusted professionals for babysitting and home care needs. Using WELPCO I ensure that my loved ones and home are always in good hands. The platform's vetted and background-checked caregivers provide me with peace of mind, allowing me to focus on my work and personal commitments. From expert babysitters to dedicated home care professionals, I count on WELPCO to connect me with the best services available.
                  </p>
                </div>

                {/* Verified Info Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Verified Info</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700">welpco@gmail.com</p>
                      <button className="text-[#005C3C] font-medium hover:underline">
                        Edit Email
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700">+1 450 518 5188</p>
                      <button className="text-[#005C3C] font-medium hover:underline">
                        Edit Phone
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer to center the sidebar */}
              <div className="flex-1"></div>

              {/* Right Sidebar - Centered */}
              <div className="w-80 space-y-6 ml-8 mr-8">
                {/* Share Profile Link */}
                <div className="flex justify-end mb-6">
                  <button 
                    onClick={handleShare}
                    className="text-[#005C3C] font-medium hover:underline flex items-center space-x-1"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share Profile</span>
                  </button>
                </div>
                
                {/* Calendar Widget */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Calendar</h3>
                  <div className="flex justify-center space-x-3 mb-4">
                    <div className="w-12 h-12 border border-green-300 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">27</span>
                    </div>
                    <div className="w-12 h-12 border border-green-300 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">28</span>
                    </div>
                    <div className="w-12 h-12 border border-green-300 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">29</span>
                    </div>
                    <div className="w-12 h-12 border border-green-300 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">30</span>
                    </div>
                  </div>
                  <button 
                    onClick={handleViewCalendar}
                    className="text-gray-500 font-medium hover:underline text-center w-full"
                  >
                    View Calendar
                  </button>
                </div>

                {/* Previous Jobs Widget */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Previous Jobs</h3>
                  <div className="space-y-3 mb-4">
                    {previousJobs.map((job, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#005C3C] rounded flex items-center justify-center">
                            <job.icon className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700">{job.title}</span>
                        </div>
                        <span className="text-gray-500 text-sm">{job.date}</span>
                      </div>
                    ))}
                  </div>
                  <button className="text-[#005C3C] font-medium hover:underline">
                    View all
                  </button>
                </div>

                {/* No Active Jobs Widget */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">No Active Jobs</h3>
                  <button className="text-[#005C3C] font-medium hover:underline">
                    Search a job
                  </button>
                </div>

                {/* Last Jobs Widget */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Last Jobs</h3>
                  <div className="space-y-3">
                    {lastJobs.map((job, index) => (
                      <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <p className="text-gray-700 text-sm mb-1">{job.title}</p>
                        <p className="text-gray-500 text-xs">{job.category}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Share Profile Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>
          
          {/* Modal */}
          <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal content */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Share your profile</h2>
              <p className="text-gray-600 mb-6">share it with your friends.</p>

              {/* Social media icons */}
              <div className="flex justify-center space-x-6 mb-6">
                <button
                  onClick={() => handleSocialShare('twitter')}
                  className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Twitter</span>
                </button>

                <button
                  onClick={() => handleSocialShare('facebook')}
                  className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Facebook</span>
                </button>

                <button
                  onClick={() => handleSocialShare('reddit')}
                  className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Reddit</span>
                </button>

                <button
                  onClick={() => handleSocialShare('whatsapp')}
                  className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">WhatsApp</span>
                </button>
              </div>

              {/* Shareable link */}
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value="https://welpco.com/profile/jennifer-white"
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                >
                  <Copy className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Calendar Modal */}
      {showCalendarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handleCloseCalendarModal}
          ></div>
          
          {/* Modal */}
          <div className="relative bg-white rounded-lg max-w-6xl w-full mx-4 h-[600px] flex overflow-hidden">
            {/* Close button */}
            <button
              onClick={handleCloseCalendarModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Panel - Vibrant Green */}
            <div className="w-1/3 bg-green-400 p-8 text-white">
              {/* Date Header */}
              <div className="mb-8">
                <div className="text-6xl font-bold mb-2">02</div>
                <div className="text-xl font-medium">JULY</div>
                <div className="text-lg">2021</div>
              </div>

              {/* Dates Available Section */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Dates Available</h3>
                <div className="space-y-3">
                  <div className="bg-green-300 rounded-lg p-3 text-green-800 font-medium">
                    26,27,28 JULY
                  </div>
                  <div className="bg-green-300 rounded-lg p-3 text-green-800 font-medium">
                    1,2,3,4 AUGUST
                  </div>
                </div>
              </div>

              {/* Schedule Section */}
              <div>
                <h3 className="text-lg font-bold mb-4">SCHEDULE</h3>
                <div className="space-y-3">
                  <div className="bg-green-300 rounded-lg p-3 text-green-800 font-medium">
                    10:00 - 01:10 Sitting
                  </div>
                  <div className="bg-green-300 rounded-lg p-3 text-green-800 font-medium">
                    02:00 - 05:00 Sitting
                  </div>
                  <div className="bg-green-300 rounded-lg p-3 text-green-800 font-medium">
                    07:00 - 08:30 Pet Care
                  </div>
                  <div className="bg-green-300 rounded-lg p-3 text-green-800 font-medium">
                    10:00 - 12:30 Pet Care
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Dark Green Calendar */}
            <div className="w-2/3 bg-[#00492F] p-8 text-white">
              {/* Calendar Header */}
              <div className="mb-6">
                <h2 className="text-sm font-bold uppercase tracking-wider mb-4">CALENDAR</h2>
                
                {/* Month Navigation */}
                <div className="flex space-x-6 mb-6">
                  <span className="text-gray-300">June 2021</span>
                  <span className="font-bold">July 2021</span>
                  <span className="text-gray-300">August 2021</span>
                </div>

                {/* Days of Week */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  <div className="text-center text-sm font-medium">SUN</div>
                  <div className="text-center text-sm font-medium">MON</div>
                  <div className="text-center text-sm font-medium">TUS</div>
                  <div className="text-center text-sm font-medium">WED</div>
                  <div className="text-center text-sm font-medium">THUR</div>
                  <div className="text-center text-sm font-medium">FRI</div>
                  <div className="text-center text-sm font-medium">SAT</div>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {/* June 2021 - Last few days */}
                <div className="p-2 text-center text-sm text-gray-400">27</div>
                <div className="p-2 text-center text-sm text-gray-400">28</div>
                <div className="p-2 text-center text-sm text-gray-400">29</div>
                <div className="p-2 text-center text-sm text-gray-400">30</div>

                {/* July 2021 */}
                <div className="p-2 text-center text-sm">1</div>
                <div className="p-2 text-center text-sm">2</div>
                <div className="p-2 text-center text-sm">3</div>
                <div className="p-2 text-center text-sm border border-white rounded-full">4</div>
                <div className="p-2 text-center text-sm">5</div>
                <div className="p-2 text-center text-sm">6</div>
                <div className="p-2 text-center text-sm">7</div>
                <div className="p-2 text-center text-sm">8</div>
                <div className="p-2 text-center text-sm">9</div>
                <div className="p-2 text-center text-sm">10</div>
                <div className="p-2 text-center text-sm border border-white rounded-full">11</div>
                <div className="p-2 text-center text-sm">12</div>
                <div className="p-2 text-center text-sm border border-white rounded-full">13</div>
                <div className="p-2 text-center text-sm">14</div>
                <div className="p-2 text-center text-sm">15</div>
                <div className="p-2 text-center text-sm">16</div>
                <div className="p-2 text-center text-sm">17</div>
                <div className="p-2 text-center text-sm border border-white rounded-full">18</div>
                <div className="p-2 text-center text-sm">19</div>
                <div className="p-2 text-center text-sm">20</div>
                <div className="p-2 text-center text-sm border border-white rounded-full">21</div>
                <div className="p-2 text-center text-sm">22</div>
                <div className="p-2 text-center text-sm">23</div>
                <div className="p-2 text-center text-sm">24</div>
                <div className="p-2 text-center text-sm border border-white rounded-full">25</div>
                <div className="p-2 text-center text-sm">26</div>
                <div className="p-2 text-center text-sm">27</div>
                <div className="p-2 text-center text-sm">28</div>
                <div className="p-2 text-center text-sm">29</div>
                <div className="p-2 text-center text-sm">30</div>
                <div className="p-2 text-center text-sm">31</div>

                {/* August 2021 - First few days */}
                <div className="p-2 text-center text-sm">1</div>
                <div className="p-2 text-center text-sm bg-green-400 rounded-full">2</div>
                <div className="p-2 text-center text-sm">3</div>
                <div className="p-2 text-center text-sm">4</div>
                <div className="p-2 text-center text-sm">5</div>
                <div className="p-2 text-center text-sm">6</div>
                <div className="p-2 text-center text-sm">7</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

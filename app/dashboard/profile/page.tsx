"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import DemoHelper from '@/components/demo-helper';
import { 
  User, 
  Shield, 
  Share2, 
  Edit, 
  Calendar, 
  Users, 
  Clock,
  Heart,
  Settings,
  Power,
  X,
  Copy,
  MapPin,
  Phone,
  Mail,
  CreditCard
} from 'lucide-react';

interface User {
  name: string;
  email: string;
  role: string;
}

const recentServices = [
  {
    title: "Child Care",
    icon: Users,
    date: "2 days ago",
    status: "Completed"
  },
  {
    title: "House Cleaning",
    icon: Settings,
    date: "1 week ago",
    status: "Completed"
  }
];

const upcomingServices = [
  {
    title: "Pet Care - Dog Walking",
    provider: "Sarah Wilson",
    date: "Tomorrow",
    time: "10:00 AM"
  }
];

const favoriteProviders = [
  {
    name: "Jennifer White",
    service: "Child Care",
    rating: 4.8,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Michael Brown",
    service: "House Cleaning",
    rating: 4.9,
    image: "/placeholder-user.jpg"
  }
];

export default function CustomerProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);
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

  const handleShare = () => {
    setShowShareModal(true);
  };

  const handleCloseModal = () => {
    setShowShareModal(false);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://welpco.com/profile/star-shah');
      console.log('Profile link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleSocialShare = (platform: string) => {
    const url = 'https://welpco.com/profile/star-shah';
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
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar currentPath="/dashboard/profile" onClose={() => setSidebarOpen(false)} />
      </div>
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={toggleSidebar} />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Demo Helper */}
            <DemoHelper />
            
            {/* Title and Share Button Row */}
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Profile</h1>
              <button 
                onClick={handleShare}
                className="text-[#005C3C] font-medium hover:underline flex items-center space-x-1 text-sm sm:text-base"
              >
                <Share2 className="h-4 w-4" />
                <span>Share Profile</span>
              </button>
            </div>

            {/* Main Content and Right Sidebar */}
            <div className="flex flex-col lg:flex-row">
              {/* Main Content */}
              <div className="w-full lg:max-w-4xl lg:mr-8 mb-6 lg:mb-0">
                {/* Profile Section */}
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 mb-4 sm:mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    {/* Profile Picture */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-pink-400 rounded-lg flex items-center justify-center mb-2">
                        <User className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                      </div>
                      <button className="text-[#005C3C] text-sm font-medium hover:underline">
                        Change Photo
                      </button>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-2 sm:space-y-0">
                        <div className="flex items-center space-x-2">
                          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Star Shah</h2>
                          <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-[#005C3C]" />
                        </div>
                        <button className="text-[#005C3C] font-medium hover:underline text-sm sm:text-base">
                          Edit Profile
                        </button>
                      </div>
                      <p className="text-gray-600 mb-1 text-sm sm:text-base flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Downtown, London
                      </p>
                      <p className="text-gray-600 mb-1 text-sm sm:text-base">Member since 2024</p>
                      <p className="text-gray-600 text-sm sm:text-base">24 Services Booked | 18 Reviews Given</p>
                    </div>
                  </div>
                </div>

                {/* Bio Section */}
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 mb-4 sm:mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">About Me</h3>
                    <button className="text-[#005C3C] font-medium hover:underline text-sm sm:text-base">
                      Edit Bio
                    </button>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Hello! I'm Star Shah, a devoted parent and homeowner who values quality care and reliable service. With a busy schedule and a growing family, I rely on trusted professionals for babysitting and home care needs. Using WELPCO I ensure that my loved ones and home are always in good hands. The platform's vetted and background-checked caregivers provide me with peace of mind, allowing me to focus on my work and personal commitments. From expert babysitters to dedicated home care professionals, I count on WELPCO to connect me with the best services available.
                  </p>
                </div>

                {/* Contact Info Section */}
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Information</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <p className="text-gray-700 text-sm sm:text-base">star@welpco.com</p>
                      </div>
                      <button className="text-[#005C3C] font-medium hover:underline text-sm sm:text-base">
                        Edit Email
                      </button>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <p className="text-gray-700 text-sm sm:text-base">+1 450 518 5188</p>
                      </div>
                      <button className="text-[#005C3C] font-medium hover:underline text-sm sm:text-base">
                        Edit Phone
                      </button>
                    </div>
                  </div>
                </div>

                {/* Payment Methods Section */}
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Payment Methods</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-4 w-4 text-gray-500" />
                        <p className="text-gray-700 text-sm sm:text-base">Visa ending in 4242</p>
                      </div>
                      <button className="text-[#005C3C] font-medium hover:underline text-sm sm:text-base">
                        Edit
                      </button>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-blue-600 rounded"></div>
                        <p className="text-gray-700 text-sm sm:text-base">PayPal Connected</p>
                      </div>
                      <button className="text-[#005C3C] font-medium hover:underline text-sm sm:text-base">
                        Manage
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-full lg:w-80 space-y-4 sm:space-y-6">
                {/* Upcoming Services Widget */}
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Upcoming Services</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {upcomingServices.map((service, index) => (
                      <div key={index} className="border-b border-gray-100 pb-3 sm:pb-4 last:border-b-0">
                        <p className="text-gray-700 text-sm font-medium mb-1">{service.title}</p>
                        <p className="text-gray-500 text-xs mb-1">with {service.provider}</p>
                        <p className="text-gray-500 text-xs">{service.date} at {service.time}</p>
                      </div>
                    ))}
                  </div>
                  <button className="text-[#005C3C] font-medium hover:underline text-sm sm:text-base mt-3">
                    View all
                  </button>
                </div>

                {/* Recent Services Widget */}
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Recent Services</h3>
                  <div className="space-y-2 sm:space-y-3 mb-4">
                    {recentServices.map((service, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#005C3C] rounded flex items-center justify-center">
                            <service.icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm sm:text-base">{service.title}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-gray-500 text-xs sm:text-sm">{service.date}</span>
                          <div className="text-green-600 text-xs font-medium">{service.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="text-[#005C3C] font-medium hover:underline text-sm sm:text-base">
                    View all
                  </button>
                </div>

                {/* Favorite Providers Widget */}
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Favorite Providers</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {favoriteProviders.map((provider, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-gray-700 text-sm font-medium">{provider.name}</p>
                          <p className="text-gray-500 text-xs">{provider.service}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3 text-red-500 fill-current" />
                          <span className="text-gray-600 text-xs">{provider.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="text-[#005C3C] font-medium hover:underline text-sm sm:text-base mt-3">
                    View all
                  </button>
                </div>

                {/* Account Status Widget */}
                <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Account Status</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Status</span>
                      <span className="text-green-600 text-sm font-medium">Active</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Member Since</span>
                      <span className="text-gray-700 text-sm">April 2024</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Plan</span>
                      <span className="text-gray-700 text-sm">Premium</span>
                    </div>
                  </div>
                  <button className="text-[#005C3C] font-medium hover:underline text-sm sm:text-base mt-3">
                    Manage Subscription
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Share Profile Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>
          
          <div className="relative bg-white rounded-lg p-6 sm:p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Share your profile</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Share it with your friends.</p>

              <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6">
                <button
                  onClick={() => handleSocialShare('twitter')}
                  className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700">Twitter</span>
                </button>

                <button
                  onClick={() => handleSocialShare('facebook')}
                  className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700">Facebook</span>
                </button>

                <button
                  onClick={() => handleSocialShare('reddit')}
                  className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700">Reddit</span>
                </button>

                <button
                  onClick={() => handleSocialShare('whatsapp')}
                  className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700">WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value="https://welpco.com/profile/star-shah"
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
    </div>
  );
}

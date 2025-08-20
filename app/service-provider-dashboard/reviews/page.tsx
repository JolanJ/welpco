'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ServiceProviderSidebar from '@/components/service-provider-sidebar';
import ServiceProviderHeader from '@/components/service-provider-header';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  reviewerName: string;
  rating: number;
  comment: string;
  profilePicture: string;
}

const mockReviews: Review[] = [
  {
    id: 1,
    reviewerName: "Wade Warren",
    rating: 4.75,
    comment: "Exceptional caregiver! Reliable, compassionate, and truly cares about the children. Highly recommend!",
    profilePicture: "/placeholder.svg"
  },
  {
    id: 2,
    reviewerName: "Nicole Champlin",
    rating: 4.95,
    comment: "Outstanding service! Professional, attentive, and goes above and beyond expectations.",
    profilePicture: "/placeholder.svg"
  },
  {
    id: 3,
    reviewerName: "Wade Warren",
    rating: 4.75,
    comment: "Outstanding service! Professional, attentive, and very reliable. Great communication.",
    profilePicture: "/placeholder.svg"
  },
  {
    id: 4,
    reviewerName: "Nicole Champlin",
    rating: 4.95,
    comment: "Couldn't agree more to this Person! Excellent work ethic and very trustworthy.",
    profilePicture: "/placeholder.svg"
  },
  {
    id: 5,
    reviewerName: "Elias Watsica",
    rating: 5.0,
    comment: "Outstanding service! Professional, attentive, and exceeded all expectations.",
    profilePicture: "/placeholder.svg"
  },
  {
    id: 6,
    reviewerName: "Theresa Conroy",
    rating: 4.5,
    comment: "Exceptional caregiver! Reliable, compassionate, and very professional.",
    profilePicture: "/placeholder.svg"
  },
  {
    id: 7,
    reviewerName: "Elias Watsica",
    rating: 5.0,
    comment: "Super recommended Person. You have to try! Excellent service quality.",
    profilePicture: "/placeholder.svg"
  },
  {
    id: 8,
    reviewerName: "Theresa Conroy",
    rating: 4.5,
    comment: "Exceptional caregiver! Reliable, compassionate, and very trustworthy.",
    profilePicture: "/placeholder.svg"
  }
];

export default function ReviewsPage() {
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

  const truncateComment = (comment: string, maxLength: number = 50) => {
    if (comment.length <= maxLength) return comment;
    return comment.substring(0, maxLength) + '...';
  };

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
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 ml-2 sm:ml-4 lg:ml-8">Reviews</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 ml-2 sm:ml-4 lg:ml-8 mr-2 sm:mr-4 lg:mr-8">
              {mockReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <img
                      src={review.profilePicture}
                      alt={review.reviewerName}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 bg-gray-200"
                    />
                    <div className="flex items-center">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 fill-current mr-1" />
                      <span className="text-base sm:text-lg font-semibold text-gray-900">
                        {review.rating.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base">
                    {review.reviewerName}
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {truncateComment(review.comment)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

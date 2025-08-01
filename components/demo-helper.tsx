"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, User, Users, Shield } from 'lucide-react';

export default function DemoHelper() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const quickLogin = (email: string, password: string, role: string) => {
    const userData = {
      email,
      name: role === 'Welper' ? 'Jane Smith' : role === 'Admin' ? 'Star Shah' : 'John Doe',
      role
    };
    
    localStorage.setItem('welpco_user', JSON.stringify(userData));
    
    if (role === 'Welper') {
      router.push('/service-provider-dashboard');
    } else {
      router.push('/dashboard');
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-[#005C3C] text-white p-3 rounded-full shadow-lg hover:bg-[#00492F] transition-colors"
        title="Demo Helper"
      >
        <Users className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-64">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Demo Helper</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-2">
        <button
          onClick={() => quickLogin('user@welpco.com', 'password123', 'User')}
          className="w-full flex items-center space-x-2 px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
        >
          <User className="w-4 h-4" />
          <span>Login as User</span>
        </button>
        
        <button
          onClick={() => quickLogin('welper@welpco.com', 'password123', 'Welper')}
          className="w-full flex items-center space-x-2 px-3 py-2 text-sm bg-green-50 text-green-700 rounded hover:bg-green-100 transition-colors"
        >
          <Users className="w-4 h-4" />
          <span>Login as Service Provider</span>
        </button>
        
        <button
          onClick={() => quickLogin('star@welpco.com', 'password123', 'Admin')}
          className="w-full flex items-center space-x-2 px-3 py-2 text-sm bg-purple-50 text-purple-700 rounded hover:bg-purple-100 transition-colors"
        >
          <Shield className="w-4 h-4" />
          <span>Login as Admin</span>
        </button>
        
        <button
          onClick={() => {
            localStorage.removeItem('welpco_user');
            router.push('/login');
          }}
          className="w-full flex items-center space-x-2 px-3 py-2 text-sm bg-red-50 text-red-700 rounded hover:bg-red-100 transition-colors"
        >
          <X className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Quick switch between user types for demo purposes
        </p>
      </div>
    </div>
  );
} 
'use client';

import { CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PasswordChangedSuccess() {
  const router = useRouter();

  const handleReturn = () => {
    // Navigate back to profile or dashboard
    router.push('/profile');
  };

  return (
    <div className="h-screen ">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">My Profile</h1>
          <p className="text-sm text-gray-500">Hi Timmy, please kindly update your profile!</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl min-h-[calc(100vh-180px)] shadow-sm p-8">
          {/* Success Content */}
          <div className="flex flex-col items-center py-12">
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full bg-gray-800 mb-6 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h2 className="text-xl font-bold text-gray-900 mb-1">Timmy Promise</h2>
            <p className="text-sm text-gray-500 mb-6">timmypromise@email.com</p>

            {/* Success Message */}
            <div className="flex items-center gap-2 mb-8">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-base text-gray-900 font-medium">Password Changed !</span>
            </div>

            {/* Return Button */}
            <button
              onClick={handleReturn}
              className="w-full max-w-xs bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
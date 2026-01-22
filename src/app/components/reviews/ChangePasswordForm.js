'use client';

import { useState } from 'react';
import { KeyRound, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ChangePasswordForm() {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
    const router = useRouter()
  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords({
      ...showPasswords,
      [field]: !showPasswords[field]
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.oldPassword.trim()) {
      newErrors.oldPassword = 'Old password is required';
    }

    if (!formData.newPassword.trim()) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Password change data:', formData);
      
      router.push('/passwordsuccess');
      // Clear form after successful submission
      setFormData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen">
      <div className="">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">My Profile</h1>
          <p className="text-sm text-gray-500">Hi Timmy, please kindly update your profile!</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gray-800 mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Timmy Promise</h2>
            <div className="flex items-center gap-1 text-blue-600 text-sm">
              <KeyRound className="w-4 h-4" />
              <span>Change password</span>
            </div>
          </div>

          {/* Password Form */}
          <div className="max-w-2xl mx-auto">
            {/* Old Password */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">
                Old Password
              </label>
              <div className="relative">
                <input
                  type={showPasswords.old ? 'text' : 'password'}
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  placeholder="Old password"
                  className={`w-full px-4 py-3 pr-12 bg-gray-50 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.oldPassword ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('old')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.old ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.oldPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.oldPassword}</p>
              )}
            </div>

            {/* New Password */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPasswords.new ? 'text' : 'password'}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="New Password"
                  className={`w-full px-4 py-3 pr-12 bg-gray-50 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.newPassword ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('new')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.new ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.newPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.newPassword}</p>
              )}
            </div>

            {/* Confirm New Password */}
            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showPasswords.confirm ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm New  Password"
                  className={`w-full px-4 py-3 pr-12 bg-gray-50 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirm')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.confirm ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-900 hover:bg-blue-800 h-[52px]  text-white font-medium py-3 rounded-[15px] transition-colors"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
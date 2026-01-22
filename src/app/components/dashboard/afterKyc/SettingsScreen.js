"use client"
import { useRouter } from 'next/navigation'; 
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const SettingsScreen = () => {
  const [settings, setSettings] = useState({
    accountVisibility: 'public',
    appNotifications: true,
    emailNotifications: true,
    soundVibration: true,
    autoReply: false,
    preferredLanguage: 'english',
    countryRegion: 'nigeria',
    preferredCurrency: 'ngn',
    theme: 'light'
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSelectChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };
  const router = useRouter();
  const handleClick = () => {
    console.log('Clicked');
    router.push("/dashboard/editprofile");
  }
  
  return (
    <>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 py-4 sm:py-6 px-3 sm:px-4 overflow-y-auto hide-scrollbar">
        <div className="mx-auto space-y-3 sm:space-y-4">
          {/* Header */}
          <div className="mb-4 sm:mb-6 min-h-[52px]">
            <h1 className="text-[20px] sm:text-[24px] font-bold text-[#24272A] leading-[120%] tracking-[-0.02em]">Settings</h1>
            <p className="text-[14px] sm:text-[16px] text-[#737380] mt-1 leading-[145%] tracking-[0%] font-medium">All Settings, Notification, Search for Single settings</p>
          </div>

          {/* Profile Section */}
          <div className="bg-white rounded-[10px] shadow-sm px-4 sm:px-6 py-4 sm:py-6 min-h-[150px] sm:h-[182px]">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">Timmy</h2>
                <p className="text-xs sm:text-sm text-gray-600">timmy0123@gmail.com</p>
                <button 
                  onClick={handleClick} 
                  className="px-4 sm:px-6 py-1.5 sm:py-2 bg-blue-900 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-800 transition-colors w-fit mt-1"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Account Visibility */}
          <div className="bg-white rounded-[10px] shadow-sm px-4 sm:px-10 py-4 sm:py-6 min-h-[150px] sm:h-[182px]">
            <h3 className="text-[24px] sm:text-[32px] font-bold text-[#454545] tracking-[-0.04em] leading-[100%] mb-3 sm:mb-4">Account Visibility</h3>
            <div className="relative h-[50px] sm:h-[60px]">
              <select
                value={settings.accountVisibility}
                onChange={(e) => handleSelectChange('accountVisibility', e.target.value)}
                className="w-full px-3 sm:px-4 text-[#454545] leading-[100%] tracking-[-0.04em] font-medium py-2.5 sm:py-3 border-[0.5px] border-[#B5BABE] rounded-[10px] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer text-xs sm:text-sm text-gray-700"
              >
                <option value="public">Public - Visible to all clients</option>
                <option value="private">Private - Only visible to connections</option>
                <option value="hidden">Hidden - Not visible to anyone</option>
              </select>
              <ChevronDown className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="bg-white rounded-[10px] shadow-sm px-4 sm:px-7 py-5 sm:py-8">
            <h3 className="text-[24px] sm:text-[32px] font-bold text-[#454545] leading-[100%] tracking-[-0.04em] mb-3 sm:mb-4">Notification Preferences</h3>
            <div className="space-y-3 sm:space-y-4">
              {/* App Notifications */}
              <div className="flex items-center min-h-[50px] sm:h-[59px] border-[0.3px] rounded-[10px] border-[#B5BABE] px-4 sm:px-7 py-2.5 sm:py-3 justify-between">
                <span className="text-[16px] sm:text-[20px] text-[#454545] leading-[100%] font-medium tracking-[-0.02em]">App Notifications</span>
                <button
                  onClick={() => handleToggle('appNotifications')}
                  className={`relative inline-flex h-[28px] sm:h-[33px] w-10 sm:w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    settings.appNotifications ? 'bg-[#067329]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-3.5 sm:h-4 w-3.5 sm:w-4 transform rounded-full bg-white transition-transform ${
                      settings.appNotifications ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Email Notifications */}
              <div className="flex items-center min-h-[50px] sm:h-[59px] border-[0.3px] rounded-[10px] border-[#B5BABE] px-4 sm:px-7 py-2.5 sm:py-3 justify-between">
                <span className="text-[16px] sm:text-[20px] text-[#454545] leading-[100%] font-medium tracking-[-0.02em]">Email Notifications</span>
                <button
                  onClick={() => handleToggle('emailNotifications')}
                  className={`relative inline-flex h-5 sm:h-6 w-10 sm:w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    settings.emailNotifications ? 'bg-[#067329]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-3.5 sm:h-4 w-3.5 sm:w-4 transform rounded-full bg-white transition-transform ${
                      settings.emailNotifications ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Sound & Vibration */}
              <div className="flex items-center min-h-[50px] sm:h-[59px] border-[0.3px] rounded-[10px] border-[#B5BABE] px-4 sm:px-7 py-2.5 sm:py-3 justify-between">
                <span className="text-[16px] sm:text-[20px] text-[#454545] leading-[100%] font-medium tracking-[-0.02em]">Sound & Vibration</span>
                <button
                  onClick={() => handleToggle('soundVibration')}
                  className={`relative inline-flex h-5 sm:h-6 w-10 sm:w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    settings.soundVibration ? 'bg-[#067329]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-3.5 sm:h-4 w-3.5 sm:w-4 transform rounded-full bg-white transition-transform ${
                      settings.soundVibration ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Enable Auto-Reply */}
              <div className="flex items-center min-h-[50px] sm:h-[59px] border-[0.3px] rounded-[10px] border-[#B5BABE] px-4 sm:px-7 py-2.5 sm:py-3 justify-between">
                <span className="text-[16px] sm:text-[20px] text-[#454545] leading-[100%] font-medium tracking-[-0.02em]">Enable Auto-Reply</span>
                <button
                  onClick={() => handleToggle('autoReply')}
                  className={`relative inline-flex h-5 sm:h-6 w-10 sm:w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    settings.autoReply ? 'bg-[#067329]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-3.5 sm:h-4 w-3.5 sm:w-4 transform rounded-full bg-white transition-transform ${
                      settings.autoReply ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Localization & Preferences */}
          <div className="bg-white rounded-[10px] shadow-sm px-4 sm:px-10 py-4 sm:py-4">
            <h3 className="text-[24px] sm:text-[32px] font-bold text-[#454545] tracking-[-0.04em] leading-[100%] mb-3 sm:mb-4">Localization & Preferences</h3>
            <div className="flex flex-col md:flex-row justify-between gap-4 sm:gap-6">
              {/* Left Column */}
              <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                {/* Preferred Language */}
                <div className="h-auto sm:h-[62px]">
                  <div className="relative">
                    <select
                      value={settings.preferredLanguage}
                      onChange={(e) => handleSelectChange('preferredLanguage', e.target.value)}
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border-[0.5px] border-[#B5BABE] rounded-[10px] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer text-xs sm:text-sm text-gray-700"
                    >
                      <option value="english">English</option>
                      <option value="french">French</option>
                      <option value="spanish">Spanish</option>
                      <option value="yoruba">Yoruba</option>
                    </select>
                    <ChevronDown className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Preferred Currency */}
                <div className="h-auto sm:h-[62px]">
                  <div className="relative">
                    <select
                      value={settings.preferredCurrency}
                      onChange={(e) => handleSelectChange('preferredCurrency', e.target.value)}
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border-[0.5px] border-[#B5BABE] rounded-[10px] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer text-xs sm:text-sm text-gray-700"
                    >
                      <option value="ngn">NGN - Nigerian Naira</option>
                      <option value="usd">USD - US Dollar</option>
                      <option value="gbp">GBP - British Pound</option>
                      <option value="eur">EUR - Euro</option>
                    </select>
                    <ChevronDown className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Theme */}
                <div className="h-auto sm:h-[62px]">
                  <div className="relative">
                    <select
                      value={settings.theme}
                      onChange={(e) => handleSelectChange('theme', e.target.value)}
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border-[0.5px] border-[#B5BABE] rounded-[10px] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer text-xs sm:text-sm text-gray-700"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="auto">Auto</option>
                    </select>
                    <ChevronDown className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 justify-center items-center">
                {/* Country/Region */}
                <div className="h-auto sm:h-[62px] w-full">
                  <div className="relative">
                    <select
                      value={settings.countryRegion}
                      onChange={(e) => handleSelectChange('countryRegion', e.target.value)}
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border-[0.5px] border-[#B5BABE] rounded-[10px] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer text-xs sm:text-sm text-gray-700"
                    >
                      <option value="nigeria">Nigeria</option>
                      <option value="ghana">Ghana</option>
                      <option value="kenya">Kenya</option>
                      <option value="usa">United States</option>
                    </select>
                    <ChevronDown className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Help & Support */}
          <div className="bg-white rounded-[10px] shadow-sm px-4 sm:px-9 py-4 sm:p-6">
            <h3 className="text-[24px] sm:text-[32px] font-bold leading-[145%] tracking-[-0.04em] text-[#454545] mb-3 sm:mb-4">Help & Support</h3>
            <div className="space-y-3 sm:gap-[26px] flex flex-col">
              {/* Frequently Asked Questions */}
              <button className="w-full flex items-center border-[0.5px] border-[#B5BABE] justify-between py-2.5 sm:py-3 px-3 sm:px-4 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-xs sm:text-sm text-gray-700">Frequently Asked Questions</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </button>

              {/* Contact Support */}
              <button className="w-full flex border-[0.5px] border-[#B5BABE] items-center justify-between py-2.5 sm:py-3 px-3 sm:px-4 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-xs sm:text-sm text-gray-700">Contact Support</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsScreen;
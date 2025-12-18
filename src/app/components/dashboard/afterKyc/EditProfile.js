"use client"

import React, { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    otherName: '',
    emailAddress: '',
    statePhone: '',
    alternatePhone: '',
    phoneCode1: 'NG',
    phoneCode2: 'NG',
    address: '',
    city: "",
    area: "",
    region: '',
    postalcode: "",
    businessName: '',
    registrationStatus: '',
    products: '',
    businessDescription: ''
  });

  const countries = [
    { code: 'NG', name: 'Nigeria', flagUrl: 'https://flagcdn.com/w40/ng.png' },
    { code: 'US', name: 'United States', flagUrl: 'https://flagcdn.com/w40/us.png' },
    { code: 'GB', name: 'United Kingdom', flagUrl: 'https://flagcdn.com/w40/gb.png' },
    { code: 'GH', name: 'Ghana', flagUrl: 'https://flagcdn.com/w40/gh.png' },
    { code: 'KE', name: 'Kenya', flagUrl: 'https://flagcdn.com/w40/ke.png' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

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
      
      <div className="min-h-screen bg-gray-50 py-4 px-3 overflow-y-auto hide-scrollbar">
        <div className="mx-auto bg-white rounded-lg shadow-sm p-6">
          {/* Profile Header */}
          <div className="flex flex-col   items-center mb-8">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-[28px] leading-[120%] tracking-[-0.02em] mb-2 font-bold text-[#000000]">Mercy Smile</h2>
            <p className="text-[14px] leading-[145%] text-[#0E0E1B] flex items-center gap-1 font-medium mt-1 cursor-pointer hover:text-gray-700">
              <Mail className="w-4 h-4" />
              Change password
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#0E0E1B] leading-[145%] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Other First Names"
                  className="w-full px-4 py-2.5 border-1 tracking-[0%] border-[#D8D8DD] h-[58px] text-[14px]  text-[#737380] leading-[145%] text-[#0E0E1B] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter Last Names"
                className="w-full px-4 py-2.5 border-1 tracking-[0%] border-[#D8D8DD] h-[58px] text-[14px]  text-[#737380] leading-[145%] text-[#0E0E1B] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Other Name and Alternate Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Other Name
                </label>
                <input
                  type="text"
                  name="otherName"
                  value={formData.otherName}
                  onChange={handleInputChange}
                  placeholder="Middle Name"
                   className="w-full px-4 py-2.5 border-1 tracking-[0%] border-[#D8D8DD] h-[58px] text-[14px]  text-[#737380] leading-[145%] text-[#0E0E1B] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alternate Phone Number
                </label>
                <input
                  type="text"
                  name="alternatePhone"
                  value={formData.alternatePhone}
                  onChange={handleInputChange}
                  placeholder="080 0000 Phone Number"
                    className="w-full px-4 py-2.5 border-1 tracking-[0%] border-[#D8D8DD] h-[58px] text-[14px]  text-[#737380] leading-[145%] text-[#0E0E1B] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* State Phone Number and Email Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State Phone Number
                </label>
                <div className="flex ">
                  <div className="relative w-20">
                    <div className="w-full px-2 py-2.5 border border-gray-300 h-[58px] bg-white flex items-center justify-center cursor-pointer">
                      <img 
                        src={countries.find(c => c.code === formData.phoneCode1)?.flagUrl} 
                        alt="flag"
                        className="w-7 h-5 object-cover"
                      />
                    </div>
                    <select
                      name="phoneCode1"
                      value={formData.phoneCode1}
                      onChange={handleInputChange}
                      className="absolute inset-0 w-full opacity-0 cursor-pointer"
                    >
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <input
                    type="text"
                    name="statePhone"
                    value={formData.statePhone}
                    onChange={handleInputChange}
                    placeholder="00 00000000000000"
                       className="w-full px-4 py-2.5 border-1 tracking-[0%] border-[#D8D8DD] h-[58px] text-[14px]  text-[#737380] leading-[145%] text-[#0E0E1B] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    placeholder="mercysmile@gmail.com"
          className="w-full px-4 py-2.5 border-1 tracking-[0%] border-[#D8D8DD] h-[58px] text-[14px]  text-[#737380] leading-[145%] text-[#0E0E1B] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Area and City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Area
                </label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  placeholder="45 pound road Lagos Alaba"
            className="w-full px-4 py-2.5 border-1 tracking-[0%] border-[#D8D8DD] h-[58px] text-[14px]  text-[#737380] leading-[145%] text-[#0E0E1B] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Lagos"
   className="w-full px-4 py-2.5 border-1 tracking-[0%] border-[#D8D8DD] h-[58px] text-[14px]  text-[#737380] leading-[145%] text-[#0E0E1B] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Address and Region */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <div className="flex ">
                  <div className="relative w-20">
                    <div className="w-full px-2 py-2.5 border border-gray-300 h-[58px]  bg-white flex items-center justify-center cursor-pointer">
                      <img 
                        src={countries.find(c => c.code === formData.phoneCode2)?.flagUrl} 
                        alt="flag"
                        className="w-7 h-5 object-cover"
                      />
                    </div>
                    <select
                      name="phoneCode2"
                      value={formData.phoneCode2}
                      onChange={handleInputChange}
                      className="absolute inset-0 w-full opacity-0 cursor-pointer"
                    >
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                     className="w-full px-4 py-2.5 border-1 tracking-[0%] border-[#D8D8DD] h-[58px] text-[14px]  text-[#737380] leading-[145%] text-[#0E0E1B]  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Region
                </label>
                <div className="relative">
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
             className="w-full px-4 py-2.5 border-1 tracking-[0%] border-[#D8D8DD] h-[58px] text-[14px]  text-[#737380] leading-[145%] text-[#0E0E1B] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="kano">Kano</option>
                    <option value="portharcourt">Port Harcourt</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Postal Code */}
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Postal Code
              </label>
              <input
                type="text"
                name="postalcode"
                value={formData.postalcode}
                onChange={handleInputChange}
                placeholder="400001"
               className="w-full px-4 py-2.5 border-1 tracking-[0%] border-[#D8D8DD] h-[58px] text-[14px]  text-[#737380] leading-[145%] text-[#0E0E1B] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Business Name and Registration Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="SmartLife Science Operations"
           className="w-full px-4 py-2.5 border-1 tracking-[0%] border-[#D8D8DD] h-[58px] text-[14px]  text-[#737380] leading-[145%] text-[#0E0E1B] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Registration Status
                </label>
                <div className="relative">
                  <select
                    name="registrationStatus"
                    value={formData.registrationStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer"
                  >
                    <option value="">Registered Countries</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="ghana">Ghana</option>
                    <option value="kenya">Kenya</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website
              </label>
              <input
                type="text"
                name="products"
                value={formData.products}
                onChange={handleInputChange}
                placeholder="Operations"
   className="w-full px-4 py-2.5 border-1 tracking-[0%] border-[#D8D8DD] h-[58px] text-[14px]  text-[#737380] leading-[145%] text-[#0E0E1B] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Business Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Description
              </label>
              <textarea
                name="businessDescription"
                value={formData.businessDescription}
                onChange={handleInputChange}
                placeholder="E-LogisticsEngineering"
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
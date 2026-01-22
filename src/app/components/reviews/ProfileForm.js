'use client';
import { useRouter } from 'next/navigation';

import { useState } from 'react';
import { ChevronDown, Mail, KeyRound } from 'lucide-react';
import Title from '../bookingscreen/Title';

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    country: '',
    state: '',
    postalCode: ''
  });

  const [phoneCountryCode, setPhoneCountryCode] = useState('NG');
  const [addressCountryCode, setAddressCountryCode] = useState('NG');
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const countries = [
    { code: 'NG', name: 'Nigeria', flagUrl: 'https://flagcdn.com/w40/ng.png', phoneCode: '+234' },
    { code: 'US', name: 'United States', flagUrl: 'https://flagcdn.com/w40/us.png', phoneCode: '+1' },
    { code: 'GB', name: 'United Kingdom', flagUrl: 'https://flagcdn.com/w40/gb.png', phoneCode: '+44' },
    { code: 'GH', name: 'Ghana', flagUrl: 'https://flagcdn.com/w40/gh.png', phoneCode: '+233' },
    { code: 'KE', name: 'Kenya', flagUrl: 'https://flagcdn.com/w40/ke.png', phoneCode: '+254' },
    { code: 'ZA', name: 'South Africa', flagUrl: 'https://flagcdn.com/w40/za.png', phoneCode: '+27' }
  ];

const handleChange = (e) => {
  const { name, value } = e.target;
  
  setFormData({
    ...formData,
    [name]: value
  });
  

  if (errors[name]) {
    setErrors({
      ...errors,
      [name]: ''
    });
  }
};

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }
    if (!formData.state.trim()) {
      newErrors.state = 'State/Province is required';
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal/Zip code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Profile data:', formData);
      alert('Profile updated successfully!');
      // Clear errors after successful submission
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen">
      <div className=" ">
        {/* Header */}
          <Title title={"My Profile"} subtitle={"Hi Timmy, please kindly update your profile!"}/>
        

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm px-5 py-4 max-w-7xl mx-auto mt-6">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-[125px] h-[125px] rounded-[97px] bg-[#EEEEEE]  border-[0.98px] border-[#00000099] mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-[28px] leading-[120%] tracking-[-0.02em] font-bold text-[#000000] mb-2">Timmy Promise</h2>
           <button 
  onClick={() => router.push('/changepassword')}
  className="flex items-center gap-1 text-[#003271] text-[14px]  leading-[145%] hover:text-blue-700"
>
  <KeyRound className="w-4 h-4" />
  <span>Change password</span>
</button>
          </div>

          {/* Form Fields */}
          <div className='  mx-auto'>
            {/* Row 1: First Name & Last Name */}
            <div className="grid grid-cols-2 gap-4 mb-4 ">
              <div>
                <label className="block text-[14px] font-medium text-[#0E0E1B]  mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className={`w-full px-4 py-3 bg-gray-50 border-[#D8D8DD] border-[1px] rounded-[8px] text-[#737380] text-[14px]  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.firstName ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                 <label className="block text-[14px] font-medium text-[#0E0E1B]  mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className={`w-full px-4 py-3 bg-gray-50 border-[1px] rounded-[8px] text-[#737380] text-[14px]  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.lastName ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Row 2: Phone Number & Email */}
          <div className="grid grid-cols-2 gap-4 mb-4">
  <div>
    <label className="block text-[14px] font-medium text-[#0E0E1B] mb-2">Phone Number</label>
    <div className="flex gap-2">
      <div className="relative w-24">
        <div className="w-full px-3 py-3 border border-gray-200 bg-gray-50 rounded-[8px] text-[#737380] text-[14px] flex items-center justify-between cursor-pointer">
          <span className="text-sm text-gray-900">
            {countries.find(c => c.code === phoneCountryCode)?.phoneCode}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </div>
        <select
          value={phoneCountryCode}
          onChange={(e) => setPhoneCountryCode(e.target.value)}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.phoneCode} {country.name}
            </option>
          ))}
        </select>
      </div>
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Enter Phone Number"
        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-[8px] text-[#737380] text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  </div>
  <div>
    <label className="block text-[14px] font-medium text-[#0E0E1B] mb-2">Email</label>
    <div className="relative">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Email"
        className="w-full px-4 py-3 pr-10 bg-gray-50 border border-gray-200 rounded-[8px] text-[#737380] text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <Mail className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
    </div>
  </div>
</div>

            {/* Row 3: Address & City */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                 <label className="block text-[14px] font-medium text-[#0E0E1B]  mb-2">
                  Your Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter Address"
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-[8px] text-[#737380] text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.address ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>
              <div>
                <label className="block text-[14px] font-medium text-[#0E0E1B]  mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter City"
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-[8px] text-[#737380] text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.city ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                )}
              </div>
            </div>

            {/* Row 4: Country & State/Province */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                 <label className="block text-[14px] font-medium text-[#0E0E1B]  mb-2">Country</label>
                <div className="flex gap-2">
                  <div className="relative w-20">
                    <div className="w-full px-2 py-3 border border-gray-200 bg-gray-50 rounded-lg flex items-center justify-center cursor-pointer">
                      <img 
                        src={countries.find(c => c.code === addressCountryCode)?.flagUrl} 
                        alt="flag"
                        className="w-7 h-5 object-cover"
                      />
                    </div>
                    <select
                      value={addressCountryCode}
                      onChange={(e) => setAddressCountryCode(e.target.value)}
                      className="absolute inset-0 w-full opacity-0 cursor-pointer"
                    >
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                  </div>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Enter Country"
                    className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[14px] font-medium text-[#0E0E1B]  mb-2">State/Province</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter State"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-[8px] text-[#737380] text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Row 5: Postal/Zip Code */}
            <div className="mb-6">
              <label className="block text-[14px] font-medium text-[#0E0E1B] mb-2">
                Postal/Zip Code
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Enter Postal/Zip Code"
                className={`w-full px-4 py-3 bg-gray-50 border rounded-[8px] text-[#737380] text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.postalCode ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.postalCode && (
                <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#003271] hover:bg-blue-800 text-white font-medium py-3 rounded-[15px] h-[52px] transition-colors"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
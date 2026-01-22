// components/bookingscreen/ProvidersSection.js
"use client"
import { Star, MapPin, Clock, User } from 'lucide-react';
import { useState, useMemo } from 'react';
import { providers, featuredProvider, chayohiProviders, sortOptions } from '../../_lib/BookingscreenData';
import { filterProviders, sortProviders } from '../../_lib/filterUtils';

export default function ProvidersSection({ filters }) {
  const [activeTab, setActiveTab] = useState('service');
  const [sortBy, setSortBy] = useState('Rating');
  const [selectedProvider, setSelectedProvider] = useState(featuredProvider); // NEW: Track selected provider

  // Apply filters and sorting
  const filteredAndSortedProviders = useMemo(() => {
    const filtered = filterProviders(providers, filters);
    return sortProviders(filtered, sortBy);
  }, [filters, sortBy]);

  return (
    <div className="flex gap-6 justify-between items-start">
      {/* LEFT SIDEBAR - Available Providers List */}
      <div className="w-[450px] flex">
        <div className="   sticky top-8">
          {/* Header */}
          <div className="flex bg-[#CCD6E3] rounded-xl flex-col py-6 px-5">
            <h3 className="font-semibold text-[26px] text-[#454545] leading-[100%] tracking-[-0.04em] h-[26px] mb-2">
              Available Providers
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select 
                className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Provider List - Scrollable with MAX HEIGHT */}
          <div className="space-y-3 max-h-[900px] overflow-y-auto   scrollbar-hidden  ">
            {filteredAndSortedProviders.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p className="text-lg font-medium mb-2">No providers found</p>
                <p className="text-sm">Try adjusting your filters</p>
              </div>
            ) : (
              filteredAndSortedProviders.map((provider, index) => (
                <div 
                  key={provider.id}
                  onClick={() => setSelectedProvider(provider)} // NEW: Click handler
                  className={'bg-white rounded-lg py-6 px-4 border min-h-[180px] w-[419px] border-gray-200 hover:border-blue-300 hover:shadow-sm cursor-pointer transition relative'}
                >
                  {selectedProvider.id === provider.id && ( // NEW: Show indicator for selected provider
                    <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-gray-400 rounded-l-lg"></div>
                  )}
                  <div className="flex gap-3">
                    {/* Avatar with User Icon */}
                    <div className="w-[76px] h-[76px] rounded-full bg-[#EEEEEE] border-[0.84px] border-[#0000004D] flex-shrink-0 flex items-center justify-center">
                      <User className="w-11 h-5 text-gray-500" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between poppins mb-1">
                        <h6 className="font-semibold text-[#454545] leading-[120%] tracking-[-0.02em] text-[20px]">
                          {provider.name}
                        </h6>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <Star className="w-[20px] h-[20px] fill-[#DDB207] text-[#DDB207]" />
                          <span className="text-[20px] font-semibold leading-[120%] tracking-[-0.02em]">{provider.rating}</span>
                        </div>
                      </div>

                      {/* Service Tags */}
                      <div className="flex gap-2 mb-2 flex-wrap">
                        {provider.services.map((service, idx) => (
                          <span 
                            key={idx}
                            className="text-[12px] bg-[#EEEEEE] text-[#454545] px-[10px] py-[7px] rounded-[4px]"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-[16px] leading-[145%] text-[#454545] line-clamp-2">
                        {provider.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* Provider count indicator */}
        
        </div>
      </div>

      {/* RIGHT SIDE - Main Content with Detailed Cards */}
      <div className="flex-1 min-w-0">
        <div className="space-y-6 pb-8">
          {/* Featured Provider Card - Large (WHITE BACKGROUND with ACTUAL IMAGE) */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex gap-4 mb-4">
              {/* Large Avatar with ACTUAL IMAGE */}
              <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
                {selectedProvider.image ? ( // CHANGED: Use selectedProvider
                  <img 
                    src={selectedProvider.image} 
                    alt={selectedProvider.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-10 h-10 text-gray-500" />
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-[28px] font-bold text-[#454545] leading-[120%] mb-1">
                  {selectedProvider.name} {/* CHANGED: Use selectedProvider */}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Certified
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Response Time
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{selectedProvider.rating}</span> {/* CHANGED: Use selectedProvider */}
                  <span className="text-gray-500 text-sm">
                    ({selectedProvider.reviews} Reviews) {/* CHANGED: Use selectedProvider */}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#454545] leading-[145%] w-[530px] text-[16px] font-medium mb-4">
              {selectedProvider.description} {/* CHANGED: Use selectedProvider */}
            </p>

            {/* Service Tags */}
            <div className="flex gap-2 flex-wrap">
              {selectedProvider.services.map((service, idx) => ( // CHANGED: Use selectedProvider
                <span 
                  key={idx}
                  className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-[4px]"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Mini Provider Card (GRAY BACKGROUND with USER ICON) */}
          <div className="rounded-xl p-4 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-gray-400 rounded-l-xl"></div>
            
            <div className="flex gap-3">
              <div className="w-[76px] h-[76px] rounded-full bg-[#EEEEEE] border-[0.84px] border-[#0000004D] flex-shrink-0 flex items-center justify-center">
                <User className="w-11 h-5 text-gray-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{selectedProvider.name}</h4> {/* CHANGED: Use selectedProvider */}
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{selectedProvider.rating}</span> {/* CHANGED: Use selectedProvider */}
                  </div>
                </div>
                <div className="flex gap-2 mb-2 flex-wrap">
                  {selectedProvider.services.map((service, idx) => ( // CHANGED: Use selectedProvider
                    <span 
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-[4px]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 w-[530px]">
                  {selectedProvider.description} {/* CHANGED: Use selectedProvider */}
                </p>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="rounded-xl px-6 py-4">
            <div className="relative">
              <div className="absolute bottom-0 left-0 right-0 h-[13px] bg-gray-300 rounded-full"></div>
              
              <div className="flex gap-[135px] justify-between relative">
                <button 
                  onClick={() => setActiveTab('service')}
                  className="pb-3 text-[16px] relative flex flex-col pl-6 items-start"
                >
                  <span className={`${
                    activeTab === 'service'
                      ? 'text-[#003271] font-semibold' 
                      : 'text-gray-600 hover:text-gray-800 font-medium'
                  }`}>
                    Service
                  </span>
                  {activeTab === 'service' && (
                    <div className="absolute bottom-0 left-0 right-0 h-[13px] w-[167px] bg-[#003271] rounded-full"></div>
                  )}
                </button>
                
                <button 
                  onClick={() => setActiveTab('review')}
                  className="pb-3 text-[16px] relative flex flex-col items-start"
                >
                  <span className={`${
                    activeTab === 'review'
                      ? 'text-[#003271] font-semibold' 
                      : 'text-gray-600 hover:text-gray-800 font-medium'
                  }`}>
                    Review
                  </span>
                  {activeTab === 'review' && (
                    <div className="absolute bottom-0 left-0 right-0 h-[13px] w-[167px] bg-[#003271] rounded-full"></div>
                  )}
                </button>
                
                <button 
                  onClick={() => setActiveTab('portfolio')}
                  className="pb-3 text-[16px] relative flex flex-col items-start"
                >
                  <span className={`${
                    activeTab === 'portfolio'
                      ? 'text-[#003271] font-semibold' 
                      : 'text-gray-600 hover:text-gray-800 font-medium'
                  }`}>
                    Portfolio
                  </span>
                  {activeTab === 'portfolio' && (
                    <div className="absolute bottom-0 left-0 w-[100px] right-0 h-[13px] bg-[#003271] rounded-full"></div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Chayohi Makeover Cards (WHITE BACKGROUND) */}
          {activeTab === 'service' && (
            <>
              {chayohiProviders.map((card) => (
                <div 
                  key={card.id}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{card.name}</h3>
                    <span className="text-xl font-bold text-gray-900">{card.price}</span>
                  </div>
                  <p className="text-gray-600 w-[530px] mb-4">
                    {card.description}
                  </p>
                  <div className="flex justify-end">
                    <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-2 rounded-full font-medium transition">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
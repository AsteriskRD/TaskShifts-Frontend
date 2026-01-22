// components/bookingscreen/BookingHeader.js
import { serviceCategories, ratingOptions } from '../../_lib/BookingscreenData';
import Title from './Title';

export default function BookingHeader({ filters, onFilterChange }) {
  return (
    <div className="w-full">
      {/* Top Header Section */}
      <Title title={"My Bookings"} subtitle={"Find the perfect provider"}/>
      
      {/* Search Section - Find the Perfect Provider */}
      <div className="bg-[#FFE1D0] rounded-[15px] py-5 px-2 mb-8">
        <h2 className="text-[26px] font-semibold text-[#454545] leading-[100%] tracking-[-0.04em] h-[26px] mb-6">
          Find the Perfect Provider
        </h2>

        {/* Search Fields Row */}
        <div className="grid grid-cols-4 gap-4">
          {/* Service Category Dropdown */}
          <div>
            <label className="block text-[17px] font-medium text-[#00000099] mb-2">
              Service Category
            </label>
            <select 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.category}
              onChange={(e) => onFilterChange('category', e.target.value)}
            >
              {serviceCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Inputs */}
          <div>
            <label className="block text-[17px] font-medium text-[#00000099] mb-2">
              Price Range
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.minPrice}
                onChange={(e) => onFilterChange('minPrice', e.target.value)}
              />
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.maxPrice}
                onChange={(e) => onFilterChange('maxPrice', e.target.value)}
              />
            </div>
          </div>

          {/* Rating Dropdown 1 (Min Rating) */}
          <div>
            <label className="block text-[17px] font-medium text-[#00000099] mb-2">
              Min Rating
            </label>
            <select 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.minRating}
              onChange={(e) => onFilterChange('minRating', e.target.value)}
            >
              {ratingOptions.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Rating Dropdown 2 (Max Rating) */}
          <div>
            <label className="block text-[17px] font-medium text-[#00000099] mb-2">
              Max Rating
            </label>
            <select 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.maxRating}
              onChange={(e) => onFilterChange('maxRating', e.target.value)}
            >
              {ratingOptions.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
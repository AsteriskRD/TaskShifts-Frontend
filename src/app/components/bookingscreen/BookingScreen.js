// components/bookingscreen/BookingScreen.js
"use client"
import { useState } from 'react';
import BookingHeader from './BookingHeader';
import ProvidersSection from './ProvidersSection';

export default function BookingScreen() {
  // Filter states
  const [filters, setFilters] = useState({
    category: "All Categories",
    minPrice: "",
    maxPrice: "",
    minRating: "Any Rating",
    maxRating: "Any Rating"
  });

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  return (
    <div className="  px-4 py-8">
      <BookingHeader 
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      <ProvidersSection filters={filters} />
    </div>
  );
}
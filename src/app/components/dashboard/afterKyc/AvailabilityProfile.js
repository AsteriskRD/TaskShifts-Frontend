import React from 'react';

export default function AvailabilityCalendar() {
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  
  // Sample availability data
  const availabilityData = {
    available: [19],
    busy: [15],
  };
  
  // Generate calendar days for January (31 days, starts on Wednesday)
  const generateCalendarDays = () => {
    const days = [];
    const totalDays = 31;
    const startDay = 2; // Wednesday
    
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    
    for (let day = 1; day <= totalDays; day++) {
      days.push(day);
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  
  const getDayClasses = (day) => {
    if (!day) return '';
    
    const baseClasses = 'w-full h-full flex items-center justify-center rounded-md text-[13px] font-medium transition-colors cursor-pointer';
    
    if (availabilityData.available.includes(day)) {
      return `${baseClasses} text-white font-semibold`;
    }
    
    if (availabilityData.busy.includes(day)) {
      return `${baseClasses} text-black font-semibold`;
    }
    
    return `${baseClasses} bg-[#F3F4F6] text-[#1F2937] hover:bg-gray-300`;
  };
  
  const getDayStyle = (day) => {
    if (!day) return {};
    
    if (availabilityData.available.includes(day)) {
      return { backgroundColor: '#FF5722' };
    }
    
    if (availabilityData.busy.includes(day)) {
      return { backgroundColor: '#FFC107' };
    }
    
    return {};
  };
  
  return (
    <div className="w-full max-w-[526px] bg-white rounded-[12px] shadow-sm border border-gray-200 p-8">
      {/* Header */}
      <h2 className="text-[#1F2937] font-semibold text-[24px] leading-[120%] tracking-[-0.02em] mb-4">
        Availability
      </h2>
      
      {/* Month Display */}
      <h3 className="text-[#1F2937] font-semibold text-[16px] leading-[145%] mb-3">
        January
      </h3>
      
      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {daysOfWeek.map((day) => (
          <div 
            key={day} 
            className="text-center text-[#6B7280] font-medium text-[10px] uppercase py-1"
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className="aspect-square"
          >
            {day && (
              <div
                className={getDayClasses(day)}
                style={getDayStyle(day)}
              >
                {day}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center gap-2">
          <div className="w-[12px] h-[12px] rounded" style={{ backgroundColor: '#FF5722' }}></div>
          <span className="text-[#1F2937] text-[12px] font-medium">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[12px] h-[12px] rounded" style={{ backgroundColor: '#FFC107' }}></div>
          <span className="text-[#1F2937] text-[12px] font-medium">Busy</span>
        </div>
        <p className="text-[#6B7280] text-[11px] leading-[145%] pt-1">
          You can also request a custom date that works for you
        </p>
      </div>
    </div>
  );
}
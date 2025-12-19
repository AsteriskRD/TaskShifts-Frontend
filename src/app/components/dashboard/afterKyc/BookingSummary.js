'use client'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { MoreVertical } from 'lucide-react'

export default function BookingSummary({ data }) {
  
  // Custom label renderer - POSITIONED INSIDE
  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180
    // Calculate position INSIDE the slice (60% from center)
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="14"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-bold text-[#464255]">Booking Summary</h3>
        
        <div className="flex items-center gap-2">
          <select className="text-xs sm:text-sm border border-gray-200 rounded-lg px-2 sm:px-3 py-1.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
          
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <MoreVertical size={18} className="sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      {/* Chart + Legend - Responsive Layout */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 sm:gap-8">
        
        {/* Pie Chart with Percentages INSIDE */}
        <div className="flex-shrink-0">
          <ResponsiveContainer width={160} height={160} className="sm:!w-[180px] sm:!h-[180px]">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={70}
                paddingAngle={1}
                dataKey="value"
                stroke="#ffffff"
                strokeWidth={1}
                label={renderCustomLabel}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="flex flex-col gap-3">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-sm flex-shrink-0"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm text-gray-700 font-medium whitespace-nowrap">
                {entry.name}
              </span>
            </div>
          ))}
        </div>
        
      </div>
      
    </div>
  )
}
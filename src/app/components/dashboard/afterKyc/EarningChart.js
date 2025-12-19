"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { MoreVertical } from 'lucide-react';

// Sample data matching the Figma design
const sampleData = [
  { day: 'Sun', earnings: 60000 },
  { day: 'Mon', earnings: 80000 },
  { day: 'Tue', earnings: 45000 },
  { day: 'Thu', earnings: 70000 },
  { day: 'Fri', earnings: 60000 },
  { day: 'Sat', earnings: 30000 },
  { day: 'Sun', earnings: 65000 }
];

export default function EarningChart({ data = sampleData }) {
  // Alternating colors: red and yellow
  const colors = ['#EF4444', '#FCD34D'];
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
      
      {/* Header: Title + Dropdown + Three Dots */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Earning Chart</h3>
        
        <div className="flex items-center gap-2">
          <select className="text-xs sm:text-sm border border-gray-200 rounded-lg px-2 sm:px-3 py-1.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
          
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      {/* Bar Chart - Responsive Height */}
      <ResponsiveContainer width="100%" height={200} className="sm:!h-[250px]">
        <BarChart 
          data={data}
          barSize={14}
          barGap={8}
          margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis 
            dataKey="day" 
            tick={{ fill: '#9CA3AF', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            className="sm:!text-[13px]"
          />
          <YAxis 
            tick={{ fill: '#9CA3AF', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value / 1000}K`}
            ticks={[0, 20000, 40000, 60000, 80000]}
            domain={[0, 80000]}
            width={40}
            className="sm:!text-[13px]"
          />
          <Bar 
            dataKey="earnings" 
            radius={[12, 12, 12, 12]}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 2]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
    </div>
  );
}
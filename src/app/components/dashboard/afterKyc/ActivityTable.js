'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function ActivityTable({ data }) {
  const [activeTab, setActiveTab] = useState('All')
  const [selectedRows, setSelectedRows] = useState([])
  
  const tabs = ['All', 'New Lead', 'Current Job', 'Completed Job']
  
  // Status badge colors
  const statusStyles = {
    Pending: 'bg-[#FDF3E8] text-[#EC8305]',
    Accepted: 'bg-[#E7F6EC] text-[#099137]',
    Completed: 'bg-[#099137] text-white',
  }
  
  // Action buttons based on status
  const getActionButtons = (status) => {
    switch(status) {
      case 'Pending':
        return (
          <>
            <button className="px-3 sm:px-4 py-1.5 bg-[#003271] text-white text-xs sm:text-sm rounded hover:bg-blue-800 transition-colors whitespace-nowrap">
              Accept
            </button>
            <button className="px-3 sm:px-4 py-1.5 border border-gray-300 text-gray-700 text-xs sm:text-sm rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap">
              Decline
            </button>
          </>
        )
      case 'Accepted':
        return (
          <>
            <button className="px-3 sm:px-4 py-1.5 bg-blue-900 text-white text-xs sm:text-sm rounded-full hover:bg-blue-800 transition-colors whitespace-nowrap">
              View
            </button>
            <button className="px-3 sm:px-4 py-1.5 border border-gray-300 text-gray-700 text-xs sm:text-sm rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap">
              Mark Completed
            </button>
          </>
        )
      case 'Completed':
        return (
          <>
            <button className="px-3 sm:px-4 py-1.5 bg-blue-900 text-white text-xs sm:text-sm rounded-full hover:bg-blue-800 transition-colors whitespace-nowrap">
              View Receipt
            </button>
            <button className="px-3 sm:px-4 py-1.5 border border-gray-300 text-gray-700 text-xs sm:text-sm rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap">
              Close
            </button>
          </>
        )
      default:
        return null
    }
  }
  
  // Toggle row selection
  const toggleRowSelection = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }
  
  // Toggle all rows
  const toggleAllRows = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(data.map(item => item.id))
    }
  }
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      
      {/* Header: Title + View All */}
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">Activities</h3>
        <button className="text-xs sm:text-sm text-gray-900 hover:text-gray-700 font-semibold transition-colors">
          View all
        </button>
      </div>
      
      {/* Tabs - Responsive */}
      <div className="px-4 sm:px-6 pt-4 sm:pt-6">
        <div className="flex items-center gap-4 sm:gap-8 lg:gap-12 justify-between px-2 sm:px-6 py-3 relative overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm sm:text-base lg:text-[18px] tracking-[-0.02em] font-semibold leading-[120%] transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? 'text-[#737380]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
          
          {/* Single continuous border at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[10px] sm:h-[13px] bg-[#E4E3E3] rounded-[16px] overflow-hidden">
            {/* Active tab indicator overlay */}
            <div 
              className="absolute h-full bg-[#003271] rounded-[16px] transition-all duration-300"
              style={{
                left: `${tabs.indexOf(activeTab) * (100 / tabs.length)}%`,
                width: `${100 / tabs.length}%`
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Table - Horizontal scroll on mobile */}
      <div className="overflow-x-auto py-4">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-gray-100">
              {/* Checkbox column */}
              <th className="py-3 sm:py-4 px-4 sm:px-6 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length}
                  onChange={toggleAllRows}
                  className="w-4 h-4 rounded border-gray-300"
                />
              </th>
              
              {/* Client */}
              <th className="text-left py-3 sm:py-4 px-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-medium text-gray-400">Client</span>
                  <div className="flex flex-col">
                    <ChevronUp size={12} className="text-gray-400" />
                    <ChevronDown size={12} className="text-gray-400 -mt-1" />
                  </div>
                </div>
              </th>
              
              {/* Service Type */}
              <th className="text-left py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-medium text-gray-400">
                Service Type
              </th>
              
              {/* Date & Time */}
              <th className="text-left py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-medium text-gray-400">
                Date & Time
              </th>
              
              {/* Status */}
              <th className="text-left py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-medium text-gray-400">
                Status
              </th>
              
              {/* Action */}
              <th className="text-left py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-medium text-gray-400">
                Action
              </th>
            </tr>
          </thead>
          
          <tbody>
            {data.map((activity) => (
              <tr 
                key={activity.id} 
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
              >
                {/* Checkbox */}
                <td className="py-3 sm:py-4 px-4 sm:px-6">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(activity.id)}
                    onChange={() => toggleRowSelection(activity.id)}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                </td>
                
                {/* Client Column */}
                <td className="py-3 sm:py-4 px-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0"
                      style={{ backgroundColor: activity.clientAvatarColor }}
                    >
                      {activity.clientAvatar}
                    </div>
                    {/* Name + Description */}
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{activity.clientName}</p>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">{activity.clientDescription}</p>
                    </div>
                  </div>
                </td>
                
                {/* Service Type Column */}
                <td className="py-3 sm:py-4 px-4 sm:px-6 text-gray-700 font-medium text-sm">
                  {activity.serviceType}
                </td>
                
                {/* Date & Time Column */}
                <td className="py-3 sm:py-4 px-4 sm:px-6 text-gray-700 text-sm whitespace-nowrap">
                  {activity.dateTime}
                </td>
                
                {/* Status Column */}
                <td className="py-3 sm:py-4 px-4 sm:px-6">
                  <span 
                    className={`px-2 sm:px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap ${
                      statusStyles[activity.status]
                    }`}
                  >
                    {activity.status}
                  </span>
                </td>
                
                {/* Action Column */}
                <td className="py-3 sm:py-4 px-4 sm:px-6">
                  <div className="flex items-center gap-2">
                    {getActionButtons(activity.status)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}
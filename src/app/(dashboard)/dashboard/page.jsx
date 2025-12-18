// In src/app/(dashboard)/dashboard/page.js

import ActivityTable from '../../components/dashboard/afterKyc/ActivityTable';
import ReviewSection from '../../components/dashboard/afterKyc/ReviewSection';
import BookingSummary from '../../components/dashboard/afterKyc/BookingSummary';
import EarningChart from '../../components/dashboard/afterKyc/EarningChart';
import MetricCard from '../../components/dashboard/afterKyc/MetricCard';
import PageHeader from '../../components/dashboard/afterKyc/PageHeader';
import { Briefcase, Clock, CheckCircle, DollarSign } from 'lucide-react'
import { 
  bookingData, 
  earningsData, 
  reviewsData,
  activitiesData 
} from '../../_lib/MockData'

export default function DashboardPage() {
  const metrics = [
    {
      title: 'Active Job',
      value: '5',
      description: 'Active Jobs',
      icon: Briefcase,
      href: '/dashboard/jobs?status=active'
    },
    {
      title: 'Pending Request',
      value: '12',
      description: '12 Pending request',
      icon: Clock,
      href: '/dashboard/jobs?status=pending'
    },
    {
      title: 'Completed Job',
      value: '8k',
      description: 'All jobs completed',
      icon: CheckCircle,
      href: '/dashboard/jobs?status=completed'
    },
    {
      title: 'Earnings',
      value: '$2,450',
      description: 'All earnings',
      icon: DollarSign,
      href: '/dashboard/earnings'
    }
  ]
  
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Page Header */}
      <PageHeader 
        title="Dashboard"
        subtitle="Hi Mercy, welcome back to TaskShift admin!"
      />
      
      {/* Metric Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            description={metric.description}
            icon={metric.icon}
            href={metric.href}
          />
        ))}
      </div>
      
      {/* Charts Section - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <BookingSummary data={bookingData} />
        <EarningChart data={earningsData} />
      </div>
      
      {/* Reviews Section */}
      <ReviewSection data={reviewsData} />
      
      {/* Activities Table */}
      <ActivityTable data={activitiesData} />
      
    </div>
  )
}
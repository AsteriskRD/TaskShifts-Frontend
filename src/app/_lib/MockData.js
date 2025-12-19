// Booking Summary Data (for Pie Chart)
export const bookingData = [
     { name: 'Completed Bookings', value: 60, color: '#FFC107' },
  { name: 'Incoming Bookings', value: 25, color: '#EF4444' },  // Red
  { name: 'Ongoing Bookings', value: 15, color: '#10B981' },   // Green
   
]

// Earning Chart Data (for Bar Chart)
export const earningsData = [
  { day: 'Sun', earnings: 45000 },
  { day: 'Mon', earnings: 52000 },
  { day: 'Tue', earnings: 38000 },
  { day: 'Thu', earnings: 58000 },
  { day: 'Fri', earnings: 48000 },
  { day: 'Sat', earnings: 25000 },
  { day: 'Sun', earnings: 50000 },
]

// Customer Reviews & Ratings Data
export const reviewsData = {
  averageRating: 4.5,
  totalReviews: 123,
  
  // Rating breakdown (how many of each star rating)
  breakdown: [
    { stars: 5, count: 80, percentage: 65 },
    { stars: 4, count: 30, percentage: 24 },
    { stars: 3, count: 10, percentage: 8 },
    { stars: 2, count: 2, percentage: 2 },
    { stars: 1, count: 1, percentage: 1 },
  ],
  
  // Individual reviews to display
  reviews: [
    {
      id: 1,
      name: 'Chika',
      avatar: 'C',
      avatarColor: '#8B5CF6', // Purple
      rating: 5,
      comment: '"Fantastic work! The place looks spotless. Will rebook."'
    },
    {
      id: 2,
      name: 'Kosi',
      avatar: 'K',
      avatarColor: '#14B8A6', // Teal
      rating: 4,
      comment: '"Fantastic work! The place looks spotless. Will rebook."'
    },
    {
      id: 3,
      name: 'Mercy',
      avatar: 'M',
      avatarColor: '#EC4899', // Pink
      rating: 3,
      comment: '"Fantastic work! The place looks spotless. Will rebook."'
    }
  ]
}


// Activities Table Data
export const activitiesData = [
  {
    id: 1,
    clientName: 'Chika Obasi',
    clientDescription: '"Fix leaking tap"',
    clientAvatar: 'C',
    clientAvatarColor: '#8B5CF6',
    serviceType: 'Plumbing',
    dateTime: 'Oct 10th, 2:00pm',
    status: 'Pending',
    statusColor: 'orange'
  },
  {
    id: 2,
    clientName: 'Kosi Ojeteli',
    clientDescription: '"AC servicing"',
    clientAvatar: 'K',
    clientAvatarColor: '#14B8A6',
    serviceType: 'Air Conditioning',
    dateTime: 'Oct 10th, 2:00pm',
    status: 'Accepted',
    statusColor: 'green'
  },
  {
    id: 3,
    clientName: 'Mercy Smile',
    clientDescription: '"House Cleaning"',
    clientAvatar: 'M',
    clientAvatarColor: '#EC4899',
    serviceType: 'Cleaning',
    dateTime: 'Oct 10th, 2:00pm',
    status: 'Pending',
    statusColor: 'orange'
  },
  {
    id: 4,
    clientName: 'Chika Obasi',
    clientDescription: '"Fix leaking tap"',
    clientAvatar: 'C',
    clientAvatarColor: '#8B5CF6',
    serviceType: 'Plumbing',
    dateTime: 'Oct 10th, 2:00pm',
    status: 'Completed',
    statusColor: 'blue'
  },
  {
    id: 5,
    clientName: 'Kosi Ojeteli',
    clientDescription: '"AC servicing"',
    clientAvatar: 'K',
    clientAvatarColor: '#14B8A6',
    serviceType: 'Air Conditioning',
    dateTime: 'Oct 10th, 2:00pm',
    status: 'Pending',
    statusColor: 'orange'
  },
  {
    id: 6,
    clientName: 'Kosi Ojeteli',
    clientDescription: '"AC servicing"',
    clientAvatar: 'K',
    clientAvatarColor: '#14B8A6',
    serviceType: 'Air Conditioning',
    dateTime: 'Oct 10th, 2:00pm',
    status: 'Accepted',
    statusColor: 'green'
  },
  {
    id: 7,
    clientName: 'Chika Obasi',
    clientDescription: '"Fix leaking tap"',
    clientAvatar: 'C',
    clientAvatarColor: '#8B5CF6',
    serviceType: 'Plumbing',
    dateTime: 'Oct 10th, 2:00pm',
    status: 'Pending',
    statusColor: 'orange'
  },
  {
    id: 8,
    clientName: 'Chika Obasi',
    clientDescription: '"Fix leaking tap"',
    clientAvatar: 'C',
    clientAvatarColor: '#8B5CF6',
    serviceType: 'Plumbing',
    dateTime: 'Oct 10th, 2:00pm',
    status: 'Pending',
    statusColor: 'orange'
  }
]
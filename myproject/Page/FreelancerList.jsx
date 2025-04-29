import React from 'react';
import FreelancerCard from './FreelancerCard';

const FreelancerList = () => {
  // Example freelancers array
  const freelancers = [
    {
      id: 1,
      name: 'John Doe',
      location: 'Los Angeles',
      skills: ['JavaScript', 'React', 'Node.js'],
      rate: '₹50 - ₹80',
      rateType: 'Hourly rate',
      availability: 'Available',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      location: 'New York',
      skills: ['UI/UX Design', 'Adobe XD', 'Figma'],
      rate: '₹60 - ₹90',
      rateType: 'Fixed',
      availability: 'Available',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Michael Brown',
      location: 'San Francisco',
      skills: ['HTML', 'CSS', 'JavaScript'],
      rate: '₹40 - ₹60',
      rateType: 'Hourly rate',
      availability: 'Busy',
      rating: 4.2,
    },
  ];

  return (
    <div>
      <div className="h-fit mb-3 overflow-x-hidden overflow-y-auto">
        <label className="block text-gray-700 font-bold mb-2">Search</label>
        <input
          type="text"
          name="searchQuery"
          placeholder="Search freelancers..."
          className="outline-none border border-black rounded p-2 w-full"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 pb-[4vw]">
      <FreelancerCard />
        {/* {freelancers.map((freelancer) => (
      
        ))} */}
      </div>
    </div>
  );
};

export default FreelancerList;

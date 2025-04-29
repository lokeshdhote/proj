
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  // Example projects array
  const projects = [
    {
      id: 1,
      title: 'Manage my projects with Js, Css, Html',
      location: 'Los Angeles',
      posted: '2 years ago',
      proposals: 2,
      skills: ['Adobe XD', 'Artist', 'Computer'],
      rate: '₹180 - ₹200',
      rateType: 'Hourly rate',
    },
    {
      id: 2,
      title: 'Website Designer Required For My Project',
      location: 'Los Angeles',
      posted: '2 years ago',
      proposals: 2,
      skills: ['Adobe XD', 'Artist', 'Computer'],
      rate: '₹120 - ₹150',
      rateType: 'Fixed',
    },
    {
      id: 3,
      title: 'Website Designer Required For My Project',
      location: 'Los Angeles',
      posted: '2 years ago',
      proposals: 2,
      skills: ['Adobe XD', 'Artist', 'Computer'],
      rate: '₹120 - ₹150',
      rateType: 'Fixed',
    },
    {
      id: 4,
      title: 'Website Designer Required For My Project',
      location: 'Los Angeles',
      posted: '2 years ago',
      proposals: 2,
      skills: ['Adobe XD', 'Artist', 'Computer'],
      rate: '120 - ₹150',
      rateType: 'Fixed',
    },
    {
      id: 5,
      title: 'Website Designer Required For My Project',
      location: 'Los Angeles',
      posted: '2 years ago',
      proposals: 2,
      skills: ['Adobe XD', 'Artist', 'Computer'],
      rate: '₹120 - ₹150',
      rateType: 'Fixed',
    },
    {
      id: 6,
      title: 'Website Designer Required For My Project',
      location: 'Los Angeles',
      posted: '2 years ago',
      proposals: 2,
      skills: ['Adobe XD', 'Artist', 'Computer'],
      rate: '₹120 - ₹150',
      rateType: 'Fixed',
    },
  ];

  return (
    <div>
 <div className="h-fit mb-3 overflow-x-hidden overflow-y-auto">
        <label className="block text-gray-700 font-bold mb-2">Search</label>
        <input
          type="text"
          name="searchQuery"
          placeholder="Search projects..."
        
        
          className="outline-none border border-black rounded p-2 w-full"
        />
      </div>
    
    <div className="grid grid-cols-1 gap-6 pb-[4vw]">
    <ProjectCard/>

      {/* {projects.map((project) => (
      ))} */}
    </div>

    </div>

    
  );
};

export default ProjectList;

import React from 'react';
import FreelancerList from './FreelancerList';
import FilterSidebar from './FilterSlider';
import { NavLink } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const FindFreelancer = () => {
  return (
    <div className='w-screen max-md:h-full h-screen overflow-hidden'>
      {/* Header */}
      <div className='w-screen h-[5vw]' > <Nav /> </div>
      {/* <div className='bg-[#196eaf] py-3 flex items-center  max-md:gap-[20vw]  justify-start gap-[35vw] px-[4vw]'>
        <NavLink to={"/"}>
          <i className="ri-arrow-left-s-line text-3xl text-white font-[500]"></i>
        </NavLink>
        <h1 className='text-center text-white text-2xl font-semibold'>Find Freelancers</h1>
      </div> */}

      {/* Main Content */}
      <div className="flex max-md:flex-col bg-gray-100 w-[100%] h-screen px-5 max-md:p-2 overflow-y-hidden">
        <div className='w-[20%] max-md:w-full h-fit'>
          {/* Sidebar for Filters */}
          <FilterSidebar />
        </div>
        <div className='rightSide w-[80%] min-h-screen overflow-x-hidden overflow-y-auto py-3'>
          {/* Freelancer Listings */}
          <FreelancerList />
        </div>
      </div>
    </div>
  );
};

export default FindFreelancer;

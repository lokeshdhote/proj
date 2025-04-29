// src/App.js
import React from 'react';
import Nav from "../components/Nav/Nav";
import ProjectList from './ProjectList';
import FilterSidebar from './FilterSlider';
import { NavLink } from 'react-router-dom';



const FindProject = () => {
  return (
<div className='w-screen h-screen overflow-hidden'>
{/**/}

<div className='w-screen h-[5vw]' > <Nav /> </div>

{/* <div className='bg-[#F3F4F6] py-3 flex items-center justify-start gap-[35vw] px-[4vw] '> */}
   
        {/* Back to Home arrow */}
        {/* <NavLink    to={"/"} > <i class="ri-arrow-left-s-line  text-3xl font-[500]"> </i> </NavLink> */}
        
        {/* <Link to="/" className='text-xl text-gray-800 flex items-center'>
       
        </Link> */}
        {/* <h1 className='text-center text-2xl font-bold'>Find Projects</h1> */}
      {/* </div> */}
<div className="flex bg-gray-100 w-[100%] h-screen  px-5 overflow-y-hidden">
     <div className='w-[20%] h-fit'>
       {/* Sidebar for Filters */}
      <FilterSidebar />
      </div>
     <div  
      className='rightSide w-[80%] min-h-screen overflow-x-hidden overflow-y-auto  py-3 '> 
      
      {/* Main Content for Project Listings */}
     <ProjectList />
      {/* <div className="h-fit flex-1 p-6 overflow-x-hidden overflow-y-auto ">
       

     </div> */}
     </div>
     
      

     
    </div>
</div>
   
  );
};

export default FindProject;

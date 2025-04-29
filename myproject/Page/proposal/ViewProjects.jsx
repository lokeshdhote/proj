import React, { useEffect } from "react";
import ProposalAccept from "./ProposalAccept";
import { NavLink } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import useSelection from "antd/es/table/hooks/useSelection";
import { AyscnFreelancerproposal, Ayscnmyproject } from "../../src/Store/Actions/ClientAction";

const ViewProject = () => {
const dispatch = useDispatch()
const {projects}=useSelector((state)=>state.Client?.myprojects)
console.log(projects);

  useEffect(()=>{
dispatch(Ayscnmyproject())
  },[dispatch])
  // 
    
//   const projectById=(id)=>{
//  dispatch( AyscnFreelancerproposal(id))
// console.log(id);

// }    // Add more projects as needed


  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      {/* <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Projects Dashboard</h1>
        <p className="mt-2">Manage your projects and proposals seamlessly.</p>
      </header> */}
      <div className='w-screen h-[5vw]' > <Nav /> </div>

     {/* <div className="bg-[#196eaf] py-3 flex items-center  max-md:gap-[26vw]  justify-start gap-[35vw] px-[4vw]">
     
        <NavLink to={"/"}>
          <i className="ri-arrow-left-s-line text-3xl text-white  font-[500]"></i>
        </NavLink>
        <h1 className="text-center text-white text-2xl font-semibold">My Project</h1>
      </div> */}

      {/* Content */}
      <div className="container mx-auto p-6">
        {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Projects
        </h2> */}

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project,index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              {/* Project Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project?.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 mb-4">{project?.description}</p>

             

              {/* View Proposals Button */}
              <button 
        //  onClick={() => projectById(project?._id)}
              className="bg-[#196eaf] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
       <NavLink 
       key={project?._id}
       state={{project}}
       to="/proposals" >
                View Proposals
                </NavLink>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProject;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { AyscnClientProject } from '../src/Store/Actions/ClientAction';
import {  AysncProject } from '../src/Store/Actions/userAction';
import { toast } from 'react-toastify';

const 
ProjectCard = () => {
  const dispatch = useDispatch();

  // Fetching projects from Redux state
  const { project } = useSelector((state) => state?.user?.project); // Adjusted for correct state path
  const { client } = useSelector((state) => state?.Client); // Adjusted for correct state path
  console.log(project);


const showmsg =()=>{

  toast.success("Project is already signed ")

}
  useEffect(() => {
    dispatch(AysncProject()); // Fetch projects when the component mounts
  }, [dispatch]);

  return (
    <div className="container mx-auto p-6 space-y-6">
      {project && project.length > 0 ? (
        project.map((proj, index) => (
          <div
            key={proj.id || index} // Add a unique key for each project
            className="bg-white p-6 rounded-lg shadow-md flex justify-between items-start space-y-4"
          >
            {/* Left Section */}
            <div>
              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-2">{proj.title || 'Untitled Project'}</h3>

              {/* Project Metadata */}
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{proj.location || 'No Location'}</span>
                <span className="mx-2">|</span>
                <span>Posted {proj.posted || 'N/A'}</span>
                <span className="mx-2">|</span>
                <span>{proj.proposals || 0} Proposals</span>
              </div>

              {/* Project Description */}
              <p className="text-gray-700 mb-4">
                {proj.description || 'No description provided.'}
              </p>

              {/* Project Skills */}
              <div className="flex flex-wrap gap-2">
                {proj?.skill?.length > 0 ? (
                  proj?.skill?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 text-xs">No skills mentioned</span>
                )}
                <div>
                  <h1 className="bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-xs">{proj?.status}</h1>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-right">
              {/* Project Rate */}
              <p className="text-lg font-semibold mb-2">₹{proj?.budget || 'N/A'}</p>
              <p className="text-sm text-gray-500 mb-4">{proj?.rateType || 'fixed'}</p>

              {/* Send Proposal Button */}


              { proj?.status==="open" ? (<>
                <NavLink to="/SendProposal" 
              key={proj._id}
              state={{ proj }}
              
              >
                <button
                // Pass the project ID
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Send Proposal
                </button>
              </NavLink>
              </>
              ):(<>
                
                <button
             
                onClick={showmsg}
                // Pass the project ID
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Send Proposal
                </button>
           
              </>
            ) }
            
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No projects found.</p>
      )}
    </div>
  );
};

export default ProjectCard;

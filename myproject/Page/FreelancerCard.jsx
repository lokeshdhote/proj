import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AyscnGetFreelancers } from '../src/Store/Actions/ClientAction';
// import { AyscnGetFreelancers } from '../path/to/actions'; // Ensure correct import path for action

const FreelancerCard = () => {
  const dispatch = useDispatch();

  // Fetching freelancers from Redux state
  const {freelancers }= useSelector((state) => state?.Client?.freelancers); // Fallback to empty array
  console.log(freelancers);

  useEffect(() => {
    // Dispatch action to fetch freelancers
    dispatch(AyscnGetFreelancers());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-6 space-y-6">
      {freelancers?.length > 0 ? (
        freelancers.map((freelancer, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex justify-between items-start space-y-4"
          >
            {/* Left Section */}
            <div>
              {/* Freelancer Name and Location */}
              <h3 className="text-xl font-semibold mb-2 uppercase">
                {freelancer.firstname + "  "+freelancer.lastname || 'Unknown Freelancer'} {}
              </h3>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{freelancer.city || 'Location not specified'}</span>
              </div>

              {/* Freelancer Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {freelancer.skills && freelancer.skills.length > 0 ? (
                  freelancer.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 text-xs">No skills provided</span>
                )}
              </div>

              {/* Availability and Rating */}
              <p className="text-sm text-gray-500 mb-2">
                <strong>Availability:</strong>{' '}
                {freelancer.availability || 'Not specified'}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Rating:</strong> {freelancer.rating || 'No rating'} ⭐
              </p>
            </div>

            {/* Right Section */}
            <div className="text-right mb-4">
              {/* Freelancer Rate */}
             {
              freelancer?.isVerified ?(
              <>
              <h1 className='mb-6'>verified freelancer <i className="ri-verified-badge-line  text-green-700 text-2xl  "></i> </h1>
              </>
            ):(
              <>
              <h1 className='mb-6'> Not verified freelancer <i className="ri-verified-badge-line line-through text-red-700 text-2xl "></i> </h1>
              </>
              )}

              {/* Action Button */}
              <NavLink to="/">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  Show Interest
                </button>
              </NavLink>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No freelancers found.</p>
      )}
    </div>
  );
};

export default FreelancerCard;

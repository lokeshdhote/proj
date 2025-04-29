import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const Proposaldetails = () => {
  const location = useLocation();
  const proposals = location.state?.proposal;
  
  return (
    <div className="container text-black mx-auto p-4 overflow-hidden">
      <div className="w-screen h-[6vw] mb-6">
        <Nav />
      </div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">{proposals?.name}'s Proposal for Project</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all space-y-6">
        {/* Project Title and Freelancer Info */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-blue-600">{proposals?.title}</h2>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <p className="text-gray-600"><strong>Freelancer:</strong> {proposals?.name}</p>
            <p className="text-gray-600"><strong>Email:</strong> {proposals?.email}</p>
          </div>
        </div>


        {/* Budget & Deadline */}
        <div className="flex justify-between text-gray-600">
          <div>
            <h3 className="text-lg font-semibold">Budget</h3>
            <p className="text-xl font-bold">₹{proposals?.budget}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Deadline</h3>
            <p>{new Date(proposals?.deadline).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {proposals?.skills?.map((skill, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">{skill}</span>
            ))}
          </div>
        </div>

        {/* Proposal Status */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Proposal Status</h3>
          <p className={`font-bold ${proposals?.proposal === "pending" ? "text-yellow-600" : "text-green-600"}`}>
            {proposals?.proposal}
          </p>
        </div>

        {/* Project Description */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Project Description</h3>
          <p className="text-gray-600">{proposals?.description}</p>
        </div>
        
        {/* Additional Info
        <div className="space-y-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Created At</h3>
            <p>{new Date(proposals?.createdAt).toLocaleDateString()}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Updated At</h3>
            <p>{new Date(proposals?.updatedAt).toLocaleDateString()}</p>
          </div>
        </div> */}

        {/* View Proposal Button
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            View Full Proposal
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Proposaldetails;

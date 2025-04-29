"use client"
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav/Nav';

const DataAnalyzer = () => {
  // Example dynamic values (these can come from props or API)
  const totalProjects = 100;  // Total projects
  const successfulProjects = 100;  // Successful projects
  const failedProjects = 0;  // Failed projects

  // Compute the average rating based on the number of successful and failed projects
  const averageRating = (successfulProjects / totalProjects) * 5; // Assuming success = full rating (5/5)
  
  const maxRating = 5; // Maximum rating value (5 stars)
  const totalRatings = 200; // Total number of ratings

  // Calculate the percentage for the progress circle
  const progressPercentage = (averageRating / maxRating) * 100;
  const rotationAngle = (progressPercentage / 100) * 360;

  return (
    <>
      <div className=" flex  flex-col justify-center gap-4 shadow-lg rounded-lg w-full  ">
   <div className='w-screen h-[5vw] ' > <Nav/></div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-6">
          {/* Total Projects */}
          <div className="bg-blue-50 border-l-4 border-[#196aef] p-8 rounded-lg">
            <h3 className="text-base font-medium text-gray-600">Total Projects</h3>
            <p className="text-2xl font-bold text-gray-800">{totalProjects}</p>
          </div>
          {/* Successful Projects */}
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-base font-medium text-gray-600">Successful Projects</h3>
            <p className="text-2xl font-bold text-gray-800">{successfulProjects}</p>
          </div>
          {/* Failed Projects */}
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <h3 className="text-base font-medium text-gray-600">Failed Projects</h3>
            <p className="text-2xl font-bold text-gray-800">{failedProjects}</p>
          </div>
        </div>

        {/* User Analytics and Average Project Rating */}
        <div className='flex h-fit   py-5 items-center justify-center w-full'>
        <div className="bg-white  shadow-lg items-center  rounded-lg p-6 max-w-sm text-center">
          <h2 className="text-xl font-semibold  text-gray-800 mb-4">Average Project Rating</h2>

          {/* Circular Progress Bar */}
          <div className="relative w-40 h-40 mx-auto">
            {/* Outer Circle */}
            <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>

            {/* Progress Circle */}
            {/* <div
              className="absolute inset-0 rounded-full border-8 border-[#196eaf]"
              style={{
                clipPath: 'polygon(50% 0%, 50% 50%, 100% 50%, 100% 0%)',
                // transform: rotate({90 + rotationAngle}deg),
                transformOrigin: 'center',
              }}
            ></div> */}

            {/* Inner Circle */}
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
              <div className="flex items-center justify-center">
                <p className="text-2xl font-bold text-[#196eaf]">{averageRating.toFixed(1)}</p>
                <p className="text-lg text-[#196eaf]">/ 5</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-4 text-sm">
            Based on <span className="font-medium text-gray-800">{totalRatings}</span> ratings.
          </p>
        </div>
        </div>
      

        {/* Project Timeline */}
        <div className="px-4 py-4">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Project Timeline</h3>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="h-4 w-4 rounded-full bg-green-500 flex-shrink-0"></span>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-700">Website Redesign</p>
                  <p className="text-base text-gray-500">Completed on 10th Dec 2024</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="h-4 w-4 rounded-full bg-red-500 flex-shrink-0"></span>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-700">Mobile App Development</p>
                  <p className="text-base text-gray-500">Failed on 5th Nov 2024</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="h-4 w-4 rounded-full bg-green-500 flex-shrink-0"></span>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-700">Social Media Campaign</p>
                  <p className="text-base text-gray-500">Completed on 1st Oct 2024</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalyzer;
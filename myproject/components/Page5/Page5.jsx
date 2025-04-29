import { NavLink } from "react-router-dom";
import React from "react";

const Page5 = () => {
  return (
    <>
      <div class="bg-white py-16 px-6 lg:px-20">
  <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* <!-- Left Section --> */}
    <div class="flex flex-col justify-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-6">
        Getting work done has never been easier
      </h1>
      <ul class="space-y-4 text-lg text-gray-600">
        <li class="flex items-start">
          <span class="text-green-500 w-6 h-6 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Get matched with expert freelancers in minutes
        </li>
        <li class="flex items-start">
          <span class="text-green-500 w-6 h-6 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Dedicated 24/7 customer service team
        </li>
        <li class="flex items-start">
          <span class="text-green-500 w-6 h-6 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Money back guarantee and anti-fraud protection
        </li>
      </ul>
      <button class="mt-6 bg-[#196eaf] w-[20vw] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#44a4ed]">
        Start Now for Free
      </button>
    </div>

    {/* <!-- Right Section (Image Grid) --> */}
    <div class=" gap-4">
    <img className="h-500px w-500px" src="/2nd.jpg" alt="" />
    </div>
  </div>
</div>

    </>
  );
};

export default Page5;

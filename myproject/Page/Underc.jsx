import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const Underc = () => {
  return (
    <>
      <Nav />
      <div className="h-screen flex flex-col max-md:p-16 max-md:justify-start   gap-10 items-center  justify-center py-7 ">
        <h1 className="text-4xl max-md:text-[20px] font-medium">Join as a client or freelancer</h1>
        <div className="flex  max-md:flex-col max-md:gap-10  gap-12">
          {/* Client Card */}
          <div
            id='column'  className=" h-[35vh] w-[20vw]  gap-3 max-md:h-40 max-md:w-52 rounded-xl flex justify-start items-start flex-col   px-5 py-8 max-md:py-2 bg-zinc-100 hover:scale-110 border-2 hover:border-[#196eaf]  ease-linear  duration-150"
            
          >
            <img
              className="h-8 w-8"
              style={{ height: "40px", width: "40px" }}
              src="/client.png"
              alt="Client"
            />
            <h1 className="font-medium max-md:text-base text-xl w-36">
              I’m a client, hiring for a project
            </h1>
            <NavLink
              to="/signin"
              state={{ role: "Client" }}
              className="bg-[#196eaf]  max-md:w-20 h-[6vh] w-[8vw] max-md:text-[10px]    text-xs hover:bg-blue-700 text-white font-medium py-2 px-5 max-md:py-1 max-md:px-3 border-blue-600 rounded-xl shadow ease-in duration-150"
            >
              Apply Now
            </NavLink>
          </div>

          {/* Freelancer Card */}
          <div
            className=" h-[35vh] w-[20vw]  gap-3 max-md:h-40 max-md:w-52 rounded-xl flex justify-start items-start flex-col   px-5 py-8 max-md:py-2 bg-zinc-100 hover:scale-110 border-2 hover:border-[#196eaf]  ease-linear  duration-150"
          >
            <img
              className="h-8 w-8"
              style={{ height: "40px", width: "40px" }}
              src="/freelancer.png"
              alt="Freelancer"
            />
            <h1 className="font-medium max-md:text-base text-xl w-36">
              I’m a freelancer, looking for work
            </h1>
            <NavLink
              to="/signin"
              state={{ role: "Freelancer" }}
              className="bg-[#196eaf]  max-md:w-20 h-[6vh] w-[8vw] max-md:text-[10px]    text-xs hover:bg-blue-700 text-white font-medium py-2 px-5 max-md:py-1 max-md:px-3 border-blue-600 rounded-xl shadow ease-in duration-150"
            >
              Apply Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Underc;

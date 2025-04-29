
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Others = () => {
  const { isAuthenticated,user , role } = useSelector((state) => state?.Auth);

  return (
    <>
      <div className="h-52 w-full  flex items-center justify-center pl-24 max-md:hidden">
        {role==="freelancer" ? <>
        <div
          className="h-32 w-[82vw]  flex gap-14 items-center justify-start  "
          style={{ boxShadow: "0px 0px 10px 5px  #d6d6d6" }}
        >
          <h1 className="text-2xl font-semibold pl-10">
            Consult with Top Highest Rated Freelancers Online , 24/7
          </h1>

        <NavLink
            to={isAuthenticated ?"/consult" :"/login"}
            className="  text-white text-lg text-center font-normal py-4 w-60 px-4 bg-[#196eaf] rounded-full"
          >
            Start Consultation
          </NavLink>

    
        </div>
        </>
        :""}
      </div>
    </>
  );
};

export default Others;

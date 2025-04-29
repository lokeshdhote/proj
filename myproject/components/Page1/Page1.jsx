
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Page1 = () => {
  const { isAuthenticated,user , role } = useSelector((state) => state?.Auth);
  return (
    <>
      <div className="h-fit bg-white  pt-[3vw] w-full flex max-md:flex-col  items-start justify-start object-cover py-14 max-md:py-2 px-28  max-md:px-10 max-md:gap-5  gap-48 max-md:h-fit ">
        <div className="relative text-start items-start justify-start w-[30vw] max-md:w-full  gap-10 flex flex-col">
          <p className="  mt-[8vw] w-[40vw] leading-[120%] text-7xl font-semibold max-md:text-3xl">
            {" "}
            Creators, Ready to Unlock Your Next Opportunity?
          </p>
          <p className="font-semibold max-md:text-base text-xl ">
            {" "}
            Forget the old rules. You can have the best people. Right now. Right
            here.
          </p>

       {  !isAuthenticated ? <NavLink
            to={ "/underc" }
            className="bg-[#196eaf]  max-md:text-[10px] text-lg hover:bg-blue-500  text-white  font-semibold py-3 px-11 max-md:py-1 max-md:px-2 border-blue-600  rounded-xl shadow ease-in duration-150"
          >
            Get Started
          </NavLink>
          : ""}
        </div>

        <img
          className="h-[38vw]  max-md:h-[24vh] mt-10 max-md:ml-2 flex items-center justify-center"
          src="/HOMIE.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Page1;

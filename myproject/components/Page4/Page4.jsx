import React from "react";
import { useSelector } from "react-redux";

const Page4 = () => {
  const { isAuthenticated,user ,loading, message, error, role } = useSelector((state) => state?.Auth);
  return role==="Client" ?(
    <>
      <div className="h-fit w-full flex flex-col py-32 gap-2 max-md:flex-col  ">
        <h1 className="text-3xl max-md:text-lg max-md:justify-center max-md:px-3 font-semibold flex justify-center py-5 ">
          It's Easy to Get Work Done on Gigo
        </h1>
        <div className="w-full h-fit flex items-center justify-center max-md:flex-col px-10 max-md:px-0 max-md:justify-center max-md:items-center py-3 gap-16   ">
          <div className="h-72 w-72 max-md:h-52  bg-white items-center justify-center max-md:justify-center max-md:items-center     flex flex-col gap-4  rounded-xl">
            <div className="h-28 max-md:h-20 max-md:w-20 max-md:px-5  px-2  w-28   rounded-full  flex items-center justify-center shadow-xl">
              <img src="/jobs.png" alt="" />
            </div>
            <h1 className="text-lg  font-semibold  w-52 text-center">
              {" "}
              Post a Job
            </h1>

            <p className="text-center max-md:text-base text-base">
              Create your free job posting and start receiving Quotes within
              hours.
            </p>
          </div>

          <div className="h-72 w-72 max-md:h-52 bg-white items-center justify-center max-md:justify-start max-md:items-center     flex flex-col gap-4  rounded-xl">
            <div className="h-28  px-2  w-28  max-md:h-20 max-md:w-20  rounded-full  flex items-center justify-center shadow-xl">
              <img src="/jobs.png" alt="" />
            </div>
            <h1 className="text-lg  font-semibold  w-52 text-center">
              Hire Freelancers
            </h1>

            <p className="text-center  max-md:text-base text-base">
              Compare the Quotes you receive and hire the best freelance
              professionals for the job.
            </p>
          </div>

          <div className="h-72 w-72 max-md:h-52 bg-white items-center justify-center  max-md:justify-start max-md:items-center    flex flex-col gap-4  rounded-xl">
            <div className="h-28  px-2  w-28 max-md:h-20 max-md:w-20   rounded-full  flex items-center justify-center shadow-xl">
              <img src="/jobs.png" alt="" />
            </div>
            <h1 className="text-lg   font-semibold  w-52 text-center">
              Get Work Done
            </h1>

            <p className="text-center  max-md:text-base text-base">
              Decide on how and when payments will be made and use WorkRooms to
              collaborate, communicate and track work.
            </p>
          </div>

          <div className="h-72 w-72 max-md:h-52 bg-white items-center justify-center max-md:justify-start max-md:items-center     flex flex-col gap-4  rounded-xl">
            <div className="h-28  px-2  w-28 max-md:h-20 max-md:w-20   rounded-full  flex items-center justify-center shadow-xl">
              <img src="/jobs.png" alt="" />
            </div>
            <h1 className="text-lg   font-semibold  w-52 text-center">
              Make Secure Payments
            </h1>
            <p className="text-center  max-md:text-base text-base">
              Choose from multiple payment methods with SafePay payment
              protection.
            </p>
          </div>
        </div>
      </div>
    </>
  )
  :("");
};

export default Page4;

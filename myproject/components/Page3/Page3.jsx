import React from "react";

const Page3 = () => {
  return (
    <>
      <div className="h-fit  max-md:h-fit flex flex-col justify-center max-md:justify-start max-md:items-start  gap-8 max-md:gap-4 w-full pb-8 max-md:pb-1 max-md:py-10 px-8 max-md:px-0 relative">
        <h1 className="font-extrabold text-[30px] ml-[35%] max-md:text-[20px] max-md:ml-20 ">
          LETS GROW TOGETHER
        </h1>
        <div className="h-fit w-full  flex flex-col items-center max-md:items-start max-md:px-3 gap-10 max-md:gap-3 max-md:py-6">
          <h1 className="text-[30px] font-bold max-md:text-[14px] max-md:ml-[80px] ">
            BENEFITS WITH SARASNIYAM
          </h1>
          <div className="flex justify-center items-center gap-28 max-md:gap-2 max-md:justify-start max-md:items-start">
            <div className="h-[46vh] w-[20vw] max-md:h-32 max-md:w-[30vw]  bg-gradient-to-r bg-[#01a0e2] rounded-3xl"></div>
            <div className="h-[46vh] w-[20vw] max-md:h-32 max-md:w-[30vw]  bg-gradient-to-r bg-[#01a0e2]  rounded-3xl"></div>
            <div className="h-[46vh] w-[20vw] max-md:h-32 max-md:w-[30vw]  bg-gradient-to-r bg-[#01a0e2]  rounded-3xl"></div>
          </div>
        </div>
        <button className=" ml-[40%] max-md:ml-36 text-[20px] max-md:text-[8px] px-6  max-md:px-1  max-md:w-32 w-[18vw] rounded-2xl bg-[#01ADFF] hover:bg-blue-700 text-white font-bold py-4  border border-blue-600   ease-in duration-150">
          START LEARNING
        </button>
      </div>
    </>
  );
};

export default Page3;

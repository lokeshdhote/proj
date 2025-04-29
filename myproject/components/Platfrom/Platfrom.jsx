import React from "react";

const Platfrom = () => {
  return (
    <>
      <div className="h-screen w-full max-md:h-fit bg-white flex flex-col py-24 gap-4 items-center max-md:px-5 ">
        <h1 className="text-3xl max-md:text-xl  font-semibold">
          A Platform Trusted by Students Worldwide
        </h1>
        <p className="text-lg max-md:text-sm">
          Don't Just Take Our Word for It. Delve into the Numbers and Witness
          the Excellence for Yourself!
        </p>
        <div className="h-fit w-full flex gap-3 px-16 max-md:p-0">
          <div className="bg-[#fff3e3] rounded-xl  h-[40vh] w-[20vw] max-md:h-fit max-md:py-5 max-md:px-5 flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl max-md:text-sm font-semibold">
              15 Million+
            </h1>
            <h2 className="font-medium max-md:text-xs">Happy Students</h2>
          </div>
          <div className="bg-[#fdd] rounded-xl  h-[40vh] w-[20vw]  max-md:h-fit max-md:py-5 max-md:px-5 flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl max-md:text-sm font-semibold">24000+</h1>
            <h2 className="font-medium max-md:text-sm">Mock Test</h2>
          </div>
          <div className="bg-[#e4faff] rounded-xl  h-[40vh] w-[20vw]  max-md:h-fit max-md:py-5 max-md:px-5 flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl max-md:text-sm font-semibold">14000+</h1>
            <h2 className="font-medium max-md:text-sm">Video Lectures</h2>
          </div>
          <div className="bg-[#ece7ff] rounded-xl  h-[40vh] w-[20vw]  max-md:h-fit max-md:py-5 max-md:px-5 flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl font-semibold max-md:text-sm">80000+</h1>
            <h2 className="font-medium max-md:text-sm">Practice Paper</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Platfrom;

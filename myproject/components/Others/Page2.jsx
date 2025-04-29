import React from "react";

const Page2 = () => {
  return (
    <>
      <div className="h-screen max-md:h-full w-full  ">
        <h1 className="text-4xl max-md:text-2xl  flex justify-center py-12 text-center font-semibold ">
          Popular Job Categories
        </h1>

        <div className="h-[25vh] max-md:h-fit px-12  max-md:px-6 w-[95vw] flex max-md:flex-col items-start gap-8 ">
          <div className=" flex max-md:justify-start  justify-center items-center gap-5 px-10 h-[20vh] rounded-3xl w-[90vw]  hover:bg-[#044997]  hover:text-white ease-linear duration-150">
            <img src="/money.png" alt="" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg max-md:text-sm  font-semibold">
                Accounting / Finance
              </h1>
              <p>(2 open positions)</p>
            </div>
          </div>

          <div className=" flex max-md:justify-start  justify-center items-center gap-5 px-10 h-[20vh] rounded-3xl w-[90vw]  hover:bg-[#044997]  hover:text-white ease-linear duration-150">
            <img src="/market.png" alt="" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg max-md:text-sm  font-semibold">
                Marketing
              </h1>
              <p>(86 open positions)</p>
            </div>
          </div>

          <div className=" flex max-md:justify-start  justify-center items-center gap-5 px-10 h-[20vh] rounded-3xl w-[90vw]  hover:bg-[#044997]  hover:text-white ease-linear duration-150">
            <img src="/design.png" alt="" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg max-md:text-sm  font-semibold">Design</h1>
              <p>( 43 open positions)</p>
            </div>
          </div>
        </div>

        <div className="h-[25vh] max-md:h-fit px-12  max-md:px-6 w-[95vw] flex max-md:flex-col items-start gap-8 ">
          <div className=" flex max-md:justify-start  justify-center items-center gap-5 px-10 h-[20vh] rounded-3xl w-[90vw]  hover:bg-[#044997]  hover:text-white ease-linear duration-150">
            <img src="/code.png" alt="" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg max-md:text-sm  font-semibold">
                Development
              </h1>
              <p>(12 open positions)</p>
            </div>
          </div>

          <div className=" flex max-md:justify-start  justify-center items-center gap-5 px-10 h-[20vh] rounded-3xl w-[90vw]  hover:bg-[#044997]  hover:text-white ease-linear duration-150">
            <img src="/human.png" alt="" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg max-md:text-sm  font-semibold">
                Human Resource
              </h1>
              <p>(55 open positions)</p>
            </div>
          </div>

          <div className=" flex max-md:justify-start  justify-center items-center gap-5 px-10 h-[20vh] rounded-3xl w-[90vw]  hover:bg-[#044997]  hover:text-white ease-linear duration-150">
            <img src="/project.png" alt="" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg max-md:text-sm  font-semibold">
                Project Management
              </h1>
              <p>( 2 open positions)</p>
            </div>
          </div>
        </div>

        <div className="h-[25vh] max-md:h-fit px-12  max-md:px-6 w-[95vw] flex max-md:flex-col items-start gap-8 ">
          <div className=" flex max-md:justify-start  justify-center items-center gap-5 px-10 h-[20vh] rounded-3xl w-[90vw]  hover:bg-[#044997]  hover:text-white ease-linear duration-150">
            <img src="/health.png" alt="" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg max-md:text-sm  font-semibold">
                Health and Care
              </h1>
              <p>(25 open positions)</p>
            </div>
          </div>

          <div className=" flex max-md:justify-start  justify-center items-center gap-5 px-10 h-[20vh] rounded-3xl w-[90vw]  hover:bg-[#044997]  hover:text-white ease-linear duration-150">
            <img src="/health.png" alt="" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg max-md:text-sm  font-semibold">
                Health and Care
              </h1>
              <p>(25 open positions)</p>
            </div>
          </div>

          <div className=" flex max-md:justify-start  justify-center items-center gap-5 px-10 h-[20vh] rounded-3xl w-[90vw]  hover:bg-[#044997]  hover:text-white ease-linear duration-150">
            <img src="/car.png" alt="" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg max-md:text-sm  font-semibold">
                Automotive Jobs
              </h1>
              <p>( 92 open positions)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;

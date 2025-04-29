import React from "react";

const Resource = () => {
  return (
    <>
      <div className="h-screen w-full max-md:h-fit max-md:pb-10  flex flex-col  items-center gap-3  max-md:px-5">
        <h1 className="text-3xl max-md:text-xl font-bold"> Study Resources</h1>
        <p className="text-lg max-md:text-sm max-md:text-center ">
          A diverse array of learning materials to enhance your educational
          journey.
        </p>

        <div className="h-fit w-full flex gap-10 px-20 max-md:px-1 max-md:gap-1">
          <div className="bg-[#f1faff] rounded-xl max-md:h-fit  h-[60vh] w-[30vw] px-4 flex flex-col items-start py-4 gap-4">
            <h1 className="text-xl max-md:text-sm font-semibold">Notes</h1>
            <h2 className="font-medium text-sm text-slate-500 max-md:text-[10px] text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sint
              possimus porro neque provident. Labore.
            </h2>
            <img
              className="object-contain max-md:h-[50px]"
              src="/books.webp"
              alt=""
            />
          </div>

          <div className="bg-[#fff9ee] rounded-xl max-md:h-fit  h-[60vh] w-[30vw] px-4 flex flex-col items-start py-4 gap-4 max-md:gap-1">
            <h1 className="text-xl max-md:text-sm font-semibold">
              Reference Books
            </h1>
            <h2 className="font-medium text-sm text-slate-500 max-md:text-[10px] text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sint
              possimus porro neque provident. Labore.
            </h2>
            <img
              className="object-contain h-[200px] ml-10  max-md:h-[50px]"
              src="/gbooks.webp"
              alt=""
            />
          </div>

          <div className="bg-[#e8fff6] rounded-xl max-md:h-fit  h-[60vh] w-[30vw] px-4 flex flex-col items-start py-4 gap-4 max-md:gap-2">
            <h1 className="text-xl max-md:text-sm font-semibold">
              NCERT Solutions
            </h1>
            <h2 className="font-medium text-sm text-slate-500 max-md:text-[10px] text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sint
              possimus porro neque provident. Labore.
            </h2>
            <img
              className="object-contain max-md:h-[50px]"
              src="/help.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resource;

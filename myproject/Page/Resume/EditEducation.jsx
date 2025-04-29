import { RiCloseLine } from "@remixicon/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AsynceditEduction } from "../../src/Store/Actions/ResumeAction";

export default function Editeducation({ index, onClose }) {
  const dispatch = useDispatch();
  const { resume } = useSelector((state) => state?.resume);

  // Get education data based on the index
  const data = resume?.education[index];

  // Set initial form values from the Redux state
  const [organization, setorganization] = useState(data?.organization || "");
  const [startyear, setstartyear] = useState(data?.startyear || "");
  const [endyear, setendyear] = useState(data?.endyear || "");
  const [degree, setdegree] = useState(data?.degree || "");
  const [branch, setbranch] = useState(data?.branch || "");
  const [grade, setgrade] = useState(data?.grade || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispatch action to update the education data
    dispatch(
      AsynceditEduction(data.id, {
        organization,
        startyear,
        endyear,
        degree,
        branch,
        grade,
      })
    );

    // Close the form after submission
    onClose();
  };

  return (
    <>
      <div className="z-10 flex items-center h-screen justify-center fixed pt-8 w-full bg-black/30">
        <div className="h-[83vh] pb-5 pt-2 px-10 rounded-md w-[30%] bg-white">
          <RiCloseLine
            size={30}
            onClick={onClose}
            className="ml-[50vh] cursor-pointer"
            color="#1c1c1c9d"
          />
          <div className="flex items-center justify-center text-[#272727e4] w-full h-5 text-3xl font-bold">
            <h1>Edit Education</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full">
              <h1 className="mt-16 text-base font-semibold mb-2 text-[#272727c1]">
                College/Organization name
              </h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                onChange={(e) => setorganization(e.target.value)}
                name="organization"
                value={organization}
                placeholder="eg. Hindu college"
              />
            </div>
            <div className="mt-10 w-full flex gap-[3vh]">
              <div className="w-[45%]">
                <h1 className="text-base font-semibold mb-2 text-[#272727c1]">
                  Start Year
                </h1>
                <input
                  className="w-full pl-[2vh] text-base text-black outline-sky-300 h-[5vh] border-[1px] border-[#27272748] p-2 rounded-md"
                  type="text"
                  onChange={(e) => setstartyear(e.target.value)}
                  value={startyear}
                  name="startyear"
                  placeholder="2020"
                />
              </div>
              <div className="w-[45%]">
                <h1 className="text-base font-semibold mb-2 text-[#272727c1]">
                  End Year
                </h1>
                <input
                  className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  type="text"
                  onChange={(e) => setendyear(e.target.value)}
                  value={endyear}
                  name="endyear"
                  placeholder="2024"
                />
              </div>
            </div>

            <div className="flex w-full">
              <div className="w-[50%]">
                <h1 className="mt-8 text-base font-semibold mb-2 text-[#272727c1]">
                  Degree
                </h1>
                <input
                  className="w-[90%] pl-[2vh] h-[5vh] text-[2vh] outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  type="text"
                  name="degree"
                  onChange={(e) => setdegree(e.target.value)}
                  value={degree}
                  placeholder="Btech, Mtech, etc."
                />
              </div>
              <div className="w-[50%]">
                <h1 className="mt-8 text-base font-semibold mb-2 text-[#272727c1]">
                  Branch
                </h1>
                <input
                  className="w-[90%] pl-[2vh] h-[5vh] text-[2vh] outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  type="text"
                  name="branch"
                  onChange={(e) => setbranch(e.target.value)}
                  value={branch}
                  placeholder="IT, AIML, CSE, etc."
                />
              </div>
            </div>

            <div className="w-[50%]">
              <h1 className="mt-10 text-base font-semibold mb-2 text-[#272727c1]">
                CGPA/Percentage
              </h1>
              <input
                className="lowercase w-[90%] pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                value={grade}
                onChange={(e) => setgrade(e.target.value)}
                name="grade"
                placeholder="7.5 or 70%"
              />
            </div>

            <button
              type="submit"
              className="px-[4vh] py-[1vh] mt-8 text-base font-semibold rounded-md text-white bg-[#008BDC]"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

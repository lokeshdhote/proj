import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AsyncaddEduction } from "../../src/Store/Actions/ResumeAction";

export default function Education(props) {
  const dispatch = useDispatch();

  // State for form inputs
  const [organization, setOrganization] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [degree, setDegree] = useState("");
  const [branch, setBranch] = useState("");
  const [grade, setGrade] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispatch the action to add education
    dispatch(AsyncaddEduction({ organization, startYear, endYear, degree, branch, grade }));

    // Close the modal after submission
    props.onClose();
  };

  return (
    <div className="z-10 flex items-center h-screen justify-center fixed pt-8 w-full bg-black/30">
      <div className="h-[83vh] pb-5 pt-2 px-10 rounded-md w-[30%] bg-white">
        {/* Close Button */}
        <RiCloseLine
          size={30}
          onClick={props.onClose}
          className="ml-[50vh] cursor-pointer"
          color="#1c1c1c9d"
        />

        {/* Title */}
        <div className="flex items-center justify-center text-[#272727e4] w-full h-5 text-3xl font-bold">
          <h1>Add Education</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* College/Organization Name */}
          <div className="w-full">
            <h1 className="mt-16 text-base font-semibold mb-2 text-[#272727c1]">
              College/Organization Name
            </h1>
            <input
              className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="eg. Hindu college"
            />
          </div>

          {/* Start Year and End Year */}
          <div className="mt-10 w-full flex gap-[3vh]">
            <div className="w-[45%]">
              <h1 className="text-base font-semibold mb-2 text-[#272727c1]">
                Start Year
              </h1>
              <input
                className="w-full pl-[2vh] text-base text-black outline-sky-300 h-[5vh] border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
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
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
                placeholder="2024"
              />
            </div>
          </div>

          {/* Degree and Branch */}
          <div className="flex w-full">
            <div className="w-[50%]">
              <h1 className="mt-8 text-base font-semibold mb-2 text-[#272727c1]">
                Degree
              </h1>
              <input
                className="w-[90%] pl-[2vh] h-[5vh] text-[2vh] outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
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
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                placeholder="IT, AIML, CSE, etc."
              />
            </div>
          </div>

          {/* CGPA/Percentage */}
          <div className="w-[50%]">
            <h1 className="mt-10 text-base font-semibold mb-2 text-[#272727c1]">
              CGPA/Percentage
            </h1>
            <input
              className="w-[90%] pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="7.5 or 70%"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-[4vh] py-[1vh] text-base mt-8 font-semibold rounded-md text-white bg-[#008BDC]"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

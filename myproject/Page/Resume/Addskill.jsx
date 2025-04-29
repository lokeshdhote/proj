import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Asyncaddskill } from "../../src/Store/Actions/ResumeAction";

export default function Addskill(props) {
  const dispatch = useDispatch();
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]); // State to store the list of skills

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (skill.trim() === "") return; // Prevent empty submissions
    const newSkill = { skill }; // Prepare the new skill object
    setSkills((prev) => [...prev, newSkill]); // Update the skills list in UI state
    dispatch(Asyncaddskill(newSkill)); // Dispatch the action to Redux
    setSkill(""); // Reset input field
    props.onClose(); // Close modal
  };

  return (
    <>
      <div className="z-[9] flex items-center h-[110vh] justify-center fixed top-0 pt-8 w-full bg-black/30">
        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="w-[40vw] h-[90vh] py-[5%] pt-0 overflow-y-scroll"
        >
          <div className="min-h-[60vh] mt-8 pb-5 pt-2 px-10 rounded-md w-[100%] bg-white">
            <RiCloseLine
              size={30}
              onClick={props.onClose}
              className="ml-[65vh] cursor-pointer"
              color="#1c1c1c9d"
            />
            <div className="flex items-center justify-center text-[#272727e4] w-full h-5 text-xl font-bold">
              <h1>Skills</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="w-full">
                <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                  Add Skills
                </h1>
                <input
                  className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  type="text"
                  onChange={(e) => setSkill(e.target.value)}
                  name="skill"
                  value={skill}
                  placeholder="e.g., Add skill"
                />
              </div>

              <button
                type="submit"
                className="px-[4vh] py-[1vh] text-base mt-8 font-semibold rounded-md text-white bg-[#008BDC]"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Display added skills */}
      <div className="mt-8 px-10">
        <h2 className="text-lg font-semibold mb-4">Added Skills:</h2>
        {skills.length === 0 ? (
          <p className="text-gray-600">No skills added yet.</p>
        ) : (
          <ul className="list-disc ml-6">
            {skills.map((sk, index) => (
              <li key={index} className="mb-2 text-[#272727c1]">
                {sk.skill}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

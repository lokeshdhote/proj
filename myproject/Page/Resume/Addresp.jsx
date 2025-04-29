import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Asyncaddresponsibility } from "../../src/Store/Actions/ResumeAction";

export default function Addresp(props) {
  const dispatch = useDispatch();
  const [Description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState([]); // State for UI display

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Description.trim()) {
      const newResponsibility = { Description }; // Prepare new responsibility
      setResponsibilities((prev) => [...prev, newResponsibility]); // Add to UI state
      dispatch(Asyncaddresponsibility(newResponsibility)); // Dispatch to Redux
      setDescription(""); // Reset the input field
      props.onClose(); // Close modal after submission
    }
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
              <h1>Position of Responsibility</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="w-full">
                <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                  Description
                </h1>
                <h4 className="text-[#272727c1] text-sm mb-3">
                  If you have been/are an active part of societies, conducted
                  any events, or led a team, add details here
                </h4>
                <textarea
                  className="w-full pl-[2vh] h-[30vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  onChange={(e) => setDescription(e.target.value)}
                  name="Description"
                  value={Description}
                  placeholder="Describe your responsibilities"
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

      {/* Display added responsibilities */}
      <div className="mt-8 px-10">
        <h2 className="text-lg font-semibold mb-4">Added Responsibilities:</h2>
        {responsibilities.length === 0 ? (
          <p className="text-gray-600">No responsibilities added yet.</p>
        ) : (
          <ul className="list-disc ml-6">
            {responsibilities.map((res, index) => (
              <li key={index} className="mb-2 text-[#272727c1]">
                {res.Description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Asyncaddaccomplishment } from "../../src/Store/Actions/ResumeAction";
import { useNavigate } from "react-router-dom";

export default function Addaccom({ onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Additionaldetails, setAdditionaldetails] = useState("");
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const wordCount = Additionaldetails.trim().split(/\s+/).length; // Count words
    if (wordCount > 70) {
      setError("You can only enter up to 70 words.");
    } else {
      setError(""); // Clear error if word count is valid
      dispatch(Asyncaddaccomplishment({ Additionaldetails }));
      navigate("/resume"); // Navigate to /resume after submission
      onClose(); // Close the modal after saving
    }
  };

  return (
    <div className="z-[9] flex items-center h-[110vh] justify-center fixed top-0 pt-8 w-full bg-black/30">
      <div
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className="w-[40vw] h-[90vh] py-[5%] pt-0 overflow-y-scroll"
      >
        <div className="min-h-[60vh] mt-8 pb-5 pt-2 px-10 rounded-md w-[100%] bg-white">
          <RiCloseLine
            size={30}
            onClick={onClose}
            className="ml-[65vh] cursor-pointer"
            color="#1c1c1c9d"
          />
          <div className="flex items-center justify-center text-[#272727e4] w-full h-5 text-xl font-bold">
            <h1>Additional details</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full">
              <textarea
                className="w-full pl-[2vh] mt-3 h-[30vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                onChange={(e) => setAdditionaldetails(e.target.value)}
                name="Additionaldetails"
                value={Additionaldetails}
                placeholder="e.g. Add accomplishments"
              ></textarea>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
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
  );
}

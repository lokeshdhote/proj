import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Asynceditresponsibility } from "../../src/Store/Actions/ResumeAction";

export default function Editresp({ index, onClose }) {
  const dispatch = useDispatch();

  const { resume } = useSelector((state) => state?.resume);

  const data = resume?.responsibilities[index];  // Get the responsibility data based on index
  console.log(data);

  const [Description, setDescription] = useState(data?.Description || "");
  const [error, setError] = useState("");

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    const wordCount = value.trim().split(/\s+/).length;

    if (wordCount <= 70) {
      setDescription(value);
      setError(""); // Clear error if word count is within the limit
    } else {
      setError("Description cannot exceed 70 words.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error) return; // Prevent form submission if there's an error

    // Dispatch the edited responsibility to Redux
    dispatch(Asynceditresponsibility(data.id, { Description }));

    // After submitting, update the local UI to reflect the changes
    const updatedResponsibility = { ...data, Description };

    // Optionally, you can update the state locally or trigger a re-fetch here
    // For now, we'll just close the modal
    onClose();
  };

  return (
    <>
      <div className="z-[9] flex items-center h-[110vh] justify-center fixed top-0 pt-8 w-full bg-black/30">
        <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="w-[40vw] h-[90vh] py-[5%] pt-0 overflow-y-scroll">
          <div className="min-h-[60vh] mt-8 pb-5 pt-2 px-10 rounded-md w-[100%] bg-white">
            <RiCloseLine
              size={30}
              onClick={onClose}
              className="ml-[65vh] cursor-pointer"
              color="#1c1c1c9d"
            />
            <div className="flex items-center justify-center text-[#272727e4] w-full h-5 text-xl font-bold">
              <h1>Edit Position of Responsibility</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="w-full">
                <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                  Description
                </h1>
                <textarea
                  className="w-full pl-[2vh] h-[30vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  value={Description}
                  onChange={handleDescriptionChange}
                  name="Description"
                  placeholder="Describe your responsibilities"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
              <button
                type="submit"
                className="px-[4vh] py-[1vh] text-base mt-8 font-semibold rounded-md text-white bg-[#008BDC]"
                disabled={!!error} // Disable button if there's an error
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

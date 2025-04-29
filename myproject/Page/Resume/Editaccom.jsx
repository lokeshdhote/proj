import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Asynceditaccomplishment } from "../../src/Store/Actions/ResumeAction";

export default function Editaccom({ index, onClose }) {
  const dispatch = useDispatch();

  const { resume } = useSelector((state) => state?.resume);
  const data = resume?.accomplishments[index];

  const [Additionaldetails, setAdditionaldetails] = useState(data?.Additionaldetails || "");
  const [wordCountError, setWordCountError] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Only submit if no word count error
    if (!wordCountError) {
      await dispatch(Asynceditaccomplishment(data.id, { Additionaldetails }));
      onClose();  // Close modal after successful submission
    }
  };

  // Handle text input change and check word count
  const handleTextChange = (e) => {
    const value = e.target.value;
    setAdditionaldetails(value);

    // Count words and check if it exceeds 70
    const wordCount = value.trim().split(/\s+/).length;
    setWordCountError(wordCount > 70);  // Show error if word count exceeds 70
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
              <h1>Edit Additional details</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="w-full">
                <textarea
                  className="w-full pl-[2vh] mt-3 h-[30vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  onChange={handleTextChange}
                  name="Additionaldetails"
                  value={Additionaldetails}
                  placeholder="e.g. Add accomplishments"
                ></textarea>
              </div>

              {/* Show error message if word count exceeds 70 */}
              {wordCountError && (
                <p className="text-red-500 mt-2 text-sm">
                  You can only enter up to 70 words.
                </p>
              )}

              <button
                type="submit"
                className="px-[4vh] py-[1vh] text-base mt-8 font-semibold rounded-md text-white bg-[#008BDC]"
                disabled={wordCountError}  // Disable the button if word count exceeds 70
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

import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Asynceditproject } from "../../src/Store/Actions/ResumeAction";

export default function Editproject({ index, onClose }) {
  const dispatch = useDispatch();
  const { resume } = useSelector((state) => state?.resume);

  const data = resume?.projects[index];

  const [title, setTitle] = useState(data?.title || "");
  const [startDate, setStartDate] = useState(data?.Startdate || "");
  const [endDate, setEndDate] = useState(data?.enddate || "");
  const [description, setDescription] = useState(data?.Description || "");
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
    dispatch(Asynceditproject(data.id, { title, Startdate: startDate, enddate: endDate, Description: description }));
  };

  return (
    <>
      <div className="z-[9] flex items-center h-[110vh] justify-center fixed top-0 pt-8 w-full bg-black/30">
        <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="w-[40vw] h-[90vh] py-[5%] pt-0 overflow-y-scroll">
          <div className="min-h-[95vh] mt-8 pb-5 pt-2 px-10 rounded-md w-[100%] bg-white">
            <RiCloseLine size={30} onClick={onClose} className="ml-[65vh] cursor-pointer" color="#1c1c1c9d" />
            <div className="flex items-center justify-center text-[#272727e4] w-full h-5 text-3xl font-bold">
              <h1>Edit Project details</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="w-full">
                <h1 className="mt-16 text-base font-semibold mb-2 text-[#272727c1]">Title</h1>
                <input
                  className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                  placeholder="e.g. Analytics"
                />
              </div>
              <div className="mt-10 w-full flex gap-[3vh]">
                <div className="w-[45%]">
                  <h1 className="text-base font-semibold mb-2 text-[#272727c1]">Start date</h1>
                  <input
                    className="w-full pl-[2vh] text-base text-black outline-sky-300 h-[5vh] border-[1px] border-[#27272748] p-2 rounded-md"
                    type="date"
                    name="Startdate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="w-[45%]">
                  <h1 className="text-base font-semibold mb-2 text-[#272727c1]">End date</h1>
                  <input
                    className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                    type="date"
                    name="enddate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full">
                <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">Description</h1>
                <textarea
                  className="w-full pl-[2vh] h-[19vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  value={description}
                  onChange={handleDescriptionChange}
                  name="Description"
                  placeholder="e.g. Add Description"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
              <button
                type="submit"
                className="px-[4vh] py-[1vh] text-base mt-8 font-semibold rounded-md text-white bg-[#008BDC]"
                disabled={!!error}
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

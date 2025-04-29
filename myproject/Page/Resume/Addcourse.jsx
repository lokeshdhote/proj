import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Asynceditcourse, Asyncaddcourse } from "../../src/Store/Actions/ResumeAction";

export default function Editcourse({ index, onClose }) {
  const dispatch = useDispatch();
  const { resume } = useSelector((state) => state?.resume);

  const data = resume?.courses[index];

  const [organization, setOrganization] = useState(data?.organization || "");
  const [Trainingprogram, setTrainingprogram] = useState(data?.Trainingprogram || "");
  const [Location, setLocation] = useState(data?.Location || "");
  const [Startdate, setStartdate] = useState(data?.Startdate || "");
  const [enddate, setEnddate] = useState(data?.enddate || "");
  const [Description, setDescription] = useState(data?.Description || "");
  const [error, setError] = useState("");

  // New state for adding new course
  const [newOrganization, setNewOrganization] = useState("");
  const [newTrainingprogram, setNewTrainingprogram] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newStartdate, setNewStartdate] = useState("");
  const [newEnddate, setNewEnddate] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Function to count words in the description
  const countWords = (text) => text.trim().split(/\s+/).length;

  // Handle description input change
  const handleDescriptionChange = (e) => {
    const newDescriptionValue = e.target.value;
    const wordCount = countWords(newDescriptionValue);

    if (wordCount <= 70) {
      setNewDescription(newDescriptionValue);
      setError(""); // Clear the error if within the limit
    } else {
      setError("You can only enter up to 70 words.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (error) return; // Prevent submission if there's an error

    // Update course logic (for editing existing course)
    if (data) {
      const updatedCourse = {
        organization,
        Trainingprogram,
        Location,
        Startdate,
        enddate,
        Description,
      };
      dispatch(Asynceditcourse(data.id, updatedCourse));
    } else {
      // Add new course logic
      const newCourse = {
        organization: newOrganization,
        Trainingprogram: newTrainingprogram,
        Location: newLocation,
        Startdate: newStartdate,
        enddate: newEnddate,
        Description: newDescription,
      };

      // Dispatch action to add the new course to Redux
      dispatch(Asyncaddcourse(newCourse));
    }

    onClose(); // Close the modal after updating or adding
  };

  return (
    <div className="z-[9] flex items-center h-[110vh] justify-center fixed top-0 pt-8 w-full bg-black/30">
      <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="w-[40vw] h-[90vh] py-[5%] pt-0 overflow-y-scroll">
        <div className="min-h-[95vh] mt-8 pb-5 pt-2 px-10 rounded-md w-[100%] bg-white">
          <RiCloseLine size={30} onClick={onClose} className="ml-[65vh] cursor-pointer" color="#1c1c1c9d" />
          <div className="flex items-center justify-center text-[#272727e4] w-full h-5 text-3xl font-bold">
            <h1>{data ? 'Edit Training details' : 'Add New Course'}</h1>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Training Program */}
            <div className="w-full">
              <h1 className="mt-16 text-base font-semibold mb-2 text-[#272727c1]">Training program</h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                value={data ? Trainingprogram : newTrainingprogram}
                onChange={(e) => data ? setTrainingprogram(e.target.value) : setNewTrainingprogram(e.target.value)}
                placeholder="e.g., Analytics"
              />
            </div>

            {/* Organization */}
            <div className="w-full">
              <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">Organization</h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                value={data ? organization : newOrganization}
                onChange={(e) => data ? setOrganization(e.target.value) : setNewOrganization(e.target.value)}
                placeholder="e.g., Operations"
              />
            </div>

            {/* Location */}
            <div className="w-full">
              <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">Location</h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                value={data ? Location : newLocation}
                onChange={(e) => data ? setLocation(e.target.value) : setNewLocation(e.target.value)}
                placeholder="e.g., Mumbai"
              />
            </div>

            {/* Start and End Dates */}
            <div className="mt-10 w-full flex gap-[3vh]">
              <div className="w-[45%]">
                <h1 className="text-base font-semibold mb-2 text-[#272727c1]">Start date</h1>
                <input
                  className="w-full pl-[2vh] text-base text-black outline-sky-300 h-[5vh] border-[1px] border-[#27272748] p-2 rounded-md"
                  type="date"
                  value={data ? Startdate : newStartdate}
                  onChange={(e) => data ? setStartdate(e.target.value) : setNewStartdate(e.target.value)}
                />
              </div>
              <div className="w-[45%]">
                <h1 className="text-base font-semibold mb-2 text-[#272727c1]">End date</h1>
                <input
                  className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  type="date"
                  value={data ? enddate : newEnddate}
                  onChange={(e) => data ? setEnddate(e.target.value) : setNewEnddate(e.target.value)}
                />
              </div>
            </div>

            {/* Description */}
            <div className="w-full">
              <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">Description</h1>
              <textarea
                className="w-full pl-[2vh] h-[19vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                value={data ? Description : newDescription}
                onChange={handleDescriptionChange}
                placeholder="e.g., Add description"
              />
              {error && <div className="text-red-500 mt-2">{error}</div>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-[4vh] py-[1vh] text-base mt-8 font-semibold rounded-md text-white bg-[#008BDC]"
              disabled={error}
            >
              {data ? 'Update' : 'Add'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

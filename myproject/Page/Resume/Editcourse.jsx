import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Asynceditcourse } from "../../src/Store/Actions/ResumeAction";

export default function Editcourse({ index, onClose }) {
  const dispatch = useDispatch();

  const { resume } = useSelector((state) => state?.resume);

  // If editing an existing course, get the course data
  const data = resume?.courses[index];

  // State for input fields
  const [organization, setorganization] = useState(data?.organization || "");
  const [Trainingprogram, setTrainingprogram] = useState(data?.Trainingprogram || "");
  const [Location, setLocation] = useState(data?.Location || "");
  const [Startdate, setStartdate] = useState(data?.Startdate || "");
  const [enddate, setenddate] = useState(data?.enddate || "");
  const [Description, setDescription] = useState(data?.Description || "");
  const [wordCountError, setWordCountError] = useState(false);

  // To track courses list if adding new course
  const [courses, setCourses] = useState(resume?.courses || []);

  // Handle form submission for adding or updating a course
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!wordCountError) {
      const newCourse = {
        organization,
        Trainingprogram,
        Location,
        Startdate,
        enddate,
        Description,
      };

      // If editing an existing course, update it
      if (index !== undefined) {
        const updatedCourses = [...courses];
        updatedCourses[index] = newCourse; // Update the specific course
        setCourses(updatedCourses); // Save the updated list
        dispatch(Asynceditcourse(data.id, newCourse)); // Dispatch update action
      } else {
        // If adding a new course, append it to the list
        setCourses([...courses, newCourse]);
      }

      onClose(); // Close the modal after adding/updating
    }
  };

  // Handle description change and check word count
  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);

    // Count words and check if it exceeds 70 words
    const wordCount = value.trim().split(/\s+/).length;
    setWordCountError(wordCount > 70);  // Set error if word count exceeds 70
  };

  return (
    <div className="z-[9] flex items-center h-[110vh] justify-center fixed top-0 pt-8 w-full bg-black/30">
      <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="w-[40vw] h-[90vh] py-[5%] pt-0 overflow-y-scroll">
        <div className="min-h-[95vh] mt-8 pb-5 pt-2 px-10 rounded-md w-[100%] bg-white">
          <RiCloseLine
            size={30}
            onClick={onClose}
            className="ml-[65vh] cursor-pointer"
            color="#1c1c1c9d"
          />
          <div className="flex items-center justify-center text-[#272727e4] w-full h-5 text-3xl font-bold">
            <h1>{index !== undefined ? 'Edit Training Details' : 'Add New Course'}</h1>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Training Program */}
            <div className="w-full">
              <h1 className="mt-16 text-base font-semibold mb-2 text-[#272727c1]">
                Training Program
              </h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                value={Trainingprogram}
                onChange={(e) => setTrainingprogram(e.target.value)}
                name="Trainingprogram"
                placeholder="eg. Analytics"
              />
            </div>
            {/* Organization */}
            <div className="w-full">
              <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                Organization
              </h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                onChange={(e) => setorganization(e.target.value)}
                name="organization"
                value={organization}
                placeholder="eg. operations"
              />
            </div>
            {/* Location */}
            <div className="w-full">
              <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                Location
              </h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                name="Location"
                value={Location}
                placeholder="eg. Mumbai"
              />
            </div>
            {/* Start and End Date */}
            <div className="mt-10 w-full flex gap-[3vh]">
              <div className="w-[45%]">
                <h1 className="text-base font-semibold mb-2 text-[#272727c1]">
                  Start Date
                </h1>
                <input
                  className="w-full pl-[2vh] text-base text-black outline-sky-300 h-[5vh] border-[1px] border-[#27272748] p-2 rounded-md"
                  type="date"
                  onChange={(e) => setStartdate(e.target.value)}
                  name="Startdate"
                  value={Startdate}
                  placeholder="2020"
                />
              </div>
              <div className="w-[45%]">
                <h1 className="text-base font-semibold mb-2 text-[#272727c1]">
                  End Date
                </h1>
                <input
                  className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  type="date"
                  onChange={(e) => setenddate(e.target.value)}
                  name="enddate"
                  value={enddate}
                  placeholder="2024"
                />
              </div>
            </div>
            {/* Description */}
            <div className="w-full">
              <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                Description
              </h1>
              <textarea
                className="w-full pl-[2vh] h-[19vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                onChange={handleDescriptionChange}
                value={Description}
                name="Description"
                placeholder="eg. Add Description"
              />
            </div>

            {/* Display word count error */}
            {wordCountError && (
              <p className="text-red-500 mt-2 text-sm">
                You can only enter up to 70 words for the description.
              </p>
            )}

            {/* Add/Update button */}
            <button
              type="submit"
              className="px-[4vh] py-[1vh] text-base mt-8 font-semibold rounded-md text-white bg-[#008BDC]"
              disabled={wordCountError}  // Disable the button if word count exceeds 70
            >
              {index !== undefined ? 'Update' : 'Add'} Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

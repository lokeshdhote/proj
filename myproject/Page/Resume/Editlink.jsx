import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Asynceditlink } from "../../src/Store/Actions/ResumeAction";

export default function Editlink({ index, onClose }) {
  const dispatch = useDispatch();
console.log(index);

  // Accessing the resume data from the Redux store
  const { resume } = useSelector((state) => state?.resume);

  // Extracting the specific data for the given index
  const data = resume?.link[index];
const id = data.id;
  // Local state for form inputs, initializing with existing values
  const [Blog, setBlog] = useState(data?.Blog || "");
  const [GitHub, setGitHub] = useState(data?.GitHub || "");
  const [Portfolio, setPortfolio] = useState(data?.Portfolio || "");

  // Handle form submission to update the links
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Dispatch the Redux action to update the data
    await dispatch(Asynceditlink(id, { Blog, GitHub, Portfolio }));

    // Automatically close the modal after saving the changes
    onClose();
  };

  return (
    <div className="z-[9] flex items-center h-[110vh] justify-center fixed top-0 pt-8 w-full bg-black/30">
      <div
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className="w-[40vw] h-[90vh] py-[5%] pt-0 overflow-y-scroll"
      >
        <div className="min-h-[60vh] mt-8 pb-5 pt-2 px-10 rounded-md w-[100%] bg-white">
          {/* Close Button */}
          <RiCloseLine
            size={30}
            onClick={onClose}
            className="ml-[65vh] cursor-pointer"
            color="#1c1c1c9d"
          />

          {/* Title */}
          <div className="flex items-center justify-center text-[#272727e4] w-full h-5 text-3xl font-bold">
            <h1>Edit Work Samples</h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Blog Link Input */}
            <div className="w-full">
              <h1 className="mt-16 text-base font-semibold mb-2 text-[#272727c1]">
                Blog link
              </h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                onChange={(e) => setBlog(e.target.value)}
                name="blog"
                value={Blog}
                placeholder="eg. https://example.com"
              />
            </div>

            {/* GitHub Link Input */}
            <div className="w-full">
              <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                GitHub profile
              </h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                value={GitHub}
                onChange={(e) => setGitHub(e.target.value)}
                name="GitHub"
                placeholder="eg. https://example.com"
              />
            </div>

            {/* Portfolio Link Input */}
            <div className="w-full">
              <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                Play store developer A/c (Portfolio link)
              </h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                onChange={(e) => setPortfolio(e.target.value)}
                name="Portfolio"
                value={Portfolio}
                placeholder="eg. https://example.com/organization"
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
    </div>
  );
}

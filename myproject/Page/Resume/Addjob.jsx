import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Asyncaddjob } from "../../src/Store/Actions/ResumeAction";

export default function Addjob(props) {
  const dispatch = useDispatch();

  const [organization, setorganization] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Profile, setProfile] = useState("");
  const [Location, setLocation] = useState("");
  const [Startdate, setStartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [Description, setDescription] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    dispatch(Asyncaddjob({ Description, Designation, Profile, Location, enddate, Startdate, organization }));
  };

  return (
    <div className="z-[9] flex items-center h-[110vh] justify-center fixed top-0 pt-8 w-full bg-black/30">
      <div style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} className="w-fit h-[90vh] py-[5%] pt-0 overflow-y-scroll">
        <div className="min-h-[95vh] mt-8 pb-5 pt-2 px-10 rounded-md w-[100%] bg-white">
          <RiCloseLine
            size={30}
            onClick={props.onClose}
            className="ml-[50vh] cursor-pointer"
            color="#1c1c1c9d"
          />
          <div className="flex items-center justify-center text-[#272727e4] w-full h-5 text-3xl font-bold">
            <h1>Add job</h1>
          </div>
          <form action="" onSubmit={handleForm}>
            <div className="w-full">
              <h1 className="mt-16 text-base font-semibold mb-2 text-[#272727c1]">Designation</h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                value={Designation}
                onChange={(e) => setDesignation(e.target.value)}
                name="Designation"
                placeholder="eg. Software Engineer"
              />
            </div>
            <div className="w-full">
              <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">Profile</h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                value={Profile}
                onChange={(e) => setProfile(e.target.value)}
                placeholder="eg. Operations"
              />
            </div>
            <div className="w-full">
              <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">Organization</h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                value={organization}
                onChange={(e) => setorganization(e.target.value)}
                name="organization"
                placeholder="eg. Internshala"
              />
            </div>
            <div className="w-full">
              <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">Location</h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                value={Location}
                onChange={(e) => setLocation(e.target.value)}
                name="location"
                placeholder="eg. Mumbai"
              />
            </div>
            <div className="mt-10 w-full flex gap-[3vh]">
              <div className="w-[45%]">
                <h1 className="text-base font-semibold mb-2 text-[#272727c1]">Start date</h1>
                <input
                  className="w-full pl-[2vh] text-base text-black outline-sky-300 h-[5vh] border-[1px] border-[#27272748] p-2 rounded-md"
                  type="date"
                  name="Startdate"
                  value={Startdate}
                  onChange={(e) => setStartdate(e.target.value)}
                  placeholder="2020"
                />
              </div>
              <div className="w-[45%]">
                <h1 className="text-base font-semibold mb-2 text-[#272727c1]">End date</h1>
                <input
                  className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  type="date"
                  name="enddate"
                  value={enddate}
                  onChange={(e) => setenddate(e.target.value)}
                  placeholder="2024"
                />
              </div>
            </div>
            <div className="w-full">
              <h1 className="mt-3 text-base font-semibold mb-2 text-[#272727c1]">Description</h1>
              <textarea
                className="w-full pl-[2vh] h-[15vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="text"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                name="Description"
                placeholder="Add Description"
              ></textarea>
            </div>
            <button
              onClick={props.onClose}
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

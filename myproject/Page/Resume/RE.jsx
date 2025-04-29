import {
  RiArrowLeftLine,
  RiDeleteBin5Line,
  RiPencilLine,
} from "@remixicon/react";
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Education from "./Education";
import Addjob from "./Addjob";
import EditEducation from "./EditEducation";
import Editjob from "./Editjob";
import Addresp from "./Addresp";
import Editresp from "./Editresp";
import Addcourse from "./Addcourse";
import Editcourse from "./Editcourse";
import Addproject from "./Addproject";
import Editproject from "./Editproject";
import Addskill from "./Addskill";
import Editskill from "./Editskill";
import Addlink from "./Addlink";
import Editlink from "./Editlink";
import Addaccom from "./Addaccom";
import Editaccom from "./Editaccom";
import { useDispatch, useSelector } from "react-redux";
import {
  Asyncdeleteaccomplishment,
  Asyncdeletecourse,
  AsyncdeleteEduction,
  Asyncdeletejob,
  Asyncdeletelink,
  Asyncdeleteproject,
  Asyncdeleteresponsibility,
  Asyncdeleteskill,
  asyncResume,
} from "../../src/Store/Actions/ResumeAction";
import DownloadResume from "./ResumePDF";
import ClientPayment from "../ClientPayment";
import Nav from "../../components/Nav/Nav";

const RE = () => {
  const dispatch = useDispatch(); // Get dispatch function
  // const [avtar,setavtar]= useState("")
  const inputTag = useRef("");
  const { resume } = useSelector((state) => state.resume);
  const { freelancer } = useSelector((state) => state?.Auth?.user);

  if (resume) {
    var {
      accomplishments,
      courses,
      job,
      link,
      education,
      internships,
      projects,
      responsibilities,
      skills,
    } = resume;
  }
  console.log(courses);

  useEffect(() => {
    dispatch(asyncResume()); // Fetch resume data for student when component mounts
  }, []);

  const [showEditResume, setShowEditResume] = useState(false);
  const [ShowAvatar, setShowAvatar] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [ShowDropdown, setShowDropdown] = useState(false);

  const [ShowEducation, setShowEducation] = useState(false);
  const [ShowAddJobs, setShowAddJobs] = useState(false);
  const [ShowAddResp, setShowAddResp] = useState(false);
  const [ShowAddCourses, setShowAddCourses] = useState(false);
  const [ShowAddProjects, setShowAddProjects] = useState(false);
  const [ShowAddSkills, setShowAddSkills] = useState(false);
  const [ShowAddLink, setShowAddLink] = useState(false);
  const [ShowAddAccomp, setShowAddAccomp] = useState(false);

  const [ShowEditEducation, setShowEditEducation] = useState(false);
  const [ShowEditJobs, setShowEditJobs] = useState(false);
  const [ShowEditResp, setShowEditResp] = useState(false);
  const [ShowEditCourse, setShowEditCourse] = useState(false);
  const [ShowEditProjects, setShowEditProjects] = useState(false);
  const [ShowEditLink, setShowEditLink] = useState(false);
  const [ShowEditSkills, setShowEditSkills] = useState(false);
  const [ShowEditAccomp, setShowEditAccomp] = useState(false);
  const [ShowDelEducation, setShowDelEducation] = useState(false);

  const handleEditClick = () => {
    setShowEditResume(true); // Show Editresume component when edit is clicked
  };
  const handleCloseClick = () => {
    setShowEditResume(false); // Hide Editresume component when close is clicked
  };

  const openeducation = () => {
    setShowEducation(true); // Show Editresume component when edit is clicked
  };
  const closeeducation = () => {
    setShowEducation(false); // Hide Editresume component when close is clicked
  };

  const openediteducation = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditEducation(true); // Show Editresume component when edit is clicked
  };
  const closeediteducation = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditEducation(false); // Hide Editresume component when close is clicked
  };

  const opendropdown = () => {
    setShowDropdown(true); // Show Editresume component when edit is clicked
  };
  const closedropdown = () => {
    setShowDropdown(false); // Hide Editresume component when close is clicked
  };

  const openjob = () => {
    setShowAddJobs(true); // Show Editresume component when edit is clicked
  };
  const closejob = () => {
    setShowAddJobs(false); // Hide Editresume component when close is clicked
  };

  const openeditjob = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditJobs(true); // Show Editresume component when edit is clicked
  };
  const closeeditjob = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditJobs(false); // Hide Editresume component when close is clicked
  };

  const openresp = () => {
    setShowAddResp(true); // Show Editresume component when edit is clicked
  };
  const closeresp = () => {
    setShowAddResp(false); // Hide Editresume component when close is clicked
  };

  const openeditresp = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditResp(true); // Show Editresume component when edit is clicked
  };
  const closeeditresp = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditResp(false); // Hide Editresume component when close is clicked
  };

  const opencourse = () => {
    setShowAddCourses(true); // Show Editresume component when edit is clicked
  };
  const closecourse = () => {
    setShowAddCourses(false); // Hide Editresume component when close is clicked
  };

  const openeditcourse = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditCourse(true); // Show Editresume component when edit is clicked
  };
  const closeeditcourse = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditCourse(false); // Hide Editresume component when close is clicked
  };

  const openproject = () => {
    setShowAddProjects(true); // Show Editresume component when edit is clicked
  };
  const closeproject = () => {
    setShowAddProjects(false); // Hide Editresume component when close is clicked
  };

  const openeditproject = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditProjects(true); // Show Editresume component when edit is clicked
  };
  const closeeditproject = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditProjects(false); // Hide Editresume component when close is clicked
  };

  const openskill = () => {
    setShowAddSkills(true); // Show Editresume component when edit is clicked
  };
  const closeskill = () => {
    setShowAddSkills(false); // Hide Editresume component when close is clicked
  };

  const openeditskill = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditSkills(true); // Show Editresume component when edit is clicked
  };
  const closeeditskill = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditSkills(false); // Hide Editresume component when close is clicked
  };

  const openlink = () => {
    setShowAddLink(true); // Show Editresume component when edit is clicked
  };
  const closelink = () => {
    setShowAddLink(false); // Hide Editresume component when close is clicked
  };

  const openeditlink = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditLink(true); // Show Editresume component when edit is clicked
  };
  const closeeditlink = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditLink(false); // Hide Editresume component when close is clicked
  };

  const openaccom = () => {
    setShowAddAccomp(true); // Show Editresume component when edit is clicked
  };
  const closeaccom = () => {
    setShowEditAccomp(false); // Hide Editresume component when close is clicked
  };

  const openeditaccom = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditAccomp(true); // Show Editresume component when edit is clicked
  };
  const closeeditaccom = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditAccomp(false); // Hide Editresume component when close is clicked
  };
  //delete fn

  const Deleteedu = (id) => {
    dispatch(AsyncdeleteEduction(id));
  };
  const Deleteskill = (id) => {
    dispatch(Asyncdeleteskill(id));
  };

  const Deletelink = (id) => {
    dispatch(Asyncdeletelink(id));
  };
  const Deletejob = (id) => {
    dispatch(Asyncdeletejob(id));
  };
  const Deletecourse = (id) => {
    dispatch(Asyncdeletecourse(id));
  };
  const Deleteaccom = (id) => {
    dispatch(Asyncdeleteaccomplishment(id));
  };
  const Deleteresp = (id) => {
    dispatch(Asyncdeleteresponsibility(id));
  };
  const Deleteproject = (id) => {
    dispatch(Asyncdeleteproject(id));
  };

  return (
    resume && (
      <>
        {ShowDropdown && <Dropdown onClose={closedropdown} />}
        {ShowEducation && <Education onClose={closeeducation} />}
        {ShowEditEducation && (
          <EditEducation index={editingIndex} onClose={closeediteducation} />
        )}
        {ShowAddJobs && <Addjob onClose={() => setShowAddJobs(false)} />}
        {ShowEditJobs && (
          <Editjob
            index={editingIndex}
            onClose={() => setShowEditJobs(false)}
          />
        )}
        {ShowAddResp && <Addresp onClose={() => setShowAddResp(false)} />}
        {ShowEditResp && (
          <Editresp
            index={editingIndex}
            onClose={() => setShowEditResp(false)}
          />
        )}
        {ShowAddCourses && (
          <Addcourse onClose={() => setShowAddCourses(false)} />
        )}
        {ShowEditCourse && (
          <Editcourse
            index={editingIndex}
            onClose={() => setShowEditCourse(false)}
          />
        )}
        {ShowAddProjects && (
          <Addproject onClose={() => setShowAddProjects(false)} />
        )}
        {ShowEditProjects && (
          <Editproject
            index={editingIndex}
            onClose={() => setShowEditProjects(false)}
          />
        )}
        {ShowAddSkills && <Addskill onClose={() => setShowAddSkills(false)} />}
        {ShowEditSkills && (
          <Editskill
            index={editingIndex}
            onClose={() => setShowEditSkills(false)}
          />
        )}
        {ShowAddLink && <Addlink onClose={() => setShowAddLink(false)} />}
        {ShowEditLink && (
          <Editlink
            index={editingIndex}
            onClose={() => setShowEditLink(false)}
          />
        )}
        {ShowAddAccomp && <Addaccom onClose={() => setShowAddAccomp(false)} />}
        {ShowEditAccomp && (
          <Editaccom
            index={editingIndex}
            onClose={() => setShowEditAccomp(false)}
          />
        )}

<div className='w-screen h-[5vw]' > <Nav /> </div>

<div className="flex items-center justify-center mb-4 ">  <DownloadResume resume={resume} freelancer={freelancer} />
</div>
        <div className="flex mb-[15vh] justify-center items-center w-full ">
          <div className=" w-[60%] max-[600px]:w-full h-full   border-2 rounded-md px-[7vh] py-[5vh] max-[600px]:px-2 max-[600px]:py-2 shadow-lg shadow-gray-400 ">
            <div className=" w-full flex justify-between pr-[10vh] max-[600px]:pr-0 ">
              <div className="pb-[5vh]">
                <h1 className=" flex gap-[5vh] text-3xl capitalize font-semibold   text-[#151515d2]  ">
                  {freelancer?.firstname} {freelancer?.lastname}
                  {/* <RiPencilLine
                  size={25}
                  className="mt-1 cursor-pointer "
                  onClick={handleEditClick}
                  color="#1c1c1c9d" // set custom width and height
                /> */}
                </h1>
                <h1 className="text-base mt-2  text-[#1c1c1c9d]   ">
                  {freelancer?.email}
                </h1>
                <h1 className="text-base mt-2  text-[#1c1c1c9d]   ">
                  {freelancer?.contact}
                </h1>
                <h1 className="text-base mt-2  text-[#1c1c1c9d]   ">
                  {freelancer?.city}
                </h1>
              </div>
              <div className="">
                <div className=" w-[15vh] h-[15vh] border-2 overflow-hidden rounded-full   ">
                  <img
                    className="w-full h-full object-cover "
                    // src={user?.avtar.url}
                    alt=""
                  />
                </div>
                <div
                  className=" cursor-pointer mt-1 text-[#008BDC]  text-2xl font-medium"
                  // onClick={openaddavatar}
                >
                  {/* <input ref={inputTag} type="file" onChange={(e)=>setavtar(e.target.files[0])} className="hidden" /> */}
                  Edit profile picture
                </div>
              </div>
            </div>
            <div className=" flex border-t-2 py-[4vh]   w-full  ">
              <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
                EDUCATION
              </div>
              <div className="w-[60%]">
                {education && education.length > 0 ? (
                  education.map((education, index) => (
                    <div key={index} className="flex">
                      <div className="w-[80%] mb-3">
                        <div className="text-[#151515d0] text-[2.5vh] font-semibold">
                          {education?.degree}
                        </div>
                        <div className="text-[#1515159d] mt-1 text-[2vh] font-medium">
                          {education?.organization}
                        </div>
                        <div className="text-[#1515159d] mt-1 text-[2vh] font-medium">
                          {education?.startyear} - {education?.endyear}
                        </div>
                        <div className="text-[#1515159d] text-[2vh] mt-1 text-2xl font-medium">
                          {education?.grade}
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <RiPencilLine
                          size={20}
                          className="mt-1 cursor-pointer"
                          onClick={() => openediteducation(index)}
                          color="#1c1c1c9d"
                        />
                        <RiDeleteBin5Line
                          size={20}
                          onClick={() => Deleteedu(education.id)}
                          className="mt-1 cursor-pointer"
                          color="#1c1c1c9d"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No education</h1>
                )}

                {education.length < 3 && (
                  <div
                    onClick={openeducation}
                    className="mt-2 text-[#008BDC] text-base font-medium cursor-pointer"
                  >
                    + Add Education
                  </div>
                )}

                {education.length >= 3 && (
                  <div className="mt-2 text-red-500 text-base font-medium">
                    You can only add up to 3 education items.
                  </div>
                )}
              </div>
            </div>
            <div className=" flex border-t-2 py-[4vh]   w-full  ">
              <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
                WORK EXPERIENCE
              </div>
              <div className="w-[60%]">
                {job && job.length > 0 ? (
                  job.map((job, index) => (
                    <div key={index} className="flex">
                      <div className="w-[80%] mb-3">
                        <div className="text-[#151515d0] text-[2.5vh] font-semibold">
                          {job?.Designation}
                        </div>
                        <div className="text-[#1515159d] mt-1 text-[2vh] font-medium">
                          {job?.Location}
                        </div>
                        <div className="text-[#1515159d] mt-1 text-[2vh] font-medium">
                          {job?.organization}
                        </div>
                        <div className="text-[#1515159d] text-[2vh] mt-1 text-2xl font-medium">
                          {job?.Startdate} - {job?.enddate}
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <RiPencilLine
                          size={20}
                          className="mt-1 cursor-pointer"
                          onClick={() => openeditjob(index)}
                          color="#1c1c1c9d"
                        />
                        <RiDeleteBin5Line
                          size={20}
                          onClick={() => Deletejob(job.id)}
                          className="mt-1 cursor-pointer"
                          color="#1c1c1c9d"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No job</h1>
                )}

                {job.length < 3 && (
                  <div className="flex gap-3">
                    <div
                      onClick={openjob}
                      className="mt-2 text-[#008BDC] text-base font-medium"
                    >
                      <div className="cursor-pointer">+ Add Job</div>
                    </div>
                    <div
                      onClick={openjob}
                      className="mt-2 text-[#008BDC] text-base font-medium"
                    >
                      <div className="cursor-pointer">+ Add Internship</div>
                    </div>
                  </div>
                )}

                {job.length >= 3 && (
                  <div className="mt-2 text-red-500 text-base font-medium">
                    You can only add up to 3 jobs (including internships).
                  </div>
                )}
              </div>
            </div>
            <div className=" flex border-t-2 py-[4vh]   w-full  ">
              <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
                POSITIONS OF RESPONSIBILITY
              </div>
              <div className="w-[60%]">
                {responsibilities && responsibilities.length > 0 ? (
                  responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex">
                      <div className="w-[80%] mb-3">
                        <div className="text-[#1515159d] text-[2vh] font-medium">
                          {responsibility?.Description?.slice(0, 50)}{" "}
                          {/* Display only first 50 characters */}
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <RiPencilLine
                          size={20}
                          className="mt-1 cursor-pointer"
                          onClick={() => openeditresp(index)}
                          color="#1c1c1c9d"
                        />
                        <RiDeleteBin5Line
                          size={20}
                          onClick={() => Deleteresp(responsibility.id)}
                          className="mt-1 cursor-pointer"
                          color="#1c1c1c9d"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No responsibilities</h1>
                )}

                {responsibilities.length < 2 && (
                  <div
                    onClick={openresp}
                    className="mt-2 text-[#008BDC] text-base font-medium cursor-pointer"
                  >
                    + Add position of responsibility
                  </div>
                )}

                {responsibilities.length >= 2 && (
                  <div className="mt-2 text-red-500 text-base font-medium">
                    You can only add up to 3 responsibilities.
                  </div>
                )}
              </div>
            </div>
            <div className=" flex border-t-2 py-[4vh]   w-full  ">
              <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
                TRAININGS/ COURSES
              </div>
              <div className="w-[60%]">
                {courses && courses.length > 0 ? (
                  courses.map((course, index) => (
                    <div key={index} className="flex">
                      <div className="w-[80%] mb-5">
                        <div className="text-[#151515d0] text-[2.5vh] font-semibold">
                          {course?.Trainingprogram}
                        </div>
                        <div className="text-[#1515159d] mt-1 text-[2vh] font-medium">
                          {course?.Location}
                        </div>
                        <div className="text-[#1515159d] mt-1 text-[2vh] font-medium">
                          {course?.organization}
                        </div>
                        <div className="text-[#1515159d] text-[2vh] mt-1 text-2xl font-medium">
                          {course?.Startdate} - {course?.enddate}
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <RiPencilLine
                          size={20}
                          className="mt-1 cursor-pointer"
                          onClick={() => openeditcourse(index)}
                          color="#1c1c1c9d"
                        />
                        <RiDeleteBin5Line
                          size={20}
                          onClick={() => Deletecourse(course.id)}
                          className="mt-1 cursor-pointer"
                          color="#1c1c1c9d"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No courses available</h1>
                )}

                {courses.length < 3 && (
                  <div
                    onClick={opencourse}
                    className="mt-2 text-[#008BDC] text-base font-medium cursor-pointer"
                  >
                    + Add training/course
                  </div>
                )}

                {courses.length >= 3 && (
                  <div className="mt-2 text-red-500 text-base font-medium">
                    You can only add up to 3 courses.
                  </div>
                )}
              </div>
            </div>
            <div className=" flex border-t-2 py-[4vh]   w-full  ">
              <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
                ACADEMICS/ <br /> PERSONAL PROJECTS
              </div>
              <div className="w-[60%]">
                {projects && projects.length > 0 ? (
                  projects.map((project, index) => (
                    <div key={index} className="flex">
                      <div className="w-[80%] mb-5">
                        <div className="text-[#151515d0] text-[2.5vh] font-semibold">
                          {project?.title}
                        </div>
                        <div className="text-[#1515159d] mt-1 text-[2vh] font-medium">
                          {project?.Startdate} - {project?.enddate}
                        </div>
                        <div className="text-[#1515159d] mt-1 text-[2vh] font-medium">
                          {project?.Description.slice(0, 50)}{" "}
                          {/* Display only the first 50 characters */}
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <RiPencilLine
                          size={20}
                          className="mt-1 cursor-pointer"
                          onClick={() => openeditproject(index)}
                          color="#1c1c1c9d"
                        />
                        <RiDeleteBin5Line
                          size={20}
                          onClick={() => Deleteproject(project.id)}
                          className="mt-1 cursor-pointer"
                          color="#1c1c1c9d"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No projects</h1>
                )}

                {projects.length < 3 && (
                  <div
                    onClick={openproject}
                    className="mt-2 text-[#008BDC] text-base font-medium cursor-pointer"
                  >
                    + Add academic/personal project
                  </div>
                )}

                {projects.length >= 3 && (
                  <div className="mt-2 text-red-500 text-base font-medium">
                    You can only add up to 3 projects.
                  </div>
                )}
              </div>
            </div>
            <div className=" flex border-t-2 py-[4vh]   w-full  ">
              <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
                SKILLS
              </div>
              <div className="w-[60%]">
                {skills && skills.length > 0 ? (
                  skills.map((skill, index) => (
                    <div key={index} className="flex">
                      <div className="w-[80%] mb-5">
                        <div className="text-[#151515d0] text-[2.5vh] font-semibold">
                          {skill?.skill}
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <RiPencilLine
                          size={20}
                          className="mt-1 cursor-pointer"
                          onClick={() => openeditskill(index)}
                          color="#1c1c1c9d"
                        />
                        <RiDeleteBin5Line
                          size={20}
                          onClick={() => Deleteskill(skill.id)}
                          className="mt-1 cursor-pointer"
                          color="#1c1c1c9d"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No skills</h1>
                )}
                <div
                  onClick={openskill}
                  className="mt-2 text-[#008BDC] text-base font-medium"
                >
                  <div className="cursor-pointer">+ Add skill</div>
                </div>
              </div>
            </div>
            <div className=" flex border-t-2 py-[4vh]   w-full  ">
              <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
                PORTFOLIO/ <br /> WORK SAMPLES
              </div>
              <div className="w-[60%]">
                {link && link.length > 0 ? (
                  link.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="w-[80%] mb-5">
                        <div className="text-[#151515d0] text-[2.5vh] font-semibold">
                          {item?.GitHub}
                        </div>
                        <div className="text-[#1515159d] text-[2vh] font-medium">
                          {item?.Blog}
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <RiPencilLine
                          size={20}
                          className="mt-1 cursor-pointer"
                          onClick={() => openeditlink(index)}
                          color="#1c1c1c9d"
                        />
                        <RiDeleteBin5Line
                          size={20}
                          onClick={() => Deletelink(item.id)}
                          className="mt-1 cursor-pointer"
                          color="#1c1c1c9d"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No links available</h1>
                )}
                <div
                  onClick={openlink}
                  className="mt-2 text-[#008BDC] text-base font-medium"
                >
                  {link.length == 0 ? (
                    <div className="cursor-pointer">
                      + Add portfolio/ work sample
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className=" flex border-t-2 py-[4vh]   w-full  ">
              <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
                ACCOMPLISHMENTS/ <br /> ADDITIONAL DETAILS
              </div>
              <div className="w-[60%]">
                {accomplishments && accomplishments.length > 0 ? (
                  accomplishments.map((accomplishment, index) => (
                    <div key={index} className="flex">
                      <div className="w-[80%] mb-5">
                        <div className="text-[#1515159d] text-[2vh] font-medium">
                          {accomplishment?.Additionaldetails?.slice(0, 70)}
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <RiPencilLine
                          size={20}
                          className="mt-1 cursor-pointer"
                          onClick={() => openeditaccom(index)}
                          color="#1c1c1c9d"
                        />
                        <RiDeleteBin5Line
                          size={20}
                          onClick={() => Deleteaccom(accomplishment.id)}
                          className="mt-1 cursor-pointer"
                          color="#1c1c1c9d"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No accomplishments</h1>
                )}

                <div
                  onClick={openaccom}
                  className="mt-2 text-[#008BDC] text-base font-medium"
                >
                  <div className="cursor-pointer">
                    + Add accomplishment/ additional detail
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <ClientPayment amount={500} />
      </>
    )
  );
};

export default RE;
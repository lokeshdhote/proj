import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Asyncongoing,
  getallOngoningprojects,
} from "../../src/Store/Actions/userAction";
import Nav from "../../components/Nav/Nav";

const OngoingProjects = () => {
  const { projectData } = useSelector((state) => state.user);
  const { role } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (role === "freelancer") {
      dispatch(Asyncongoing());
    } else {
      dispatch(getallOngoningprojects());
    }
  }, []);
  console.log(projectData, 1234);

  // const projectData = [
  //   {
  //     id: 1,
  //     name: "Project 1",
  //     description:
  //       "This is an ongoing projectData focused on improving UI/UX for a better user experience.",
  //   },
  //   {
  //     id: 2,
  //     name: "Project 2",
  //     description:
  //       "This projectData involves integrating a new payment gateway with enhanced security features.",
  //   },
  //   {
  //     id: 3,
  //     name: "Project 3",
  //     description:
  //       "A collaborative projectData with cross-functional teams to implement real-time data tracking.",
  //   },
  //   {
  //     id: 4,
  //     name: "Project 4",
  //     description:
  //       "A collaborative projectData with cross-functional teams to implement real-time data tracking.",
  //   },
  //   // Add more projectData as needed
  // ];

  return (
    <div className="w-screen h-screen overflow-hidden">
      {/* Header Section */}

      <div className="w-screen h-[5vw]">
        {" "}
        <Nav />{" "}
      </div>
      {/* <div className="bg-[#196eaf] py-3 flex items-center  max-md:gap-[26vw]  justify-start gap-[35vw] px-[4vw]">
       
        <NavLink to={"/"}>
          <i className="ri-arrow-left-s-line text-3xl text-white font-[500]"></i>
        </NavLink>
        <h1 className="text-center text-2xl text-white font-semibold">Ongoing Project</h1>
      </div> */}

      {/* Project Cards Section */}
      <div className="w-full h-[41vw] p-5 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center py-6 px-10">
          {projectData?.map((project, index) => (
            <NavLink
              key={index}
              to="/workspace"
              state={{ project }} // Pass individual project data here
              className="bg-gray-200 p-4 px-4 py-5 rounded mb-1 transition-shadow duration-300 ease-in-out hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4">
                Project {index + 1}
              </h3>
              <h3 className="text-xl font-semibold mb-4">{project?.title}</h3>
              <p className="text-gray-600 text-sm">{project?.categories}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;

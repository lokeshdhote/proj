import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Asyncongoingid } from "../../src/Store/Actions/userAction";

const Dashboard = ({ project }) => {
  const dispatch = useDispatch();
  const { freelancer } = useSelector((state) => state?.Auth?.user);
  const { role } = useSelector((state) => state?.Auth);

  // useEffect(() => {
  //   dispatch(Asyncongoingid(project._id))
  // }, [dispatch])

  // const { projects } = useSelector((state) => state?.user?.ongoingProject)
  // console.log(projects);

  console.log(project);

  const user = {
    // name: {freelancer.firstname},
    role: "Software Engineer",
    profilePicture:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww",
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex flex-col">
          {/* Header */}
          <header className="bg-white shadow-md shadow-gray-400 p-4 m-5 flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <img
                src={user?.profilePicture}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-gray-200"
              />
              <div>
                <h1 className="text-xl font-bold">
                  Hello, {freelancer?.firstname} {freelancer?.lastname}
                </h1>
                <p className="text-sm text-gray-500">{role}</p>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-4 py-2 flex-grow overflow-hidden min-h-fit">
            <div className="bg-white shadow-lg p-6 rounded-lg max-h-full">
              {/* Project Title with Client Name */}
              <h2 className="text-xl font-bold">
                {project?.projectName}{" "}
                <span className="text-gray-500">
                  ({project?.client?.firstname} {project?.client?.lastname})
                </span>
              </h2>

              <p className="text-gray-700 mb-4">{project?.description}</p>
              <p className="text-2sm font-medium text-gray-500 mb-2">
                Amount: ₹ {project?.Freelancerbudget}
              </p>
              <p
                className={`font-bold ${
                  project?.paymentStatus === "Completed"
                    ? "text-green-500"
                    : project?.paymentStatus === "In Progress"
                    ? "text-blue-500"
                    : "text-red-500"
                }`}
              >
                Payment Status: {project?.paymentStatus}
              </p>
              <p className="text-gray-600 mt-2">
                {project?.Extrarequirement} Lorem ipsum dolor sit amet.
              </p>
              <p className="font-bold text-gray-600 mt-2">
                Invoice: {project?.invoice}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Start Date: {new Date(project?.createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">
                Deadline: {new Date(project?.deadline).toLocaleDateString()}
              </p>

              {/* Invoice Section */}
              <div className="mt-4 flex gap-4">
                <button className="text-blue-500 hover:text-blue-600">
                  Show Invoice
                </button>
                <button className="text-green-500 hover:text-green-600">
                  Download Invoice
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

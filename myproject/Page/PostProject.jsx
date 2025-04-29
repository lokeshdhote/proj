import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { AyscnClientCreateProject } from "../src/Store/Actions/ClientAction";
import Nav from "../components/Nav/Nav";

const ProjectPostForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [title ,settitle ] = useState("")
  const [skill ,setskill ] = useState([])
  const [organization ,setorganization ] = useState("")
  const [categories , setcategories ] = useState("")
  const [ budget , setbudget ] = useState("")
  const [deadline , setdeadline] = useState("")
  const [language ,setlanguage ] = useState([])
  const [description ,setdescription ] = useState("")
  const [ Extrarequirement, setExtrarequirement] = useState("")
  const [document,setdocument] = useState("")
   




  const handleSubmit = (e) => {
    e.preventDefault();
 
    dispatch(AyscnClientCreateProject({title,deadline,description,organization,budget,language,Extrarequirement,categories,skill}))
    // Handle form submission logic here
    settitle("")
    setExtrarequirement("")
    setbudget("")
    setcategories("")
    setdeadline("")
    setlanguage([])
    setorganization("")
    setskill([])
    setdescription("")
navigate("/")
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className='w-screen h-[5vw]' > <Nav /> </div>
      {/* <div className="bg-[#196eaf] py-3 flex items-center  text-white max-md:gap-[20vw]  justify-start gap-[35vw] px-[4vw]">
        <NavLink to="/">
          <i className="ri-arrow-left-s-line text-3xl"></i>
        </NavLink>
        <h1 className="text-2xl font-semibold">Post a Project</h1>
      </div> */}

      {/* Form */}
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Project Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Project Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter project title"
              required
            />
          </div>

          {/* Skills */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              name="skill"
              value={skill}
              onChange={(e) => setskill(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., React, Node.js"
              required
            />
          </div>

         

          {/* Organizer */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Organizer
            </label>
            <input
              type="text"
              name="organization"
              value={organization}
              onChange={(e) => setorganization(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter organizer name"
              required
            />
          </div>

          {/* Categories */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categories
            </label>
            <input
              type="text"
              name="categories"
              value={categories}
              onChange={(e) => setcategories(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Web Development, Design"
              required
            />
          </div>

          {/* Amount */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              suggested  Amount
            </label>
            <input
              type="number"
              name="budget"
              value={budget}
              onChange={(e) => setbudget(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter budget"
              required
            />
          </div>

          {/* Attach Document */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Attach Document (PDF/DOC)
            </label>
            <input
              type="file"
              name="document"
              onChange={(e) => setdocument(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          {/* Deadline */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              value={deadline}
              onChange={(e) => setdeadline(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Language */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <input
              type="text"
              name="language"
              value={language}
              onChange={(e) => setlanguage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., English, Hindi"
              required
            />
          </div>

        

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              placeholder="Provide a detailed project description"
              required
            ></textarea>
          </div>

          {/* Extra Requirements */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Extra Requirements
            </label>
            <textarea
              name="Extrarequirement"
              value={Extrarequirement}
              onChange={(e) => setExtrarequirement(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              rows="2"
              placeholder="Specify additional requirements (if any)"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#196eaf] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectPostForm;

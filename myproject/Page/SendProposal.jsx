import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Asyncsendproposal } from '../src/Store/Actions/userAction';
import { toast } from 'react-toastify';
import Nav from '../components/Nav/Nav';
// import Nav  from "../components/Nav/Nav.js"
 const SendProposalForm = () => {
  // const navigate = useNavigate()
  const location = useLocation();
  const projects = location.state?.proj;
  console.log(projects);
  
  const {user,loading} = useSelector((state) => state?.Auth);
  const {freelancer }=user
  const {project}= useSelector((state)=>state?.user?.projectid)
  const {msg}= useSelector((state)=>state?.user)


  
  const navigate = useNavigate();
const dispatch = useDispatch()
// const [t ,sett] = useState()
  const [title, setTitle] = useState(projects?.title || "");
  const [email, setEmail] = useState(freelancer?.email|| "");
  const [skills, setSkills] = useState([]);
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [language, setLanguage] = useState([]);
  const [description, setDescription] = useState("");
  const [URL, setURL] = useState("");
  const [proposal , setproposal] =useState("pending")
  const [name, setName] = useState(freelancer?.firstname + " "+ freelancer?.lastname || "");
const[projectid,setprojectid] =useState(projects?._id ||"")
// console.log(msg);

  const [isSkillsDropdownOpen, setIsSkillsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  const skillOptions = [
    "JavaScript", "React", "Node.js", "CSS", "HTML", "TailwindCSS", "Python",
    "Java", "Ruby", "PHP", "TypeScript", "MongoDB", "SQL", "MySQL", "PostgreSQL", 
    "Docker", "AWS", "Kubernetes", "Git", "GraphQL"
  ];

  
  const languageOptions = [
    "English", "Hindi", "Spanish", "French", "German", "Italian", 
    "Chinese", "Japanese", "Russian", "Arabic", "Portuguese", "Bengali", 
    "Punjabi", "Turkish", "Korean", "Vietnamese", "Dutch", "Greek", 
    "Thai", "Swedish", "Polish", "Czech", "Romanian", "Hungarian", 
    "Swahili", "Tamil", "Telugu", "Marathi", "Gujarati", "Malay", 
    "Urdu", "Hebrew", "Finnish", "Norwegian", "Danish", "Ukrainian"
  ];


  // Handle checkbox changes for skills selection
  // const handleSkillChange = (e) => {
  //   const { value } = e.target;
  //   setSkills((prevSkills) => 
  //     prevSkills.includes(value) 
  //       ? prevSkills.filter(skill => skill !== value) 
  //       : [...prevSkills, value]
  //   );
  // };

  const handleLanguageChange = (e) => {
    const { value } = e.target;
    setLanguage((prevLanguage) => 
      prevLanguage.includes(value) 
        ? prevLanguage.filter(language => language !== value) 
        : [...prevLanguage, value]
    );
  };

  // Toggle dropdown visibility
  // const handleDropdownToggle = (dropdown) => {
  //   if (dropdown === 'skills') {
  //     setIsSkillsDropdownOpen(!isSkillsDropdownOpen);
  //     setIsLanguageDropdownOpen(false); // Close language dropdown if skills is opened
  //   } else if (dropdown === 'language') {
  //     setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  //     setIsSkillsDropdownOpen(false); // Close skills dropdown if language is opened
  //   }
  // };

  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    // Validation checks
    
   
    // if (skills.length === 0) formErrors.skills = "At least one skill is required";

    if (!budget) formErrors.budget = "Budget is required";
    if (!deadline) formErrors.deadline = "Deadline is required";
    // if (language.length === 0) formErrors.language = "At least one language is required";
    if (!description) formErrors.description = "Description is required";

   

    // If there are errors, update the state and prevent form submission
    if (Object.keys(formErrors)?.length > 0) {
      console.log("Validation failed:", formErrors);
      setErrors(formErrors);
    } else {
      // console.log("Form values:", { projectid, title, email, skills, categories, budget, deadline, language, description, URL });
      dispatch(Asyncsendproposal({  title, email,name, skills, budget, deadline, language, description, URL,proposal,projectid, }));
      // Reset form fields after successful submission
      setErrors("")
      setTitle("");
      setEmail("");
      // setSkills([]);
   
      setBudget("");
      setDeadline("");
      // setLanguage([]);
      setDescription("");
      setURL("");
      setName("");
      setprojectid("")
      setBudget("");
      toast.success("Proposal send ")
      // Navigate to the home page after form submission
      navigate("/");
    }
  };

  return (
    <div>
      <div className='w-screen h-[5vw]' > <Nav /> </div>
      {/* <div className='bg-[#196eaf] py-2 flex items-center justify-start gap-[35vw] px-[4vw]'>
       
        <NavLink to={"/"}>
          <i className="ri-arrow-left-s-line text-white  text-3xl font-[500]"></i>
        </NavLink>
        <h2 className="text-white text-2xl font-bold  text-center">Send Proposal</h2>
      </div> */}

{/* {loadings ? ("hey"):("no")} */}
      <div className='flex w-[100%] h-[41.5vw] pt-2  '>
        <div className="hidden md:block w-[20%]  h-full   md:w-1/3   ">
          {/* <img
            src="/image.png"
            alt="Proposal Illustration"
            className="h-[80%] w-[80%] object-cover"
          /> */}
          <div class="bg-slate-100 h-full  shadow-lg rounded-lg max-w-3xl w-full p-6">
    {/* <!-- Project Title --> */}
    <h1 class="text-2xl font-bold text-gray-800 mb-4">{projects?.title}</h1>
    
    {/* <!-- Project Overview --> */}
    <div class="mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">Project Overview</h2>
      <p class="text-gray-600">
      {projects?.description}
      </p>
    </div>

    {/* <!-- Project Details --> */}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {/* <!-- Budget --> */}
      <div class="bg-gray-50 p-4 rounded-lg border">
        <h3 class="text-sm font-medium text-gray-600">Suggested Budget</h3>
        <p class="text-lg font-semibold text-gray-800">  {projects?.budget}</p>
      </div>

      {/* <!-- Deadline --> */}
      {/* <div class="bg-gray-50 p-4 rounded-lg border">
        <h3 class="text-sm font-medium text-gray-600">Deadline</h3>
        <p class="text-lg font-semibold text-gray-800">15th Jan 2024</p>
      </div> */}

      {/* <!-- Project Category --> */}
      <div class="bg-gray-50 p-4 rounded-lg border">
        <h3 class="text-sm font-medium text-gray-600">Category</h3>
        <p class="text-lg font-semibold text-gray-800">{projects?.categories}</p>
      </div>

      {/* <!-- Project Type --> */}
      {/* <div class="bg-gray-50 p-4 rounded-lg border">
        <h3 class="text-sm font-medium text-gray-600">Project Type</h3>
        <p class="text-lg font-semibold text-gray-800">One-time</p>
      </div> */}
    </div>

    {/* <!-- Skills Required --> */}
    <div class="mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">Skills Required</h2>
      <div class="flex flex-wrap gap-2">
    
        <span class="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">  {projects?.skill}</span>
        {/* <span class="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">CSS</span>
        <span class="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">JavaScript</span>
        <span class="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">Responsive Design</span>
        <span class="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">UI/UX</span> */}
      </div>
    </div>

    {/* <!-- Call to Action --> */}
    {/* <div class="flex justify-end">
      {/* <button 
        class="bg-blue-500 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
      >
        Apply for Project
      </button> */}
    {/* </div> */} 
  </div>
        </div>

        <div className="w-[80%] mx-auto h-full overflow-auto  p-6 bg-white shadow-md rounded-md">
          <form onSubmit={handleSubmit} className="w-full">
            {/* Project Title */}
            {/* <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Project Title</label>
              <input
                type="text"
                name="title"
                value={projects?.title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              />
            
            </div> */}

            {/* Photo URL */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Photo or Technology URL</label>
              <input
                type="text"
                name="URL"
                value={URL}
                onChange={(e) => setURL(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              />
             
            </div>

            {/* Skill Dropdown */}
            {/* <div className="relative mb-4">
              <label className="block text-sm font-medium mb-2">Skills</label>
              <div
                onClick={() => handleDropdownToggle('skills')} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
              >
                {skills.length > 0 ? skills.join(', ') : "Select your skills"}
              </div>
              {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}
              {isSkillsDropdownOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-auto">
                  <div className="space-y-2">
                    {skillOptions.map((skill, index) => (
                      <div key={index} className="flex pl-4 py-1 items-center">
                        <input
                          type="checkbox"
                          id={skill}
                          value={skill}
                          checked={skills.includes(skill)}
                          onChange={handleSkillChange}
                          className="mr-2"
                        />
                        <label htmlFor={skill} className="text-gray-700">{skill}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div> */}

            {/* Language Dropdown */}
            {/* <div className="relative mb-4">
              <label className="block text-sm font-medium mb-2">Languages</label>
              <div
                onClick={() => handleDropdownToggle('language')} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
              >
                {language.length > 0 ? language.join(', ') : "Select languages"}
              </div>
              {errors.language && <p className="text-red-500 text-sm">{errors.language}</p>}
              {isLanguageDropdownOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-auto">
                  <div className="space-y-2">
                    {languageOptions.map((lang, index) => (
                      <div key={index} className="flex pl-4 py-1 items-center">
                        <input
                          type="checkbox"
                          id={lang}
                          value={lang}
                          checked={language.includes(lang)}
                          onChange={handleLanguageChange}
                          className="mr-2"
                        />
                        <label htmlFor={lang} className="text-gray-700">{lang}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div> */}


            {/* User Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={freelancer?.firstname + " "+ freelancer.lastname}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              />
             
            </div>

            {/* User Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={freelancer?.email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              />
            
            </div>


            <div className="mb-4">
  <label className="block text-sm font-medium mb-2">Budget </label>
  <input
    type="number"
    name="budget"
    value={budget}
    onChange={(e) => setBudget(e.target.value)}
    className="w-full border border-gray-300 rounded p-2"
  />
  {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
</div>
<div className="mb-4">
  <label className="block text-sm font-medium mb-2">Deadline</label>
  <input
    type="date"
    name="deadline"
    value={deadline}
    onChange={(e) => setDeadline(e.target.value)}
    className="w-full border border-gray-300 rounded p-2"
  />
  {errors.deadline && <p className="text-red-500 text-sm">{errors.deadline}</p>}
</div>



            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

            <button type="submit" className="bg-[#196eaf] px-2 text-white p-3 rounded-md">
              Submit Proposal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendProposalForm;

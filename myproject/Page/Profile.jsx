import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AsuncEditProfile,
  AsuncUserProfile,
} from "../src/Store/Actions/userAction";
import Nav from "../components/Nav/Nav";

const Profile = () => {
  const dispatch = useDispatch();
  const { freelancer, client, error } = useSelector(
    (state) => state?.Auth?.user
  );

  const formatDate = (isoString) => {
    if (!isoString) return "";
    return isoString.split("T")[0];
  };
  const [profileimg, setprofileimg] = useState(null);
  const [firstname, setFirstname] = useState(freelancer?.firstname || "");
  const [lastname, setLastname] = useState(freelancer?.lastname || "");
  const [email, setEmail] = useState(freelancer?.email || "");
  const [gender, setGender] = useState(freelancer?.gender || "");
  const [city, setCity] = useState(freelancer?.city || "");
  const [contact, setContact] = useState(freelancer?.contact || "");
  const [dateOfBirth, setDateOfBirth] = useState(
    formatDate(freelancer?.dateOfBirth) || ""
  );
  const [skills, setskills] = useState(freelancer?.skills || []);
  const [langauge, setlangauge] = useState(freelancer?.langauge || []);
  const [bio, setBio] = useState(freelancer?.bio || "");
  const [project, setProject] = useState(freelancer?.project || "");
  const [linkedin, setLinkedin] = useState(freelancer?.linkedin || "");
  const [Github, setGithub] = useState(freelancer?.Github || "");
  const [isEditable, setIsEditable] = useState(false);
  const [isskillsDropdownOpen, setIsskillsDropdownOpen] = useState(false);
  const [islangaugeDropdownOpen, setIslangaugeDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { msg } = useSelector((state) => state?.user);
  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split("T")[0];
  useEffect(() => {
    if (msg) {
      toast.success(msg);
    }
  }, [msg, error]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setprofileimg(file); // Save the file for upload
    }
  };

  useEffect(() => {
    dispatch(AsuncUserProfile()); // API se data fetch
  }, [dispatch, isEditable]); // Add dependencies if required

  const cities = [
    "New Delhi",
    "Mumbai",
    "Bengaluru",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Surat",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Vadodara",
    "Thane",
    "Patna",
    "Agra",
    "Meerut",
    "Kochi",
    "Coimbatore",
    "Madurai",
    "Visakhapatnam",
    "Chandigarh",
    "Bhopal",
  ];

  const skillOptions = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "TailwindCSS",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "TypeScript",
    "MongoDB",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Kubernetes",
    "Git",
    "GraphQL",
  ];

  const langaugeOptions = [
    "English",
    "Hindi",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Chinese",
    "Japanese",
    "Russian",
    "Arabic",
    "Portuguese",
    "Bengali",
    "Punjabi",
    "Turkish",
    "Korean",
    "Vietnamese",
    "Dutch",
    "Greek",
    "Thai",
    "Swedish",
    "Polish",
    "Czech",
    "Romanian",
    "Hungarian",
    "Swahili",
    "Tamil",
    "Telugu",
    "Marathi",
    "Gujarati",
    "Malay",
    "Urdu",
    "Hebrew",
    "Finnish",
    "Norwegian",
    "Danish",
    "Ukrainian",
  ];

  const handleSkillChange = (e) => {
    const { value } = e.target;
    setskills((prevskills) =>
      prevskills.includes(value)
        ? prevskills.filter((skill) => skill !== value)
        : [...prevskills, value]
    );
  };

  const handlelangaugeChange = (e) => {
    const { value } = e.target;
    setlangauge((prevlangauge) =>
      prevlangauge.includes(value)
        ? prevlangauge.filter((langauge) => langauge !== value)
        : [...prevlangauge, value]
    );
  };
  const handleCitySelection = (selectedCity) => {
    setCity(selectedCity);
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleDropdownToggle = (dropdown) => {
    if (dropdown === "skills") {
      setIsskillsDropdownOpen(!isskillsDropdownOpen);
      setIslangaugeDropdownOpen(false); // Close langauge dropdown if skills is opened
    } else if (dropdown === "langauge") {
      setIslangaugeDropdownOpen(!islangaugeDropdownOpen);
      setIsskillsDropdownOpen(false); // Close skills dropdown if langauge is opened
    }
  };

  const toggleEdit = () => {
    if (isEditable) {
      let formErrors = {};

      // Validate fields
      if (skills.length === 0)
        formErrors.skills = "At least one skill is required";
      if (langauge.length === 0)
        formErrors.langauge = "At least one language is required";
      if (!dateOfBirth) formErrors.dateOfBirth = "Date of birth is required";
      if (!city) formErrors.city = "City is required";
      if (!gender) formErrors.gender = "Gender is required";
      if (!firstname) {
        formErrors.firstname = "First name is required";
      } else if (/\s/.test(firstname)) {
        formErrors.firstname = "First name should not contain spaces";
      }
      if (!lastname) {
        formErrors.lastname = "Last name is required";
      } else if (/\s/.test(lastname)) {
        formErrors.lastname = "Last name should not contain spaces";
      }
      const phoneRegex = /^[0-9]{10}$/;
      if (!contact) {
        formErrors.contact = "Contact is required";
      } else if (!phoneRegex.test(contact)) {
        formErrors.contact = "Contact must be a valid 10-digit number";
      }
      if (bio && bio.trim().split(/\s+/).length > 70) {
        formErrors.bio = "Bio must not exceed 70 words";
      }
      if (project && project.trim().split(/\s+/).length > 70) {
        formErrors.project = "Project description must not exceed 70 words";
      }

      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
      } else {
        setErrors({});
        console.log("running");

        const formData = new FormData();
        formData.append("bio", bio);
        formData.append("email", email);
        formData.append("contact", contact);
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("gender", gender);
        formData.append("city", city);
        formData.append("dateOfBirth", dateOfBirth);
        formData.append("linkedin", linkedin);
        formData.append("Github", Github);
        formData.append("profileimg", profileimg);
        formData.append("skills", JSON.stringify(skills));
        formData.append("language", JSON.stringify(langauge));
        // // Append array elements separately
        // skills.forEach((skill) => formData.append("skills", skill));
        //JSON.stringify(langaugeforEach((lang) => formData.append("langauge", lang));
        if (project) formData.append("project", project);

        // console.log(langauge, dets);
        dispatch(AsuncEditProfile(formData));
      }
    }
    setIsEditable((prev) => !prev);
  };

  return (
    <div
      className="w-screen h-screen overflow-x-hidden"
      style={{ backgroundColor: "#C0C8CA" }}
    >
      <div className='w-screen h-[5vw]' > <Nav /> </div>
      {/* <div className="bg-[#196eaf] py-3 flex items-center  text-white max-md:gap-[20vw]  justify-start gap-[35vw] px-[4vw]">
        <NavLink to={"/"}>
          <i className="ri-arrow-left-s-line text-3xl font-[500]"></i>
        </NavLink>
        <h2 className="text-2xl font-semibold text-center text-white">
          Profile
        </h2>
      </div> */}

      <div className="bg-white shadow-md rounded-lg w-screen px-8 py-4 ">
        <div className="flex justify-between items-center border-b pb-4 mb-3">
          <h2 className="text-2xl font-semibold text-gray-800">My Profile</h2>
          <button
            onClick={toggleEdit}
            className={`${
              isEditable ? "bg-green-500" : "bg-blue-500"
            } text-white px-6 py-2 rounded-md hover:bg-opacity-90`}
            style={{ backgroundColor: isEditable ? "#2E4156" : "#196EAF" }}
          >
            {isEditable ? "Update" : "Edit"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[2vw] py-5">
          <div className="col-span-3 flex flex-col justify-center items-center mb-4">
            <div className="relative">
              <img
                className="w-32 h-32  object-contain rounded-full border-2 border-gray-300"
                src={freelancer?.profileimg.url}
                alt="Profile"
              />

              <h6 className="text-center mt-1 text-xl">Profile Photo</h6>
            </div>
            {isEditable && (
              <div>
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  style={{ backgroundColor: "#196EAF" }}
                  onClick={() => document.getElementById("fileInput").click()} // Trigger file input click
                >
                  Choose Photo
                </button>

                {/* Hidden file input */}
                <input
                  name="profile"
                  type="file"
                  id="fileInput"
                  className="hidden"
                  accept="image/*" // Only allow image files
                  onChange={(e) => handleFileChange(e)}

                  // value={profilePhoto} // Handle the file once selected
                />
              </div>
            )}
            <div className="mt-4 flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-6 h-6 ${
                    star <= 4 ? "text-yellow-500" : "text-gray-300"
                  }`} // Static rating of 4 stars
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.75l-6.226 3.832 1.585-7.029-5.564-4.97 7.258-.628L12 2l3.947 6.356 7.258.628-5.564 4.97 1.585 7.029L12 17.75z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>

          {/* Editable Fields */}

          <div className=" ">
            <label className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="Arthur"
              disabled={!isEditable}
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className={`w-full  text-xl h-[2.8vw] placeholder:text-lg  border ${
                isEditable ? "border-blue-300" : "border-gray-300 bg-gray-100"
              } rounded-md p-2`}
            />
            {isEditable
              ? errors.firstname && (
                  <p className="text-red-500  text-3sm pl-4 capitalize ">
                    {errors.firstname}
                  </p>
                )
              : " "}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Nancy"
              disabled={!isEditable}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className={`w-full text-xl h-[2.8vw] placeholder:text-lg border ${
                isEditable ? "border-blue-300" : "border-gray-300 bg-gray-100"
              } rounded-md p-2`}
            />
            {isEditable
              ? errors.lastname && (
                  <p className="text-red-500  text-3sm pl-4 capitalize ">
                    {errors.lastname}
                  </p>
                )
              : ""}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full text-xl h-[2.8vw] placeholder:text-lg border border-gray-300 bg-gray-100 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              UPI Phone Number
            </label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="1234567890"
              disabled={!isEditable}
              className={`w-full text-xl h-[2.8vw] placeholder:text-lg border ${
                isEditable ? "border-blue-300" : "border-gray-300 bg-gray-100"
              } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300`}
            />
            {isEditable
              ? errors.contact && (
                  <p className="text-red-500  text-3sm pl-4 capitalize ">
                    {errors.contact}
                  </p>
                )
              : " "}
          </div>

          <div className="max-md:flex max-md:flex-col">
            <label className="block text-gray-700 font-medium mb-2">City</label>
            <div className="relative">
              {/* Custom Dropdown Button */}
              <input
                type="text"
                value={city}
                onChange={handleChange}
                placeholder="Enter your city"
                disabled={!isEditable}
                className={`w-full text-xl h-10 placeholder:text-lg border ${
                  isEditable ? "border-blue-300" : "border-gray-300 bg-gray-100"
                } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300`}
                onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility on click
              />

              {/* Dropdown list */}
              {isOpen && isEditable && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-md">
                  {cities.map((cityName, index) => (
                    <div
                      key={index}
                      onClick={() => handleCitySelection(cityName)}
                      className="p-2 text-lg hover:bg-blue-100 cursor-pointer"
                    >
                      {cityName}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Error message */}
            {isEditable && errors.city && (
              <p className="text-red-500 text-xs pl-4 capitalize">
                {errors.city}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              disabled={!isEditable}
              className={`w-full  text-xl h-[2.8vw] placeholder:text-lg border ${
                isEditable ? "border-blue-300" : "border-gray-300 bg-gray-100"
              } rounded-md p-2`}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {isEditable
              ? errors.gender && (
                  <p className="text-red-500  text-3sm pl-4 capitalize ">
                    {errors.gender}
                  </p>
                )
              : " "}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              // max={today}
              value={dateOfBirth}
              max={today}
              onChange={(e) => setDateOfBirth(e.target.value)}
              disabled={!isEditable}
              className={`w-full  text-xl h-[2.8vw] placeholder:text-lg border ${
                isEditable ? "border-blue-300" : "border-gray-300 bg-gray-100"
              } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300`}
            />
            {isEditable
              ? errors.dateOfBirth && (
                  <p className="text-red-500  text-3sm pl-4 capitalize ">
                    {errors.dateOfBirth}
                  </p>
                )
              : " "}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              LinkedIn
            </label>
            <input
              type="text"
              placeholder="linkedin.com/in/username"
              disabled={!isEditable}
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className={`w-full  text-xl h-[2.8vw] placeholder:text-lg border ${
                isEditable ? "border-blue-300" : "border-gray-300 bg-gray-100"
              } rounded-md p-2`}
            />
            {isEditable
              ? errors.linkedin && (
                  <p className="text-red-500  text-3sm pl-4 capitalize ">
                    {errors.linkedin}
                  </p>
                )
              : " "}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Github
            </label>
            <input
              type="text"
              placeholder="Github.com/username"
              disabled={!isEditable}
              value={Github}
              onChange={(e) => setGithub(e.target.value)}
              className={`w-full  text-xl h-[2.8vw] placeholder:text-lg border ${
                isEditable ? "border-blue-300" : "border-gray-300 bg-gray-100"
              } rounded-md p-2`}
            />
            {isEditable
              ? errors.Github && (
                  <p className="text-red-500  text-3sm pl-4 capitalize ">
                    {errors.Github}
                  </p>
                )
              : " "}
          </div>

          <div className=" w-[92vw] flex flex-col">
            {freelancer ? (
              <div className="relative mb-4">
                <label className="block  text-gray-700 font-medium mb-2">
                  skills
                </label>
                <div
                  className={`w-full text-lg h-[3vw] placeholder:text-lg bg-gray-100 border ${
                    isEditable
                      ? "border-blue-300"
                      : "border-gray-300 bg-gray-100"
                  } rounded-md p-2`}
                  onClick={() => handleDropdownToggle("skills")}
                >
                  {skills.length === 0 ? (
                    <span className=" text-gray-400">Select skills...</span>
                  ) : (
                    skills.join(", ")
                  )}
                </div>
                {isskillsDropdownOpen && (
                  <div className="absolute z-10 bg-white shadow-md mt-2 w-full rounded-md ">
                    {skillOptions.map((option) => (
                      <label
                        key={option}
                        className=" flex  gap-4  text-xl px-8  py-2"
                      >
                        <input
                          type="checkbox"
                          value={option}
                          checked={skills.includes(option)}
                          onChange={handleSkillChange}
                          disabled={!isEditable}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
                {isEditable
                  ? errors.skills && (
                      <p className="text-red-500  text-3sm pl-4 capitalize ">
                        {errors.skills}
                      </p>
                    )
                  : " "}
              </div>
            ) : (
              ""
            )}

            <div className="relative mb-4">
              <label className="  block text-gray-700 font-medium mb-2">
                langauges
              </label>
              <div
                className={`w-full   border text-lg h-[3vw] placeholder:text-lg bg-gray-100  ${
                  isEditable ? "border-blue-300" : "border-gray-300 bg-gray-100"
                } rounded-md p-2`}
                onClick={() => handleDropdownToggle("langauge")}
              >
                {langauge.length === 0 ? (
                  <span className="text-gray-400">Select langauges...</span>
                ) : (
                  langauge.join(", ")
                )}
              </div>
              {islangaugeDropdownOpen && (
                <div className="absolute z-10 bg-white shadow-md mt-2 w-full rounded-md">
                  {langaugeOptions.map((option) => (
                    <label
                      key={option}
                      className=" flex  gap-4  text-xl px-8  py-2"
                    >
                      <input
                        type="checkbox"
                        value={option}
                        checked={langauge.includes(option)}
                        onChange={handlelangaugeChange}
                        disabled={!isEditable}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {isEditable
                ? errors.langauge && (
                    <p className="text-red-500  text-3sm pl-4 capitalize ">
                      {errors.langauge}
                    </p>
                  )
                : " "}
            </div>
          </div>

          {/* Bio */}
          <div className="col-span-3 ">
            <label className="block text-gray-700 font-medium mb-2">Bio</label>
            <textarea
              placeholder="Write your bio"
              disabled={!isEditable}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className={`w-full text-lg border ${
                isEditable ? "border-blue-300" : "border-gray-300 bg-gray-100"
              } rounded-md p-2`}
              rows="3"
            ></textarea>
            {isEditable
              ? errors.bio && (
                  <p className="text-red-500  text-3sm pl-4 capitalize ">
                    {errors.bio}
                  </p>
                )
              : " "}
          </div>

          <div className="col-span-3">
            <label className="block text-gray-700 font-medium mb-2">
              Project
            </label>
            <textarea
              placeholder="Your project detail ( Best project )"
              disabled={!isEditable}
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className={`w-full text-lg border ${
                isEditable ? "border-blue-300" : "border-gray-300 bg-gray-100"
              } rounded-md p-2`}
              rows="3"
            ></textarea>
            {isEditable
              ? errors.project && (
                  <p className="text-red-500  text-3sm pl-4 capitalize ">
                    {errors.project}
                  </p>
                )
              : " "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

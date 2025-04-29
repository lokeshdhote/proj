import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clientregister, freelancerregister } from "../../src/Store/Actions/AuthAction";

const RegistrationForm = () => {
  const dispatch = useDispatch()

    const location = useLocation();
  const roles = location.state?.role;
  console.log(roles);
  const today = new Date().toISOString().split("T")[0];

  // State for form inputs and errors
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setcontact] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [formErrors, setFormErrors] = useState({});

  const cities = [
    'New Delhi', 'Mumbai', 'Bengaluru', 'Chennai', 'Kolkata',
    'Hyderabad', 'Ahmedabad', 'Pune', 'Surat', 'Jaipur',
    'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Vadodara',
    'Thane', 'Patna', 'Agra', 'Meerut', 'Kochi',
    'Coimbatore', 'Madurai', 'Visakhapatnam', 'Chandigarh', 'Bhopal'
  ];

  const handleCitySelection = (selectedCity) => {
    setCity(selectedCity);
    setIsOpen(false); // Close dropdown after selecting a city
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  // Validation logic for each field
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstname":
        if (!value) error = "First name is required.";
        else if (/\s/.test(value)) error = "Name cannot contain spaces.";
        break;

      case "lastname":
        if (!value) error = "Last name is required.";
        else if (/\s/.test(value)) error = "Name cannot contain spaces.";
        break;

      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value) error = "Email is required.";
        else if (!emailRegex.test(value)) error = "Enter a valid email address.";
        break;

      case "contact":
        const phoneRegex = /^\d{10}$/;
        if (!value) error = "Phone number is required.";
        else if (!phoneRegex.test(value)) error = "Phone number must be 10 digits.";
        break;

      case "password":
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,14}$/;
        if (!value) error = "Password is required.";
        else if (!passwordRegex.test(value))
          error =
            "Password must include at least one uppercase, one lowercase, one digit, one special character, and max 14 characters.";
        break;

      case "dateOfBirth":
        if (!value) error = "Date of Birth is required.";
        break;

      case "gender":
        if (!value) error = "Gender is required.";
        break;

      case "github":
        if (!value) error = "GitHub is required.";
        break;

      case "linkedin":
        if (!value) error = "LinkedIn is required.";
        break;

      case "city":
        if (!value) error = "City is required.";
        break;

      default:
        break;
    }

    return error;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update corresponding state value
    switch (name) {
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "contact":
        setcontact(value);
        break;
      case "dateOfBirth":
        setDateOfBirth(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "github":
        setGithub(value);
        break;
      case "linkedin":
        setLinkedin(value);
        break;
      case "city":
        setCity(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }

    // Validate the current field and set the errors
    const error = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const errors = {
      firstname: validateField("firstname", firstname),
      lastname: validateField("lastname", lastname),
      email: validateField("email", email),
      contact: validateField("contact", contact),
      dateOfBirth: validateField("dateOfBirth", dateOfBirth),
      gender: validateField("gender", gender),
      city: validateField("city", city),
      password: validateField("password", password),
    };

    setFormErrors(errors);

    // Check if there are any errors
    const hasErrors = Object.values(errors).some((error) => error);
    if (!hasErrors) {
      console.log("Form Submitted:", {
        firstname,
        lastname,
        email,
        contact,
        dateOfBirth,
        gender,
        city,
        password,
      });

      if(roles==="Freelancer"){
        dispatch(freelancerregister({firstname,
          lastname,
          email,
          contact,
          dateOfBirth,
          gender,
          city,
          password}))
      }
 
      else{
        dispatch(clientregister({firstname,
          lastname,
          email,
          contact,
          dateOfBirth,
          gender,
          city,
          password}))

      }
      setFirstname("");
      setLastname("");
      setEmail("");
      setcontact("");
      setDateOfBirth("");
      setGender("");
      setLinkedin("");
      setGithub("");
      setCity("");
      setPassword("");
      setFormErrors({});
      alert("Registration Successful!");
    }
  };

  return (
    <div className="w-screen max-md:h-full h-screen bg-white">
     <div className='bg-[#196eaf] py-3 flex items-center  max-md:gap-[26vw]  justify-start gap-[35vw] px-[4vw]' >
        {/* Back to Home arrow */}
        <NavLink to={"/"}>
          <i className="ri-arrow-left-s-line text-3xl text-white font-[500]"></i>
        </NavLink>
        <h1 className='text-center text-white text-2xl max-md:text-base ml-28 max-md:ml-1 font-semibold'>{roles}  Sign Up</h1>
      </div>

      <div className="flex max-md:flex-col max-md:items-start max-md:justify-start justify-center items-center max-md:h-full  h-[41.2vw]">
        <div className="w-[20%] max-md:w-full h-full  bg-zinc-100 max-md:bg-white flex flex-col items-center py-4 justify-center max-md:border-r-3px to-blue-300">
          <div className="w-[200px] h-[200px] rounded-full  ">
            <img src="/bg.png" alt="" />
          </div>
        </div>

        <div className="w-[80%] max-md:w-full h-full mt-3 px-8 max-md:px-5 py-5 bg-white max-md:bg-none  overflow-hidden">
          {/* <h2 className="text-2xl font-semibold mb-6 text-center">  Sign Up</h2> */}
          <form onSubmit={handleSubmit} className="flex space-x-2     flex-col  ">
            {/* Row 1: First Name, Last Name, Email */}
            <div className="flex max-md:flex-col justify-between mb-4 gap-4 ">
              <div className="w-full mb-3">
                <label className="block text-lg max-md:text-base font-medium mb-2 text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={handleChange}
                  className={`w-full p-3 border ${formErrors.firstname ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring focus:ring-blue-400`}
                  placeholder="Enter First Name"
                />
                {formErrors.firstname && (
                  <p className="text-red-500 text-sm">{formErrors.firstname}</p>
                )}
              </div>

              <div className="w-full">
                <label className="block  text-lg font-medium mb-2 text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={handleChange}
                  className={`w-full p-3 border ${formErrors.lastname ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
                  placeholder="Enter Last Name"
                />
                {formErrors.lastname && (
                  <p className="text-red-500 text-sm">{formErrors.lastname}</p>
                )}
              </div>

              <div className="w-full">
                <label className="block  text-lg text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className={`w-full p-3 border ${formErrors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
                  placeholder="Enter Email"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>
            </div>

            {/* Row 2: Phone Number, Date of Birth */}
            <div className="flex max-md:flex-col justify-between gap-4 mb-4">
              <div className="w-full">
                <label className="block   text-lg max-md:text-base font-medium mb-2 text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="contact"
                  value={contact}
                  onChange={handleChange}
                  className={`w-full p-3 border ${formErrors.contact ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
                  placeholder="Enter Phone Number"
                />
                {formErrors.contact && (
                  <p className="text-red-500 text-sm">{formErrors.contact}</p>
                )}
              </div>

              <div className="w-full">
                <label className="block  text-lg  font-medium mb-2 max-md:mt-4 text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={dateOfBirth}
                  onChange={handleChange}
                  max={today}
                  className={`w-full p-3 border ${formErrors.dateOfBirth ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
                  placeholder="Enter Date of Birth"
                />
                {formErrors.dateOfBirth && (
                  <p className="text-red-500 text-sm">{formErrors.dateOfBirth}</p>
                )}
              </div>
              <div className="w-full">
                <label className="block  text-lg text-gray-700 max-md:mt-4 font-medium mb-2">Gender</label>
                <select
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                  className={`w-full p-3 border ${formErrors.gender ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {formErrors.gender && (
                  <p className="text-red-500 text-sm">{formErrors.gender}</p>
                )}
              </div>
            </div>

            {/* Row 3: Gender, LinkedIn */}
           {
            roles==="Freelancer"? ( <div className="flex justify-between gap-4 mb-4">
            

              <div className="w-full">
                <label className="block text-gray-600">LinkedIn</label>
                <input
                  type="text"
                  name="linkedin"
                  value={linkedin}
                  onChange={handleChange}
                  className={`w-full p-3 border ${formErrors.linkedin ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
                  placeholder="Enter LinkedIn URL"
                />
                {formErrors.linkedin && (
                  <p className="text-red-500 text-sm">{formErrors.linkedin}</p>
                )}
              </div>
              <div className="w-full">
                <label className="block text-gray-600">GitHub</label>
                <input
                  type="text"
                  name="github"
                  value={github}
                  onChange={handleChange}
                  className={`w-full p-3 border ${formErrors.github ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
                  placeholder="Enter GitHub URL"
                />
                {formErrors.github && (
                  <p className="text-red-500 text-sm">{formErrors.github}</p>
                )}
              </div>
            </div>):(<div className="mb-8" ></div>)
           }

            {/* Row 4: GitHub, City */}
            <div className="flex max-md:flex-col justify-between gap-4 mb-4">
              

            <div className="w-full  max-md:flex-col">
      <label className="block  text-lg text-gray-700 font-medium mb-2">City</label>
      <div className="relative">
        {/* Custom Dropdown Button */}
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Select your city"
          className={`w-full h-12  p-3 border ${formErrors.city ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300`}
          onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility on click
        />

        {/* Dropdown list */}
        {isOpen && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-[10vw] overflow-auto shadow-md">
            {cities.map((cityName, index) => (
              <div
                key={index}
                onClick={() => handleCitySelection(cityName)}
                className="w-full text-lg h-12 placeholder:text-lg border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                {cityName}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Error message */}
      {formErrors.city && (
        <p className="text-red-500 text-xs pl-4 capitalize">{formErrors.city}</p>
      )}
    </div>

              
              <div className="w-full">
              <label className="block  text-lg font-medium mb-2 text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className={`w-full p-3 border ${formErrors.password ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
                placeholder="Enter Password"
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm">{formErrors.password}</p>
              )}
            </div>

            </div>

            {/* Row 5: Password */}
          
          <div  className="flex  items-center justify-center">
          <button
              type="submit"
              className="mt-4 w-fit px-10 bg-[#196eaf] text-white py-3 rounded-lg"
            >
              Register
            </button>

          </div>

           
          </form>
          <p className="text-center mt-2">
          Already have an account ? <NavLink 
           state={{ role: roles }}
           to="/login ">Login</NavLink>
</p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

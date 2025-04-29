import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import {
  AyscnuserLoggedIn,
  AysncuserSignout,
} from "../../src/Store/Actions/userAction";
import { CircularProgress } from "@mui/material";
import { AysncClientSignout } from "../../src/Store/Actions/ClientAction";
import {
  clientSignOut,
  freelancerSignOut,
} from "../../src/Store/Actions/AuthAction";
import { toast } from "react-toastify";
import { clearError, clearMessage } from "../../src/Store/Reducers/AuthReducer";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const { Client } = useSelector((state) => state?.Client);
  const { isAuthenticated,user ,loading, message, error, role } = useSelector((state) => state?.Auth);
  // console.log(user);


  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [message, error, isAuthenticated,dispatch,loading]);
  // console.log(role +isAuthenticated );

  // const handleUnauthorizedNavigation = (e) => {
  //   if (!user?.token && !Client?.token) {
  //     e.preventDefault(); // Prevent default navigation behavior
  //     navigate("/login"); // Redirect to login
  //   }
  // };

  const signout = () => {
    setDropdownOpen(false);
    console.log(role);

    if (role === "client") dispatch(clientSignOut());

    if (role === "freelancer") dispatch(freelancerSignOut());

    navigate("/");
  };

  useEffect(() => {
    // dispatch(AyscnuserLoggedIn());
    // dispatch(AyscnClientLoggedIn());
    // if (user?.token) {
    //   dispatch(AyscnuserLoggedIn());
    // }
    // if (Client?.token) {
    //   dispatch(AyscnClientLoggedIn());
    // }
  }, []);

  return (
    <>
      <div className="h-[5vw] fixed w-full max-md:w-fit py-3 max-md:py-5 bg-white text-black  flex items-center justify-between gap-[5vw] max-md:gap-[4vw] px-[2vw]  max-md:px-1 z-40">
        {/* Logo */}
        <NavLink to={"/"}>
          <img
            className="object-contain h-[90px] max-md:w-[8vw]"
            src="/bg.png"
            alt="Logo"
          />
        </NavLink>

        {/* Navigation Links */}
        <div className="flex gap-11 max-md:gap-2 w-fit items-center max-md:items-start max-md:justify-start justify-center">
          <NavLink
            to={"/"}
            className=" capitalize font-semibold text-[18px] max-md:text-[9px]"
          >
            Home
          </NavLink>
          {role === "client" ? (
           
           <>
            <NavLink
              to={"/find-freelancers"}
              className=" capitalize font-semibold text-[18px] max-md:text-[9px]"
            >
               Find Freelancers
            </NavLink>
            <NavLink
              to={"/viewprojects"}
              className=" capitalize font-semibold text-[18px] max-md:text-[9px]"
            >
              View Projects
            </NavLink>
           </>
            
          ) : role === "freelancer" ? (
            <NavLink
              to={"/findproject"}
              className=" capitalize font-semibold text-[18px] max-md:text-[9px]"
            >
              Find Projects
            </NavLink>
          ) : (
            <>
              <NavLink
                to={"/findproject"}
                className=" capitalize font-semibold text-[18px] max-md:text-[9px]"
              >
                Find Projects
              </NavLink>
              <NavLink
                to={"/find-freelancers"}
                className=" capitalize font-semibold text-[18px] max-md:text-[9px]"
              >
                Find Freelancers
              </NavLink>
            </>
          )}
          <NavLink
            to={"/ongoing-projects"}
            className=" capitalize font-semibold text-[18px] max-md:text-[9px]"
          >
          ongoing projects
          </NavLink>
          <NavLink
            to={"/contact"}
            className=" capitalize font-semibold text-[18px] max-md:text-[9px]"
          >
            Contact
          </NavLink>
        </div>

        {/* Actions Section */}
        {loading ? (
          <CircularProgress />
        ) : (
          <div className="flex gap-8 items-center">
            {/* Sign-Up/Log-In */}
            {!isAuthenticated && (
              <NavLink
                to={"/login"}
                className="bg-[#196eaf] justify-center items-center max-md:text-[4px] text-sm hover:bg-[#44a4ed] text-white font-semibold py-3 px-11 max-md:py-1 max-md:px-2 border-blue-600 rounded-xl shadow ease-in duration-150"
              >
                SIGN UP / LOG IN
              </NavLink>
            )}

            {/* Post a Project */}
            {role == "client" && (
              <NavLink
                to={"/Post"}
                className="bg-[#196eaf] max-md:text-[4px] flex gap-4 items-center justify-center hover:bg-[#44a4ed] text-sm text-white font-bold py-3 max-md:py-1 px-8 border border-blue-600 max-md:px-2 rounded-xl ease-in duration-150"
              >
                Post a Project
                <img className="h-5 max-md:h-3" src="job.png" alt="Job Icon" />
              </NavLink>
            )}

            {isAuthenticated ? (
              <>
                {/* Notifications and Messages */}
                <div className="flex gap-5 items-center">
                  <NavLink to={"/notification"}>
                    <i className="ri-notification-line text-2xl"></i>
                  </NavLink>
                  <NavLink to={"/communtiy"}>
                    <i className="ri-message-2-line text-2xl"></i>
                  </NavLink>
                </div>

                {/* Profile Dropdown */}
                <div className="relative">
                  <div
                    className="w-[2.5vw] h-[2.5vw] border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg"
                    onClick={toggleDropdown}
                  >
                    <i className="ri-user-line"></i>
                  </div>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md w-44">
                      <NavLink
                        to={"/profile"}
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md transition-all"
                      >
                        <i className="ri-user-line"></i> Profile
                      </NavLink>
                     
                      {/* <NavLink
                        to={"/settings"}
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md transition-all"
                      >
                        <i className="ri-settings-3-line"></i> Settings
                      </NavLink> */}
                     {role==="freelancer" ? 
                      <>
                      <NavLink
                      to={"/resume"}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md transition-all"
                    >
                      <i className="ri-file-text-line"></i> Resume
                    </NavLink>
                    <NavLink
                      to={"/skilltest"}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md transition-all"
                    >
                      <i className="ri-file-text-line"></i> skill Test
                    </NavLink>
                      <NavLink
                      to={"/previous"}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md transition-all"
                    >
                      <i className="ri-file-text-line"></i> previous
                    </NavLink>
                   
                    <NavLink
                      to={"/anlayzer"}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md transition-all"
                    >
                      <i className="ri-file-text-line"></i> Analyze
                    </NavLink>
                     <NavLink
                     to={"/wallet"}
                     className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md transition-all"
                   >
                     <i className="ri-wallet-line"></i> Wallet
                   </NavLink></>
                      :" "}
                      <NavLink
                        to={"/help"}
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md transition-all"
                      >
                       <i class="ri-service-fill"></i> help
                      </NavLink>
                      <button
                        onClick={signout}
                        className="flex items-center gap-3 w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-md transition-all"
                      >
                        <i className="ri-logout-box-line"></i> Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;

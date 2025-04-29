import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Chat = ({project}) => {
  const { freelancer } = useSelector((state) => state?.Auth?.user)
  const { role } = useSelector((state) => state?.Auth)


  return (
   <div>
     <h2 className="text-2xl font-semibold mb-3">Conversation</h2>

<div className="h-[33vw] flex flex-col items-center justify-center py-4 px-5">
  {/* Welcome Section */}
  <div className="mb-4 w-full max-w-4xl">
    <h3 className="text-4xl font-semibold text-gray-800 mb-4">Welcome, {freelancer?.firstname} {freelancer?.lastname} !</h3>
    <p className="text-lg text-gray-600 mb-4">
      We are glad to have you here. You can use this platform to communicate with clients or team members through messages or video calls.
    </p>
  </div>

  {/* Video Call Section */}
  <div className="bg-white p-6 rounded-lg shadow-md mb-5 w-full max-w-4xl">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Video Calls</h3>
    <div className="flex justify-between items-center">
      <p className="text-gray-600 flex-1 mr-4">
        Initiate a video call with the { !role==="freelancer" ? "freelancer":"client" } .
      </p>

      <NavLink 
         key={project?._id}
         state={{project}}
          to={"/video"}>   
          <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-all duration-300 shadow-md">

        Start Video Call
      </button>
      </NavLink>
   
    </div>
  </div>

  {/* Messaging Section */}
  <div className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-4xl">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Messaging</h3>
    <div className="flex justify-between items-center">
      <p className="text-gray-600 flex-1 mr-4">
        Chat with the { !role==="freelancer" ? "freelancer":"client" } .
      </p>
   <NavLink 
   key={project?._id}
   state={{project}}
    to={"/message"}>
   <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-all duration-300 shadow-md">
        Open Chat
      </button>
   </NavLink>
    </div>
  </div>

</div>
   </div>
  );
}

export default Chat;

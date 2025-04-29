import React from "react";
import Nav from "../components/Nav/Nav.jsx"
import { NavLink } from "react-router-dom";


const  Message = () => {
    
    return(
        <div className="bg-gray-100 w-screen  h-screen  ">
            {/* <Nav/> */}
            <div className='w-screen h-[5vw]' > <Nav /> </div>

        {/* Main Container */}
        <div className=" w-screen min-h-screen flex items-center justify-center  py-[4vw]">
          
          <div className=" px-[4vw]  py-[4vw] " >
             <div className="text-center">
              <h1 className="text-center text-3xl font-bold mb-4">Welcome to the Chat Room!</h1>
              <p className="text-center mb-4">Click the button below to start chatting with other freelancers.</p>
              <button
               
                className="text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Start Chat
              </button>
            </div>
            </div>
        
        </div>
      </div>
    )
}
export default Message;
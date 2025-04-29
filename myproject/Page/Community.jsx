import React, { useState, useEffect, useRef } from "react";
import Nav from "../components/Nav/Nav"
const Community = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    // Prompt user to enter their name when they join
    // const user = prompt("Enter your name:");
    // setUsername(user || "Anonymous");

    // Connect to the WebSocket server
    socketRef.current = new WebSocket("ws://localhost:5000");

    // Listen for incoming messages
    socketRef.current.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return () => {
      // Clean up on component unmount
      socketRef.current.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      const newMessage = {
        name: username,
        text: input,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      // Send the message via WebSocket
      socketRef.current.send(JSON.stringify(newMessage));
      setInput(""); // Clear the input field
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Chat Header */}
      {/* <NavLink    to={"/"} > <i class="ri-arrow-left-s-line  text-3xl font-[500]"> </i> </NavLink>  */}

      <div className='w-screen h-[5vw]' > <Nav /> </div>
      {/* <header className="bg-[#196eaf] text-white text-lg text-center justify-center  font-medium py-4 px-6 shadow">
        Community Chat Room
      </header> */}

      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-md shadow-sm max-w-lg ${
                message.name === username
                  ? "bg-indigo-100 self-end text-right"
                  : "bg-white self-start text-left"
              }`}
            >
              <p className="font-medium text-indigo-700">{message.name}</p>
              <p className="text-gray-800">{message.text}</p>
              <p className="text-xs text-gray-500 mt-1">{message.time}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-10">
            No messages yet. Start the conversation!
          </p>
        )}
      </div>

      {/* Message Input */}
      <div className="flex items-center p-4 bg-white shadow-md border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow h-12 px-4 rounded-l-md border focus:outline-none focus:ring focus:ring-indigo-300"
        />
        <button
          onClick={handleSendMessage}
          className="bg-[#196eaf] text-white px-5 max-md:px-5 h-12 rounded-r-md hover:bg-indigo-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Community;

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ChatSlider from "../Chat/ChatSlider";
import ChatArea from "../Chat/ChatArea";
import { io } from "socket.io-client";
import { asyncFetchMessages } from "../../src/Store/Actions/MessageAction";

const socket = io.connect("http://localhost:3000");

const ChatBox = () => {
  const dispatch = useDispatch();
  const users = Array.from({ length: 5 }).map((_, index) => `User${index + 1}`);
  // const { msges, loading = false, error = null } = useSelector((state) => state?.messages || {});
  const { msges, loading, error } = useSelector((state) => state.message);

  // const { msges, loading, error } = useSelector((state) => state?.messages); // Destructure 'messages'
  console.log(msges + "msg"); // Check the structure of your messages

  const [selectedUser, setSelectedUser] = React.useState(null);
  console.log(selectedUser);

  useEffect(() => {
    if (selectedUser) {
      socket.emit("join_room", selectedUser); // Join the selected user’s chat room
      dispatch(asyncFetchMessages(selectedUser)); // Fetch messages for this user
    }
  }, [selectedUser]);

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-[#196EAF] text-white py-3 flex items-center justify-start gap-[35vw] px-[4vw]">
        <NavLink to={"/"}>
          <i className="ri-arrow-left-s-line text-3xl font-[500]"></i>
        </NavLink>
        <h1 className="text-center text-2xl font-bold">Chat Box</h1>
      </div>

      <div className="flex flex-1">
        <ChatSlider
          users={users} // Replace with dynamic user list if needed
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <ChatArea
          socket={socket}
          selectedUser={selectedUser}
          msges={msges} // Pass messages as a prop
          loading={loading} // Pass loading state
          error={error} // Pass error state if necessary
        />
      </div>
    </div>
  );
};

export default ChatBox;

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchMessages, asyncSendMessage } from "../../src/Store/Actions/MessageAction";

const ChatArea = ({ socket,msges,users, selectedUser, }) => {
  const { loading} = useSelector((state) => state?.message);
  console.log(msges,569);
  
  const { freelancer, role, client } = useSelector((state) => state?.Auth?.user);
// console.log(message.sender === (role === "freelancer" ? freelancer._id : client._id));

  const inputRef = useRef(null);
  const dispatch = useDispatch();
useEffect(()=>{

},[dispatch,msges])
  const handleSendMessage = () => {
    if (inputRef.current.value.trim() && selectedUser) {
      const messageData = {
        sender: role === "freelancer" ? freelancer._id : client._id,
        receiver: users?._id,
        chatRoom: selectedUser,
        content: inputRef.current.value,
        type: "text",
      };

      // Emit socket event
      socket.emit("send_message", messageData);

      // Dispatch Redux action
      dispatch(asyncFetchMessages(selectedUser)); // Fetch messages for this user

      inputRef.current.value = "";
    }
  };

  if (!selectedUser) {
    return (
      <div className="w-3/4 flex flex-col gap-4 items-center justify-center h-full bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-500">
          Welcome to the Chat Room!
        </h2>
        <p className="text-center mb-4">Click the user and start chat with user.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-3/4 h-[41.7vw] overflow-hidden">
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {loading ? (
          <p>Loading...</p>
        ) : (
          Array.isArray(msges) && msges?.length > 0 ? (
            msges?.map((message, index) => (
              <div
                key={index}
                className={`mb-4 text-left ${
                  message.sender !== (role === "freelancer" ? freelancer._id : client._id)
                    ? "text-left"
                    : "text-right"
                }`}
              >
                <div
                  className={`p-2 inline-block rounded-md ${
                    message.sender === (role === "freelancer" ? freelancer._id : client._id)
                      ? "bg-blue-100"
                      : "bg-green-100"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))
          ) : (
            <p>No messages found.</p>
          )
        )}
      </div>

      <div className="p-4 bg-gray-200 border-t border-gray-300 flex items-center gap-2">
        <input
          type="text"
          placeholder={`Message ${selectedUser}...`}
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatArea;

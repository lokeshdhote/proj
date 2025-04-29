import React from "react";

const ChatSlider = ({ users, selectedUser, setSelectedUser }) => {
    
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="w-1/4 bg-gray-100 border-r border-gray-300">
      <div className="p-4 text-lg font-semibold border-b border-gray-300">Chats</div>
      <div className="h-[37vw] w-full overflow-y-auto">
        <ul>
          {users.map((user, index) => (
            <div
              key={index}
              onClick={() => handleUserClick(user)}
              className={`flex items-center gap-[3vw] py-3 px-8 hover:bg-gray-200 cursor-pointer border-b border-gray-300 ${
                selectedUser === user ? "bg-gray-200 font-bold" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-red-200"> </div>
              {user}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatSlider;


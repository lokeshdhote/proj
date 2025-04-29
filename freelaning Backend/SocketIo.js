const { Server } = require("socket.io");
const Message = require("./models/MessageModel");

const setupSocketHandlers = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);

    let currentUser = null;

    // Handle user login (for example, after successful authentication)
    socket.on("login", (userId) => {
      currentUser = userId;
      console.log(`User ${userId} logged in with socket ID: ${socket.id}`);
    });

    // Join a chat room
    socket.on("join_room", (roomId) => {
      if (!currentUser) {
        console.log("User not logged in yet.");
        return;
      }

      socket.join(roomId);
      console.log(`User ${currentUser} joined room ${roomId}`);
    });

    // Handle new message
    socket.on("send_message", async (messageData) => {
      try {
        console.log(messageData + "socket");

        const message = new Message(messageData);
        await message.save();

        // Broadcast the message to the specific room
        io.to(messageData.chatRoom).emit("receive_message", message);
      } catch (error) {
        console.error("Error saving message:", error);
        socket.emit("error", { message: "Error saving message" });
      }
    });

    // Handle message update
    socket.on("update_message", async ({ messageId, content }) => {
      try {
        const message = await Message.findByIdAndUpdate(
          messageId,
          { content },
          { new: true }
        );
        if (message) {
          io.to(message.chatRoom).emit("message_updated", message);
        }
      } catch (error) {
        console.error("Error updating message:", error);
        socket.emit("error", { message: "Error updating message" });
      }
    });

    // Handle message deletion
    socket.on("delete_message", async (messageId) => {
      try {
        const message = await Message.findByIdAndDelete(messageId);
        if (message) {
          io.to(message.chatRoom).emit("message_deleted", messageId);
        }
      } catch (error) {
        console.error("Error deleting message:", error);
        socket.emit("error", { message: "Error deleting message" });
      }
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
      if (currentUser) {
        console.log(`User ${currentUser} disconnected.`);
        // You can also handle user logout or remove the user from the active user list if needed.
      }
    });
  });
};

module.exports = setupSocketHandlers;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false, // Manage loading state
  message: null, // Success message
  error: null, // Error message
};

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    messageRequest: (state) => {
      state.loading = true; // Set loading state to true
      state.message = null; // Clear any previous success message
      state.error = null; // Clear any previous error
    },
    setMessages: (state, action) => {
      console.log(action.payload.messages, 896);

      state.msges = action.payload.messages; // Set the fetched messages
      state.loading = false; // Set loading state to false
    },
    addMessage: (state, action) => {
      state.msges.push(action.payload); // Add new message to the state
      state.loading = false; // Set loading state to false
    },
    updateMessage: (state, action) => {
      const index = state.msges.findIndex(
        (msg) => msg._id === action.payload._id
      );
      if (index !== -1) {
        state.msges[index] = action.payload; // Update the specific message
      }
      state.loading = false; // Set loading state to false
    },
    deleteMessage: (state, action) => {
      state.msges = state.msges.filter((msg) => msg._id !== action.payload); // Remove the deleted message
      state.loading = false; // Set loading state to false
    },
    setMessageError: (state, action) => {
      state.error = action.payload; // Store error
      state.loading = false; // Set loading state to false
    },
    setMessage: (state, action) => {
      state.message = action.payload; // Set success message
      state.loading = false; // Set loading state to false
    },
  },
});

export default messageSlice.reducer; // Export reducer

export const {
  messageRequest,
  setMessages,
  addMessage,
  updateMessage,
  deleteMessage,
  setMessageError,
  setMessage,
} = messageSlice.actions; // Export actions

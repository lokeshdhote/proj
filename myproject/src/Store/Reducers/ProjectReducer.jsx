import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    project:"",
  loading: false, // Manage loading state
  message: null, // Success message
  error: null, // Error message
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    clearMessageUser: (state, action) => {
        state.msg = null;
      },
      clearErrorUser: (state, action) => {
        state.error = null;
      },
      setError: (state, action) => {
        state.error = action?.payload ;  // Store any errors
        state.loading = false;
        state.isAuth = false;
    }, 
Pre: (state, action) => {
    state.project = action.payload;
    state.loading = true; 
     state.msg = null;
     state.error = null;
  },

  },})


  export default projectSlice.reducer; // Export reducer
  
  export const {
    Pre,setError,clearErrorUser,clearMessageUser,
  } = projectSlice.actions; // Export actions
  
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resume:"",
  loading: false,
  message: null,
  error: null,
  role: "",
};

export const ResumeSlice = createSlice({
  name: "resume", // Name of the slice
  initialState,
  reducers: {
    resumeRequest: (state, action) => {
        state.loading = true; 
         state.msg = null;
         state.error = null;
      },
    resume:(state, action) => {
        state.resume = action.payload.resume;
        state.role=action.payload.role;
        state.role=action.payload.message;
        state.loading=false;
        state.error=false;

        
    }, 
    message: (state, action) => {
        state.message= action.payload.message;

             state.loading=false;
        state.error=false;
      },
      clearMessageUser: (state, action) => {
        state.msg = null;
      },  clearErrorUser: (state, action) => {
        state.error = null;
      },
      setError: (state, action) => {
        state.error = action.payload ;  // Store any errors
        state.loading = false;
       
    },
  },
})

export default ResumeSlice.reducer; // Export the reducer function

export const {
    setError,resume,message,resumeRequest,clearMessageUser,clearErrorUser
} = ResumeSlice.actions; // Export actions

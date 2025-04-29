import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    virtualSpace: [],  // Use camelCase for consistency
    isAuth: false,  // Track authentication status
    error: null, 
    msg :null,
    loading:false ,

};

export const Virtualspaceslice = createSlice({
    name: "virtualspace",  // Name of the slice
    initialState,
    reducers: {
        virtualspcaeRequest: (state, action) => {
            state.loading = true; 
             state.msg = null;
             state.error = null;
          },
          clearMessageUser: (state, action) => {
            state.msg = null;
          },
          clearErrorUser: (state, action) => {
            state.error = null;
          },
        
          workspace:(state, action) => {
state.virtualSpace= action.payload
            state.error = null;
            state.loading = false;
          },
    setError: (state, action) => {
            state.error = action?.payload ;  // Store any errors
            state.loading = false;
            state.isAuth = false;
        }, 
     
  
      }
 

    }
);

export default Virtualspaceslice.reducer;  // Export the reducer function

export const { 
  
setError,virtualspcaeRequest,workspace,
} = Virtualspaceslice.actions;  // Export actions

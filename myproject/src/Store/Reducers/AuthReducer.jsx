import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
  loading: false,
  message: null,
  error: null,
  role: "",
  user:null,
};

export const Auth = createSlice({
  name: "Auth", // Name of the slice
  initialState,
  reducers: {
    authRequest: (state, action) => {
      (state.loading = true),
        // (state.isAuthenticated = false),
        (state.role = "");
    },
    authSuccess: (state, action) => {
      (state.user= action.payload ),
           (state.loading = false),
        (state.isAuthenticated = true),
        (state.message = action.payload.message),
        (state.role = action.payload.role);

    },
    authlogoutSuccess: (state, action) => {
      (state.loading = false),
        (state.isAuthenticated = false),
        (state.message = action.payload.message),
        (state.role = "");
    },
    authFail: (state, action) => {
      (state.loading = false),
        (state.isAuthenticated = false),
        (state.error = action.payload.message),
        (state.role = "");
    },
    clearMessage: (state, action) => {
      state.message = null;
    },
    clearError: (state, action) => {
      state.error = null;
    },
  },
});

export default Auth.reducer; // Export the reducer function

export const {
  authFail,
  authRequest,
  authSuccess,
  clearError,
  clearMessage,
  authlogoutSuccess,
} = Auth.actions; // Export actions

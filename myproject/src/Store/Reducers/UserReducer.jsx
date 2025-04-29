import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Use camelCase for consistency
  project: [],
  isAuth: false, // Track authentication status
  error: null,
  msg: null,
  projectid: "",
  loadings: false, // Track any errors
  ongoingProject: [],
};

export const userSlice = createSlice({
  name: "user", // Name of the slice
  initialState,
  reducers: {
    userRequest: (state, action) => {
      state.loadings = true;
      state.msg = null;
      state.error = null;
    },
    show: (state, action) => {
      state.loadings = false;
      state.msg = action.payload;
      state.error = null;
    },
    clearMessageUser: (state, action) => {
      state.msg = null;
    },
    clearErrorUser: (state, action) => {
      state.error = null;
    },
    userLogin: (state, action) => {
      state.isAuth = true;
      state.loadings = false;
      state.msg = "User Login Successfully";
      state.user = action.payload.user;
      state.error = action.payload;
    },
    setError: (state, action) => {
      state.error = action?.payload; // Store any errors
      state.loadings = false;
      state.isAuth = false;
    },
    Project: (state, action) => {
      state.project = action.payload;
      state.error = null;
      state.loadings = false;
    },
    userSignout: (state, action) => {
      state.user = null;
      state.error = null;
      state.isAuth = false;
      state.loadings = false;
      state.msg = "user Signout ";
    },
    ClientLoggedIn: (state, action) => {
      state.isAuth = true;
      state.loadings = false;
      state.msg = "user loggedin";
      state.user = action.payload;
      state.error = action.payload;
      //  localStorage.setItem("ClientData", JSON.stringify(action.payload));
    },

    sendproposal: (state, action) => {
      state.msg = "proposal send";
      state.error = null;
      state.loadings = false;
    },
    EditProfile: (state, action) => {
      state.user = action.payload.user;
      state.msg = action.payload.message;
      state.error = null;
      state.loadings = false;
    },
    userdata: (state, action) => {
      state.isAuth = true;
      (state.loadings = false), (state.msg = action.payload.message);
      state.user = action.payload;
      state.error = false;
    },
    UserProfile: (state, action) => {
      state.msg = action.payload.message;
      state.user = action.payload;
      state.error = null;
      state.loadings = false;
    },
    ongoing: (state, action) => {
      state.ongoingProject = action.payload;
      state.error = null;
      state.loadings = false;
    },
    getAllProjectSuccess: (state, action) => {
      console.log('====================================');
      console.log(action.payload.data);
      console.log('====================================');
      state.projectData = action.payload.data;
      state.error = null;
      state.loadings = false;
    },
    Numbersproposals: (state, action) => {
      state.proposals = action.payload;
      state.loadings = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer; // Export the reducer function

export const {
  userdata,
  Numbersproposals,
  ongoing,
  show,
  sendproposal,
  UserProfile,
  EditProfile,
  userLogin,
  userRequest,
  setError,
  Project,
  userSignout,
  ClientLoggedIn,
  getAllProjectSuccess,
} = userSlice.actions; // Export actions

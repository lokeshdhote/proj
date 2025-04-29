import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Client: null,  // Use camelCase for consistency
    isAuth: false,  // Track authentication status
    error: null, 
    msg :null,
    freelancers:[],
    loading:false ,
    myprojects:[],
    proposals:[],
    pro:[],
};

export const ClientSlice = createSlice({
    name: "Client",  // Name of the slice
    initialState,
    reducers: {
        ClientRequest: (state, action) => {
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
          ClientLogin: (state, action) => {
       state.isAuth = true;
        state.loading = false;
        state.msg = "Client Login Successfully";
        state.Client = action?.payload;
        state.error = action.payload
        // localStorage.setItem("ClientData", JSON.stringify(action.payload));
          },
           setError: (state, action) => {
            state.error = action?.payload ;  // Store any errors
            state.loading = false;
            state.isAuth = false;
        }, 
        ClientSignout: (state,action )=>{
          state.Client = null;
          state.error =null;
          state.loading=false;
          state.msg="Client Signout ";
          // localStorage.removeItem("ClientData");

        },
       ClientCreateProject :(state,action )=>{
   
        state.error =null;
        state.msg="Project created ";
      


      },
      ClientProject :(state,action )=>{
        state.project = action.payload;
        state.error =null;
        state.loading = false;

      },
      GetFreelancers:(state,action )=>{
        state.freelancers = action.payload;
        state.error =null;

      },
      ClientLoggedIn:(state, action) => {
        state.isAuth = true;
         state.loading = false;
         state.msg = "Client loggedin";
         state.Client = action?.payload;
         state.error = action.payload
        //  localStorage.setItem("ClientData", JSON.stringify(action.payload));
           },
        myproject:(state,action)=>{
          state.myprojects= action.payload;
          state.loading = false;
          state.error = action.payload
        },
        Freelancerproposal:(state,action)=>{
          state.proposals= action.payload;
          state.loading = false;
          state.error = action.payload
        },
        setpro:(state,action)=>{
          state.pro= action.payload;
          state.loading = false;
          state.error = action.payload
          state.msg =action.payload.message
        },
        EditProfile:(state,action )=>{
          state.Client = action.payload;
          state.msg=action.payload.message
          state.error =null;
          state.loading=false;

         },
         ClientProfile:(state,action )=>{
          state.msg=action.payload.message;
          state.Client= action.payload;
          state.error =null;
          state.loading=false;

         },

    }
});

export default ClientSlice.reducer;  // Export the reducer function

export const { 
  ClientProfile,EditProfile,
  Freelancerproposal,setpro,ClientLogin,ClientRequest ,myproject,setError ,ClientSignout,ClientLoggedIn ,ClientCreateProject ,ClientProject, GetFreelancers,

} = ClientSlice.actions;  // Export actions

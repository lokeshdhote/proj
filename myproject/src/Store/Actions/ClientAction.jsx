import axios from "../../utils/Axios.jsx";
import {  ClientProfile,EditProfile,
  ClientLogin,ClientRequest ,ClientSignout,setError ,setpro, Freelancerproposal,ClientCreateProject ,myproject,ClientProject ,GetFreelancers,ClientLoggedIn,

 } from "../Reducers/ClientReducer.jsx";



export const AysncClientLogin =  (info) => async (dispatch) => {
  dispatch(ClientRequest());
    try {
      const { data } = await axios.post("/client/login", info);
      localStorage.setItem("giTaskr", data.token);
      dispatch(ClientLogin(data));
      console.log(data);
      
    } catch (error) {
      dispatch(setError(error.response));
    }
  };
export const AysncClientSignout =  () => async (dispatch) => {
  dispatch(ClientRequest());
    try {
      const { data } = await axios.get("/client/signout");
      localStorage.removeItem("giTaskr");

      localStorage.removeItem("giTaskr", data.token);

      dispatch(ClientSignout(data));
  
      
    } catch (error) {
      dispatch(setError(error.response));
    }
  };

  export const AyscnClientCreateProject =(info)=> async (dispatch) =>{
    dispatch(ClientRequest());
    try {
      const { data } = await axios.post("/client/CreateProject", info);
      dispatch(ClientCreateProject(data))
    } catch (error) {
      dispatch(setError(error.response));
    }
    }
    export const AyscnClientProject =()=> async (dispatch) =>{
      dispatch(ClientRequest());
      try {
        const { data } = await axios.get("/client/project");
        dispatch(ClientProject(data))
      } catch (error) {
        dispatch(setError(error.response));
      }
      }
    export const Ayscnmyproject =()=> async (dispatch) =>{
      dispatch(ClientRequest());
      try {
        const { data } = await axios.get("/client/myproject");
        dispatch(myproject(data))
      } catch (error) {
        dispatch(setError(error.response));
      }
      }
    export const AyscnGetFreelancers =()=> async (dispatch) =>{
      dispatch(ClientRequest());
      try {
        const { data } = await axios.get("/client/freelancers");
        dispatch(GetFreelancers(data))
      } catch (error) {
        dispatch(setError(error.response));
      }
      }
      // 

      export const AyscnFreelancerproposal  =(id)=> async (dispatch) =>{
        dispatch(ClientRequest());
        try {
          const { data } = await axios.get(`/client/projectproposal/${id}`);
          dispatch(Freelancerproposal(data))
        } catch (error) {
          dispatch(setError(error.response));
        }
        }

      export const AyscnClientLoggedIn =()=> async (dispatch) =>{
        dispatch(ClientRequest());
        try {
          const { data } = await axios.get("/client/loggedin");
          dispatch(ClientLoggedIn(data))
        } catch (error) {
          dispatch(setError(error.response));
        }
        }


      
        export const AyscnAcceptProposal =(id,email)=> async (dispatch) =>{
          dispatch(ClientRequest());
          try {
            const { data } = await axios.post(`/client/acceptproposal/${id}`,email);

            dispatch(setpro(data))
          } catch (error) {
            dispatch(setError(error.response));
          }
          }
      

          export  const AsunClientProfile = () => async (dispatch) => {
            dispatch(ClientRequest()); // Dispatching initial request action
          
            try {
              // Making an API call with 'info'
              const {data} = await axios.get("/client/profile"); 
                   
              dispatch(EditProfile(data)); // Dispatch success action with data
            } catch (error) {
              console.error("Error:", error.response || error.message); // Log error
              dispatch(setError(error.response || { message: "An unknown error occurred" }));
            }
          };

          export const AsunClientEditProfile = (info) => async (dispatch) => {
            dispatch(ClientRequest()); // Dispatching the request action to update the UI state (loading)
          
            try {
              console.log(info, "formdata");
          
              // Make the API call to the backend
              const { data } = await axios.post("/client/Editprofile", info, {
                headers: {
                  'Content-Type': 'multipart/form-data', // Ensure correct content type
                },
              });
          
              dispatch(ClientProfile(data));
            } catch (error) {
              console.error("Error:", error.response || error.message); // Log the error
          
              // Dispatch the error action with the error details
              dispatch(setError(error.response || { message: "An unknown error occurred" }));
            }
          };
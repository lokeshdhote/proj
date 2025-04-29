import axios from "../../utils/Axios.jsx";
import { authFail, authlogoutSuccess, authRequest, authSuccess } from "../Reducers/AuthReducer";

export const userLogin =  (info) => async (dispatch) => {
    dispatch(authRequest());
      try {
        const { data } = await axios.post("/client/login", info);
        localStorage.setItem("giTaskr", data.token);
        dispatch(authSuccess(data));
        // console.log(data);
        
      } catch (error) {
        dispatch(authFail(error.response.data));
      }
    };
    export const freelancerLogin =  (info) => async (dispatch) => {
        dispatch(authRequest());
          try {
            const { data } = await axios.post("/freelancer/login", info);
            // console.log(data);
            
            localStorage.setItem("giTaskr", data.token);
            dispatch(authSuccess(data));
            
          } catch (error) {
            dispatch(authFail(error.response.data));
          }
        };
        export const freelancerregister =  (info) => async (dispatch) => {
          dispatch(authRequest());
            try {
              const { data } = await axios.post("/freelancer/register", info);
              // console.log(data);
              
              localStorage.setItem("giTaskr", data.token);
              dispatch(authSuccess(data));
              
            } catch (error) {
              dispatch(authFail(error.response.data));
            }
          };
          export const clientregister =  (info) => async (dispatch) => {
            dispatch(authRequest());
              try {
                const { data } = await axios.post("/client/register", info);
                // console.log(data);
                
                localStorage.setItem("giTaskr", data.token);
                dispatch(authSuccess(data));
                
              } catch (error) {
                dispatch(authFail(error.response.data));
              }
            };
export const userLogout =  () => async (dispatch) => {
    dispatch(authRequest());
      try {
        const { data } = await axios.get("/freelancer/signout");
        localStorage.removeItem("giTaskr");
  
        localStorage.removeItem("giTaskr", data.token);
  
        dispatch(authSuccess(data));
    
        
      } catch (error) {
        dispatch(authFail(error.response.data));
      }
    };

export const ClientLoggedIn =()=> async (dispatch) =>{
        dispatch(authRequest());
        try {
          const { data } = await axios.get("/client/loggedin");
          dispatch(authSuccess(data))
        } catch (error) {
            // console.log(error);

          dispatch(authFail(error.response.data));
        }
        }
export const frelancerLoggedIn =()=> async (dispatch) =>{
            dispatch(authRequest());
            try {
              const { data } = await axios.get("/freelancer/loggedin");
              dispatch(authSuccess(data))
              console.log(data);
              
            } catch (error) {
                // console.log(error);
                
              dispatch(authFail(error.response));
            }
            }

            export const clientSignOut =  () => async (dispatch) => {
                dispatch(authRequest());
                  try {
                    const { data } = await axios.get("/client/signout");
                    localStorage.removeItem("giTaskr");
              
                    // localStorage.removeItem("giTaskr", data.token);
              
                    dispatch(authlogoutSuccess(data));
                
                    
                  } catch (error) {
                    dispatch(authFail(error.response.data));
                  }
                };
              
                
            export const freelancerSignOut =  () => async (dispatch) => {
              dispatch(authRequest());
                try {

                  
                  const { data } = await axios.get("/freelancer/signout");
                  localStorage.removeItem("giTaskr");
            
                  // localStorage.removeItem("giTaskr", data.token);
            
                  dispatch(authlogoutSuccess(data));
              
                  
                } catch (error) {
                  dispatch(authFail(error.response.data));
                }
              };





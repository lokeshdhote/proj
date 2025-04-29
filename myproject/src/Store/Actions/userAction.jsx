import axios from "../../utils/Axios.jsx";
import {
  userLogin,
  UserProfile,
  EditProfile,
  Numbersproposals,
  userRequest,
  userdata,
  show,
  ongoing,
  setError,
  Project,
  userSignout,
  ClientLoggedIn,
  sendproposal,
  getAllProjectSuccess,
} from "../Reducers/UserReducer.jsx";

export const AysncUserLogin = (info) => async (dispatch) => {
  dispatch(userRequest());
  try {
    const { data } = await axios.post("/freelancer/login", info);
    localStorage.setItem("giTaskr", data.token);
    dispatch(userLogin(data));
  } catch (error) {
    dispatch(setError(error.response.data));
  }
};

export const AysncProject = () => async (dispatch) => {
  dispatch(userRequest());
  try {
    const { data } = await axios.get("/freelancer/project");
    dispatch(Project(data));
  } catch (error) {
    dispatch(setError(error.response));
  }
};
export const AysncuserSignout = () => async (dispatch) => {
  dispatch(userRequest());
  try {
    const { data } = await axios.get("/freelancer/signout");
    localStorage.removeItem("giTaskr");

    localStorage.removeItem("giTaskr", data.token);
    dispatch(userSignout(data));
  } catch (error) {
    dispatch(setError(error.response));
  }
};
export const AyscnuserLoggedIn = () => async (dispatch) => {
  dispatch(userRequest());
  try {
    const { data } = await axios.get("/freelancer/loggedin");
    dispatch(ClientLoggedIn(data));
  } catch (error) {
    dispatch(setError(error.response));
  }
};

export const Asyncsendproposal = (info) => async (dispatch) => {
  dispatch(userRequest()); // Dispatching initial request action
  console.log("Sending data:", info); // Log the input data (info)

  try {
    // Making an API call with 'info'
    const response = await axios.post("/freelancer/proposal", info);
    console.log("Response data:", response.data); // Log the API response

    dispatch(sendproposal(response.data)); // Dispatch success action with data
  } catch (error) {
    console.error("Error:", error.response || error.message); // Log error
    dispatch(
      setError(error.response || { message: "An unknown error occurred" })
    );
  }
};

export const AsuncEditProfile = (info) => async (dispatch) => {
  dispatch(userRequest()); // Dispatching the request action to update the UI state (loading)

  try {
    console.log(info, "formdata");

    // Make the API call to the backend
    const { data } = await axios.post("/freelancer/Editprofile", info, {
      headers: {
        "Content-Type": "multipart/form-data", // This is needed for uploading files
      },
    });

    // Dispatch the success action with the data from the server
    dispatch(EditProfile(data)); // Assuming the returned data contains the updated profile details
  } catch (error) {
    // Handle errors: log error and dispatch failure action
    console.error("Error:", error.response || error.message); // Log the error

    // Dispatch the error action with the error details
    dispatch(
      setError(error.response || { message: "An unknown error occurred" })
    );
  }
};

export const AsuncUserProfile = () => async (dispatch) => {
  dispatch(userRequest()); // Dispatching initial request action

  try {
    // Making an API call with 'info'
    const { data } = await axios.get("/freelancer/profile");

    dispatch(EditProfile(data)); // Dispatch success action with data
  } catch (error) {
    console.error("Error:", error.response || error.message); // Log error
    dispatch(
      setError(error.response || { message: "An unknown error occurred" })
    );
  }
};
// UserProfile

export const Asyncongoing = () => async (dispatch) => {
  dispatch(userRequest());
  try {
    const { data } = await axios.get("/freelancer/Ongoingprojets");
    dispatch(getAllProjectSuccess(data));
  } catch (error) {
    dispatch(
      setError(error.response || { message: "An unknown error occurred" })
    );
  }
};
export const getallOngoningprojects = () => async (dispatch) => {
  dispatch(userRequest());
  try {
    const { data } = await axios.get("/client/projects");
    dispatch(getAllProjectSuccess(data));
  } catch (error) {
    dispatch(
      setError(error.response || { message: "An unknown error occurred" })
    );
  }
};
export const createwallet = (info) => async (dispatch) => {
  dispatch(userRequest());
  try {
    const { data } = await axios.post("/freelancer/createwallet", info);
    dispatch(show(data));
  } catch (error) {
    dispatch(
      setError(error.response || { message: "An unknown error occurred" })
    );
  }
};
export const wallet = () => async (dispatch) => {
  dispatch(userRequest());
  try {
    const { data } = await axios.get("/freelancer/wallet");
    dispatch(userdata(data));
  } catch (error) {
    dispatch(
      setError(error.response || { message: "An unknown error occurred" })
    );
  }
};

//   export const Asyncongoingid = (id)=>async (dispatch) => {
//     dispatch(userRequest());
//     try {
//       const {data} = await axios.get(`/freelancer/Ongoingprojets/${id}`);
// dispatch(ongoing(data))

//     } catch (error) {

//       dispatch(setError(error.response || { message: "An unknown error occurred" }));

//     }

//   }

export const Ayscnproposal = (id) => async (dispatch) => {
  dispatch(userRequest());
  try {
    const { data } = await axios.get(`/freelancer/projectproposal/${id}`);
    dispatch(Numbersproposals(data));
  } catch (error) {
    dispatch(setError(error.response));
  }
};

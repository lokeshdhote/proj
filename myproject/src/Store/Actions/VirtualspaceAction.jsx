import axios from "../../utils/Axios.jsx";
import {setError,workspace,virtualspcaeRequest } from "../Reducers/VirtualspaceReducer.jsx";


export const CreateCalender =  (id,info) => async (dispatch) => {
    dispatch(virtualspcaeRequest());
    try {
        console.log(info);
        
      const { data } = await axios.post(`/workspace/${id}/calendar`,info);
     console.log(data);
     
      dispatch(workspace(data));
    } catch (error) {
      dispatch(setError(error.response.data));
    }
  };



  export const AsyncDocuments = (id,info) => async (dispatch) => {
    dispatch(virtualspcaeRequest());
    try {
        console.log(id);
        
      const { data } = await axios.post(`/${id}/progress/document`,info ,{ headers: {
        'Content-Type': 'multipart/form-data', 
      },});
     console.log(data);
     
      dispatch(workspace(data));
    } catch (error) {
      dispatch(setError(error.response.data));
    }
  };
  


export const getworkspace =  (id) => async (dispatch) => {
  dispatch(virtualspcaeRequest());
  try {
      console.log(id);
      
    const { data } = await axios.get(`/workspace/${id}`);
   console.log(data);
   
    dispatch(workspace(data));
  } catch (error) {
    dispatch(setError(error.response.data));
  }
};


export const addTodo =  (id,info) => async (dispatch) => {
  dispatch(virtualspcaeRequest());
  try {
      console.log(info);
      
    const { data } = await axios.post(`/workspace/${id}/todos`,info);
   console.log(data);
   
    dispatch(workspace(data));
  } catch (error) {
    dispatch(setError(error.response.data));
  }
};

export const UpdateTodo =  (id,taskId,info) => async (dispatch) => {
  dispatch(virtualspcaeRequest());
  try {
      console.log(info);
      
    const { data } = await axios.post(`/workspace/${id}/todos/${taskId}`,info);
   console.log(data)
   
    dispatch(workspace(data));
  } catch (error) {
    dispatch(setError(error.response.data));
  }
};
export const deleteTodo =  (id,taskId) => async (dispatch) => {
  dispatch(virtualspcaeRequest());
  try {
      console.log(id);
      
    const { data } = await axios.get(`/workspace/${id}/todos/${taskId}`);
   console.log(data)
   
    dispatch(workspace(data));
  } catch (error) {
    dispatch(setError(error.response.data));
  }
};






export const createProgressTracker = (id, info) => async (dispatch) => {
  dispatch(virtualspcaeRequest());
  try {
    console.log(id,info);
    
    const { data } = await axios.post(`/workspace/${id}/progress`, info);
    dispatch(workspace(data)); // Dispatch success action
  } catch (error) {
    dispatch(setError(error.response.data)); // Dispatch error action
  }
};




// API to update the progress tracker
export const updateProgressTracker = (id, info) => async (dispatch) => {
  dispatch(virtualspcaeRequest());
  try {
    const { data } = await axios.post(`/workspace/update/progress/${id}`, info);
    dispatch(workspace(data)); // Dispatch success action
  } catch (error) {
    dispatch(setError(error.response.data)); // Dispatch error action
  }
};

// API to delete a part from the progress tracker
export const deletePartFromProgressTracker = (id, partName) => async (dispatch) => {
  dispatch(virtualspcaeRequest());
  try {
    const { data } = await axios.get(`/workspace/${id}/progress/parts/${partName}`);
    dispatch(workspace(data)); // Dispatch success action
  } catch (error) {
    dispatch(setError(error.response.data)); // Dispatch error action
  }
};

// API to delete the progress tracker
export const deleteProgressTracker = (id) => async (dispatch) => {
  dispatch(virtualspcaeRequest());
  try {
    const { data } = await axios.delete(`/workspace/${id}/progress`);
    dispatch(workspace(data)); // Dispatch success action
  } catch (error) {
    dispatch(setError(error.response.data)); // Dispatch error action
  }
};


import axios from "../../utils/Axios";  // Ensure Axios is properly imported
import { 
    messageRequest, setMessageError, setMessages, addMessage, updateMessage, deleteMessage 
} from "../Reducers/MessageReducer";

// Async Thunk to fetch all messages
export const asyncFetchMessages = (id) => async (dispatch) => {
    dispatch(messageRequest()); // Start loading
    try {
        // console.log(id);
        
        const { data } = await axios.get(`/chat/messages/${id}`);
        
        dispatch(setMessages(data));  // Dispatch action to set messages
        // console.log(data); // Pretty prints the object

        
    } catch (error) {
  
        dispatch(setMessageError(error.response)); // Handle error
    }
};

// Async Thunk to send a new message
export const asyncSendMessage = (messageData) => async (dispatch) => {
    dispatch(messageRequest());  // Start loading
    try {
        
        
        const { data } = await axios.post("/chat/messages", messageData);
        // dispatch(addMessage(data));  // Add message to the state
    } catch (error) {
     
        dispatch(setMessageError(error.response)); // Handle error
    }
};

// Async Thunk to update an existing message
export const asyncUpdateMessage = (messageId, updatedContent) => async (dispatch) => {
    dispatch(messageRequest());  // Start loading
    try {
        const { data } = await axios.put(`/chat/messages/${messageId}`, { content: updatedContent });
        // dispatch(updateMessage(data));  // Update the message in state
    } catch (error) {
      
        dispatch(setMessageError(error.response)); // Handle error
    }
};

// Async Thunk to delete a message
export const asyncDeleteMessage = (messageId) => async (dispatch) => {
    dispatch(messageRequest());  // Start loading
    try {
        await axios.delete(`/chat/messages/${messageId}`);
        // dispatch(deleteMessage(messageId));  // Remove message from the state
    } catch (error) {
       
        dispatch(setMessageError(error.response)); // Handle error
    }
};

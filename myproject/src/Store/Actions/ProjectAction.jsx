import axios from "../../utils/Axios";  // Ensure Axios is properly imported
import { 
    
    Pre,setError,clearErrorUser,clearMessageUser,
} from "../Reducers/ProjectReducer";




export const AysncProject =  (info) => async (dispatch) => {
    dispatch(ClientRequest());
      try {
        const { data } = await axios.post("/client/login", info);
        dispatch(Pre(data));
        console.log(data);
        
      } catch (error) {
        dispatch(setError(error.response));
      }
    };
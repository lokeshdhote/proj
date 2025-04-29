import axios from "../../utils/Axios.jsx";
import {  
    resume,setError,message,resumeRequest,
 } from "../Reducers/ResumeReducer.jsx";



 
 export const  asyncResume = ()=> async (dispatch, getState)=>{
dispatch(resumeRequest())
    try {
      const {data} = await axios.post("/resume/")
      dispatch(resume(data))
    
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response))
      
    }
    
    
    
     }

     // education 

 export const AsyncaddEduction = (addEdu)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
    try {
      console.log(addEdu);
      
      const {data} = await axios.post("/resume/add-edu", addEdu)
      dispatch(message(data))
      // console.log(data);
      
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response))
    }
    
    
    
     }
     export const AsynceditEduction = (id,editedu)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
      try {
     
        const {data} = await axios.post(`/resume/edit-edu/${id}`, editedu)
        dispatch(message(data))
      } catch (error) {
        console.log(error);
        dispatch(setError(error.response))
      }
      
      
      
       }

       export const AsyncdeleteEduction = (id)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
        try {
       
          const {data} = await axios.post(`/resume/del-edu/${id}`)
          dispatch(message(data))
        } catch (error) {
          console.log(error);
          dispatch(setError(error.response))
        }
        
        
        
         }



     // accomplishment

 export const Asyncaddaccomplishment = (addaccom)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
    try {
      console.log(addaccom);
      
      const {data} = await axios.post("/resume/addaccomplishment", addaccom)
      dispatch(message(data))
      console.log(data);
      
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response))
    }
    
     }

     export const Asynceditaccomplishment = (id,editaccomplishment)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
      try {
      
        const {data} = await axios.post(`/resume/editaccomplishment/${id}`, editaccomplishment)
        dispatch(message(data))
      } catch (error) {
        console.log(error);
        dispatch(setError(error.response))
      }
      
      
      
       }

       export const Asyncdeleteaccomplishment = (id)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
        try {
       
          const {data} = await axios.post(`/resume/delaccomplishment/${id}`)
          dispatch(message(data))
        } catch (error) {
          console.log(error);
          dispatch(setError(error.response))
        }
        
        
        
         }


   
  
    // intern      

export const Asyncaddintern = (addintern)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
  try {
    const {data} = await axios.post("/resume/addintern", addintern)
    dispatch(message(data))
  } catch (error) {
    console.log(error);
    dispatch(setError(error.response))
  }
  
   }
   export const Asynceditintern = (id,editIntern)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
    try {
      const {data} = await axios.post(`/resume/editintern/${id}`,editIntern)
      dispatch(message(data))
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response))
    }
    
    
    
     }
     export const Asyncdeleteintern = (id)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
      try {
     
        const {data} = await axios.post(`/resume/delintern/${id}`)
        dispatch(message(data))
      } catch (error) {
        console.log(error);
        dispatch(setError(error.response))
      }
      
      
      
       }

     


   // project 

export const Asyncaddproject = (addproject)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
  try {
    const {data} = await axios.post("/resume/addproject", addproject)
    dispatch(message(data))
  } catch (error) {
    console.log(error);
    dispatch(setError(error.response))
  }
  
   }
   export const Asynceditproject = (id,editproject)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
    try {
      const {data} = await axios.post(`/resume/editproject/${id}`, editproject)
      dispatch(message(data))
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response))
    }
    
    
    
     }

     export const Asyncdeleteproject = (id)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
      try {
     
        const {data} = await axios.post(`/resume/delproject/${id}`)
        dispatch(message(data))
      } catch (error) {
        console.log(error);
        dispatch(setError(error.response))
      }
      
      
      
       }



   //  skill

export const Asyncaddskill = (addskill)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
  try {
    const {data} = await axios.post("/resume/addskill", addskill)
    dispatch(message(data))
  } catch (error) {
    console.log(error);
    dispatch(setError(error.response))
  }
  
   }
   export const Asynceditskill = (id,editskill)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
    try {
   
      const {data} = await axios.post(`/resume/editskill/${id}`, editskill)
      dispatch(message(data))
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response))
    }
    
    
    
     }
     export const Asyncdeleteskill = (id)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
      try {
     
        const {data} = await axios.post(`/resume/delskill/${id}`)
        dispatch(message(data))
      } catch (error) {
        console.log(error);
        dispatch(setError(error.response))
      }
      
      
      
       }




// job

export const Asyncaddjob = (addjob)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
  try {
    console.log(addjob);
    const {data} = await axios.post("/resume/addjob", addjob)
    dispatch(message(data))
  } catch (error) {
    console.log(error);
    dispatch(setError(error.response))
  }
  
   }
   export const Asynceditjob = (id,editjob)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
    try {
      const {data} = await axios.post(`/resume/editjob/${id}`, editjob)
      dispatch(message(data))
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response))
    }
    
    
    
     }

     export const Asyncdeletejob = (id)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
      try {
     
        const {data} = await axios.post(`/resume/deljob/${id}`)
        dispatch(message(data))
      } catch (error) {
        console.log(error);
        dispatch(setError(error.response))
      }
      
      
      
       }



     //   responsibility

export const Asyncaddresponsibility = (addresponsibility)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
  try {
    console.log(addresponsibility);
    const {data} = await axios.post("/resume/addresponsibility", addresponsibility)
 
  } catch (error) {
    console.log(error);
    dispatch(setError(error.response))
  }
  
   }
   export const Asynceditresponsibility = (id,editresponsibility)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
    try {
      const {data} = await axios.post(`/resume/editresponsibility/${id}`, editresponsibility)
     
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response))
    }
    
    
    
     }


     export const Asyncdeleteresponsibility = (id)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
      try {
     
        const {data} = await axios.post(`/resume/delresponsibility/${id}`)
        
      } catch (error) {
        console.log(error);
        dispatch(setError(error.response))
      }
      
      
      
       }

  
// course

   export const Asyncaddcourse = (addcourse)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
    try {
      const {data} = await axios.post("/resume/addcourse", addcourse)
   
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response))
    }
    
     }

     export const Asynceditcourse = (id,editcourse)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
      try {
      
        const {data} = await axios.post(`/resume/editcourse/${id}`, editcourse)
        dispatch(editEduction(data))
      } catch (error) {
        console.log(error);
        dispatch(setError(error.response))
      }
      
      
      
       }
    
       export const Asyncdeletecourse = (id)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
        try {
       
          const {data} = await axios.post(`/resume/delcourse/${id}`)
          
        } catch (error) {
          console.log(error);
          dispatch(setError(error.response))
        }
        
        
        
         }
     



     // link

     export const Asyncaddlink = (addlink)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
      try {
        const {data} = await axios.post("/resume/addlink", addlink)
     
      } catch (error) {
        console.log(error);
        dispatch(setError(error.response))
      }
      
       }
       export const Asynceditlink = (id,editink)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
        try {
          const {data} = await axios.post(`/resume/editlink/${id}`,)
          dispatch(editEduction(data))
        } catch (error) {
          console.log(error);
          dispatch(setError(error.response))
        }
        
        
        
         }


         export const Asyncdeletelink = (id)=> async (dispatch, getState)=>{
dispatch(resumeRequest())
          try {
         
            const {data} = await axios.post(`/resume/dellink/${id}`)
            
          } catch (error) {
            console.log(error);
            dispatch(setError(error.response))
          }
          
          
          
           }
       
  
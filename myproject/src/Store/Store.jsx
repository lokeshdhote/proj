import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserReducer.jsx"; // Import the reducer, not the slice
import  ClientSlice  from "./Reducers/ClientReducer.jsx";
import  Auth  from "./Reducers/AuthReducer.jsx";
import   ResumeSlice  from "./Reducers/ResumeReducer.jsx";
import messageSlice  from "./Reducers/MessageReducer.jsx";
import  Virtualspaceslice  from "./Reducers/VirtualspaceReducer.jsx";

export const Store = configureStore({
    reducer: {
        user: userReducer,
        Client:ClientSlice , // Use the reducer exported from userSlice,
        Auth:Auth,
        resume:ResumeSlice,
        message:messageSlice,
        virtual:Virtualspaceslice,
    }
});

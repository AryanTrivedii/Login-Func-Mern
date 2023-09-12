import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Redux/Authslice'
import thunk from "redux-thunk";
export const store=configureStore({
    reducer:{
        auth: authReducer,
    },
    middleware:[thunk]
})



export default store;
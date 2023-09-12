import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const registerUser = createAsyncThunk('auth/register',async(Userdata)=>{
const response =axios.post('http://localhost:5000/register',Userdata)
return  response.data
})

export const loginUser= createAsyncThunk('auth/login',async(Userdata)=>{
  const response= axios.post('http://localhost:5000/login',Userdata)
  return (await response).data
})


const authSlice=createSlice({
name:"auth" ,
initialState:{
user:null,
error:null,
},
reducers : {},
executeReducer:(builder)=>{
 builder
.addCase(registerUser.fulfilled,(state,action)=>{ state.user=action.payload;
  state.error=null;
})  
.addcase(registerUser.rejected,(state,action)=>{
  state.user=null;
  state.error=action.error.message;
})
builder
.addCase(loginUser.fulfilled,(state,action)=>{
  state.user=action.payload;
  state.error=null;
})
.addCase(loginUser.rejected,(state,action)=>{
  state.user=null;
  state.error=action.error.message;
})

}}

 )

export default authSlice.reducer;
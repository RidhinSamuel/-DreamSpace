import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentUser:{},
    error:false,
    loading:false
};

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart: state =>{
            state.loading=true;
            state.currentUser={
                username: '',
                email: '',
                password: ''
            };
        },
        signInSuccess:(state,action)=>{
            state.loading=false;
            state.currentUser=action.payload;
            state.error=false;
        },
        signInFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        }
    }
});

export const {signInStart,signInSuccess,signInFailure}=userSlice.actions;
export default userSlice.reducer;
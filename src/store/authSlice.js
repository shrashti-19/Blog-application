import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null,
    error : null

}
const authSlice = createSlice({
    name :"auth",
    initialState,
    reducers:{

        createAccount:(state,action)=>{
             state.status = 'loading'
        },
        createAccountSuccess : (state,action)=>{
             state.status = true;
             state.userData= action.payload;
        },
        createAccountFailure : (state,action)=>{
             state.status = false;
             state.error = action.payload;
        },
        getCurrentUser:(state,action)=>{
            state.status='loading'
        },
        getCurrentUserSuccess:(state,action)=>{
            state.status=true;
            state.userData=action.payload;
        },
        getCurrentUserFailure:(state,action)=>{
            state.status=false;
            state.userData=null;
            state.error = action.payload;
        },

        login:(state,action)=>{
             state.status=true;
             state.userData=action.payload.userData
        },
        logOut:(state,action)=>{
            state.status=false;
            state.userData=null;
        }

    }
})

export const {login,logOut,createAccount,createAccountFailure,createAccountSuccess,getCurrentUser,getCurrentUserSuccess,getCurrentUserFailure} = authSlice.actions;
export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:[],
    currentPost:null,
    status: 'idle',
    error : null,
    uploadStatus : 'idle',
    filePreviewUrl : null
}

const postSlice = createSlice({
    name:"postSlice",
    initialState,
    reducers:{
        fetchPost : (state,action)=>{
            state.status='loading';
        },
        fetchPostSuccess:(state,action)=>{
            state.status = 'succeeded';
            state.posts=action.payload;

        },
        fetchPostFailure : (state,action)=>{
            state.status = 'failed';
            state.error = action.payload;
        },
        createPost : (state,action)=>{
            state.status ='loading';
        },
        createPostSuccess:(state,action)=>{
            state.status='succeeded';
            state.posts = action.payload;
        },
        createPostFailure:(state,action)=>{
            state.status='failed';
            state.posts = action.payload;
        }

    }
})
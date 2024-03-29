import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    return fetch("http://192.168.1.65:5000/alldata")
        .then((res) => res.json());
});

const postSlice = createSlice(({
    name: "posts",
    initialState: {
        posts: [],
        loading: false,
    },
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.loading = true
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false;
        }

    }
}))

export default postSlice.reducer;
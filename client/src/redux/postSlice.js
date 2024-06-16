import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: {},
};

const postSlince = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPosts(state, action) {
            state.posts = action.payload;
        },
    },
});

export default postSlince.reducer;

export function SetPosts(post) {
    return (dispatch, getState) => {
        dispatch(postSlince.actions.getPosts(post));
    };
}
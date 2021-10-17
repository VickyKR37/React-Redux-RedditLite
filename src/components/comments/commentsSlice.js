import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadComments = createAsyncThunk(
    'comments/loadComments',
    async (commentsId) => {
        const data = await fetch(`https://www.reddit.com/r/${commentsId}.json`);
            const json = await data.json();
            return json;
    }
);

export const commentsSlice = createSlice({
    name: 'loadComments',
    initialState: {
        comments: [],
        isLoadingComments: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder.addCase(loadComments.pending, (state) => {
            state.isLoadingComments = true;
            state.hasError = false;
        })
        .addCase(loadComments.fulfilled, (state, action) => {
            state.isLoadingComments = false;
            state.hasError = false;
            state.comments = action.payload;
        })
        .addCase(loadComments.rejected, (state) => {
            state.isLoadingComments = false;
            state.hasError = true;
            state.comments = {};
        })
    },
});


export default commentsSlice.reducer;
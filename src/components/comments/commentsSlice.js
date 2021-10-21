import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadComments = createAsyncThunk(
    'comments/loadComments',
    async (permalink) => {
        const data = await fetch(`https://www.reddit.com/${permalink}.json`);
            const json = await data.json();
            return json;
    }
);

export const commentsSlice = createSlice({
    name: 'loadComments',
    initialState: {
        comments: [],
        isLoadingComments: false,
        hasError: false,
        permalink: undefined
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
      reducers: {
        setPermalink: (state, action) => { 
            return {
                ...state, permalink: action.payload
            }
        }
    }
});


export default commentsSlice.reducer;
export const isLoadingComments = (state) => state.commentsSlice.isLoadingComments;
export const selectLoadComments = (state) => state.commentsSlice.loadComments;
export const hasError = (state) => state.commentsSlice.hasError;
export const selectPermalink = (state) => state.commentsSlice.permalink;
export const {setPermalink} = commentsSlice.actions;

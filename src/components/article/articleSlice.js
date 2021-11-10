import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { buildQueries } from '@testing-library/react';

export const loadArticle = createAsyncThunk(
    'article/loadArtcile',
    async (headline) => {
        const data = await fetch(`https://www.reddit.com/${headline}.json`);
            const json = await data.json();
            return json;
    }
);

export const articleSlice = createSlice({
    name: 'loadArticle',
    initialState: {
        article: "",
        isLoadingArticle: false,
        hasError: false,
        headline: undefined
    },
    extraReducers: (builder) => {
        builder.addCase(loadArticle.pending, (state) => {
            state.isLoadingArticle = true;
            state.hasError = false;
        })
        .addCase(loadArticle.fulfilled, (state, action) => {
            state.isLoadingArticle = false;
            state.hasError = false;
            state.article = action.payload[1].data;
        })
        .addCase(loadComments.rejected, (state) => {
            state.isLoadingArticle = false;
            state.hasError = true;
            state.article = {};
        })
    },
    reducers: {
        setHeadline: (state, action) => {
            return {
                ...state, headline: action.payload
            }
        }
    }
})

export default articleSlice.reducer;
export const isLoadingArticle = (state) => state.articleSlice.isLoadingArticle;
export const selectLoadArticle = (state) => state.articleSlice.loadArticle;
export const hasError = (state) => state.articleSlice.hasError;
export const selectHeadline = (state) => state.articleSlice.headline;
export const {setHeadline} = articleSlice.actions;

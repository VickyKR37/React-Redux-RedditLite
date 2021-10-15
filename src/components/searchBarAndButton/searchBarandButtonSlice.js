import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchForArticles = createAsyncThunk(
    'articles/searchForArticles',
    async (keywords) => {
        const data = await fetch (`https://www.reddit.com/search.json?=${keywords}`);
        const json = await Response.json();
        return json;
    }
);

export const postArticles = createAsyncThunk (
    'articles/postArticles',
    async ({keywords}) => {
        const data = await
        fetch(`https://www.reddit.com/search.json?=${keywords}`, {
            method: 'POST',
        })
        const json = await data.json();
        return json;
    }
)

export const searchBarandButtonSlice = createSlice({
    name: s'earchBarandButtonSlice',
    initialState: {
        keywords: '',
        isLoadingArticles: false,
        failedToLoadArtciles: false,
        postArtcilesIsPending: false,
        failedToPostArticles: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchForArticles.pending, (state)
            => {
                state.isLoadingArticles = true;
                state.failedToLoadArtciles = false;
            })
            .addCase(searchForArticles.fulfilled, (state, action) => {
                state.isLoadingArticles = false;
                state.failedToLoadArtciles = false;
                const (keywords, articles) = action.payload;
                state.keywords[keywords] = articles;
            })
            .addCase(searchForArticles.rejected, (state, action) => {
                state.isLoadingArticles = false;
                state.failedToLoadArtciles = true;
            })
            .addCase(postArticles.pending, (state) =>{
                state.postArtcilesIsPending = true;
                state.failedToPostArticles = false;
            })
            .addCase(postArticles.fulfilled, (state) => {
                state.postArtcilesIsPending = false;
                state.failedToPostArticles = false;
            })
            .addCase(postArticles.rejected, (state) => {
                state.postArtcilesIsPending = false;
                state.failedToPostArticles = true;
            })
    }.
});

export default searchBarandButtonSlice.extraReducers;
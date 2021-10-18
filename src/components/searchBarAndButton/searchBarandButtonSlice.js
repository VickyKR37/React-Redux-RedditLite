import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const searchForArticles = createAsyncThunk("articles/searchForArticles", async({keywords}) => {
        const response = await fetch(`https://www.reddit.com/search.json?=${keywords}`, { 
            method: 'GET'
        });
        const json = await response.json();
        return json;
    }
);

const postArticles = createAsyncThunk(
    'articles/postArticles',
    async ({keywords}) => {
        const data = await fetch(`https://www.reddit.com/search.json?=${keywords}`, {
            method: 'POST'
        });
        const json = await data.json();
        return json;
    }
)

const searchBarandButtonSlice = createSlice({
    name: 'searchBarandButtonSlice',
    initialState: {
        keywords: '',
        articles: [],
        isLoadingArticles: false,
        failedToLoadArtciles: false,
        postArtcilesIsPending: false,
        failedToPostArticles: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchForArticles.pending, (state) => {
                state.isLoadingArticles = true;
                state.failedToLoadArtciles = false;
            })
            .addCase(searchForArticles.fulfilled, (state, action) => {
                state.isLoadingArticles = false;
                state.failedToLoadArtciles = false;
                const {keywords, articles} = action.payload;
                state.keywords[articles] = articles;
            })
            .addCase(searchForArticles.rejected, (state, action) => {
                state.isLoadingArticles = false;
                state.failedToLoadArtciles = true;
            })
            .addCase(postArticles.pending, (state) =>{
                state.postArtcilesIsPending = true;
                state.failedToPostArticles = false;
            })
            .addCase(postArticles.fulfilled, (state, action) => {
                state.postArtcilesIsPending = false;
                state.failedToPostArticles = false;
                const { keywords } = action.payload;
                state.articles = action.payload;
            })
            .addCase(postArticles.rejected, (state) => {
                state.postArtcilesIsPending = false;
                state.failedToPostArticles = true;
            });
    },
});
console.log(searchBarandButtonSlice, searchForArticles, postArticles);
export default searchBarandButtonSlice.reducer;
export const selectArticles = (state) => {console.log(state); return state.vicky.articles};
export const selectPostArticles = (state) => state.vicky.articles;
export const isLoading = (state) => state.vicky.isLoadingArticles;
export const isPosting = (state) => state.vicky.postArtcilesIsPending;
export const {} = searchBarandButtonSlice.actions;
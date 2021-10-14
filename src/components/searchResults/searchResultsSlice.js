import { createSlice } from '@reduxjs/toolkit';

const searchResults = {
    name: "searchResults",
    initialState: {
        keywords: "",
        fetching: false,
        results: []
    },

    reducers: {
        searchForAnArticle: (state, action) 

        displayFetchingAlert: (state = initialState, action) => {
            if (initialState.fetching) {
                return <p> Searching for articles of {initialState.keywords} </p>
        }},

        displaySearchResults: (state = initialState, action) => {
            return initialState.results.map(result => (
                <li>{`https://www.reddit.com/r/${keyword}.json}`}</li>
            ))
        }
}

export const searchResultsSlice = createSlice(searchResults);
export const select
export const {displayFetchingAlert, displaySearchResults} = searchResultsSlice.actions;
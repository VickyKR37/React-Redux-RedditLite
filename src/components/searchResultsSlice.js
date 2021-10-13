import { createSlice } from '@reduxjs/toolkit';

export const searchResults = {
    name: "searchResults",
    initialState: {
        keywords: ""
        fetching: false,
        results: []
    },

    reducers: {

        displayFetchingAlert: (state = initialState, action) => {
            if (initialState.fetching) {
                return <p>Searching for articles of {initialState.keywords}</p>
        }},

        displaySearchResults: (state = initialState, action) => {
            return initialState.results.map(result => (
                <li>{`https://www.reddit.com/r/${keyword}.json}`}</li>
            ))
        }
}
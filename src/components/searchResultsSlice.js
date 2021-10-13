import { createSlice } from '@reduxjs/toolkit';

export const searchResults = {
    name: "searchResults",
    initialState: {
        keywords: ""
        fetching: false,
        results: []
    },

    const Content = {{initialState}} => {
        if (!initialState.keywords && !initialState.fetching) {
            return null
        }

        if (initialState.fetching) {
            return <p>Searching for articles of {initialState.keywords}</p>
        }

        if (initialState.keywords.length) {
            return (
                <ul>
                    {initialState.results.map(result =>(
                        <li>{`https://www.reddit.com/r/${keyword}.json}`}</li>
                    ))}
                </ul>
            )
        }
    }

    reducers: {
        displaySearchResults: (state, action) => {
            state.search[action.payload]
        }
    }
}
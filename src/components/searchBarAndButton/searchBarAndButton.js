import React from 'react';
import { useDispatch } from 'react-redux';
import './searchBarAndButton.css';
import { searchForArticles, setKeyword } from "./searchBarandButtonSlice";
import Comments from '../comments/comments';




export const SearchBarAndButton = ({searchButton}) => {
  const dispatch = useDispatch();
  
  function handleSubmit(e) {
   e.preventDefault();
   const keyword = document.getElementsByName("search")[0].value;
   dispatch(setKeyword(keyword));
   dispatch(searchForArticles(keyword));
  }

  return (
    <div>
    <form onSubmit={ handleSubmit }>
      <input type="text" name="search" />
      <button type="submit">SEARCH RedditLite</button>
    </form>
    </div>
  );
};

export default SearchBarAndButton;
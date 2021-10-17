import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './searchBarAndButton.css';
import { isLoading, selectArticles, selectPostArticles } from "./searchBarandButtonSlice";

export const SearchBarAndButton = ({searchButton}) => {
  const dispatch = useDispatch();
  const SearchBar = useSelector(selectArticles);
  const SearchkwButton = useSelector(selectPostArticles);
  const loadingArticles = useSelector(isLoading);
  

  useEffect(() => {
    dispatch(SearchBar());
  }, [dispatch]);

  useEffect(() => {
    dispatch(SearchkwButton());
  }, [dispatch]);

  if (loadingArticles) {
    return <div>loading state</div>;
  }

  return (
    <form action="GET [/r/subreddit]/search" method="get">
      <input type="text" name="search" />
      <button type="submit">SEARCH</button>
    </form>
  );
};

export default SearchBarAndButton;
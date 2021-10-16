import React { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './searchBarAndButton.css';
import { isLoading, isPosting, selectArticles, selectPostArticles } from "./searchBarandButtonSlice";
import { useEffect } from 'react';

export const searchBarAndButton = ({searchButton}) => {
  const dispatch = useDispatch();
  const searchBar = useSelector(selectArticles);
  const searchButton = useSelector(selectPostArticles);
  const loadingArticles = useSelector(isLoading);
  const postingArticles = useSelector(isPosting);

  useEffect(() => {
    dispatch(searchBar());
  }, [dispatch]);

  if (loadingArticles) {
    return <div>loading state</div>;
  }

  useEffect(() => {
    dispatch(searchButton());
  }, [dispatch]);

  return (
    <form action="GET [/r/subreddit]/search" method="get">
      <input type="text" name="search" />
      <button type="submit">SEARCH</button>
    </form>
  );
};

export default searchBarAndButton;
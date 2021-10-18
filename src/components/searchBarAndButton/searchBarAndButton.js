import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './searchBarAndButton.css';
import { searchForArticles, postArticles, setKeyword, selectArticles, selectPostArticles, isLoading } from "./searchBarandButtonSlice";


export const SearchBarAndButton = ({searchButton}) => {
  // console.log(searchForArticles, postArticles);
  const dispatch = useDispatch();
  // const SearchBar = useSelector(selectArticles);
  // const SearchkwButton = useSelector(selectPostArticles);
  // const loadingArticles = useSelector(isLoading);
  

  // useEffect(() => {
  //   dispatch(SearchBar());
  // });

  // useEffect(() => {
  //   dispatch(SearchkwButton());
  // });

  // if (loadingArticles) {
  //   return <div>loading state</div>;
  //  } 

  function handleSubmit(e) {
   e.preventDefault();
   const keyword = document.getElementsByName("search")[0].value;
   dispatch(setKeyword(keyword));
   dispatch(searchForArticles(keyword));
   dispatch(postArticles(keyword));
  }
  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" name="search" />
      <button type="submit">SEARCH</button>
    </form>
  );
};

export default SearchBarAndButton;
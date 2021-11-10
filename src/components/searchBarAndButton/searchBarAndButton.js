import React from 'react';
import { useDispatch } from 'react-redux';
import { searchForArticles, setKeyword } from "./searchBarandButtonSlice";
import { clearResults } from '../comments/commentsSlice';
// import { useForm } from "react-hook-form";





export const SearchBarAndButton = ({searchButton}) => {
  const dispatch = useDispatch();
  // const reset = useForm();
  
  function handleSubmit(e) {
   e.preventDefault();
   const keyword = document.getElementsByName("search")[0].value;
   dispatch(setKeyword(keyword));
   dispatch(clearResults());
   dispatch(searchForArticles(keyword));
  }
  // handleReset = () => {
  //   this.setState({
  //     itemvalues: [{}]
  //   });
  // };

  return (
    <div>
    <form onSubmit={ handleSubmit }>
      <input type="text" name="search" />
      <button type="submit">SEARCH RedditLite</button>
      {/* <button type="button" onClick={() => reset("")}>New Search</button> */}
    </form>
    </div>
  );
};

export default SearchBarAndButton;
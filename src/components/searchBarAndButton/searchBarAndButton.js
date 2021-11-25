import React from "react";
import { useDispatch } from "react-redux";
import { searchForArticles, setKeyword } from "./searchBarandButtonSlice";
import { clearResults } from "../comments/commentsSlice";

export const SearchBarAndButton = ({ searchButton }) => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const keyword = document.getElementsByName("search")[0].value;
    dispatch(setKeyword(keyword));
    dispatch(clearResults());
    dispatch(searchForArticles(keyword));
  }

  function displayContainer(e) {
    e.preventDefault();
    var border = document.getElementById("container");
    return {
      border.style.display = 'block';
  }
  };

  return (
    <div>
      <form onSubmit={handleSubmit, displayContainer}>
        <input type="text" name="search" />
        <button type="submit">SEARCH RedditLite</button>
      </form>
    </div>
  );
};

export default SearchBarAndButton;

import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import './searchBarAndButton.css';

export const searchBarAndButton = ({searchButton}) => (
    <form action="GET [/r/subreddit]/search" method="get">
      <input type="text" name="search" />
      <button type="submit">SEARCH</button>
    </form>
    )
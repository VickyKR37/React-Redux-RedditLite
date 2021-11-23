import "./App.css";
import React from "react";
import SearchBarAndButton from "../searchBarAndButton/searchBarAndButton";
import Comments from "../comments/comments";
import { Switch } from "react-router";

export default function App() {
  return (
    <div>
      <div>
        <h1>RedditLite</h1>
        <SearchBarAndButton class="button" />
        <Comments />
      </div>
      <div>
        <img class="logo" src={"reddit-logo.png"} alt="Reddit Logo" />
      </div>
    </div>
  );
}

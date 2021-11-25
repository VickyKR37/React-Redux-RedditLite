import "./App.css";
import React from "react";
import SearchBarAndButton from "../searchBarAndButton/searchBarAndButton";
import Comments from "../comments/comments";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
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
      <Switch>
        <Route path="/search" component={SearchBarAndButton} />
        <Route path="/comments" component={Comments} />
        {/* <Route component={Error} /> */}
      </Switch>
    </Router>
  );
}


import './App.css';
import React from "react";

function App() {
  return (
    <div>
    <div>
      <h1>RedditLite</h1>
    </div>
    <form action="GET [/r/subreddit]/search" method="get">
      <input type="text" name="search" />
      <button type="submit">SEARCH</button>
    </form>
    </div>
       
  );
}

export default App;

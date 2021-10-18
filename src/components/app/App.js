
import './App.css';
import React from "react";
import SearchBarAndButton from '../searchBarAndButton/searchBarAndButton';
import Comments from '../comments/comments';

function App() {
  return (
    <div>
    <div>
      <h1>RedditLite</h1>
      <SearchBarAndButton class="button"/>
      <Comments />
    </div>
    
  </div>
    
   
       
  );
}

export default App;

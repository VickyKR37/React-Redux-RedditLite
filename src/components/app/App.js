
import './App.css';
import React from "react";
import SearchBarAndButton from '../searchBarAndButton/searchBarAndButton';
//import { selectArticles } from '../searchBarAndButton/searchBarandButtonSlice';
import { useSelector } from 'react-redux';
import { selectPermalink } from '../comments/commentsSlice';
import Comments from '../comments/comments';
 



export default function App() {
  //const articles = useSelector(selectArticles);
  //const dispatch = useDispatch();
  //const comments = useSelector(selectComments);
  let permalink = useSelector(selectPermalink);

  
  return (
    <div>
    <div>
      <h1>RedditLite</h1>
      <SearchBarAndButton class="button" />
      <Comments />
    </div>
    <div>
      <img src={'src\icon\reddit-logo.png'} alt="Reddit Logo"/>
    </div>
  </div> 
  );
}

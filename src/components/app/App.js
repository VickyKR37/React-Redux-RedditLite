
import './App.css';
import React from "react";
import SearchBarAndButton from '../searchBarAndButton/searchBarAndButton';
import { selectArticles } from '../searchBarAndButton/searchBarandButtonSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setPermalink, loadComments, selectComments, selectPermalink } from '../comments/commentsSlice';
import Comments from '../comments/comments';
//import Comments from '../comments/comments';



export default function App() {
  const articles = useSelector(selectArticles);
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  let permalink = useSelector(selectPermalink);


  function clickArticle(e) {
    console.log(e.target);
    dispatch(setPermalink(e.target.id));
    dispatch(loadComments(e.target.id));
  }
  
  return (
    <div>
    <div>
      <h1>RedditLite</h1>
      <SearchBarAndButton class="button" />
      {/* {articles.map(article => <p>{article.data.title}</p> )} */}
      <Comments />
      { comments.length > 0 ? comments.map( (comment, i) => (<p key={i}> { comment.data.body } </p>)) :
      articles.map((article, index) => (<p key={index} id={article.data.permalink} onClick={clickArticle} >
      {article.data.title}</p>)) }
    </div>
  </div> 
  );
}

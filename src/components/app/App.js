
import './App.css';
import React from "react";
import SearchBarAndButton from '../searchBarAndButton/searchBarAndButton';
import { selectArticles } from '../searchBarAndButton/searchBarandButtonSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setPermalink, loadComments, selectComments, selectPermalink } from '../comments/commentsSlice';
import Comments from '../comments/comments';



export default function App() {
  const articles = useSelector(selectArticles);
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const permalink = useSelector(selectPermalink);


  function clickArticle(e) {
    console.log(e.target);
    dispatch(setPermalink(e.target.id));
    dispatch(loadComments(e.target.id));
  }

  function handleSelectArticle(e) {
    console.log(e, e.target.id)
    dispatch(loadComments(permalink));
    if (comments) {
      return <Comments/>
    }
  }
  
  return (
    <div>
    <div>
      <h1>RedditLite</h1>
      <SearchBarAndButton class="button" />
      {articles.map(article => <p>{article.data.title}</p> )}
      <Comments class="comments" />
      if (permalink) {
     return (
     <div>
       {comments.map((comment, index) => (<p key={index}>{comment.data.body}</p>))}
     </div> )
   }
   else if (!articlesLoading && articles.length !== 0){
     return (
     <>
       {articles.map((article, index) => (<p key={index} id={article.data.permalink} onClick={clickArticle}>{article.data.title}</p>) )}
     </>
  
     )
   }
    </div>
  </div>
       
  );
}

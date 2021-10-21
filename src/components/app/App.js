
import './App.css';
import React from "react";
import SearchBarAndButton from '../searchBarAndButton/searchBarAndButton';
import Comments from '../comments/comments';
import { selectArticles } from '../searchBarAndButton/searchBarandButtonSlice';
import { useSelector, useDispatch } from 'react-redux';
import { isLoading } from '../searchBarAndButton/searchBarandButtonSlice';
import { loadComments, isLoadingComments, selectPermalink, setPermalink } from '../comments/commentsSlice';

export default function App() {
  const articles = useSelector(selectArticles);
  const articlesLoading = useSelector(isLoading);
  const comments = useSelector(isLoadingComments);
  const dispatch = useDispatch();
  const permalink = useSelector(selectPermalink);


  function clickArticle(e) {
    console.log(e.target);
    dispatch(setPermalink(e.target.id));
    const chosenArticle = setPermalink(e.target.id);
    dispatch(loadComments(chosenArticle));


  }

  if (permalink) {
    return <p>Comments:</p>
  }
  else if (!articlesLoading && articles.length !== 0){
    return (
    <>
      {articles.map((article, index) => (<p key={index} id={article.data.permalink} onClick={clickArticle}>{article.data.title}</p>) )}
    </>
  
    )
  }

   function handleSelectArticle(e) {
     console.log(e, e.target.id)
     dispatch(loadComments(permalink));
     if (comments) {
       return <Comments />
     }
   }
  return (
    <div>
    <div>
      <h1>RedditLite</h1>
      <SearchBarAndButton class="button" />
      {articles.map(article => <p>{article.data.title}</p> )}
      <hr />
      {
      articlesLoading === true ? <p>Getting articles...</p> : 
      articles.map(article => <p id={article.data.permalink}
      onClick={handleSelectArticle}>{article.data.title}</p>)
      }
    </div>
  </div>
       
  );
}

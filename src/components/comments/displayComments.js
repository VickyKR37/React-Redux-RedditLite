import React from 'react';
import SearchBarAndButton from '../searchBarAndButton/searchBarAndButton';
import Comments from '../comments/comments';
import { selectArticles } from '../searchBarAndButton/searchBarandButtonSlice';
import { useSelector, useDispatch } from 'react-redux';
import { isLoading } from '../searchBarAndButton/searchBarandButtonSlice';
import { selectPermalink, setPermalink, loadComments, selectComments } from '../comments/commentsSlice';

export default function DisplayComments() {
  const articles = useSelector(selectArticles);
  const articlesLoading = useSelector(isLoading);
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();
  const permalink = useSelector(selectPermalink);
  
  
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
      <p>
      {articlesLoading === true ? <p>Getting articles...</p> : 
      articles.map((article, index) => <p id={article.data.permalink} key={index}
      onClick={handleSelectArticle}>{article.data.title}</p>)}
      </p>
      </div>
   )

}
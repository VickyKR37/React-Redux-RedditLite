
import './App.css';
import React from "react";
import SearchBarAndButton from '../searchBarAndButton/searchBarAndButton';
import Comments from '../comments/comments';
import { selectArticles } from '../searchBarAndButton/searchBarandButtonSlice';
import { useSelector, useDispatch } from 'react-redux';
import { isLoading } from '../searchBarAndButton/searchBarandButtonSlice';
import { selectPermalink, setPermalink, selectLoadComments, loadComments, selectComments, isLoadingComments } from '../comments/commentsSlice';

export default function App() {
  const articles = useSelector(selectArticles);
  const articlesLoading = useSelector(isLoading);
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();
  const permalink = useSelector(selectPermalink);
  const loadingComments = useSelector(isLoadingComments)

  return (
    <div>
    <div>
      <h1>RedditLite</h1>
      <SearchBarAndButton class="button" />
      {articles.map(article => <p>{article.data.title}</p> )}
    </div>
  </div>
       
  );
}

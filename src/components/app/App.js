
import './App.css';
import React from "react";
import SearchBarAndButton from '../searchBarAndButton/searchBarAndButton';
import Comments from '../comments/comments';
import { selectArticles } from '../searchBarAndButton/searchBarandButtonSlice';
import { useSelector } from 'react-redux';
import { isLoading } from '../searchBarAndButton/searchBarandButtonSlice';


export default function App() {
  const articles = useSelector(selectArticles);
  const articlesLoading = useSelector(isLoading);

  if (!articlesLoading && articles.length !== 0){
    return (
    <>
      {articles.map((article, index) => (<p key={index}>{article.data.title}</p>) )}
    </>
  
    )
  }
  return (
    <div>
    <div>
      <h1>RedditLite</h1>
      <SearchBarAndButton class="button" />
      {articles.map(article => <p>{article.title}</p> )}

      
    </div>
    
  </div>
    
   
       
  );
}

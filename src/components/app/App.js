
import './App.css';
import React from "react";
import SearchBarAndButton from '../searchBarAndButton/searchBarAndButton';
import { selectArticles } from '../searchBarAndButton/searchBarandButtonSlice';
import { useSelector } from 'react-redux';


export default function App() {
  const articles = useSelector(selectArticles);
  
  return (
    <div>
    <div>
      <h1>RedditLite</h1>
      <SearchBarAndButton class="button" />
      {articles.map(article => <p>{article.data.title}</p> )}
      <displayComments/>
    </div>
  </div>
       
  );
}

import React from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import { loadComments } from './commentsSlice';
import { selectArticles } from '../searchBarAndButton/searchBarandButtonSlice';


    function Comments() {
    const comments = useSelector(loadComments);
    const articles = useSelector(selectArticles);
    const dispatch = useDispatch();


    function handleClick(e) {
        e.preventDefault();
        const article = document.getElementById();
        dispatch(loadComments(article.data.title));


    return (
        <div className="article">
            <h1>{ articles.data.title }</h1>
        </div>
    )

};


export default Comments;
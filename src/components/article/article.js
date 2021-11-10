import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLoadingArticle, selectLoadArticle, hasError, selectHeadline, setHeadline } from './articleSlice';

    export default function Comments() {
        const article = useSelector(selectLoadArticle);
        const dispatch = useDispatch();
        let articleHeadline = useSelector(selectHeadline);

        function clickHeadline(e) {
            console.log(e.target);
            dispatch(articleHeadline(e.target.id));
            dispatch(article(e.target.id));
          }

        return (
            <div>
            <div id="container">
                { headline.length > 0 ? comments.map( (comment, i) => (<p key={i} class="results"> { article.data.body } </p>)) :
                articles.map((article, index) => (<p class="article" key={index} id={article.data.permalink} onClick={clickArticle} >
                {article.data.title}</p>)) }  
            </div>
            </div>
        
        )}
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPermalink, loadComments, selectComments, selectPermalink } from '../comments/commentsSlice';
import { selectArticles } from '../searchBarAndButton/searchBarandButtonSlice';

    export default function Comments() {
        const articles = useSelector(selectArticles);
        const dispatch = useDispatch();
        const comments = useSelector(selectComments);
        let permalink = useSelector(selectPermalink);

        function clickArticle(e) {
            console.log(e.target);
            dispatch(setPermalink(e.target.id));
            dispatch(loadComments(e.target.id));
          }

          function headline() {
              if (comments.length == 0 && articles.length > 0) {
                  return <h4 class="headline">Hi! Click on a headline for a list of comments associated with the article!</h4>
              } 
          }

        return (
            <div>
            <div class="headline">
            {headline()}
            </div>
            <div id="container">
                { comments.length > 0 ? comments.map( (comment, i) => (<p key={i} class="results"> { comment.data.body } </p>)) :
                articles.map((article, index) => (<p class="article" key={index} id={article.data.permalink} onClick={clickArticle} >
                {article.data.title}</p>)) }  
            </div>
            </div>
        
        )}

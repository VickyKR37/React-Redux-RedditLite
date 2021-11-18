import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPermalink, loadComments, selectComments, selectPermalink } from '../comments/commentsSlice';
import { selectArticles } from '../searchBarAndButton/searchBarandButtonSlice';
import './comments.css';

    export default function Comments() {
        const articles = useSelector(selectArticles);
        const dispatch = useDispatch();
        const comments = useSelector(selectComments);
        let permalink = useSelector(selectPermalink);

        function getTime() {
            let time = articles.data.created;
            return time.toLocaleString();
        }

        function clickArticle(e) {
            console.log(e.target);
            dispatch(setPermalink(e.target.closest(".article").id ));
            dispatch(loadComments(e.target.closest(".article").id ));
            return (
                <div>
                    <h6>{getTime}</h6>
                    <h6>{articles.data.likes}</h6>
                    <h6>{articles.data.name}</h6>
                    <h6>Points and Comments</h6>
                    <h6>{articles.data.ups}</h6>
                    <h6>{articles.data.downs}</h6>
                    <h6>Users possible actions</h6>>
                </div>
            )
          }

          function headline() {
              if (comments.length == 0 && articles.length > 0) {
                  return <h4 class="headline">Hi! Click on a headline for a list of comments associated with the article!</h4>
              } 
          }

          function ArticleView(article, index) {
            // returns an article view
            return (
                <div class="article" key={index} id={article.data.permalink} onClick={clickArticle} >
                    <h5>{article.data.title}</h5>
                    <img class="article-img" src={article.data.url}/>
                    <h6>{article.data.created.toLocaleString()}</h6>
                    <h6>{article.data.likes}</h6>
                    <h6>{article.data.name}</h6>
                    <h6>Points and Comments</h6>
                    <h6>{article.data.ups}</h6>
                    <h6>{article.data.downs}</h6>
                    <h6>Users possible actions</h6>>
                </div>
            )
          }

        return (
            <div>
            <div class="headline">
            {headline()}
            </div>
            <div id="container">
            {comments.length > 0 ? comments.map((comment, i) => (<p key={i} class="results"> {comment.data.body} {comment.data.body.author} </p>)) :
                    articles.map(ArticleView) }
           
            </div>
            </div>
        
        )}
    

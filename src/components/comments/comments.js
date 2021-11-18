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
                    <h6>Username: {articles.data.name}</h6>
                    <h6>Time posted: {getTime}</h6>
                    <h6>Subreddit: {articles.data.display_name}</h6>
                    <h6>Likes: {articles.data.likes}</h6>
                    <h6>Points and Comments</h6>
                    <h6>Up Votes: {articles.data.ups}</h6>
                    <h6>Down Votes: {articles.data.downs}</h6>
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
                    <h6>Username: {article.data.author}</h6>
                    <h6>Time posted: {getTime}</h6>
                    <h6>Subreddit: {article.data.display_name}</h6>
                    <h6>Likes: {article.data.likes}</h6>
                    <h6>Points and Comments</h6>
                    <h6>Up Votes: {article.data.ups}</h6>
                    <h6>Down Votes: {article.data.downs}</h6>
                    <h6>Users possible actions</h6>
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
    

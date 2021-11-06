import React from 'react';

    export default function Comments() {

        return (
            <div>
                <h6 class="headline">Hi! Click on a headline for a list of comments associated with the article!</h6>
                { comments.length > 0 ? comments.map( (comment, i) => (<p key={i}> { comment.data.body } </p>)) :
      articles.map((article, index) => (<p class="article" key={index} id={article.data.permalink} onClick={clickArticle} >
      {article.data.title}</p>)) }
            </div>
        
        )}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPermalink,
  loadComments,
  selectComments,
  selectPermalink,
} from "../comments/commentsSlice";
import { selectArticles } from "../searchBarAndButton/searchBarandButtonSlice";
import "./comments.css";

export default function Comments() {
  const articles = useSelector(selectArticles);
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  let permalink = useSelector(selectPermalink);

  // function getTime(article) {
  //     let time = article.data.created;
  //     return time.toLocaleString();
  // }

  function displayExtraInfo() {
    const article = articles.find(
      (article) => article.data.permalink === permalink
    );
    return (
      <div>
        <h5>{article.data.title}</h5>
        <h6>Posted By: {article.data.author}</h6>
        <img className="article-img" src={article.data.url} />
        {/* <h6>Time posted: {getTime}</h6> */}
        <h6>Subreddit: {article.data.display_name}</h6>
        <h6>Comments: {article.data.num_comments}</h6>
        <h6>Up Votes: {article.data.ups}</h6>
        <h6>Down Votes: {article.data.downs}</h6>
        {comments.map((comment, i) => (
          <p key={i} class="results">
            {" "}
            <span className="commentAuthor">{comment.data.author}</span>
            {comment.data.body}{" "}
          </p>
        ))}
      </div>
    );
  }

  function clickArticle(e) {
    console.log(e.target);
    dispatch(setPermalink(e.target.closest(".article").id));
    dispatch(loadComments(e.target.closest(".article").id));
  }

  function headline() {
    if (comments.length == 0 && articles.length > 0) {
      return (
        <h4 class="headline">
          Hi! Click on a headline for a list of comments associated with the
          article!
        </h4>
      );
    }
  }

  function ArticleView(article, index) {
    // returns an article view
    return (
      <div
        class="article"
        key={index}
        id={article.data.permalink}
        onClick={clickArticle}
      >
        <h5>{article.data.title}</h5>
        <img class="thumbnail" src={article.data.thumbnail} />
        <h6>Posted By: {article.data.author}</h6>
        {/* <h6>Time posted: {getTime()}</h6> */}
        <h6>Subreddit: {article.data.display_name}</h6>
        <h6>Comments: {article.data.num_comments}</h6>
        <h6>Up Votes: {article.data.ups}</h6>
        <h6>Down Votes: {article.data.downs}</h6>
        <h6>Users possible actions</h6>
      </div>
    );
  }

  return (
    <div>
      <div class="headline">{headline()}</div>
      <div id="container">
        {comments.length > 0 ? displayExtraInfo() : articles.map(ArticleView)}
      </div>
    </div>
  );
}

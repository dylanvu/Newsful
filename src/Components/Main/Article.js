import React from 'react';

function Article(props) {
  const { article } = props;
  return (
    <div className="Article"
      key={article.title}>
      {/* <img src={article.urlToImage} alt={article.title}/> */}
      <p><a href={article.url}>{article.title}</a></p>
      <p>{article.author}</p>
      <p>{article.description}</p>
      <p>{article.publishedAt}</p>
      <p><a href={article.sourceUrl}>{article.sourceName}</a></p>
      <br></br>
    </div>
  );
}

export default Article;

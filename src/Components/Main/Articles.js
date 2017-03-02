import React from 'react';

function Articles(props) {
  const { articles } = props;
  return (
    <div className="Articles">
      { articles.map(article => (
        <div key={article.title}>
          <div className="Article">
            {/* <img src={article.urlToImage} alt={article.title}/> */}
            <p><a href={article.url}>{article.title}</a></p>
            <p>{article.author}</p>
            <p>{article.description}</p>
            <p>{article.publishedAt}</p>
            <p><a href={article.sourceUrl}>{article.sourceName}</a></p>
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default Articles;

import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

function Articles(props) {
  const { articles } = props;
  return (
    <div className="Articles">
      { articles.map(article => (
        <div key={article.title}>
          <div className="Article">
            <div className="Source">
              <Button><Glyphicon glyph="bookmark"/></Button>
              <p><a href={article.sourceUrl}>{article.sourceName}</a>, {article.author}</p>
            </div>
            <p className="ArticleDate">
              {article.publishedAt}
            </p>
            <img
              className="ArticleImg" src={article.urlToImage} alt={article.title}/>
            <p className="ArticleTitle"><a href={article.url}>{article.title}</a></p>
            <p className="ArticleDesc">
              {article.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Articles;

import React from 'react';
import { Button, Glyphicon, Thumbnail } from 'react-bootstrap';

function formatTime(timestamp) {
  const publishedAt = new Date(timestamp);
  const offset = publishedAt.getTimezoneOffset() * 60 * 1000;
  const localTime = new Date(publishedAt.getTime() + offset);
  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
  return localTime.toLocaleString(undefined, options);
}

function Articles(props) {
  const { articles, onClick } = props;
  return (
    <div className="Articles">
      { articles.map(article => (
        <Thumbnail
          key={article.title}
          src={article.urlToImage} alt={article.title}
        >
          <p>
            <a href={article.sourceUrl}>{article.sourceName}</a>
            { article.author
              ? article.author.includes('http')
                ? null : ` • ${article.author}`
              : null}</p>
          <p className="ArticleDate">
            {formatTime(article.publishedAt)}
          </p>
          <p className="ArticleTitle"><a href={article.url}>{article.title}</a></p>
          <Button onClick={() => onClick(article)}><Glyphicon glyph="bookmark"/></Button>
        </Thumbnail>
      ))}
    </div>
  );
}

export default Articles;

import React from 'react';
import Article from './Article';

function Articles(props) {
  const { articles } = props;
  return (
    <div className="Articles">
      { articles.map(article => (
        <Article article={article} key={article.title}/>
      ))}
    </div>
  );
}

export default Articles;

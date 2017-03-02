import React from 'react';
import Article from './Article';

function Articles(props) {
  const { articles } = props;
  return (
    <div className="Articles">
      { articles.map(ele => (
        <Article article={ele}/>
      ))}
    </div>
  );
}

export default Articles;

import React from 'react';

function Articles(props) {
  const { articles } = props;
  return (
    <div className="Articles">
      { articles.map(ele => (
        <div key={ele.title}>
          {/* <img src={ele.urlToImage} alt={ele.title}/> */}
          <p><a href={ele.url}>{ele.title}</a></p>
          <p>{ele.author}</p>
          <p>{ele.description}</p>
          <p>{ele.publishedAt}</p>
          <p><a href={ele.sourceUrl}>{ele.sourceName}</a></p>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default Articles;

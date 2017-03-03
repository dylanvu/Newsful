import React from 'react';
import Articles from './Articles';

function Bookmarks(props) {
  const { bookmarks, onClick } = props;
  return (
    <div>
      <h2>Bookmarks</h2>
      <Articles articles={bookmarks} onClick={onClick} />
    </div>
  );
}

export default Bookmarks;

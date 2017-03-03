import React from 'react';
import Articles from './Articles';

function Bookmarks(props) {
  const { bookmarks, onClick } = props;
  return (
    <Articles articles={bookmarks} onClick={onClick} />
  );
}

export default Bookmarks;

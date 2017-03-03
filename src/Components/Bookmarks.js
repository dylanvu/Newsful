import React, { Component } from 'react';
import Articles from './Articles';
import axios from 'axios';

class Bookmarks extends Component {
  constructor(props) {
    super(props);

    this.state = {articles: []}
  }

  componentDidMount() {
    this.fetchBookmarks();
  }

  fetchBookmarks() {
    axios.get('bookmarks')
    .then((res) => {
      console.log(res);
      this.setState({bookmarks: res.data});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { bookmarks } = this.state;
    return (
      <Articles articles={bookmarks} />
    );
  }
}

export default Bookmarks;
